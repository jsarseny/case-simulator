import Models, { getCollectionItems } from "../models/index.js";

// sort helpers
export const shuffle = array => array.sort(() => Math.random() - 0.5);
export const orderLowerPrice = itemsArray => itemsArray.sort((a, b) => a.price > b.price ? 1 : -1);
export const orderHigherPrice = itemsArray => itemsArray.sort((a, b) => a.price > b.price ? -1 : 1);

export const chance = percent => Math.random() < (percent / 100); 
export const randomFloat = (min, max) => Math.random() * (max - min) + min;
export const randomInt = (min, max) => Math.floor(randomFloat(min, max));
export const randomElement = array => array[randomInt(0, array.length)];
export const randomElementExtended = (array, exclude) => {
    exclude = Array.isArray(exclude) ? exclude : [ exclude ];
    array = array.filter((item, i) => !exclude.includes(i));

    return randomElement(array);
}

export const WeaponTypes = {
    Machineguns: [ "negev", "m249" ],
    Shotguns: [ "sawed-off", "mag-7", "nova", "xm1014" ],
    SniperRifles: [
        "awp", "ssg 08", "scar-20", "g2sg1" 
    ],
    Rifles: [
        "ak-47", "m4a4", "m4a1-s", "aug", "sg 553", 
        "galil ar", "famas"
    ],
    SMGs: [
        "p90", "ump-45", "mac-10", "mp7",
        "mp9", "mp5-sd", "pp-bizon"
    ],
    Pistols: [
        "usp-s", "glock-18", "desert eagle", "p250",
        "five-seven", "cz75-auto", "p2000", "tec-9",
        "r8 revolver", "dual berettas"
    ],
    Gloves: [
        "Broken Fang Gloves", "Bloodhound Gloves", "Sport Gloves", 
        "Driver Gloves", "Hand Wraps", "Moto Gloves", 
        "Specialist Gloves", "Hydra Gloves"
    ],
    Knifes: [
        "karambit", "m9 bayonet", "butterfly knife",
        "talon knife", "skeleton knife", "classic knife",
        "bayonet", "stiletto knife", "ursus knife",
        "paracord knife", "nomad knife", "survival knife",
        "huntsman knife", "flip knife", "bowie knife",
        "falchion knife", "gut knife", "navaja knife",
        "shadow daggers", "kukri knife"
    ],
}

export const ItemOriginById = {
    "-1": "Unknown",

    0: "Found in Crate",
    1: "Crafted",
    2: "Purchased",
    3: "Upgraded",
    4: "Traded Up"
}

export const getItemOrigin = item => ItemOriginById[item.origin] || ItemOriginById[-1];

export const WeaponQuality = {
    FN: "Factory New",
    MW: "Minimal Wear",
    FT: "Field-Tested",
    WW: "Well-Worn",
    BS: "Battle-Scarred",
}

export const WeaponQualityExtended = {
    ...WeaponQuality,
    "FNST": "Factory New ST™",
    "MWST": "Minimal Wear ST™",
    "FTST": "Field-Tested ST™",
    "WWST": "Well-Worn ST™",
    "BSST": "Battle-Scarred ST™",
}

export const RARITY_PRIORITY = {
    "gold": 6,
    "covert": 5,
    "classified": 4,
    "restricted": 3,
    "mil-spec": 2,
    "industrial": 1,
    "base": 0
}

export const getRarity = number => {
    let quality = null;

    Object.keys(RARITY_PRIORITY).forEach(key => {
        if (RARITY_PRIORITY[key] === number) quality = key;
    });

    return quality;
}

export const CASE_CHANCES = {
    "gold": 0.25575,
    "covert": 0.63939,
    "classified": 3.19693,
    "restricted": 15.98465,
    "mil-spec": 79.92327,
}

const STATTRACK_CHANCE = 4;

export const COLLECTION_CHANCES = {
    "covert": 0.42,
    "classified": 1.35,
    "restricted": 2.14,
    "mil-spec": 5.95,
    "industrial": 18.08,
    "base": 72.06
}

export const getLimitContainerRarities = containerId => {
    const items = getCollectionItems(containerId);

    var rarities = [];
    items.forEach(item => {
        if (rarities.includes(item.rarity)) return;

        rarities.push(item.rarity);
    });

    return rarities.sort((a, b) => {
        return RARITY_PRIORITY[a] > RARITY_PRIORITY[b] ? 1 : -1;
    });
}

export const selectRareItem = collectionId => {
    const available = Models.Extraordinary.filter(rare => {
        if (Array.isArray(rare.collectionId)) {
            return rare.collectionId.includes(
                Number(collectionId)
            );
        }

        return rare.collectionId === Number(collectionId);
    });

    const model = randomElement(available);

    const qualityList = Object.keys(model.prices);
    const StatTrack = qualityList.filter(quality => /ST$/ig.test(quality));
    const Basic = qualityList.filter(quality => !/ST$/ig.test(quality));

    var resultQuality = null;
    if (!!StatTrack.length && chance(STATTRACK_CHANCE)) resultQuality = randomElement(StatTrack);
    else resultQuality = randomElement(Basic);

    return {
        ...model,
        quality: resultQuality,
        price: model.prices[resultQuality]
    }
}

