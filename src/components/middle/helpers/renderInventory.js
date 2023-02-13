import RareItems from "../../../models/rare";
import Weapons from "../../../models/weapons";
import { RARITY_PRIORITY, WeaponTypes } from "../../../utils/chance"; 

const renderInventory = inventory => {
    var price = 0;
    var rendered = inventory.map((item, id) => {
        const storage = item.id >= 0 ? Weapons : RareItems;

        var model = storage.find(w => w.id === item.id);

        if (!model || !model.prices) return;

        price += model.prices[item.quality];
        
        return {
            ...model,
            countId: id,
            uid: item.uid,
            quality: item.quality,
            price: model.prices[item.quality]
        }
    }).sort((a, b) => {
        return a.price > b.price ? -1 : 1;
    }).sort((a, b) => {
        if (RARITY_PRIORITY[a.rarity] > RARITY_PRIORITY[b.rarity]) return -1 
        if (RARITY_PRIORITY[a.rarity] < RARITY_PRIORITY[b.rarity]) return 1;

        return 0;
    });

    window.rendered = rendered;

    return {
        price,
        inventory: rendered
    }
}

export default renderInventory;

export const filterInventory = (
    inventory,
    quality,
    rarity,
    weaponType
) => {
    if (!quality && !rarity && !weaponType) return inventory;

    return inventory.filter(item => {
        if (!item) return false;

        if (quality && item.quality.slice(0, 2) !== quality) return false;
        if (rarity && item.rarity !== rarity) return false;

        if (weaponType && WeaponTypes[weaponType]) {
            let weaponName = item.weaponName.replace(/★/ig, "").trim();
            let namespace = WeaponTypes[weaponType];

            let result = false;
            namespace.forEach(name => {
                if (result) return;

                let regex = new RegExp(`^${name}$`, "ig");
                result = regex.test(weaponName);
            });

            return result;
        }
        return true;
    });
}

export const searchInventory = (inventory, query) => {
    query = query.trim();

    if (!query || !query.length) return inventory;

    var regex = new RegExp(query.trim(), "ig");

    return inventory.filter(item => {
        return regex.test(item.weaponName) || regex.test(item.skinName)
    });
}