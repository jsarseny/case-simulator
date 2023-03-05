import React, { 
    useState, 
    useLayoutEffect
} from "react";

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
        canInstantClose={false}
        className="version-release-notes-modal"
        onCancel={handleClose}
        actions={[{ children: "Great!" }]}
    >
        <ul>
            <li>Finally - <b>Settings</b></li>
            <li>Now You can change Currency and Language</li>
            <li>Additional tools on contracts sing</li>
            <li>Storages optimization, speed and size</li>
            <li>Various layout improvements</li>
        </ul>

        <b>GL HF!</b>
    </Modal>
}

const DeepLink = {
    __internal: new Map(),

    addEventListener(url, cb) {
        url = url.toLowerCase();

        if (!(cb instanceof Function)) return url;

        if (!this.__internal.has(url)) this.__internal.set(url, [cb]);
        else {
            let current = this.__internal.get(url);
            current.push(cb);

            this.__internal.set(url, current);
        }

        return url;
    },

    emitEvent(url) {
        var UrlParams = url.split("?")[1];
        
        UrlParams = UrlParams && UrlParams.split('&').reduce((p, e) => {
            p[decodeURIComponent(e.split("=")[0])] = decodeURIComponent(e.split("=")[1]);
            return p;
        }, {})

        url = url.split("?")[0].toLowerCase();

        const eventHandlers = this.__internal.get(url);

        if (!eventHandlers) return console.log(`[DeepLink]: No handler provided for ${url}`);

        eventHandlers.forEach(cb => {
            if (UrlParams) cb(UrlParams);
            else cb();
        });
    }
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
            value={{ 
                GlobalState, 
                setGlobalState, 
                createModal,
                DeepLink
            }}
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