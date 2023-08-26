import React, { 
    useState,  
    useEffect,
    useContext,
    useCallback, 
} from "react"; 

import useLang from "../../hooks/useLang";
import Context from "../../utils/context";
import Currency from "../../utils/currency";
import AudioManager from "../../utils/audio.js";
import buildClassName from "../../utils/buildClassName";
import renderInventory from "./helpers/renderInventory";
import Collections, { getCollectionById } from "../../models/collections";

import { upperFirst } from "../ui/ItemPage";

import { 
    randomFloat,
    mathContainer, 
    selectRareItem, 
    mathCollection,
    RARITY_PRIORITY
} from "../../utils/chance";

import { 
    sellItem, 
    insertItem, 
    statistics, 
} from "./helpers/transactions";

import { 
    getItemImageUrl, 
    getCollectionItems
} from "../../models/weapons";

import Button from "../ui/Button";
import Item, { ItemList } from "../ui/Item";

import "./Cases.css";

const ROLL_TIME = 5500;
const FINAL_TIME = 500;

const ROLL_TRANSITION = `margin ${ROLL_TIME}ms cubic-bezier(0.19, 0.02, 0, 0.98)`;
const FINAL_TRANSITION = `margin ${FINAL_TIME}ms cubic-bezier(0.33, 1, 0.68, 1)`;
const GHOST_ANIMATION_TRANSITION = "all .45s cubic-bezier(0.33, 1, 0.68, 1)";

