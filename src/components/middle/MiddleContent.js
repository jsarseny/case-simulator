import React, { useContext } from "react";
import Context from "../../utils/context";

import Cases from "./Cases";
import Casino from "./Casino";
import Profile from "./Profile";
import MiddleTab from "../ui/MiddleTab";
import Statistics from "./Statistics";

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