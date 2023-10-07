import React from "react"

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
            multiplier: 94.50,
            symbol: "₽",
            format: "{value}{symbol}"
        },
        GBP: {
            multiplier: 0.79,
            symbol: "£",
            format: "{symbol}{value}"
        },
        CNY: {
            multiplier: 7.29,
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
        } else if (floor >= 1e-6) {
            price = Math.floor(price).toLocaleString("ru-RU") + floor.toFixed(2).replace(/^0\./ig, ",");
        } else price = Number(price.toFixed(2)).toLocaleString("ru-RU");

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