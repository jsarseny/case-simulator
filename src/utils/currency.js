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
        },
    },


    formatPrice(currency, value) {
        const model = this.models[currency];

        if (!model) return null;

        return model.format.replace("{symbol}", model.symbol).replace("{value}", value);
    },

    renderPrice(GlobalState, USD, html = false) {
        const { currency } = GlobalState.settings;
        const model = this.models[currency];

        if (!model) return USD;

        var price = USD * model.multiplier;

        if (price > Math.floor(price)) {
            price = Math.floor(price).toLocaleString() + (price - Math.floor(price)).toFixed(2).replace(/^0\./ig, ",");
        } else price = price.toLocaleString();

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