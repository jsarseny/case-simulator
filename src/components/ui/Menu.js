import React, { 
    useState,
    useEffect, 
    useContext
} from "react";

import useFlag from "../../hooks/useFlag.js"
import Currency from "../../utils/currency.js";
import useLang, { LangModels } from "../../hooks/useLang.js";

import Modal from "./Modal.js";
import Ripple from "./Ripple.js";
import Dropdown from "./Dropdown.js";
import Context from "../../utils/context.js";
import buildClassName from "../../utils/buildClassName.js";

import "./Menu.css";

const tabs = [ "cases", "profile", "casino", "statistics" ];

const Menu = () => {
    const { GlobalState, setGlobalState, DeepLink } = useContext(Context);

    const lang = useLang(GlobalState, setGlobalState);

    const [ isSettingsOpen, openSettings, closeSettings ] = useFlag(false);
    const [ masterVolume, setMasterVolume ] = useState(GlobalState.settings.masterVolume * 100);

    const [ isOpen, setIsOpen ] = useState(false);

    const distributeOptimization = id => {
        tabs.forEach((tab, i) => {
            let enable = Number(id !== i);

            DeepLink.emitEvent(`cs:/global/optimizationRequest?target=${tab}&enable=${enable}`);
        });
    }

    const handleClick = id => {
        distributeOptimization(id);

        setGlobalState(prev => ({
            ...prev,
            activeTab: id
        }));
    }

    const handleMenuClick = () => setIsOpen(prev => !prev);
    const handleBackdropClick = () => isOpen && setIsOpen(false);

    const handleVolumeChange = e => {
        var { value } = e.currentTarget;

        if (!value) value = 0;
        if (!/^[0-9]{1,}$/ig.test(value)) {
            e.preventDefault();
            e.stopPropagation();

            return false;
        }

        value = Number(value);

        if (value < 0) value = 0;
        if (value > 100) value = 100;

        setMasterVolume(value);

        setGlobalState(prev => ({
            ...prev,
            settings: {
                ...prev.settings,
                masterVolume: value / 100
            }
        }));
    }

    const handleChangeCurrency = currency => {
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
            <div className="settings-row">
                <div className="settings-column">
                    {lang.modals.settings.language}:
                </div>
                <div className="settings-column">
                    <Dropdown 
                        active={activeLang}
                        onChange={handleChangeLang}
                        options={Object.keys(langs).map(key => ({ label: langs[key].localeName, value: langs[key].localeName }))}
                    />
                </div>  
            </div>
            <div className="settings-row">
                <div className="settings-column">
                    {lang.modals.settings.currency}:
                </div>
                <div className="settings-column">
                    <Dropdown 
                        active={activeCurrency}
                        onChange={handleChangeCurrency}
                        options={Object.keys(currencies).map(key => ({ 
                            label: `${currencies[key].symbol} ${key}`,
                            value: key
                        }))}
                    />
                </div>  
            </div>
            <div className="settings-row">
                <div className="settings-column">
                    {lang.modals.settings.volume}:
                </div>
                <div className="settings-column">
                    <input 
                        value={masterVolume}
                        onChange={handleVolumeChange}
                        type="number" 
                        min="0" 
                        max="100" 
                        step="1" 
                    /> %
                </div>  
            </div>
            <div className="settings-footer">
                <div className="footer-row">cs-csgo dist v{GlobalState.version}</div>
                <div className="footer-row">Open source on&nbsp;<a className="link" href="https://github.com/jsarseny/case-simulator" target="_blank">GitHub</a></div>
            </div>
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