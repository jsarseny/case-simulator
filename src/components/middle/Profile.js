import React, { 
    useState,
    useEffect, 
    useContext
} from "react";

import useLang, { interactiveLangRender } from "../../hooks/useLang";
import Context from "../../utils/context";
import Currency from "../../utils/currency";
import buildClassName from "../../utils/buildClassName";
import renderInventory from "./helpers/renderInventory";

import { getCollectionById } from "../../models/collections";
import { StorageVirtualModel } from "../../models/weapons";
import { getItemOrigin, WeaponQuality } from "../../utils/chance";

import { 
    sellItem, 
    generateUid, 
    withdrawBalance 
} from "./helpers/transactions";

import { 
    selectToShowcase, 
    deleteFromShowcase, 
    canSelectToShowCase
} from "./helpers/showcase";

import Modal from "../ui/Modal";
import Button from "../ui/Button";
import Dropdown from "../ui/Dropdown";
import Item, { ShowcaseItem } from "../ui/Item";
import ItemPage, { upperFirst } from "../ui/ItemPage";

import "./Profile.css";

const STORAGE_FIXED_PRICE = 1000;

const Profile = () => {
    const { GlobalState, setGlobalState, DeepLink } = useContext(Context);

    const lang = useLang(GlobalState);

    const [ price, setPrice ] = useState(0);
    const [ inventory, setInventory ] = useState([]);

    const [ profileTab, setProfileTab ] = useState(0);
    const [ selectedItem, setSelectedItem ] = useState(null);
    const [ itemsForSell, setItemsForSell ] = useState([]);
    const [ storageBuyState, setStorageBuyState ] = useState({
        open: false,
        name: ""
    });

    const ManageStorage = {
        open: () => setStorageBuyState(prev => ({ ...prev, open: true })),
        close: () => setStorageBuyState(prev => ({ ...prev, open: false })),
        editName: e => setStorageBuyState(prev => ({ ...prev, name: e.target.value })),

        getNextId() {
            var maxId = 0;

            GlobalState.profile.storages.forEach(storage => {
                if ("number" === typeof storage.uid && storage.uid > maxId) maxId = storage.uid;
            });

            return maxId + 1;
        },

        replaceToStorage(storageName, item) {
            const { storages } = GlobalState.profile;

            var storageId = false;
            storages.forEach(storage => {
                if(storage.skinName === storageName) storageId = storage.uid;
            });

            setGlobalState(prev => {
                var inventory = prev.profile.inventory.map(cur => {
                    if (cur.uid === item.uid) {
                        if (storageId === false) delete cur.storageId;
                        else cur.storageId = storageId;
                    }
                    
                    return cur;
                });

                return {
                    ...prev,
                    profile: {
                        ...prev.profile,
                        inventory
                    }
                }
            });
        },

        canBuy() {
            const { balance, storages } = GlobalState.profile;
            var isValidName = Boolean(storageBuyState.name.trim().length);
            var isUniqueName = true;

            storages.forEach(storage => {
                if (!isUniqueName) return;
                if (storage.skinName === storageBuyState.name.trim()) isUniqueName = false;
            });

            return { 
                can: balance >= STORAGE_FIXED_PRICE && isValidName && isUniqueName,
                validName: isValidName,
                uniqueName: isUniqueName
            }
        },

        buy() {
            if (!this.canBuy().can) return;

            const instance = {
                uid: generateUid(),
                skinName: storageBuyState.name,
            } 

            withdrawBalance(setGlobalState, STORAGE_FIXED_PRICE);
            setGlobalState(prev => ({
                ...prev,
                profile: {
                    ...prev.profile,
                    storages: [...prev.profile.storages, instance]
                }
            }));
        }
    }

    const handleChangeName = e => {
        const { value } = e.target;

        if (value.length > 25) return false;

        setGlobalState(prev => ({
            ...prev,
            profile: {
                ...prev.profile,
                username: value
            }
        }));
    }

    const handleOpenSellModal = items => setItemsForSell(prev => [...items]);
    
    const handleSellItems = () => {
        itemsForSell.forEach(item => {
            sellItem(setGlobalState, item, true);
        });
    }

    useEffect(() => {
        let minimal = GlobalState.profile.inventory;

        const rendered = renderInventory(minimal);

        setPrice(rendered.price);
        setInventory(rendered.inventory);
    }, [GlobalState.profile.inventory]);

    const renderInfo = () => {
        const { profile } = GlobalState;

        return (
            <div className="user-info">
                <div className="user-main">
                    <div className="user-image">
                        <i className="uil uil-user" />
                    </div>
                    <div className="user-meta">
                        <span className="name">
                            <input 
                                type="text"
                                value={profile.username}
                                onChange={handleChangeName}
                                placeholder="Nickname"
                            />
                        </span>
                        <span className="balance">{Currency.renderPrice(GlobalState, profile.balance)}</span>
                    </div>
                </div>

                <div className="extra-info">
                    <div className="inventory-meta">
                        <span>{lang.profile.totalItems}: {inventory.length}</span>
                        <span>{lang.profile.totalStorages}: {GlobalState.profile.storages.length}</span>
                        <span>
                            <font>{lang.common.price}: {Currency.renderPrice(GlobalState, price)}</font>
                        </span>
                    </div>

                    <div className="inventory-actions">
                        <Button onClick={() => ManageStorage.open()} children="Buy Storage" />
                    </div>
                </div>
            </div>
        );
    }

    const renderRelevantTab = () => {
        const getShowcaseItem = type => {
            const { showcase } = GlobalState.profile;

            if (!showcase[type] || !inventory.length) return null;

            var item = inventory.find(item => item.uid === showcase[type]);

            if (!item) {
                deleteFromShowcase(setGlobalState, type);
            }

            return item || null;
        }

        if (!profileTab) return (
            <div className="profile-showcase custom-scroll">
                <div className="showcase-row">
                    <div className="showcase-row-title">{lang.profile.special}</div>
                    <div className="showcase-row-items">
                        <ShowcaseItem item={getShowcaseItem("knife")} alt="Knife" />
                        <ShowcaseItem item={getShowcaseItem("gloves")} alt="Gloves" />
                    </div>
                </div>
                <div className="showcase-row">
                    <div className="showcase-row-title">{lang.profile.rifles}</div>
                    <div className="showcase-row-items">
                        <ShowcaseItem item={getShowcaseItem("awp")} alt="AWP" />
                        <ShowcaseItem item={getShowcaseItem("ak47")} alt="AK-47" />
                        <ShowcaseItem item={getShowcaseItem("m4a4")} alt="M4A4" />
                        <ShowcaseItem item={getShowcaseItem("m4a1s")} alt="M4A1-S" />
                    </div>
                </div>
                <div className="showcase-row">
                    <div className="showcase-row-title">{lang.profile.pistols}</div>
                    <div className="showcase-row-items">
                        <ShowcaseItem item={getShowcaseItem("deserteagle")} alt="Deagle" />
                        <ShowcaseItem item={getShowcaseItem("usps")} alt="USP-S" />
                        <ShowcaseItem item={getShowcaseItem("glock18")} alt="Glock-18" />
                    </div>
                </div>
            </div>
        );

        return (
            <ItemPage 
                items={inventory}
                ripple={false}
                onClick={item => setSelectedItem(item)}
                selectConfig={{
                    enable: true,
                    min: 1,
                    listener: "contextmenu",
                    actions: [{
                        children: lang.common.sell,
                        negative: true,
                        onClick: selected => handleOpenSellModal(selected),
                    }]
                }}
            />
        );
    }

    const renderStorageBuyModal = () => {
        const canBuy = ManageStorage.canBuy();
        const langPack = lang.modals.storageBuy;

        return <Modal 
            title={langPack.title}
            className="item-info-modal storage-buy-modal"
            onCancel={ManageStorage.close}
            actions={[{
                children: <font>{interactiveLangRender(langPack.action, "{d}", Currency.renderPrice(GlobalState, STORAGE_FIXED_PRICE))}</font>,
                disabled: !canBuy.can,
                onClick: () => ManageStorage.buy()
            }, { children: lang.common.cancel }]}
        >
            <Item ripple={false} item={StorageVirtualModel} />

            <div className="item-detailed-info">
                {interactiveLangRender(langPack.line1, "{d}", Currency.renderPrice(GlobalState, STORAGE_FIXED_PRICE))}
                <br/><br/>
                {langPack.line2}:<br />
                <input 
                    type="text" 
                    placeholder={langPack.placeholder}
                    value={storageBuyState.name}
                    maxLength={25}
                    onChange={ManageStorage.editName}
                /><br />
                {langPack.line3}<br />
                {!canBuy.uniqueName && <font color="red">{langPack.error}</font>}
            </div>
        </Modal>
    }

    const renderItemsSellModal = () => {
        var langPack = lang.modals.sellItems;

        const items = itemsForSell;
        var price = 0;

        items.forEach(item => {
            if (item.price) price += item.price;
        });

        const handleCancel = () => setItemsForSell([]);

        return <Modal
            title={langPack.title.replace("{d}", items.length)}
            onCancel={handleCancel}
            actions={[{
                children: lang.common.sell,
                negative: true,
                onClick: handleSellItems
            }, {
                children: lang.common.cancel
            }]}
        >
            {interactiveLangRender(langPack.line1, "{d}", items.length)}
            <br/><br/>
            {interactiveLangRender(langPack.line2, "{d}", Currency.renderPrice(GlobalState, price))}
        </Modal>
    }

    const renderItemInfoModal = () => {
        const { storages } = GlobalState.profile;
        const { rarity, quality, collectionId, storageId } = selectedItem;

        let percentOfInventory = (selectedItem.price / price * 100).toFixed(2);
        if (percentOfInventory < 0.01) percentOfInventory = "<0.01";

        const pureQuality = quality.replace(/st|sv/ig, "");
        const isStatTrack = quality.includes("ST");
        const isSouvenir = quality.includes("SV");

        const StorageOptions = ["<None>", ...GlobalState.profile.storages.map(s => s.skinName)];
        var StorageActive = 0;
        storages.forEach(storage => {
            if (storage.uid === storageId) StorageActive = StorageOptions.indexOf(storage.skinName);
        });

        const handleFocusCollection = cid => {
            setSelectedItem(null);
            DeepLink.emitEvent(`cs:/cases/focus?cid=${cid}`);
        }

        const Quality = <span className={`QualityShade ${pureQuality}`}>
            {isStatTrack && <font className="QualityShade stattrack">StatTrack™ </font>}
            {isSouvenir && <font className="QualityShade souvenir">{lang.property.souvenir} </font>}
            {lang.property["Quality" + pureQuality]}
        </span>

        const availableCollections = collectionId !== undefined ? (
            <span>
                {(Array.isArray(collectionId) ? collectionId : [collectionId]).map((col, i, arr) => {
                    const forward = arr[i + 1]; 
                    const model = getCollectionById(col);

                    return <font key={i} className="collection-name">
                        <span className="link" onClick={() => handleFocusCollection(model.id)} title={`Open ${model.fullName}`}>{model.fullName}</span>
                        {forward && ","}
                        <br />
                    </font>
                })}
            </span>
        ) : <span>{lang.property.exclusive}</span>;

        return <Modal
            title={`${selectedItem.weaponName} | ${selectedItem.skinName}`}
            className="item-info-modal"
            onCancel={() => setSelectedItem(null)}
            actions={[{
                children: lang.common.sell,
                negative: true,
                onClick: () => sellItem(setGlobalState, selectedItem)
            }, {
                children: lang.profile.selectForShowcase,
                disabled: !canSelectToShowCase(selectedItem),
                onClick: () => selectToShowcase(setGlobalState, selectedItem)
            }, {
                children: lang.common.cancel
            }]}
        >
            <Item 
                ripple={false}
                shouldQuality={false}
                shouldRecent={false}
                shouldPrice={false}
                onClick={() => void 0}
                item={selectedItem}
            />

            <div className="item-detailed-info storage-selector">
                <div className="detailed-line">
                    <span>{lang.common.storage}:</span>
                    <span>
                        <Dropdown 
                            active={StorageActive}
                            options={StorageOptions}
                            onChange={storageName => ManageStorage.replaceToStorage(storageName, selectedItem)}
                        />
                    </span>
                </div>
            </div>

            <div className="item-detailed-info">
                <div className="detailed-line">
                    <span>{lang.common.price}:</span>
                    <span>
                        {Currency.renderPrice(GlobalState, selectedItem.price)}
                        <font 
                            style={{ fontSize: "0.8em", marginLeft: ".5rem" }} 
                            title={`${percentOfInventory}% of Your inventory price\nYour inventory could contain ${Math.floor(price / selectedItem.price).toLocaleString()} of these`}
                        >({percentOfInventory}%)</font> 
                    </span>
                </div>
                <div className="detailed-line">
                    <span>{lang.property.rarity}:</span>
                    <span className={`RarityShade ${rarity}`}>{lang.property["Rarity" + upperFirst(rarity.replace(/-/ig, ""))]}</span>
                </div>
                <div className="detailed-line">
                    <span>{lang.property.quality}:</span>
                    {Quality}
                </div>
                <div className="detailed-line">
                    <span>{lang.property.origin}:</span>
                    <span>{lang.property["Origin" + getItemOrigin(selectedItem).replace(/ /ig, "")]}</span>
                </div>
                <div className="detailed-line">
                    <span>{lang.property.collection}:</span>
                    {availableCollections}
                </div>
            </div>
        </Modal>
    }

    return (
        <div className="Profile">
            <div className="profile-widget">
                {renderInfo()}
            </div>

            <div className="profile-content">
                <div className="tab-list">
                    <span 
                        children={lang.profile.showcase}
                        onMouseDown={() => setProfileTab(0)}
                        className={buildClassName(!profileTab && "active")}
                    />
                    <span 
                        children={lang.profile.inventory}
                        onMouseDown={() => setProfileTab(1)}
                        className={buildClassName(!!profileTab && "active")}
                    />
                </div>

                <div className="profile-inventory-tabs">
                    {renderRelevantTab()}
                </div>
            </div>

            {selectedItem && renderItemInfoModal()}
            {storageBuyState.open && renderStorageBuyModal()}
            {Boolean(itemsForSell.length) && renderItemsSellModal()}
        </div>
    );
}

export default Profile;