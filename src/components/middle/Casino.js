import React, { 
    useState, 
    useEffect, 
    useContext
} from "react";

import Context from "../../utils/context";
import useLang from "../../hooks/useLang";
import Weapons, { getItemImageUrl } from "../../models/weapons";

import {
    WeaponTypes, 
    randomElement, 
    RARITY_PRIORITY,
} from "../../utils/chance";

import Shop from "./casino/Shop";
import Craft from "./casino/Craft";
import Ripple from "../ui/Ripple";
import Upgrader from "./casino/Upgrader";
import Roulette from "./casino/Roulette";
import Contracts from "./casino/Contracts";

import "./Casino.css";

const Casino = () => {
    const { GlobalState, DeepLink } = useContext(Context);
    const lang = useLang(GlobalState);

    const [ activePage, setActivePage ] = useState(null);

    const Pages = {
        roulette: <Roulette />,
        contract: <Contracts />,
        craft: <Craft />,
        upgrader: <Upgrader />,
        shop: <Shop />
    }

    useEffect(() => {
        DeepLink.addEventListener("cs:/casino/focusTab", context => {
            if (!context || !context.tabId || !Pages[context.tabId]) return;

            setActivePage(context.tabId);
            DeepLink.emitEvent("cs:/global/focusTab?id=2");
        });
    }, [DeepLink]);

    const availableItems = Weapons.filter(item => {
        return RARITY_PRIORITY[item.rarity] > 3 && RARITY_PRIORITY[item.rarity] < 6;
    });

    const getRandomImageByType = type => {
        var items = availableItems.filter(item => {
            return WeaponTypes[type].includes(item.weaponName.toLowerCase())
        });

        return getItemImageUrl(randomElement(items))
    }

    const renderContent = () => {
        if (!activePage) return <>
            <div className="casino-widgets">
                <div className="tab-title"><span>Skins</span></div>
                <div className="casino-page-widget native-contracts ripple" onClick={() => setActivePage("craft")}>
                    <div className="icon">
                        <i className="uil uil-briefcase-alt" />
                    </div>
                    <div className="title">
                        {lang.casino.craft}
                    </div>

                    <Ripple />
                </div>

                <div className="casino-page-widget contracts ripple" onClick={() => setActivePage("contract")}>
                    <img src={getRandomImageByType("Rifles")} alt="" />

                    <div className="icon">
                        <i className="uil uil-briefcase" />
                    </div>
                    <div className="title">
                        {lang.casino.contract}
                    </div>

                    <Ripple />
                </div>
        
                <div className="casino-page-widget upgrader ripple" onClick={() => setActivePage("upgrader")}>
                    <div className="icon">
                        <i className="uil uil-angle-double-up" />
                    </div>
                    <div className="title">
                        {lang.casino.upgrader}
                    </div>

                    <Ripple />
                </div>

                <div className="tab-title"><span>Money</span></div>
                <div className="casino-page-widget rulette ripple" onClick={() => setActivePage("roulette")}>
                    <div className="icon">
                        <i className="uil uil-money-bill-stack" />
                    </div>
                    <div className="title">
                        {lang.casino.roulette}
                    </div>

                    <Ripple />
                </div>
                <div className="casino-page-widget shop ripple" onClick={() => setActivePage("shop")}>
                    <img src={getRandomImageByType("SniperRifles")} alt="" />

                    <div className="icon">
                        <i className="uil uil-store-alt" />
                    </div>
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