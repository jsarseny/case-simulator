import React, { 
    useState, 
    useEffect,
    useContext
} from "react";

import Context from "../../utils/context.js";
import Currency from "../../utils/currency.js";
import buildClassName from "../../utils/buildClassName.js";

import { withdrawBalance } from "./helpers/transactions.js";

import { 
    chance, 
    randomFloat 
} from "../../utils/chance.js"

import Button from "../ui/Button.js";

import "./Roulette.css";

const INITIAL_STATE = {
    currentOpen: {
        open: false,
        items: [],
        dropped: 0,
    },

    bet: null,
    betAmount: 0,
}

const AVAILABLE_BETS = {
    red: 3,
    orange: 7,
    gold: 14,
    green: 2,
    blue: 2,
}

const Chances = {
    gold: 1,
    orange: 2,
    red: 5
}

const ROLL_TIME = 5500;
const FINAL_TIME = 650;
const ITEMS_MARGIN = 8;

const ROLL_TRANSITION = `margin ${ROLL_TIME}ms cubic-bezier(0.19, 0.02, 0, 0.98)`;
const FINAL_TRANSITION = `margin ${FINAL_TIME}ms cubic-bezier(0.19, 0.02, 0, 0.98)`;

const callPopupNotify = (text, color = "#fff") => {
    let popup = document.querySelector(".Roulette .controls .popup-notify");

    if (popup) {
        popup.innerHTML = text;
        popup.style.color = color;
        popup.style.transition = "opacity 4s";
        popup.style.opacity = 0;

        setTimeout(() => {
            popup.innerHTML = null;
            popup.style.transition = null;
            popup.style.opacity = 1;
        }, 4000);
    }
}

const relizeRouletteItems = count => {
    let items = [];
    let lastDefault = chance(49) ? "blue" : "green";
    let lastSpecial = null;

    for (let i = 0; i < count; i++) {
        let special = null;

        Object.keys(Chances).forEach(key => {
            if (chance(Chances[key]) && !special && lastSpecial !== key) {
                special = key;
                items.push(key);
                lastSpecial = key;
            };
        });

        if (!special) {
            let current = lastDefault == "blue" ? "green" : "blue";
            items.push(current);

            lastDefault = current;
            lastSpecial = null;
        };
    }

    return items;
}

const getInitialExtended = () => ({
    ...INITIAL_STATE,
    currentOpen: {
        ...INITIAL_STATE.currentOpen,
        items: relizeRouletteItems(200)
    }
})

