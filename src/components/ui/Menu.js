import React, { 
    useState,
    useEffect, 
    useContext
} from "react";

import useFlag from "../../hooks/useFlag"
import Currency from "../../utils/currency";
import useLang, { LangModels } from "../../hooks/useLang";

import Modal from "./Modal";
import Ripple from "./Ripple";
import Dropdown from "./Dropdown";
import Context from "../../utils/context";
import buildClassName from "../../utils/buildClassName";

import "./Menu.css";

const Menu = () => {
    const { GlobalState, setGlobalState, DeepLink } = useContext(Context);

    const lang = useLang(GlobalState);

    const [ isSettingsOpen, openSettings, closeSettings ] = useFlag(false)

    const [ isOpen, setIsOpen ] = useState(false);

    const handleClick = id => {
        setGlobalState(prev => ({
            ...prev,
            activeTab: id
        }));
    }

    const handleMenuClick = () => setIsOpen(prev => !prev);
    const handleBackdropClick = () => isOpen && setIsOpen(false);

    const handleChangeCurrency = currency => {
        currency = currency.slice(2).trim();

        if (!(currency in Currency.models)) return;

        setGlobalState(prev => ({
            ...prev,
            settings: {
                ...prev.settings,
                currency
            }
        }));
    }
    
    const handleChangeLang = lang => {
        lang = lang.trim();

        let code;

        Object.keys(LangModels).forEach(key => {
            if (LangModels[key].localeName === lang) code = key;
        });

        if (!code) return;

        setGlobalState(prev => ({
            ...prev,
            settings: {
                ...prev.settings,
                lang: code.toUpperCase()
            }
        }));
    }

    useEffect(() => {
        DeepLink.addEventListener("cs:/global/focusTab", context => {
            if (!context || !context.id) return;

            let tabId = Number.parseInt(context.id);
            if (Number.isNaN(tabId) || tabId < 0 || tabId > (Tabs.length + SecondaryTabs.length)) return;

            handleClick(tabId);
        });
    }, []);

    const Tabs = [{
        icon: "uil-gift",
        title: lang.tabs.cases
    }, {
        icon: "uil-user-circle",
        title: lang.tabs.profile
    }, {
        icon: "uil-dice-five",
        title: lang.tabs.casino
    }];

    const SecondaryTabs = [{
        icon: "uil-analytics",
        title: lang.tabs.statistics
    }];

    const renderSettingsModal = () => {
        const currencies = Currency.models;
        const activeCurrency = Object.keys(currencies).indexOf(GlobalState.settings.currency) || 0;

        const langs = LangModels;
        const activeLang = Object.keys(langs).indexOf(GlobalState.settings.lang) || 0;

        return <Modal 
            title={lang.tabs.settings}
            className="settings-modal"
            onCancel={closeSettings}
            canInstantClose={true}
            actions={[]}
        >
            <Dropdown 
                active={activeLang}
                onChange={handleChangeLang}
                options={Object.keys(langs).map(key => langs[key].localeName)}
            />

            <Dropdown 
                active={activeCurrency}
                onChange={handleChangeCurrency}
                options={Object.keys(currencies).map(key => `${currencies[key].symbol} ${key}`)}
            />
        </Modal>
    }

    return (
        <div className={buildClassName("Menu", isOpen && "open")} onClick={handleBackdropClick}>
            <div className="menu-bar">
                <div className="menu-snippet" onClick={handleMenuClick}>
                    <div className="Tab">
                        <i className="uil uil-bars" />
                        <span>{lang.tabs.menu}</span>
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
                                GlobalState.activeTab === i && "active"
                            )}
                        >
                            <i className={`uil ${tab.icon}`} />
                            <span>{tab.title}</span>

                            <Ripple />
                        </div>
                    ))}
                </div>

                <div className="secondary-tabs menu-tabs">
                    {SecondaryTabs.map((tab, i) => (
                        <div
                            key={i}
                            title={tab.title}
                            onClick={() => handleClick(Tabs.length + i)}
                            className={buildClassName(
                                "Tab", "ripple",
                                GlobalState.activeTab === Tabs.length + i && "active"
                            )}
                        >
                            <i className={`uil ${tab.icon}`} />
                            <span>{tab.title}</span>

                            <Ripple />
                        </div>
                    ))}

                    <div
                        title={lang.tabs.settings}
                        onClick={openSettings}
                        className="Tab ripple"
                    >
                        <i className="uil uil-setting" />
                        <span>{lang.tabs.settings}</span>

                        <Ripple />
                    </div>        
                </div>
            </div>

            {isSettingsOpen && renderSettingsModal()}
        </div>
    );
}

export default Menu;