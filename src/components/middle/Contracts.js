import React, { 
    useState,
    useEffect, 
    useContext
} from "react";

import Context from "../../utils/context";
import renderInventory, { filterInventory } from "./helpers/renderInventory";

import { 
    getRarity, 
    mathContract, 
    getLimitContainerRarities,  
} from "../../utils/chance";

import {
    deleteItem, 
    insertItem, 
    statistics 
} from "./helpers/transactions";

import Modal from "../ui/Modal";
import Button from "../ui/Button";
import Selection from "../ui/Selection";
import Item, { ItemList } from "../ui/Item";

import "./Contracts.css";

const Contracts = () => {
    const { GlobalState, setGlobalState } = useContext(Context);

    const [ stage, setStage ] = useState(0);
    const [ obtainedItem, setObtainedItem ] = useState(null);
    const [ selectedItems, setSelectedItems ] = useState([]);

    const [ isStatTrack, setIsStatTrack ] = useState(false);
    const [ selectedRarity, setSelectedRarity ] = useState(0);

    const [ inventory, setInventory ] = useState([]);

    const handleItemClick = item => {
        var selected = selectedItems;
        if (selected.includes(item.uid)) {
            var index = selected.indexOf(item.uid);

            selected.splice(index, 1);
        } else {
            if (selected.length >= 10) return;
            selected.push(item.uid);
        }

        setSelectedItems([...selected]);
    }

    const handleTradeUp = () => {
        const resultItem = mathContract(
            inventory.filter(item => selectedItems.includes(item.uid)),
            isStatTrack
        );
        
        deleteItem(setGlobalState, selectedItems);

        statistics.edit(setGlobalState, "TotalCraftsMade", 1);

        insertItem(setGlobalState, {
            id: resultItem.id,
            quality: resultItem.quality
        }, 1);

        setSelectedItems([]);
        setObtainedItem(resultItem);
    }

    useEffect(() => {
        setSelectedItems([]);
    }, [
        selectedRarity,
        GlobalState.profile.inventory,
    ]);

    useEffect(() => {
        if (!stage) return;

        const rendered = renderInventory(GlobalState.profile.inventory);

        const filtered = filterInventory(
            rendered.inventory, undefined, 
            getRarity(selectedRarity)
        ).filter(item => {
            if (
                (isStatTrack && !item.quality.includes("ST"))
                || (!isStatTrack && item.quality.includes("ST"))
            ) return false;

            var limited = getLimitContainerRarities(item.collectionId);

            return limited[limited.length - 1] !== item.rarity;
        });

        setInventory(filtered);
    }, [
        stage, isStatTrack,
        selectedRarity, selectedItems,
        GlobalState.profile.inventory,
    ]);

    useEffect(() => {
        if (selectedRarity <= 1) setIsStatTrack(false);
    }, [selectedRarity]);

    const renderStage = () => {
        if (!stage) return (
            <div className="rarity-select">
                <span>Select Rarity:</span>
                <span>
                    <Selection 
                        activeId={Number(isStatTrack)}
                        tabs={selectedRarity > 1 ? ["Basic", "StatTrak™"] : ["Basic"]}
                        onClick={id => setIsStatTrack(!!id)}
                    />
                </span>
                <span>
                    <Selection 
                        tabs={["White", "Light Blue", "Blue", "Purple", "Pink"]}
                        activeId={selectedRarity}
                        onClick={setSelectedRarity}
                    />
                </span>
                <span className="buttons">
                    <Button children="Next" onClick={() => setStage(1)} />
                </span>
            </div>
        );

        return <>
            <div className="select-items">
                <div className="title">Select Your Items:</div>
                <ItemList 
                    columns={5}
                    className="custom-scroll"
                    onClick={handleItemClick}
                    items={inventory.filter(item => !selectedItems.includes(item.uid))}
                    ripple={false}
                />
            </div>
            <div className="select-items">
                <div className="title">Selected:</div>
                <ItemList 
                    columns={5}
                    className="custom-scroll"
                    onClick={handleItemClick}
                    items={inventory.filter(item => selectedItems.includes(item.uid))}
                    ripple={false}
                />
            </div>
            <div className="trade-up-buttons">
                <Button children="Back" negative onClick={() => setStage(0)} />
                <Button children="Trade up" disabled={selectedItems.length < 10} onClick={handleTradeUp} />
            </div>
        </>
    }

    return (
        <div className="Contracts custom-scroll">
            {renderStage()}

            {obtainedItem && (
                <Modal
                    title="New Item Obtained"
                    className="item-info-modal"
                    canInstantClose={false}
                    onCancel={() => setObtainedItem(null)}
                    actions={[{
                        children: "confirm"
                    }]}
                >
                    <Item 
                        ripple={false}
                        onClick={() => void 0}
                        item={obtainedItem}
                    />
                </Modal>
            )}
        </div>
    );
}

export default Contracts;