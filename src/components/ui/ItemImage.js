import React, { useEffect, useRef } from "react";

import { getItemImageUrl } from "../../models/weapons";

import "./ItemImage.css";

const ItemImage = ({ item }) => {
    const containerRef = useRef(null);

    useEffect(() => {
        containerRef.current.innerHTML = null;

        const image = new Image();

        image.src = getItemImageUrl(item);
        image.alt = item.skinName;
        
        image.onload = function() {
            if (!containerRef.current) return;
 
            containerRef.current.innerHTML = null;

            containerRef.current.appendChild(image);
        }
    }, [item]);

    return (
        <div className="ItemImage" ref={containerRef}></div>
    );
}

export default ItemImage;