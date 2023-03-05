import React from "react";

import EN from "../locale/EN";
import RU from "../locale/RU";

export const LangModels = {
    EN: {
        name: "English",
        localeName: "English",
        bundle: EN
    },
    RU: {
        name: "Russian",
        localeName: "Русский",
        bundle: RU
    }
}

const useLang = GlobalState => {
    var code = GlobalState.settings.lang;

    if (!(code in LangModels)) code = "EN";

    const model = LangModels[code];

    return model.bundle;
}

export const interactiveLangRender = (template, separator, value) => {
    const array = template.split(separator);

    return <>
        {array[0]}
        {value}
        {array[1]}
    </>
}

export default useLang;