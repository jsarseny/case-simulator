import React, {
    useRef,
    useState,
    useEffect,
    useContext,
} from "react";

import useLang from "../../../hooks/useLang.js";
import Context from "../../../utils/context.js";
import Currency from "../../../utils/currency.js";
import buildClassName from "../../../utils/buildClassName.js";
import renderInventory from "../helpers/renderInventory.js";
import canvasAnimations from "../helpers/canvas.js";

import { getItemImageUrl } from "../../../models/index.js";

import { 
    deleteItem, 
    insertItem, 
    statistics 
} from "../helpers/transactions.js";

import { 
    shuffle,
    randomInt,
    randomElement, 
    orderLowerPrice, 
    getPriceRangeItems,
} from "../../../utils/chance.js";

import Item from "../../ui/Item.js";
import Button from "../../ui/Button.js";
import ItemPage from "../../ui/ItemPage.js";

import "./Contracts.css";

const hsvToRgb = (H, S, V) => {
    S /= 100;
    V /= 100;
    
    var lH = Math.floor(H / 60);
    var f = H / 60 - lH;
    var p = V * (1 - S); 
    var q = V * (1 - S * f);
    var t = V * (1 - (1 - f) * S);
     
    var R, G, B;
    switch (lH) {
        case 0: R = V; G = t; B = p; break;
        case 1: R = q; G = V; B = p; break;
        case 2: R = p; G = V; B = t; break;
        case 3: R = p; G = q; B = V; break;
        case 4: R = t; G = p; B = V; break;
        case 5: R = V; G = p; B = q; break;
        default: R = V; G = t; B = p;
    }
    
    return [parseInt(R * 255), parseInt(G * 255), parseInt(B * 255)];
}

const ANIMATION_DURATION = 1500
const MINIMAL_CONTRACT_SIZE = 3;
const MAXIMUM_CONTRACT_SIZE = 5;

const contractRetractionAnimation = (elements, spinner) => {
    const items = Array.from(elements);

    const duration = ANIMATION_DURATION / 2;
    const timeout = duration / 3;

    if (!items.length) return;

    items.forEach((item, i) => {
        setTimeout(() => {
            const elementBox = item.getBoundingClientRect();
            const spinnerBox = spinner.getBoundingClientRect();

            const directX = (spinnerBox.x + spinnerBox.width / 2) - (elementBox.x + elementBox.width / 2);
            const directY = (spinnerBox.y + spinnerBox.height / 2) - (elementBox.y + elementBox.height / 2);

            item.style.transition = `transform ${duration}ms, opacity 1000ms`;
            item.style.overflow = "hidden";
            item.style.transform = `translateX(${directX}px) translateY(${directY}px) rotate(${randomInt(-30, 30)}deg)`;
            item.style.opacity = 0;
        }, i * timeout);
    });
}

