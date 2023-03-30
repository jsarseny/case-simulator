const recentlyReceivedItems = new Map();
window.recentlyReceivedItems = recentlyReceivedItems;

export const generateUid = () => {
    return (+new Date() + Math.random()).toFixed(3);
}

export const statistics = {
    edit(stateDispatch, field, delta) {
        stateDispatch(prev => {
            return {
                ...prev,
                statistics: {
                    ...prev.statistics,
                    [field]: Number((prev.statistics[field] + delta).toFixed(2))
                }
            }
        });
    }
}

export const insertItem = (stateDispatch, item, originId = 0, iterationIndex = -1) => {
    let uidSuffix = iterationIndex > -1 ? `.${iterationIndex}` : "";

    const minimalItem = {
        id: item.id,
        origin: originId,
        quality: item.quality,
        uid: generateUid() + uidSuffix
    }

    window.recentlyReceivedItems.set(minimalItem.uid, +new Date());

    statistics.edit(stateDispatch, "TotalItemsObtained", 1);
    if (item.price) statistics.edit(stateDispatch, "TotalMoneyObtained", item.price);

    stateDispatch(prev => ({
        ...prev,
        profile: {
            ...prev.profile,
            inventory: prev.profile.inventory.concat(minimalItem)
        }
    }));
}

export const deleteItem = (stateDispatch, itemUids) => {
    itemUids = Array.isArray(itemUids) ? itemUids : [itemUids];

    itemUids.forEach(uid => {
        recentlyReceivedItems.delete(uid);
    });

    stateDispatch(prev => {
        var inventory = prev.profile.inventory.filter(item => {
            return !itemUids.includes(item.uid);
        });

        return {
            ...prev,
            profile: {
                ...prev.profile,
                inventory
            }
        }
    });
}

export const withdrawBalance = (stateDispatch, amount) => {
    // protection of "null" balance
    if (Number.isNaN(amount) || "number" !== typeof amount) {
        return;
    }

    if (amount > 0) {
        statistics.edit(stateDispatch, "TotalMoneySpent", Math.abs(amount));
    }

    stateDispatch(prev => ({
        ...prev,
        profile: {
            ...prev.profile,
            balance: Number((prev.profile.balance - amount).toFixed(2))
        }
    }));
}

export const sellItem = (stateDispatch, item, shouldDelete = true) => {
    if (shouldDelete && item.uid) {
        deleteItem(stateDispatch, item.uid)
    }

    if ("number" !== typeof item.price) return;

    withdrawBalance(stateDispatch, -item.price);
}

export const buyItem = (stateDispatch, item, count, murkup) => {
    const price = parseFloat((item.price * murkup).toFixed(2)) * count;

    var isBlocked = false;

    stateDispatch(prev => {
        if (prev.profile.balance < price) isBlocked = true;
        else prev.profile.balance -= price;

        return prev;
    });

    if (isBlocked) return;

    statistics.edit(stateDispatch, "TotalMoneySpent", Math.abs(price));
    statistics.edit(stateDispatch, "TotalItemsPurchased", count);

    if (count < 2) {
        return insertItem(stateDispatch, item, 2);
    }

    for (var i = 0; i < count; i++) insertItem(stateDispatch, item, 2, i);
}