export const animateGhost = (elements, delay = 20) => {
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

const CaseItem = ({ className, item }) => {
    return (
        <div className={buildClassName("CaseItem RarityShade", item.rarity, className && className)}>
            <div className="image">
                <img src={getItemImageUrl(item)} alt="" />
            </div>
            <span className="rarity-color" />
        </div>
    );
}

const Cases = () => {
    const { GlobalState, setGlobalState, DeepLink } = useContext(Context);
    const [ collectionFilter, setCollectionFilter ] = useState("case");

    const lang = useLang(GlobalState);

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

        if (!bestDrop || !bestDrop.quality) return null;

        const item = getExtendedItem(bestDrop);
        const from = getCollectionById(bestDrop.from);

        return { item, from }
    }, [GlobalState]);

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
    }, [GlobalState, setGlobalState]);

    const handleCaseChoose = item => {
        if (item && item !== state.currentItem) {
            AudioManager.playAudio(GlobalState, "./assets/mp3/case-drop.mp3", 0.05);
        }
       

        setState(prev => ({
            ...prev,
            droppedItem: null,
            currentItem: item
        }));
    }

    const handleItemDrop = item => {
        if (item.rarity === "gold") statistics.edit(setGlobalState, "TotalGoldDropped", 1); 
        if (item.rarity === "covert") statistics.edit(setGlobalState, "TotalCovertDropped", 1);

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

        const isContainer = state.currentItem.type === "case";

        if (state.currentItem.price) statistics.edit(setGlobalState, "TotalCratesPrice", state.currentItem.price);
        statistics.edit(setGlobalState, isContainer ? "TotalCratesOpened" : "TotalSouvenirsOpened", 1);

        var items = [], dropped = randomFloat(90, 140);
        var worker = isContainer ? mathContainer : mathCollection;

        for (let i = 0; i < 150; i++) items.push(worker(state.currentItem.id));

        AudioManager.playAudio(GlobalState, "./assets/mp3/case-unlock.mp3", 0.1);
        AudioManager.playAudio(GlobalState, "./assets/mp3/case-open.mp3", 0.4);

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
        insertItem(setGlobalState, item, 0);
        handleCaseChoose(state.currentItem);
    }

    const handleItemSell = item => {
        sellItem(setGlobalState, item, false);
        handleCaseChoose(state.currentItem);
    }

    const initCaseAudio = (items, caret) => {
        var caretBox = caret.getBoundingClientRect();
        var usedIds = [];
        var isLoop = true;
        var frames = 0;

        const loop = () => {
            if (!isLoop) return;

            frames += 1;
            let isUsed = false;
            items.forEach((item, i) => {
                if (isUsed) return;

                var itemBox = item.getBoundingClientRect();

                if (
                    itemBox.x <= caretBox.x 
                    && !usedIds.includes(i)
                ) {
                    usedIds.push(i);
                    isUsed = true;

                    AudioManager.playAudio(GlobalState, "./assets/mp3/roll.mp3", 0.1 + 0.001 * frames);
                }
            });

            requestAnimationFrame(loop);
        }

        loop();

        const stopAudio = () => isLoop = false;

        return { stopAudio }
    }

    useEffect(() => {
        DeepLink.addEventListener("cs:/cases/focus", context => {
            if (!context || !context.cid) return;

            let collection = getCollectionById(context.cid);

            if (!collection) return;

            handleCaseChoose(collection);
            DeepLink.emitEvent("cs:/global/focusTab?id=0");
        });
    }, [DeepLink]);

    useEffect(() => {
        animateGhost(document.querySelectorAll(".Cases .current-list .Item"));
    }, [state.currentItem]);

    useEffect(() => {

        const currentOpen = state.currentOpen;

        if (!currentOpen.open) return;
        
        var rollItems = document.querySelectorAll(".current-case-roll .CaseItem")
        var caret = document.querySelector(".current-case-roll span.caret");
        var container = document.querySelector(".current-case-roll .roll");

        const { stopAudio } = initCaseAudio(rollItems, caret);

        var element = rollItems[0];

        var elementBox = element.getBoundingClientRect();
        var caretBox = caret.getBoundingClientRect();
        var containerBox = container.getBoundingClientRect();
        var deltaX = containerBox.width + (caretBox.x - elementBox.x);

        var margin = -((elementBox.width * currentOpen.dropped) + ((Math.floor(currentOpen.dropped) - 1) * 4) - deltaX);
        element.style.marginLeft = `${margin}px`;
        element.style.transition = ROLL_TRANSITION;


        window.setTimeout(() => {
            let droppedIndex = Math.floor(currentOpen.dropped);
            let droppedItem = rollItems[droppedIndex].getBoundingClientRect();
            let finalMargin = margin + ((caretBox.x + caretBox.width / 2) - (droppedItem.x + droppedItem.width / 2));

            element.style.transition = FINAL_TRANSITION;
            element.style.marginLeft = `${finalMargin}px`;

            stopAudio();

            window.setTimeout(() => {
                var dropped = state.currentOpen.items[Math.floor(currentOpen.dropped)];

                AudioManager.playAudio(GlobalState, `./assets/mp3/grant-${dropped.rarity}.mp3`, 0.35);

                handleItemDrop(dropped);
            }, FINAL_TIME);
        }, ROLL_TIME + 150);
    }, [state.currentOpen]);

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
                            <Button onClick={() => handleItemSell(droppedItem)} negative>{lang.common.sell}</Button>
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
                                className={!i && "first-item"}
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
                    {item.price && <span className="price">{Currency.renderPrice(GlobalState, item.price)}</span>}
                </div>
                
                <div className="actions">
                    <span className="action-line">{item.fullName}</span>
                    <span className="action-line">
                        <Button onClick={handleCaseOpen}>
                            {lang.cases["open" + upperFirst(item.type)]}
                        </Button>
                    </span>
                </div>
            </div>
        );
    }

    const renderList = () => {
        const bestDrop = getBestDrop();
        
        if (!state.currentItem) return <>
            {bestDrop && (
                <div className="best-drop">
                    <div className="item-container">
                        <Item 
                            item={bestDrop.item}
                            ripple={false}
                            onClick={() => handleCaseChoose(bestDrop.from)}
                        />
                    </div>
                    <div className="item-info">
                        <span>{lang.cases.bestDrop}</span>
                        <span>{lang.common.from}: <a onClick={() => handleCaseChoose(bestDrop.from)}>«{bestDrop.from.fullName}»</a></span>
                    </div>
                </div>
            )}

            <div className="current-list collections-list">
                <div className="tab-list">
                    <span 
                        children={lang.cases.cases}
                        onMouseDown={() => setCollectionFilter("case")}
                        className={buildClassName(collectionFilter == "case" && "active")}
                    />
                    <span 
                        children={lang.cases.special}
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