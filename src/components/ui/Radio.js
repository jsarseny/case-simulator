import React, { useCallback } from "react";
import buildClassName from "../../utils/buildClassName.js";

import "./Radio.css";

const Radio = ({
    value,
    className,
    name,
    label,
    subLabel,
    disabled,
    checked,
    onChange
}) => {
    const handleChange = event => {
        if (disabled) return;

        return onChange(event);
    }

    const fullClassName = buildClassName(
        "Radio", 
        className,
        disabled && "disabled"
    );

    return (
        <label className={fullClassName} title={typeof label === "string" ? label : undefined}>
            <div className="radio-button">
                <input
                    type="radio"
                    className="hidden"
                    onChange={handleChange}
                    value={value}
                    name={name}
                    checked={checked}
                />
                <div className="animation" />
            </div>
            <div className="radio-label">
                <div className="radio-label-title">{label}</div>
                {subLabel && <div className="radio-label-subtitle">{subLabel}</div>}
            </div>
        </label>
    );
}

export const RadioGroup = ({
    title,
    id,
    className,
    name,
    buttons,
    selected,
    disabled,
    onChange,
}) => {
    const handleChange = useCallback(event => {
        if (disabled) return;

        const { value } = event.currentTarget;

        onChange(value);
    }, [ onChange ]);

    return (
        <div className={buildClassName("RadioGroup", className)}>
            {title && <div className="title">{title}</div>}

            <div className="buttons">
                {buttons.map((radio, i) =>{
                    return <Radio 
                        name={name}
                        key={i}
                        disabled={disabled || radio.disabled}
                        value={radio.value}
                        checked={selected === radio.value}
                        label={radio.label}
                        subLabel={radio.subLabel}
                        onChange={handleChange}
                    />
                })}
            </div>
        </div>
    );
}

export default Radio;