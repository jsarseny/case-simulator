import React, {  useRef, useState} from "react";

import useClickAway from "../../hooks/useClickAway.js";
import buildClassName from "../../utils/buildClassName.js";

import "./Dropdown.css";

const Dropdown = ({
    options = [],
    active,
    className,
    onChange
}) => {
    const dropdownRef = useRef(null);
    const [ isOpen, setIsOpen ] = useState(false);
    const [ activeId, setActiveId ] = useState(active || 0);

    const switchOpen = () => {
        setIsOpen(prev => !prev);
    }

    const handleClick = id => {
        setActiveId(id);
        switchOpen();
        
        if (onChange) onChange(options[id].value);
    }

    useClickAway(dropdownRef, () => {
        if (isOpen) return switchOpen();
    });

    const fullClassName = buildClassName(
        "Dropdown",
        className && className,
        isOpen && "open"
    );

    return (
        <div className={fullClassName} ref={dropdownRef}>
            <span className="preview" onMouseDown={switchOpen}>
                <span className="current-text">{options[activeId].label || options[activeId].value}</span>
                <span className="indicator">
                    <i className="uil uil-angle-down" />
                </span>
            </span>

            <div className="dropdown-list custom-scroll">
                {options.map((option, i) => {
                    var label = option.label || option.value;

                    return (
                        <div 
                            key={i}
                            className={buildClassName("list-item", activeId === i && "active")}
                            title={label}
                            aria-label={label}
                            onMouseDown={() => handleClick(i)}
                        >
                            {label}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Dropdown;