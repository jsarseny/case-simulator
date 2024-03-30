import React from "react";

import EN from "../locale/EN.js";
import RU from "../locale/RU.js";

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

const useLang = (GlobalState, setGlobalState) => {
    var code = GlobalState.settings.lang;

    if (!(code in LangModels)) {
        code = "EN";
        setGlobalState(prev => ({
            ...prev,
            settings: {
                ...prev.settings,
                lang: "EN"
            }
        }));
    };

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

export const renderNumeralPath = (number, words, template = "{number} {word}") => {
    let word = numeral(number, words);

    template.replace("{number}", number).replace("{word}", word);

    return template;
}

export const numeral = (number, words) => {
    if (!words[2]) words[2] = words[1];

    var word = words[(number % 100 > 4 && number % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(number % 10 < 5) ? Math.abs(number) % 10 : 5]];

    if (!word) return word;
    if (/%d/ig.test(word)) return word.replace(/%d/ig, number.toString());

    return word;
}
export default useLang;