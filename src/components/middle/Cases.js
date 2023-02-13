import React, { 
    useState,  
    useEffect,
    useContext,
    useCallback, 
} from "react"; 

import Context from "../../utils/context";
import buildClassName from "../../utils/buildClassName";
import renderInventory from "./helpers/renderInventory";
import Collections, { getCollectionById } from "../../models/collections";

import { 
    randomFloat,
    mathContainer, 
    selectRareItem, 
    mathCollection,
    RARITY_PRIORITY
} from "../../utils/chance";

import { insertItem, sellItem } from "./helpers/transactions";
import { getCollectionItems, getItemImageUrl } from "../../models/weapons";

import Button from "../ui/Button";
import Item, { ItemList } from "../ui/Item";

import "./Cases.css";

const ROLL_TIME = 5500;
const FINAL_TIME = 650;

const ROLL_TRANSITION = `margin ${ROLL_TIME}ms cubic-bezier(0.19, 0.02, 0, 0.98)`;
const FINAL_TRANSITION = `margin ${FINAL_TIME}ms cubic-bezier(0.19, 0.02, 0, 0.98)`;
const GHOST_ANIMATION_TRANSITION = "all .55s cubic-bezier(0.33, 1, 0.68, 1)";

export const animateGhost = (elements, delay = 40) => {
    const items = Array.from(elements);

    if (!items.length) return;

    items.forEach(item => {
        item.style.opacity = 0;
        item.style.transform = "translateY(0.75rem)";
    });

    items.forEach((item, i) => {
        setTimeout(() => {
            item.style.transition = GHOST_ANIMATION_TRANSITION;
            item.style.opacity = 1;
            item.style.transform = "translateY(0)";
        }, (i + 1) * delay);
    });
}

export const sortItems = items => {
    const selectMaxPrice = item => {
        if (!item.prices) return 0;
        
        return Math.max(...Object.values(item.prices));
    }

    return items.sort((a, b) => {
        return selectMaxPrice(a) > selectMaxPrice(b) ? -1 : 1;
    }).sort((a, b) => {
        if (RARITY_PRIORITY[a.rarity] > RARITY_PRIORITY[b.rarity]) return -1 
        if (RARITY_PRIORITY[a.rarity] < RARITY_PRIORITY[b.rarity]) return 1;

        return 0;
    });
}

const CaseItem = ({ item }) => {
    return (
        <div className={buildClassName("CaseItem RarityShade", item.rarity)}>
            <div className="image">
                <img src={getItemImageUrl(item)} />
            </div>
            <span className="rarity-color" />
        </div>
    );
}

