import React, { 
    useState,
    useEffect, 
    useContext
} from "react";

import { 
    update,
    del, get, set
} from "idb-keyval";

import useFlag from "../../hooks/useFlag.js";
import Context from "../../utils/context.js";
import Currency from "../../utils/currency.js";
import buildClassName from "../../utils/buildClassName.js";
import renderInventory, { getItemsPrice } from "./helpers/renderInventory.js";

import { getItemOrigin } from "../../utils/chance.js";
import { getCollectionById, StorageVirtualModel } from "../../models/index.js";

import useLang, { 
    numeral,
    interactiveLangRender
} from "../../hooks/useLang.js";

import { 
    sellItem, 
    generateUid, 
    withdrawBalance 
} from "./helpers/transactions.js";

import { 
    isItemOnShowcase,
    selectToShowcase, 
    removeFromShowcase,
    deleteFromShowcase, 
    selectShowcaseType
} from "./helpers/showcase.js";

import Modal from "../ui/Modal.js";
import Ripple from "../ui/Ripple.js";
import Button from "../ui/Button.js";
import Dropdown from "../ui/Dropdown.js";
import Item, { ShowcaseItem } from "../ui/Item.js";
import ItemPage, { upperFirst } from "../ui/ItemPage.js";

import "./Profile.css";

const STORAGE_FIXED_PRICE = 1000;
const PROFILE_PICTURE_KEY = "profile-picture";

export const getSortedStorages = storages => {
    return storages.sort((a, b) => {
        return a.skinName < b.skinName ? -1 : 1;
    });
}

