import React from "react";
import buildClassName from "../../utils/buildClassName.js";

import "./Selection.css";

const Selection = ({
    tabs = [],
    activeId = 0,
    disabled,
    onClick
}) => {
    const handleClick = id => {
        if (activeId == id || disabled) return;

        if (onClick) onClick(id);
    }

    const fullClassName = buildClassName("Selection", disabled && "disabled");

    return (
        <div className={fullClassName}>
            {tabs.map((tab, i) => (
                <span 
                    key={i}
                    children={tab}
                    onMouseDown={() => handleClick(i)}
                    className={buildClassName(activeId == i && "active")}
                />
            ))}
        </div>
    );
}

export default Selection;