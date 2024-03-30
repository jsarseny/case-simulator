import React, { 
    useState,
    useEffect,
    useContext 
} from "react";

import useLang from "../../hooks/useLang.js";
import useFlag from "../../hooks/useFlag.js";
import Context from "../../utils/context.js";
import buildClassName from "../../utils/buildClassName.js";

import { getSortedStorages } from "../middle/Profile.js";
import { StorageVirtualModel } from "../../models/index.js";
import { filterInventory, searchInventory } from "../middle/helpers/renderInventory.js";

import { 
    WeaponTypes, 
    WeaponQuality, 
    RARITY_PRIORITY
} from "../../utils/chance.js";

import Item from "./Item.js";
import Button from "./Button.js";
import Ripple from "./Ripple.js";
import Dropdown from "./Dropdown.js";

import "./ItemPage.css";

export const upperFirst = string => string[0].toUpperCase() + string.slice(1);

const PAGE_ROWS = 4;
const PAGE_COLUMNS = 4;
const ITEMS_IN_PAGE = PAGE_ROWS * PAGE_COLUMNS;
const INITIAL_FILTERS = {
    query: "",
    quality: null,
    rarity: null,
    weaponType: null
}

const ItemPage = ({
    items,
    className,
    ripple = false,
    onClick,
    shouldRender = true,
    shouldStorages = true,
    defaultTitle = "All Inventory",
    selectConfig = {
        enable: false,
        min: 0,
        max: 100,
        onSubmit: selected => void 0,
        listener: "click",
        actions: [{
            children: "Go",
            onClick: selected => void 0
        }],
    },
}) => {
    const { GlobalState, setGlobalState } = useContext(Context);

    const lang = useLang(GlobalState, setGlobalState);

    const [ currentStorage, setCurrentStorage ] = useState(null);
    const [ isFiltersOpen, openFilters, closeFilters ] = useFlag(false);

    const [ state, setState ] = useState({
        pages: [],
        currentPage: 0,
        storagePrice: 0,
        filters: INITIAL_FILTERS
    });

    const [ selectedIds, setSelectedIds ] = useState([]);

    const resetSelected = () => setSelectedIds([]);
    const handleSelectItem = item => {
        var max = selectConfig.max || Infinity;
        var selected = selectedIds;
            
        if (selected.includes(item.uid)) {
            var index = selected.indexOf(item.uid);
            selected.splice(index, 1);
        } else if (selectedIds.length < max) {
            selected.push(item.uid);
        }

        setSelectedIds([...selected]);
    };

    const handleSubmitSelection = callback => {
        var max = selectConfig.max || Infinity;

        if (
            selectedIds.length < selectConfig.min 
            || selectedIds.length > max
        ) return;

        let finalItems = items.filter(item => selectedIds.includes(item.uid));

        callback(finalItems);
        setSelectedIds([]);
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
        }));
    }

    const resetFilters = () => setState(prev => ({
        ...prev,
        filters: INITIAL_FILTERS
    }));

    const handleFilterChange = (value, name) => {
        if (/^<all>$/ig.test(value)) value = null;
        if (value && "rarity" === name) value = value.toLowerCase();

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
    
    const handleStorageSelect = item => {
        setCurrentStorage(item);
        setState(prev => ({
            ...prev,
            currentPage: 0
        }));
    }

    const calculatePages = () => {
        var virtual = items;
        var price = 0;

        if (!currentStorage && shouldStorages) {
            virtual = getSortedStorages(GlobalState.profile.storages.map(storage => ({
                ...StorageVirtualModel,
                ...storage
            }))).concat(items);
        }

        if (shouldStorages) virtual = virtual.filter(item => {
            if (currentStorage) return item.storageId === currentStorage.uid;

            return !item.storageId;
        });

        const filtered = filterInventory(
            searchInventory(virtual, state.filters.query),
            state.filters.quality || undefined, 
            state.filters.rarity || undefined, 
            state.filters.weaponType || undefined,
        );

        filtered.forEach(item => item.price && (price += item.price));

        return {
            price,
            pages: new Array(
                Math.ceil(filtered.length / ITEMS_IN_PAGE)
            ).fill().map((item, i) => {
                return filtered.slice((i * ITEMS_IN_PAGE), (i * ITEMS_IN_PAGE) + ITEMS_IN_PAGE)
            })
        };
    }

    useEffect(() => {
        const { pages } = calculatePages();

        setState(prev => ({
            ...prev,
            pages,
            currentPage: 0
        }));
    }, [state.filters]);

    useEffect(() => {
        const { pages, price } = calculatePages();
        var currentPage = null;

        if (!pages[state.currentPage] || !pages[state.currentPage].length) {
            currentPage = pages.length - 1;
        }

        if (currentPage < 0) currentPage = 0;

        setState(prev => ({
            ...prev,
            pages,
            storagePrice: price,
            currentPage: currentPage !== null ? currentPage : prev.currentPage
        }));
    }, [GlobalState.profile.storages, currentStorage, items]);

    const renderSelectionHelper = () => {
        let className = buildClassName("selection-helper", selectedIds.length > 0 && "open");

        return (
            <div className="control-toolbar">
                <div className={className}>
                    <div className="counter">
                        <i className="uil uil-times" title="Reset" onClick={resetSelected} />
                        <span>
                            {selectedIds.length}{selectConfig.max && `/${selectConfig.max}`}
                            {" " + lang.common.selected}
                        </span>
                    </div>
                    <div className="actions">
                        {selectConfig.actions.map((button, i) => {
                            var buttonClassName = buildClassName(
                                "Button primary",
                                button.negative && "negative",
                                selectedIds.length < selectConfig.min && "disabled"
                            );

                            return (
                                <div 
                                    key={i}
                                    className={buttonClassName}
                                    children={button.children}
                                    onClick={() => handleSubmitSelection(button.onClick)}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    }

    const fullClassName = buildClassName(
        "ItemPage", 
        className && className,
        isFiltersOpen && "filters-open",
        selectConfig.enable && "selection-enabled"
    );

    const isSelectionMode = Boolean(selectedIds.length);
    const clickHandler = isSelectionMode || (selectConfig.enable && selectConfig.listener !== "contextmenu") ? handleSelectItem : onClick;
    const onContextMenu = selectConfig.enable && selectConfig.listener === "contextmenu" ? handleSelectItem : undefined;

    const hasPrevoiusPage = state.currentPage > 0;
    const hasForwardPage = Boolean(state.pages[state.currentPage + 1]);

    const TypeFilters = [{ label: lang.filters.allTypes, value: "<all>" }, ...Object.keys(WeaponTypes).map(type => ({
        label: lang.property["Type" + type],
        value: type 
    }))];

    const QualityFilters = [{ label: lang.filters.allQualities, value: "<all>" }, ...Object.keys(WeaponQuality).map(quality => ({ 
        label: lang.property["Quality" + quality],
        value: quality
    }))];

    const RarityFilters = [{ label: lang.filters.allRarities, value: "<all>" }, ...Object.keys(RARITY_PRIORITY).map(rarity => ({ 
        label: lang.property["Rarity" + upperFirst(rarity.replace("-", ""))], 
        value: rarity 
    }))];

    if (!shouldRender) return;

    const EmptyPage = () => {
        return (
            <div className="empty-page">
                {lang.ItemPage.nothingFound}

                <Button onClick={resetFilters} color="secondary" ripple>
                    {lang.ItemPage.resetFilters}
                </Button>
            </div>
        );
    }

    return (
        <div className={fullClassName}>
            <div className="interactive-header">
                <div 
                    title="Back to Inventory"
                    className={buildClassName("header-tool", !currentStorage && "disabled")} 
                    onClick={() => handleStorageSelect(null)} 
                >
                    <i className="uil uil-arrow-left" />
                </div>

                <div className="header-inventory-path">
                    {currentStorage ? currentStorage.skinName : defaultTitle}
                </div>

                <div className="filters">
                    <div className="search-input">
                        <div className="overlay-filters">
                            <Dropdown 
                                onChange={v => handleFilterChange(v, "weaponType")}
                                options={TypeFilters}
                            />
                            <Dropdown 
                                onChange={v => handleFilterChange(v, "quality")}
                                options={QualityFilters}
                            />
                            <Dropdown 
                                onChange={v => handleFilterChange(v, "rarity")}
                                options={RarityFilters}
                            />
                        </div>

                        <input 
                            type="text"
                            placeholder={lang.common.search}
                            onChange={handleSearch}
                            value={state.filters.query}
                        />
                    </div>

                    <div 
                        title={lang.ItemPage.openFilters}
                        onClick={isFiltersOpen ? closeFilters : openFilters}
                        className="header-tool filters-link" 
                    >
                        {isFiltersOpen ? <i className="uil uil-times" /> : <i className="uil uil-filter" />}
                    </div>
                </div>
            </div>
            
            <div className="current-page custom-scroll" onWheel={handleWheel}>
                {state.pages.length && state.pages[state.currentPage] ? state.pages[state.currentPage].map((item, i) => {
                    if (item.id === "service:storage") {
                        return <Item 
                            key={i}
                            item={item}
                            ripple={false}
                            onClick={handleStorageSelect}
                            highlight={state.filters.query}
                        />
                    }

                    return (
                        <Item 
                            item={item}
                            key={i}
                            onClick={clickHandler}
                            onContextMenu={onContextMenu}
                            ripple={ripple}
                            highlight={state.filters.query}
                            selected={selectedIds.includes(item.uid)}
                            shouldPrice
                            shouldQuality
                        />
                    );
                }) : <EmptyPage />}
            </div>

            <div className="control">
                <div className="control-slider">
                    <div 
                        title={lang.ItemPage.previousPage}
                        className={buildClassName("arrow-slide ripple", !hasPrevoiusPage && "disabled")} 
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
                        title={lang.ItemPage.nextPage}
                        className={buildClassName("arrow-slide ripple", !hasForwardPage && "disabled")} 
                        onClick={() => handlePageSlide(state.currentPage + 1)}
                    >
                        <i className="uil uil-angle-right" />
                        <Ripple />
                    </div>
                </div>

                {selectConfig.enable && renderSelectionHelper()}
            </div>
        </div>
    );
}

export default ItemPage;