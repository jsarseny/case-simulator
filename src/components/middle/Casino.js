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
import Crash from "./casino/Crash";
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

    const availableItems = Weapons.filter(item => {
        return RARITY_PRIORITY[item.rarity] > 3 && RARITY_PRIORITY[item.rarity] < 6;
    });

    const getRandomImageByType = type => {
        var items = availableItems.filter(item => {
            return WeaponTypes[type].includes(item.weaponName.toLowerCase())
        });

        return getItemImageUrl(randomElement(items));
    }

    const RifleImage = getRandomImageByType("Rifles");
    const SniperRifleImage = getRandomImageByType("SniperRifles");

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