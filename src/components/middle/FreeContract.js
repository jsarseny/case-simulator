import React, {
    useState,
    useContext
} from "react";

import Context from "../../utils/context.js";
import buildClassName from "../../utils/buildClassName.js";
import renderInventory from "./helpers/renderInventory.js";

import { getItemImageUrl } from "../../models/weapons.js";
import { deleteItem, insertItem } from "./helpers/transactions";

import { 
    shuffle,
    randomElement, 
    orderLowerPrice, 
    getPriceRangeItems
} from "../../utils/chance.js";

import Item from "../ui/Item.js";
import Button from "../ui/Button.js";
import ItemPage from "../ui/ItemPage.js";

import "./FreeContract.css";

const ANIMATION_DURATION = 1500
const MINIMAL_CONTRACT_SIZE = 3;
const MAXIMUM_CONTRACT_SIZE = 5;

const contractRetractionAnimation = (elements, spinner) => {
    const duration = ANIMATION_DURATION / 2;
    const timeout = duration / 3;

    const items = Array.from(elements);

    if (!items.length) return;

    items.forEach((item, i) => {
        setTimeout(() => {
            const elementBox = item.getBoundingClientRect();
            const spinnerBox = spinner.getBoundingClientRect();

            const directX = (spinnerBox.x + spinnerBox.width / 2) - (elementBox.x + elementBox.width / 2);
            const directY = (spinnerBox.y + spinnerBox.height / 2) - (elementBox.y + elementBox.height / 2);

            item.style.transition = `transform ${duration}ms, opacity 1800ms, border-radius .25s`;
            item.style.borderRadius = "50%";
            item.style.overflow = "hidden";
            item.style.transform = `translateX(${directX}px) translateY(${directY}px)`;
            item.style.opacity = 0;
        }, i * timeout);
    });
}

const FreeContract = () => {
    const { GlobalState, setGlobalState } = useContext(Context);

    const [ state, setState ] = useState({
        isSpinning: false,
        isItemSelection: true,

        finalItem: null,
        selected: [],
        possibleItems: []
    });

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

        const possibleItems = getPriceRangeItems(virtualItem, 1, { min: -0.25, max: 1.5 }, orderLowerPrice);

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
        setState(prev => ({
            ...prev,
            isSpinning: true
        }));

        let removeUids = [];
        state.selected.forEach(i => removeUids.push(i.uid));

        deleteItem(setGlobalState, removeUids);
    
        contractRetractionAnimation(
            document.querySelectorAll(".items-preview .Item"),
            document.getElementById("spinner-animation-target")
        );

        setTimeout(() => {
            const finalItem = randomElement(
                shuffle(state.possibleItems)
            );

            insertItem(setGlobalState, finalItem);

            setState(prev => ({
                ...prev,
                finalItem,
                isSpinning: false,
                possibleItems: [],
            }));
        }, ANIMATION_DURATION);
    }

    const renderMain = () => {
        if (state.isItemSelection) {
            let inventory = renderInventory(GlobalState.profile.inventory).inventory;

            return <div className="item-selection">
                <div className="tab-title mini"><span>choose from 3 to 5 items:</span></div>
                <ItemPage 
                    ripple={false}
                    items={inventory}
                    selectConfig={{
                        enable: true,
                        max: MAXIMUM_CONTRACT_SIZE,
                        min: MINIMAL_CONTRACT_SIZE,
                        onSubmit: handleSelectionSubmit
                    }}
                />
            </div>
        }

        let isActive = state.possibleItems.length && state.selected.length;
        let isOpenReward = Boolean(state.finalItem);

        let contractPrice = 0;
        let minimalPrice = isActive ? state.possibleItems[0].price.toLocaleString() : 0;
        let maximumPrice = isActive ? state.possibleItems[state.possibleItems.length - 1].price.toLocaleString() : 0;

        let videoBgClassname = buildClassName(
            "spinner",
            "RarityShade",
            isOpenReward ? state.finalItem.rarity : "restricted"
        );

        let buttonText = isOpenReward ? "New Contract" : "sign contract!";
        let buttonHandler = !isOpenReward ? handleContract : () => {
            restoreState();
            handleRechooseItems();
        }

        return (
            <div className="ContractBody">
                <div className="items-preview">
                    {state.selected.map((item, i) => {
                        contractPrice += item.price;

                        return <Item 
                            item={item}
                            key={i}
                            onClick={handleRechooseItems}
                            ripple={false}
                        />
                    })}
                </div>
                <div className="contract-meta">
                    <span>Contract Price: <font color="gold">{contractPrice.toLocaleString()}$</font></span>
                    <span>Possible Win Range: <font color="gold">{minimalPrice}$</font> - <font color="gold">{maximumPrice}$</font></span>
                </div>

                <div className="contract-arc">
                    <div className={videoBgClassname}>
                        <div className="item-video-background">
                            <div className="color-bg" />
                            <video object-fit="fill" width="100%" height="100%" loop autoPlay muted playsInline>
                                <source src="./assets/shine.webm" type="video/webm" />
                            </video>
                        </div>

                        <div className="spinner-inside" id="spinner-animation-target">
                            {Boolean(state.finalItem) && <div className="final-item">
                                <img src={getItemImageUrl(state.finalItem)} draggable={false} />
                                <span>{state.finalItem.price.toLocaleString()}$</span>
                            </div>}
                        </div>
                    </div>
                </div>

                <div className="controls">
                    <Button 
                        children={buttonText}
                        disabled={state.isSpinning || state.selected.length < MINIMAL_CONTRACT_SIZE}
                        onClick={buttonHandler}
                    />
                </div>
            </div>
        );
    }

    return (
        <div className="FreeContract">
            {renderMain()}
        </div>
    );
}

export default FreeContract;