const Cases = () => {
    const { GlobalState, setGlobalState } = useContext(Context);
    const [ collectionFilter, setCollectionFilter ] = useState("case");

    const [ state, setState ] = useState({
        currentItem: null,
        droppedItem: null,
        currentOpen: {
            open: false,
            count: 0,
            dropped: 0,
            items: []
        }
    });

    const getExtendedItem = minimal => {
        return renderInventory([ minimal ]).inventory[0];
    }

    const getBestDrop = useCallback(() => {
        const { bestDrop } = GlobalState;

        if (!bestDrop) return null;

        const item = getExtendedItem(bestDrop);
        const from = getCollectionById(bestDrop.from);

        return { item, from }
    }, [GlobalState.bestDrop]);

    const compareWithBest = useCallback((item, collectionId) => {
        const { bestDrop } = GlobalState;

        const bestItem = bestDrop ? getExtendedItem(bestDrop) : null;

        if (!bestItem || item.price > bestItem.price) setGlobalState(prev => ({
            ...prev,
            bestDrop: {
                id: item.id,
                quality: item.quality,
                from: collectionId
            }
        }));
    }, [GlobalState.bestDrop]);

    const handleCaseChoose = item => {
        setState(prev => ({
            ...prev,
            droppedItem: null,
            currentItem: item
        }));
    }

    const handleItemDrop = item => {
        setState(prev => {
            if (item.rarity === "gold") {
                item = selectRareItem(prev.currentItem.id);
            }

            compareWithBest(item, prev.currentItem.id);

            return {
                ...prev,
                droppedItem: item,
                currentOpen: {
                    open: false,
                    dropped: 0,
                    items: []
                }
            }
        });
    }
    
    const handleCaseOpen = () => {
        if (!state.currentItem) return;

        const isContainer = state.currentItem.type === "case"

        var items = [], dropped = randomFloat(90, 140);
        var worker = isContainer ? mathContainer : mathCollection;

        for (let i = 0; i < 150; i++) items.push(worker(state.currentItem.id));

        setState(prev => ({
            ...prev,
            currentOpen: {
                items,
                dropped,
                open: true
            }
        }));
    }

    const handleConfirmItem = item => {
        insertItem(setGlobalState, item);
        handleCaseChoose(state.currentItem);
    }

    const handleItemSell = item => {
        sellItem(setGlobalState, item, false);
        handleCaseChoose(state.currentItem);
    }

    useEffect(() => {
        if (!state.currentItem) {
            return animateGhost(document.querySelectorAll(".Cases .current-list .Item"));
        }

        return animateGhost(document.querySelectorAll(".Cases .current-list .Item"));
    }, [state.currentItem]);

    useEffect(() => {
        const currentOpen = state.currentOpen;

        if (!currentOpen.open) return;
        
        var rollItems = document.querySelectorAll(".current-case-roll .CaseItem")
        var element = rollItems[0];
        var caret = document.querySelector(".current-case-roll span.caret");

        var elementBox = element.getBoundingClientRect();
        var caretBox = caret.getBoundingClientRect();
        var deltaX = caretBox.x - elementBox.x;

        var margin = -((elementBox.width * currentOpen.dropped) + ((Math.floor(currentOpen.dropped) - 1) * 4) - deltaX);
        element.style.marginLeft = `${margin}px`;
        element.style.transition = ROLL_TRANSITION;

        window.setTimeout(() => {
            let droppedIndex = Math.floor(currentOpen.dropped);
            let droppedItem = rollItems[droppedIndex].getBoundingClientRect();
            let finalMargin = margin + ((caretBox.x + caretBox.width / 2) - (droppedItem.x + droppedItem.width / 2));

            element.style.transition = FINAL_TRANSITION;
            element.style.marginLeft = `${finalMargin}px`;

            window.setTimeout(() => {
                handleItemDrop(
                    state.currentOpen.items[Math.floor(currentOpen.dropped)]
                );
            }, FINAL_TIME + 150);
        }, ROLL_TIME + 150);
    }, [state.currentOpen.open]);

    const renderPreview = () => {
        if (!state.currentItem) return <span className="choose-case">Choose the case you want to open</span>

        const item = state.currentItem;

        if (state.droppedItem) {
            let { droppedItem } = state;
            let skinName = `${droppedItem.weaponName} | ${droppedItem.skinName}`;

            return (
                <div className="dropped-item">
                    <div className="item-preview">
                        <Item item={droppedItem} ripple={false} />
                    </div>
                    <div className="item-info">
                        <span className="action-line">{skinName} ({droppedItem.quality})</span>
                        <span className="action-line">
                            <Button onClick={() => handleConfirmItem(droppedItem)}>OK</Button>
                            <Button onClick={() => handleItemSell(droppedItem)} negative>Sell</Button>
                        </span>
                    </div>
                </div>
            );
        }

        if (state.currentOpen.open) {
            return (
                <div className="current-case-roll">
                    <div className="roll">
                        <span className="caret" />
                        {state.currentOpen.items.map((item, i) => (
                            <CaseItem 
                                item={item}
                                key={i}
                            />
                        ))}
                    </div>
                </div>
            );
        }

        return (
            <div className="current-case-info">
                <div 
                    className="image" 
                    title="Click to change case"
                    onClick={() => handleCaseChoose(null)}
                >
                    <img src={item.image} alt={item.fullName} />
                    {item.price && <span className="price">${item.price}</span>}
                </div>
                
                <div className="actions">
                    <span className="action-line">{item.fullName}</span>
                    <span className="action-line">
                        <Button onClick={handleCaseOpen}>
                            Open {item.type}
                        </Button>
                    </span>
                </div>
            </div>
        );
    }

    const renderList = () => {
        const bestDrop = getBestDrop();
        
        if (!state.currentItem) return <>
            {bestDrop.quality && (
                <div className="best-drop">
                    <div className="item-container">
                        <Item 
                            item={bestDrop.item}
                            ripple={false}
                            onClick={() => handleCaseChoose(bestDrop.from)}
                        />
                    </div>
                    <div className="item-info">
                        <span>Your Best Drop</span>
                        <span>From: <a onClick={() => handleCaseChoose(bestDrop.from)}>«{bestDrop.from.fullName}»</a></span>
                    </div>
                </div>
            )}

            <div className="current-list collections-list">
                <div className="tab-list">
                    <span 
                        children="cases"
                        onMouseDown={() => setCollectionFilter("case")}
                        className={buildClassName(collectionFilter == "case" && "active")}
                    />
                    <span 
                        children="special"
                        onMouseDown={() => setCollectionFilter("collection")}
                        className={buildClassName(collectionFilter == "collection" && "active")}
                    />
                </div>

                <ItemList
                    items={Collections.filter(item => item.type === collectionFilter)}
                    className="custom-scroll"
                    shouldPrice={false}
                    onClick={handleCaseChoose}
                />
            </div>
        </>;

        const current = state.currentItem;
        const items = sortItems(getCollectionItems(current.id).reverse());

        return (
            <div className="current-list case-contains custom-scroll">
                <ItemList 
                    items={items}
                    shouldPrice={false}
                    shouldQuality={false}
                    ripple={false}
                />
            </div>
        );
    }

    return (
        <div className="Cases">
            <div className="case-content">
                {state.currentItem && (
                    <div className="current-preview">
                        {renderPreview()}
                    </div>
                )}

                {renderList()}
            </div>
        </div>
    );
}

export default Cases;