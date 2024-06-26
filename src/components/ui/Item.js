import React, { useContext } from "react";

import useLang from "../../hooks/useLang.js";
import Context from "../../utils/context.js";
import Currency from "../../utils/currency.js";
import buildClassName from "../../utils/buildClassName.js";

import { WeaponQuality } from "../../utils/chance.js";
import { getItemImageUrl } from "../../models/index.js";

import Ripple from "./Ripple.js";
import Highlight from "./Highlight.js";
import ItemImage from "./ItemImage.js";

import "./Item.css";

const isRecentlyReceived = uid => {
    const map = self.recentlyReceivedItems;

    if (!map) return false;

    var date = map.get(uid);

    if (!date) return false;
    if ((+new Date() - date) > 6e4) {
        map.delete(uid);
        return false;
    }

    return true;
}

// function frozen until better times
export const highlightRarePattern = skinName => { 
    return skinName;

    let patternsRegex = /emerald|sapphire|ruby|black pearl/ig

    if (
        !/(gamma )?doppler/ig.test(skinName)
        || !patternsRegex.test(skinName)
    ) return skinName;

    let pureSkin = skinName.replace(patternsRegex, "").trim();
    let diseredPattern = skinName.replace(patternsRegex, "$$$&").split("$")[1];

    return <>
        {pureSkin + " "}
        <font className={`PatternShade ${diseredPattern.toLowerCase().replace(/ /ig, "-")}`}>
            {diseredPattern}
        </font>
    </>
}

export const ShowcaseItem = ({ item, alt }) => {
    const { GlobalState } = useContext(Context);

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
    const isSouvenir = item.type === "weapon" && /SV$/ig.test(item.quality);
    
    const fullClassName = buildClassName(
        "ShowcaseItem",
        "RarityShade", 
        item.rarity && item.rarity
    );

    return (
        <div className={fullClassName} data-path={`${item.collectionId}_${item.id}`}>
            {backgroundVideo}
            <img src={getItemImageUrl(item)} draggable={false} decoding="async" />
            <div className="info">
                <span className="quality">{WeaponQuality[item.quality.slice(0, 2)]}</span>
                <div className="meta">
                    <span className="price">{Currency.renderPrice(GlobalState, item.price)}</span>
                    <span className="name">
                        <span className="weapon-name">
                            {isStatTrack && <font className="QualityShade stattrack">StatTrack™ </font>} 
                            {isSouvenir && <font className="QualityShade souvenir">Souvenir </font>} 
                            {item.weaponName}
                        </span>
                        <br/>
                        {item.skinName}
                    </span>
                </div>
            </div>
        </div>
    );
}

export const ItemList = ({ 
    items, 
    title,
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
                            title={title}
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
    title,
    className,
    selected = false,
    shouldRecent = true,
    shouldPrice = true,
    shouldQuality = true,
    shouldInfo = true,
    ripple = true,
    highlight,
    onClick,
    onContextMenu
}) => {
    const { GlobalState, setGlobalState } = useContext(Context);

    const lang = useLang(GlobalState, setGlobalState);

    const handleClick = () => {
        if (onClick) onClick(item);
    }

    const handleContextMenu = e => {
        e.preventDefault();
        e.stopPropagation();

        if (onContextMenu) onContextMenu(item);
    }

    const shouldRenderPrice = shouldPrice && Boolean(item.price);
    const shouldRenderQuality = shouldQuality && Boolean(item.quality);
    const shouldRenderRecent = shouldRecent && Boolean(item.uid) && isRecentlyReceived(item.uid);
    const pureQuality = shouldRenderQuality && item.quality.slice(0, 2);

    const isStatTrack = shouldRenderQuality && item.type === "weapon" && /ST$/ig.test(item.quality);
    const isSouvenir = shouldRenderQuality && item.type === "weapon" && /SV$/ig.test(item.quality);

    const fullWeaponName = item.rarity !== "service" ? buildClassName(
        isStatTrack && "StatTrack™",
        isSouvenir && "Souvenir",
        item.weaponName, "|", item.skinName,
        shouldRenderQuality && `(${WeaponQuality[pureQuality]})`
    ) : buildClassName(lang.common.storage, `"${item.skinName}"`, );

    const name = item.type === "weapon" ? <>
        <span className="weapon-name">
            {isStatTrack && <font className="QualityShade stattrack">StatTrack™ </font>} 
            {isSouvenir && <font className="QualityShade souvenir">{lang.property.souvenir} </font>} 
            <Highlight text={item.weaponName} highlight={highlight} />
        </span>
        <br/>
        <Highlight text={item.skinName} highlight={highlight} />
    </> : item.shortName;

    const fullClassName = buildClassName(
        "Item", 
        className,
        item.type,
        ripple && "ripple",
        selected && "selected",
        item.rarity && item.rarity,
        shouldPrice && "with-price",
        shouldRenderRecent && "recently-received",
    );

    return (
        <div 
            className={fullClassName} 
            onClick={handleClick} 
            onContextMenu={handleContextMenu}
            title={item.type === "weapon" ? title || fullWeaponName : undefined}
        >
            {shouldRenderRecent && <span className="recent-mark">NEW</span>}
            {selected && <span className="selected-mark"><i className="uil uil-check-circle" /></span>}

            <ItemImage item={item} />

            {shouldInfo && <div className="info">
                <div className="meta">
                    {shouldRenderQuality && (
                        <div className="quality">
                            <font className={`QualityShade ${pureQuality}`}>
                                {pureQuality}
                            </font>
                        </div>
                    )}
                    {shouldRenderPrice && <div className="price">{Currency.renderPrice(GlobalState, item.price)}</div>}
                </div>
                
                <div className="name">{name}</div>
            </div>}

            {ripple && <Ripple />}
        </div>
    );
}

export default Item;