const Profile = () => {
    const { GlobalState, setGlobalState, DeepLink } = useContext(Context);

    const lang = useLang(GlobalState, setGlobalState);

    const [ price, setPrice ] = useState(0);
    const [ inventory, setInventory ] = useState([]);

    const [ isImageModal, openImageModal, closeImageModal ] = useFlag(false);
    const [ isOptimized, enableOptimization, disableOptimization ] = useFlag(false);

    const [ profileTab, setProfileTab ] = useState(0);
    const [ itemsForSell, setItemsForSell ] = useState([]);
    const [ selectedItems, setSelectedItems ] = useState([]);
    const [ selectedItem, setSelectedItem ] = useState(null);
    const [ profileImage, setProfileImage ] = useState(null);
    const [ storageBuyState, setStorageBuyState ] = useState({ open: false, name: "" });

    useEffect(() => {
        DeepLink.addEventListener("cs:/global/optimizationRequest", context => {
            var { target, enable } = context;

            if (target !== "profile") return;

            enable = Boolean(Number(enable));
            enable ? enableOptimization() : disableOptimization();
        });
    }, []);

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

        replaceToStorageById(storageId, items) {
            var name = false;

            GlobalState.profile.storages.forEach(storage => {
                if (name) return;

                if (storage.uid === storageId) return name = storage.skinName;
            });

            return this.replaceToStorage(name, items);
        },

        replaceToStorage(storageName, items) {
            items = Array.isArray(items) ? items : [items];

            const { storages } = GlobalState.profile;

            const targetUids = items.map(item => item.uid);

            var storageId = false;
            storages.forEach(storage => {
                if (storage.skinName === storageName) storageId = storage.uid;
            });

            setGlobalState(prev => {
                var inventory = prev.profile.inventory.map(cur => {
                    if (targetUids.includes(cur.uid)) {
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
            var name = storageBuyState.name.trim();

            const { balance, storages } = GlobalState.profile;
            var isValidName = Boolean(name.length);
            var isUniqueName = true;

            storages.forEach(storage => {
                if (!isUniqueName) return;
                if (storage.skinName === name) isUniqueName = false;
            });

            if (/^<|>$/ig.test(name)) isValidName = false;

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
    
    const handleSellItems = () => {
        itemsForSell.forEach(item => {
            sellItem(setGlobalState, item, true);
        });
    }

    const updateProfileImage = async () => {
        const revoke = () => "string" === typeof profileImage && URL.revokeObjectURL(profileImage);
        const blob = await get(PROFILE_PICTURE_KEY);

        revoke();

        if (!blob || !(blob instanceof Blob)) return setProfileImage(null);

        const url = URL.createObjectURL(blob);
        setProfileImage(url);
    }

    useEffect(() => {
        let minimal = GlobalState.profile.inventory;

        const rendered = renderInventory(minimal);

        setPrice(rendered.price);
        setInventory(rendered.inventory);
    }, [GlobalState.profile.inventory]);

    useEffect(() => {
        updateProfileImage();
    }, []);

    const renderProfileImage = () => {
        return (
            <div className="user-image ripple" title="Change Profile Picture" onClick={openImageModal}>
                {!profileImage && <i className="uil uil-user" />}
                {profileImage && <img className="profile-image" src={profileImage} draggable="false" async />}
                <Ripple />
            </div>
        );
    }

    const renderInfo = () => {
        const { profile } = GlobalState;

        return <>
            <div 
                className="profile-background-image"
                style={{ backgroundImage: `url(${profileImage})` }}
            />

            <div className="user-info">
                <div className="user-main">
                    {renderProfileImage()}
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
        </>
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
                shouldRender={!isOptimized}
                onClick={item => setSelectedItem(item)}
                selectConfig={{
                    enable: true,
                    min: 1,
                    listener: "contextmenu",
                    actions: [{
                        children: lang.common.options,
                        onClick: selected => selected.length > 1 ? setSelectedItems(selected) : setSelectedItem(selected[0]),
                    }]
                }}
            />
        );
    }

    const renderMultipleSelectModal = () => {
        const { storages } = GlobalState.profile;
        const items = selectedItems;

        const handleFocusCollection = cid => {
            setSelectedItems([]);
            DeepLink.emitEvent(`cs:/cases/focus?cid=${cid}`);
        }

        const ItemsPrice = getItemsPrice(items);
        const uniqueCollections = [...new Set(
            items
                .map(i => i.collectionId)
                .filter(i => i !== undefined)
                .flat()
        )];

        const isSameItems = new Set(items.map(i => i.id)).size === 1 && new Set(items.map(i => i.quality)).size === 1

        let percentOfInventory = (ItemsPrice / price * 100).toFixed(2);
        if (percentOfInventory < 0.01) percentOfInventory = "<0.01";

        var uniqueStorages = [...new Set(items.map(i => i.storageId))];
        var StorageActive = 0;

        const sortedStorages = getSortedStorages(storages);
        const StorageOptions = [{ value: "<None>" }, ...sortedStorages.map(s => ({ label: s.skinName, value: s.skinName }))];

        if (uniqueStorages.length < 2 && uniqueStorages[0] !== undefined) {
            sortedStorages.forEach(storage => {
                if (storage.uid === uniqueStorages[0]) StorageActive = StorageOptions.findIndex(value => value.label === storage.skinName);
            });
        }

        if (uniqueStorages.length > 1) StorageOptions.unshift({ value: "<Different>" });

        const handleStorageSelect = storageName => {
            if (storageName === "<Different>") {
                items.forEach(item => {
                    ManageStorage.replaceToStorageById(item.storageId, item);
                });

                return;
            }

            ManageStorage.replaceToStorage(storageName, items);
        }

        const availableCollections = !!uniqueCollections.length ? (
            <span>
                {uniqueCollections.map((col, i, arr) => {
                    const forward = arr[i + 1];
                    const model = getCollectionById(col);
    
                    return <font key={i} className="collection-name">
                        <span className="link" onClick={() => handleFocusCollection(model.id)} title={`Open ${model.fullName}`}>{model.fullName}</span>
                        {forward !== undefined && <>,<br /></>}
                    </font>
                })}
            </span>
        ) : <span>{lang.property.exclusive}</span>;

        const title = isSameItems 
            ? <>
                <b 
                    className={`RarityShade ${items[0].rarity}`}
                    style={{ color: "rgba(var(--background-shade, 1))" }}
                > {buildClassName(items[0].weaponName, "|", items[0].skinName)}</b> ({items.length})
            </>
            : buildClassName(lang.common.options, "/", items.length, numeral(items.length, lang.Plural.items));

        return <Modal
            title={title}
            onCancel={() => setSelectedItems([])}
            className="item-info-modal item-multiple-options"
            actions={[{
                children: lang.common.sell,
                negative: true,
                onClick: () => setItemsForSell(items)
            }, {
                children: lang.common.cancel
            }]}
        >
            <div className="item-detailed-info storage-selector">
                <div className="detailed-line">
                    <span>{lang.common.storage}:</span>
                    <span>
                        <Dropdown 
                            active={StorageActive}
                            options={StorageOptions}
                            onChange={handleStorageSelect}
                        />
                    </span>
                </div>
            </div>

            <div className="item-detailed-info">
                <div className="detailed-line">
                    <span>{lang.common.price}:</span>
                    <span>
                        {Currency.renderPrice(GlobalState, ItemsPrice)}
                        <font 
                            style={{ fontSize: "0.8em", marginLeft: ".5rem" }} 
                            title={lang.property.percentOfInventory.replace("{d}", `${percentOfInventory}%`)}
                        >({percentOfInventory}%)</font> 
                    </span>
                </div>
                <div className="detailed-line">
                    <span>{lang.property.collection}:</span>
                    <span className="custom-scroll">
                        {availableCollections}
                    </span>
                </div>
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
            title={langPack.title.replace("{d}", items.length).replace("{s}", numeral(items.length, lang.Plural.items))}
            onCancel={handleCancel}
            actions={[{
                children: lang.common.sell,
                negative: true,
                onClick: handleSellItems
            }, {
                children: lang.common.cancel
            }]}
        >
            {interactiveLangRender(
                langPack.line1.replace("{s}", numeral(items.length, lang.Plural.items)), 
                "{d}", items.length
            )}
            <br/><br/>
            {interactiveLangRender(langPack.line2, "{d}", Currency.renderPrice(GlobalState, price))}
        </Modal>
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
                {langPack.line3}<br /><br />
                <b className={buildClassName("warning", !canBuy.can && "error")}>
                    {canBuy.can && langPack.validName}
                    {!canBuy.uniqueName && langPack.nameTaken}
                    {!canBuy.validName && langPack.invalidName}
                </b>
            </div>
        </Modal>
    }

    const renderItemInfoModal = () => {
        const { storages, inventory } = GlobalState.profile;
        const { rarity, quality, collectionId, storageId } = selectedItem;

        let percentOfInventory = (selectedItem.price / price * 100).toFixed(2);
        if (percentOfInventory < 0.01) percentOfInventory = "<0.01";

        const pureQuality = quality.replace(/st|sv/ig, "");
        const isStatTrack = quality.includes("ST");
        const isSouvenir = quality.includes("SV");

        var sortedStorages = getSortedStorages(storages);
        const StorageOptions = [{ label: "<None>", value: "<None>" }, ...sortedStorages.map(s => ({ label: s.skinName, value: s.skinName }))];
        var StorageActive = 0;

        sortedStorages.forEach(storage => {
            if (storage.uid === storageId) StorageActive = StorageOptions.findIndex(value => value.label === storage.skinName);
        });

        const handleFocusCollection = cid => {
            setSelectedItem(null);
            DeepLink.emitEvent(`cs:/cases/focus?cid=${cid}`);
        }

        const handleFocusInShop = (cid, itemId) => {
            setSelectedItem(null);
            DeepLink.emitEvent(`cs:/casino/focusTab?tabId=shop`);

            setTimeout(() => {
                DeepLink.emitEvent(`cs:/casino/shop/focus?cid=${cid}&itemId=${itemId}`);
            }, 200);
        }
        
        const handleSelectSame = () => {
            setSelectedItem(null);
            setSelectedItems(renderInventory(sameItemsAvailable).inventory);
        }

        const Quality = <span className={`QualityShade ${pureQuality}`}>
            {isStatTrack && <font className="QualityShade stattrack">StatTrack™ </font>}
            {isSouvenir && <font className="QualityShade souvenir">{lang.property.souvenir} </font>}
            {lang.property["Quality" + pureQuality]}
        </span>

        const availableCollections = collectionId !== undefined ? (
            <span className="custom-scroll">
                {(Array.isArray(collectionId) ? collectionId : [collectionId]).map((col, i, arr) => {
                    const forward = arr[i + 1]; 
                    const model = getCollectionById(col);

                    return <font key={i} className="collection-name">
                        <span className="link" onClick={() => handleFocusCollection(model.id)} title={`Open ${model.fullName}`}>{model.fullName}</span>
                        {forward && <>,<br /></>}
                    </font>
                })}
            </span>
        ) : <span>{lang.property.exclusive}</span>;

        const sameItemsAvailable = inventory.filter(item => item.id === selectedItem.id && item.quality === quality);
        const sameItemsHint = lang.profile.selectAllHint
            .replace("{d}", sameItemsAvailable.length)
            .replace("{s}", buildClassName(selectedItem.weaponName, "|", selectedItem.skinName));

        const isItemAlreadyOnShowcase = isItemOnShowcase(GlobalState, selectedItem);

        const Actions = [{
            children: lang.common.sell,
            negative: true,
            onClick: () => sellItem(setGlobalState, selectedItem)
        }, {
            children: lang.profile.selectForShowcase,
            disabled: !selectShowcaseType(selectedItem) || isItemAlreadyOnShowcase,
            onClick: () => selectToShowcase(setGlobalState, selectedItem)
        }, {
            children: lang.profile.removeFromShowcase,
            disabled: !isItemAlreadyOnShowcase,
            negative: true,
            onClick: () => removeFromShowcase(setGlobalState, selectedItem)
        }, {
            children: lang.profile.findInShop,
            disabled: Array.isArray(selectedItem.collectionId) || isSouvenir,
            onClick: () => handleFocusInShop(selectedItem.collectionId, selectedItem.id)
        }, {
            children: lang.common.cancel
        }];

        return <Modal
            title={`${selectedItem.weaponName} | ${selectedItem.skinName}`}
            className={buildClassName("item-info-modal", "RarityShade", selectedItem.rarity)}
            onCancel={() => setSelectedItem(null)}
            actions={Actions.filter(action => !Boolean(action.disabled))}
        >
            <Item 
                ripple={false}
                shouldQuality={false}
                shouldRecent={false}
                shouldInfo={false}
                shouldPrice={false}
                onClick={() => void 0}
                item={selectedItem}
            />

            <div className="item-detailed-info storage-selector">
                {sameItemsAvailable.length > 1 && <div className="detailed-line">
                    <span>{lang.profile.available}:</span>
                    <span className="same-available">
                        {sameItemsAvailable.length}
                        <span 
                            className="link" 
                            onClick={handleSelectSame} 
                            title={sameItemsHint}
                        >
                            <b>{lang.profile.selectAll}</b>
                        </span>
                    </span>
                </div>}
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
                            title={
                                lang.property.percentOfInventory.replace("{d}", `${percentOfInventory}%`)
                                + "\n" + lang.property.couldContain.replace("{d}", Math.floor(price / selectedItem.price).toLocaleString())
                            }
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

    const renderProfileImageModal = () => {
        const imageUrl = profileImage;

        const handleChangeImage = e => {
            const input = e.currentTarget;
            const file = input.files && input.files[0];

            if (!file || !/^image\//.test(file.type)) return;

            update(PROFILE_PICTURE_KEY, () => new Blob([ file ], { type: file.type }));
            updateProfileImage();
        }

        const handleDeletePicture = () => {
            del(PROFILE_PICTURE_KEY);
            updateProfileImage();
        }

        return (
            <Modal 
                className="profile-picture-modal"
                onCancel={closeImageModal}
                title={lang.modals.profilePicture.title}
                actions={[
                    { children: lang.modals.profilePicture.delete, negative: true, onClick: handleDeletePicture },
                    { children: lang.common.cancel }
                ]}
            >
                <div className="profile-picture-control">
                    <div className={buildClassName("profile-picture-preview", !imageUrl && "no-photo")}>
                        {!imageUrl && "Photo"}
                        {imageUrl && <img className="profile-image" src={imageUrl} draggable="false" async />}
                    </div>

                    <label>
                        <Button>
                            {lang.modals.profilePicture.upload}
                            <input type="file" className="hidden" accept="image/*" onChange={handleChangeImage} />
                        </Button>
                    </label>
                    
                </div>
                
            </Modal>
        )
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
            {!!itemsForSell.length && renderItemsSellModal()}
            {storageBuyState.open && renderStorageBuyModal()}
            {isImageModal && renderProfileImageModal()}
            {!!selectedItems.length && renderMultipleSelectModal()}
        </div>
    );
}

export default Profile;