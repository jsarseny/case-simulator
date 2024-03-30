import React, { 
    useState, 
    useEffect, 
    useContext,
    useMemo
} from "react";

import Context from "../../utils/context.js";
import useLang from "../../hooks/useLang.js";
import Models, { getItemImageUrl } from "../../models/index.js";

import {
    WeaponTypes, 
    randomElement, 
    RARITY_PRIORITY,
} from "../../utils/chance.js";

import Shop from "./casino/Shop.js";
import Crash from "./casino/Crash.js";
import Craft from "./casino/Craft.js";
import Ripple from "../ui/Ripple.js";
import Upgrader from "./casino/Upgrader.js";
import Roulette from "./casino/Roulette.js";
import Contracts from "./casino/Contracts.js";

import "./Casino.css";

const getRandomImageByType = type => {
    var items = Models.Weapons.filter(item => {
        return RARITY_PRIORITY[item.rarity] > 3 && RARITY_PRIORITY[item.rarity] < 6;
    }).filter(item => {
        return WeaponTypes[type].includes(item.weaponName.toLowerCase())
    });

    return getItemImageUrl(randomElement(items));
}

const Casino = () => {
    const { GlobalState, setGlobalState, DeepLink } = useContext(Context);
    const lang = useLang(GlobalState, setGlobalState);

    const [ activePage, setActivePage ] = useState(null);

    const Pages = {
        roulette: <Roulette />,
        contract: <Contracts />,
        craft: <Craft />,
        upgrader: <Upgrader />,
        crash: <Crash />,
        shop: <Shop />
    }

    useEffect(() => {
        DeepLink.addEventListener("cs:/casino/focusTab", context => {
            if (!context || !context.tabId || !Pages[context.tabId]) return;

            setActivePage(context.tabId);
            DeepLink.emitEvent("cs:/global/focusTab?id=2");
        });
    }, [DeepLink]);
    
    const RifleImage = useMemo(() => getRandomImageByType("Rifles"), []);
    const SniperRifleImage = useMemo(() => getRandomImageByType("SniperRifles"), []);

    const renderContent = () => {
        if (!activePage) return <>
            <div className="casino-widgets">
                <div className="tab-title"><span>Skins</span></div>
                <div className="casino-page-widget ripple" onClick={() => setActivePage("craft")}>
                    <div className="title">
                        {lang.casino.craft}
                    </div>

                    <Ripple />
                </div>

                <div className="casino-page-widget rifles-background ripple" onClick={() => setActivePage("contract")}>
                    <img src={RifleImage} alt="" />

                    <div className="title">
                        {lang.casino.contract}
                    </div>

                    <Ripple />
                </div>
        
                <div className="casino-page-widget ripple" onClick={() => setActivePage("upgrader")}>
                    <div className="title">
                        {lang.casino.upgrader}
                    </div>

                    <Ripple />
                </div>

                <div className="tab-title"><span>Money</span></div>
                <div className="casino-page-widget ripple" onClick={() => setActivePage("roulette")}>
                    <div className="title">
                        {lang.casino.roulette}
                    </div>

                    <Ripple />
                </div>
                <div className="casino-page-widget ripple" onClick={() => setActivePage("crash")}>
                    <img src={SniperRifleImage} alt="" />

                    <div className="title">
                        {lang.casino.crash}
                    </div>

                    <Ripple />
                </div>
                <div className="casino-page-widget ripple" onClick={() => setActivePage("shop")}>
                    <div className="title">
                        {lang.casino.shop}
                    </div>

                    <Ripple />
                </div>
            </div>
            
        </>

        return (
            <div className="casino-page">
                <div className="casino-page-header">
                    <div className="back-button" onMouseDown={() => setActivePage(null)} title="Back To Casino">
                        <i className="uil uil-arrow-left" />
                    </div>
                    <span className="title">{lang.casino[activePage]}</span>
                </div>
                <div className="casino-page-content">
                    {Pages[activePage]}
                </div>
            </div>
        );
    }

    return (
        <div className="Casino">
            {renderContent()}
        </div>
    );
}

export default Casino;