import React, { useContext } from "react";

import Context from "../../utils/context";
import Currency from "../../utils/currency";

import "./Statistics.css";

const Statistics = () => {
    const { GlobalState } = useContext(Context);
    const stats = GlobalState.statistics;

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

    return (
        <div className="Statistics">
            <div className="statistics-title">
                <div className="tab-title mini"><span>{GlobalState.profile.username} Player statistics:</span></div>
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