import React from "react";
import buildClassName from "../../utils/buildClassName";

import Ripple from "./Ripple";

import "./Button.css";

const Button = ({
    children,
    color,
    className,
    disabled,
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
        <div className={fullClassName} onMouseDown={handleClick}>
            {children}
            {ripple && !disabled && <Ripple />}
        </div>
    );
}

export default Button;