const Roulette = () => {
    const { GlobalState, setGlobalState } = useContext(Context);
    
    const currencyModel = Currency.models[GlobalState.settings.currency];

    const [ state, setState ] = useState(getInitialExtended());

    const revokeState = () => {
        setState(INITIAL_STATE);
        setTimeout(() => setState(getInitialExtended()), 0);
    }

    const handleBet = color => {
        if (state.currentOpen.open) return;

        setState(prev => ({
            ...prev,
            bet: color
        }));
    }

    const handleChangeAmount = e => {
        if (state.currentOpen.open) {
            e.preventDefault();
            e.stopPropagation();
            return;
        }

        var { value } = e.currentTarget;

        if (value < 0) value = 0;

        return setState(prev => ({
            ...prev,
            betAmount: value,
        }));
    }

    const handleVictory = color => {
        let betAmountUsd = parseFloat(state.betAmount / currencyModel.multiplier);
        let win = betAmountUsd * AVAILABLE_BETS[color];
        
        callPopupNotify(`+ ${Currency.renderPrice(GlobalState, win, true)}`, "rgb(12, 217, 157)");

        withdrawBalance(setGlobalState, -1 * win);
        revokeState();
    }

    const handleLoss = () => {
        let betAmountUsd = parseFloat(state.betAmount / currencyModel.multiplier);

        callPopupNotify(`- ${Currency.renderPrice(GlobalState, betAmountUsd, true)}`, "red");
        revokeState();
    }

    const handleRoll = () => {
        let betAmountUsd = parseFloat(state.betAmount / currencyModel.multiplier);

        if (!state.bet || !betAmountUsd) return;
        if (typeof betAmountUsd !== "number" || Number.isNaN(betAmountUsd)) return;

        var dropped = randomFloat(145, 190);

        withdrawBalance(setGlobalState, betAmountUsd);

        setState(prev => ({
            ...prev,
            currentOpen: {
                ...prev.currentOpen,
                dropped,
                open: true
            }
        }));
    }

    useEffect(() => {
        if (!state.currentOpen.open) return;

        let { items, dropped } = state.currentOpen;
        
        var rollItems = document.querySelectorAll(".Roulette .current-roll .roll-item");
        var element = rollItems[0];
        var caret = document.querySelector(".Roulette .caret");

        var elementBox = element.getBoundingClientRect();
        var caretBox = caret.getBoundingClientRect();
        var deltaX = (caretBox.x + caretBox.width / 2) - elementBox.x;

        var margin = -((elementBox.width * dropped) + ((Math.floor(dropped) - 1) * ITEMS_MARGIN) - deltaX);
        element.style.marginLeft = `${margin}px`;
        element.style.transition = ROLL_TRANSITION;

        window.setTimeout(() => {
            let droppedIndex = Math.floor(dropped);
            let droppedItem = rollItems[droppedIndex].getBoundingClientRect();
            let finalMargin = margin + ((caretBox.x + caretBox.width / 2) - (droppedItem.x + droppedItem.width / 2));

            element.style.transition = FINAL_TRANSITION;
            element.style.marginLeft = `${finalMargin}px`;

            window.setTimeout(() => {
                let droppedColor = items[droppedIndex];
                
                if (droppedColor == state.bet) handleVictory(droppedColor);
                else handleLoss();
            }, FINAL_TIME + 150);
        }, ROLL_TIME + 150);
    }, [state.currentOpen.open]);

    const renderCurrentRoll = () => {
        return <div className="roll-animate-area">
            {state.currentOpen.items.map((item, i) => {
                let className = buildClassName("roll-item color-bg", item);

                return <div className={className} key={i} />
            })}
        </div>
    }

    const buttons = Object.keys(AVAILABLE_BETS).map(color => {
        let multiplier = AVAILABLE_BETS[color];

        return {
            color,
            text: "x" + multiplier,
            className: buildClassName(
                "bet-btn",
                "color-bg",
                color,
                state.bet == color && "active",
                state.currentOpen.open && "disabled"
            )
        }
    });

    const isDisabledButton = 
        !state.bet 
        || !state.betAmount 
        || state.currentOpen.open
        || state.betAmount > GlobalState.profile.balance;

    return (
        <div className="Roulette">
            <div className="roulette-roll">
                <i className="caret uil uil-angle-double-down top" />
                <i className="caret uil uil-angle-double-down bottom" />

                <div className="current-roll">
                    {!!state.currentOpen.items.length && renderCurrentRoll()}
                </div>
            </div>

            <div className="bet">
                <div className="available-bids">
                    {buttons.map((button, i) => (
                        <div 
                            key={i}
                            children={button.text}
                            className={button.className} 
                            onClick={handleBet.bind(null, button.color)}
                        />
                    ))}
                </div>

                <div className="controls">
                    <span className="control-line">
                        Bet: <input 
                            type="number" 
                            placeholder="N"
                            value={state.betAmount}
                            disabled={state.currentOpen.open}
                            onChange={handleChangeAmount}
                            min={0}
                            max={GlobalState.profile.balance}
                        /> {currencyModel.symbol}
                    </span>
                    <span className="control-line balance">
                        <span>Balance: {Currency.renderPrice(GlobalState, GlobalState.profile.balance)}</span>
                        <span className="popup-notify"></span>
                    </span>
                    <span className="control-line roll-button">
                        <Button 
                            children="Roll!"
                            disabled={isDisabledButton}
                            onClick={handleRoll}
                        />
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Roulette;