import React from "react";
import buildClassName from "../../utils/buildClassName.js";

import Ripple from "./Ripple.js";

import "./Button.css";

const Button = ({
    children,
    color,
    className,
    disabled,
    title,
    ripple,
    onClick,
    negative = false
}) => {
    const handleClick = () => {
        if (disabled) return;

        if (onClick) onClick();
    }

    const fullClassName = buildClassName(
        "Button",
        className && className,
        color && color,
        negative && "negative",
        ripple && "ripple",
        disabled && "disabled",
    );

    return (
        <div className={fullClassName} onClick={handleClick} title={title} >
            {children}
            {ripple && !disabled && <Ripple />}
        </div>
    );
}

export default Button;