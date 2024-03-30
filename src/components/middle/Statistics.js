import React, { useContext, useEffect } from "react";

import useFlag from "../../hooks/useFlag.js";
import Context from "../../utils/context.js";
import Currency from "../../utils/currency.js";

import "./Statistics.css";

const Statistics = () => {
    const { GlobalState, DeepLink } = useContext(Context);
    const stats = GlobalState.statistics;

    const [ isOptimized, enableOptimization, disableOptimization ] = useFlag(false);

    useEffect(() => {
        DeepLink.addEventListener("cs:/global/optimizationRequest", context => {
            var { target, enable } = context;

            if (target !== "statistics") return;

            enable = Boolean(Number(enable));
            enable ? enableOptimization() : disableOptimization();
        });
    }, []);

    const CommonStats = {
        "Total Money Obtained": Currency.renderPrice(GlobalState, stats.TotalMoneyObtained),
        "Total Money Spent": Currency.renderPrice(GlobalState, stats.TotalMoneySpent),
        "Total Items Obtained": stats.TotalItemsObtained,
        "Total Crafts Made": stats.TotalCraftsMade,
        "Total Contracts Made": stats.TotalContractsMade,
        "Total Upgrades Made": stats.TotalUpgradesMade,
        "Total Items Purchased": stats.TotalItemsPurchased,
    }

    const CasesStats = {
        "Total Opened": stats.TotalCratesOpened + stats.TotalSouvenirsOpened,
        "Containers": stats.TotalCratesOpened,
        "Souvenirs": stats.TotalSouvenirsOpened,
        "Total Cases Price": Currency.renderPrice(GlobalState, stats.TotalCratesPrice),
        "Gold Items Obtained": stats.TotalGoldDropped,
        "Covert Items Obtained": stats.TotalCovertDropped,
    }

    const renderColumn = column => {
        if ("number" === typeof column) return column.toLocaleString();

        return column
    }

    if (isOptimized) return;

    return (
        <div className="Statistics">
            <div className="statistics-title">
                <div className="tab-title mini"><span>{GlobalState.profile.username || "Player"}'s statistics:</span></div>
            </div>
            <div className="statistics-body">
                <div className="statistics-table">
                    <div className="row">Common</div>
                    {Object.keys(CommonStats).map((item, i) => (
                        <div className="row" key={i}>
                            <div className="column">{item}</div>
                            <div className="column">{renderColumn(CommonStats[item])}</div>
                        </div>
                    ))}
                </div>

                <div className="statistics-table">
                    <div className="row">Cases</div>
                    {Object.keys(CasesStats).map((item, i) => (
                        <div className="row" key={i}>
                            <div className="column">{item}</div>
                            <div className="column">{renderColumn(CasesStats[item])}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Statistics;