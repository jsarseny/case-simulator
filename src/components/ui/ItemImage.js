import React, { useEffect, useRef } from "react";

import { getItemImageUrl } from "../../models/index.js";

import "./ItemImage.css";

const ItemImage = ({ item }) => {
    const containerRef = useRef(null);

    useEffect(() => {
        let path = (item.collectionId || 0) + "_" + item.id;
        let { current } = containerRef;

        current.innerHTML = null;
        current.dataset.path = path;

        const image = new Image();

        image.src = getItemImageUrl(item);
        image.alt = item.skinName;
        
        image.onload = function() {
            if (!containerRef.current || current.dataset.path !== path) return;
 
            containerRef.current.innerHTML = null;

            containerRef.current.appendChild(this);
        }
    }, [item]);

    return (
        <div className="ItemImage" ref={containerRef}></div>
    );
}

export default ItemImage;