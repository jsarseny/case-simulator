import React, { useState } from "react";

import Shop from "./Shop";
import Ripple from "../ui/Ripple";
import Upgrader from "./Upgrader";
import Roulette from "./Roulette";
import Contracts from "./Contracts";
import FreeContract from "./FreeContract";

import "./Casino.css";

const Casino = () => {
    const [ activePage, setActivePage ] = useState(null);

    const Pages = {
        "Luck Roulette": <Roulette />,
        Craft: <Contracts />,
        Contract: <FreeContract />,
        Upgrader: <Upgrader />,
        Shop: <Shop />
    }

    const renderContent = () => {
        if (!activePage) return <>
            <div className="casino-widgets">
                <div className="tab-title"><span>Skins</span></div>
                <div className="casino-page-widget native-contracts ripple" onClick={() => setActivePage("Craft")}>
                    <div className="icon">
                        <i className="uil uil-briefcase-alt" />
                    </div>
                    <div className="title">
                        craft
                    </div>

                    <Ripple />
                </div>

                <div className="casino-page-widget contracts ripple" onClick={() => setActivePage("Contract")}>
                    <img src="https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhnwMzJemkV0966m4-PhOf7Ia_ummJW4NE_3rnHpdujjgK28kE5Y2Gid9WWdQ44YVHS-VS9wr--jJG6tJrAzCBh6D5iuyjdE47G3Q" />

                    <div className="icon">
                        <i className="uil uil-briefcase" />
                    </div>
                    <div className="title">
                        contract
                    </div>

                    <Ripple />
                </div>
        
                <div className="casino-page-widget upgrader ripple" onClick={() => setActivePage("Upgrader")}>
                    <div className="icon">
                        <i className="uil uil-angle-double-up" />
                    </div>
                    <div className="title">
                        upgrader
                    </div>

                    <Ripple />
                </div>

                <div className="tab-title"><span>Money</span></div>
                <div className="casino-page-widget rulette ripple" onClick={() => setActivePage("Luck Roulette")}>
                    <div className="icon">
                        <i className="uil uil-money-bill-stack" />
                    </div>
                    <div className="title">
                        luck roulette
                    </div>

                    <Ripple />
                </div>
                <div className="casino-page-widget shop ripple" onClick={() => setActivePage("Shop")}>
                <img src="https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FAR17P7NdShR7eO3g5C0m_7zO6-fxj5SvsMkib-W9N7zilLjr0NoYW_wI4OTelRvYwmC-FTrxeq915a074OJlyVOUzvCjQ" />

                    <div className="icon">
                        <i className="uil uil-store-alt" />
                    </div>
                    <div className="title">
                        shop
                    </div>

                    <Ripple />
                </div>
            </div>
            
        </>

        return (
            <div className="casino-page">
                <div className="casino-page-header">
                    <div className="back-button" onMouseDown={() => setActivePage(null)}>
                        <i className="uil uil-arrow-left" />
                    </div>
                    <span className="title">{activePage}</span>
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