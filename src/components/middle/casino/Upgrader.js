import React, { 
    useRef,
    useState, 
    useEffect, 
    useContext
} from "react";

import useLang from "../../../hooks/useLang";
import Context from "../../../utils/context";
import renderInventory, { filterInventory } from "../helpers/renderInventory";

import { getItemImageUrl } from "../../../models/weapons";
import { deleteItem, insertItem, statistics } from "../helpers/transactions";

import { 
    randomInt, 
    randomFloat, 
    WeaponTypes, 
    randomElement, 
    getPriceRangeItems, 
} from "../../../utils/chance";

import Item from "../../ui/Item";
import Button from "../../ui/Button";
import ItemPage from "../../ui/ItemPage";
import Dropdown from "../../ui/Dropdown";
import Selection from "../../ui/Selection";

import "./Upgrader.css";

const SPIN_TIME = 7000;

const Upgrader = () => {
    const { GlobalState, setGlobalState } = useContext(Context);

    const lang = useLang(GlobalState);

    const spinnerContent = useRef(null);
    const spinnerContainer = useRef(null);
    const spinnerIndicator = useRef(null);

    const [ state, setState ] = useState({
        isSpinning: false,
        isItemSelection: false,

        chance: 0,
        selectedItem: null,
        relevantItem: null, 
        availableItems: [],
    });

    const [ typePriority, setTypePriority ] = useState(null);
    const [ currentMultiplier, setCurrentMultiplier ] = useState(0);

    const multiplier = [ 1.5, 2, 5, 10, 20 ];

    const handleChangePriority = value => {
        if (value == "<all>") value = null;

        setTypePriority(value);
    }

    const calculateRange = item => {
        const availableItems = getPriceRangeItems(
            item, multiplier[currentMultiplier]
        );

        const filtered = filterInventory(
            availableItems,
            undefined, 
            undefined, 
            typePriority || undefined,
        );

        const relevantItem = randomElement(filtered);

        return { availableItems: filtered, relevantItem }
    }

    const switchItemSelect = () => {
        setState(prev => ({
            ...prev,
            isItemSelection: !prev.isItemSelection
        }));
    }

    const selectItem = item => {
        const range = calculateRange(item);

        setState(prev => ({
            ...prev,
            ...range,
            selectedItem: item,
            isItemSelection: false
        }));
    }

    const handleRerollItem = () => {
        if (!state.selectedItem || !state.availableItems.length) return;
        const { availableItems, relevantItem } = state;

        const selectItem = () => {
            let item = randomElement(state.availableItems);

            if (
                relevantItem 
                && availableItems.length > 1
                && item.id == relevantItem.id 
                && item.quality == relevantItem.quality
            ) return selectItem();

            return item;
        }

        setState(prev => ({
            ...prev,
            relevantItem: selectItem()
        }));
    }

    const handleUpgrade = () => {
        if (
            !state.selectedItem
            || !state.relevantItem
            || state.isSpinning
        ) return;

        setState(prev => ({ ...prev, isSpinning: true }));

        deleteItem(setGlobalState, state.selectedItem.uid);
        
        statistics.edit(setGlobalState, "TotalUpgradesMade", 1);

        const container = spinnerContainer.current;
        const indicator = spinnerIndicator.current;
        const content = spinnerContent.current

        if (!container || !indicator || !content) return;

        const containerRect = container.getBoundingClientRect();
        const indicatorRect = indicator.getBoundingClientRect();

        var laps = randomInt(4, 6);
        var float = randomFloat(0, 100);

        if (float > 100) float = 0;

        var degrees = (360 * laps) + (360 / 100 * float);
        var originX = indicatorRect.width / 2;
        var originY = containerRect.y + containerRect.height / 2 - indicatorRect.y;

        indicator.style.transformOrigin = `${originX}px ${originY}px`;
        indicator.style.transform = `rotate(${degrees}deg)`;

        window.setTimeout(() => {
            const isWinning = float <= state.chance;

            content.innerHTML = isWinning ? `<img src=${getItemImageUrl(state.relevantItem)} />` : `<span class="loss">Loss</span>`;

            if (isWinning) {
                insertItem(setGlobalState, state.relevantItem, 3);
            }

            setState(prev => ({
                ...prev,
                isSpinning: false,
                selectedItem: null,
                availableItems: [],
                relevantItem: null
            }));
        }, SPIN_TIME);
    }

    useEffect(() => {
        if (!state.selectedItem) return;

        const range = calculateRange(state.selectedItem);

        setState(prev => ({
            ...prev,
            ...range
        }));
    }, [currentMultiplier, typePriority]);

    useEffect(() => {
        var chance = 0;
        var spinner = spinnerContainer.current;

        if (state.selectedItem && state.relevantItem) {
            chance = state.selectedItem.price / state.relevantItem.price * 100;

            if (chance <= 50) {
                let degrees = 270 + (360 / 100 * chance);
                
                spinner.style.background = `linear-gradient(${degrees}deg, var(--color-background-secondary) 50%, transparent 50%), 
                linear-gradient(90deg, var(--color-background-secondary) 50%, var(--color-scheme) 50%)`;
            } else {
                let degrees = 90 + (360 / 100 * (chance - 50));
    
                spinner.style.background = `linear-gradient(${degrees}deg, transparent 50%, var(--color-scheme) 50%),
                linear-gradient(90deg, var(--color-background-secondary) 50%, var(--color-scheme) 50%)`;
            }
    
            spinner.style.setProperty("--color-scheme-rgb", `var(--color-${state.relevantItem.rarity.replace(/-| /ig, "")})`);
        }

        setState(prev => ({
            ...prev,
            chance
        }));
    }, [
        currentMultiplier,
        state.selectedItem,
        state.relevantItem
    ]);

    const renderUpgrader = () => {
        const currentItem = (item, shouldText) => {
            var handleClick = () => {
                if (!shouldText || state.isSpinning) return;

                switchItemSelect();
            }

            if (!item) return (
                <div className="VoidItem" onClick={handleClick}>
                    {shouldText && "Select Item"}
                </div>
            );

            return <Item item={item} onClick={handleClick} ripple={shouldText && !state.isSpinning} />
        }

        if (state.isItemSelection) {
            let inventory = renderInventory(GlobalState.profile.inventory).inventory;

            return (
                <div className="item-selection">
                    <div className="tab-title mini"><span>{lang.upgrader.hint}:</span></div>
                    <ItemPage 
                        ripple={false}
                        items={inventory}
                        onClick={selectItem}
                    />
                </div>
            );
        }

        var selectedType = Object.keys(WeaponTypes).indexOf(typePriority) + 1;
        if (selectedType < 1) selectedType = 0;

        const PriorityList = [ { 
            label: "<" + lang.filters.allTypes + ">", 
            value: "<all>" 
        }, ...Object.keys(WeaponTypes).map(type => ({
            label: lang.property["Type" + type],
            value: type
        })) ];

        return <>
            <div className="upgrade-settings">
                <div className="setting">
                    <span>{lang.upgrader.multiplier}:</span>
                    <div className="selection-container">
                        <Selection 
                            activeId={currentMultiplier}
                            disabled={state.isSpinning}
                            onClick={id => setCurrentMultiplier(id)}
                            tabs={multiplier.map(num => "x" + num)}
                        />
                    </div>
                </div>
                <div className="setting">
                    <span>{lang.upgrader.priority}:</span>
                    <div className="selection-container">
                        <Dropdown 
                            active={selectedType}
                            onChange={handleChangePriority}
                            options={PriorityList}
                        />
                    </div>
                </div>
            </div>

            <div className="items-preview">
                <div className="upgrader-item">
                    {currentItem(state.selectedItem, true)}
                </div>

                <div className="interactive-upgrader">
                    <div className="Spinner" ref={spinnerContainer}>
                        <i className="uil uil-angle-up spinner-indicator" ref={spinnerIndicator} />

                        <span className="spinner-content" ref={spinnerContent}>
                            <span className="spinner-chance-preview">
                                {state.chance.toFixed(2)}
                            </span>
                        </span>
                    </div>

                    <div className="spinner-control-buttons">
                        <Button 
                            children={lang.upgrader.upgrade}
                            disabled={!state.selectedItem || state.isSpinning || !state.relevantItem}
                            onClick={handleUpgrade}
                        />

                        <Button 
                            title="Reroll Item" 
                            className="reroll-item" 
                            disabled={state.isSpinning || state.availableItems.length < 2}
                            onClick={handleRerollItem}
                        >
                            <i className="uil uil-redo" />
                        </Button>
                    </div>
                </div>

                <div className="upgrader-item">
                    {currentItem(state.relevantItem, false)}
                </div>
            </div>

            {state.selectedItem && !state.relevantItem && !state.availableItems.length && (
                <div className="no-items-available">{lang.upgrader.error}</div>
            )}
        </>
    }

    return (
        <div className="Upgrader custom-scroll">
            {renderUpgrader()}
        </div>
    );
}

export default Upgrader;