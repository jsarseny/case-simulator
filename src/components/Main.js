import React, { useEffect, useLayoutEffect, useState } from "react";
import Context from "../utils/context";
import StoredMainContext from "../utils/store";

import Menu from "./ui/Menu";
import Modal from "./ui/Modal";
import MiddleContent from "./middle/MiddleContent";

const ReleaseNotesModal = ({ globalState, globalDispatch }) => {
    const handleClose = () => {
        globalDispatch(prev => ({
            ...prev,
            readNotes: true
        }));
    }

    return <Modal 
        title={`v${globalState.version} Release Notes`}
        className="version-release-notes-modal"
        onCancel={handleClose}
        actions={[{ children: "Great!" }]}
    >
        <ul>
            <li>Newest <b>Revolution Case</b> is already avaliable in <b>Cases</b>!</li>
            <li><b>Luck Roulette</b> - new casino money up mode</li>
            <li>In the <b>Shop</b> section you can now select the number of items to buy!</li>
            <li>Added this list btw =)</li>
            <li>Various layout improvements</li>
        </ul>

        <b>GL HF!</b>
    </Modal>
}

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

            {!GlobalState.readNotes && <ReleaseNotesModal 
                globalState={GlobalState}
                globalDispatch={setGlobalState}
            />}
        </Context.Provider>
    );
}

export default Main;