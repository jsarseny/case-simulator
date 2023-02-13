import React, { useRef, useState } from "react";
import useClickAway from "../../hooks/useClickAway";
import buildClassName from "../../utils/buildClassName";

import "./Dropdown.css";

const Dropdown = ({
    options = [],
    className,
    onChange
}) => {
    const dropdownRef = useRef(null);
    const [ isOpen, setIsOpen ] = useState(false);
    const [ activeId, setActiveId ] = useState(0);

    const switchOpen = () => {
        setIsOpen(prev => !prev);
    }

    const handleClick = id => {
        setActiveId(id);
        switchOpen();
        onChange(options[id]);
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
                <span className="current-text">{options[activeId]}</span>
                <span className="indicator">
                    <i className="uil uil-angle-down" />
                </span>
            </span>

            <div className="dropdown-list">
                {options.map((option, i) => (
                    <div 
                        key={i}
                        className={buildClassName("list-item", activeId === i && "active")}
                        onMouseDown={() => handleClick(i)}
                    >
                        {option}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Dropdown;