import React, { useEffect, useLayoutEffect, useState } from "react";
import Context from "../utils/context";
import StoredMainContext from "../utils/store";

import Menu from "./ui/Menu";
import Modal from "./ui/Modal";
import MiddleContent from "./middle/MiddleContent";

const Main = () => {
    const [
        GlobalState,
        setGlobalState
    ] = useState(StoredMainContext);

    const [ modals, setModals ] = useState([]);

    useLayoutEffect(() => {
        localStorage.setItem("cs-csgo-store", JSON.stringify(GlobalState));
    }, [ GlobalState ]);

    const tabs = [ "Cases", "Profile", "Casino" ];

    const createModal = modal => {
        setModals(prev => {
            prev.push(modal);

            return prev;
        });
    }

    const removeModal = (id, callback) => {
        if (callback) callback();

        return setModals(prev => {
            prev.splice(id, 1);

            return prev;
        });
    }

    return (
        <Context.Provider
            value={{ GlobalState, setGlobalState, createModal }}
        >
            <div className="Main">
                <div className="Header">
                    <span>{tabs[GlobalState.activeTab]}</span>
                </div>

                <MiddleContent />
                <Menu />
            </div>
        </Context.Provider>
    );
}

export default Main;