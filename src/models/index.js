const Models = {}

const getModel = key => {
    if (!Models[key]) return [];

    return Models[key];
}

export const downloadModelResources = async () => {
    const WeaponsModule = await import("./weapons.json");
    const ExtraordinaryModel = await import("./extraordinary.json");
    const CollectionsModel = await import("./collections.json");

    Models.Collections = CollectionsModel.default;
    Models.Weapons = WeaponsModule.default;
    Models.Extraordinary = ExtraordinaryModel.default;

    return Models;
}

export default {
    get Collections() {
        return getModel("Collections");
    },

    get Weapons() {
        return getModel("Weapons");
    },

    get Extraordinary() {
        return getModel("Extraordinary"); 
    }
}

export const StorageVirtualModel = {
    id: "service:storage",
    type: "weapon",
    rarity: "service",
    image: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXX7gNTPcUxqAhWSVjvS-W_0MqdAFwiJAdS7-v9eFVm16WZdWkXtYWwxdjTw_PwauLQxTkJ6cd3jrvArcLlhlOwU2JlOg",
}

export const getCollectionItems = collectionId => {
    return getModel("Weapons").filter(weapon => {
        if (Array.isArray(weapon.collectionId)) {
            return weapon.collectionId.includes(
                Number(collectionId)
            );
        }

        return weapon.collectionId === Number(collectionId);
    });
}

const STEAM_IMAGES_ROOT = "https://steamcommunity-a.akamaihd.net/economy/image/";
export const getItemImageUrl = item => {
    if (!item || !item.image) return null;

    if (
        item.image.startsWith("http")
        || item.image.startsWith("./assets")
    ) return item.image;

    return STEAM_IMAGES_ROOT + item.image;
};

export const getCollectionById = id => {
    return getModel("Collections").find(item => item.id == id);
}