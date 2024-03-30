import React, { 
    useRef,
    useMemo, 
    useState, 
    useEffect, 
    useContext,
    useCallback
} from "react";

import useLang from "../../../hooks/useLang.js";
import useFlag from "../../../hooks/useFlag.js";
import Context from "../../../utils/context.js";
import Currency from "../../../utils/currency.js";
import buildClassName from "../../../utils/buildClassName.js";
import renderInventory from "../helpers/renderInventory.js";

import { randomFloat } from "../../../utils/chance.js";
import { callPopupNotify } from "./Roulette.js";
import { initializeCanvas } from "../helpers/canvas.js";
import { deleteItem, withdrawBalance } from "../helpers/transactions.js";

import Item from "../../ui/Item.js";
import Button from "../../ui/Button.js";
import ItemPage from "../../ui/ItemPage.js";

import "./Crash.css";

const CRASH_POWER = 3.5;
const CRASH_EXPONENT = 430;

const curve_ft = time => time ** CRASH_POWER / (time * CRASH_EXPONENT);

const CHANCES = [
    { range: [1.0, 1.15], chance: [0, 5] }, 
    { range: [1.15, 1.50], chance: [5, 32] }, 
    { range: [1.50, 2.20], chance: [32, 70] }, 
    { range: [2.20, 3.50], chance: [70, 85] }, 
    { range: [3.50, 8.00], chance: [85, 92] }, 
    { range: [8.50, 15.00], chance: [92, 97] }, 
    { range: [15.00, 150], chance: [97, 100] }
];

const DEFAULT_STATE = {
    amount: 0,
    mode: 0,
    skin: null,
    autoStopAt: null,
    isStarted: false,
}

const DEFAULT_INTERACTIVE_STATE = {
    multiplier: 1,
    time: 0
}

const HANDLER_DEFAULT_STATE = {
    canvas: null,
    ctx: null,
    width: null,
    height: null,
    finalMultiplier: null,
    lx: 0,
    ly: 0,
    startTime: 0,
    isStopped: false,
}

const MINIMAL_BET = 0.01;
const MINIMAL_AUTO_STOP = 1.05;

