import RareItems from "../../../models/rare";
import Weapons from "../../../models/weapons";
import { RARITY_PRIORITY, WeaponTypes } from "../../../utils/chance"; 

export const getItemModelById = id => {
    const storage = id >= 0 ? Weapons : RareItems;

    var model = storage.find(w => w.id === id);

    return model;
}

const renderInventory = inventory => {
    var price = 0;
    var rendered = inventory.map((item, id) => {
        var model = getItemModelById(item.id);

        if (!model || !model.prices) return;

        price += model.prices[item.quality];
        
        return {
            ...item,
            ...model,
            countId: id,
            price: model.prices[item.quality]
        }
    }).sort((a, b) => {
        return a.price > b.price ? -1 : 1;
    }).sort((a, b) => {
        if (RARITY_PRIORITY[a.rarity] > RARITY_PRIORITY[b.rarity]) return -1 
        if (RARITY_PRIORITY[a.rarity] < RARITY_PRIORITY[b.rarity]) return 1;

        return 0;
    });

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
        if (!item || item.rarity == "service") return false;

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

    query = query.replace(/\\|\[|\]/ig, "");

    return inventory.filter(item => {
        let regex = new RegExp(query, "ig");

        return regex.test(item.weaponName) || regex.test(item.skinName)
    });
}

export const getItemsPrice = items => {
    var price = 0;

    items.forEach(item => price += item.price);

    return price;
}

export const getPriceRange = items => {
    var min = Infinity;
    var max = 0;

    items.forEach(item => {
        Object.values(item.prices).forEach(price => {
            if (price < min) min = price;
            if (price > max) max = price;
        });
    });

    return { min, max }
}