import React from "react"
import {randomElement} from "./chance.js";
const Currency = {
    models: {
        USD: {
            multiplier: 1,
            symbol: "$",
            format: "{symbol}{value}" 
        },
        EUR: {
            multiplier: 0.94,
            symbol: "€",
            format: "{symbol}{value}"
        },
        RUB: {
            multiplier: 75,
            symbol: "₽",
            format: "{value}{symbol}"
        },
        GBP: {
            multiplier: 0.84,
            symbol: "£",
            format: "{symbol}{value}"
        },
        CNY: {
            multiplier: 6.92,
            symbol: "¥",
            format: "{value}{symbol}"
        }
    },


    formatPrice(currency, value) {
        const model = this.models[currency];

        if (!model) return null;

        return model.format.replace(/\{symbol\}/g, model.symbol).replace(/\{value\}/g, value);
    },

    renderPrice(GlobalState, USD, html = false) {
        const { currency } = GlobalState.settings;
        const model = this.models[currency];

        if (!model) return USD;

        var price = USD * model.multiplier;
        var floor = price - Math.floor(price);

        if (floor > 0.99) {
            price = Math.round(price).toLocaleString("ru-RU");
        } else if (floor >= 0.01) {
            price = Math.floor(price).toLocaleString("ru-RU") + floor.toFixed(2).replace(/^0\./ig, ",");
        } else price = price.toLocaleString("ru-RU");

        const formatted = this.formatPrice(currency, price);

        if (html) return formatted;

        return (
            <font className="price-chunk">
                {formatted}
            </font>
        )
    }
}

export default Currency;