export const mathContainer = containerId => {
    const items = getCollectionItems(containerId);
    const chances = CASE_CHANCES;
    const containerRarities = getLimitContainerRarities(containerId);

    var droppedRarity = null;
    var resultQuality = null;

    Object.keys(chances).forEach(rarity => {
        if (droppedRarity || !containerRarities.includes(rarity)) {
            return;
        }
        
        let percent = chances[rarity];
        if (chance(percent)) droppedRarity = rarity;
    });

    if (!droppedRarity) droppedRarity = containerRarities[0];

    const relevantItems = items.filter(item => item.rarity === droppedRarity);
    const resultItemModel = randomElement(relevantItems);

    if ("gold" === droppedRarity) return resultItemModel;

    const qualityList = Object.keys(resultItemModel.prices);
    const StatTrack = qualityList.filter(quality => /ST$/ig.test(quality));
    const Basic = qualityList.filter(quality => !/ST$/ig.test(quality));

    if (!!StatTrack.length && chance(STATTRACK_CHANCE)) {
        resultQuality = randomElement(StatTrack);
    } else {
        resultQuality = randomElement(Basic);
    }

    return {
        ...resultItemModel,
        quality: resultQuality,
        price: resultItemModel.prices[resultQuality]
    }
}

export const mathCollection = collectionId => {
    const items = getCollectionItems(collectionId);
    const chances = COLLECTION_CHANCES;
    const containerRarities = getLimitContainerRarities(collectionId);

    var droppedRarity = null;

    Object.keys(chances).forEach(rarity => {
        if (
            droppedRarity
            || !containerRarities.includes(rarity)
        ) return;

        let percent = chances[rarity];
        if (chance(percent)) droppedRarity = rarity;
    });

    if (!droppedRarity) droppedRarity = containerRarities[0];

    const relevantItems = items.filter(item => item.rarity === droppedRarity);
    const resultItemModel = randomElement(relevantItems);
    const resultQuality = randomElement(
        Object.keys(resultItemModel.prices)
    );

    return {
        ...resultItemModel,
        quality: resultQuality,
        price: resultItemModel.prices[resultQuality]
    }
}

export const getOutcomesChances = items => {
    const outcomes = [];
    const commonItems = new Map();

    var total = 0;

    items.forEach(item => {
        var collectionIds = Array.isArray(item.collectionId) ? item.collectionId : [item.collectionId];

        collectionIds.forEach(collectionId => {
            var collectionItems = getCollectionItems(collectionId).filter(out => {
                return out.rarity === getRarity(RARITY_PRIORITY[items[0].rarity] + 1);
            });
    
            collectionItems.forEach(_item => {
                var current = commonItems.get(_item.id) || 0;
    
                return commonItems.set(_item.id, current + 1);
            });
        });
    });

    commonItems.forEach(count => total += count);
    
    for (let [ id, count ] of commonItems) {
        outcomes.push({ 
            id, 
            chance: Number.parseFloat((count / total * 100).toFixed(2))
        });
    }

    return outcomes;
}

export const mathContract = (items, isStatTrack) => {
    const chances = shuffle(getOutcomesChances(items));

    let lastIndex = 0;
    const outcomes = chances.map(({ id, chance }) => {
        let min = lastIndex;
        let max = lastIndex + chance;

        lastIndex += chance;

        return { id, min, max }
    });

    var resultItemModel = null;
    const randomNumber = randomFloat(0, lastIndex);

    outcomes.forEach(outcome => {
        if (resultItemModel) return;

        if (randomNumber >= outcome.min && randomNumber < outcome.max) {
            resultItemModel = Models.Weapons.find(weapon => weapon.id === outcome.id);
        }
    });

    const availableQualities = Object.keys(resultItemModel.prices).filter(q => {
        if ((q.includes("ST") && !isStatTrack) || (!q.includes("ST") && isStatTrack)) return false;

        return true;
    });

    const resultQuality = randomElement(availableQualities);

    return {
        ...resultItemModel,
        quality: resultQuality,
        price: resultItemModel.prices[resultQuality]
    }
}

export const getPriceRangeItems = (
    item, 
    multiplier, 
    deviation = { min: -0.05, max: 0.25 },
    sortFn
) => {
    const range = {
        min: item.price * (multiplier + deviation.min),
        max: item.price * (multiplier + deviation.max)
    }

    const result = [];
    const all = Models.Weapons.concat(Models.Extraordinary);

    all.forEach(current => {
        if (!current.prices) return;

        Object.keys(current.prices).forEach(quality => {
            var price = current.prices[quality];

            if (current.id === item.id && quality === item.quality) return;

            if (price >= range.min && price <= range.max) {
                let minimal = {}
                Object.assign(minimal, current);

                delete minimal.prices;

                return result.push({
                    ...minimal,
                    price,
                    quality
                });
            }
        });
    });

    if (sortFn) return sortFn(result);

    return shuffle(result);
}