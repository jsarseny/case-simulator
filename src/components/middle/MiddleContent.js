import React, { useContext } from "react";
import Context from "../../utils/context.js";

import Cases from "./Cases.js";
import Casino from "./Casino.js";
import Profile from "./Profile.js";
import MiddleTab from "../ui/MiddleTab.js";
import Statistics from "./Statistics.js";

import "./MiddleContent.css";

const MiddleContent = () => {
    const { GlobalState, setGlobalState } = useContext(Context);
    
    const Tabs = [
        <Cases />,
        <Profile />,
        <Casino />,
        <Statistics />,
    ]

    return (
        <div className="MiddleContent">
            {Tabs.map((tab, i) => (
                <MiddleTab 
                    key={i}
                    className=""
                    active={GlobalState.activeTab === i}
                    children={tab}
                />
            ))}
        </div>
    );
}

export default MiddleContent;