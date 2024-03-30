// csmoney parser
// WARNING!!! SHITCODE DETECTED BELOW:

var startId = 0, collectionId = 0;
const proxy = () => {
    startId++;
    return scanPage(startId, collectionId);
}
const proxyRare = () => {
    startId--;
    var t = scanPage(startId, collectionId);
    t.rarity = "gold";
    return t;
}

const getUsd2 = (...dollars) => {
    var basic = ["FN","MW","FT","WW","BS"];
    var stattrack = ["FNST","MWST","FTST","WWST","BSST"];
    
    var result = {}, counter = 0;
    var arr = basic;

    dollars.forEach((dollar, i) => {
        if (Number.isNaN(dollar) && i > 0) {
            arr = stattrack;
            counter = 0;
            return;
        } 
        
        let price = dollar;
        result[arr[counter]] = Number(price.toFixed(2));

        counter++;
    });
    
    return result;
}

var $c = c => document.getElementsByClassName(c)
const scanPage = (id, collectionId) => {
    var image = $c("dpraasctqkkxdqhxyzmqahxkmo")[0].src
    var name = $c("rdmwocwwwyeqwxiiwtdwuwgwkh")[0].innerText.split(" | ");
    var rarity = document.querySelectorAll(".fjkvfnsgecgkfkptxotkuwnbro > .nwdmbwsohrhpxvdldicoixwfed")
    rarity = rarity[1].title.toLowerCase();
    
    var prices = Array.from($c("cbwkznqqznnkaacmmnkbomescp"))
    prices = prices.slice(1);
    prices = prices.map(price => {
        let text = price.innerText.replace(/\$| /ig, "");
    
        return Number(text);
    });

    rarity = rarity.replace(/grade| /ig, "");
    if (rarity === "consumer") rarity = "base";
    
    return {
        id,
        collectionId,
        type: "weapon",
        weaponName: name[0],
        skinName: name[1],
        rarity: rarity,
        image,
        prices: getUsd2(...prices)
    }
} 