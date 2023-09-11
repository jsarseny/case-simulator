import React, {  
    useRef, 
    useState,
    useEffect,
    useContext 
} from "react";

import useFlag from "../../../hooks/useFlag";
import useLang from "../../../hooks/useLang";
import Context from "../../../utils/context";
import Currency from "../../../utils/currency";
import AudioManager from "../../../utils/audio";
import buildClassName from "../../../utils/buildClassName";
import canvasAnimations from "../helpers/canvas";
import renderInventory, { getItemsPrice, getPriceRange } from "../helpers/renderInventory";

import { 
    randomInt, 
    getRarity,
    mathContract,
    RARITY_PRIORITY,
    getOutcomesChances,
    getLimitContainerRarities,
} from "../../../utils/chance";

import {
    deleteItem, 
    insertItem, 
    statistics 
} from "../helpers/transactions";

import Weapons, { getItemImageUrl } from "../../../models/weapons";

import Modal from "../../ui/Modal";
import Button from "../../ui/Button";
import { RadioGroup } from "../../ui/Radio";
import ItemPage, { upperFirst } from "../../ui/ItemPage";

import "./Craft.css";

const DEFAULT_STATE = {
    isSpinning: false,
    resultItem: null,
    isStatTrack: false,
    selectedRarity: 4,
    items: [],
    interactive: []
}

const renderOutcomes = (outcomes, isStatTrack) => {
    var items = outcomes.map(outcome =>  Weapons.find(weapon => weapon.id === outcome.id))
    
    items = items.map(item => {
        Object.keys(item.prices).forEach(key => {
            if (
                (key.includes("ST") && !isStatTrack)
                || (!key.includes("ST") && isStatTrack)
            ) delete item.prices[key];
        });

        return item;
    });

    return items;
}