const Crash = () => {
    const { GlobalState, setGlobalState } = useContext(Context);

    const lang = useLang(GlobalState, setGlobalState);

    const [ isSkinSelection, openSkinSelection, closeSkinSelection ] = useFlag(false);

    const canvasRef = useRef(null);
    const [ state, setState ] = useState(DEFAULT_STATE);

    const [ inputs, setInputs ] = useState({
        bet: 0,
        autoStopAt: 0
    });

    const [ latestMultipliers, setLatestMultipliers ]  = useState([]);
    const [ interactiveState, setInteractiveState ] = useState(DEFAULT_INTERACTIVE_STATE);

    const handleAutoStopChange = e => {
        if (state.isStarted) return;

        var { value } = e.currentTarget;

        var isValidValue = !!value && /^[0-9,.]{1,}$/ig.test(value) && value >= MINIMAL_AUTO_STOP;

        setState(prev => ({
            ...prev,
            autoStopAt: isValidValue ? Number(value) : false
        }));

        setInputs(prev => ({
            ...prev,
            autoStopAt: value
        }));
    }

    const handleChangeMode = mode => {
        if (state.isStarted) return;

        setState(prev => {
            let skin = !mode ? null : prev.skin;
            let amount = null;

            setInputs(p => ({ ...p, bet: 0 }));

            return { 
                ...prev,
                mode, skin, amount
            }
        });
    }

    const handleBetChange = e => {
        if (state.isStarted) return;

        var { value } = e.currentTarget;

        var isValidValue = !!value && /^[0-9e,.]{1,}$/ig.test(value) && value >= MINIMAL_BET && value <= GlobalState.profile.balance;

        setState(prev => ({
            ...prev,
            amount: isValidValue ? Number(value) : 0
        }));

        setInputs(prev => ({
            ...prev,
            bet: value
        }));
    }

    const handleAddLatestMultiplier = (multiplier, meta) => {
        setLatestMultipliers(prev => [
            { multiplier, ...meta },
            ...prev.slice(0, 14)
        ]);
    }

    const Handler = useMemo(() => HANDLER_DEFAULT_STATE, []);

    const HandlerInit = () => {
        Handler.canvas = canvasRef.current;

        const { ctx, width, height } = initializeCanvas(Handler.canvas);

        Handler.lx = 0;
        Handler.ly = 0;
        Handler.ctx = ctx;
        Handler.width = width;
        Handler.startTime = 0;
        Handler.height = height;
        Handler.isStopped = false;
        Handler.finalMultiplier = null;
    }

    const HandlerStart = () => {
        if (state.isStarted || state.amount <= 0) return;

        if (state.skin) {
            deleteItem(setGlobalState, state.skin.uid);
        } else {
            withdrawBalance(setGlobalState, state.amount);
        }

        setState(prev => ({ ...prev, isStarted: true }));

        const chance = randomFloat(0, 100);
        var range = null;

        Object.values(CHANCES).forEach(value => {
            if (range) return;

            if (chance >= value.chance[0] && chance < value.chance[1]) {
                range = value.range;
            }
        });
        
        Handler.finalMultiplier = Number(randomFloat(...range).toFixed(2));

        Handler.startTime = +new Date();
        HandlerRender();
    }

    const HandlerGetProfit = () => {
        if (Handler.isStopped) return;

        setInteractiveState(prev => {
            var multiplier = prev.multiplier;
            var received = Number((state.amount * multiplier).toFixed(2));

            Handler.ctx.closePath();

            withdrawBalance(setGlobalState, -received);

            handleAddLatestMultiplier(Handler.finalMultiplier.toFixed(2), {
                received,
                stoppedAt: multiplier
            });

            callPopupNotify(
                document.querySelector(".Crash .crash-popup-notify"),
                `+ ${Currency.renderPrice(GlobalState, received, true)}`, "rgb(12, 217, 157)"
            );

            return prev;
        });

        HandlerStop();
    };

    const HandlerGetDefeat = () => {
        if (Handler.isStopped) return;

        handleAddLatestMultiplier(Handler.finalMultiplier.toFixed(2), { lost: state.amount });

        callPopupNotify(
            document.querySelector(".Crash .crash-popup-notify"),
            `- ${Currency.renderPrice(GlobalState, state.amount.toFixed(2), true)}`, "red"
        );

        HandlerStop();
    }

    const HandlerStop = () => {
        if (Handler.isStopped) return;

        Handler.isStopped = true;

        setTimeout(() => {
            HandlerInit();
            
            setInputs(prev => ({ ...prev, bet: 0 }));
            setInteractiveState(DEFAULT_INTERACTIVE_STATE);

            setState(prev => ({
                ...DEFAULT_STATE,
                mode: prev.mode,
                autoStopAt: prev.autoStopAt
            }));

            HandlerRenderDefaultState();
        }, 1500);
    }

    const HandlerTranslateToCoordinates = (fx, fy) => {
        const x = fx;
        const y = Handler.height - fy;

        return [ x, y ];
    }

    const HandlerRenderGrid = (c, t) => {
        t = Math.max(t, 20);
        c = Math.max(1 + c, 5);

        Handler.ctx.fillStyle = "rgba(255, 255, 255, 0.15)";

        let stepX = Handler.width / t * 10;
        let stepY = Handler.height / c * 5;

        for (let x = 0, i = 0; x < Handler.width; x += stepX, i++) {
            Handler.ctx.fillRect(...HandlerTranslateToCoordinates(x, Handler.height), 1, Handler.height);
        }

        for (let y = 0, i = 0; y < Handler.height; y += stepY, i++) {
            Handler.ctx.fillRect(...HandlerTranslateToCoordinates(0, y), Handler.width, 1);
        }

        Handler.ctx.font = "12px Arial";
        Handler.ctx.fillStyle = "#fff";
        Handler.ctx.fillText("x" + c.toFixed(1), 10, 14);
        Handler.ctx.fillText(t.toFixed(1) + "s", Handler.width - 40, Handler.height - 14);
    }

    const HandlerRenderAxes = () => {
        Handler.ctx.fillStyle = "#fff";
        Handler.ctx.fillRect(0, 0, 2, Handler.height);
        Handler.ctx.fillRect(0, Handler.height - 2, Handler.width, 2);
    }

    const HandlerRenderMultiplier = (y, lastRender) => {
        let multiplier = 1 + (Number.isNaN(y) ? 0 : y);
        let shade = Math.max(255 - Math.floor(y * 12), 0);
        let size = Math.min(32 + y / 2, 44);
        let text = "x" + multiplier.toFixed(2);

        Handler.ctx.font = `bold ${size}px Arial`;
        Handler.ctx.textAlign = "center";
        Handler.ctx.fillStyle = lastRender ? "red" : `rgba(255, ${255}, ${shade})`;
        Handler.ctx.fillText(text, Handler.width / 4, Handler.height / 2);
    }

    const HandlerRender = () => {
        if (!canvasRef.current || Handler.isStopped) return;

        Handler.ctx.clearRect(0, 0, Handler.width, Handler.height);
        Handler.ctx.textAlign = "start";

        const t = ((+new Date() - Handler.startTime) / 1000);
        const y = Number(curve_ft(t));

        var realY = Number((1 + y).toFixed(2));
        var lastRender = false;

        if (state.autoStopAt && realY >= state.autoStopAt) {
            HandlerGetProfit();
        }

        if (realY >= Handler.finalMultiplier) {
            HandlerGetDefeat();
            lastRender = true;
        }

        const stepX = Handler.width / 20;
        const stepY = Handler.height / 5;

        HandlerRenderGrid(y, t);

        const [ x1, y1 ] = HandlerTranslateToCoordinates(Handler.lx * stepX, Handler.ly * stepY);
        const [ x2, y2 ] = HandlerTranslateToCoordinates(t * stepX, y * stepY);

        Handler.ctx.lineCap = "round";
        Handler.ctx.lineWidth = 5;
        Handler.ctx.strokeStyle = lastRender ? "red" : "lime";

        Handler.ctx.moveTo(x1, y1 - 1);
        Handler.ctx.lineTo(x2, y2 - 1);
        Handler.ctx.stroke();

        Handler.ctx.fillStyle = "#fff";
        Handler.ctx.fillRect(0, 0, 2, Handler.height);
        Handler.ctx.fillRect(0, Handler.height - 2, Handler.width, 2);

        HandlerRenderAxes();

        Handler.lx = t;
        Handler.ly = y;

        HandlerRenderMultiplier(y, lastRender);

        setInteractiveState({
            multiplier: 1 + (Number.isNaN(y) ? 0 : y),
            time: t
        });

        if (lastRender) return;

        requestAnimationFrame(() => {
            HandlerRender();
        });
    }

    const HandlerRenderDefaultState = () => {
        Handler.ctx.clearRect(0, 0, Handler.width, Handler.height);
        HandlerRenderGrid(0, 0);
        HandlerRenderAxes();
        HandlerRenderMultiplier(0);
    }

    useEffect(() => {
        if (isSkinSelection) return;
 
        HandlerInit();
        HandlerRenderDefaultState();
    }, [isSkinSelection]);

    const renderMode = () => {
        if (!state.mode) return <>
            <div className="input-line">
                <span>{lang.crash.bet}:</span>
                <span>
                    <input 
                        type="number"
                        className="crash-bet"
                        placeholder="N"
                        min="1"
                        step="1"
                        value={inputs.bet}
                        disabled={state.isStarted}
                        onChange={handleBetChange}
                    /> $
                </span>
            </div>

            <div className="input-line">
                <span>{lang.common.balance}:</span> 
                <span>{Currency.renderPrice(GlobalState, GlobalState.profile.balance)}</span>
            </div>
        </>

        return <div className="crash-selected-item">
            {state.skin 
                ? <Item item={state.skin} onClick={!state.isStarted && openSkinSelection} ripple={false} />
                : <div className="VoidItem" onClick={!state.isStarted && openSkinSelection}>Select Item</div>
            }
        </div>
    }

    const renderSkinSelector = () => {
        let inventory = renderInventory(GlobalState.profile.inventory).inventory;

        const selectItem = item => {
            if (item) setState(prev => ({ ...prev, skin: item, amount: item.price }));

            closeSkinSelection();
        }

        return (
            <div className="item-selection">
                <div className="tab-title mini"><span>Select an item:</span></div>
                <ItemPage 
                    ripple={false}
                    items={inventory}
                    onClick={selectItem}
                />
            </div>
        );
    }

    const renderLatestMultipliers = () => {
        const getRarityColor = float => {
            if (float <= 1.15) return "covert";
            if (float <= 3) return "industrial";
            if (float <= 10) return "classified";

            return "gold";
        }

        var getTitle = tab => {
            return [
                `Multiplier: ${tab.multiplier}`,
                tab.stoppedAt && `Stopped At: x${tab.stoppedAt.toFixed(2)}`,
                tab.received && `Received: $${tab.received.toLocaleString()}`,
                tab.lost && `Lost: $${tab.lost.toLocaleString()}`
            ].filter(Boolean).join("\n");
        }

        return (
            <div className="latest-multipliers">
                <div className="subtitle">{lang.crash.latest}:</div>
                {latestMultipliers.map((item, i) => (
                    <div
                        key={i}
                        title={getTitle(item)}
                        children={item.multiplier}
                        className={buildClassName("latest opacity-fade RarityShade", getRarityColor(item.multiplier))}
                    />
                ))}      
            </div>
        );
    }

    const renderCrash = () => {
        return <>
            <div className="main-area">
                <canvas id="crash-animation" ref={canvasRef}></canvas>
                <div className={buildClassName("canvas-controls", !state.amount && "disabled")}>
                    <div className="control-line">
                        <span>{lang.crash.multiplier}:</span>
                        <span>x{interactiveState.multiplier.toFixed(2)}</span>
                    </div>
                    <div className="control-line">
                        <span>{lang.crash.timePassed}:</span>
                        <span>{interactiveState.time.toFixed(1)} sec</span>
                    </div>
                    <div className="control-line">
                        <span>{lang.crash.profit}:</span>
                        <span>{Currency.renderPrice(GlobalState, state.amount * interactiveState.multiplier)}</span>
                    </div>
                    <div className="control-line">
                        <span>{lang.crash.autoStop}:</span>
                        <span>{state.autoStopAt ? `x${state.autoStopAt.toFixed(2)}` : "None"}</span>
                    </div>
                    <div className="control-line button">
                        {state.isStarted ? <Button
                            children={lang.crash.cashOut}
                            onClick={() => HandlerGetProfit()}
                        /> : <Button 
                            children={lang.common.start}
                            onClick={() => HandlerStart()}
                            disabled={!state.amount}
                        />}
                        <div className="crash-popup-notify" />
                    </div>
                </div>
            </div>
                            
            {renderLatestMultipliers()}

            <div className="inputs-area">
                <div className={buildClassName("tab-list", state.isStarted && "disabled")}>
                    <span 
                        children="Money"
                        title="Place a Money Bet"
                        onMouseDown={() => handleChangeMode(0)}
                        className={buildClassName(!state.mode && "active")}
                    />
                    <span 
                        children="Skin"
                        title="Place a Bet with Skin"
                        onMouseDown={() => handleChangeMode(1)}
                        className={buildClassName(state.mode && "active")}
                    />
                </div>
                <div className="target-input input-column">
                    {renderMode()}
                </div>
                <div className="extra-input input-column">
                    <div className="input-line">
                        <span>{lang.crash.totalAmount}:</span> 
                        <span>{Currency.renderPrice(GlobalState, state.amount)}</span>
                    </div>
                    <div className="input-line">
                        <span>{lang.crash.autoStopAt}:</span>
                        <span>
                            x<input 
                                type="number"
                                className="auto-stop-at-input"
                                placeholder="N"
                                min="1.05"
                                step="0.05"
                                disabled={state.isStarted}
                                value={inputs.autoStopAt}
                                onChange={handleAutoStopChange}
                            />
                        </span>
                    </div>

                    <div className="crash-input-errors">
                        {!state.mode && inputs.bet < MINIMAL_BET && (
                            <span className="input-error">{lang.crash.betError.replace("{d}", MINIMAL_BET)}</span>
                        )}

                        {inputs.autoStopAt >= 1 && inputs.autoStopAt < MINIMAL_AUTO_STOP && (
                            <span className="input-error">{lang.crash.autoStopError.replace("{d}", MINIMAL_AUTO_STOP)}</span>
                        )}
                    </div>
                </div>
            </div>
        </>
    }

    return (
        <div className="Crash">
            {isSkinSelection && renderSkinSelector()}
            {!isSkinSelection && renderCrash()}
        </div>
            
    );
}

export default Crash;