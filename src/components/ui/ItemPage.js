import React, { useEffect, useState, useCallback } from "react";
import buildClassName from "../../utils/buildClassName";
import { filterInventory, searchInventory } from "../middle/helpers/renderInventory";

import { 
    WeaponTypes, 
    WeaponQuality, 
    RARITY_PRIORITY
} from "../../utils/chance";

import Item from "./Item";
import Ripple from "./Ripple";
import Dropdown from "./Dropdown";

import "./ItemPage.css";

export const upperFirst = string => string[0].toUpperCase() + string.slice(1);

const ITEMS_IN_PAGE = 4 * 4;

const ItemPage = ({
    items,
    className,
    ripple = false,
    onClick,
    selectConfig = {
        enable: false,
        min: 0,
        max: 1,
        onSubmit: selected => void 0
    },
}) => {
    const [ state, setState ] = useState({
        pages: [],
        selected: [],
        currentPage: 0,
        filters: {
            query: "",
            quality: null,
            rarity: null,
            weaponType: null
        }
    });

    const [ selectedIds, setSelectedIds ] = useState([]);

    const resetSelected = () => setSelectedIds([]);
    const handleSelectItem = item => {
        var selected = selectedIds;
            
        if (selected.includes(item.uid)) {
            var index = selected.indexOf(item.uid);
            selected.splice(index, 1);
        } else if (selectedIds.length < selectConfig.max) {
            selected.push(item.uid);
        }

        setSelectedIds([...selected]);
    };

    const handleSubmitSelection = () => {
        if (
            selectedIds.length < selectConfig.min 
            || selectedIds.length > selectConfig.max 
        ) return;

        let finalItems = items.filter(item => selectedIds.includes(item.uid));

        selectConfig.onSubmit(finalItems);
    }

    const handlePageSlide = number => {
        if (number < 0 || number >= state.pages.length) return;

        setState(prev => ({
            ...prev,
            currentPage: number
        }));
    }

    const handleWheel = e => {
        var { deltaY } = e;

        var delta = deltaY < 0 ? -1 : 1;

        return handlePageSlide(
            state.currentPage + delta
        );
    }

    const handleInputChange = e => {
        var { value } = e.currentTarget;

        if (!value) value = 0;
        if (!/^[0-9]{1,}$/ig.test(value)) {
            e.preventDefault();
            e.stopPropagation();

            return false;
        }

        value = Number(value) -  1;

        if (value < 0) value = 0;
        if (value > state.pages.length - 1) value = state.pages.length - 1;

        return setState(prev => ({
            ...prev,
            currentPage: value,
        }))
    }

    const handleFilterChange = (value, name) => {
        if (/^All/ig.test(value)) value = null;
        if (value && "quality" === name) value = value.split(/-| /ig).map(item => item[0]).join("");
        if (value && "rarity" == name) value = value.toLowerCase();

        setState(prev => ({
            ...prev,
            filters: {
                ...prev.filters,
                [name]: value
            }
        }));
    }

    const handleSearch = e => {
        const { value } = e.target;

        setState(prev => ({
            ...prev,
            filters: {
                ...prev.filters,
                query: value
            }
        }));
    }

    const calculatePages = () => {
        const filtered = filterInventory(
            searchInventory(items, state.filters.query),
            state.filters.quality || undefined, 
            state.filters.rarity || undefined, 
            state.filters.weaponType || undefined,
        );

        return new Array(
            Math.ceil(filtered.length / ITEMS_IN_PAGE)
        ).fill(0).map((item, i) => {
            return filtered.slice((i * ITEMS_IN_PAGE), (i * ITEMS_IN_PAGE) + ITEMS_IN_PAGE)
        });
    }

    const getCurrentLength = () => {
        const { pages } = state;

        if (!pages || !pages.length) return 0;

        return (pages.length - 1) * ITEMS_IN_PAGE + pages[pages.length - 1].length;
    }

    useEffect(() => {
        const pages = calculatePages();

        setState(prev => ({
            ...prev,
            pages,
            currentPage: 0
        }));
    }, [state.filters]);

    useEffect(() => {
        const pages = calculatePages();
        var currentPage = null;

        if (!pages[state.currentPage] || !pages[state.currentPage].length) {
            currentPage = pages.length - 1;
        }

        setState(prev => ({
            ...prev,
            pages,
            currentPage: currentPage !== null ? currentPage : prev.currentPage
        }));
    }, [items]);

    const renderSelectionHelper = () => {
        let className = buildClassName("selection-helper", selectedIds.length > 0 && "open");
        let buttonClassName = buildClassName("apply-button", selectedIds.length < selectConfig.min && "disabled");

        return (
            <div className={className}>
                <div className="counter">
                    <i className="uil uil-times" title="Reset" onClick={resetSelected} />
                    {selectedIds.length}/{selectConfig.max}
                </div>
                <div className={buttonClassName} onClick={handleSubmitSelection}>
                    Go
                    <i className="uil uil-angle-right"></i>
                </div>
            </div>
        );
    }

    const fullClassName = buildClassName("ItemPage", className && className);

    const clickHandler = selectConfig.enable ? handleSelectItem : onClick;

    return (
        <div className={fullClassName}>
            <div className="filters">
                <div className="selections">
                    <input 
                        type="text"
                        placeholder="Search"
                        onChange={handleSearch}
                        value={state.filters.query}
                    />

                    <Dropdown 
                        onChange={v => handleFilterChange(v, "weaponType")}
                        options={[ "All Types", ...Object.keys(WeaponTypes) ]}
                    />
                    <Dropdown 
                        onChange={v => handleFilterChange(v, "quality")}
                        options={[ "All Qualities", ...Object.values(WeaponQuality) ]}
                    />
                    <Dropdown 
                        onChange={v => handleFilterChange(v, "rarity")}
                        options={[ "All Rarities", ...Object.keys(RARITY_PRIORITY).map(upperFirst) ]}
                    />
                </div>
                <div className="items-rendered">
                    {getCurrentLength().toLocaleString()}
                </div>
            </div>
            
            <div className="current-page custom-scroll" onWheel={handleWheel}>
                {state.pages.length && state.pages[state.currentPage] ? state.pages[state.currentPage].map((item, i) => (
                    <Item 
                        item={item}
                        key={i}
                        onClick={clickHandler}
                        ripple={ripple}
                        selected={selectedIds.includes(item.uid)}
                        shouldPrice
                        shouldQuality
                    />
                )) : undefined}
                
                {selectConfig.enable && renderSelectionHelper()}
            </div>

            <div className="control">
                <div 
                    title="Previus Page"
                    className="arrow-slide ripple" 
                    onClick={() => handlePageSlide(state.currentPage - 1)}
                >
                    <i className="uil uil-angle-left" />
                    <Ripple />
                </div>
                <div className="page-numeral">
                    <input 
                        type="text" 
                        placeholder="N" 
                        onChange={handleInputChange}
                        value={state.currentPage + 1} 
                    />
                    <span>/ {state.pages.length}</span>
                </div>
                <div 
                    title="Next Page"
                    className="arrow-slide ripple" 
                    onClick={() => handlePageSlide(state.currentPage + 1)}
                >
                    <i className="uil uil-angle-right" />
                    <Ripple />
                </div>
            </div>
        </div>
    );
}

export default ItemPage;