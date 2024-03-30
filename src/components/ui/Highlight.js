import React from "react"
import buildClassName from "../../utils/buildClassName.js";

import "./Highlight.css";

const Highlight = ({ text, highlight = "", className }) => {
    if (!highlight.trim() || !text) return text;

    const regex = new RegExp(`(${highlight})`, "gi");
    const parts = text.split(regex);
    
    return (
        <span className={buildClassName("Highlight", className)}>
            {parts.filter(part => part).map((part, i) => (
               regex.test(part) 
               ? <span key={i} className="highlight">{part}</span> 
               : <span key={i}>{part}</span>
            ))}
        </span>
    )
}

export default Highlight;