const Contracts = () => {
    const { GlobalState, setGlobalState } = useContext(Context);

    const lang = useLang(GlobalState, setGlobalState);
    const containerRef = useRef(null);

    const [ state, setState ] = useState({
        isSpinning: false,
        isItemSelection: true,

        finalItem: null,
        selected: [],
        possibleItems: []
    });

    const [ ColorPickerState, setColorPickerState ] = useState({
        color: "rgb(255,0,0)",
        size: 2,
    });

    const ColorPicker = {
        downSlider: false,
        downCanvas: false,

        moveSlider(e, withMouseButton) {
            if (withMouseButton && !e.buttons) return;

            const { currentTarget, clientY } = e;

            const indicator = document.querySelector(".HSV-picker .indicator");
            const targetRect = currentTarget.getBoundingClientRect();
            const indicatorRect = indicator.getBoundingClientRect();

            var deltaX = Math.min(
                clientY - targetRect.y, 
                targetRect.height - indicatorRect.height
            );

            if (deltaX < 0) deltaX = 0

            var t = Math.round(deltaX / (targetRect.height / 360));
            t = Math.abs(t - 360);
            t = t === 360 ? 0 : t;
            
            setColorPickerState(prev => ({ ...prev, color: "rgb(" + hsvToRgb(t, 100, 100) + ")" }));

            indicator.style.top = deltaX + "px";
        },

        changeSize(e) {
            var { value } = e.currentTarget;
    
            if (value < 0) value = 0;
    
            return setColorPickerState(prev => ({
                ...prev,
                size: value,
            }));
        },

        drawMouseRect(ctx, e, withMouseButton) {
            if (withMouseButton && !e.buttons) return;
            const { offsetX: x, offsetY: y } = e;

            setColorPickerState(prev => {
                ctx.strokeStyle = prev.color;
                ctx.lineWidth = prev.size;

                var dx = e.movementX;
                var dy = e.movementY;

                ctx.beginPath();
                ctx.lineCap = "round";
                ctx.moveTo(x, y);
                ctx.lineTo(x - dx, y - dy);
                ctx.stroke();
                ctx.closePath();

                return prev;
            });
        }
    }

    const restoreState = () => setState(prev => ({
        ...prev,
        finalItem: null,
        selected: [],
        possibleItems: []
    }))

    const handleSelectionSubmit = items => {
        var virtualItem = {
            price: 0,
            id: "virtual",
            quality: "virtual"
        }

        items.forEach(i => virtualItem.price += i.price);

        const possibleItems = getPriceRangeItems(virtualItem, 1, { min: -0.25, max: 1.5 }, orderLowerPrice).filter(possible => {
            let bool = true;

            items.forEach(i => {
                if (!bool) return;
                if (i.id === possible.id && i.quality === possible.quality) bool = false;
            });

            return bool;
        });

        setState(prev => ({
            ...prev,
            isItemSelection: false,
            selected: items,
            possibleItems
        }));
    }

    const handleRechooseItems = () => { 
        if (state.isSpinning || state.isItemSelection) return;

        setState(prev => ({
            ...prev,
            isItemSelection: true,
            selected: []
        }));
    }

    const handleContract = () => {
        var canvas = document.getElementById("contract-result-effects");

        setState(prev => ({
            ...prev,
            isSpinning: true
        }));

        let removeUids = [];
        state.selected.forEach(i => removeUids.push(i.uid));
        
        statistics.edit(setGlobalState, "TotalContractsMade", 1);

        contractRetractionAnimation(
            document.querySelectorAll(".items-preview .Item"), 
            document.getElementById("spinner-animation-target")
        );

        deleteItem(setGlobalState, removeUids);

        const finalItem = randomElement(
            shuffle(state.possibleItems)
        );

        setState(prev => ({
            ...prev,
            finalItem
        }));

        setTimeout(() => {
            insertItem(setGlobalState, finalItem, 4);

            var resultRarity = finalItem.rarity.toLowerCase().replace(/ |-/ig, "");
            var resultColor = getComputedStyle(document.querySelector("body")).getPropertyValue(`--color-${resultRarity}`).trim();

            canvasAnimations.centralParticles(canvas, `rgb(${resultColor})`, undefined, document.getElementById("spinner-animation-target"));

            setState(prev => ({
                ...prev,
                isSpinning: false,
                possibleItems: [],
            }));
        }, ANIMATION_DURATION);
    }

    useEffect(() => {
        if (state.isSpinning || state.finalItem || state.isItemSelection) return;

        const initializeSlider = () => {
            const HSV = document.getElementById("hsv-picker");

            if (!HSV) return;

            const ctx = HSV.getContext("2d");
            const width = HSV.offsetWidth;
            const height = HSV.offsetHeight;

            HSV.width = width;
            HSV.height = height;

	        var gradient = ctx.createLinearGradient(width / 2, height, width / 2, 0);
	        var hue = [[255,0,0], [255,255,0], [0,255,0], [0,255,255], [0,0,255], [255,0,255], [255,0,0]];
            
		    for (var i = 0; i <= 6; i++) {
	  	    	var color = `rgb(${hue[i][0]}, ${hue[i][1]}, ${hue[i][2]})`;
	            gradient.addColorStop(i * 1 / 6, color);
		    };

	  	    ctx.fillStyle = gradient;
            ctx.fillRect(0,0, width, height);

            HSV.onclick = e => ColorPicker.moveSlider( e, false);
            HSV.onmousemove = e => ColorPicker.moveSlider(e, true);
        }

        const initializeCanvas = () => {
            const canvas = document.getElementById("sign-contract-canvas");
            
            if (!canvas) return;

            const ctx = canvas.getContext("2d");

            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;

            canvas.onclick = e => ColorPicker.drawMouseRect(ctx, e, false);
            canvas.onmousemove = e => ColorPicker.drawMouseRect(ctx, e, true);
        }

        initializeCanvas();
        initializeSlider();
    }, [state.isItemSelection]);

    const renderMain = () => {
        if (state.isItemSelection) {
            let inventory = renderInventory(GlobalState.profile.inventory).inventory;

            return <div className="item-selection">
                <div className="tab-title mini"><span>{lang.contract.hint}:</span></div>
                <ItemPage 
                    ripple={false}
                    items={inventory}
                    selectConfig={{
                        enable: true,
                        max: MAXIMUM_CONTRACT_SIZE,
                        min: MINIMAL_CONTRACT_SIZE,
                        actions: [{
                            children: lang.common.use,
                            onClick: handleSelectionSubmit
                        }]
                    }}
                />
            </div>
        }

        let isActive = state.possibleItems.length && state.selected.length;
        let isOpenReward = Boolean(state.finalItem) && !state.isSpinning;

        let contractPrice = 0;
        let sortedPossible = orderLowerPrice(state.possibleItems);
        let minimalPrice = isActive ? sortedPossible[0].price : 0;
        let maximumPrice = isActive ? sortedPossible[state.possibleItems.length - 1].price : 0;

        let videoBgClassname = buildClassName(
            "spinner",
            "RarityShade",
            isOpenReward ? state.finalItem.rarity : "restricted"
        );

        let buttonText = isOpenReward ? lang.contract.new : lang.contract.sign;
        let buttonHandler = !isOpenReward ? handleContract : () => {
            restoreState();
            handleRechooseItems();
        }

        const spinnerWrapperClassName = buildClassName(
            "contract-arc",
            (state.isSpinning || isOpenReward) && "spinning"
        );

        return (
            <div className="ContractBody">
                <div className="items-preview">
                    {state.selected.map((item, i) => {
                        contractPrice += item.price;

                        return <Item 
                            item={item}
                            key={i}
                            shouldRecent={false}
                            onClick={handleRechooseItems}
                            ripple={false}
                        />
                    })}
                </div>
                <div className="contract-meta">
                    <span>{lang.contract.totalPrice}: {Currency.renderPrice(GlobalState, contractPrice)}</span>
                    <span>{lang.contract.possibleRange}: {Currency.renderPrice(GlobalState, minimalPrice)} - {Currency.renderPrice(GlobalState, maximumPrice)}</span>
                </div>

                <div className="background-canvas">
                    <canvas id="contract-result-effects"></canvas>
                </div>

                <div className={spinnerWrapperClassName}>
                    <div className="sign-contract-area">
                        <div className="canvas-area">
                            <canvas id="sign-contract-canvas" />

                            <div className="HSV-picker">
                                <canvas id="hsv-picker" />
                                <span className="indicator" />
                            </div>

                            <div className="pen-icon">
                                <i className="uil uil-edit" />
                            </div>

                            <div className="canvas-tools">
                                <div className="current-color-preview" style={{ backgroundColor: ColorPickerState.color }} />

                                <input 
                                    type="number" 
                                    placeholder="Size" 
                                    min={1}
                                    max={1000}
                                    onChange={ColorPicker.changeSize}
                                    value={ColorPickerState.size}
                                />
                            </div>
                        </div>
                    </div>

                    <div className={videoBgClassname}>
                        <div className="item-video-background">
                            <div className="color-bg" />
                            <video object-fit="fill" width="100%" height="100%" loop autoPlay muted playsInline>
                                <source src="./assets/shine.webm" type="video/webm" />
                            </video>
                        </div>

                        <div className="spinner-inside" id="spinner-animation-target">
                            {Boolean(state.finalItem) && (
                                <div className={buildClassName("final-item", !state.isSpinning && "open")}>
                                    <img src={getItemImageUrl(state.finalItem)} draggable={false} alt="Prize" />
                                    <span>{Currency.renderPrice(GlobalState, state.finalItem.price)}</span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className="controls">
                    <Button 
                        children={buttonText}
                        disabled={
                            state.isSpinning 
                            || state.selected.length < MINIMAL_CONTRACT_SIZE
                            || (!state.finalItem && !state.possibleItems.length)
                        }
                        onClick={buttonHandler}
                    />
                </div>
            </div>
        );
    }

    return (
        <div className="FreeContract" ref={containerRef}>
            {renderMain()}
        </div>
    );
}

export default Contracts;