import React, { useContext, useState } from "react";

import Ripple from "./Ripple";
import Context from "../../utils/context";
import buildClassName from "../../utils/buildClassName";

import "./Menu.css";

const Menu = () => {
    const { GlobalState, setGlobalState } = useContext(Context);

    const [ isOpen, setIsOpen ] = useState(false);

    const handleClick = id => {
        setGlobalState(prev => ({
            ...prev,
            activeTab: id
        }));
    }

    const handleMenuClick = () => setIsOpen(prev => !prev);
    const handleBackdropClick = () => isOpen && setIsOpen(false);

    const Tabs = [{
        icon: "uil-gift",
        title: "Cases"
    }, {
        icon: "uil-user-circle",
        title: "Profile"
    }, {
        icon: "uil-dice-five",
        title: "Casino"
    }];

    return (
        <div className={buildClassName("Menu", isOpen && "open")} onClick={handleBackdropClick}>
            <div className="menu-bar">
                <div className="menu-snippet" onClick={handleMenuClick}>
                    <div className="Tab">
                        <i className="uil uil-bars" />
                        <span>Menu</span>
                    </div>
                </div>

                <div className="menu-tabs">
                    {Tabs.map((tab, i) => (
                        <div
                            key={i}
                            title={tab.title}
                            onClick={() => handleClick(i)}
                            className={buildClassName(
                                "Tab", "ripple",
                                GlobalState.activeTab == i && "active"
                            )}
                        >
                            <i className={`uil ${tab.icon}`} />
                            <span>{tab.title}</span>

                            <Ripple />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Menu;