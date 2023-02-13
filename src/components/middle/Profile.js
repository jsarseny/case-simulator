import React, { 
    useState,
    useEffect, 
    useContext
} from "react";

import Context from "../../utils/context";
import buildClassName from "../../utils/buildClassName";
import renderInventory, { filterInventory } from "./helpers/renderInventory";

import { sellItem } from "./helpers/transactions";
import { canSelectToShowCase, deleteFromShowcase, selectToShowcase } from "./helpers/showcase";

import Modal from "../ui/Modal";
import ItemPage from "../ui/ItemPage";
import Item, { ShowcaseItem } from "../ui/Item";

import "./Profile.css";

const Profile = () => {
    const { GlobalState, setGlobalState } = useContext(Context);

    const [ price, setPrice ] = useState(0);
    const [ inventory, setInventory ] = useState([]);

    const [ profileTab, setProfileTab ] = useState(0);
    const [ selectedItem, setSelectedItem ] = useState(null);

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
                    <span className="balance">${profile.balance.toLocaleString()}</span>
                </div>

                <div className="extra-info">
                    <span>Total Items: {inventory.length}</span>
                    <span>
                        Price: <font color="gold">${price.toLocaleString()}</font>
                    </span>
                </div>
            </div>
        );
    }

    const renderRelevantTab = () => {
        const getShowcaseItem = type => {
            const { showcase } = GlobalState.profile;

            if (!showcase[type] || !inventory.length) return null;

            var item = inventory.find(item => item.uid == showcase[type]);

            if (!item) {
                deleteFromShowcase(setGlobalState, type);
            }

            return item || null;
        }

        if (!profileTab) return (
            <div className="profile-showcase custom-scroll">
                <div className="showcase-row">
                    <div className="showcase-row-title">Special</div>
                    <div className="showcase-row-items">
                        <ShowcaseItem item={getShowcaseItem("knife")} alt="Knife" />
                        <ShowcaseItem item={getShowcaseItem("gloves")} alt="Gloves" />
                    </div>
                </div>
                <div className="showcase-row">
                    <div className="showcase-row-title">Rifles</div>
                    <div className="showcase-row-items">
                        <ShowcaseItem item={getShowcaseItem("awp")} alt="AWP" />
                        <ShowcaseItem item={getShowcaseItem("ak47")} alt="AK-47" />
                        <ShowcaseItem item={getShowcaseItem("m4a4")} alt="M4A4" />
                        <ShowcaseItem item={getShowcaseItem("m4a1s")} alt="M4A1-S" />
                    </div>
                </div>
                <div className="showcase-row">
                    <div className="showcase-row-title">Pistols</div>
                    <div className="showcase-row-items">
                        <ShowcaseItem item={getShowcaseItem("deserteagle")} alt="Deagle" />
                        <ShowcaseItem item={getShowcaseItem("usps")} alt="USP-S" />
                        <ShowcaseItem item={getShowcaseItem("glock18")} alt="Glock-18" />
                    </div>
                </div>
                <div className="tab-title mini"><span>What Is This?</span></div>
                <span className="showcase-description">This is a showcase of your favorite items, you can add them here</span>
                <div className="tab-title mini"><span>How To Fill?</span></div>
                <span className="showcase-description">
                    Go to the "Inventory" section, then click on the desired item and click "Select for Showcase".<br/>
                    This item will be displayed on your showcase
                </span>
            </div>
        );

        return (
            <ItemPage 
                items={inventory}
                ripple={true}
                onClick={item => setSelectedItem(item)}
            />
        );
    }

    return (
        <div className="Profile">
            <div className="profile-widget">
                {renderInfo()}
            </div>

            <div className="profile-content">
                <div className="tab-list">
                    <span 
                        children="Showcase"
                        onMouseDown={() => setProfileTab(0)}
                        className={buildClassName(!profileTab && "active")}
                    />
                    <span 
                        children="Inventory"
                        onMouseDown={() => setProfileTab(1)}
                        className={buildClassName(!!profileTab && "active")}
                    />
                </div>

                <div className="profile-inventory-tabs">
                    {renderRelevantTab()}
                </div>
            </div>

            {selectedItem && (
                <Modal
                    title={`${selectedItem.weaponName} | ${selectedItem.skinName}`}
                    className="item-info-modal"
                    onCancel={() => setSelectedItem(null)}
                    actions={[{
                        children: "sell",
                        negative: true,
                        onClick: () => sellItem(setGlobalState, selectedItem)
                    }, {
                        children: "Select for Showcase",
                        disabled: !canSelectToShowCase(selectedItem),
                        onClick: () => selectToShowcase(setGlobalState, selectedItem)
                    }, {
                        children: "cancel"
                    }]}
                >
                    <Item 
                        ripple={false}
                        onClick={() => void 0}
                        item={selectedItem}
                    />
                </Modal>
            )}
        </div>
    );
}

export default Profile;