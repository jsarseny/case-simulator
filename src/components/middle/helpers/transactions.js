const generateUid = () => {
    return (+new Date() + Math.random()).toFixed(11);
}

export const insertItem = (stateDispatch, item, iterationIndex = -1) => {
    let uidSuffix = iterationIndex > -1 ? `.${iterationIndex}` : "";

    const minimalItem = {
        id: item.id,
        uid: generateUid() + uidSuffix,
        quality: item.quality
    }

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

    for (var i = 0; i < count; i++) {
        insertItem(stateDispatch, item, i);
    }
}