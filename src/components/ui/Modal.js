import ReactDOM from "react-dom";
import React, { useEffect, useRef } from "react";

import useClickAway from "../../hooks/useClickAway";
import buildClassName from "../../utils/buildClassName";
import keyboardListeners from "../../utils/keyboardListeners";

import { debounce } from "../../utils/schedulers";

import Button from "./Button";

import "./Modal.css";

const Modal = ({
    title,
    children,
    actions = [{ children: "Confirm", isClosing: true }],
    canInstantClose = true,
    isOpen = true,
    className,
    onCancel
}) => {
    const modalRef = useRef(null);
    const alignRef = useRef(null);
    const portals = document.getElementById("portals");

    const handleClose = () => {
        if (!isOpen || !modalRef.current) return;

        modalRef.current.classList.add("removed");

        onCancel();
    }

    const handleActionClick = (e, index) => {
        var currentButton = actions[index];

        if (currentButton.isClosing !== false) handleClose();
        if (currentButton.onClick) currentButton.onClick(e);
    }

    useClickAway(alignRef, () => {
        if (!canInstantClose) return;

        handleClose();
    });
    
    useEffect(() => {
        if (!isOpen || !canInstantClose) return;

        keyboardListeners({
            onEsc: handleClose
        });
    }, [ isOpen, canInstantClose ]);

    if (!isOpen) return null;

    const fullClassList = buildClassName(
        "Modal", 
        className && className
    );

    return ReactDOM.createPortal((
        <div className={fullClassList} ref={modalRef} role="dialog" tabIndex={-1}>
            <div className="align" ref={alignRef}>
                <div className="title">
                    <span>{title}</span>
                </div>
                <div className="subtitle">{children}</div>
                <div className="actions">
                    {actions.map((action, i) => (
                        <Button 
                            color="secondary" 
                            key={i}
                            title={action.title}
                            ripple 
                            {...{
                                ...action,
                                onClick: e => handleActionClick(e, i)
                            }} 
                        />
                    ))}
                </div>
            </div>
        </div>
    ), portals);
}

export default Modal;