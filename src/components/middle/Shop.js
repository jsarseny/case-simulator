import React, { useState, useContext } from "react";

import Context from "../../utils/context.js";
import Collections from "../../models/collections.js";
import buildClassName from "../../utils/buildClassName.js";

import { buyItem } from "./helpers/transactions.js";
import { sortItems } from "./Cases.js";
import { WeaponQuality } from "../../utils/chance.js";
import { getCollectionItems } from "../../models/weapons.js";

import Modal from "../ui/Modal.js";
import Button from "../ui/Button.js";
import Item, { ItemList } from "../ui/Item.js";

import "./Shop.css";

const BUY_MARKUP = 1.13;

const convertPrice = price => Number.parseFloat((price * BUY_MARKUP).toFixed(2))

const Shop = () => {
    const { GlobalState, setGlobalState } = useContext(Context);

    const [ state, setState ] = useState({
        count: 1,
        collection: null,
        selected: null
    });

    const restoreState = () => setState(prev => ({
        ...prev,
        count: 1,
        collection: null,
        selected: null
    }));

    const handleItemSelect = item => setState(prev => ({ 
        ...prev, 
        selected: item 
    }));

    const handleCollectionSelect = item => {
        setState(prev => ({
            ...prev,
            collection: item
        }));
    }

    const handleCountChange = e => {
        var { value } = e.currentTarget;

        if (!value) value = 1;
        if (!/^[0-9]{1,}$/ig.test(value)) {
            e.preventDefault();
            e.stopPropagation();

            return false;
        }

        value = Number(value);

        if (value < 1) value = 1;
        if (value > 100) value = 100;

        return setState(prev => ({
            ...prev,
            count: value,
        }));
    }

    const handleBuy = quality => {
        if (!state.selected) return;

        const finalItem = {
            ...state.selected,
            quality,
            price: state.selected.prices[quality]
        }

        if (!finalItem.price || !finalItem.quality) return;

        buyItem(setGlobalState, finalItem, state.count, BUY_MARKUP);
    }

    const renderBuyModal = () => {
        if (!state.selected) return;

        const item = state.selected;

        const buttons = Object.keys(item.prices).map(quality => {
            let price = convertPrice(item.prices[quality]) * state.count;

            let children = <>
                {WeaponQuality[quality]}
                <font color="gold">{price.toLocaleString()}$</font>
            </>

            let className = buildClassName(
                "item-quality-buy",
                quality.includes("ST") && "stattrack"
            )

            return {
                children,
                className,
                isClosing: false,
                onClick: () => handleBuy(quality),
                disabled: GlobalState.profile.balance < price
            }
        });

        return (
            <Modal
                title={`Buy ${state.selected.weaponName} | ${state.selected.skinName}`}
                className="item-info-modal buy-item-modal"
                onCancel={() => setState(prev => ({ ...prev, selected: null }))}
                actions={[
                    ...buttons, {
                        children: "cancel",
                        negative: true
                    }
                ]}
            >
                <Item 
                    ripple={false}
                    onClick={() => void 0}
                    item={state.selected}
                />

                <div className="offer">
                    <div className="meta-info">
                        <span>Balance: <font color="gold">{GlobalState.profile.balance.toLocaleString()}$</font></span>
                        <span>Murkup: <font color="red">+13%</font></span>
                    </div>
                    <div className="inputs">
                        x
                        <input 
                            type="text" 
                            placeholder="N"
                            value={state.count}
                            onChange={handleCountChange}
                        />
                    </div>
                </div>
            </Modal>
        )
    }

    const renderMain = () => {
        if (!state.collection) {
            return (
                <div className="collection-pick">
                    <div className="tab-title mini"><span>select collection:</span></div>

                    <div className="current-list collections-list">
                        <ItemList
                            items={Collections}
                            className="custom-scroll"
                            shouldPrice={false}
                            onClick={handleCollectionSelect}
                            shouldQuality={false}
                        />
                    </div>
                </div>
            );
        }

        const current = state.collection;
        const items = sortItems(getCollectionItems(current.id).reverse()).filter(item => {
            return item.rarity !== "gold";
        });

        return (
            <div className="available-items-list">
                <div className="tab-title mini"><span>select the item you want to buy:</span></div>
                <div className="current-list custom-scroll">
                    <ItemList 
                        items={items}
                        shouldPrice={false}
                        shouldQuality={false}
                        onClick={handleItemSelect}
                    />
                </div>
                <div className="controls">
                    <Button 
                        negative
                        children="Back"
                        onClick={restoreState}
                    />
                </div>
            </div>
        );
    }

    return (
        <div className="Shop">
            {renderMain()}

            {state.selected && renderBuyModal()}
        </div>
    );
}

export default Shop;