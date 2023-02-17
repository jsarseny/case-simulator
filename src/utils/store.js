const STORE_VERSION = "1.0.40";

export const INITIAL_STATE = {
    version: STORE_VERSION,
    activeTab: 0,
    readNotes: false,
    bestDrop: {
        id: null, 
        quality: null, 
        from: null
    },
    profile: {
        username: "Player",
        balance: 0,
        inventory: [],
        showcase: {
            knife: null,
            gloves: null,
            awp: null,
            ak47: null,
            m4a4: null,
            m4a1s: null,
            deserteagle: null,
            usps: null,
            glock18: null
        }
    }
}

const FORCE_RESET_FIELDS = [ "version", "readNotes" ];

const deepUpdate = (target, template) => {
    var result = {};

    Object.entries(template).forEach(([key, value]) => {
        let resultKey, resultValue;
        let currentTargetValue = target[key];

        if (currentTargetValue == undefined || FORCE_RESET_FIELDS.includes(key)) {
            resultKey = key;
            resultValue = value;
        } else if (
            currentTargetValue instanceof Object 
            && !(currentTargetValue instanceof Array)
        ) {
            resultKey = key;
            resultValue = deepUpdate(currentTargetValue, value);
        } else {
            resultKey = key;
            resultValue = currentTargetValue;
        }

        result[resultKey] = resultValue;
    });

    return result;
}

const getMainContext = () => {
    var storeContext = JSON.parse(localStorage.getItem("cs-csgo-store") || "null");

    if (!storeContext) return INITIAL_STATE;

    if (storeContext.version !== STORE_VERSION) {
        storeContext = deepUpdate(storeContext, INITIAL_STATE);
    }

    return storeContext;
}

const StoredMainContext = getMainContext();

export default StoredMainContext;