import React, { 
    useState, 
    useEffect,
    useLayoutEffect
} from "react";

import useFlag from "../hooks/useFlag.js";
import Context from "../utils/context.js";
import StoredMainContext from "../utils/store.js";
import { downloadModelResources } from "../models/index.js";

import Menu from "./ui/Menu.js";
import Modal from "./ui/Modal.js";
import Loader from "./ui/Loader.js";
import MiddleContent from "./middle/MiddleContent.js";

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
            <li>Kilowatt case is available now!</li>
            <li>Adding cases to favorites</li>
            <li>New color interface design</li>
            <li>You can now check out the drop chance of an item on the case page</li>
            <li>Crash bug fixes</li>            
            <li>Optimization improvements</li>
            <li>Lot of various layout improvements</li>
        </ul>

        <b>GL HF!</b>
    </Modal>
}

const DeepLink = {
    __internal: new Map(),

    /**
     * 
     * @param {string} url internal URL in cs:/%path% format
     * @param {Function} cb callback fn
     * @returns {string} url
     */
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
        
        UrlParams = UrlParams && UrlParams.split("&").reduce((p, e) => {
            p[decodeURIComponent(e.split("=")[0])] = decodeURIComponent(e.split("=")[1]);

            return p;
        }, {})

        url = url.split("?")[0].toLowerCase();

        const eventHandlers = this.__internal.get(url);

        if (!eventHandlers) return console.log(`[DeepLink]: No handler provided for ${url}`);

        eventHandlers.forEach(cb => {
            if (UrlParams) return cb(UrlParams);
            
            return cb({});
        });
    }
}

const Main = () => {
    const [
        GlobalState,
        setGlobalState
    ] = useState(StoredMainContext);

    const [ modals, setModals ] = useState([]);
    const [ isLoading, openLoader, closeLoader ] = useFlag(true);

    useLayoutEffect(() => {
        localStorage.setItem("cs-csgo-store", JSON.stringify(GlobalState));
    }, [ GlobalState ]);

    useEffect(() => {
        const fetchResources = async () => {
            const resources = await downloadModelResources();

            closeLoader();
        }

        fetchResources();
    }, []);

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

    if (isLoading) {
        return <Loader subtitle="Install Resources" />
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