const Craft = () => {
    const { GlobalState, setGlobalState } = useContext(Context);

    const lang = useLang(GlobalState);

    const [ isHelpModalOpen, openHelpModal, closeHelpModal ] = useFlag(false);

    const [ stage, setStage ] = useState("target");
    const [ state, setState ] = useState(DEFAULT_STATE);

    const SpinnerRef = useRef(null);
    const InteractiveRef = useRef(null);

    const renderTarget = () => {
        var { inventory } = renderInventory(GlobalState.profile.inventory.filter(item => item.id >= 0));
        var raritiesCount = new Map();

        inventory = inventory.filter(item => {
            if (item.rarity === "covert") return false;
            if (item.quality.includes("ST") && !state.isStatTrack) return false;
            if (!item.quality.includes("ST") && state.isStatTrack) return false;

            var currentRarity = raritiesCount.get(item.rarity);
            
            if (!currentRarity) currentRarity = 0;
            
            raritiesCount.set(item.rarity, currentRarity + 1);

            return true;
        });

        const rarities = Object.keys(RARITY_PRIORITY);
        const AvailableRarities = rarities.slice(rarities.indexOf("classified"));

        const handleChangeType = value => setState(prev => ({ ...prev, isStatTrack: Number(value) }));
        const handleChangeRarity = value => {
            var selectedRarity = Number(value);

            setState(prev => ({ 
                ...prev,
                selectedRarity,
                isStatTrack: selectedRarity > 1 ? prev.isStatTrack : false, 
            }));
        }

        return (
            <div className="craft-stage target-selection">
                <div className="radio-selection-row">
                    <div className="radio-group-column">
                        <RadioGroup 
                            title={lang.craft.rarity}
                            name="craft-target-rarity"
                            selected={state.selectedRarity}
                            onChange={handleChangeRarity}
                            buttons={AvailableRarities.map((rarity, i) => ({
                                value: RARITY_PRIORITY[rarity],
                                disabled: !raritiesCount.get(rarity),
                                label: <span className="craft-traget-rarity-name">
                                    <span>{lang.property["Rarity" + upperFirst(rarity.replace("-", ""))]}</span> 
                                    <span>{raritiesCount.get(rarity) || 0}</span>
                                </span>,
                                subLabel: <span className={buildClassName("RarityShade", rarity)} style={{ 
                                    width: Math.max(3, (raritiesCount.get(rarity) || 0) / inventory.length * 100) + "%"
                                }}/>
                            }))}
                        />
                    </div>

                    <div className="radio-group-column">
                        <RadioGroup 
                            title={lang.craft.extra}
                            name="craft-target-type"
                            selected={Number(state.isStatTrack)}
                            onChange={handleChangeType}
                            buttons={[{
                                value: 0,
                                label: "Default",
                                subLabel: lang.craft.defaultSubtitle
                            }, {
                                value: 1,
                                disabled: state.selectedRarity < 2,
                                label: "StatTrak™",
                                subLabel: lang.craft.stattrackSubtitle
                            }]}
                        />
                    </div>
                </div>
                
                <div className="target-actions">
                    <Button 
                        children={lang.common.next}
                        onClick={() => setStage("items")}
                    />
                </div>
            </div>
        );
    }

    const renderItemsSelector = () => {
        var { inventory } = renderInventory(GlobalState.profile.inventory);

        inventory = inventory.filter(item => {
            if (
                RARITY_PRIORITY[item.rarity] > 4
                || RARITY_PRIORITY[item.rarity] !== state.selectedRarity
                || (state.isStatTrack && !item.quality.includes("ST"))
                || (!state.isStatTrack && item.quality.includes("ST"))
            ) return false;

            var limited = getLimitContainerRarities(item.collectionId);

            return limited[limited.length - 1] !== item.rarity;
        });

        const handleSumbmitSelection = selected => {
            setState(prev => ({
                ...prev,
                items: selected
            }));

            setStage("result");
        }

        const SymbolRarity = getRarity(state.selectedRarity);
        const LocaleRarity = lang.property["Rarity" + upperFirst(SymbolRarity).replace("-", "")];

        return (
            <div className="craft-stage items-selection">
                <div className="tab-title mini">
                    <span>
                        Select 10 
                        <b>
                            {state.isStatTrack && <font className="QualityShade stattrack"> StatTrak™</font>}
                            <font className={buildClassName("RarityShade", SymbolRarity)}> {LocaleRarity}</font>
                        </b>
                    </span>
                </div>
                <ItemPage 
                    items={inventory}
                    shouldStorages={false}
                    selectConfig={{
                        enable: true,
                        min: 10,
                        max: 10,
                        listener: "click",
                        actions: [{
                            onClick: handleSumbmitSelection,
                            children: lang.common.next
                        }]
                    }}
                />  
            </div>
        );
    }

    const degToRad = rad => rad * Math.PI / 180;

    const getSpinnerMeta = () => {
        var spinner = document.querySelector(".Craft .craft-spinner");

        var rect = spinner.getBoundingClientRect();
        var center = rect.width / 2;
        var R = center - 24;

        return { rect, center, R }
    }

    const initInteractiveSpinner = () => {
        const { center, R } = getSpinnerMeta(); 
        const items = [];

        let step = 360 / 10;
        for (let i = 0; i < 360; i += step) {
            let x = center + R * Math.cos(degToRad(i)) - 40;
            let y = center + R * Math.sin(degToRad(i)) - 40;
            let image = getItemImageUrl(state.items[i / step]);
            let rotate = randomInt(-35, 40);

            items.push({ deg: i, x, y, image, rotate, element: null });
        }

        return items;
    }

    const renderInteractiveItem = item => {
        const { element, x, y, rotate } = item;
        element.style.left = x + "px";
        element.style.bottom = y + "px";
        element.style.transform = `rotate(${rotate}deg)`;
    }

    const Animation = {
        radius: null,
        speed: null,

        init() {
            this.radius = getSpinnerMeta().R;
            this.speed = 0;
        },

        start(callback) {
            const config = {
                original_radius: this.radius,
                frames: 0,
                max_speed: 1.5,
                hidden_bg: false,
                a: 0.00005
            }

            const render = () => {
                this.spin();

                config.frames += 1;
                this.speed = Math.min(this.speed + config.a * config.frames, config.max_speed);

                if (this.speed >= config.max_speed && !config.hidden_bg) {
                    config.hidden_bg = true;
                    state.interactive.forEach(item => {
                        item.element.style.background = "transparent";
                        item.element.style.boxShadow = "none";
                        item.element.style.filter = "invert(1)";
                        item.element.style.opacity = 0;
                    });
                }

                if (this.speed >= config.max_speed) this.radius = Math.max(0, this.radius - (1 + config.a * config.frames));

                if (this.radius < config.original_radius / 1.9 && !SpinnerRef.current.classList.contains("spinning")) {
                    SpinnerRef.current.classList.add("spinning");
                }

                if (this.radius <= 0) return callback();

                requestAnimationFrame(render);
            }

            requestAnimationFrame(render);
        },

        spin() {
            let { center } = getSpinnerMeta();

            setState(prev => {
                let { interactive } = prev;
                
                interactive = interactive.map(item => {
                    item.deg -= this.speed;
                    item.x = center + this.radius * Math.cos(degToRad(item.deg)) - 40;
                    item.y = center + this.radius * Math.sin(degToRad(item.deg)) - 40;
    
                    renderInteractiveItem(item);
    
                    return item;
                });
    
                return { ...prev, interactive }
            });
        }
    }
    
    useEffect(() => {
        if (stage !== "result" || !SpinnerRef.current || state.interactive.length > 0) return;

        var interactive = initInteractiveSpinner();
        
        interactive = interactive.map(item => {
            let elem = document.createElement("div");
            let container = InteractiveRef.current;

            item.element = elem;

            elem.classList.add("spinner-interactive-item");
            elem.innerHTML = `<img src=${item.image} />`;
            
            container.appendChild(elem);

            renderInteractiveItem(item);

            return item;
        });

        setState(prev => ({ ...prev, interactive }));
    }, [stage, state.interactive.length]);

    const renderResult = () => {
        const { resultItem } = state;

        const getCssColor = item => {
            var resultRarity = item.rarity.toLowerCase().replace(/ |-/ig, "");
            return getComputedStyle(document.querySelector("body")).getPropertyValue(`--color-${resultRarity}`).trim();
        }

        const handleSign = () => {
            setState(prev => ({ ...prev, isSpinning: true }));

            const resultItem = mathContract(state.items, state.isStatTrack);

            deleteItem(setGlobalState, state.items.map(item => item.uid));

            statistics.edit(setGlobalState, "TotalCraftsMade", 1);

            insertItem(setGlobalState, {
                id: resultItem.id,
                quality: resultItem.quality
            }, 1);

            var canvas = document.getElementById("craft-effects");   
            canvasAnimations.blackHole(canvas, `rgb(${getCssColor(state.items[0])})`, 5000, SpinnerRef.current);

            Animation.init();
            Animation.start(() => {
                setState(prev => ({ ...prev, resultItem }));

                AudioManager.playAudio(GlobalState, `./assets/mp3/grant-${resultItem.rarity}.mp3`, 0.35);

                canvasAnimations.centralParticles(canvas, `rgb(${getCssColor(resultItem)})`, undefined, document.getElementById("craft-spinner"));
            });
        }

        const handleReset = () => {
            setStage("target");
            setState(prev => ({
                ...DEFAULT_STATE,
                selectedRarity: prev.selectedRarity,
                isStatTrack: prev.isStatTrack
            }));
        }

        const shade = (resultItem && resultItem.rarity) || getRarity(state.selectedRarity);

        const totalPrice = getItemsPrice(state.items);
        const priceRange = getPriceRange(
            renderOutcomes(getOutcomesChances(state.items), state.isStatTrack)
        );

        return (
            <div className="craft-stage result">
                <div className="craft-spinner-container">
                    <div className="craft-spinner" ref={SpinnerRef} id="craft-spinner">
                        <div className="interactive-container" ref={InteractiveRef}></div>
                        
                        <div className={buildClassName("craft-spinner-inside RarityShade", shade)}>
                            <div className="item-video-background">
                                <div className="color-bg" />
                                <video object-fit="fill" width="100%" height="100%" loop autoPlay muted playsInline>
                                    <source src="./assets/shine.webm" type="video/webm" />
                                </video>
                            </div>

                            <div className="craft-result-area">
                                {resultItem && <div className="result-item">
                                    <img draggable="false" src={getItemImageUrl(resultItem)} alt="" />
                                    <span className="weapon-name">
                                        {resultItem.quality.includes("ST") && (
                                            <font className="QualityShade stattrack colored">StatTrak™ </font>
                                        )}
                                        {resultItem.weaponName}
                                    </span>
                                    <span className="skin-name">{resultItem.skinName}</span>
                                </div>}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="background-canvas">
                    <canvas id="craft-effects"></canvas>
                </div>                               

                <div className="craft-result-actions">
                    <div className="craft-subtitle">
                        <span>{lang.craft.craftPrice}: {Currency.renderPrice(GlobalState, totalPrice)}</span>
                        <span>{lang.craft.craftRange}: {Currency.renderPrice(GlobalState, priceRange.min)} - {Currency.renderPrice(GlobalState, priceRange.max)}</span>
                    </div>

                    <div className="craft-buttons">
                        {state.resultItem 
                            ? <Button 
                                children="New Contract"
                                onClick={handleReset}
                            />
                            : <Button 
                                children="Sign contract"
                                disabled={state.isSpinning}
                                onClick={handleSign}
                            />
                        }

                        <Button 
                            className="symbol"
                            children="?"
                            title="Outcomes Help"
                            disabled={state.isSpinning}
                            onClick={openHelpModal}
                        />
                    </div>
                </div>
            </div>
        );
    }

    const renderHelpModal = () => {
        const outcomes = getOutcomesChances(state.items).map(({ id, chance }) => {
            let item = Weapons.find(weapon => weapon.id === id);
            item.price = Math.max(...Object.values(item.prices));

            return {
                chance,
                item: Weapons.find(weapon => weapon.id === id)
            }
        }).sort((a, b) => a.item.price > b.item.price ? -1 : 1);

        return <Modal 
            title={`Outcomes - ${outcomes.length}`}
            className="craft-help-modal"
            onCancel={closeHelpModal}
            actions={[{ children: lang.common.cancel }]}
        >
            <div className="outcomes custom-scroll">
                {outcomes.map(({ item, chance }, i) => (
                    <div className="item-row" key={i}>
                        <div className="item-column image">
                            <img src={getItemImageUrl(item)} draggable="false" alt="" />
                        </div>
                        <div className="item-column name">
                            <b><font className={`RarityShade ${item.rarity} colored`}>{buildClassName(item.weaponName, "|", item.skinName)}</font></b>
                        </div>
                        <div className="item-column chance">
                            {chance}%
                        </div>
                    </div>
                ))}
            </div>
        </Modal>
    }

    return (
        <div className="Craft">
            {stage === "target" && renderTarget()}
            {stage === "items" && renderItemsSelector()}
            {stage === "result" && renderResult()}
            {isHelpModalOpen && renderHelpModal()}
        </div>
    );
}

export default Craft;