import React from "react";
import buildClassName from "../../utils/buildClassName";
import { WeaponQuality } from "../../utils/chance";
import { getItemImageUrl } from "../../models/weapons";

import Ripple from "./Ripple";

import "./Item.css";

export const ShowcaseItem = ({ item, alt }) => {
    const backgroundVideo = (
        <div className="item-video-background">
            <div className="color-bg" />
            <video object-fit="fill" width="100%" height="100%" loop autoPlay muted playsInline>
                <source src="./assets/shine.webm" type="video/webm" />
            </video>
        </div>
    );

    if (!item) return (
        <div className="VoidShowcaseItem">
            {backgroundVideo}
            <span>{alt || "Weapon"}</span>
        </div>
    );

    const isStatTrack = item.type === "weapon" && /ST$/ig.test(item.quality);
    
    const fullClassName = buildClassName(
        "ShowcaseItem",
        "RarityShade", 
        item.rarity && item.rarity
    )

    return (
        <div className={fullClassName}>
            {backgroundVideo}
            <img src={getItemImageUrl(item)} draggable={false} decoding="async" />
            <div className="info">
                <span className="quality">{WeaponQuality[item.quality.slice(0, 2)]}</span>
                <div className="meta">
                    <span className="price">${Number(item.price.toFixed(2)).toLocaleString()}</span>
                    <span className="name">
                        <span className="weapon-name">{isStatTrack ? "StatTrack™" : ""} {item.weaponName}</span><br/>
                        {item.skinName}
                    </span>
                </div>
            </div>
        </div>
    );
}

export const ItemList = ({ 
    items, 
    className,
    columns = 4,
    shouldPrice = true,
    shouldQuality = true,
    ripple = true,
    onClick 
}) => {
    const rows = [];
    for (let i = 0; i < Math.ceil(items.length / columns); i++) {
        rows[i] = items.slice((i * columns), (i * columns) + columns);
    }

    const handleClick = (item, itemIndex) => {
        if (onClick) onClick(item, itemIndex);
    }

    const fullClassName = buildClassName(
        "items-list",
        className && className
    );
    
    return (
        <div className={fullClassName}>
            {rows.map((row, rowIndex) => (
                <div className="items-row" key={rowIndex}>
                    {row.map((item, itemIndex) => (
                        <Item 
                            key={itemIndex}
                            item={item}
                            shouldPrice={shouldPrice}
                            shouldQuality={shouldQuality}
                            ripple={ripple}
                            onClick={() => handleClick(item, itemIndex)}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
}

const Item = ({ 
    item,
    selected = false,
    shouldPrice = true,
    shouldQuality = true,
    ripple = true,
    onClick
}) => {
    const handleClick = () => {
        if (onClick) onClick(item);
    }

    const shouldRenderPrice = shouldPrice && Boolean(item.price);
    const shouldRenderQuality = shouldQuality && Boolean(item.quality);

    const isStatTrack = shouldRenderQuality && item.type === "weapon" && /ST$/ig.test(item.quality);

    const name = item.type === "weapon" ?
    <>
        <span className="weapon-name">{isStatTrack ? "StatTrack™" : ""} {item.weaponName}</span><br/>
        {item.skinName}
    </> : item.shortName;

    const className = buildClassName(
        "Item", 
        selected && "selected",
        shouldPrice && "with-price",
        ripple && "ripple",
        item.type,
        item.rarity && item.rarity
    );

    return (
        <div className={className} onClick={handleClick}>
            {selected && <span className="selected-mark">
                <i className="uil uil-check-circle"></i>
            </span>}

            <img src={getItemImageUrl(item)} alt={item.fullName} />

            <div className="info">
                <div className="meta">
                    {shouldRenderQuality && <div className="quality">{item.quality.slice(0, 2)}</div>}
                    {shouldRenderPrice && <div className="price">${Number(item.price.toFixed(2)).toLocaleString()}</div>}
                </div>
                
                <div className="name">{name}</div>
            </div>

            {ripple && <Ripple />}
        </div>
    );
}

export default Item;