import { WeaponTypes } from "../../../utils/chance"

export const canSelectToShowCase = item => {
    var result = false;

    const helper = (types, name) => types.forEach(type => {
        let regex = new RegExp(type, "ig");

        if (regex.test(item.weaponName)) {
            result = name || type.replace(/ |-/ig, "");
        }
    });

    helper(Object.values(WeaponTypes.Knifes), "knife");
    helper(Object.values(WeaponTypes.Gloves), "gloves");
    helper([ 
        "awp", "ak-47", "m4a4", "m4a1-s",
        "desert eagle", "usp-s", "glock-18"
    ]);

    return result;
}

export const isItemOnShowcase = (globalState, item) => {
    const { showcase } = globalState.profile;

    return Object.values(showcase).includes(item.uid);
}

export const selectToShowcase = (stateDispatch, item) => {
    const type = canSelectToShowCase(item);

    if (!type) return;

    stateDispatch(prev => {
        const { showcase } = prev.profile;

        showcase[type] = item.uid;

        return {
            ...prev,
            profile: {
                ...prev.profile,
                showcase
            }
        }
    });
}

export const removeFromShowcase = (stateDispatch, item) => {
    const type = canSelectToShowCase(item);

    if (!type) return;

    stateDispatch(prev => {
        const { showcase } = prev.profile;

        showcase[type] = null;

        return {
            ...prev,
            profile: {
                ...prev.profile,
                showcase
            }
        }
    });
}

export const deleteFromShowcase = (stateDispatch, type) => {
    stateDispatch(prev => {
        const { showcase } = prev.profile;

        showcase[type] = null;

        return {
            ...prev,
            profile: {
                ...prev.profile,
                showcase
            }
        }
    });
}