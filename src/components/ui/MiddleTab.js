import React from "react";
import buildClassName from "../../utils/buildClassName.js";

import "./MiddleTab.css";

const MiddleTab = ({
    className,
    active,
    children
}) => {
    const fullClassName = buildClassName(
        "MiddleTab",
        className && className,
        active && "active"
    )

    return (
        <div className={fullClassName}>
            {children}
        </div>
    );
}

export default MiddleTab;