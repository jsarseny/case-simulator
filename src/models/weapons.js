import RareItems from "./rare";

const Weapons = [
    // Assault
    {
        id: 0,
        collectionId: 0,
        type: "weapon",
        weaponName: "UMP-45",
        skinName: "Caramel",
        rarity: "base",
        image: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo7e1f1JfwPz3cjxQ7dGzmL-HnvD8J_WFzjMC7Mdwj7CZrImsiwLl80NpMjj2J9XEd1c-Y1HY-Qe5xejqgsS1ot2XnhE4oDtN",
        prices: {
            FN: 27.25,
            MW: 6.56,
            FT: 6.06,
            WW: 6.13,
            BS: 6.25
        }
    }, {
        id: 1,
        collectionId: 0,
        type: "weapon",
        weaponName: "SG-553",
        skinName: "Tornado",
        rarity: "base",
        image: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopb3wflFfwPz3ZTJQ4t2ym7-HnvD8J_WCxG8AvZcp2LyXpY6n2AGyqUBkZDqlLIGTJFU_aAyB-Vm_yOvujJ66ot2XnuhtLzwJ",
        prices: {
            FN: 16.18,
            MW: 6.62,
            FT: 6.18,
            WW: 6.00,
            BS: 6.18
        }
    }, {
        id: 2,
        collectionId: 0,
        type: "weapon",
        weaponName: "Five-SeveN",
        skinName: "Candy Apple",
        rarity: "industrial",
        image: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLOzLhRlxfbGTi5N086zkL-HnvD8J_WDz2pUv8cj2L-V94iniQft-xY_NWzydYOUcA89NVqD-FO-w7i70Me1ot2XnkOsbUS5",
        prices: {
            FN: 57.81,
            MW: 44.00,
            FT: 55.56,
            WW: 36.63,
            BS: 33.00
        }
    }, {
        id: 3,
        collectionId: 0,
        type: "weapon",
        weaponName: "AUG",
        skinName: "Hot Rod",
        rarity: "mil-spec",
        image: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot6-iFAZu7OHNdQJO5du-gM7SlvP2a-KFkDsD6cN33b6Z84rz0QXs8xJuZzymdYfDclU2M17W_Fm7366x0jzU3_8y",
        prices: {
            FN: 280.94,
            MW: 107.38,
            FT: 137.50,
            WW: 135.69,
            BS: 122.44
        }
    }, {
        id: 4,
        collectionId: 0,
        type: "weapon",
        weaponName: "Negev",
        skinName: "Anodized Navy",
        rarity: "mil-spec",
        image: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpouL-iLhFf0v33fzxU9eO6nYeDg7mhN7rXlTgDuMQi3-vCpdjw2Ae2qRZsMG2mINSUIAQ3YlvZ8gW_k7q-m9bi60E-BDow",
        prices: {
            FN: 260.50,
            MW: 93.00,
            FT: 125.13,
            WW: 123.56,
            BS: 111.50
        }
    }, {
        id: 5,
        collectionId: 0,
        type: "weapon",
        weaponName: "MP9",
        skinName: "Bulldozer",
        rarity: "restricted",
        image: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6r8FBRv7OrNfTFN--O6nYeDg7nwNbqExmlV7pUjiOrC99Wl2Aaw-0o_a2DycIKUIFc4ZArRqQS8lee8m9bi6-WeLRzM",
        prices: {
            FN: 297.06,
            MW: 84.88,
            FT: 27.13,
            WW: 23.00,
            BS: 19.19
        }
    }, {
        id: 6,
        collectionId: 0,
        type: "weapon",
        weaponName: "Glock-18",
        skinName: "Fade",
        rarity: "restricted",
        image: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbaqKAxf0vL3dzxG6eO6nYeDg7miYr7VlWgHscN32LyT8dmm31XgrxdtZzvzJYDGIFM2Y16D-FfvlOu9m9bi66Oq9HyE",
        prices: { FN: 1337.88, MW: 1059.44 }
    },

    // Cache
    {
        id: 7,
        collectionId: 1,
        type: "weapon",
        weaponName: "AUG",
        skinName: "Radiation Hazard",
        rarity: "industrial",
        image: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot6-iFBRw7P3dejhR-M6_hIW0mOX1PbzUqWpE7_p9g-7J4cKh2wTt-kBkMT32do_Adwc2Z1rYrlS_xr_tgpO7uJqcmnswuCIi4ivegVXp1vNtKNLo",
        prices: {FN: 3.13, MW: 3.13, FT: 3.13, WW: 3.13, BS: 3.13}
    }, {
        id: 8,
        collectionId: 1,
        type: "weapon",
        weaponName: "PP-Bizon",
        skinName: "Chemical Green",
        rarity: "industrial",
        image: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLO_JAlfwPz3di9H9eO4gYOHkvbmDLzDk25f18d4kObPyoD8j1yg5UNrYTzxIdSUJFc9ZQ7V-gXvwubqhZW9vJnLzSBr6Ckk7HfezEOxiRxSLrs41lh6pmw",
        prices: {FN: 3.13, MW: 3.13, FT: 3.13, WW: 3.13, BS: 3.13}
    }, {
        id: 9,
        collectionId: 1,
        type: "weapon",
        weaponName: "Negev",
        skinName: "Nuclear Waste",
        rarity: "industrial",
        image: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpouL-iLhFfwOP3fyhB4Nm3hr-bluPgNqnfxVRf7cJ0nNbN_Iv9nBrmr0c_N2D1co_EewI9Z1-E_gK8w-fmhJS5vMibwHFmuiQh4ivVzUCxn1gSOZtaCfWE",
        prices: {FN: 3.13, MW: 3.13, FT: 3.13, WW: 3.13, BS: 3.13}
    }, {
        id: 10,
        collectionId: 1,
        type: "weapon",
        weaponName: "P250",
        skinName: "Contamination",
        rarity: "industrial",
        image: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopujwezhoyszGZD5O6d2kq5OAgvv4IO_uhjkEuPp9g-7J4cKt21bjqEE5Nj-lJNKTJFI-NF6E_Vm-k7vvjZe5vZzInXNqs3Em4yvbgVXp1h42q_cG",
        prices: {FN: 3.13, MW: 3.13, FT: 3.13, WW: 3.13, BS: 3.13}
    }, {
        id: 11,
        collectionId: 1,
        type: "weapon",
        weaponName: "Five-SeveN",
        skinName: "Hot Shot",
        rarity: "industrial",
        image: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLOzLhRlxfbGTi5N09ukkZm0meL3P77QhFRe-sR_jez-84XjjWunrgU5PQavfdHNNhg_N1HZq1W3k7_uhJG4vczKz3Frv3V05Xbem0G_gR5KaOdr0fHKS1mZGeUXSy0Rtb_k",
        prices: {FN: 3.19, MW: 3.13, FT: 3.13, WW: 3.13, BS: 3.13}
    }, {
        id: 12,
        collectionId: 1,
        type: "weapon",
        weaponName: "SG 553",
        skinName: "Fallout Warning",
        rarity: "industrial",
        image: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopb3wflFfwOP3fyhJ6c-ihombksj5MqnemWVu-8Ik37r--YXygED68kZlam-icdTBJgBqZVvQ8gW7xum5gZ696Z2aznFhvyB25yzVnUawhQYMMLKoKiteww",
        prices: {FN: 3.13, MW: 3.13, FT: 3.13, WW: 3.13, BS: 3.13}
    }, {
        id: 13,
        collectionId: 1,
        type: "weapon",
        weaponName: "Tec-9",
        skinName: "Toxic",
        rarity: "mil-spec",
        image: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoor-mcjhoyszGZD5O6d2kq5OAgvv4IO7ugm5Ssfp9g-7J4cLx0Aew_Bc5ZzryJNLHIQNoMA3Z-FTvxb29gJW978zOmHo373V05ivcgVXp1mJNZYNi",
        prices: {FN: 3.13, MW: 3.13, FT: 3.13, WW: 3.13, BS: 3.13}
    }, {
        id: 14,
        collectionId: 1,
        type: "weapon",
        weaponName: "Glock-18",
        skinName: "Reactor",
        rarity: "mil-spec",
        image: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbaqKAxf0v73fyhB4Nm3hr-bluPgNqnfx1RW5MpygdbN_Iv9nBrk-hZlYj3xLYWVJwY6NVzT-FC7k7u815-8uJnOm3A26HVx5CyPl0G-n1gSOYCubze0",
        prices: {FN: 6.06, MW: 3.88, FT: 3.13, WW: 3.13, BS: 3.13}
    }, {
        id: 15,
        collectionId: 1,
        type: "weapon",
        weaponName: "XM1014",
        skinName: "Bone Machine",
        rarity: "mil-spec",
        image: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgporrf0e1Y07PLFTjNX79CzlZK0hPzhP7fCx1RJ5ZQh273--YXygED6_EJqNmHxLYDGcgFqYg3WrlTtyLjq05S8up3Mmntluihwty3al0bmgAYMMLKwoJ4rnA",
        prices: {FN: 3.38, MW: 3.13, FT: 3.13, WW: 3.13, BS: 3.13}
    }, {
        id: 16,
        collectionId: 1,
        type: "weapon",
        weaponName: "MAC-10",
        skinName: "Nuclear Garden",
        rarity: "mil-spec",
        image: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7umeldf0v73fyhB4Nm3hr-YnOL4P6iCqWZQ65QhteXI8oThxlCy_Ec-NWygd4CUcQU-NwyG-1a9yOy-jJO-78mdyXc2vCl3tH3VyhepwUYbLXYqvpk",
        prices: {FN: 6.94, MW: 5.19, FT: 3.5, WW: 3.31, BS: 3.13}
    }, {
        id: 17,
        collectionId: 1,
        type: "weapon",
        weaponName: "MP9",
        skinName: "Setting Sun",
        rarity: "mil-spec",
        image: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6r8FA957P3dcjFH7c6JhIGfg_LmPenum3sI18l4jeHVu4igjga2-Uo_YmzxLIDAIwJtZ1uDrle-weju0Ze8u56cmnU2siQi7XjD30vgHL66Ofo",
        prices: {FN: 4.25, MW: 3.25, FT: 3.5, WW: 3.31, BS: 3.13}
    }, {
        id: 18,
        collectionId: 1,
        type: "weapon",
        weaponName: "Galil AR",
        skinName: "Cerberus",
        rarity: "restricted",
        image: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbupIgthwczLZAJB6c60hpWYqPD1P7LdqWdY781lxL6XpN6g2FLt_kY_ZW-gdtSUcgY6YViF-AftwOrqjMXpu5nKy3JhsiI8pSGKMID8wt4",
        prices: {FN: 4.25, MW: 3.25, FT: 3.5, WW: 3.31, BS: 3.13}
    }, {
        id: 19,
        collectionId: 1,
        type: "weapon",
        weaponName: "FAMAS",
        skinName: "Styx",
        rarity: "restricted",
        image: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLuoKhRf0v73fyhB4Nm3hr-YnOL4P6iDqW1Q5cRiteXI8oThxlG38kRrZz_wdoTEcgVoZFzR-1K8wLq91JG1vs_JzCRisyAr43rZmEapwUYbweDJXvQ",
        prices: {FN: 46.31, MW: 25.25, FT: 11.69, WW: 8.31, BS: 5.06}
    },

    // Cobblestone
    {
        id: 20,
        collectionId: 2,
        type: "weapon",
        weaponName: "P90",
        skinName: "Storm",
        rarity: "base",
        image: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopuP1FBRv7ODcfi9P6s65mpS0m_7zO6-fwDtVv5Yn07iZodn0jAG1r0M5Zj37dYeQIAI2aVDQ_QW3kuzq1JO76oOJlyW3FA9ebg",
        prices: {FN: 3.87, MW: 1.6, FT: 1.31, WW: 1.2, BS: 1.19}
    }, {
        id: 21,
        collectionId: 2,
        type: "weapon",
        weaponName: "UMP-45",
        skinName: "Indigo",
        rarity: "base",
        image: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo7e1f1JfwPz3eDNG5du5q4GFk8jzIb7IqWdY781lxL7Aodqt3Vfn-Ec-NWjzJ9CXd1RvYFDW_wXtwermh5W9uc-fySEyv3M8pSGKN-yLqT0",
        prices: {FN: 4.66, MW: 1.84, FT: 1.37, WW: 1.21, BS: 1.17}
    }, {
        id: 22,
        collectionId: 2,
        type: "weapon",
        weaponName: "MAC-10",
        skinName: "Indigo",
        rarity: "base",
        image: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7umeldfwPz3eDNG5du5q4GFk8jzIb7IqWdY781lxLGSo9zx3FDh-BJkYWygcoOXdFI6MgrUqAXqlbvph8PotcvOyXcwsyQ8pSGK-l2kDuc",
        prices: {FN: 6.36, MW: 1.87, FT: 1.36, WW: 1.21, BS: 1.17}
    }, {
        id: 23,
        collectionId: 2,
        type: "weapon",
        weaponName: "SCAR-20",
        skinName: "Storm",
        rarity: "base",
        image: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopbmkOVUw7ODHTi5W4867kpKEmePLP7LWnn8fu8d0iO3D9oihjVXmqhZkZmigcNKXIwY4NVjW_FK_w--7hZfp7snOwGwj5HdNrhZ4ew",
        prices: {FN: 3.44, MW: 1.66, FT: 1.33, WW: 1.21, BS: 1.21}
    }, {
        id: 24,
        collectionId: 2,
        type: "weapon",
        weaponName: "Dual Berettas",
        skinName: "Briar",
        rarity: "base",
        image: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpos7asPwJf2-r3ZzRM6c-JmImMn-O6MbmExj1XuJcl27GVpd_20FXg8xVra2v6dtLGcgA7MF_RqVLvxum7hYj84srcyVEzHA",
        prices: {FN: 2.99, MW: 1.73, FT: 1.11}
    }, {
        id: 25,
        collectionId: 2,
        type: "weapon",
        weaponName: "USP-S",
        skinName: "Royal Blue",
        rarity: "industrial",
        image: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo6m1FBRp3_bGcjhQ09Svq4mFk_7zPITEhXtu5Mx2gv2P9I2h3gTk_kM4MGmlcITBegE7Y1qB8le3kru518C56JiYm3ZnuHYg4mGdwUK4XQt-Vw",
        prices: {FN: 38.69, MW: 8.24, FT: 8.6, WW: 8.47, BS: 8.09}
    }, {
        id: 26,
        collectionId: 2,
        type: "weapon",
        weaponName: "Nova",
        skinName: "Green Apple",
        rarity: "industrial",
        image: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpouLWzKjhz3MzPYzhH4uO6nYeDg7nyZbmDxzgAvsYp2rnD992s2Abm_UJuNm2hLYCQJAFqYlnSr1nrxbjqm9bi6-wzwI-Q",
        prices: {FN: 8.8, MW: 8.74, FT: 7.71}
    }, {
        id: 27,
        collectionId: 2,
        type: "weapon",
        weaponName: "MAG-7",
        skinName: "Silver",
        rarity: "industrial",
        image: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7uifDhh3czbeDFU6c6JmImMn-O6Nb3Txz9TsZZ107qR84qs3Q3m-0prZzyncIGdIVA4M1vRqFW2l7vrhoj84soh4IEyPw",
        prices: {FN: 8.96, MW: 8.53}
    }, {
        id: 28,
        collectionId: 2,
        type: "weapon",
        weaponName: "Sawed-Off",
        skinName: "Rust Coat",
        rarity: "industrial",
        image: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopbuyLgNv1fX3cCx9_8izkYy0m_7zO6-flDgHu8YhjLjE8Iqt21W3_EFlYj_7doCRJgU9aQyDrgW2w-_nhpO8voOJlyWMrpv3-g",
        prices: {FN: 9.46, MW: 8.07, FT: 8.49, WW: 4.21, BS: 8.14}
    }, {
        id: 29,
        collectionId: 2,
        type: "weapon",
        weaponName: "MP9",
        skinName: "Dark Age",
        rarity: "mil-spec",
        image: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6r8FAZt7P7NZTxO09W4mIGSqPv9NLPF2GoFsZMp2-_Dpo2m0Vaw-ERkY2zycNKXcFBoaA7Z8lnolebshMK4vcvXiSw0RlUWR70",
        prices: {FN: 71.61, MW: 63.73, FT: 63.73}
    }, {
        id: 30,
        collectionId: 2,
        type: "weapon",
        weaponName: "P2000",
        skinName: "Chainmail",
        rarity: "mil-spec",
        image: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovrG1eVcwg8zJfAJB5N2_mo2KnvvLP7LWnn8fupN00u2U8NykigK1rUs4MGH2dtOWdlVoYF7Y-VHrl-jtjZa9upufnWwj5HdqMVWH_w",
        prices: {FN: 72.24, MW: 65.83, FT: 82.54}
    }, {
        id: 31,
        collectionId: 2,
        type: "weapon",
        weaponName: "Desert Eagle",
        skinName: "Hand Cannon",
        rarity: "restricted",
        image: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposr-kLAtl7PLZTjVD4ti1lY6FmPnLP7LWnn8f7ZN00r7C8I6n2wfjqkduYD3xJoPBIQc5ZlvU-ADowrq5gZa6tZjBzGwj5HfSjvrAnA",
        prices: {FN: 297.03, MW: 317.26, FT: 261.69, WW: 306, BS: 299.96}
    }, {
        id: 32,
        collectionId: 2,
        type: "weapon",
        weaponName: "CZ75-Auto",
        skinName: "Chalice",
        rarity: "restricted",
        image: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotaDyfgZf0v73YzJb7dCJmImMn-O6NeLXwWlVsMAk2buQ842l3QPmqhc_YTv0I4aQcgA-aQ3V_1a-krq-04j84sqdvOTuGQ",
        prices: {FN: 304.27, MW: 232.41}
    }, {
        id: 33,
        collectionId: 2,
        type: "weapon",
        weaponName: "M4A1-S",
        skinName: "Knight",
        rarity: "classified",
        image: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO3mb-GkuP1P6jummJW4NE_2-zHpN2g3Vfj-kFvZ2ChJtfEJ1M2YF_Sq1LqkOm515fpup-cyHFluD5iuyj8q1fJzg",
        prices: {FN: 2318.5, MW: 2035.5}
    }, {
        id: 34,
        collectionId: 2,
        type: "weapon",
        weaponName: "AWP",
        skinName: "Dragon Lore",
        rarity: "covert",
        image: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FAR17P7NdTRH-t26q4SZlvD7PYTQgXtu5Mx2gv2P9o6migzl_Us5ZmCmLYDDJgU9NA6B81S5yezvg8e-7cycnXJgvHZx5WGdwUJqz1Tl4g",
        prices: {FN: 12869.73, MW: 9754.66, FT: 5932.31, WW: 5134.64, BS: 3529.9}
    },

    // Dust
    {
        id: 35,
        collectionId: 3,
        type: "weapon",
        weaponName: "M4A4",
        skinName: "Desert Storm",
        rarity: "industrial",
        image: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhoyszMdC5H_siJmImMn-O6YOvVx24C7MZy2rrD9I_00FDgqkA6YWvxdoXHegM_MAzR-AK5xunmjIj84sqcbwbCfw",
        prices: {FN: 23.81, MW: 13.59, FT: 11.44, WW: 11.93, BS: 10.77}
    }, {
        id: 36,
        collectionId: 3,
        type: "weapon",
        weaponName: "SCAR-20",
        skinName: "Palm",
        rarity: "industrial",
        image: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopbmkOVUw7ODYTi1D4NGJmImMn-O6Nr-IxT5VsZYj3biQrNqk3gThqEA-Y2qhLI-TdwA-N1yFqAfryebphIj84spWYPOlFA",
        prices: {FN: 3.79, MW: 12.13, FT: 11.71, WW: 10.69, BS: 10.56}
    }, {
        id: 37,
        collectionId: 3,
        type: "weapon",
        weaponName: "AK-47",
        skinName: "Predator",
        rarity: "industrial",
        image: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhzw8zSdD9Q7d-3mb-HnvD8J_WEkDoE65x03rjDrI322QfhqUtrMD2icNSRcgFtaFDX-AS9wL3u05S1ot2Xnn9ZGujG",
        prices: {FN: 35.83, MW: 12.43, FT: 12.4, WW: 12.03, BS: 12.4}
    }, {
        id: 38,
        collectionId: 3,
        type: "weapon",
        weaponName: "AWP",
        skinName: "Snake Camo",
        rarity: "mil-spec",
        image: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FBRw7ODGcDZH09C_k4if2fSkMeiDwW8IvpVwjLGU9tWt31axr0poZ2v7I4-Wd1BsZQrWq1a2wb_xxcjrod6PdbI",
        prices: {FN: 166.46, MW: 71.39, FT: 66.03, WW: 67.7, BS: 71.36}
    }, {
        id: 39,
        collectionId: 3,
        type: "weapon",
        weaponName: "Sawed-Off",
        skinName: "Copper",
        rarity: "mil-spec",
        image: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopbuyLgNv1fX3cCx979OmhIWZqPv9NLPF2GoD7JZ107uSo92n2AXk8hI4NWGncofHIQM9M1-E-lO8xO65g8e5vMzXiSw0JNfqxwk",
        prices: {FN: 80.74, MW: 64.46, FT: 62.5, WW: 94.71, BS: 89.04}
    }, {
        id: 40,
        collectionId: 3,
        type: "weapon",
        weaponName: "AUG",
        skinName: "Copperhead",
        rarity: "mil-spec",
        image: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot6-iFA957PDHYS1H_tSzlYS0m_7zO6-fxz0H7sEk37zDpdyi3VKxqUVla277J4-ce1I3YV6D_lS8yLrt0ZC_vYOJlyXik3twsg",
        prices: {FN: 67.01, MW: 66.11}
    }, {
        id: 41,
        collectionId: 3,
        type: "weapon",
        weaponName: "Glock-18",
        skinName: "Brass",
        rarity: "restricted",
        image: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbaqKAxf0uL3cy9D_8-JmImMn-O6MOLXlGkJvJ0iieiW99mt3Q2yqhU_YDr7ctORewNsYgzT81e8weu70Yj84sojP1pYAA",
        prices: {FN: 29.04, MW: 14.94, FT: 7.51, WW: 6.44, BS: 6.34}
    }, {
        id: 42,
        collectionId: 3,
        type: "weapon",
        weaponName: "P2000",
        skinName: "Scorpion",
        rarity: "restricted",
        image: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovrG1eVcwg8zJfAJR79OkhImEmcjkYeuBxlRd4cJ5nqeZo9-m21Xh8kY-MG-gIoeWe1c6NFDU_VK6lOi6156078nKyiZg7yEm-z-DyIv3UiOT",
        prices: {FN: 2.77, MW: 7.11}
    }, {
        id: 43,
        collectionId: 3,
        type: "weapon",
        weaponName: "Desert Eagle",
        skinName: "Blaze",
        rarity: "restricted",
        image: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposr-kLAtl7PLJTjtO7dGzh7-HnvD8J_XVkjoFuMYiiLqUrI-k3le3r0s5amj7d9eTI1I-M1rW-Fm_xO-50Jfvot2XnhS4_w8U",
        prices: {FN: 537.53, MW: 502.4}
    },

    // Dust 2
    {
        id: 44,
        collectionId: 4,
        type: "weapon",
        weaponName: "G3SG1",
        skinName: "Desert Storm",
        rarity: "base",
        image: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposem2LFZf2-r3dThR6c6iq4yCkP_gfe_Uwz4HuZ0p3u-Q9oiijgyw_UpqZjv6d4GcewdoaVGB_VG8k-nt15Ki_MOekXjyVoE",
        prices: {FN: 0.14, MW: 0.03, FT: 0.03, WW: 0.03, BS: 0.03}
    }, {
        id: 45,
        collectionId: 4,
        type: "weapon",
        weaponName: "P250",
        skinName: "Sand Dune",
        rarity: "base",
        image: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopujwezhz3MzbcDNG09C_k4if2fSjZLmGwDkBsZZz3r6Zo4mliwTj-0BtZDz1dYSUcAdtYw3XqFXtyejxxcjrr8fSJ40",
        prices: {FN: 0.24, MW: 0.03, FT: 0.03, WW: 0.03, BS: 0.03}
    }, {
        id: 46,
        collectionId: 4,
        type: "weapon",
        weaponName: "SCAR-20",
        skinName: "Sand Mesh",
        rarity: "base",
        image: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopbmkOVUw7ODYTjBH_9SJh4GFk8j4OrzZgiUJsJVwj-2Zp4mgilXtqEs_aj33dYHAIFQ2aQ3Vq1S_xefu1sO-6JjA1zI97XdHr3Td",
        prices: {FN: 0.18, MW: 0.03, FT: 0.03, WW: 0.03, BS: 0.03}
    }, {
        id: 974,
        collectionId: 4,
        type: "weapon",
        weaponName: "P90",
        skinName: "Sand Spray",
        rarity: "base",
        image: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopuP1FBRw7ODYYzxb08-3moS0m_7zO6-fxzNQ65J03L2Vo9-sigzj_kU6Mmr6LIKVdwNvZVHTqVTqxri8jZS4tYOJlyVoTeLjug",
        prices: {FN: 0.16, MW: 0.03, FT: 0.03, WW: 0.03, BS: 0.03}
    }, {
        id: 47,
        collectionId: 4,
        type: "weapon",
        weaponName: "MP9",
        skinName: "Sand Dashed",
        rarity: "base",
        image: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6r8FBRw7OfJYTh9_9S5hpS0hPb6N4Tdn2xZ_Isp07rFpY70i1Lk-ERpY233LNXAJAJsNFmG_FW3xOfu15-6vp_AyXU2pGB8suBC9uz5",
        prices: {FN: 0.14, MW: 0.03, FT: 0.03, WW: 0.03, BS: 0.03}
    }, {
        id: 48,
        collectionId: 4,
        type: "weapon",
        weaponName: "Nova",
        skinName: "Predator",
        rarity: "base",
        image: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpouLWzKjhzw8zSdD9Q7d-3mb-HnvD8J_WFlzoC6sFy3u_Apo6gi1Djr0tlMGGgd46WdQY-NVuB-1K9w-i-g8W_ot2XnqyWhAHr",
        prices: {FN: 0.14, MW: 0.03, FT: 0.03, WW: 0.03, BS: 0.03}
    }, {
        id: 49,
        collectionId: 4,
        type: "weapon",
        weaponName: "Sawed-Off",
        skinName: "Snake Camo",
        rarity: "industrial",
        image: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopbuyLgNv1fX3Yi19_9K3n4W0m_7zO6-fw24HvcQi37nHptz0iQHt-Rc5YWr3coCWc1I7NVqDrli2ye3n08S46YOJlyXnI7k0UA",
        prices: {FN: 0.32, MW: 0.32, FT: 0.12, WW: 0.1, BS: 0.08}
    }, {
        id: 50,
        collectionId: 4,
        type: "weapon",
        weaponName: "AK-47",
        skinName: "Safari Mesh",
        rarity: "industrial",
        image: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhzw8zFdC5K08i3mr-HnvD8J_WBxTwD6ZB12b7Hodumig23rUY5YTymJ4TBcFA7NVvW-FW5l-zr1JXtot2XnkNBBWuK",
        prices: {FN: 4.14, MW: 0.74, FT: 0.2, WW: 0.28, BS: 0.22}
    }, {
        id: 51,
        collectionId: 4,
        type: "weapon",
        weaponName: "Five-SeveN",
        skinName: "Orange Peel",
        rarity: "industrial",
        image: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLOzLhRlxfbGTi5S08i3hIW0mOX1PbzUqWdY781lxO2WrdjwiwS38kFtYG-mLdCWJAU9MgnQ81W6xbi5gcDpuszIn3dguiA8pSGKjf2ztEE",
        prices: {FN: 0.48, MW: 0.19, FT: 0.1, WW: 0.1, BS: 0.08}
    }, {
        id: 52,
        collectionId: 4,
        type: "weapon",
        weaponName: "MAC-10",
        skinName: "Palm",
        rarity: "industrial",
        image: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7umeldfwOP3YTxO4eO6nYeDg7n2YeOGlWpTvpwj2-zEpNjx0A3krkFlNm2nJoWVdQM8ZwnW-FK2wOzmm9bi64Jdj8z-",
        prices: {FN: 0.48, MW: 0.18, FT: 0.12, WW: 0.1, BS: 0.08}
    }, {
        id: 53,
        collectionId: 4,
        type: "weapon",
        weaponName: "Tec-9",
        skinName: "VariCamo",
        rarity: "industrial",
        image: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoor-mcjhoyszecC9L7927m7-HnvD8J_WJlzMHu5Yo2urFpYr22gDnqEBqam6gJ9KQdwc_YlGE-VS7wri70Ja_ot2Xnk_reDFK",
        prices: {FN: 0.23, MW: 0.17, FT: 0.12, WW: 0.1, BS: 0.08}
    }, {
        id: 54,
        collectionId: 4,
        type: "weapon",
        weaponName: "SG 553",
        skinName: "Damascus Steel",
        rarity: "mil-spec",
        image: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopb3wflFf0uL3dTxP7c-1gZO0hPChZujummJW4NE_372Sptmg3gzjrUNvam-icIeVJ1I8N1rX-lTskuzrh8XpucudnyAwvz5iuygR9uL9aQ",
        prices: {FN: 2.35, MW: 1.8, FT: 1.28, WW: 1.1, BS: 1.01}
    }, {
        id: 55,
        collectionId: 4,
        type: "weapon",
        weaponName: "PP-Bizon",
        skinName: "Brass",
        rarity: "mil-spec",
        image: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLO_JAlf0uL3cy9D_8-JmImMn-O6Mr3SlGlVu8Ai2-_Fptql2FCwqUdpMW2iJNWRelQ4Yl3QqwO5x--5jIj84sokv-FG1g",
        prices: {FN: 2.58, MW: 1.81, FT: 1.28, WW: 1.09, BS: 1.04}
    }, {
        id: 56,
        collectionId: 4,
        type: "weapon",
        weaponName: "M4A1-S",
        skinName: "VariCamo",
        rarity: "mil-spec",
        image: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO-jb-dluX9MLrcmVRd4cJ5nqeWrNit2AewqhY_Yj31cIDGJgRtZV-E8gS2xOzv0Z_qucvJm3M16SFw-z-DyBeWkcOk",
        prices: {FN: 2.39, MW: 1.87, FT: 1.28, WW: 1.21, BS: 1.06}
    }, {
        id: 57,
        collectionId: 4,
        type: "weapon",
        weaponName: "P2000",
        skinName: "Amber Fade",
        rarity: "restricted",
        image: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovrG1eVcwg8zJcAJE7dizq42Og_b4P7LSqWdY781lxLHE84it2VftqBVoa2qicNSTIFJoZFDV-lm2we65g5Tov8uaznBguyA8pSGKe9WSySg",
        prices: {FN: 15.2, MW: 9.31, FT: 7.09, WW: 6.31}
    }, {
        id: 58,
        collectionId: 4,
        type: "weapon",
        weaponName: "R8 Revolver",
        skinName: "Amber Fade",
        rarity: "restricted",
        image: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopL-zJAt21uH3cDx96t2ykb-GkuP1P7fYlVRD7dN-hv_E57P5gVO8v104Zm-mLIfDdw5sM1_R_ADtx72-hJW87snNyHpjuHJw7XbbnUHjgUsacKUx0hrD12_5",
        prices: {FN: 1.25, MW: 1.04, FT: 1.02, WW: 1.7}
    },

    // Dust 2 2021
    {
        id: 59,
        collectionId: 5,
        type: "weapon",
        weaponName: "P90",
        skinName: "Desert DDPAT",
        rarity: "base",
        image: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopuP1FA957PfMYTxW09izh4WZg8j4OrzZglRd6dd2j6fA9o73jQzj-EFlN22lI4HHcA5qYwuD-1TtlOy6jZ_vucnMyXZgvHEk-z-DyO3mgdVY",
        prices: {FN: 0.09, MW: 0.04, FT: 0.04, WW: 0.04, BS: 0.06}
    }, {
        id: 60,
        collectionId: 5,
        type: "weapon",
        weaponName: "R8 Revolver",
        skinName: "Desert Brush",
        rarity: "base",
        image: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopL-zJAt21uH3eSR97s6jh4i0lPb5PITFl2Vu5Mx2gv3--Y3nj1H6_xI6ZmvwJtSQdVdoMAvT-AC3lLzt05a5us6fzyQ37Ckk7S7UmxyxhwYMMLKWyO6dmA",
        prices: {FN: 0.09, MW: 0.04, FT: 0.04, WW: 0.04, BS: 0.03}
    }, {
        id: 61,
        collectionId: 5,
        type: "weapon",
        weaponName: "Sawed-Off",
        skinName: "Parched",
        rarity: "base",
        image: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopbuyLgNv1fX3eSR96NmlkZKfqPX4PLTcqWdY781lteXA54vwxgLm-UFtYGv0JIHHJlU9MlGF-FHsybu-0ce-upSay3RhunJ0tnrdnhapwUYbZSxftdY",
        prices: {FN: 0.09, MW: 0.06, FT: 0.04, WW: 0.04, BS: 0.14}
    }, {
        id: 62,
        collectionId: 5,
        type: "weapon",
        weaponName: "MP7",
        skinName: "Prey",
        rarity: "base",
        image: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6ryFBRw7OnNcy9D7927q5KOk8j4OrzZglRd6dd2j6fFoNn3jQznqEVua2ilLdKcIFA6YFrV-1a9lb261J67vM6fwCEyunIj-z-DyGp5IC17",
        prices: {FN: 0.09, MW: 0.07, FT: 0.03, WW: 0.06, BS: 0.09}
    }, {
        id: 63,
        collectionId: 5,
        type: "weapon",
        weaponName: "M249",
        skinName: "Midnight Palm",
        rarity: "industrial",
        image: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-jxcjhzw8zYcDFP09K_k4ifqPv9NLPFqWdQ-sJ0xLHFrd2k2lXj-BZvMGH2INLGJwQ_Y16Gq1a4x7-6jce1v5jKyyRi63E8pSGKCuSrnKU",
        prices: {FN: 0.46, MW: 0.44, FT: 0.43, WW: 0.41, BS: 0.41}
    }, {
        id: 64,
        collectionId: 5,
        type: "weapon",
        weaponName: "Five-SeveN",
        skinName: "Withered Vine",
        rarity: "industrial",
        image: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLOzLhRlxfbGTi5S09G5ho-0g_LsJ7Ldk1RB_ddhhuz-7In5hFujlB81NDG3S9rEMFFrf1zXqQK2wObrgsO46snNziBgvylws3-OyUDmgRFFb-U7hfbPSl7MU6JXXP7Vfra8XYw",
        prices: {FN: 0.5, MW: 0.44, FT: 0.44, WW: 0.47, BS: 0.44}
    }, {
        id: 65,
        collectionId: 5,
        type: "weapon",
        weaponName: "MP9",
        skinName: "Old Roots",
        rarity: "industrial",
        image: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6r8FBRw7P7HYzJ9792kgomFkMjtNrfdmXxu5Mx2gv3--Y3nj1H6qEtqNz-nIIScdQJvMgrR-Vfol7rugcC17pSYy3pg7HRw7X-IzBS0hAYMMLJlFVCdIw",
        prices: {FN: 0.48, MW: 0.46, FT: 0.46, WW: 0.46, BS: 0.42}
    }, {
        id: 66,
        collectionId: 5,
        type: "weapon",
        weaponName: "AUG",
        skinName: "Spalted Wood",
        rarity: "industrial",
        image: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot6-iFA957PfaaAJV49Oyq4yCkP_gDLfQhGxUpsAl2O-QrNr2iley-hZoMD_6dtSVIAU2Yw2C-lfsx-vu1JTt6cnJynp9-n51IkGWGeI",
        prices: {FN: 0.47, MW: 0.45, FT: 0.44, WW: 0.43, BS: 0.47}
    }, {
        id: 67,
        collectionId: 5,
        type: "weapon",
        weaponName: "Nova",
        skinName: "Quick Sand",
        rarity: "mil-spec",
        image: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpouLWzKjhoyszcfi9M09-3mY-0h_b9Pa_CqWdY781lteXA54vwxlDh-BY_ZTqgcteTcQ9oZlrW-Vm5x7_mg8S8vZSdyiBgsyQktCnamhSpwUYbBBVyOds",
        prices: {FN: 4.04, MW: 3.82, FT: 3.65, WW: 3.56, BS: 3.33}
    }, {
        id: 68,
        collectionId: 5,
        type: "weapon",
        weaponName: "P250",
        skinName: "Black & Tan",
        rarity: "mil-spec",
        image: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopujwezhoyszMdC5H_siJmZWHg_73MrbummJW4NFOhujT8om73VHt-0VoY272dYXBJgJtNAvZ8ge_l7y9hJ-_u5_LyHA27CkmsCzVywv330_OAIUHXg",
        prices: {FN: 4.25, MW: 3.9, FT: 3.78, WW: 3.04, BS: 3.41}
    }, {
        id: 69,
        collectionId: 5,
        type: "weapon",
        weaponName: "G3SG1",
        skinName: "New Roots",
        rarity: "mil-spec",
        image: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposem2LFZfwOP3fDJQ4-O1lZKdnvnzDLfYkWNF6slkj9bN_Iv9nGu4qgE7Nnf3cISTclNoaVjS-1K4yO69hcK1upqfwHZrvSR0tyqJm0az0B9Pau1rm7XAHpvpKzmZ",
        prices: {FN: 4.46, MW: 3.99, FT: 3.62, WW: 3.61, BS: 3.41}
    }, {
        id: 70,
        collectionId: 5,
        type: "weapon",
        weaponName: "Galil AR",
        skinName: "Amber Fade",
        rarity: "mil-spec",
        image: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbupIgthwczJcAJE7dizq42Og_b4P7LSqWdY781lteXA54vwxgLt-kNrYGinIdWVJg47ZljV-ADok7y-h8K-uJnIz3NmvHEktHbbzUSpwUYbYlKnFS0",
        prices: {FN: 4.07, MW: 4.06, FT: 4.1, WW: 3.77}
    }, {
        id: 71,
        collectionId: 5,
        type: "weapon",
        weaponName: "USP-S",
        skinName: "Orange Anolis",
        rarity: "restricted",
        image: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo6m1FBRp3_bGcjhQ0927q4yCjfbmN4TDk29u5Mx2gv3--Y3nj1H680Nuaz-iLNWQdwdrN16F-Ffswri50561vsjByHFr6CUg7HuMyxLh1QYMMLKjyqxp3w",
        prices: {FN: 28.23, MW: 25.66, FT: 25.62}
    }, {
        id: 72,
        collectionId: 5,
        type: "weapon",
        weaponName: "MAC-10",
        skinName: "Case Hardened",
        rarity: "restricted",
        image: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7umeldf0uL3fjRO6diJmImMn-PLP7rDkW4fscEojuyQrY702FXgrxBlYmymII-QIQY7M1iE-1W_yLy7h8Xou8zJy2wj5Hc_Xayv_A",
        prices: {FN: 29.34, MW: 27.08, FT: 25.5, WW: 25.16, BS: 25.98}
    }, {
        id: 73,
        collectionId: 5,
        type: "weapon",
        weaponName: "M4A4",
        skinName: "Red DDPAT",
        rarity: "restricted",
        image: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhoyszMdS1D-OOjhoKKmcjmNr_ummJW4NFOhujT8om7jVewrkJvZWmhI4_Ee1I3Y13U81TvxOzs0MO1ucibwCRn6CRw5HiIzQv3309aMAzt0g",
        prices: {FN: 27.41, MW: 24.57, FT: 23.22, WW: 20.06, BS: 21.44}
    }, {
        id: 74,
        collectionId: 5,
        type: "weapon",
        weaponName: "UMP-45",
        skinName: "Fade",
        rarity: "classified",
        image: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo7e1f1Jf0vL3dzxG6eOjmZC0m_7zO6_ummpD78A_0u-X9oig3lHh-0RpZmn2cY_GIFJvaF-F_VPskOrmjZW77ZzOm3o1vT5iuyiQvhdzkQ",
        prices: {FN: 235.12, MW: 248.23}
    }, {
        id: 75,
        collectionId: 5,
        type: "weapon",
        weaponName: "SSG 08",
        skinName: "Death Strike",
        rarity: "classified",
        image: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopamie19f0Ob3Yi5FvISJh4OEhef9PLXummJW4NFOhujT8om73FGy-BI-Nmv6cdSTIQRoYF6B_VXqkurvgZ--tcjNziM3uiV253bayQv330_-dXDiWg",
        prices: {FN: 251.24, MW: 209.49, FT: 199.83, WW: 183.63, BS: 187.2}
    }, {
        id: 76,
        collectionId: 5,
        type: "weapon",
        weaponName: "AK-47",
        skinName: "Gold Arabesque",
        rarity: "covert",
        image: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhnwMzJemkV09u5mIS0luX1Mb7Ch35U18l4jeHVyoD0mlOx5UM4YjvzdoTHJFVvNw3YrlO_xebsgpa7u57Pzidk7nQm53zUmx21g01SLrs4iSV9vgU",
        prices: {FN: 2347.32, MW: 2043.8, FT: 1732.34, WW: 1485, BS: 1773.25}
    },
    
    // Inferno
    {
        id: 77,
        collectionId: 6,
        type: "weapon",
        weaponName: "Nova",
        skinName: "Walnut",
        rarity: "base",
        image: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpouLWzKjhjxszfcDFM-ciJmo-dlsj4OrzZgiUCsMZ12u-Zrd2j2lGw80s5MWHycNCSc1A7NwrR8lC9yL3s1JW675rO1zI97bNGh6Jj",
        prices: {FN: 10.26, MW: 1.71, FT: 0.83, WW: 0.84, BS: 0.74}
    }, {
        id: 78,
        collectionId: 6,
        type: "weapon",
        weaponName: "MAG-7",
        skinName: "Sand Dune",
        rarity: "base",
        image: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7uifDhz3MzbcDNG09C_k4if2a7wNbiFwG1VvpVwi7CTotqtigTmr0BlYG7ycIPEI1U-ZQrY81Pol-bxxcjrdUalW9E",
        prices: {FN: 7.89, MW: 1.69, FT: 0.57, WW: 0.53, BS: 0.62}
    }, {
        id: 79,
        collectionId: 6,
        type: "weapon",
        weaponName: "M4A4",
        skinName: "Tornado",
        rarity: "industrial",
        image: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz3Mzcfi9M7di5q4yCkP_gfe7Uzj4D6pUo37vA89iii1Cx8hFkMG_zcdLDcwU5N1vUqFm_l7vnhJSi_MOeBFODA4o",
        prices: {FN: 36.43, MW: 3.48, FT: 2.23, WW: 2.08, BS: 2.04}
    }, {
        id: 80,
        collectionId: 6,
        type: "weapon",
        weaponName: "P250",
        skinName: "Gunsmoke",
        rarity: "industrial",
        image: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopujwezhoyszPdDFS6dKJmImMn-O6YeqFlzID6pZzj-qY9I6t2VWw-xBtYGv0ItDEdldtZF3S_1K-l-3u04j84srtbNcI-g",
        prices: {FN: 14.44, MW: 2.24, FT: 0.83, WW: 0.92, BS: 0.83}
    }, {
        id: 81,
        collectionId: 6,
        type: "weapon",
        weaponName: "Tec-9",
        skinName: "Brass",
        rarity: "mil-spec",
        image: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoor-mcjhhwszKYzxR_-O6nYeDg7mkNuyJwD0E7pEo3uySrNz02ALgqEs9a2r7JIWVIAI6ZFDV-VfqyL-6m9bi6w7M2nK8",
        prices: {FN: 12.53, MW: 2.52, FT: 0.84, WW: 0.78, BS: 0.72}
    }, {
        id: 82,
        collectionId: 6,
        type: "weapon",
        weaponName: "Dual Berettas",
        skinName: "Anodized Navy",
        rarity: "mil-spec",
        image: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpos7asPwJf0v33fzxU9eO6nYeDg7msZOKIz2hS7ZEki7mS89Tw0Ae3-Us4MWD7LIGRegc-MF2D81i-ku_vm9bi644LgQp9",
        prices: {FN: 1.02, MW: 2.37}
    },

    // Inferno 2018
    {
        id: 83,
        collectionId: 7,
        type: "weapon",
        weaponName: "AUG",
        skinName: "Sweeper",
        rarity: "base",
        image: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot6-iFBRw7P7NYjV9_92wkZSSlfv1MLDummJW4NE_3riWo9r2jFbs_RBrMW_1JteRIQA9YF6C-Fm4xenqhMW5uJTNySQy7D5iuyjPnxcPTA",
        prices: {FN: 0.05, MW: 0.03, FT: 0.03, WW: 0.03, BS: 0.03}
    }, {
        id: 84,
        collectionId: 7,
        type: "weapon",
        weaponName: "MAG-7",
        skinName: "Rust Coat",
        rarity: "base",
        image: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7uifDhhwszbZThH4OO_moaOhfn7DLfYkWNFppEi27qXrNX3jgWyqUFtYTj3LYaScgVoYFmC-FHqkLzsgZG16c-cwCF9-n51emhCfk8",
        prices: {FN: 0.07, MW: 0.03, FT: 0.03, WW: 0.03, BS: 0.03}
    }, {
        id: 85,
        collectionId: 7,
        type: "weapon",
        weaponName: "UMP-45",
        skinName: "Mudder",
        rarity: "base",
        image: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo7e1f1Jf2-r3fDJW-NCzkL-YlvnwDLfYkWNFppQlibzFoNXx3Q3jqkNsMT2gd9fAJFM6ZgnZ8wXrwbvq15fqtJXNnXR9-n51Mf_g9H8",
        prices: {FN: 0.11, MW: 0.03, FT: 0.03, WW: 0.03, BS: 0.03}
    }, {
        id: 86,
        collectionId: 7,
        type: "weapon",
        weaponName: "MP5-SD",
        skinName: "Dirt Drop",
        rarity: "base",
        image: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6rwOANfwOP3ZTxS6eOlnI-Zg8jmMrfdj1Rd4cJ5nqeT84j32QSxqRJtNzulJYGVcQZvYwvQ8le5l73sjZPq6Z3NzXsxsycm-z-DyPsHFCR3",
        prices: {FN: 0.03, MW: 0.03, FT: 0.03, WW: 0.03, BS: 0.03}
    }, {
        id: 87,
        collectionId: 7,
        type: "weapon",
        weaponName: "MP9",
        skinName: "Slide",
        rarity: "base",
        image: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6r8FA957ODYfTxW-Nmkx7-HnvD8J_XUzjwJupdw3-rA8I6jiQPl80I5Yzz7IoCTcwRtZl3VrFa2l-jp18O9ot2XnhWS9Knh",
        prices: {FN: 0.1, MW: 0.03, FT: 0.03, WW: 0.03, BS: 0.03}
    }, {
        id: 88,
        collectionId: 7,
        type: "weapon",
        weaponName: "PP-Bizon",
        skinName: "Candy Apple",
        rarity: "industrial",
        image: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLO_JAlfwPz3YzhG09C_k4if2afxNuLSl29QuZYkiLGWpdWjigDg_EZuYjjzIdWVIwRqZVvXqAe3l7jxxcjrxCUStXc",
        prices: {FN: 0.17, MW: 0.1, FT: 0.09}
    }, {
        id: 89,
        collectionId: 7,
        type: "weapon",
        weaponName: "MAC-10",
        skinName: "Calf Skin",
        rarity: "industrial",
        image: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7umeldf1OD3fDxBvYyJl4iOlPzxIYTdn2xZ_It1iL_F9NSn2FXkr0tlYzz3LYbAJwI-YFzS8wC3kLvrjJe67s6cnHdgpGB8spqDtfXT",
        prices: {FN: 0.08, MW: 0.08, FT: 0.08, WW: 0.08, BS: 0.08}
    }, {
        id: 975,
        collectionId: 7,
        type: "weapon",
        weaponName: "Glock-18",
        skinName: "High Beam",
        rarity: "industrial",
        image: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbaqKAxf0vL3ZzhQ-NWxm7-Jm-LxDLfYkWNFppV33uiS8I-t31K1rUJrMTv7IYOSI1c9M13Xq1i3x-7p1MW-uM7NzSd9-n51CmsDOd4",
        prices: {FN: 0.21, MW: 0.5}
    }, {
        id: 976,
        collectionId: 7,
        type: "weapon",
        weaponName: "R8 Revolver",
        skinName: "Nitro",
        rarity: "industrial",
        image: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopL-zJAt21uH3YjJ94863moeOqPb3ML7fgngC18l4jeHVu9yl0ALjrURsMGjzLdeSewU6YlzVrFi8kL-6hMTpvJjMm3Qysyhzty3D30vgLcpSeFk",
        prices: {FN: 0.61, MW: 0.13, FT: 0.08, WW: 0.08, BS: 0.07}
    }, {
        id: 977,
        collectionId: 7,
        type: "weapon",
        weaponName: "Sawed-Off",
        skinName: "Brake Lightv",
        rarity: "mil-spec",
        image: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopbuyLgNv1fX3cDx9-tmkgImMmMjmNr_ummJW4NE_07CYotWijQLsqUE4Zj2lJo-VIARrZF_X-wO4kuq908S86MjInCFr6T5iuyjAYE2O8Q",
        prices: {FN: 1.18, MW: 0.97}
    }, {
        id: 978,
        collectionId: 7,
        type: "weapon",
        weaponName: "M4A4",
        skinName: "Converter",
        rarity: "mil-spec",
        image: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhoyszadDl95Nmuq4yCkP_gfbjVxDoEu8R3073AptyniwTm8kBqYWnxLI-ScwBvY1GE8wfsl7y61sei_MOeKVbcl-w",
        prices: {FN: 0.98, MW: 0.81, FT: 0.74, WW: 1.5}
    }, {
        id: 979,
        collectionId: 7,
        type: "weapon",
        weaponName: "SSG 08",
        skinName: "Hand Brake",
        rarity: "mil-spec",
        image: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopamie19f1OD3Yi5FvISJl4iOlPzxIYTdn2xZ_Isj3OuT8dr2iQWx_ENvMGn3JoHGcQdoMFzTqAO_k7jm08XtuZXPwHI2pGB8sq2WtNcw",
        prices: {FN: 1.94, MW: 1.03, FT: 0.86, WW: 0.78, BS: 0.72}
    }, {
        id: 980,
        collectionId: 7,
        type: "weapon",
        weaponName: "USP-S",
        skinName: "Check Engine",
        rarity: "mil-spec",
        image: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo6m1FBRp3_bGcjhQ08-mq42OhP_LILrXk39I-sB1teXI8oThxgbm-EU_Zjv0LIHAcAM_MlnQ-QXql-rrh5a17pmbznVgu3IhsXaMmxapwUYbi3cwfR8",
        prices: {FN: 2.01, MW: 1.3, FT: 0.83, WW: 1.21, BS: 0.91}
    }, {
        id: 981,
        collectionId: 7,
        type: "weapon",
        weaponName: "AK-47",
        skinName: "Safety Net",
        rarity: "restricted",
        image: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhoyszFdC5K08-3koWfjvjmMrXWk1Rd4cJ5nqfHoYnw3gy2qEA-MT36I4TBJ1I4ZA2D-Vfsx-jtgJ-9tZSbziQy7HIl-z-DyBfVofz8",
        prices: {FN: 10.27, MW: 7.61, FT: 5.11, WW: 6.21, BS: 5.33}
    }, {
        id: 982,
        collectionId: 7,
        type: "weapon",
        weaponName: "P250",
        skinName: "Vino Primo",
        rarity: "restricted",
        image: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopujwezhnwMzYI2gS09--kYOAkuXLP7LWnn8f7cEk3r3C99qh31LjqRVoNm2gd9WUcgVvYQrW8lbsxOjt0ZTq7p_Azmwj5He_6gdIWw",
        prices: {FN: 9.97, MW: 6.41, FT: 3.17, WW: 2.3, BS: 2.1}
    }, {
        id: 983,
        collectionId: 7,
        type: "weapon",
        weaponName: "MP7",
        skinName: "Fade",
        rarity: "restricted",
        image: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6ryFAZh7PXJdTh94czhq4yCkP_gfb7VwzgGsZAn3L_Codigjge2-0M9Z2D1LIaTcAM_ZQrTqAO7lbrug5Ci_MOeD_P4rHw",
        prices: {FN: 10.95, MW: 6.8, FT: 4.76}
    }, {
        id: 984,
        collectionId: 7,
        type: "weapon",
        weaponName: "Dual Berettas",
        skinName: "Twin Turbo",
        rarity: "classified",
        image: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpos7asPwJf0Ob3dShD4OOzmImfkuTLIbrdmnJu5Mx2gv2PoI6mi1LtqEZoMm2mI4-XdQE8ZV3W-gC8wO7mgJPtu5rBwXU26XIgsGGdwULVxArwuA",
        prices: {FN: 14.77, MW: 8.6, FT: 5.82, WW: 3.32, BS: 2.83}
    }, {
        id: 985,
        collectionId: 7,
        type: "weapon",
        weaponName: "SG 553",
        skinName: "Integrale",
        rarity: "classified",
        image: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopb3wflFf0Ob3YjoXuY-JhoGHm-7LP7LWnn8fsZUliL_HotzxiwO38xU5Ymn0cITGJlQ7MAuCrgW-k7vp05C0uszKn2wj5HdHhDicWw",
        prices: {FN: 91.12, MW: 63, FT: 30.99, WW: 13.79, BS: 10.51}
    },

    // Mirage
    {
        id: 986,
        collectionId: 8,
        type: "weapon",
        weaponName: "P90",
        skinName: "Scorched",
        rarity: "base",
        image: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopuP1FBRw7PfJYS1O6eO6nYeDg7miMuyAw21SsMcn2ejEoNqsiwayqhA-Ym_zI9SQcAI9MlrRq1a8ye6-m9bi68t-w9oa",
        prices: {FN: 1.72, MW: 1.17, FT: 0.63, WW: 0.6, BS: 0.6}
    }, {
        id: 987,
        collectionId: 8,
        type: "weapon",
        weaponName: "Galil AR",
        skinName: "Hunting Blind",
        rarity: "base",
        image: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbupIgthwczbYQJP6c--q5OHluT8NqjummJW4NE_jLrCpInz0QCx_kE9Mm-gctOWIQVsMFrY81Hrwbrq1MW8u5vNwHJj6z5iuyisRUXXMw",
        prices: {FN: 1.92, MW: 1.09, FT: 0.64, WW: 0.64, BS: 0.56}
    }, {
        id: 988,
        collectionId: 8,
        type: "weapon",
        weaponName: "P250",
        skinName: "Bone Mask",
        rarity: "base",
        image: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopujwezhzw8zccC1H09C_k4if2a_xML6Dxj8GupIoibmUod-n3Vbkr0FqYGv2IY_BJwc6ZAuFrFS8xb_xxcjr7uv4usk",
        prices: {FN: 2.75, MW: 0.8, FT: 0.57, WW: 0.56, BS: 0.91}
    }, {
        id: 989,
        collectionId: 8,
        type: "weapon",
        weaponName: "G3SG1",
        skinName: "Safari Mesh",
        rarity: "base",
        image: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposem2LFZfwOP3fDhR5OOilY60m_7zO6-fxzJQ68Z02OiQpdyl2FXmqENvNWGlLI_BIQU3Nw7Rqwe9lOa81Je1uYOJlyWUbIPIHw",
        prices: {FN: 4.69, MW: 0.92, FT: 0.63, WW: 0.79, BS: 0.62}
    }, {
        id: 990,
        collectionId: 8,
        type: "weapon",
        weaponName: "Five-SeveN",
        skinName: "Contractor",
        rarity: "base",
        image: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLOzLhRlxfbGTi5N08y7l7-HnvD8J_XUlD1QuJ113rGW89-h2gew8kZqa2D7dtfAdVQ2ZVzT-QO_l-rp0ZS5ot2Xngcmh8ed",
        prices: {FN: 6.6, MW: 0.93, FT: 0.75, WW: 0.61, BS: 0.55}
    }, {
        id: 991,
        collectionId: 8,
        type: "weapon",
        weaponName: "AUG",
        skinName: "Colony",
        rarity: "base",
        image: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot6-iFBRv7ODYcD5H09G3homFksj4OrzZgiVU7ZAj3--U9I3z2Q23_RdlZDilJ9SVcQE2NVuE-QLvkuzpgZG66JXJ1zI97YCwR6uK",
        prices: {FN: 6.87, MW: 0.9, FT: 0.7, WW: 0.65, BS: 0.7}
    }, {
        id: 992,
        collectionId: 8,
        type: "weapon",
        weaponName: "SG 553",
        skinName: "Gator Mesh",
        rarity: "industrial",
        image: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopb3wflFfwOP3fDhR5OOmjZSDmPnLP7LWnn8f7cAmi7uSoN_z3A3trRBuYWGlLI7EI1c3aAqE_QDtxbrm08fvvZ_Mzmwj5HcvKiIfXQ",
        prices: {FN: 4.46, MW: 4.17, FT: 3.95, WW: 3.36, BS: 2.87}
    }, {
        id: 993,
        collectionId: 8,
        type: "weapon",
        weaponName: "Negev",
        skinName: "CaliCamo",
        rarity: "industrial",
        image: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpouL-iLhFf2-r3ZzxQ5d-3mY-0k_LnNqnFqWdY781lxLiXrI7x31e38ktqNTz7doWRcwdtYw7YrgK6yeq71MK46cjAnyQ1vSE8pSGKUNGnClk",
        prices: {FN: 4.52, MW: 4, FT: 3.73, WW: 2.52, BS: 2.96}
    }, {
        id: 994,
        collectionId: 8,
        type: "weapon",
        weaponName: "MP7",
        skinName: "Orange Peel",
        rarity: "industrial",
        image: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6ryFBRw7OfJYTh94863moeOqPv9NLPF2D4Jv5V12e2TpNj23VbgqBdlYWqnIo7Gdlc-YF6C_VO7yOjnhZ7o7pzXiSw0U0YXXNA",
        prices: {FN: 5.16, MW: 3.86, FT: 3.74, WW: 3.07, BS: 3.02}
    }, {
        id: 90,
        collectionId: 8,
        type: "weapon",
        weaponName: "Glock-18",
        skinName: "Groundwater",
        rarity: "industrial",
        image: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbaqKAxfwPz3fjFL-tmJmImMn-O6YrrXxWoJvJMp2euQ892n21DkqRBtZGryLdKUdg85aAqG_QC_w-_ugIj84sq2hgy4GQ",
        prices: {FN: 37.88, MW: 5.27, FT: 4.19, WW: 3.61, BS: 3.9}
    }, {
        id: 91,
        collectionId: 8,
        type: "weapon",
        weaponName: "MAC-10",
        skinName: "Amber Fade",
        rarity: "mil-spec",
        image: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7umeldf0vL3dzxG6eO7kZSKm_v9MITdn2xZ_It13rzC9Nqj21DsqEs6ZWyiLI7AcVdsMl3W_1W7kr3vhJHotZzLnXFgpGB8sjEeQG_x",
        prices: {FN: 12.93, MW: 10.14, FT: 9.49, WW: 9.56}
    }, {
        id: 92,
        collectionId: 8,
        type: "weapon",
        weaponName: "SSG 08",
        skinName: "Tropical Storm",
        rarity: "mil-spec",
        image: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopamie19fwOP3YTxO4eOlnIGPmODLP7LWnn8f7scj3uuU8IiniQTnqkBpMmjxcoPAJwE_Z16CqVW7yb-9gcfpu5qczmwj5Hf46J1P4Q",
        prices: {FN: 23.08, MW: 4.63, FT: 4.46, WW: 3.39, BS: 3.85}
    }, {
        id: 93,
        collectionId: 8,
        type: "weapon",
        weaponName: "UMP-45",
        skinName: "Blaze",
        rarity: "mil-spec",
        image: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo7e1f1Jf0vL3dzFD4dmlq4yCkP_gfeuCxTMG7pFw2uiV9I-jjlHi-0dvZDygLY-dJw89NQ3QqFK3lOe9jcSi_MOeUg1XNk4",
        prices: {FN: 17.7, MW: 21.04}
    }, {
        id: 94,
        collectionId: 8,
        type: "weapon",
        weaponName: "MP9",
        skinName: "Hot Rod",
        rarity: "mil-spec",
        image: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6r8FAZu7OHNdQJO5du-gM7bwqb2MeuClTsCv8Ek2LiZ9t2giwa28hVlZGD0doSUIANqYV_U_gC2366x0j0WoURS",
        prices: {FN: 34.8, MW: 27.12}
    }, {
        id: 995,
        collectionId: 8,
        type: "weapon",
        weaponName: "MAG-7",
        skinName: "Bulldozer",
        rarity: "restricted",
        image: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7uifDhz3MzRdDFO48uJmImMn-O6MbmDkz0DsJVy2-2Yp42g3wC38kBtYWqnI4_BdwE8ZVrX_AXsx-e5hoj84soOlvx0qw",
        prices: {FN: 106.38, MW: 12.2, FT: 2.81, WW: 2.39, BS: 2.53}
    },

    // Mirage 2021
    {
        id: 95,
        collectionId: 9,
        type: "weapon",
        weaponName: "P250",
        skinName: "Drought",
        rarity: "base",
        image: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopujwezhzw8zMdC5H_siJh4uem_vnDL_QgWVu5Mx2gv3--Y3nj1H6-xY6ZGD1IoXEewc5Z1rQrlPvk-fuhZG0vZzMy3Jj6HYg4nvanRO-0AYMMLL4kbEedA",
        prices: {FN: 0.1, MW: 0.06, FT: 0.05, WW: 0.07}
    }, {
        id: 96,
        collectionId: 9,
        type: "weapon",
        weaponName: "SSG 08",
        skinName: "Prey",
        rarity: "base",
        image: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopamie19fwOP3azhA_t21lY20hfLwDLfYkWNF18lwmO7Eu9X0jVK2-ks4MjjzLYOQIABvMlGC-gW-yObuhpS4vpibzntqu3Zx4yrD30vgAnJSXB8",
        prices: {FN: 0.09, MW: 0.06, FT: 0.06, WW: 0.07, BS: 0.13}
    }, {
        id: 97,
        collectionId: 9,
        type: "weapon",
        weaponName: "MAG-7",
        skinName: "Navy Sheen",
        rarity: "base",
        image: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7uifDhh3szGcCtb08--nY6OqPv9NLPFqWdQ-sJ0xO_Fp4qk2gDlqBZsMT-iJYDHIFRqaVHX-we5w-brg5K-tc6awXVn7iA8pSGKCZDD33w",
        prices: {FN: 0.09, MW: 0.06, FT: 0.05, WW: 0.07, BS: 0.06}
    }, {
        id: 98,
        collectionId: 9,
        type: "weapon",
        weaponName: "PP-Bizon",
        skinName: "Anolis",
        rarity: "base",
        image: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLO_JAlf2-r3fTRY7c6yq5OAnvnLP7LWnn9u5MRjjeyPodum2VfjrUI4YWjyLYDGdg85YFzQ_wC5w-y8hpC1vZybyCZhuXFzsGGdwULyqHHt-w",
        prices: {FN: 0.1, MW: 0.06, FT: 0.05, WW: 0.07, BS: 0.07}
    }, {
        id: 99,
        collectionId: 9,
        type: "weapon",
        weaponName: "MAC-10",
        skinName: "Sienna Damask",
        rarity: "base",
        image: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7umeldfwOP3fDRQ7duzq4aHmODxIajugmpf18l4jeHVyoD0mlOx5UVqYmzyJdSde1U-Zl_WrAK-w-q805DutMjIyXFqunZz7HyImETm1R5SLrs4Mck4YxU",
        prices: {FN: 0.08, MW: 0.06, FT: 0.06, WW: 0.06, BS: 0.07}
    }, {
        id: 100,
        collectionId: 9,
        type: "weapon",
        weaponName: "CZ75-Auto",
        skinName: "Midnight Palm",
        rarity: "industrial",
        image: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotaDyfgZfwOP3YTxO4eO4nYeDg8j4OrzZglRd6dd2j6eY84iljQXnqEU_NTuhJYLAJFRqNVDR_VK8kr_qh8C6uMvKynU2snUl-z-DyJCx_kND",
        prices: {FN: 0.71, MW: 0.66, FT: 0.68, WW: 0.6, BS: 0.6}
    }, {
        id: 101,
        collectionId: 9,
        type: "weapon",
        weaponName: "P90",
        skinName: "Verdant Growth",
        rarity: "industrial",
        image: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopuP1FBRw7P7HYzJ9-NmugImHksjzIb7UmFRH4ct0teXI8oTht1i1uRQ5fW30cI6VIw42YgvR8lW4w-e7h5a4tcvBmHc2uCAm437Yn0e0hE1KZ7BxxavJxC4P7pE",
        prices: {FN: 0.74, MW: 0.69, FT: 0.64, WW: 0.63, BS: 0.61}
    }, {
        id: 102,
        collectionId: 9,
        type: "weapon",
        weaponName: "Dual Berettas",
        skinName: "Drift Wood",
        rarity: "industrial",
        image: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpos7asPwJfwOP3dS9b08u5m4S0m_7zO6_ummpD78A_0rDH8Imnjg3jqEBrYWv0IIHEcw9qMgvS_Fi9yOm7gpfq6JqfnSYwuz5iuyjXH96Izg",
        prices: {FN: 0.77, MW: 0.68, FT: 0.66, WW: 0.62, BS: 0.67}
    }, {
        id: 103,
        collectionId: 9,
        type: "weapon",
        weaponName: "FAMAS",
        skinName: "CaliCamo",
        rarity: "industrial",
        image: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLuoKhRf2-r3ZzxQ5d-3mY-0k_LnNqnFqWdY781lteXA54vwxlbi_kM9YTjzIYfEegY3NV_R_AW6w-fn0ZS_tJrOy3tnvyZz4X_ZzECpwUYbb4g9zwY",
        prices: {FN: 0.75, MW: 0.68, FT: 0.64, WW: 0.69, BS: 0.67}
    }, {
        id: 104,
        collectionId: 9,
        type: "weapon",
        weaponName: "USP-S",
        skinName: "Purple DDPAT",
        rarity: "mil-spec",
        image: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo6m1FBRp3_bGcjhQ0927q4SPh_bgDKvEhHtd7fp9g-7J4bP5iUazrl1lamr7JoPBIVJtYFnQ-gLqkLjmh8S9vZScwXAxuHJz4nrbzha_000dcKUx0qP_CJgD",
        prices: {FN: 6.28, MW: 5.59, FT: 5.05, WW: 4.92, BS: 5.22}
    }, {
        id: 105,
        collectionId: 9,
        type: "weapon",
        weaponName: "M249",
        skinName: "Humidor",
        rarity: "mil-spec",
        image: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-jxcjhzw8zFfi9N09-3hpaCmfDLMa7DmH9u5Mx2gv3--Y3nj1H6_UVpMGGidYKXegE7N1zWq1K2lO-50JW06J6cnHY26yd3tHnYzRTl1wYMMLK2yI6yPA",
        prices: {FN: 5.51, MW: 5.23, FT: 5.09, WW: 4.74, BS: 4.83}
    }, {
        id: 106,
        collectionId: 9,
        type: "weapon",
        weaponName: "MP9",
        skinName: "Music Box",
        rarity: "mil-spec",
        image: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6r8FAZt7P7BYzxF6eOwmI-ckuXnDLbUgmpd4cZOhuDG_ZjKhFWmrBZyYmChcNDAIwY2M1DV_lC8w73r0JHpu5zBzHAx7nR2tHaMmhzi1RsfOvsv26KGrhCKGg",
        prices: {FN: 5.77, MW: 5.23, FT: 4.97, WW: 4.46, BS: 4.49}
    }, {
        id: 107,
        collectionId: 9,
        type: "weapon",
        weaponName: "Glock-18",
        skinName: "Pink DDPAT",
        rarity: "restricted",
        image: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbaqKAxf2-r3dTlS7ciJhImFnMj4OrzZglRd6dd2j6fF8Y733AKx-0Y5YmD1JIHHelBvYl7WqQXsybu50MC_tZ3NwSdmunUm-z-DyBC56XLU",
        prices: {FN: 42.34, MW: 36.06, FT: 31.09, WW: 28.59, BS: 31.36}
    }, {
        id: 108,
        collectionId: 9,
        type: "weapon",
        weaponName: "XM1014",
        skinName: "Elegant Vines",
        rarity: "restricted",
        image: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgporrf0e1Y07PLFTjBN_tOJgIWTg_74NoTThGJW4NFOhuDG_ZjKhFWmrBZyammnLdWUcgRtNw7Vr1S-lOvp15PouM-dmnswsyYltC3azkCw1E4YZvsv26ItkZdarQ",
        prices: {FN: 37.28, MW: 34.34, FT: 32.26}
    }, {
        id: 109,
        collectionId: 9,
        type: "weapon",
        weaponName: "AUG",
        skinName: "Sand Storm",
        rarity: "restricted",
        image: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot6-iFABz7PLddgJR7dKyq5OfmOX5DLfYkWNF18lwmO7Eu4igjFDh_0U-MG71JtWSegI5ZQmBqVXsxunshsfqvMjNnHc1vXYh4nnD30vgzoJi2Yo",
        prices: {FN: 36.56, MW: 35.73, FT: 32.46, WW: 37.67, BS: 29.45}
    }, {
        id: 110,
        collectionId: 9,
        type: "weapon",
        weaponName: "Desert Eagle",
        skinName: "Fennec Fox",
        rarity: "classified",
        image: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposr-kLAtl7PTbTjlH7du6kb-Nkvn6NrjummJW4NFOhujT8om70QawqRc9ZGqmcNXGdFNsZ1jS-Ae_l-7tgZ7v7pzAyXRg7icj5XiMzgv3308Gn6NOEA",
        prices: {FN: 353.86, MW: 281.43, FT: 236.59, WW: 243.19, BS: 216.58}
    }, {
        id: 111,
        collectionId: 9,
        type: "weapon",
        weaponName: "MP5-SD",
        skinName: "Oxide Oasis",
        rarity: "classified",
        image: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6rwOANf1OD3fC0X09Kzm460kfvxOK_QhGVu5Mx2gv3--Y3nj1H6r0RqNm_wLIOQcgdrNFHY_1e8l-2-gMXpucucyXo1vXMk7SrcnxWzhwYMMLIO27LOBQ",
        prices: {FN: 291.34, MW: 263.97, FT: 217.15, WW: 220.29, BS: 230.9}
    }, {
        id: 112,
        collectionId: 9,
        type: "weapon",
        weaponName: "AWP",
        skinName: "Desert Hydra",
        rarity: "covert",
        image: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FABz7PLfYQJK9diklb-HnvD8J4Tdl3lW7Ytw3LDD8NWnjFDhrUo5Nj_3cI6dIA9tZ1zQrFLqk7jugMK075WfznowpGB8suOz62BA",
        prices: {FN: 2918.63, MW: 2072.66, FT: 1967.73, WW: 1759.5, BS: 1523.54}
    },

    // Nuke 
    {
        id: 113,
        collectionId: 10,
        type: "weapon",
        weaponName: "PP-Bizon",
        skinName: "Irradiated Alert",
        rarity: "base",
        image: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLO_JAlfwOP3fyhJ6c-ihombksj2IbTGmFRd4cJ5nqeYrN_22VfirhdqMT_3dYSWewQ4aV7V-wS6wOvv18W47ZvIzCRhvCMg-z-DyNmR6zDS",
        prices: {FN: 6.84, MW: 1.67, FT: 0.81, WW: 0.66, BS: 1.19}
    }, {
        id: 114,
        collectionId: 10,
        type: "weapon",
        weaponName: "Sawed-Off",
        skinName: "Irradiated Alert",
        rarity: "base",
        image: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopbuyLgNv1fX3Yi194sm9kZOfhf7kNoTThGRG5vp9g-7J4cKjiQftqRZlMTzxJ4-celA6ZAnT_QC7l-nu1pC4upqdmCExvSIqtH_egVXp1v7J_-Q3",
        prices: {FN: 6.61, MW: 1.74, FT: 0.91, WW: 0.69, BS: 0.59}
    }, {
        id: 115,
        collectionId: 10,
        type: "weapon",
        weaponName: "MAG-7",
        skinName: "Irradiated Alert",
        rarity: "base",
        image: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7uifDhzw8zGZDZH_8iknZCOqPXmPKzfqWdY781lxOyQ8dug3AS2qkZtYGiiJtOXIVA9ZwnYrFbtx7u71p-06J2anXZgu3E8pSGKi53XsPg",
        prices: {FN: 7.42, MW: 1.4, FT: 0.88, WW: 0.74, BS: 0.67}
    }, {
        id: 116,
        collectionId: 10,
        type: "weapon",
        weaponName: "XM1014",
        skinName: "Fallout Warning",
        rarity: "industrial",
        image: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgporrf0e1Y07ODYTjNX59mlgJKCh_LLPrrDmWRf18l4jeHVu9T33lK1qBVvYzynIoaQdQM-aA6Dqwe8kua-gpPtvJmay3RhsyIi5i7D30vgm-UlNbc",
        prices: {FN: 53.07, MW: 7.81, FT: 3.24, WW: 3.05, BS: 2.97}
    }, {
        id: 117,
        collectionId: 10,
        type: "weapon",
        weaponName: "P90",
        skinName: "Fallout Warning",
        rarity: "industrial",
        image: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopuP1FBRw7P3dejhR-M6_hIW0mvbmPLTfqWdY781lxOqSrN2gjQPm-BFkYWigJNKVcVBtMA7V-le_w-e9h5XqvZubnSQ1unY8pSGKsV7vdWM",
        prices: {FN: 73.8, MW: 7.73, FT: 3.64, WW: 3.17, BS: 2.67}
    }, {
        id: 118,
        collectionId: 10,
        type: "weapon",
        weaponName: "M4A4",
        skinName: "Radiation Hazard",
        rarity: "mil-spec",
        image: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhzw8zGZDZH_8iknZCOqPjmMrXWk1Rd4cJ5nqfF8I6m0Q3hrhBsMT30JISUIVA9YguB-lm3l--7jZ616s_AyyMx6ykm-z-DyGiiq0dX",
        prices: {FN: 316, MW: 37.61, FT: 13.73, WW: 12.04, BS: 12.86}
    }, {
        id: 119,
        collectionId: 10,
        type: "weapon",
        weaponName: "P250",
        skinName: "Nuclear Threat",
        rarity: "restricted",
        image: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopujwezhzw8zGZDZH_8iknZCOqPDmNr7fqWdY781lxLmYrI_w2wHmqBc_NWHwJIKVI1dqZlnS81e2le7pg8C-up3NynswuCI8pSGKH_ngT0Q",
        prices: {FN: 109.05, MW: 41.92, FT: 11.82, WW: 9.97, BS: 9.78}
    }, {
        id: 120,
        collectionId: 10,
        type: "weapon",
        weaponName: "Tec-9",
        skinName: "Nuclear Threat",
        rarity: "restricted",
        image: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoor-mcjhzw8zGZDZH_8iknZCOqPDmNr7fqX9U65xOhuDG_Zi72ATi_EBvYG_xIdTDcwdoNwnZ-QW5weu70cO5uZ6bzSBh6HYks3ffzAv3308KZ1bYLw",
        prices: {FN: 363.76, MW: 56.24, FT: 20.49, WW: 17.48, BS: 18.05}
    },

    // Nuke 2018
    {
        "id": 121,
        "collectionId": 11,
        "type": "weapon",
        "weaponName": "UMP-45",
        "skinName": "Facility Dark",
        "rarity": "base",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo7e1f1Jf2-r3czFX6cyknY6fqPX4Jr7Dk29u5Mx2gv2PpIqnjQC3-Es6aj_6cYHAc1I2YF2BrwO7kLjmjMW4tZSazCQ1vikn5GGdwUJqHBpUAA",
        "prices": {
            "FN": 0.04,
            "MW": 0.03,
            "FT": 0.03,
            "WW": 0.03,
        }
    }, {
        "id": 122,
        "collectionId": 11,
        "type": "weapon",
        "weaponName": "P250",
        "skinName": "Facility Draft",
        "rarity": "base",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopujwezhoyszKfShH_M6_mpS0hfLwDLfYkWNFpsR3jLzHrI6l0ADj_0JvMmj0II_AegA9ZwyGqVjvyOy7hMPou5qfyid9-n51PW-akuo",
        "prices": {
            "FN": 0.04,
            "MW": 0.03,
            "FT": 0.03,
            "WW": 0.03,
            "BS": 0.03
        }
    }, {
        "id": 123,
        "collectionId": 11,
        "type": "weapon",
        "weaponName": "Five-SeveN",
        "skinName": "Coolant",
        "rarity": "base",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLOzLhRlxfbGTjVb09ijl5SYqPDmNr7fqWdY781lxL-Zoo-hiVC1_BJsam37I4TAJ1Q7M1zYqQPol-2618fvupWYwSZk73Q8pSGKLd3ROFw",
        "prices": {
            "FN": 0.04,
            "MW": 0.03,
            "FT": 0.03,
            "WW": 0.03,
            "BS": 0.03
        }
    }, {
        "id": 124,
        "collectionId": 11,
        "type": "weapon",
        "weaponName": "PP-Bizon",
        "skinName": "Facility Sketch",
        "rarity": "base",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLO_JAlf2-r3czFX6cyknY6fqOD8Oq_UqWdY781lxLzArY733QPl-hU5MGj0IY6ddgJoaFqCrwDsyb_u0MXuvJjNn3ti6HQ8pSGKfPrCgp8",
        "prices": {
            "FN": 0.04,
            "MW": 0.03,
            "FT": 0.03,
            "WW": 0.03,
            "BS": 0.03
        }
    }, {
        "id": 125,
        "collectionId": 11,
        "type": "weapon",
        "weaponName": "Nova",
        "skinName": "Mandrel",
        "rarity": "base",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpouLWzKjhoyszMZD5W_-OxhoWSqPv9NLPF2D5V6Zxw2biT9InxiVHs80tpNT_xcYLBJ1U6YlDXrAS4wOq80JLp6Z7XiSw0uz12ANE",
        "prices": {
            "FN": 0.04,
            "MW": 0.03,
            "FT": 0.03,
            "WW": 0.03,
            "BS": 0.03
        }
    }, {
        "id": 126,
        "collectionId": 11,
        "type": "weapon",
        "weaponName": "MP7",
        "skinName": "Motherboard",
        "rarity": "industrial",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6ryFAZt7PDBYz5X5ci0m4GZk8jzIb7UmFRd4cJ5nqeR8Yqj3wzj-kY4YWv2Io-XelI2YF-D-AS2yOvogJ67tcvJyiM3vCh3-z-DyBsAF7mG",
        "prices": {
            "FN": 0.17,
            "MW": 0.09,
            "FT": 0.07,
            "WW": 0.09,
            "BS": 0.08
        }
    }, {
        "id": 127,
        "collectionId": 11,
        "type": "weapon",
        "weaponName": "M4A4",
        "skinName": "Mainframe",
        "rarity": "industrial",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhh3szLeC9B-dWilo-KhfPLILLdgG5D18l4jeHVu9v021bs_UNlZW-iI4HHIVQ2YFrUq1Ptwua805LuvJnNwCQ3vyQgty7D30vga_w3QVc",
        "prices": {
            "FN": 0.19,
            "MW": 0.11,
            "FT": 0.07,
            "WW": 0.09,
            "BS": 0.09
        }
    }, {
        "id": 128,
        "collectionId": 11,
        "type": "weapon",
        "weaponName": "Negev",
        "skinName": "Bulkhead",
        "rarity": "industrial",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpouL-iLhFf2-r3dShB-M-JjYWHm_jjDLfYkWNFppx107qSoN-n3VXgqkVlZTygItWXJ1A5YVyFqVDqxbzshJe-75WawXV9-n51jLab1jQ",
        "prices": {
            "FN": 0.22,
            "MW": 0.11,
            "FT": 0.07,
            "WW": 0.09,
            "BS": 0.08
        }
    }, {
        "id": 129,
        "collectionId": 11,
        "type": "weapon",
        "weaponName": "Galil AR",
        "skinName": "Cold Fusion",
        "rarity": "industrial",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbupIgthwczAaAJM-d-6kYGZqOT_JrfdhVRQ-dBwteXI8oThxgO18hVkZ2D0dYPAcwE6aV2D-AXtle7m0MW-v8mYynJk6HMhtn_bzBapwUYblbqPB00",
        "prices": {
            "FN": 0.41,
            "MW": 0.13,
            "FT": 0.07,
            "WW": 0.12,
            "BS": 0.08
        }
    }, {
        "id": 130,
        "collectionId": 11,
        "type": "weapon",
        "weaponName": "AWP",
        "skinName": "Acheron",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FA957P3dcjFH7c6Jh4uem_vnDKnUkmld_cBOhuDG_Zi73gTlqhJuYD_6LYDGdg4-Z1zQrFW9yLvvgMC-vJmazCA3vXZzsy7Zlgv3308OIiH5Ag",
        "prices": {
            "FN": 3.49,
            "MW": 1.7,
            "FT": 0.98,
            "WW": 1.52,
            "BS": 0.92
        }
    }, {
        "id": 131,
        "collectionId": 11,
        "type": "weapon",
        "weaponName": "MP5-SD",
        "skinName": "Co-Processor",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6rwOANf0v73cjRQ78m_gIKEluXwDLrAg2pu5Mx2gv2Pp9ygjQW1qEI-ZjuldtTDIw5oYVzU8wLtwea9gZTo7cvKnHYy7nR252GdwUKm_fIvZg",
        "prices": {
            "FN": 0.75,
            "MW": 0.54,
            "FT": 0.43,
            "WW": 0.42,
            "BS": 0.4
        }
    }, {
        "id": 132,
        "collectionId": 11,
        "type": "weapon",
        "weaponName": "P250",
        "skinName": "Exchanger",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopujwezhoyszMZD5W_-O0mJWOqPv9NLPF2DxUu5Ui3O2T9t2h3g3j-0toYTqlcNKUJwJsZV3S8wTrxOrnhZG0u87XiSw03BfJ1ME",
        "prices": {
            "FN": 0.73,
            "MW": 0.53,
            "FT": 0.45,
            "WW": 0.41,
            "BS": 0.39
        }
    }, {
        "id": 133,
        "collectionId": 11,
        "type": "weapon",
        "weaponName": "P90",
        "skinName": "Facility Negative",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopuP1FA957PHEZDhS_tW4gL-KhuL1DLfYkWNFppYkjLGX99_xiQTlqkBtZmr6cIPEdw88aF3YqVi4wuvp05C_6JzPznd9-n51UetnMI0",
        "prices": {
            "FN": 0.72,
            "MW": 0.52,
            "FT": 0.43,
            "WW": 0.39,
            "BS": 0.42
        }
    }, {
        "id": 134,
        "collectionId": 11,
        "type": "weapon",
        "weaponName": "MAG-7",
        "skinName": "Core Breach",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7uifDhoyszGZD5O6d2kq4iEg_jmMrXWk1Rd4cJ5nqeSoN-j3wPj-BFkZmnycteVdgNvNVCD_1m9yem8g8C4tMuawXZruiQn-z-DyGud1qBH",
        "prices": {
            "FN": 5.21,
            "MW": 3.19,
            "FT": 2.42,
            "WW": 2.19,
            "BS": 2.14
        }
    }, {
        "id": 135,
        "collectionId": 11,
        "type": "weapon",
        "weaponName": "Glock-18",
        "skinName": "Nuclear Garden",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbaqKAxf0v73fyhB4Nm3hr-YnOL4P6jukXlU7ctOhuDG_Zi72wO3-ERqZj_6Jo7Eclc-YVqE-Fm9ku651JHquMvNyXs1vnZz7CrVnQv330_b_rY00g",
        "prices": {
            "FN": 11.58,
            "MW": 7.32,
            "FT": 4.46,
            "WW": 4.97,
            "BS": 4.06
        }
    }, {
        "id": 136,
        "collectionId": 11,
        "type": "weapon",
        "weaponName": "AUG",
        "skinName": "Random Access",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot6-iFAZt7PDBYz5X5ci0m4GZk8j7IbrfkW5u5Mx2gv2P8Y2sjgPn-0c6Z2GlLdCVcFVqMlzV-APoxunphJK5vsvBnycwvHJx52GdwUIBdGqP4g",
        "prices": {
            "FN": 5.38,
            "MW": 3.25,
            "FT": 2.54,
            "WW": 2.3,
            "BS": 1.96
        }
    }, {
        "id": 137,
        "collectionId": 11,
        "type": "weapon",
        "weaponName": "M4A1-S",
        "skinName": "Control Panel",
        "rarity": "classified",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uOxh7-Gw_alIITehm5D6dF-mNbN_Iv9nBrlrkFpZGjyJ9OQeg46YAmE-le_wrzr0JS6tMnMyCZhuSl2s3nUzhXin1gSOR4zwCUo",
        "prices": {
            "FN": 58.03,
            "MW": 26.99,
            "FT": 17.22,
            "WW": 12.44,
            "BS": 11.77
        }
    }, {
        "id": 138,
        "collectionId": 11,
        "type": "weapon",
        "weaponName": "Tec-9",
        "skinName": "Remote Control",
        "rarity": "classified",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoor-mcjhnwMzcdD4b09m4go-SqPv9NLPF2DsHsMcpieuV8IiljgDk_UdqYW37JobHJARtN1vUrwLtxb3sjcK07p_XiSw06UaFxPk",
        "prices": {
            "FN": 10.57,
            "MW": 4.65,
            "FT": 3.21,
            "WW": 2.93,
            "BS": 2.85
        }
    },

    // Overpass
    {
        "id": 139,
        "collectionId": 12,
        "type": "weapon",
        "weaponName": "Sawed-Off",
        "skinName": "Sage Spray",
        "rarity": "base",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopbuyLgNv1fX3Yi19_8yklZm0k_LnNqnFqXhQ78BOhuDG_Zi7jQ3g_xc4MWDzcY-Scw83NVmG-Fa6kurnhJK6vszKmHRlunIrsyzYzgv3308JFARsxw",
        "prices": {
            "FN": 3.14,
            "MW": 0.28,
            "FT": 0.15,
            "WW": 0.4,
            "BS": 0.13
        }
    }, {
        "id": 140,
        "collectionId": 12,
        "type": "weapon",
        "weaponName": "UMP-45",
        "skinName": "Scorched",
        "rarity": "base",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo7e1f1JfwOP3dTxS_NCzq4yCkP_gfbqDw2gIusF32L_A9t323wS3_UZrZ2iiJIHBe1JvaQrQrlG5yevvh5Si_MOecRXE-L0",
        "prices": {
            "FN": 1.98,
            "MW": 0.31,
            "FT": 0.14,
            "WW": 3.47,
            "BS": 0.31
        }
    }, {
        "id": 141,
        "collectionId": 12,
        "type": "weapon",
        "weaponName": "M249",
        "skinName": "Contrast Spray",
        "rarity": "base",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-jxcjhzw8zbYS9D9eO6nYeDg7mlau6FlG9SuMFy2-yQpYnwilGxqBZrNWr3cYTHe1A2NF3R_1i4levqm9bi6zy-BOh7",
        "prices": {
            "FN": 2.83,
            "MW": 0.31,
            "FT": 0.16,
            "WW": 0.16,
            "BS": 0.22
        }
    }, {
        "id": 142,
        "collectionId": 12,
        "type": "weapon",
        "weaponName": "MAG-7",
        "skinName": "Storm",
        "rarity": "base",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7uifDhz3MzbZTJQ4dqkm46fqPv9NLPF2D8B7pIjj--XotSnjgfmrUVoMT37LIWccAVoNAyGr1HqwOvuh8K5tJ_XiSw0exkFg5I",
        "prices": {
            "FN": 2.38,
            "MW": 0.3,
            "FT": 0.17,
            "WW": 0.31,
            "BS": 0.13
        }
    }, {
        "id": 143,
        "collectionId": 12,
        "type": "weapon",
        "weaponName": "MP9",
        "skinName": "Storm",
        "rarity": "base",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6r8FBRv7ODcfi9P6s65mpS0m_7zO6-fwWlQvpJ13ryVo4-h21e2_Rc6MWCmIIDAIAA2NVrTrlTsxOnrgpft6YOJlyXJev6f5g",
        "prices": {
            "FN": 3.27,
            "MW": 0.56,
            "FT": 0.19,
            "WW": 0.39,
            "BS": 0.19
        }
    }, {
        "id": 144,
        "collectionId": 12,
        "type": "weapon",
        "weaponName": "Desert Eagle",
        "skinName": "Urban DDPAT",
        "rarity": "industrial",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposr-kLAtl7PvRTjlG_N2iq5WZlcj4OrzZgiUBvsR32urDpYml0ADt-xVtNTuiJYHEIVI_M1GD81m3xubogZPvvpzK1zI97TuZafAL",
        "prices": {
            "FN": 13.27,
            "MW": 2.06,
            "FT": 1.06,
            "WW": 1.22,
            "BS": 0.96
        }
    }, {
        "id": 145,
        "collectionId": 12,
        "type": "weapon",
        "weaponName": "MP7",
        "skinName": "Gunsmoke",
        "rarity": "industrial",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6ryFA957PTNfS1H4uO6nYeDg7nxYuLVkj0JsMYj2-jEpdWhjlK3-EVoajz7JNPAc1U_N1jZ_1i_w-u-m9bi631gmeDU",
        "prices": {
            "FN": 5.89,
            "MW": 1.68,
            "FT": 1.06,
            "WW": 0.8,
            "BS": 0.89
        }
    }, {
        "id": 146,
        "collectionId": 12,
        "type": "weapon",
        "weaponName": "Glock-18",
        "skinName": "Night",
        "rarity": "industrial",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbaqKAxfwPz3fzRF5MiJmImMn-O6Nu6Hk2oIuscliLHCpNWk3FXjrUY6Zzz0LI-RegU9YFvY_lTvwbzr1Ij84soKgzA3DA",
        "prices": {
            "FN": 29.02,
            "MW": 1.82,
            "FT": 1.07,
            "WW": 1.17,
            "BS": 1.01
        }
    }, {
        "id": 147,
        "collectionId": 12,
        "type": "weapon",
        "weaponName": "P2000",
        "skinName": "Grassland",
        "rarity": "industrial",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovrG1eVcwg8zbfgJF_t2lh4yKmfPLP7LWnn8f65dy0urFrNWs3gSy_kQ5Yjz3cdPHcwQ4YAyGqwe9we7p0JC7vpjOzmwj5HczO4y4Hw",
        "prices": {
            "FN": 4.86,
            "MW": 1.63,
            "FT": 1.56,
            "WW": 0.91,
            "BS": 0.87
        }
    }, {
        "id": 148,
        "collectionId": 12,
        "type": "weapon",
        "weaponName": "CZ75-Auto",
        "skinName": "Nitro",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotaDyfgZfwPz3fi9D4tuzq4GIlPL6J6iDqWdY781lxLGVoY7x3lDk-hA5ZDr1LYKddAU8ZguFqFW6k-jq157vu86azXs1uHQ8pSGKeLV-W1Y",
        "prices": {
            "FN": 18.53,
            "MW": 7.04,
            "FT": 4.58,
            "WW": 4.68,
            "BS": 5.04
        }
    }, {
        "id": 149,
        "collectionId": 12,
        "type": "weapon",
        "weaponName": "XM1014",
        "skinName": "VariCamo Blue",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgporrf0e1Y07PvRTitD_tW1lY2EqPX4Jr7ummJW4NE_3OuYrImnjgCw_kNlYWv6IdWddFQ2ZlqF-AC-ybro0Me6tZWfnHcxvD5iuyitgQVSZg",
        "prices": {
            "FN": 10.11,
            "MW": 4.8,
            "FT": 4.78,
            "WW": 8.51,
            "BS": 6.12
        }
    }, {
        "id": 150,
        "collectionId": 12,
        "type": "weapon",
        "weaponName": "SSG 08",
        "skinName": "Detour",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopamie19f2-r3Yi5FvISJmYGZnPLmDLfYkWNFppYg0r2UoY-t3gPirxBqN27xddKUIABrYlzTr1e4wLrmjZW9upnMnyB9-n51KPh59SI",
        "prices": {
            "FN": 13.07,
            "MW": 8.18,
            "FT": 7.22,
            "WW": 5.56,
        }
    }, {
        "id": 151,
        "collectionId": 12,
        "type": "weapon",
        "weaponName": "AWP",
        "skinName": "Pink DDPAT",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FA957PfMYTxW08y_mou0m_7zO6-flzsB6sBzj-jFodqiiQPl-0VsZWvzIY6cegRvYA7Y_FS_krjpg5Xu74OJlyXUk8gSnw",
        "prices": {
            "FN": 96.85,
            "MW": 38.42,
            "FT": 24.46,
            "WW": 24.42,
            "BS": 23.82
        }
    }, {
        "id": 152,
        "collectionId": 12,
        "type": "weapon",
        "weaponName": "USP-S",
        "skinName": "Road Rash",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo6m1FBRp3_bGcjhQ09-jq5WYh8jnMrXVhmpB7dd0jtbN_Iv9nBrsrxZlY26lcdKXJgY-Yl6F-gK4ku-5hpS675_JwHNm7ygm433fmESwn1gSOYQPCPgR",
        "prices": {
            "FN": 41.35,
            "MW": 33.29,
            "FT": 20.95,
            "WW": 18.09,
            "BS": 16.9
        }
    }, {
        "id": 153,
        "collectionId": 12,
        "type": "weapon",
        "weaponName": "M4A1-S",
        "skinName": "Master Piece",
        "rarity": "classified",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO1gb-Gw_alfqjuhWJd7ctyj9bN_Iv9nBqx_0s4Y2_0LIXAd1U4MlHZqFPox-u7g8W0vpXAyCE2sych7Cndnh22n1gSOXJG-eI-",
        "prices": {
            "FN": 249.27,
            "MW": 162.28,
            "FT": 102.87,
            "WW": 69.02,
            "BS": 57.52
        }
    }, 

    // Train 2021
    {
        "id": 154,
        "collectionId": 13,
        "type": "weapon",
        "weaponName": "R8 Revolver",
        "skinName": "Blaze",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopL-zJAt21uH3cDx96tC3mYWYqPv9NLPFqWdQ-sJ0xLiYpYisi1bjqUs9Mj3wJdKUcgNoNFDT8le4xb_o08K1tcibn3FmuSU8pSGK5u2-Yfw",
        "prices": {
            "FN": 0.74,
            "MW": 0.94
        }
    }, {
        "id": 155,
        "collectionId": 13,
        "type": "weapon",
        "weaponName": "Desert Eagle",
        "skinName": "Sputnik",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposr-kLAtl7ODYTi5S7d-zhoGIksj2P67UqWdY781lteXA54vwxlHt-BZlajyicNXEJwc9NFyGrFPtk7vm05-5tMnOy3IyuSQi5XiMmUGpwUYbUWGLOR8",
        "prices": {
            "FN": 0.94,
            "MW": 0.48,
            "FT": 0.22,
            "WW": 0.3,
            "BS": 0.23
        }
    }, {
        "id": 156,
        "collectionId": 13,
        "type": "weapon",
        "weaponName": "M4A1-S",
        "skinName": "Fizzy POP",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uOlhL-fkvT8PbTGl3lu-sB1teXI8oTht1i1uRQ5fWGhLYPDewc4ZFnTrwe3le280Mfuv8vBm3pk63N253zamBzm1E0abrRxxavJpb8tAt8",
        "prices": {
            "FN": 2.57,
            "MW": 1.55,
            "FT": 0.93,
            "WW": 1.26,
            "BS": 0.98
        }
    }, {
        "id": 157,
        "collectionId": 13,
        "type": "weapon",
        "weaponName": "AUG",
        "skinName": "Amber Fade",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot6-iFAZh7PXJdTh94dmilYyHnvTLP7LWnn9u5MRjjeyP9NimjFa2qhJla2GncIOWIwE8NA3Wr1G4xu7u1pHpvM6byCNhuCV35WGdwUJnqGmDOQ",
        "prices": {
            "FN": 0.55,
            "MW": 0.36,
            "FT": 0.22,
            "WW": 0.21
        }
    }, {
        "id": 158,
        "collectionId": 13,
        "type": "weapon",
        "weaponName": "SSG 08",
        "skinName": "Spring Twilly",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopamie19f2-r3ZS9D5dK3hoODnuPxMK_ukXlU7ctOhuDG_ZjKhFWmrBZyamCmINOVIVNoYFCB-ge9xrjq05S678yfzXFi7nR37X-LnBzhgBwZb_sv26JMGaQNzg",
        "prices": {
            "FN": 0.84,
            "MW": 0.44,
            "FT": 0.21,
            "WW": 0.24,
            "BS": 0.17
        }
    }, {
        "id": 159,
        "collectionId": 13,
        "type": "weapon",
        "weaponName": "Tec-9",
        "skinName": "Safety Net",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoor-mcjhoyszFdC5K08-3koWfjvjmMrXWk1Rd4cJ5ntbN9J7yjRq1-UZqZ2n3IIWSc1U2ZgqC-1G2wOnqhsW7vcvPmiQxsyN05XzYlka2n1gSOQeuRM9Q",
        "prices": {
            "FN": 0.66,
            "MW": 0.39,
            "FT": 0.22,
            "WW": 0.2,
            "BS": 0.17
        }
    }, {
        "id": 160,
        "collectionId": 13,
        "type": "weapon",
        "weaponName": "UMP-45",
        "skinName": "Full Stop",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo7e1f1Jf2-r3ZzxQ5d-3mY-0hfLwDLfYkWNF18lwmO7Eu9-l3AbirRE4N2vyJtOVewA_NVHR_QfokOzugcO9vZnKyHFhvHV35X3D30vgUVJOG50",
        "prices": {
            "FN": 0.51,
            "MW": 0.35,
            "FT": 0.21,
            "WW": 0.17,
            "BS": 0.15
        }
    }, {
        "id": 161,
        "collectionId": 13,
        "type": "weapon",
        "weaponName": "AWP",
        "skinName": "POP AWP",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FA957OfNcjVM48u3hr-ZgPXLP7LWnn9u5MRjjeyPp96iigfh8hdoY2CnIYCRIFM5Z1_Vrlm9wuq81MK0tZvKzydg6HR2tGGdwULHAO9QIw",
        "prices": {
            "FN": 4.05,
            "MW": 2.99,
            "FT": 1.77,
            "WW": 2.21
        }
    }, {
        "id": 162,
        "collectionId": 13,
        "type": "weapon",
        "weaponName": "Nova",
        "skinName": "Red Quartz",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpouLWzKjhh3szLYyRR-N26mImRkvPLP7LWnn9u5MRjjeyP9Nmm0QS3-hdtN22hJNeddQ9qZlvZ81C5k73s0Z_quZrPnycxuiF052GdwUIMUTZ0zw",
        "prices": {
            "FN": 2.98,
            "MW": 1.36,
            "FT": 0.77,
            "WW": 0.82
        }
    }, {
        "id": 163,
        "collectionId": 13,
        "type": "weapon",
        "weaponName": "P2000",
        "skinName": "Space Race",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovrG1eVcwg8zJcAJR_N21kZKKlPLLPKnQmGxU18l4jeHVyoD0mlOx5UVtYjyicYWUc1M9ZlGE-FXswu7ugZW0v87Py3Vj7iQn5X7fnxy-0BhSLrs4Sjf5900",
        "prices": {
            "FN": 3.09,
            "MW": 1.44,
            "FT": 0.72,
            "WW": 0.54,
            "BS": 0.56
        }
    }, {
        "id": 164,
        "collectionId": 13,
        "type": "weapon",
        "weaponName": "MP5-SD",
        "skinName": "Autumn Twilly",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6rwOANf2-r3ZS9D5dK3hoODnuPxMK_ummJW4NFOhujT8om70Va18xA-amzzIdCVIAA5NF7Q8lG7wb26gMftv53OnHFh7nFwtyrcygv3308CfVhDYA",
        "prices": {
            "FN": 2.96,
            "MW": 1.5,
            "FT": 0.7,
            "WW": 0.71,
            "BS": 0.56
        }
    }, {
        "id": 165,
        "collectionId": 13,
        "type": "weapon",
        "weaponName": "CZ75-Auto",
        "skinName": "Syndicate",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotaDyfgZf1OD3ZS9D5dKJl5rcwsj4OrzZglRd6dd2j6fFpd2i0FbkrUE_Z2mgcIKRIwU2NV2D-lO_xL_ohJO-vpzNmiBi6XUq-z-DyH1IqVIT",
        "prices": {
            "FN": 2.99,
            "MW": 1.49,
            "FT": 0.73,
            "WW": 0.68,
            "BS": 0.68
        }
    }, {
        "id": 166,
        "collectionId": 13,
        "type": "weapon",
        "weaponName": "USP-S",
        "skinName": "Whiteout",
        "rarity": "classified",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo6m1FBRp3_bGcjhQ08-5q5eDnuPxPK7FqXlY-NF4juz--YXygECLpxIuNDztLIHBcVQ2YwvY-QTow-a505a6tZjMwHNmsyAlsX_bnRawh0oZbeQ-1uveFwugDqSkSw",
        "prices": {
            "FN": 124.34,
            "MW": 16.54,
            "FT": 5.59,
            "WW": 4.8,
            "BS": 4.21
        }
    }, {
        "id": 167,
        "collectionId": 13,
        "type": "weapon",
        "weaponName": "FAMAS",
        "skinName": "Meltdown",
        "rarity": "classified",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLuoKhRf0v73fyhB4Nm3hr-bluPgNqnfwlRX6chwmdbN_Iv9nGu4qgE7Nnf0cYeRdVA_Yl3X-Fnqx7-90ZC-6pXOyHJrsnQk7CzczRfl1RtEbuJpm7XAHq6vqxRu",
        "prices": {
            "FN": 12.63,
            "MW": 7.5,
            "FT": 5.58,
            "WW": 6.32
        }
    }, {
        "id": 168,
        "collectionId": 13,
        "type": "weapon",
        "weaponName": "MAC-10",
        "skinName": "Propaganda",
        "rarity": "classified",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7umeldf0Ob3fDxBvYyJhJKEh_bzMrXVl1Rd4cJ5ntbN9J7yjRqw8xJsZWyhJY-UJAVqN1DWq1brw7vtgMK4v5nAzntj73Qn4yrdmhy0n1gSOV-pza9R",
        "prices": {
            "FN": 12.76,
            "MW": 8.12,
            "FT": 5.18,
            "WW": 5.88,
            "BS": 4.15
        }
    }, {
        "id": 169,
        "collectionId": 13,
        "type": "weapon",
        "weaponName": "M4A4",
        "skinName": "The Coalition",
        "rarity": "covert",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhnwMzFJTwW09-5lYyCg_77PYTdn2xZ_Pp9i_vG8MKm2QewqkBtZWChcoWXIQI8ZlvS_wTskum5hcft6ZyYyXBkuHUh7HaMgVXp1o1UOJQ9",
        "prices": {
            "FN": 130.87,
            "MW": 34.35,
            "FT": 10.21,
            "WW": 6.23,
            "BS": 6.27
        }
    }, {
        "id": 170,
        "collectionId": 13,
        "type": "weapon",
        "weaponName": "Glock-18",
        "skinName": "Gamma Doppler",
        "rarity": "covert",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbaqKAxf0v73dDBH_t26kL-GluX2P77YjG5V18J9herKyoD8j1yg5UU9YmulII6cJABoMlvU-FLoxe7m0ZHq7Z3NyiZm7HRxt3iPlkDmgxpSLrs4ffL9gek",
        "prices": {
            "FN": 242.4,
            "MW": 147.45,
            "FT": 108.68,
            "WW": 100,
            "BS": 103.46
        }
    },

    // Vertigo 2021
    {
        "id": 171,
        "collectionId": 14,
        "type": "weapon",
        "weaponName": "CZ75-Auto",
        "skinName": "Framework",
        "rarity": "base",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotaDyfgZf2-r3ZzhQ-NWxm4mHm-LnOrTfqWdY781lteXA54vwxgWx-RU6ZW-ldtLBcFI7MA2B_1e4xOe-gsPo6ZyamnE17iUl5Sndn0GpwUYbngpAUs8",
        "prices": {
            "FN": 0.26,
            "MW": 0.16,
            "FT": 0.14,
            "WW": 0.14,
            "BS": 0.13
        }
    }, {
        "id": 172,
        "collectionId": 14,
        "type": "weapon",
        "weaponName": "FAMAS",
        "skinName": "Faulty Wiring",
        "rarity": "base",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLuoKhRf0vL3ZjRQ5dKxq5mOm_v7JITdn2xZ_Pp9i_vG8ML22gfmqkBqNTv7cIDEdA8_aVHT-1K8kO691MC9vpudy3dj7ih25nqIgVXp1hW43Nue",
        "prices": {
            "FN": 0.18,
            "MW": 0.15,
            "FT": 0.13,
            "WW": 0.14,
            "BS": 0.26
        }
    }, {
        "id": 173,
        "collectionId": 14,
        "type": "weapon",
        "weaponName": "Dual Berettas",
        "skinName": "Oil Change",
        "rarity": "base",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpos7asPwJfwOP3dDNF5dKzq4SChePtDLfYkWNF18lwmO7Eu9zw3wzj_Rc6am2nctOccAZvMw7S_VLrxuu61JC-6Z3NyHNjunR34S7D30vgIG_TWRE",
        "prices": {
            "FN": 0.2,
            "MW": 0.14,
            "FT": 0.14,
            "WW": 0.14,
            "BS": 0.23
        }
    }, {
        "id": 174,
        "collectionId": 14,
        "type": "weapon",
        "weaponName": "MAC-10",
        "skinName": "Strats",
        "rarity": "base",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7umeldf2-r3ZzhQ-NWxm5ObhfbtDLndg25u5Mx2gv3--Y3nj1H680BoNzr7IYTHJg5tZlrSrlHqle3v1Ja57p6fznA2vCQi5CyJlh2w0wYMMLJX5dcnWA",
        "prices": {
            "FN": 0.22,
            "MW": 0.16,
            "FT": 0.13,
            "WW": 0.16,
            "BS": 0.14
        }
    }, {
        "id": 175,
        "collectionId": 14,
        "type": "weapon",
        "weaponName": "XM1014",
        "skinName": "Blue Tire",
        "rarity": "base",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgporrf0e1Y07ODYTilL_tmJgJKOlvPLMbfEk1Rd4cJ5ntbN9J7yjRq3_UJsZD_zI4OdclJrZQvQrlC6xe6-1MXt7s-dwSBnvXIl7XeMmR2wn1gSOQEPqidH",
        "prices": {
            "FN": 0.18,
            "MW": 0.14,
            "FT": 0.13,
            "WW": 0.14,
            "BS": 0.12
        }
    }, {
        "id": 176,
        "collectionId": 14,
        "type": "weapon",
        "weaponName": "UMP-45",
        "skinName": "Mechanism",
        "rarity": "industrial",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo7e1f1Jf0vL3dDNF5dKzq5COhfH7IbbQmGhU18l4jeHVyoD0mlOx5RFoYWn0cIWUI1c7YgrXrwW2x-3qhpPou5qcwCNkviIis3_bzBexiRlSLrs4k69cF7c",
        "prices": {
            "FN": 1.26,
            "MW": 1.07,
            "FT": 1.07,
            "WW": 1.01,
            "BS": 1.03
        }
    }, {
        "id": 177,
        "collectionId": 14,
        "type": "weapon",
        "weaponName": "Glock-18",
        "skinName": "Red Tire",
        "rarity": "industrial",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbaqKAxfwOP3ZTRQ6eOihoWKk8jmNr_ummJW4NFOhujT8om7ilLk_RdpMTjzcoTHdQI4NA6G_AC4x7--gpa-vMyanXUysid3sSuOmwv3308N14deOA",
        "prices": {
            "FN": 1.27,
            "MW": 1.22,
            "FT": 1.01,
            "WW": 1.16,
            "BS": 1.15
        }
    }, {
        "id": 178,
        "collectionId": 14,
        "type": "weapon",
        "weaponName": "PP-Bizon",
        "skinName": "Breaker Box",
        "rarity": "industrial",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLO_JAlf0vL3ZjRQ5dKxq4yCkP_gDLfQhGxUppB0ib-QoYmjiwbh8xc4Ym6ndoXDdQ86aFrZ-FG-yb_t05K6usvLnSB9-n51lUAssIw",
        "prices": {
            "FN": 1.22,
            "MW": 1.08,
            "FT": 0.96,
            "WW": 0.94
        }
    }, {
        "id": 179,
        "collectionId": 14,
        "type": "weapon",
        "weaponName": "SSG 08",
        "skinName": "Carbon Fiber",
        "rarity": "industrial",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopamie19f0v73cjxQ7tO4q4aClfLmDLfYkWNF18lwmO7Eu9Wl2gHhqkY-Z2D3JNXGcgE2YVjV_li9xe3v05btu57Oz3MxsykisHvD30vgTo_aY5c",
        "prices": {
            "FN": 1.17,
            "MW": 1.41,
            "WW": 1.84,
            "BS": 2.1
        }
    }, {
        "id": 180,
        "collectionId": 14,
        "type": "weapon",
        "weaponName": "P90",
        "skinName": "Schematic",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopuP1FA957OXNYylL69OxkY-0m_7zO6_ummpD78A_2buQ8dSl3gzj_UI-Zzv7LdOUJw9oZFHR_APvw7251se5vJvBnHJruj5iuyio5Vscgw",
        "prices": {
            "FN": 5.63,
            "MW": 4.66,
            "FT": 4.13,
            "WW": 3.88,
            "BS": 4.01
        }
    }, {
        "id": 181,
        "collectionId": 14,
        "type": "weapon",
        "weaponName": "Negev",
        "skinName": "Infrastructure",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpouL-iLhFf2-r3ZzhQ-NWxm5ObhfbtDLfYkWNF18lwmO7Eu93w3lDi8hE5YT2gIdfGdQQ3YQ2G8lC7kLvp1JO_7s_LyHZguyAhtnzD30vg-45IbkU",
        "prices": {
            "FN": 5.43,
            "MW": 4.49,
            "FT": 4.2,
            "WW": 3.58,
            "BS": 3.62
        }
    }, {
        "id": 182,
        "collectionId": 14,
        "type": "weapon",
        "weaponName": "AK-47",
        "skinName": "Green Laminate",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhoyszJemkV4N27q4eZkvL6DLfYkWNF18lwmO7Eu4n2ilWy80Y5YGygdYadcwM4MgvT-lS-wOm7gcLvuJ_OzyNkviJz7SnD30vgE7DfOg4",
        "prices": {
            "FN": 11.13,
            "MW": 9.72,
            "FT": 8.98,
            "WW": 11.1
        }
    }, {
        "id": 183,
        "collectionId": 14,
        "type": "weapon",
        "weaponName": "Nova",
        "skinName": "Interlock",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpouLWzKjhoyszedC9W5du5nYyHguT9PLXuj25d5MpmteXI8oTht1i1uRQ5fW7wctLDIQ47ZFDVrAfoxurnhZLtusvLy3NksyQi4y7Zl0bihhxFauJxxavJsdOZLh0",
        "prices": {
            "FN": 5.26,
            "MW": 4.4,
            "FT": 4.39,
            "WW": 3.62,
            "BS": 4.72
        }
    }, {
        "id": 184,
        "collectionId": 14,
        "type": "weapon",
        "weaponName": "P250",
        "skinName": "Digital Architect",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopujwezhh0szedC9W5du5k4WEqPnxPLXummJW4NFOhujT8om7jQWx_ERvYz_zcICScwBvYl_SqQXvxbzmgpXqu5yanSAxvXEi4nuOywv330-4zWUALQ",
        "prices": {
            "FN": 30.77,
            "MW": 24.5,
            "FT": 23.4,
            "WW": 27.22,
            "BS": 18.81
        }
    }, {
        "id": 185,
        "collectionId": 14,
        "type": "weapon",
        "weaponName": "Galil AR",
        "skinName": "CAUTION!",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbupIgthwczbYQJF7dC_mL-IluLgOrTfqWdY781lteXA54vwxlLj-0ZoZ2n2LdLBdVU9Nw7V_VG3kua-hJK1v5vNyiZi73YgtHqJy0CpwUYbP5wvhIY",
        "prices": {
            "FN": 32.13,
            "MW": 28.91,
            "FT": 23.8,
            "WW": 20.88,
            "BS": 21.82
        }
    }, {
        "id": 186,
        "collectionId": 14,
        "type": "weapon",
        "weaponName": "MAG-7",
        "skinName": "Prism Terrace",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7uifDhoyszPdDJP6ciknYO0hOPxI6juhm5Q-slOhuDG_ZjKhFWmrBZyNWryIoGXIVRrZ1yD-FLqxrrsgZa9tZTIzXFkvyhx7SmOmhaw104ebfsv26K9DCxizw",
        "prices": {
            "FN": 31.43,
            "MW": 24.44,
            "FT": 22.59,
            "BS": 18.22
        }
    }, {
        "id": 187,
        "collectionId": 14,
        "type": "weapon",
        "weaponName": "SG 553",
        "skinName": "Hazard Pay",
        "rarity": "classified",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopb3wflFf0Ob3YjoXuY-Jl4Geg_77PYTdn2xZ_Pp9i_vG8MKh0FKx-kM9Mjynd4LDIFRvZl-BrAW5x73shMe57c_BzyYyviIm436PgVXp1nwxV-BW",
        "prices": {
            "FN": 213.21,
            "MW": 204.99,
            "FT": 149.3,
            "WW": 124,
        }
    }, {
        "id": 188,
        "collectionId": 14,
        "type": "weapon",
        "weaponName": "Five-SeveN",
        "skinName": "Fall Hazard",
        "rarity": "classified",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLOzLhRlxfbGTj5X08qzhpSCkPjLNbLHk3hU_sB_teXI8oTht1i1uRQ5fWGnJI-QegBtNF-Eq1W3xOfmg5-7vp3Nm3YxvXZx5n3UnBXlhR9EbeNxxavJUZZT9dQ",
        "prices": {
            "FN": 211,
            "MW": 204,
            "FT": 163.32,
            "WW": 100.93,
            "BS": 94.81
        }
    }, {
        "id": 189,
        "collectionId": 14,
        "type": "weapon",
        "weaponName": "M4A1-S",
        "skinName": "Imminent Danger",
        "rarity": "covert",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uOxh7-Gw_alDK3UhH9Y78pOhuDG_ZjKhFWmrBZyMmj3IIGQclc4aFjTqVLslbrmjZa06ZrNySZhvSQk4XeMyhex0h9NO_sv26LxJDiH_w",
        "prices": {
            "FN": 2267,
            "MW": 1685,
            "FT": 1072.18,
            "WW": 933.75,
            "BS": 736
        }
    },

    // Ancient
    {
        "id": 190,
        "collectionId": 15,
        "type": "weapon",
        "weaponName": "SSG 08",
        "skinName": "Jungle Dashed",
        "rarity": "base",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopamie19fwOP3ZTxS6eOlnI-Zg8j-JrXWmm5u5Mx2gv3--Y3nj1H6_0VuYDr6JtWcc1NvMFiFrFW7lOe8hZ_otJ_BmyA26Ckg4yuOzRTkhwYMMLLpL6-hww",
        "prices": {
            "FN": 1.6,
            "MW": 0.13,
            "FT": 0.11,
            "WW": 0.12,
            "BS": 0.13
        }
    }, {
        "id": 191,
        "collectionId": 15,
        "type": "weapon",
        "weaponName": "SG 553",
        "skinName": "Lush Ruins",
        "rarity": "base",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopb3wflFf0vL3YyhL4s-Jk5KOkvnLP7LWnn9u5MRjjeyPodvw3VXmrRc4YWD1coPBIFJtN1uF-1Xrkuy-hZ_u6ZvAwCAy6Chw7WGdwUI7bhtV4g",
        "prices": {
            "FN": 0.22,
            "MW": 0.13,
            "FT": 0.12,
            "WW": 0.53,
            "BS": 0.12
        }
    }, {
        "id": 192,
        "collectionId": 15,
        "type": "weapon",
        "weaponName": "P90",
        "skinName": "Ancient Earth",
        "rarity": "base",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopuP1FAZh7PLGcjRH4siJlpKEgPnLP7LWnn9u5MRjjeyPo9X3i1Ltr0JlMjzwcoPHcARrYlvY-AXsl-7o0ce8tZ3Jn3JivSkk4mGdwUKR5Z08aA",
        "prices": {
            "FN": 0.19,
            "MW": 0.13,
            "FT": 0.12,
            "WW": 0.15,
            "BS": 3.28
        }
    }, {
        "id": 193,
        "collectionId": 15,
        "type": "weapon",
        "weaponName": "R8 Revolver",
        "skinName": "Night",
        "rarity": "base",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopL-zJAt21uH3YjJ94tWxnJS0m_7zO6_ummpD78A_2rvCpNSg2la3-kU5YjrwdtXBIARqMAnW8lDolbi6hZK_6J7Iy3tg6D5iuygvLD1avw",
        "prices": {
            "FN": 2.8,
            "MW": 0.14,
            "FT": 0.11,
            "WW": 0.12,
            "BS": 0.13
        }
    }, {
        "id": 194,
        "collectionId": 15,
        "type": "weapon",
        "weaponName": "Nova",
        "skinName": "Army Sheen",
        "rarity": "base",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpouLWzKjhh3szJYzBb08--nY6OqPv9NLPFqWdQ-sJ0xOrD8Yqt0QDl_xVqNz3wIdWXJlM9YQzQqQXvyL_p0Z646s-dynBhsik8pSGKJHFomo8",
        "prices": {
            "FN": 0.19,
            "MW": 0.13,
            "FT": 0.13,
            "BS": 0.05
        }
    }, {
        "id": 195,
        "collectionId": 15,
        "type": "weapon",
        "weaponName": "Tec-9",
        "skinName": "Blast From the Past",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoor-mcjhoyszJfz5L6dKiq5SCm_LnDKvUl2hZ18l4jeHVyoD0mlOx5Uo9N2DwdtKRc1A5ZVvW-lG7k-q50ZLouM-bn3RruyV34SuMyha-0hFSLrs4s9hGCzg",
        "prices": {
            "FN": 6.45,
            "MW": 5.76,
            "FT": 5.36,
            "WW": 5.68,
            "BS": 4.17
        }
    }, {
        "id": 196,
        "collectionId": 15,
        "type": "weapon",
        "weaponName": "MP7",
        "skinName": "Tall Grass",
        "rarity": "industrial",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6ryFA957PfaaCpN49iJk5KOkvnLP7LWnn9u5MRjjeyP9N703QO2-kFoMmymLNeWI1I4YFHR-Fe6yLjrgpTqvs_NznUx7nF27GGdwUJhJJOHEQ",
        "prices": {
            "FN": 1.09,
            "MW": 0.88,
            "FT": 0.77,
            "WW": 0.78,
            "BS": 0.87
        }
    }, {
        "id": 197,
        "collectionId": 15,
        "type": "weapon",
        "weaponName": "CZ75-Auto",
        "skinName": "Silver",
        "rarity": "industrial",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotaDyfgZf0v33YjRO-tmkq4yCkP_gDLfQhGxUpsEo3L-XoNr03FK3_hFtazvwJ9fBcQJsMgzYq1Toyb28gJbuvcvBwSd9-n5106iv1pk",
        "prices": {
            "FN": 1.07,
            "MW": 2.05,
            "WW": 0.35,
            "BS": 0.73
        }
    }, {
        "id": 198,
        "collectionId": 15,
        "type": "weapon",
        "weaponName": "P2000",
        "skinName": "Panther Camo",
        "rarity": "industrial",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovrG1eVcwg8zJfAJA4N21n7-blvngO77DqWdY781lteXA54vwxgK2-hc4NW_zI4fEJldsZ17Y_wPol-3s08S57pjBz3BlvXV35SnUnxKpwUYbbzn7HnA",
        "prices": {
            "FN": 0.92,
            "MW": 0.84,
            "FT": 0.82,
            "WW": 1.1,
            "BS": 1.52
        }
    }, {
        "id": 199,
        "collectionId": 15,
        "type": "weapon",
        "weaponName": "G3SG1",
        "skinName": "Ancient Ritual",
        "rarity": "industrial",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposem2LFZf0v73cDNB5dm4gL-cnvnxDLfYkWNF18lwmO7Eu4jzjVXj-hc_aj-iItKcJ1M5MAnV-Fnowe7ng8O-vZvKynRjvydx4irD30vgik1W_Wc",
        "prices": {
            "FN": 1.09,
            "MW": 0.85,
            "FT": 0.78,
            "WW": 0.75,
            "BS": 0.76
        }
    }, {
        "id": 200,
        "collectionId": 15,
        "type": "weapon",
        "weaponName": "Galil AR",
        "skinName": "Dusk Ruins",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbupIgthwczAaAJQ-dW4h7-ZkvPLP7LWnn9u5MRjjeyPoNql0QzmrkNsYj_3dteTJ1U6YwmE-ljoyO_s0JW_75yfnSNruyAqs2GdwUL23BtaYw",
        "prices": {
            "FN": 6.8,
            "MW": 6.12,
            "FT": 5.45,
            "WW": 5.62,
            "BS": 4.79
        }
    }, {
        "id": 201,
        "collectionId": 15,
        "type": "weapon",
        "weaponName": "AUG",
        "skinName": "Carved Jade",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot6-iFAZt7PnJdTh94NWxnJS0m_bmNL6fkzxSu5Io2LvE8933iwLi8hFlMT3yItKQIFNrZAzT-ljqyOm-1JbpvoOJlyV6jJMV5w",
        "prices": {
            "FN": 6.34,
            "MW": 6.49,
            "FT": 5.26,
            "BS": 4.46
        }
    }, {
        "id": 202,
        "collectionId": 15,
        "type": "weapon",
        "weaponName": "FAMAS",
        "skinName": "Dark Water",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLuoKhRf0v73azhA_t2JkIGZnMj4OrzZglRd6dd2j6eUp9ul2wbi8xE5Mj-hdYbHcwdtMg6F8lfowuy-hpW-78mfz3s1s3V0-z-DyHGVFGpO",
        "prices": {
            "FN": 6.29,
            "MW": 5.68,
            "WW": 1.96,
            "BS": 1.38
        }
    }, {
        "id": 203,
        "collectionId": 15,
        "type": "weapon",
        "weaponName": "USP-S",
        "skinName": "Ancient Visions",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo6m1FBRp3_bGcjhQ08-mq4GFlP7xPa_ulHlY781lteXI8oTht1i1uRQ5fW76INPDJlU7Z13T_lTvxuvn0Z_tusudz3Vg7nImtHvfyhW21R1FPe1xxavJa9yOZJk",
        "prices": {
            "FN": 37.57,
            "MW": 33.56,
            "FT": 27.8,
            "WW": 26.86,
        }
    }, {
        "id": 204,
        "collectionId": 15,
        "type": "weapon",
        "weaponName": "XM1014",
        "skinName": "Ancient Lore",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgporrf0e1Y07PLFTjxM79WzmpS0gPbmPoTdn2xZ_Pp9i_vG8MKsiQHnqEI-YT2hLI-SIAY-ZAvV_AO2l-u6gce57pSfzXJkuSBx7XqPgVXp1tykz_1x",
        "prices": {
            "FN": 37.42,
            "MW": 29.78,
            "FT": 26.81,
            "WW": 34.27,
            "BS": 49.48
        }
    }, {
        "id": 205,
        "collectionId": 15,
        "type": "weapon",
        "weaponName": "MAC-10",
        "skinName": "Gold Brick",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7umeldf0v73djJO6OO0homInMj4OrzZglRd6dd2j6eSoNSmiwbtqhVrYmygIIGVcgc5Z1nU8wO9yejp1pW56M6azno3vCF3-z-DyL5HHr0U",
        "prices": {
            "FN": 39.32,
            "MW": 35.71,
            "FT": 29.01,
            "WW": 34.4,
            "BS": 26.11
        }
    }, {
        "id": 206,
        "collectionId": 15,
        "type": "weapon",
        "weaponName": "AK-47",
        "skinName": "Panthera onca",
        "rarity": "classified",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJegJI7dujlZK0m_7zO6_ummpD78A_07vF8dSgjAHtr0FqYmymddScclRoaV6E_QS6lbjp0MO16Z3AzHNguD5iuyhm3xovwQ",
        "prices": {
            "FN": 290.58,
            "MW": 252.67,
            "FT": 169.41,
            "WW": 131.35,
            "BS": 127.66
        }
    }, {
        "id": 207,
        "collectionId": 15,
        "type": "weapon",
        "weaponName": "P90",
        "skinName": "Run and Hide",
        "rarity": "classified",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopuP1FAR17PnJdihD_uOmzdC0m_7zO6_ummpD78A_3e2Y84mn2QXk_RFkYDqhcoeVJ1c2MgvXrFnsxbjp1MPtu5-Yn3Blsj5iuyh78hYCww",
        "prices": {
            "FN": 312.43,
            "MW": 284,
            "FT": 186.67,
            "WW": 141.55,
            "BS": 143.61
        }
    }, {
        "id": 208,
        "collectionId": 15,
        "type": "weapon",
        "weaponName": "M4A1-S",
        "skinName": "Welcome to the Jungle",
        "rarity": "covert",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO1gb-Gw_alDKjfl2BU18l4jeHVyoD0mlOx5RU_NzylJ4GdewU2YlHYq1S-x7rs0Je7v8jOz3RguCIn4nbVmRLihhxSLrs4aeNPV4w",
        "prices": {
            "FN": 3089.95,
            "MW": 2342.1,
            "FT": 1558.07,
            "WW": 978.85,
            "BS": 757.47
        }
    },

    // Canals
    {
        "id": 209,
        "collectionId": 16,
        "type": "weapon",
        "weaponName": "AUG",
        "skinName": "Navy Murano",
        "rarity": "base",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot6-iFA957P7dYzxM4-O0mJWOqPv9NLPFqWdQ-sJ0xOuTrNj2iVbi_Us-YGvxLYSRcQA5Z1DT8gS8xOrt1561v8_MnSEx7HE8pSGKIs76Vf0",
        "prices": {
            "FN": 2.23,
            "MW": 0.88,
            "FT": 0.65,
            "WW": 0.6,
            "BS": 0.56
        }
    }, {
        "id": 210,
        "collectionId": 16,
        "type": "weapon",
        "weaponName": "SCAR-20",
        "skinName": "Stone Mosaico",
        "rarity": "base",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopbmkOVUw7PvRTj5D4t26h7-fnvvxDLfYkWNF18lwmO7Eu9ugiQDkrktuNj-hcNDEcgA3YA3T-ATsyObshZfqvc_NzXMyuiB04XnD30vg_9pwCWk",
        "prices": {
            "FN": 2.01,
            "MW": 0.87,
            "FT": 0.64,
            "WW": 0.59,
            "BS": 0.6
        }
    }, {
        "id": 211,
        "collectionId": 16,
        "type": "weapon",
        "weaponName": "R8 Revolver",
        "skinName": "Canal Spray",
        "rarity": "base",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopL-zJAt21uH3Yi19_8yklZm0gPbgNqnummJW4NFOhujT8om72FLjr0NrZzv0d4OWdgc3NVHU_VTswbu9g57pu5_IzCZk7Cl2tizbmQv330-IGFMoXg",
        "prices": {
            "FN": 2.37,
            "MW": 0.9,
            "FT": 0.66,
            "WW": 0.68,
            "BS": 0.56
        }
    }, {
        "id": 212,
        "collectionId": 16,
        "type": "weapon",
        "weaponName": "CZ75-Auto",
        "skinName": "Indigo",
        "rarity": "base",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotaDyfgZfwPz3eDNG5du5q4GFk8jzIb7IqWdY781lteXA54vwxgaw_xdlYzz0IobHcw83ZFrS-le6lOfphpPovcifnSBiu3N2tC3em0OpwUYb0c-wYbM",
        "prices": {
            "FN": 2.24,
            "MW": 0.93,
            "FT": 0.62,
            "WW": 0.59,
            "BS": 0.59
        }
    }, {
        "id": 213,
        "collectionId": 16,
        "type": "weapon",
        "weaponName": "Negev",
        "skinName": "Boroque Sand",
        "rarity": "base",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpouL-iLhFf2-r3ZzhM6ci5q5SKmcj4OrzZglRd6dd2j6fHrY2jjQDs_xVrNjugIdLHJAdoZFqF-gToyLzv1pLou87MyXdn6yB2-z-DyEQs36I3",
        "prices": {
            "FN": 2.2,
            "MW": 0.86,
            "FT": 0.66,
            "WW": 0.61,
            "BS": 0.59
        }
    }, {
        "id": 214,
        "collectionId": 16,
        "type": "weapon",
        "weaponName": "AK-47",
        "skinName": "Baroque Purple",
        "rarity": "industrial",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhoyszedDNH-NOJhJWZh_vxDLfYkWNF18lwmO7Eu9jx0VLjrUc5N2rzJ4LGJwFqZlnSqVe2x-rv0MS_v8vAn3Rl7CV2tCnD30vglFj7tRc",
        "prices": {
            "FN": 9.94,
            "MW": 4.52,
            "FT": 3.67,
            "WW": 3.41,
            "BS": 3.52
        }
    }, {
        "id": 215,
        "collectionId": 16,
        "type": "weapon",
        "weaponName": "SG 553",
        "skinName": "Candy Apple",
        "rarity": "industrial",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopb3wflFfwPz3YzhG08-xwdXYqPv9NLPFqWdQ-sJ0xOjArY2kjVDh-ENuYmDwd9CVcFU8aVnUq1a5w-vugsPvvsycmnpiuyU8pSGKIUzUm38",
        "prices": {
            "FN": 4.13,
            "MW": 3.77,
            "FT": 3.48,
            "WW": 3.52,
            "BS": 3.26
        }
    }, {
        "id": 216,
        "collectionId": 16,
        "type": "weapon",
        "weaponName": "P250",
        "skinName": "Dark Filigree",
        "rarity": "industrial",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopujwezhh3szadDN96N2kn7-HnvD8J4Tdl3lW7Ytyj73Fo42h0ATjqEI9YDr0LNPBcQ47Yg7QrAO5yO7v15e0vcmbySZgpGB8srebRKy8",
        "prices": {
            "FN": 3.99,
            "MW": 3.68,
            "FT": 3.51,
            "WW": 3.05,
            "BS": 3.23
        }
    }, {
        "id": 217,
        "collectionId": 16,
        "type": "weapon",
        "weaponName": "Tec-9",
        "skinName": "Orange Murano",
        "rarity": "industrial",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoor-mcjhoyszFZC9D4tOJm5KKmfDxDLfYkWNF18lwmO7Eu4_23lWx-RBtMGqid9eSe1BrYQ7W_wPrxrjv05K86pnAyicx6yUntinD30vgBy3Rp_0",
        "prices": {
            "FN": 4.02,
            "MW": 3.55,
            "FT": 3.58,
            "WW": 3.7,
            "BS": 3.14
        }
    }, {
        "id": 218,
        "collectionId": 16,
        "type": "weapon",
        "weaponName": "SSG 08",
        "skinName": "Orange Filigree",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopamie19f2-r3YzhM09OklY6Mksj4OrzZglRd6dd2j6eR8Ymt2gTmrUFvNWH6J4eScVA5Y1rS_Vnvkr_og5TovpTNynVi63Qq-z-DyIPwVZ6W",
        "prices": {
            "FN": 17.19,
            "MW": 15.23,
            "FT": 15.02,
            "WW": 13.92,
            "BS": 12.43
        }
    }, {
        "id": 219,
        "collectionId": 16,
        "type": "weapon",
        "weaponName": "G3SG1",
        "skinName": "Violet Murano",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposem2LFZf0v73fChQ7dK5q5aCmPvxJ4Tdn2xZ_Pp9i_vG8MKiiQCxrkM6MWmmJoCQeg4_Y1DTr1i8yey5gMK7tcjBmicyuCYh4CzVgVXp1njtVNIS",
        "prices": {
            "FN": 16.82,
            "MW": 16.69,
            "FT": 15.24,
            "WW": 8.98,
            "BS": 8.5
        }
    }, {
        "id": 220,
        "collectionId": 16,
        "type": "weapon",
        "weaponName": "Dual Berettas",
        "skinName": "Emerald",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpos7asPwJf0v33dDBH_t26kL-HnvD8J4Tdl3lW7Ysj3rvCot2sile2rkFuNTjwcdSTdlQ5MwnR_we6yefnjMXvtZ_JySZrpGB8sqNXdmQ_",
        "prices": {
            "FN": 18.95,
            "MW": 16.84
        }
    }, {
        "id": 221,
        "collectionId": 16,
        "type": "weapon",
        "weaponName": "P90",
        "skinName": "Baroque Red",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopuP1FAZt7OXNfzhW4-OkkYS0m_7zO6_ummpD78A_2evH996j3AWx-xFkNm3zd4bGdQ85MFzUqAO6xea61pa66cybnHQxsj5iuyjNJ_0gRQ",
        "prices": {
            "FN": 17.79,
            "MW": 16.1,
            "FT": 16.13,
            "WW": 13.26,
            "BS": 9.09
        }
    }, {
        "id": 222,
        "collectionId": 16,
        "type": "weapon",
        "weaponName": "MP9",
        "skinName": "Stained Glass",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6r8FAZt7ODccDRM6diJk4yKhOTLP7LWnn9u5MRjjeyPp9jx2Ve28hZrMmD6cY_HclM7Z17Tq1O6xLrpgMS5us7NyyRgvHEit2GdwUKOWM-s9Q",
        "prices": {
            "FN": 73.28,
            "MW": 59.62,
            "FT": 52.9,
            "WW": 29.98,
            "BS": 24.47
        }
    }, {
        "id": 223,
        "collectionId": 16,
        "type": "weapon",
        "weaponName": "MAC-10",
        "skinName": "Red Filigree",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7umeldf0v73YzhM086zkL-HnvD8J4Tdl3lW7Yso0rzEpY2sigPkrxBoYD_6JNTDIABraAuF-Fm9yObqg5O_tZudz3FgpGB8soYnZB1r",
        "prices": {
            "FN": 68.47,
            "MW": 55.54,
            "FT": 61.36,
            "WW": 60.97,
            "BS": 51.95
        }
    }, {
        "id": 224,
        "collectionId": 16,
        "type": "weapon",
        "weaponName": "Nova",
        "skinName": "Baroque Orange",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpouLWzKjhh3szedDNH-NPkq4yCkP_gDLfQhGxUppAgiO_A8dnxigey_0o6YWGgJI6VcFA6Z1HWrFe8yey6gZG0vcvNnSB9-n51zEgIcF4",
        "prices": {
            "FN": 71.85,
            "MW": 64.6,
            "FT": 62.75,
            "WW": 24.42,
            "BS": 23.67
        }
    }, {
        "id": 225,
        "collectionId": 16,
        "type": "weapon",
        "weaponName": "MAG-7",
        "skinName": "Cinquedea",
        "rarity": "classified",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7uifDhnwMzFcDoV09u6lZOYqPv9NLPFqWdQ-sJ0xOvE9IjwjgS1_RE4YW2mI9TEcVNqYV3RqFPsweft1pS7vZzAmidjvSU8pSGKxZM9qXA",
        "prices": {
            "FN": 667.83,
            "MW": 626,
            "FT": 587.5,
            "WW": 565.57,
            "BS": 449
        }
    }, {
        "id": 226,
        "collectionId": 16,
        "type": "weapon",
        "weaponName": "AWP",
        "skinName": "The Prince",
        "rarity": "covert",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FABz7PLfYQJH4t27kYy0m_7zO6_ummpD78A_2rnA8Nutile1_kNrN2rwIY7GdVQ2Y1mEqVe4x7vthJe-v5zPy3Jlsz5iuygIm51GTw",
        "prices": {
            "FN": 4532.97,
            "MW": 3927.2,
            "FT": 3345.54,
            "WW": 2897,
            "BS": 2873
        }
    },

    // Chop Shop
    {
        "id": 227,
        "collectionId": 17,
        "type": "weapon",
        "weaponName": "SCAR-20",
        "skinName": "Army Sheen",
        "rarity": "base",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopbmkOVUw7PLFTjxQ4cWJh4iCmfLLP7LWnn8fusEjjLHDoo-ljAW1_RVlZm3yLYOTJgdsNA7Q-1m8x--70cK0vJjNy2wj5HdbrGOTFQ",
        "prices": {
            "FN": 2.05,
            "MW": 1.08,
            "FT": 0.82
        }
    }, {
        "id": 228,
        "collectionId": 17,
        "type": "weapon",
        "weaponName": "CZ75-Auto",
        "skinName": "Army Sheen",
        "rarity": "base",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotaDyfgZf0v73cC9P9eOlnImFksj4OrzZgiUDvpIi3O2VrYn02A21_kFkZzimdofGJAc_Y1HSqAK9lObo1JO6vpjI1zI97bVJKki2",
        "prices": {
            "FN": 2.18,
            "MW": 1.08,
            "FT": 0.78
        }
    }, {
        "id": 229,
        "collectionId": 17,
        "type": "weapon",
        "weaponName": "M249",
        "skinName": "Impact Drill",
        "rarity": "base",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-jxcjhz3MzDdCRB49C5hpO0m_7zO6-flG0B7sAjiLzFoI6giwLh-EZkZmj6cdTEJ1NrNV6Eq1a8we3t18C47oOJlyVYUbyKnQ",
        "prices": {
            "FN": 3.66,
            "MW": 1.02,
            "FT": 0.83,
            "WW": 0.76,
            "BS": 0.76
        }
    }, {
        "id": 230,
        "collectionId": 17,
        "type": "weapon",
        "weaponName": "MAG-7",
        "skinName": "Seabird",
        "rarity": "base",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7uifDhz3MzJYChD09C_k4if2fHxNu2Ikm1UsZF12riUrYinjQOw8xdsZ2Cid9XBIA84ZgrYq1i8xb_xxcjr8GchYyc",
        "prices": {
            "FN": 3.91,
            "MW": 1.14,
            "FT": 0.87,
            "WW": 4.48,
            "BS": 0.73
        }
    }, {
        "id": 231,
        "collectionId": 17,
        "type": "weapon",
        "weaponName": "Desert Eagle",
        "skinName": "Night",
        "rarity": "industrial",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposr-kLAtl7ODHTjNL69Siq4yCkP_gfe2FkzgAvZAk2byWrYqmiwy2r0NkMGD1IoSXJFU8MlvUrlTvxubm18ei_MOel0hbkrY",
        "prices": {
            "FN": 40.01,
            "MW": 5.32,
            "FT": 4.42,
            "WW": 4.11,
            "BS": 4.34
        }
    }, {
        "id": 232,
        "collectionId": 17,
        "type": "weapon",
        "weaponName": "Galil AR",
        "skinName": "Urban Rubble",
        "rarity": "industrial",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbupIgthwczAaAJU7c6_l4GGmMjhIbnQmFRd4cJ5nqeRoY6hjAPk8hVtMmqncYeVe1U5YF_TrlTrl-vqhJ69vZ7Bm3BnvXUi-z-DyJO1o6Z1",
        "prices": {
            "FN": 10.17,
            "MW": 5.4,
            "FT": 4.23,
            "WW": 2.95,
            "BS": 3.88
        }
    }, {
        "id": 233,
        "collectionId": 17,
        "type": "weapon",
        "weaponName": "USP-S",
        "skinName": "Para Green",
        "rarity": "industrial",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo6m1FBRp3_bGcjhQ08-5q4uDlvz9DLzDk25f18l4jeHVu9mh3lbnrhFkZm-hdtCXI1NrMg3S8wS8yevtg5606MmYnHNgvyMjt3jD30vgAX7g-h0",
        "prices": {
            "FN": 11.17,
            "MW": 5.21,
            "FT": 4.47,
            "WW": 4.3,
            "BS": 4.42
        }
    }, {
        "id": 234,
        "collectionId": 17,
        "type": "weapon",
        "weaponName": "MAC-10",
        "skinName": "Fade",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7umeldf0vL3dzxG6eO6nYeDg7miZbqDxj8B7Z0n2-3E94mjjQTirRI9MTjyIIWQeg84Y1DS_lm3wOfom9bi6-g13CfU",
        "prices": {
            "FN": 20.39,
            "MW": 20.8
        }
    }, {
        "id": 235,
        "collectionId": 17,
        "type": "weapon",
        "weaponName": "P250",
        "skinName": "Whiteout",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopujwezhz3MzfeTRW6dOjgL-HnvD8J_XXkG8H7ZMg3uuXpoimiVLm_xJsZzj6coGScwZsZF3S-1Hvxrrvh5-6ot2Xnkz6GCrE",
        "prices": {
            "FN": 108.44,
            "MW": 17.97,
            "FT": 12.55,
            "WW": 12.37,
            "BS": 11.66
        }
    }, {
        "id": 236,
        "collectionId": 17,
        "type": "weapon",
        "weaponName": "MP7",
        "skinName": "Full Stop",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6ryFA957OXJYzRB7dG5q5KOk8j4OrzZgiUGuZQh0rCU8dz0jAXi-UVlYWClJ4CUdw82M1-G-FG_kOu605W7vJyY1zI97f93MsQX",
        "prices": {
            "FN": 11.82,
            "MW": 14.31,
            "FT": 12.69,
            "WW": 4.48,
            "BS": 3.95
        }
    }, {
        "id": 237,
        "collectionId": 17,
        "type": "weapon",
        "weaponName": "Five-SeveN",
        "skinName": "Nitro",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLOzLhRlxfbGTi5N09OklY6Mksj1MLjUmH9C18l4jeHVu46giVbnqhVtYj2mIo7HewZtMFCC-1nrwuvm1MW8v57BnXMyuHQls3vD30vg017TRpU",
        "prices": {
            "FN": 16.07,
            "MW": 14.2,
            "FT": 12.13,
            "WW": 6.54,
            "BS": 7.39
        }
    }, {
        "id": 238,
        "collectionId": 17,
        "type": "weapon",
        "weaponName": "CZ75-Auto",
        "skinName": "Emerald",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotaDyfgZf0v33dDBH_t26kL-HnvD8J_WElT8Gu5Eg27iVotv00Azg80ZtMDimIo-ceg45YAuCrFbtyenv1sW6ot2Xntd6B4y4",
        "prices": {
            "FN": 14.46,
            "MW": 13.84
        }
    }, {
        "id": 239,
        "collectionId": 17,
        "type": "weapon",
        "weaponName": "SG 553",
        "skinName": "Bulldozer",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopb3wflFfwPz3aDhO4NOhq4yCkP_gfbrXlG4BvJQk2OvF99-l0QTi-UBlamvzJIPGcAVqYgnZ81bvlO681JWi_MOecw4mcWU",
        "prices": {
            "FN": 82.37,
            "MW": 83.44,
            "FT": 64.91,
            "WW": 31.98,
            "BS": 37.9
        }
    }, {
        "id": 240,
        "collectionId": 17,
        "type": "weapon",
        "weaponName": "Dual Berettas",
        "skinName": "Duelist",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpos7asPwJf1OD3fDJW5Nmkq4-NqOfxMqndqW5d4dF0teXI8oThxgbk-UA5Z22hJYDDcgA6MlvS81e8k-jmhMTv6M_MnXZmuiUj4nvZzUapwUYbvvBeZN0",
        "prices": {
            "FN": 84.2,
            "MW": 65.09,
            "FT": 66.78,
            "WW": 14.5,
            "BS": 10.51
        }
    }, {
        "id": 241,
        "collectionId": 17,
        "type": "weapon",
        "weaponName": "Glock-18",
        "skinName": "Twilight Galaxy",
        "rarity": "classified",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbaqKAxf0v73cCxX7eOwmIWInOTLP7LWnn8f7ZJ13rjC8NjxilLkqBduaj_ycdSWJldvZAuF-gPsxuvs1MTovZTJymwj5Hd3abH-_Q",
        "prices": {
            "FN": 70.84,
            "MW": 55.48,
            "FT": 43.53
        }
    }, {
        "id": 242,
        "collectionId": 17,
        "type": "weapon",
        "weaponName": "M4A1-S",
        "skinName": "Hot Rod",
        "rarity": "classified",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO3mr-ZkvPLPu_Qx3hu5Mx2gv2P8I-g0VHtqUNlNmimLdCRdFdoYFCErwC4xLu6jJbpuc-dnydq73Jw5GGdwULhEbgmIQ",
        "prices": {
            "FN": 687.52,
            "MW": 588
        }
    },

    // Control
    {
        "id": 243,
        "collectionId": 18,
        "type": "weapon",
        "weaponName": "CZ75-Auto",
        "skinName": "Jungle Dashed",
        "rarity": "base",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotaDyfgZfwOP3ZTxS6eOlnI-Zg8j-JrXWmm5u5Mx2gv3--Y3nj1H6_kNtYmr0cIeTd1NqNQmB-FLokuq7h8e56cidn3di7HJxsyrczUblgwYMMLKsLJr0kw",
        "prices": {
            "FN": 0.21,
            "MW": 0.05,
            "FT": 0.04,
            "WW": 0.04,
            "BS": 0.04
        }
    }, {
        "id": 244,
        "collectionId": 18,
        "type": "weapon",
        "weaponName": "P250",
        "skinName": "Forest Night",
        "rarity": "base",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopujwezhoyszOfi9H_8iJmomMn-PLP7LWnn9u5MRjjeyP897wilbt-UBtYW-hcoOXcVdtY1jV-Fa7xOzvgsK075SdzSY16yYk7WGdwUJCxIijOQ",
        "prices": {
            "FN": 0.52,
            "MW": 0.06,
            "FT": 0.05,
            "WW": 0.04,
            "BS": 0.04
        }
    }, {
        "id": 245,
        "collectionId": 18,
        "type": "weapon",
        "weaponName": "MP9",
        "skinName": "Army Sheen",
        "rarity": "base",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6r8FAZt7PLafCR9_9S_moW0m_7zO6_ummpD78A_37CUp9zx0Qbm-hZpazund4DHdA86Z1HU-QLtkO7nh5Xuu5nPyXdjsz5iuyjphthmTg",
        "prices": {
            "FN": 0.11,
            "MW": 0.05,
            "FT": 0.05
        }
    }, {
        "id": 246,
        "collectionId": 18,
        "type": "weapon",
        "weaponName": "AUG",
        "skinName": "Surveillance",
        "rarity": "base",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot6-iFAZt7PrGZThO4NWxkY6IksjzIb7IqWdY781lteXA54vwxgSwqko5Nzj3dYaScAE_Y17TrAftxOa7hZW-6JjLm3o1unV2sC3al0CpwUYbb00YkA8",
        "prices": {
            "FN": 0.11,
            "MW": 0.05,
            "FT": 0.04,
            "WW": 0.04,
            "BS": 0.04
        }
    }, {
        "id": 247,
        "collectionId": 18,
        "type": "weapon",
        "weaponName": "XM1014",
        "skinName": "Charter",
        "rarity": "base",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgporrf0e1Y07PLFTjxX-NS5homfjsj2IbTGmFRd4cJ5ntbN9J7yjRrn_EJsYm71I9ORJgZvMwqE-lO6ybjm0MO66JubznE3snMgs3-JzUGxn1gSOcMHSyPh",
        "prices": {
            "FN": 0.12,
            "MW": 0.05,
            "FT": 0.04,
            "WW": 0.05,
            "BS": 0.04
        }
    }, {
        "id": 248,
        "collectionId": 18,
        "type": "weapon",
        "weaponName": "MAG-7",
        "skinName": "Carbon Fiber",
        "rarity": "industrial",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7uifDhh3szLcC9A49KJkomJkuXLP7LWnn9u5MRjjeyPp96jiVW2_0dsNm-mIoaRc1Q7M1yC-ljoyO7og5-57czBzHYx6XN35WGdwUIbo5XIWg",
        "prices": {
            "FN": 0.53,
            "MW": 0.58
        }
    }, {
        "id": 249,
        "collectionId": 18,
        "type": "weapon",
        "weaponName": "MP5-SD",
        "skinName": "Nitro",
        "rarity": "industrial",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6rwOANfwPz3fi9D4tuzq4GIlPL6J6iCqWdY781lteXA54vwxgS1_EZvZmCiLdWWJFQ6MgzT-lm6wejohpO0vZnIm3pkv3Yg7XranRGpwUYb5PeQDro",
        "prices": {
            "FN": 5.15,
            "MW": 0.6,
            "FT": 0.46,
            "WW": 0.54,
            "BS": 0.5
        }
    }, {
        "id": 250,
        "collectionId": 18,
        "type": "weapon",
        "weaponName": "Dual Berettas",
        "skinName": "Switch Board",
        "rarity": "industrial",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpos7asPwJf2-r3fyhP7tmkh7-MhfLxPYTdn2xZ_Pp9i_vG8MLw0QPkrUY9amjzJ4XEegNoMlCB-Vm-k--8g5S96czPynEy7HIg4HePgVXp1ovwSp6_",
        "prices": {
            "FN": 0.53,
            "MW": 0.6,
            "FT": 0.47,
            "WW": 0.52,
            "BS": 0.5
        }
    }, {
        "id": 251,
        "collectionId": 18,
        "type": "weapon",
        "weaponName": "Desert Eagle",
        "skinName": "The Bronze",
        "rarity": "industrial",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposr-kLAtl7PLFTjNX4d6zhpO0leX7PaHUqWdY781lteXA54vwxg3s_UNoZWigIdeTJ1A7Y1DW8gW8lb-70ZTutcmbnXcwsiQgt3iPzRWpwUYb3Mvq8Vw",
        "prices": {
            "FN": 0.54,
            "MW": 0.52,
            "FT": 0.54
        }
    }, {
        "id": 252,
        "collectionId": 18,
        "type": "weapon",
        "weaponName": "SCAR-20",
        "skinName": "Magna Carta",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopbmkOVUw7PvRTjxX-NS5homfjsjkJqnBmm5u5Mx2gv3--Y3nj1H6_URpZzildteTdFRsaFnY_FPok-i50MC5tJ6cyCBi7yMr7H_bnhC2iQYMMLLa6EBWUQ",
        "prices": {
            "FN": 4.32,
            "MW": 4.28,
            "FT": 4.28,
            "WW": 3.82,
            "BS": 4.03
        }
    }, {
        "id": 253,
        "collectionId": 18,
        "type": "weapon",
        "weaponName": "P2000",
        "skinName": "Dispatch",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovrG1eVcwg8zJfAJM-dG0kZKYqOXxN4TTmn5U18l4jeHVyoD0mlOx5UNvMWH0LYLHcgdqNViBq1Trw-a5hMC5vs_ImHoyuHJx5SqOyRSwiEtSLrs4oTr1U6Q",
        "prices": {
            "FN": 4.75,
            "MW": 4.34,
            "FT": 4.12,
            "WW": 3.8,
            "BS": 3.74
        }
    }, {
        "id": 254,
        "collectionId": 18,
        "type": "weapon",
        "weaponName": "SSG 08",
        "skinName": "Threat Detected",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopamie19f0v73eDNW6dC6nYeOmfTxDLTDl2VW7fp9g-7J4bP5iUazrl1rMmiicoGUdFQ3aA3RrwW7wOm-0cDouZ6cnSYw7CkityvZmxSwhxtOcKUx0kxNmVKx",
        "prices": {
            "FN": 4.73,
            "MW": 4.27,
            "FT": 4.12,
            "WW": 3.83,
            "BS": 4.17
        }
    }, {
        "id": 255,
        "collectionId": 18,
        "type": "weapon",
        "weaponName": "M4A4",
        "skinName": "Global Offensive",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhjxszLYjpN09-3mY-0m_7zO6_ummpD78A_0-yQ9Nqh3FLs8xA5ZDihI4XDdAVqZArZ-lG5wbzmjJ-_6s6byHYy6T5iuygVDs_aYw",
        "prices": {
            "FN": 4.42,
            "MW": 4.33,
            "FT": 4.07,
            "WW": 4.15,
            "BS": 4.16
        }
    }, {
        "id": 256,
        "collectionId": 18,
        "type": "weapon",
        "weaponName": "UMP-45",
        "skinName": "Crime Scene",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo7e1f1Jf0Ob3ZDBS09-knY2OqOT3NrXUqWdY781lteXA54vwxlC2-EQ4amCmctfBdgA8YAzUqFK8wuy908W86szBnXJn6Chz4y3VyhypwUYbW-ofo1k",
        "prices": {
            "FN": 35.3,
            "MW": 31.72,
            "FT": 31.11,
            "WW": 24.94,
            "BS": 29.42
        }
    }, {
        "id": 257,
        "collectionId": 18,
        "type": "weapon",
        "weaponName": "Five-SeveN",
        "skinName": "Berries And Cherries",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLOzLhRlxfbGTjxD09q3kIW0hfLwDLndg25u5Mx2gv3--Y3nj1H6qhdqN27zcoeRcFVtZAvT-wS7xunnjZa8tJXNznc2s3Yi4naMlhLmgAYMMLKbsU4JVA",
        "prices": {
            "FN": 33.89,
            "MW": 33.27
        }
    }, {
        "id": 258,
        "collectionId": 18,
        "type": "weapon",
        "weaponName": "FAMAS",
        "skinName": "Prime Conspiracy",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLuoKhRf0v73fyhP7tmkh7-GlvDxPa_QqWdY781lteXA54vwxlfnqUNkZTzwIIaSI1NsYAqDq1Dok-rmgsTvvsycnHQ36Sck5X2Mm0OpwUYbWBZ7nz8",
        "prices": {
            "FN": 34.2,
            "MW": 33.64,
            "FT": 32.43,
            "WW": 30.2,
            "BS": 21.85
        }
    }, {
        "id": 259,
        "collectionId": 18,
        "type": "weapon",
        "weaponName": "M4A1-S",
        "skinName": "Blue Phosphor",
        "rarity": "classified",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO3mb-Gw_alIITTmn5U-8h-gez--YXygECLpxIuNDztJobGcQ9tNV7Z_1m5kri60ZC1tcvInHM26HIi4CnZy0awgh0ZbuM7g-veFwtFvUBonA",
        "prices": {
            "FN": 361.54,
            "MW": 305.21
        }
    }, {
        "id": 260,
        "collectionId": 18,
        "type": "weapon",
        "weaponName": "USP-S",
        "skinName": "Target Acquired",
        "rarity": "classified",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo6m1FBRp3_bGcjhQ0927q4mFg_L4P7LWk2VS7fp8i-7E-5j0t1i9rBsoDDWiZtHAbANqaQ6CqAW6x-zohZe1vpXNz3VmuSB34yzayUO_gEpEPeI90PObGF2AR_seFzKVvVk",
        "prices": {
            "FN": 138.28,
            "MW": 121.34,
            "FT": 119.34,
            "WW": 132,
            "BS": 200.53
        }
    }, {
        "id": 261,
        "collectionId": 18,
        "type": "weapon",
        "weaponName": "AWP",
        "skinName": "Fade",
        "rarity": "covert",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FAZh7PLfYQJE7dizq4yCkP_gDLfQhGxUppF0076Z8N2miwfn8kU_YjvycYWXJw83YgmGqFW4w7281MW5ucnOwXF9-n51Xlh34oU",
        "prices": {
            "FN": 983.13,
            "MW": 1138
        }
    },

    // Gods & Monsters
    {
        "id": 262,
        "collectionId": 19,
        "type": "weapon",
        "weaponName": "MP7",
        "skinName": "Asterion",
        "rarity": "base",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6ryFBRw7P_JcyRQ5dKinL-HnvD8J_WBwzgJusAli7CZpdWsiwLj_0Q5YjjwcICWdFQ6ZgqE_FC5k-bng5Dtot2XnlfgDzbO",
        "prices": {
            "FN": 3.75,
            "MW": 3.51,
            "FT": 3.23,
            "WW": 2.94,
            "BS": 2.77
        }
    }, {
        "id": 263,
        "collectionId": 19,
        "type": "weapon",
        "weaponName": "AUG",
        "skinName": "Daedalus",
        "rarity": "base",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot6-iFBRw7P_JcyRQ5dKinNO0m_7zO6-fzj1SvMYm3evD9tms3w3nrkI-NW_wJtOUJ1A6aFnQ-1m8yL_ugZG7v4OJlyU4Xo3KVQ",
        "prices": {
            "FN": 3.82,
            "MW": 3.29,
            "FT": 3.24,
            "WW": 2.77,
            "BS": 2.93
        }
    }, {
        "id": 264,
        "collectionId": 19,
        "type": "weapon",
        "weaponName": "Dual Berettas",
        "skinName": "Moon in Libra",
        "rarity": "base",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpos7asPwJf2-r3azJG5d21xb-HnvD8J_XSk29X7ZAg3L_Aptqki1e3-BBvYTjxLI6RdVdqNQuEqVe4kLrtgMK7ot2Xnk2gPD0a",
        "prices": {
            "FN": 3.7,
            "MW": 3.32,
            "FT": 3.12,
            "WW": 2.98,
            "BS": 2.63
        }
    }, {
        "id": 265,
        "collectionId": 19,
        "type": "weapon",
        "weaponName": "Nova",
        "skinName": "Moon in Libra",
        "rarity": "base",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpouLWzKjhoyszSfjlL7d_nq4yCkP_gfbmBwD4Cvscg3LnCpNSl31DjqhJoMGGmLYaTdQE_NVuD_wK8l-m8gJ-i_MOeORssAvc",
        "prices": {
            "FN": 3.71,
            "MW": 3.39,
            "FT": 3.22,
            "WW": 2.84,
            "BS": 2.69
        }
    }, {
        "id": 266,
        "collectionId": 19,
        "type": "weapon",
        "weaponName": "Tec-9",
        "skinName": "Hades",
        "rarity": "industrial",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoor-mcjhoyszAcDlH_-O6nYeDg7mtMe6GwzxVsZUi3rGZrIqs21bt-0Q-Z2ynctDAclc9aVjSqFPrxby8m9bi60T40sRY",
        "prices": {
            "FN": 15.97,
            "MW": 13.95,
            "FT": 13.99,
            "WW": 12.54,
            "BS": 12.61
        }
    }, {
        "id": 267,
        "collectionId": 19,
        "type": "weapon",
        "weaponName": "P2000",
        "skinName": "Pathfinder",
        "rarity": "industrial",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovrG1eVcwg8zbYQJO7d6vhomFg_-mDLfYkWNFppcl2uuYpIn0igGwqEE5Yz_1LIaTJlBsNVqGqVTqwu290cPu6ZjKmyB9-n51PghpXi4",
        "prices": {
            "FN": 15.43,
            "MW": 13.55,
            "FT": 12.78
        }
    }, {
        "id": 268,
        "collectionId": 19,
        "type": "weapon",
        "weaponName": "AWP",
        "skinName": "Sun in Leo",
        "rarity": "industrial",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FA957OnHdTRD746JmImMn-O6ZezVlz4CvJYj2LqXpNmj0Vaw8kVvZG_7LNSScgJsZF_S-VO7w-e51Ij84srJoVgQJg",
        "prices": {
            "FN": 23.87,
            "MW": 16.47,
            "FT": 14.43,
            "WW": 13.99,
            "BS": 14.73
        }
    }, {
        "id": 269,
        "collectionId": 19,
        "type": "weapon",
        "weaponName": "M249",
        "skinName": "Shipping Forecast",
        "rarity": "industrial",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-jxcjhoyszSfjlL7d_lq4yCkP_gfemIz2hTuJFy27vCp9yn0ATt-ENpZWv2JIKUdAc9YVGGqAO3ku-6gZOi_MOeuW2MUv4",
        "prices": {
            "FN": 15.17,
            "MW": 13.73,
            "FT": 13.82,
            "WW": 10.99,
            "BS": 3.38
        }
    }, {
        "id": 270,
        "collectionId": 19,
        "type": "weapon",
        "weaponName": "UMP-45",
        "skinName": "Minotaur's Labyrinth",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo7e1f1Jf0Ob3fTxA9c6_mpSDqPv9NLPF2D0D651wi7iR9o2tiVDl_0VkY2CiJoeVcQc_aFyF_lS-wOfv0564tJjXiSw0CwOiIys",
        "prices": {
            "FN": 97.7,
            "MW": 85.8,
            "FT": 76.8,
            "WW": 7.92
        }
    }, {
        "id": 271,
        "collectionId": 19,
        "type": "weapon",
        "weaponName": "MP9",
        "skinName": "Pandora's Box",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6r8FAZh7OPJfzlN_t2JmImMn-O6a-iGk2oDsJcn2ruUp42kjgLh_xBuZGvxLI-VcgFvNFuD_gK9lOm61oj84spJBEff3Q",
        "prices": {
            "FN": 100.06,
            "MW": 93.73,
            "FT": 85.17
        }
    }, {
        "id": 272,
        "collectionId": 19,
        "type": "weapon",
        "weaponName": "G3SG1",
        "skinName": "Chronos",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposem2LFZf0Ob3cjVQ49K5h7-MxOTzYoTdn2xZ_IskjuuWrN2l3Azt80I_NzjzdtfHJw86aAmD_lW9l-7m18e07czAnCBgpGB8siJJ2IeN",
        "prices": {
            "FN": 194.5,
            "MW": 238.06,
            "FT": 241.06,
            "WW": 97.09
        }
    }, {
        "id": 273,
        "collectionId": 19,
        "type": "weapon",
        "weaponName": "M4A1-S",
        "skinName": "Icarus Fell",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO-jb-ClPbmJqjummJW4NE_3ujHpY2sigXl-UFoZGj7JYCXdgQ4YVnQ-1Lqxenn1MLpuszJz3tk6D5iuyjCqdNpmA",
        "prices": {
            "FN": 518.82,
            "MW": 463.19
        }
    }, {
        "id": 274,
        "collectionId": 19,
        "type": "weapon",
        "weaponName": "M4A4",
        "skinName": "Poseidon",
        "rarity": "classified",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhjxszYfi5H5di5mr-HnvD8J_WCkmkEvp0pi7zDodv3jAHj-UM5ZGr7INfHJAc9MlzV-FK_kO281pa_ot2XnrA-A3kA",
        "prices": {
            "FN": 1414.43,
            "MW": 1024.91,
            "FT": 979
        }
    }, {
        "id": 275,
        "collectionId": 19,
        "type": "weapon",
        "weaponName": "AWP",
        "skinName": "Medusa",
        "rarity": "covert",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FAR17P7NdShR7eO3g5C0m_7zO6-fxj5SvsMkib-W9N7zilLjr0NoYW_wI4OTelRvYwmC-FTrxeq915a074OJlyVOUzvCjQ",
        "prices": {
            "FN": 5978,
            "MW": 3467.2,
            "FT": 2795.84,
            "WW": 2179.21,
            "BS": 2142.26
        }
    },

    // Havoc
    {
        "id": 276,
        "collectionId": 20,
        "type": "weapon",
        "weaponName": "M249",
        "skinName": "Predator",
        "rarity": "base",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-jxcjhzw8zSdD9Q7d-3mb-HnvD8J4Tdl3lW7Yt12u2ToI2g0FLm_EU4ZTj2J47AI1Q2ZlyG-we6kL_qgpS46p7Om3Q2pGB8skhacMBR",
        "prices": {
            "FN": 0.63,
            "MW": 0.11,
            "FT": 0.08,
            "WW": 0.11,
            "BS": 0.1
        }
    }, {
        "id": 277,
        "collectionId": 20,
        "type": "weapon",
        "weaponName": "PP-Bizon",
        "skinName": "Death Rattle",
        "rarity": "base",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLO_JAlf2-r3fzhQ49i_lb-HnvD8J4Tdl3lW7YsniOzHo9msjAHg-0A9Zmr1JY7HdVRoZg7V_lW2levsgpW1uZzIzSRqpGB8spmba0Iz",
        "prices": {
            "FN": 0.11,
            "MW": 0.09,
            "FT": 0.1,
            "WW": 0.45
        }
    }, {
        "id": 278,
        "collectionId": 20,
        "type": "weapon",
        "weaponName": "Sawed-Off",
        "skinName": "Clay Ambush",
        "rarity": "base",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopbuyLgNv1fX3eSR9-NWxkZKYqOP1PYTdn2xZ_Pp9i_vG8MKjjQHmrhA-MW7xcNOTIFI-ZlDW-1W_lLi608W_6ZrJzXJqsilw4yvagVXp1osBprYy",
        "prices": {
            "FN": 0.18,
            "MW": 0.1,
            "FT": 0.08,
            "WW": 0.1,
            "BS": 0.1
        }
    }, {
        "id": 279,
        "collectionId": 20,
        "type": "weapon",
        "weaponName": "Nova",
        "skinName": "Rust Coat",
        "rarity": "industrial",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpouLWzKjhhwszbZThH4OO6nYeDg8j4MqnWkyUBucF02rmV9tqh3lay-kNkMGv2d4CUJw42MA7S81a8we_pgcLtuJrP1zI97aancQx_",
        "prices": {
            "FN": 0.81,
            "MW": 0.6,
            "FT": 0.51,
            "WW": 0.57,
            "BS": 0.56
        }
    }, {
        "id": 280,
        "collectionId": 20,
        "type": "weapon",
        "weaponName": "R8 Revolver",
        "skinName": "Phoenix Marker",
        "rarity": "industrial",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopL-zJAt21uH3cDB9_NS5kY6Cj8jgMrzCqWld_cBOhuDG_ZjKhFWmrBZyMGD7d4WUIw84ZAvYqVm3l7vu1pHp6ZiazHVkvnRzsC2IyRDmhEtOafsv26Ktj-aCYA",
        "prices": {
            "FN": 0.77,
            "MW": 0.62,
            "FT": 0.51,
            "WW": 0.69,
            "BS": 0.6
        }
    }, {
        "id": 281,
        "collectionId": 20,
        "type": "weapon",
        "weaponName": "MP7",
        "skinName": "Vault Heist",
        "rarity": "industrial",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6ryFAZt7PvNeC5W08y6lY6YqO7xP7fegVRd4cJ5ntbN9J7yjRrhr0dtZWnzJYSRdlc8YluDrlPryLi61MTvuJ3NzyBmvSgqtnyPnxC2n1gSOYVSHZ9Q",
        "prices": {
            "FN": 0.72,
            "MW": 0.65,
            "FT": 0.51,
            "WW": 0.58,
            "BS": 0.53
        }
    }, {
        "id": 282,
        "collectionId": 20,
        "type": "weapon",
        "weaponName": "UMP-45",
        "skinName": "Houndstooth",
        "rarity": "industrial",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo7e1f1Jf2-r3eTJX4tilgI-Eg__LManegWVu5Mx2gv3--Y3nj1H6rUpsMmulIIDGJ1Q-NQ3Tq1PqlOrr0Z--vJ3Nm3EyviJxsy7UmkCwhAYMMLK8DEUNhA",
        "prices": {
            "FN": 0.79,
            "MW": 0.58,
            "FT": 0.5,
            "WW": 0.54,
            "BS": 0.58
        }
    }, {
        "id": 283,
        "collectionId": 20,
        "type": "weapon",
        "weaponName": "Tec-9",
        "skinName": "Phoenix Chalk",
        "rarity": "industrial",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoor-mcjhoyszYeTJH4tWuq5SKkOTLP7Ldl2hu5Mx2gv3--Y3nj1H6qhY9Y2uhJ4WSJwc5MFzV_lm8l-_uh5S8uJqazndl6Clx7X7bmReziAYMMLK-41sItg",
        "prices": {
            "FN": 0.22,
            "MW": 0.1,
            "FT": 0.09,
            "WW": 0.11,
            "BS": 0.1
        }
    }, {
        "id": 284,
        "collectionId": 20,
        "type": "weapon",
        "weaponName": "Dual Berettas",
        "skinName": "Heist",
        "rarity": "industrial",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpos7asPwJf0v73eThL_8iJhIyKmeTLNKnUk2Vu5Mx2gv3--Y3nj1H6qkc_ZDigcNeQdVRoMg2BqVfsxbvtgJG8tM-fnXZrsiF37C2IyxDigwYMMLJm5QP2zg",
        "prices": {
            "FN": 0.19,
            "MW": 0.1,
            "FT": 0.08,
            "WW": 0.15,
            "BS": 0.08
        }
    }, {
        "id": 285,
        "collectionId": 20,
        "type": "weapon",
        "weaponName": "Desert Eagle",
        "skinName": "Night Heist",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposr-kLAtl7PLFTjVH5c-iq5CHlvnnDKvEhHtd7fp9g-7J4bP5iUazrl1rYG6ldoCXdgQ_aQzR_lC2xLvtgJ_ptcvJmCRhunF35HnfmUS31BgecKUx0pI1kjtX",
        "prices": {
            "FN": 6.38,
            "MW": 4.96,
            "FT": 4.03,
            "WW": 5.15,
            "BS": 4.14
        }
    }, {
        "id": 286,
        "collectionId": 20,
        "type": "weapon",
        "weaponName": "P90",
        "skinName": "Tiger Pit",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopuP1FAZt7OfBdjhQ_-O0ho-cmcj4OrzZglRd6dd2j6eZoN_z0FLh-kZtYWH2cIaSJFc3NFjT_1O5k7jugcLvuJ3KzXUwuCV3-z-DyPmghlDB",
        "prices": {
            "FN": 4.59,
            "MW": 4.2,
            "FT": 3.89,
            "WW": 4.37,
            "BS": 3.92
        }
    }, {
        "id": 287,
        "collectionId": 20,
        "type": "weapon",
        "weaponName": "P250",
        "skinName": "Bengal Tiger",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopujwezhoyszYI2gS08i_k4WZqPv9NLPFqWdQ-sJ0xOqY9Irw2QztrktoMm-ncoWWdwE2YFvYqwfqlb-9hZC-uZ-cy3Rhu3I8pSGKO0PMg-M",
        "prices": {
            "FN": 16.88,
            "MW": 4.49,
            "FT": 3.99,
            "WW": 3.68,
            "BS": 3.41
        }
    }, {
        "id": 288,
        "collectionId": 20,
        "type": "weapon",
        "weaponName": "Negev",
        "skinName": "Phoenix Stencil",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpouL-iLhFf2-r3YTVN6dK_jL-flvDnDKnUklRd4cJ5ntbN9J7yjRrir0s5NmmicI7AdQJrMFmB_AK4kLjphZ6-uJnNzCA3uyQn5Srem0Tkn1gSOV96OOax",
        "prices": {
            "FN": 4.82,
            "MW": 4.26,
            "FT": 3.85,
            "WW": 3.98,
            "BS": 3.55
        }
    }, {
        "id": 289,
        "collectionId": 20,
        "type": "weapon",
        "weaponName": "Galil AR",
        "skinName": "Phoenix Blacklight",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbupIgthwczbYQJS5NOzmomTqOP1NKjuhn5D-Ml0teXI8oTht1i1uRQ5fW-hI4eXewRvM1rR_1m-yejv15fo6JrIzyFm6XUr4HmPzBy-gBtOO7ZxxavJgVS957U",
        "prices": {
            "FN": 36.35,
            "MW": 29.57,
            "FT": 24.39,
            "WW": 18.92,
            "BS": 16.68
        }
    }, {
        "id": 290,
        "collectionId": 20,
        "type": "weapon",
        "weaponName": "Glock-18",
        "skinName": "Franklin",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbaqKAxf0Ob3fDJM6cWJk4yElPzLP7LWnn9u5MRjjeyPrNSj3lDsrhJrN2ChIdWQdA89Zl-Brwe7l7zujMTu75rNnCNnuiUqsWGdwUJyxdOSDQ",
        "prices": {
            "FN": 30.02,
            "MW": 27.95,
            "FT": 24.49,
            "WW": 35.6
        }
    }, {
        "id": 291,
        "collectionId": 20,
        "type": "weapon",
        "weaponName": "MAC-10",
        "skinName": "Hot Snakes",
        "rarity": "classified",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7umeldf1OD3fDxBvYyJh46KnPLLP7LWnn9u5MRjjeyPpY6s2VLm-hc5NWn1dYWcJlA6Yg3Z-Qe4krrtgMXqvZ6czSc37HQj7GGdwUIYD18Gtg",
        "prices": {
            "FN": 207.26,
            "MW": 173,
            "FT": 112.19,
            "WW": 109,
            "BS": 100
        }
    }, {
        "id": 292,
        "collectionId": 20,
        "type": "weapon",
        "weaponName": "AWP",
        "skinName": "Silk Tiger",
        "rarity": "classified",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FAZt7OfBdjhQ_-O0mJWOqPv9NLPFqWdQ-sJ0xL2Sodqs0QG1_kBkYTqhLNOTIFc4Yl7T-VTowrjr0J-4tZTBmHZnvXY8pSGKq0OELoA",
        "prices": {
            "FN": 266.6,
            "MW": 211.23,
            "FT": 123.61,
            "WW": 127,
            "BS": 68.91
        }
    }, {
        "id": 293,
        "collectionId": 20,
        "type": "weapon",
        "weaponName": "AK-47",
        "skinName": "X-Ray",
        "rarity": "covert",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJegJa_t2vq4yCkP_gDLfQhGxUpsQg3LuQoI733APlrxI_azqgJoOSIQc9NQqD-lLrw-rqhJLtu8vJyHp9-n51JfbHn_c",
        "prices": {
            "FN": 1867.56,
            "MW": 1369.15,
            "FT": 817.47,
            "WW": 411.84,
            "BS": 237.17
        }
    },

    // Norse
    {
        "id": 294,
        "collectionId": 21,
        "type": "weapon",
        "weaponName": "FAMAS",
        "skinName": "Night Borre",
        "rarity": "base",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLuoKhRfwOP3ejNN-M-Jloyeksj4OrzZglRd6dd2j6eQ9Nr02lfirRZlY2j6LNeVdwU6YFiE-Ve6lbrrjZK4vc_MyCQxu3El-z-DyLpEJ3gg",
        "prices": {
            "FN": 2.76,
            "MW": 2.31,
            "FT": 2.39,
            "WW": 1.75,
            "BS": 2.05
        }
    }, {
        "id": 295,
        "collectionId": 21,
        "type": "weapon",
        "weaponName": "SSG 08",
        "skinName": "Red Stone",
        "rarity": "base",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopamie19fwPz3YyhM6eOlgI-Fksj4OrzZglRd6dd2j6eRpdT2igewrxI6Ymn1dYaUe1RtZV3R_lLqx--915TpuZ_JmiNmunYm-z-DyH0ug_0B",
        "prices": {
            "FN": 3.77,
            "MW": 2.5,
            "FT": 2.4,
            "WW": 2,
            "BS": 2.07
        }
    }, {
        "id": 296,
        "collectionId": 21,
        "type": "weapon",
        "weaponName": "MP7",
        "skinName": "Scorched",
        "rarity": "base",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6ryFBRw7PfJYS1O6eO6nYeDg8j4MqnWkyVVv510iLyRpYn32wLiqUduMmz7IYGTcAM2Yw7T_lG-yObsgMLotZnP1zI97Xclu5bj",
        "prices": {
            "FN": 2.76,
            "MW": 2.38,
            "FT": 2.21,
            "WW": 2.26,
            "BS": 2.07
        }
    }, {
        "id": 297,
        "collectionId": 21,
        "type": "weapon",
        "weaponName": "Galil AR",
        "skinName": "Tornado",
        "rarity": "base",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbupIgthwczbfgJW4864lYSEqPv9NLPFqWdQ-sJ0xOjH8Y2k2gLi80RqZWihI4-VdVI4aFHT-Ae4x7_rgMK_6ZqawXdmvSM8pSGKKL0esGA",
        "prices": {
            "FN": 3.45,
            "MW": 2.47,
            "FT": 2.33,
            "WW": 2.22,
            "BS": 2.03
        }
    }, {
        "id": 298,
        "collectionId": 21,
        "type": "weapon",
        "weaponName": "SG 553",
        "skinName": "Barricade",
        "rarity": "base",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopb3wflFfwOP3cC5F7c6yq5eKm_vLP7LWnn9u5MRjjeyPoY6k2QLs_xVuaj_xJYOWIwNrMAnXqFLtwOjt0JHp6JvPz3cyuiQntGGdwUL_0BBI6Q",
        "prices": {
            "FN": 2.86,
            "MW": 2.43,
            "FT": 2.36,
            "WW": 2.05,
            "BS": 2
        }
    }, {
        "id": 299,
        "collectionId": 21,
        "type": "weapon",
        "weaponName": "Dual Berettas",
        "skinName": "Pyre",
        "rarity": "industrial",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpos7asPwJf2-r3djhO_Nm4q4SKhfzLP7LWnn9u5MRjjeyPpdqhilexqBI-YDqgLIGUdgZrZQnWr1fowbjsgcXvv8jJyXRkv3Ql4mGdwUJHp7vkig",
        "prices": {
            "FN": 14.46,
            "MW": 14.4,
            "FT": 13.97,
            "WW": 12.94,
            "BS": 12.62
        }
    }, {
        "id": 300,
        "collectionId": 21,
        "type": "weapon",
        "weaponName": "MAG-7",
        "skinName": "Chainmail",
        "rarity": "industrial",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7uifDhh3szLeTxL4tG3nYy0m_7zO6_ummpD78A_j7_Fo4mj3Ayy_BFpammlIoLEJAQ2YV2G_1i8xu--hpC46pyby3BruT5iuyjnM2Eonw",
        "prices": {
            "FN": 15.37,
            "MW": 14.46,
            "FT": 12.88
        }
    }, {
        "id": 301,
        "collectionId": 21,
        "type": "weapon",
        "weaponName": "USP-S",
        "skinName": "Pathfinder",
        "rarity": "industrial",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo6m1FBRp3_bGcjhQ08-mq4yKle7mOrXFnjlu5Mx2gv3--Y3nj1H6_UFqam6mIYSUclBrYlqGqVDsxLy8hsK5vpibyHtk7iUh4H_VlhC31QYMMLKmH8kw5w",
        "prices": {
            "FN": 14.87,
            "MW": 14.62,
            "FT": 14.87
        }
    }, {
        "id": 302,
        "collectionId": 21,
        "type": "weapon",
        "weaponName": "M4A1-S",
        "skinName": "Moss Quartz",
        "rarity": "industrial",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO3mb-Ihe7nJ7rdmmJL7cFOjujT_rPymlGxpSwwOj6rYOnJI0RpNEaE8wfsl-fs0cC46s_KwSZguiJz4iuJl0e1hhBPPbBohv2eSlnPDqRPAuDcUZ8bvNY9",
        "prices": {
            "FN": 16.16,
            "MW": 15.01,
            "FT": 13.57,
            "WW": 13.34,
            "BS": 13.89
        }
    }, {
        "id": 303,
        "collectionId": 21,
        "type": "weapon",
        "weaponName": "MAC-10",
        "skinName": "Copper Borre",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7umeldf0v73ejNN-M-JlpKEgPnLP7LWnn9u5MRjjeyP9tWj0ADi8xVsNWCld4OXdFA5MFnSrgW2kOm5gMPu6JqfmiFhvigj7GGdwUJ991kjOg",
        "prices": {
            "FN": 65.14,
            "MW": 54.09,
            "FT": 62.18,
            "WW": 70.96,
            "BS": 21.09
        }
    }, {
        "id": 304,
        "collectionId": 21,
        "type": "weapon",
        "weaponName": "XM1014",
        "skinName": "Frost Borre",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgporrf0e1Y07PLFTjZM48ilq5OCm-HxIYTdn2xZ_Pp9i_vG8MKi21fj_0A5Z2H1I9DDIQY7Y12CqVa3kurnjcLvtZ2amnNh73Un5i6OgVXp1j87Anfe",
        "prices": {
            "FN": 65.6,
            "MW": 55.97,
            "FT": 61.08,
            "WW": 28.52,
            "BS": 21.09
        }
    }, {
        "id": 305,
        "collectionId": 21,
        "type": "weapon",
        "weaponName": "CZ75-Auto",
        "skinName": "Emerald Quartz",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotaDyfgZf0v73ci9b_8i3mIyCjfLwDLzDk25f18l4jeHVyoD0mlOx5UU9Nmj6JtXHJAI5M1qDqFC_lL3rgsDv6M6bmCZjvXEktHjVyUe01x9SLrs4B1ojU_U",
        "prices": {
            "FN": 66.13,
            "FT": 59.84,
            "WW": 24.88,
            "BS": 47.1
        }
    }, {
        "id": 306,
        "collectionId": 21,
        "type": "weapon",
        "weaponName": "SCAR-20",
        "skinName": "Brass",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopbmkOVUw7PLZTj9Q7c-lq4yCkP_gDLfQhGxUppFz3rCW893w3FXg-RJpMG_3IYedc1c_ZFvUqQK8ye3thcO_6pvBzXB9-n51bjDLWd0",
        "prices": {
            "FN": 62.67,
            "MW": 57.32,
            "FT": 61.54,
            "WW": 55.76,
            "BS": 50.79
        }
    }, {
        "id": 307,
        "collectionId": 21,
        "type": "weapon",
        "weaponName": "P90",
        "skinName": "Astral Jörmungandr",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopuP1FAZt7PnHYzB97tCjkb-HnvD8J4Tdl3lW7YsljriUpN6kjQW1-UppYWnxdoKTIAE6ZFqC-gC3w-m8hZa178ibm3FkpGB8svtsvVyp",
        "prices": {
            "FN": 201.29,
            "MW": 185,
            "FT": 211.37,
            "WW": 194.8,
            "BS": 214.54
        }
    }, {
        "id": 308,
        "collectionId": 21,
        "type": "weapon",
        "weaponName": "Desert Eagle",
        "skinName": "Emerald Jörmungandr",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposr-kLAtl7PLFTjdN_tGJk5KOkvnLP7LWnn9u5MRjjeyP8Y6k2ADhrRY5YzilJoXDcA5sM1yBrAfqwOjr0Za76Z6YmCY3viJ3tmGdwUKSaOiVgw",
        "prices": {
            "FN": 210.51,
            "MW": 192.23,
            "FT": 194.55,
            "WW": 219.67,
            "BS": 171.71
        }
    }, {
        "id": 309,
        "collectionId": 21,
        "type": "weapon",
        "weaponName": "AUG",
        "skinName": "Flame Jörmungandr",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot6-iFAZt7PnHYzB94863moeOqPv9NLPFqWdQ-sJ0xLjF896t2AzhqkI-MGjzctCScABsaQnV_ge7kufr1sXtvZXBySQ3uyk8pSGK0PqJzoA",
        "prices": {
            "FN": 192.59,
            "MW": 192,
            "FT": 185,
            "WW": 187.06,
            "BS": 179.78
        }
    }, {
        "id": 311,
        "collectionId": 21,
        "type": "weapon",
        "weaponName": "Negev",
        "skinName": "Mjölnir",
        "rarity": "classified",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpouL-iLhFf1OD3fzhF6cqJgIiEhcj4OrzZglRd6dd2j6eUpdqliQO18kJvMWj0JYDDI1A5NFDRr1C6xLrpgMO87pnJwXMxuCB0-z-DyJcgKI6K",
        "prices": {
            "FN": 1723,
            "MW": 1753,
            "FT": 1588,
            "WW": 1325.03,
            "BS": 1275.59
        }
    }, {
        "id": 310,
        "collectionId": 21,
        "type": "weapon",
        "weaponName": "AWP",
        "skinName": "Gungnir",
        "rarity": "covert",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FABz7PLfYQJF-dKxmomZqPv9NLPFqWdQ-sJ0xO-ZpY-n0AHt_0M6ZGygd9eQegE9YAzYrwDqx7y7jcTpvc7IwSdgsnI8pSGKcZwC8Qk",
        "prices": {
            "FN": 11655,
            "MW": 10124,
            "FT": 7982,
            "WW": 6942,
            "BS": 6435
        }
    },

    // St. Marc
    {
        "id": 312,
        "collectionId": 22,
        "type": "weapon",
        "weaponName": "M249",
        "skinName": "Jungle",
        "rarity": "base",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-jxcjhz3MzCZDNF4NmJmImMn-PLP7rDkW4fucAk2LCWp9umiQSw_RVrY27wI9fAIQBsN1CDr1K5wbq6g8S0u8uYnWwj5HcjRLVAaw",
        "prices": {
            "FN": 2.8,
            "MW": 1.64,
            "FT": 1.51,
            "WW": 1.39,
            "BS": 1.34
        }
    }, {
        "id": 313,
        "collectionId": 22,
        "type": "weapon",
        "weaponName": "Sawed-Off",
        "skinName": "Jungle Thicket",
        "rarity": "base",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopbuyLgNv1fX3Yi19_N26mb-MhfLxPYTdn2xZ_Pp9i_vG8MLz0FLt_hU6ZGz0dYScclI3Z17Z-Ae5yb3v1sW0vM7AmiAw7idz5SmIgVXp1lOJSSE0",
        "prices": {
            "FN": 1.79,
            "MW": 1.5,
            "FT": 1.5,
            "WW": 1.41,
            "BS": 1.44
        }
    }, {
        "id": 314,
        "collectionId": 22,
        "type": "weapon",
        "weaponName": "PP-Bizon",
        "skinName": "Seabird",
        "rarity": "base",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLO_JAlfwPz3cCxX7eOlgI2KhfTLP7LWnn9u5MRjjeyPpNWl2wKx_xI5Mj-nddPEIw9tY1qDrlHsyei-05O9uJjPyyFivSYjtmGdwUKrj1CyEg",
        "prices": {
            "FN": 1.83,
            "MW": 1.6,
            "FT": 1.47,
            "WW": 1.39,
            "BS": 1.31
        }
    }, {
        "id": 315,
        "collectionId": 22,
        "type": "weapon",
        "weaponName": "MAC-10",
        "skinName": "Surfwood",
        "rarity": "base",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7umeldfwOP3ZSpL68-JloWKlP_LP7LWnn9u5MRjjeyPrd720Q2y_BI9amj2do6ScgI9NFnW_QO6w7vtgMe56s-cyydr6SF352GdwUJowyTyVQ",
        "prices": {
            "FN": 1.85,
            "MW": 1.64,
            "FT": 1.55,
            "WW": 1.4,
            "BS": 1.31
        }
    }, {
        "id": 316,
        "collectionId": 22,
        "type": "weapon",
        "weaponName": "MP5-SD",
        "skinName": "Bamboo Garden",
        "rarity": "base",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6rwOANf2-r3czxP7tO5q5OfmvbmMITdn2xZ_Pp9i_vG8MKkjATj_kJtMWjwLYWTclI-NFHX-Qe2kum6hpe66M7Iznth6yJw7X7fgVXp1qn1Wf0g",
        "prices": {
            "FN": 1.9,
            "MW": 1.52,
            "FT": 1.4,
            "WW": 1.43,
            "BS": 1.45
        }
    }, {
        "id": 317,
        "collectionId": 22,
        "type": "weapon",
        "weaponName": "Tec-9",
        "skinName": "Rust Leaf",
        "rarity": "industrial",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoor-mcjhzw8zEdDxE09OklY6Mksj4OrzZglRd6dd2j6eY8Yn00QHkrRdsZz_1LI-QcgFvNQuC-ADtk-2505S5uJ2fyHs37HZ3-z-DyKUdt_hl",
        "prices": {
            "FN": 11.09,
            "MW": 10.43,
            "FT": 10.65,
            "WW": 8.45,
            "BS": 9.48
        }
    }, {
        "id": 318,
        "collectionId": 22,
        "type": "weapon",
        "weaponName": "XM1014",
        "skinName": "Banana Leaf",
        "rarity": "industrial",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgporrf0e1Y07PvRTjFH7dqJk5KOkvnLP7LWnn9u5MRjjeyPptiiiQHgqhZsMGHxLYTDJABqMl3Q_AXtl-_ohZTo6Z_JzXIyvSQn7GGdwULLooIxog",
        "prices": {
            "FN": 10.73,
            "MW": 10.78,
            "FT": 10.67,
            "WW": 9.3,
            "BS": 8.95
        }
    }, {
        "id": 319,
        "collectionId": 22,
        "type": "weapon",
        "weaponName": "M4A4",
        "skinName": "Dark Blossom",
        "rarity": "industrial",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhzw8zKZDl97tCjkb-HnvD8J4Tdl3lW7Yt32bjDrdSn2gK3_ERoa2n2II7EclU_NF7S_1m_k7u-jcC_tZnPwHJlpGB8svQRy-TR",
        "prices": {
            "FN": 11.9,
            "MW": 10.5,
            "FT": 10,
            "WW": 9.79,
            "BS": 9.46
        }
    }, {
        "id": 320,
        "collectionId": 22,
        "type": "weapon",
        "weaponName": "P90",
        "skinName": "Sunset Lily",
        "rarity": "industrial",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopuP1FBRw7PHEfjJP09OklY6Mksj4OrzZglRd6dd2j6fEpomk3AXs_xdpN2ryd4-RegJsZl7Z_QW5l-3n1Mfq7Z6YzXVq7yIi-z-DyHvJLtZN",
        "prices": {
            "FN": 12.09,
            "MW": 11.36,
            "FT": 10.99,
            "WW": 8.26,
            "BS": 9.09
        }
    }, {
        "id": 321,
        "collectionId": 22,
        "type": "weapon",
        "weaponName": "FAMAS",
        "skinName": "Sundown",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLuoKhRfwOP3YTxO4eOlgY6YkuPLP7LWnn9u5MRjjeyPrN6hile1-hA5ZTr6JIWRJgA3Z1uD8lDtxOe51JG-7Z-YzSBnv3Ei4mGdwUL7PMuKHQ",
        "prices": {
            "FN": 49.01,
            "MW": 49.62,
            "FT": 45.95,
            "WW": 21.93,
            "BS": 30.4
        }
    }, {
        "id": 322,
        "collectionId": 22,
        "type": "weapon",
        "weaponName": "MP7",
        "skinName": "Teal Blossom",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6ryFBRw7PHddQJF_tmzmr-HnvD8J4Tdl3lW7YsoiLmXoN6ijAHj8hJsZ26hIoGTJwI3YVjRrAC_x7zsjJS8tMvAyHZqpGB8siXbf5vf",
        "prices": {
            "FN": 52.77,
            "MW": 41.07,
            "FT": 42.1,
            "WW": 22.96,
            "BS": 12.77
        }
    }, {
        "id": 323,
        "collectionId": 22,
        "type": "weapon",
        "weaponName": "Five-SeveN",
        "skinName": "Crimson Blossom",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLOzLhRlxfbGTjVb096jkL-ZkvPLP7LWnn9u5MRjjeyP8d2h0VK1qEpkNjjxJ4CRew9rYw6B-1S3k-btgZS87ZWcnCY27HF24WGdwUKMg_vQ7Q",
        "prices": {
            "FN": 50.23,
            "MW": 41.45,
            "FT": 41.55,
            "WW": 34.51,
            "BS": 31.47
        }
    }, {
        "id": 324,
        "collectionId": 22,
        "type": "weapon",
        "weaponName": "UMP-45",
        "skinName": "Day Lily",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo7e1f1Jf2-r3czFN49GJhoWPqPv9NLPFqWdQ-sJ0xOqT89Wt3QLt_UVkZGqiJ4KRI1Q9Z16DqAe_wr_p08W67svJyXpi7HM8pSGKzJC-zvI",
        "prices": {
            "FN": 49.39,
            "MW": 51.19,
            "FT": 43.32,
            "WW": 18.48,
            "BS": 19.41
        }
    }, {
        "id": 325,
        "collectionId": 22,
        "type": "weapon",
        "weaponName": "AUG",
        "skinName": "Midnight Lily",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot6-iFAZt7PHEfjJP0966gYW0m_7zO6_ummpD78A_2rvC992kiQztrhZpMm6lJ9KWe1BsNAvR_1a7xru91JW4upTInHdhvD5iuygSUibTow",
        "prices": {
            "FN": 170.52,
            "MW": 166,
            "FT": 158,
            "WW": 125.73,
            "BS": 123.14
        }
    }, {
        "id": 326,
        "collectionId": 22,
        "type": "weapon",
        "weaponName": "Glock-18",
        "skinName": "Synth Leaf",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbaqKAxf2-r3fThD6uO0mJWOqPv9NLPFqWdQ-sJ0xLjDpd2ii1fsr0dpam2nLYSRdwU5N1HZ-Fnqk-rtgJXq6pvLwXBrvnM8pSGKZyeyDW0",
        "prices": {
            "FN": 169,
            "MW": 164.75,
            "FT": 151.65,
            "WW": 120.01,
            "BS": 136.03
        }
    }, {
        "id": 327,
        "collectionId": 22,
        "type": "weapon",
        "weaponName": "SSG 08",
        "skinName": "Sea Calico",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopamie19f2-r3dzFN-9mkh7-Yg_r1IbjummJW4NFOhujT8om73AzmrhI-MW2iJoeTcQU4aF2GrADvk-m7g5Xtu5qYnCdr6CEqtH6LyQv330_eG55pxQ",
        "prices": {
            "FN": 162.76,
            "MW": 165,
            "FT": 132,
            "WW": 69.98,
            "BS": 28.02
        }
    }, {
        "id": 328,
        "collectionId": 22,
        "type": "weapon",
        "weaponName": "MP9",
        "skinName": "Wild Lily",
        "rarity": "classified",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6r8FAR17P7YKAJL_9C3moS0kfv7IbrdqWdY781lteXA54vwxlDsrUVvYG2iJo-Vd1Q_ZV6ErlO_wem6gJ--vJvBmyYxuSMhs3vUzEGpwUYbWcvqfhg",
        "prices": {
            "FN": 1544.67,
            "MW": 1488.38,
            "FT": 1277,
            "WW": 813.24,
            "BS": 691.27
        }
    }, {
        "id": 329,
        "collectionId": 22,
        "type": "weapon",
        "weaponName": "AK-47",
        "skinName": "Wild Lotus",
        "rarity": "covert",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJegJL_9C3moS0kfv7IbrdqWdY781lteXA54vwxgXn-0A5ZG-nJNeSdVdsYF7Uq1W4kOm-18e57c_InSEy7CFztiqImUepwUYbUpyroPk",
        "prices": {
            "FN": 10906,
            "MW": 8114,
            "FT": 5720,
            "WW": 3868,
            "BS": 2386
        }
    },

    // The Rising Sun
    {
        "id": 330,
        "collectionId": 23,
        "type": "weapon",
        "weaponName": "PP-Bizon",
        "skinName": "Bamboo Print",
        "rarity": "base",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLO_JAlf2-r3czxP7tO5q4qemfD4NoTYmGBu5Mx2gv2PpYqsjVHi-kI5ajv1IoHAewY3Y1uF8wftwbq-jZ-4v53BwXMy7ydzsGGdwUKILte3Vg",
        "prices": {
            "FN": 4.59,
            "MW": 2.97,
            "FT": 2.33,
            "WW": 2.19,
            "BS": 2.07
        }
    }, {
        "id": 331,
        "collectionId": 23,
        "type": "weapon",
        "weaponName": "Sawed-Off",
        "skinName": "Bamboo Shadow",
        "rarity": "base",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopbuyLgNv1fX3eSR97t27lo-EqP3hPbzdk1RT5MRygdbN_Iv9nBrsqEBoZm_1LNCcJgBsMFHW-we5w7i7g5HvuJ3MmHo27iJxsymLyxHkn1gSOctrpo8e",
        "prices": {
            "FN": 3.46,
            "MW": 2.68,
            "FT": 2.29,
            "WW": 1.79,
            "BS": 1.94
        }
    }, {
        "id": 332,
        "collectionId": 23,
        "type": "weapon",
        "weaponName": "Tec-9",
        "skinName": "Bamboo Forest",
        "rarity": "base",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoor-mcjhoyszKcDBA49OJnpWFkPvxDLfYkWNFppYg2L-Zodmljla2_hFpMGvxJofAdFNvMAyCr1a_w-q805656p6cyCZ9-n51ulNTsPw",
        "prices": {
            "FN": 7.79,
            "MW": 4.75,
            "FT": 2.72,
            "WW": 2.2,
            "BS": 2.14
        }
    }, {
        "id": 333,
        "collectionId": 23,
        "type": "weapon",
        "weaponName": "G3SG1",
        "skinName": "Orange Kimono",
        "rarity": "base",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposem2LFZf2-r3ejRP49K5q4SClvr7Pb_CqWRD6ct2j9bN_Iv9nBq2rxI-Zj33co-XJAM5YluFrlG7x7y90JS7uprPyCFgvSdw4CzemxW2n1gSObjKzSbu",
        "prices": {
            "FN": 3.01,
            "MW": 2.84,
            "FT": 2.33,
            "WW": 2.05,
            "BS": 2.01
        }
    }, {
        "id": 334,
        "collectionId": 23,
        "type": "weapon",
        "weaponName": "P250",
        "skinName": "Mint Kimono",
        "rarity": "base",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopujwezhzw8zDeDBN4tOJkImKmvj6N6jummJW4NE_jLHDp4ij3lewqEVoNmH7IobHcQBvMlqE-lm-x-67hZLpuciazyM2vj5iuygdh8Yqeg",
        "prices": {
            "FN": 3.66,
            "MW": 2.9,
            "FT": 2.29,
            "WW": 1.84,
            "BS": 1.96
        }
    }, {
        "id": 335,
        "collectionId": 23,
        "type": "weapon",
        "weaponName": "P250",
        "skinName": "Crimson Kimono",
        "rarity": "industrial",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopujwezhoyszDeDBN4tOJkImKmvj6N6juhG5V18l4jeHVu9WsjVe2_UU6ZWGnItTHIwJrYF-CqVK-krroh8K5vJnInHpgsiMl5CzD30vgJa5fp5Q",
        "prices": {
            "FN": 15.55,
            "MW": 17.06,
            "FT": 16.53,
            "WW": 15.61,
            "BS": 14.13
        }
    }, {
        "id": 336,
        "collectionId": 23,
        "type": "weapon",
        "weaponName": "Desert Eagle",
        "skinName": "Midnight Storm",
        "rarity": "industrial",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposr-kLAtl7PLFTi5H7c-im5KGqPv9NLPF2GpU7pcgj-_E9oj02wPm-EQ4YW2ncdTAcVA6YVGG_lO3xOq71MLo6MnXiSw0xSmk0RY",
        "prices": {
            "FN": 21.06,
            "MW": 16.76,
            "FT": 16.61,
            "WW": 15.97,
            "BS": 14.73
        }
    }, {
        "id": 337,
        "collectionId": 23,
        "type": "weapon",
        "weaponName": "Galil AR",
        "skinName": "Aqua Terrace",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbupIgthwczJfAJF6dO7kZSZnvTLIK_Uhnhu5Mx2gv2P84ij3FDnqUFqMWD0cNeWIQY9MArQ-ljryO-7hsC5v87AzCdrvHNx5WGdwUKopTQuwQ",
        "prices": {
            "FN": 96.04,
            "MW": 86.15,
            "FT": 83.82,
            "WW": 60.9,
            "BS": 71.41
        }
    }, {
        "id": 338,
        "collectionId": 23,
        "type": "weapon",
        "weaponName": "MAG-7",
        "skinName": "Counter Terrace",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7uifDhoyszPdDJP6ciknYO0hOPxI6jukXlU7ctOhuDG_Zi73QDm-EdkNmqmctDAdAVvMA3X_wO-xu6815fv7ZqdyHtg7ygh4HmOyQv33084kKYM5w",
        "prices": {
            "FN": 95.84,
            "MW": 88.2,
            "FT": 83.89,
            "WW": 72.26,
            "BS": 71.21
        }
    }, {
        "id": 339,
        "collectionId": 23,
        "type": "weapon",
        "weaponName": "Tec-9",
        "skinName": "Terrace",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoor-mcjhoyszPdDJP6ciknYO0hOPxI6juj25d5MpmteXI8oThxgCw_kM_ZW77dtCcJ1NsaA7Q_FLvxe3t1Me16JiYnCFlsnUq43yLmEGpwUYbTNdEs3M",
        "prices": {
            "FN": 87.15,
            "MW": 84.33,
            "FT": 81.76,
            "WW": 77.23,
            "BS": 53.68
        }
    }, {
        "id": 340,
        "collectionId": 23,
        "type": "weapon",
        "weaponName": "Desert Eagle",
        "skinName": "Sunset Storm 壱",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposr-kLAtl7PLFTi5H7c-im5KGqPX4PLTVqWdY781lxLjErN7031Hl8hU4NmnyINOQIwE-aVvSq1i9k-rrhcO8753KzyZmsyY8pSGKb3xK3i0",
        "prices": {
            "FN": 233.47,
            "MW": 219,
            "FT": 190,
            "WW": 159.67,
            "BS": 143.25
        }
    }, {
        "id": 341,
        "collectionId": 23,
        "type": "weapon",
        "weaponName": "Desert Eagle",
        "skinName": "Sunset Storm 弐",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposr-kLAtl7PLFTi5H7c-im5KGqOT8PLHeqWdY781lxL7F89jzjQfs_Rc9MGj7ddOXIw5tYg3V-gXoxrq515-9upidnCE2siM8pSGKLbOD2eI",
        "prices": {
            "FN": 244.46,
            "MW": 208.7,
            "FT": 190,
            "WW": 162.64,
            "BS": 148
        }
    }, {
        "id": 342,
        "collectionId": 23,
        "type": "weapon",
        "weaponName": "M4A4",
        "skinName": "Daybreak",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhh3szDeDBN4tOJh5WFhf7nNoTdn2xZ_It33uqVp9-m3gfmrRY4ZGnzINfHdgA4ZwmFqwLrkLzqhpS_v86dnSZlpGB8smE_CYHw",
        "prices": {
            "FN": 224.79,
            "MW": 222,
            "FT": 168.59,
            "WW": 15.76,
            "BS": 17.75
        }
    }, {
        "id": 343,
        "collectionId": 23,
        "type": "weapon",
        "weaponName": "AK-47",
        "skinName": "Hydroponic",
        "rarity": "classified",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhh3szKcDBA49OJnpWFkPvxDLfYkWNFppwpie2Rp9_w0VDm-UNrMj30IoPHdAY-M1rY-1K7w7291pO8vJTJzHN9-n51xLwwH8g",
        "prices": {
            "FN": 1668,
            "MW": 1398.07,
            "FT": 857.71,
            "WW": 670,
            "BS": 511
        }
    }, {
        "id": 344,
        "collectionId": 23,
        "type": "weapon",
        "weaponName": "AUG",
        "skinName": "Akihabara Accept",
        "rarity": "covert",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot6-iFAR17PLGeDBH092jk7-HnvD8J_XXxj8IuJIkib-VoNSi2VGx_UQ-Yzv3I4SQcVA7aAvS_FC6wru51pK1ot2XnmtK7ev7",
        "prices": {
            "FN": 5717,
            "MW": 2307.08,
            "FT": 818.78,
            "WW": 399.8,
            "BS": 271.38
        }
    },

    // CS:GO Weapon Case
    {
        "id": 345,
        "collectionId": 24,
        "type": "weapon",
        "weaponName": "MP7",
        "skinName": "Skulls",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6ryFA957ODDZDFO_-O6nYeDg7mnNuiJzzoD6sFzj-iZ9N732Ae2-kdlNm_yLdCcJAc6YA3V_gfvkri7m9bi63NqHUO4",
        "prices": {
            "MW": 15.3,
            "FT": 14.61,
            "FNST": 14.06,
            "MWST": 12.74
        }
    }, {
        "id": 346,
        "collectionId": 24,
        "type": "weapon",
        "weaponName": "AUG",
        "skinName": "Wings",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot6-iFA957PXNcClK6c6lq4GekMj4OrzZgiVUuZEg0-uUp42mjFCw_xE5N2zwJo7DdgU2NAnVrgTvwem9hcTtvpnB1zI97VRJemoq",
        "prices": {
            "MW": 14.99,
            "FT": 15.77,
            "FNST": 14.32,
            "MWST": 14.07
        }
    }, {
        "id": 347,
        "collectionId": 24,
        "type": "weapon",
        "weaponName": "SG 553",
        "skinName": "Ultraviolet",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopb3wflFfwPz3YShQ_NCzq4yCkP_gfe-FwjMCu5AniLqSodij3lW3qUU5ZGHyJIOSJg5oaF6B_VLtk-3og8Ci_MOeaX_CtlE",
        "prices": {
            "FN": 28.21,
            "MW": 15.76,
            "FT": 14.92,
            "WW": 13.82,
            "BS": 13.29,
            "FNST": 92.69,
            "MWST": 14.32,
            "FTST": 13.31,
            "WWST": 12.2,
            "BSST": 11.88
        }
    }, {
        "id": 348,
        "collectionId": 24,
        "type": "weapon",
        "weaponName": "M4A1-S",
        "skinName": "Dark Water",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO3mb-RkvXmMoTVl3la18l4jeHVu4qh0ADn_Us9Z277coPAcgRqYArZrlTrw-bug5W5uMucznJmvyAhs3zD30vg05sSVoA",
        "prices": {
            "FN": 65.91,
            "MW": 62.78,
            "FNST": 116.94,
            "MWST": 91.56
        }
    }, {
        "id": 349,
        "collectionId": 24,
        "type": "weapon",
        "weaponName": "USP-S",
        "skinName": "Dark Water",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo6m1FBRp3_bGcjhQ0927q5qOleX1DL_QhGBu5Mx2gv2P9Ijx3wTtqUE5MW_7J46QcVA3ZFjYrgXoyL3th5O8v8nOnCQxsykg4GGdwUKSxD9j6w",
        "prices": {
            "FN": 66.96,
            "MW": 61.31,
            "FNST": 102.31,
            "MWST": 86.15
        }
    }, {
        "id": 350,
        "collectionId": 24,
        "type": "weapon",
        "weaponName": "Glock-18",
        "skinName": "Dragon Tattoo",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbaqKAxf0v73dS9D69O4q4eHmPT_DLfYkWNFpsAl2OiWp42k0VXm-UBlMGD6JoOScVQ2aVnX81m3xr-5hpHvu8vBzXt9-n51h9NwnXk",
        "prices": {
            "FN": 74.18,
            "MW": 73.09,
            "FNST": 149.09,
            "MWST": 155.38
        }
    }, {
        "id": 351,
        "collectionId": 24,
        "type": "weapon",
        "weaponName": "Desert Eagle",
        "skinName": "Hypnotic",
        "rarity": "classified",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposr-kLAtl7PLJTitH_si_k4-0m_7zO6-fzj5QuZN03uvH99T32Ve3_UBlYDqiIdKVIQBqYgnRr1frx-7thpW-v4OJlyUwDcxXZA",
        "prices": {
            "FN": 101.81,
            "MW": 97.86,
            "FNST": 118.44,
            "MWST": 142.27
        }
    }, {
        "id": 352,
        "collectionId": 24,
        "type": "weapon",
        "weaponName": "AK-47",
        "skinName": "Case Hardened",
        "rarity": "classified",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhhwszHeDFH6OO6nYeDg7mtYbiJkjoDvcAlj7yVotmtjAfjrkpoZW36IoaWclM3MFnY8lK9k-vnm9bi67lSw9Es",
        "prices": {
            "FN": 312.7,
            "MW": 218.61,
            "FT": 184.66,
            "WW": 145.04,
            "BS": 118.27,
            "FNST": 481.61,
            "MWST": 389.34,
            "FTST": 278.32,
            "WWST": 231.99,
            "BSST": 212.45
        }
    }, {
        "id": 353,
        "collectionId": 24,
        "type": "weapon",
        "weaponName": "AWP",
        "skinName": "Lightning Strike",
        "rarity": "covert",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FAZt7P_BdjVW4tW4k7-KgOfLP7LWnn8fu5In27GYod2l21Gx-xU5MGDzddCRdw83Y1DW-VS3wu291JS76Z7PnWwj5Hc0AjJzVA",
        "prices": {
            "FN": 601.44,
            "MW": 522.09,
            "FNST": 798.68,
            "MWST": 926.3
        }
    }, {
        "id": 354,
        "collectionId": 24,
        "type": "weapon",
        "weaponName": "Rare",
        "skinName": "Special Item",
        "rarity": "gold",
        "image": "./assets/rare-item.png",
    },

    // eSports 2013
    {
        "id": 355,
        "collectionId": 25,
        "type": "weapon",
        "weaponName": "MAG-7",
        "skinName": "Memento",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7uifDhoyszBcjJR7dSzkJKEmcj4OrzZgiVXv8Bw0urC9Nz33Ay1-0dqYD3zLIGSI1A3MlHUr1boxOq7hcC96JrA1zI97TI-pHTn",
        "prices": {
            "FN": 3.58,
            "MW": 3.21,
            "FT": 2.27,
            "FNST": 6.63,
            "MWST": 4,
            "FTST": 3.78
        }
    }, {
        "id": 356,
        "collectionId": 25,
        "type": "weapon",
        "weaponName": "FAMAS",
        "skinName": "Doomkitty",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLuoKhRf2-r3dTJN4de_gJSSqPv9NLPF2GgI7MEmiLHH99303ACw_kVlYm_7INfEJwI-ZwzT_FG6wu3qgJa4upXXiSw0PlrXJeI",
        "prices": {
            "FN": 2.42,
            "MW": 2.44,
            "FNST": 2.87,
            "MWST": 3.06
        }
    }, {
        "id": 357,
        "collectionId": 25,
        "type": "weapon",
        "weaponName": "M4A4",
        "skinName": "Faded Zebra",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhzw8zSdD9Q7d-3mb-JgMj4OrzZgiVV7ZUpj--T9Nrx3wHm_xZqa2vyJY7GJ1A7NVnS-1O6kuvugJDo6szB1zI97QRjcl-G",
        "prices": {
            "FN": 8.31,
            "MW": 2.15,
            "FT": 3.03,
            "WW": 2.78,
            "BS": 2.65,
            "FNST": 40.99,
            "MWST": 2.89,
            "FTST": 2.08,
            "WWST": 2.97,
            "BSST": 3.8
        }
    }, {
        "id": 358,
        "collectionId": 25,
        "type": "weapon",
        "weaponName": "Galil AR",
        "skinName": "Orange DDPAT",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbupIgthwczAaAJG6My3gL-Ehfb6NL7ummJW4NE_0r2YrI2l2gex_UI6ZT3wcoHBcgU-YFrV-FC6w-y90MLt6cmdzyFh6D5iuyiP2N48lg",
        "prices": {
            "FN": 51.36,
            "MW": 16.51,
            "FT": 11.61,
            "WW": 7.4,
            "BS": 10.91,
            "FNST": 257.4,
            "MWST": 26.46,
            "FTST": 16.3,
            "WWST": 11.39,
            "BSST": 10.6
        }
    }, {
        "id": 359,
        "collectionId": 25,
        "type": "weapon",
        "weaponName": "P250",
        "skinName": "Splash",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopujwezhzw8zbYTFD_9SJhNLex8j4OrzZgiUIupIhjrHFpNj22w21rhVkYG3zI9PEdwZrZFmG-gTsyee8hJG-up6d1zI97bay_VK1",
        "prices": {
            "FN": 35.34,
            "MW": 12.3,
            "FT": 16.47,
            "FNST": 93.59,
            "MWST": 23.16,
            "FTST": 21.46
        }
    }, {
        "id": 360,
        "collectionId": 25,
        "type": "weapon",
        "weaponName": "Sawed-Off",
        "skinName": "Orange DDPAT",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopbuyLgNv1fX3eSR96NimlZS0mOX1PbzUqWdY781lxLmV84mk3gfs_EM9N2_2cYeSJg5rZQyE81W-wu_nhcPov87MmHBisnQ8pSGKv4w_r3Q",
        "prices": {
            "FN": 42.47,
            "MW": 14.06,
            "FT": 9.34,
            "WW": 5.7,
            "BS": 8.25,
            "FNST": 101.75,
            "MWST": 21.83,
            "FTST": 14.09,
            "WWST": 17.81,
            "BSST": 15.46
        }
    }, {
        "id": 361,
        "collectionId": 25,
        "type": "weapon",
        "weaponName": "AWP",
        "skinName": "BOOM",
        "rarity": "classified",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FA957PHEcDB9_9W7hIyOqPv9NLPF2G5VuZQl072WodSkjQTn_UU-YTqncYaccFc2NQyBqVXqxuzqhZG7uc_XiSw0f3y6kYU",
        "prices": {
            "FN": 301.9,
            "MW": 91.29,
            "FT": 70.92,
            "FNST": 160.67,
            "MWST": 112.43
        }
    }, {
        "id": 362,
        "collectionId": 25,
        "type": "weapon",
        "weaponName": "AK-47",
        "skinName": "Red Laminate",
        "rarity": "classified",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhoyszJemkV4N27q4yCkP_gfeqIzz0DuMAp2rGUotWj2w3m_Uc_NW72J9KVdAM-ZlrRqFXsku-5hpGi_MOeuhMPC0E",
        "prices": {
            "FN": 292.06,
            "MW": 40.41,
            "FT": 28.43,
            "WW": 29.83,
            "BS": 28.27,
            "FNST": 2158.65,
            "MWST": 118.62,
            "FTST": 80.64,
            "WWST": 76.75,
            "BSST": 70.21
        }
    }, {
        "id": 363,
        "collectionId": 25,
        "type": "weapon",
        "weaponName": "P90",
        "skinName": "Death by Kitty",
        "rarity": "covert",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopuP1FAR17PDJZS5J-dC6h7-bzqfLP7LWnn8fuMN32OqU9tmmiQLt-hZuaz2mJITGJgFsZViF-Vi7levs0Z7vupXLz2wj5HegSjteqg",
        "prices": {
            "FN": 59.35,
            "MW": 33.22,
            "FNST": 265.99,
            "MWST": 94
        }
    }, {
        "id": 364,
        "collectionId": 25,
        "type": "weapon",
        "weaponName": "Rare",
        "skinName": "Special Item",
        "rarity": "gold",
        "image": "./assets/rare-item.png",
    },

    // CS:GO 2 Weapon
    {
        "id": 365,
        "collectionId": 26,
        "type": "weapon",
        "weaponName": "M4A1-S",
        "skinName": "Blood Tiger",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO-jb-ZkvPgOrzUhFRd4cJ5nqeR99iliQHlqUNsYWmldYeSegdqNQrX-Ve2lO29hp_vvJ7Lz3ExuHR2-z-DyJz2uSmQ",
        "prices": {
            "FN": 4.79,
            "MW": 3.56,
            "FT": 3.99,
            "FNST": 17.06,
            "MWST": 11.08,
            "FTST": 12.88
        }
    }, {
        "id": 366,
        "collectionId": 26,
        "type": "weapon",
        "weaponName": "P250",
        "skinName": "Hive",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopujwezhoyszadDlK6cSJmImMn-O6Y-KIxjID68Z337-VptX30QbmqUZtZm_6d9OddVA8N1HQ8gDskr3ujIj84srOo3RmYw",
        "prices": {
            "FN": 2.6,
            "MW": 2.2,
            "FT": 2.92,
            "FNST": 5.02,
            "MWST": 2.88,
            "FTST": 2.89
        }
    }, {
        "id": 367,
        "collectionId": 26,
        "type": "weapon",
        "weaponName": "FAMAS",
        "skinName": "Hexane",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLuoKhRf2-r3czFX6dSzjL-HnvD8J_XXkzMGv5MiiLqS8I2t0QLnqBVkZDz6do7DJgFsaAqGqVi-wOq7gpK7ot2Xns8-940N",
        "prices": {
            "FN": 3.15,
            "MW": 2.72,
            "FT": 2.38,
            "WW": 2.08,
            "FNST": 4.09,
            "MWST": 3.64,
            "FTST": 2.92,
            "WWST": 2.66
        }
    }, {
        "id": 368,
        "collectionId": 26,
        "type": "weapon",
        "weaponName": "Tec-9",
        "skinName": "Blue Titanium",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoor-mcjhh3czceClD4tWjmdPbgcj4OrzZgiUGvpUm0rmXoN6m3VXt8kU4NWHyLILHdA46YF3ZrgfrlOm608XouZ7J1zI97dumq2ev",
        "prices": {
            "FN": 3.83,
            "FNST": 5.53
        }
    }, {
        "id": 369,
        "collectionId": 26,
        "type": "weapon",
        "weaponName": "SCAR-20",
        "skinName": "Crimson Web",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopbmkOVUw7PvRTipH7s-JkIGZnPLmDLfYkWNFpp102r_ErdutiwbmqUtuMG-hdoeVdgNoY16F-wPsku_mh5Dq7cian3B9-n51JZMMtxo",
        "prices": {
            "FN": 10.49,
            "MW": 2.91,
            "FT": 2.21,
            "WW": 1.82,
            "BS": 1.98,
            "FNST": 54.74,
            "MWST": 4.28,
            "FTST": 2.74,
            "WWST": 2.97,
            "BSST": 2.34
        }
    }, {
        "id": 370,
        "collectionId": 26,
        "type": "weapon",
        "weaponName": "MP9",
        "skinName": "Hypnotic",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6r8FAZh7OXNYylL69OJmImMn-O6Z-rQwToIvcAhi7_D9NihiwayqEVoN2_3dtPAcgA9ZFzU_gO-kuvpjIj84sobk02NFA",
        "prices": {
            "FN": 7.73,
            "MW": 9.17,
            "FNST": 16.62,
            "MWST": 15.93
        }
    }, {
        "id": 371,
        "collectionId": 26,
        "type": "weapon",
        "weaponName": "Dual Berettas",
        "skinName": "Hemoglobin",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpos7asPwJf0v73fi5R5dqvq5KOk8j4OrzZgiUI7MQj2-2S8Y-iigLg8kZuN2H2J46UegY5ZA7V-FXvyLvr1pfo6snK1zI97Q5Yz4R8",
        "prices": {
            "FN": 7.13,
            "MW": 7.65,
            "FT": 7.06,
            "FNST": 18.65,
            "MWST": 12.75,
            "FTST": 10.14
        }
    }, {
        "id": 372,
        "collectionId": 26,
        "type": "weapon",
        "weaponName": "Five-SeveN",
        "skinName": "Case Hardened",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLOzLhRlxfbGTjxT09O_mIWPqPv9NLPF2G1V6cQh07yVoN-s3gG2-RE5amqlLNfEewZvNFzW8wW3w-i51MW46ZrXiSw0Tr_CS4o",
        "prices": {
            "FN": 17.83,
            "MW": 10.8,
            "FT": 6.96,
            "WW": 6.95,
            "BS": 6.68,
            "FNST": 51.84,
            "MWST": 21.65,
            "FTST": 12.06,
            "WWST": 9.73,
            "BSST": 11.18
        }
    }, {
        "id": 373,
        "collectionId": 26,
        "type": "weapon",
        "weaponName": "Nova",
        "skinName": "Graphite",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpouLWzKjhh3szLYyhP_NCzq4yCkP_gfb6FwGlQ6pV1ibHHrYrw2QS280A_YmGmcI_De1I3aFzV-VS8xubu1MCi_MOe6P-uRMg",
        "prices": {
            "FN": 6.37,
            "MW": 7.04,
            "FNST": 16.43,
            "MWST": 11.95
        }
    }, {
        "id": 374,
        "collectionId": 26,
        "type": "weapon",
        "weaponName": "USP-S",
        "skinName": "Serum",
        "rarity": "classified",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo6m1FBRp3_bGcjhQ0927q4WHkvTgIbLSqXlU7Pp9g-7J4cLwjgzk-0Y-NjuiI4KRdw5oMAqCr1nox-jr0JbuvpzJm3A27CNz5X_agVXp1ik-to9s",
        "prices": {
            "FN": 42.34,
            "MW": 33.52,
            "FT": 30.46,
            "FNST": 46.03,
            "MWST": 35.4,
            "FTST": 29.93
        }
    }, {
        "id": 375,
        "collectionId": 26,
        "type": "weapon",
        "weaponName": "P90",
        "skinName": "Cold Blooded",
        "rarity": "classified",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopuP1FAZt7ODEeClK6c6JhNnbqPv9NLPF2D4Ju8Qo2uqXo9Sg0Fey-xA_YWnxIYXBcFA6MFiCr1C_x-a61MLu78zXiSw00t3nOkI",
        "prices": {
            "FN": 59.17,
            "MW": 44.67,
            "FNST": 59.65,
            "MWST": 83.41
        }
    }, {
        "id": 376,
        "collectionId": 26,
        "type": "weapon",
        "weaponName": "SSG 08",
        "skinName": "Blood in the Water",
        "rarity": "covert",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopamie19f0Ob3YjVD_teJmImMn-O6Y-uJxzlSupVw0rCXrdii2AXnqUM9YWDyJ9eUdABoZwqB-FO-kOzqjYj84sqeBRQLNw",
        "prices": {
            "FN": 58.34,
            "MW": 37.11,
            "FT": 34.07,
            "FNST": 390.05,
            "MWST": 145.8,
            "FTST": 144.07
        }
    }, {
        "id": 377,
        "collectionId": 26,
        "type": "weapon",
        "weaponName": "Rare",
        "skinName": "Special Item",
        "rarity": "gold",
        "image": "./assets/rare-item.png",
    },

    // Bravo
    {
        "id": 378,
        "collectionId": 27,
        "type": "weapon",
        "weaponName": "G3SG1",
        "skinName": "Demeter",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposem2LFZf2-r3czFX6cy5mJmMmPnLManQgGRu5Mx2gv2Po9qm0ALm-BJoam76IYeXIFQ-ZVCGq1O8l-e61pa67ZiayHNkuHMlsGGdwUJ2yKCJoA",
        "prices": {
            "FN": 11.55,
            "MW": 4.69,
            "FT": 4.78,
            "WW": 4.3,
            "BS": 4.31,
            "FNST": 25.36,
            "MWST": 7.47,
            "FTST": 5.78,
            "WWST": 4.74,
            "BSST": 5.19
        }
    }, {
        "id": 379,
        "collectionId": 27,
        "type": "weapon",
        "weaponName": "Galil AR",
        "skinName": "Shattered",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbupIgthwczAaAJB_sm7hIyOqPXmMq3eqWdY781lxO_C896g0AbjqEM5NWH7dtfGdVM7M1jV_Fbrkrrq1JHo7sicyXNksyE8pSGKk7HxPnU",
        "prices": {
            "FN": 12.09,
            "MW": 5.5,
            "FT": 4.64,
            "WW": 3.92,
            "BS": 4.2,
            "FNST": 40.48,
            "MWST": 7.4,
            "FTST": 6.2,
            "WWST": 5.24,
            "BSST": 5.59
        }
    }, {
        "id": 380,
        "collectionId": 27,
        "type": "weapon",
        "weaponName": "SG 553",
        "skinName": "Wave Spray",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopb3wflFfwOP3Yi1Q7cWJg4GdkuTLManQgGRu5Mx2gv2PoIihjQSx-EprZDulLdCUJFc2NQzR_1a4k-vqgpDuuJ_AzHZl7CkqsWGdwUIsK0j3kQ",
        "prices": {
            "FN": 11.86,
            "MW": 5.38,
            "FT": 5.12,
            "WW": 3.96,
            "BS": 4.29,
            "FNST": 76.93,
            "MWST": 6.58,
            "FTST": 5.78,
            "WWST": 4.91,
            "BSST": 5.48
        }
    }, {
        "id": 381,
        "collectionId": 27,
        "type": "weapon",
        "weaponName": "UMP-45",
        "skinName": "Bone Pile",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo7e1f1JfwOP3YjZX4NCJkImKkOX1PoTThGpH5_p9g-7J4cLz21ay_kVvNW-mJISSdlA7ZFvX_QS6l7vvgZS-tZ3MzHpl6yN25HaPgVXp1p_KyHAA",
        "prices": {
            "FN": 11.6,
            "MW": 4.93,
            "FT": 4.56,
            "FNST": 14.61,
            "MWST": 6.58,
            "FTST": 6.15
        }
    }, {
        "id": 382,
        "collectionId": 27,
        "type": "weapon",
        "weaponName": "Dual Berettas",
        "skinName": "Black Limba",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpos7asPwJf0Ob3YjhD_9O4q4WHnuPxIITThGpH5_p9g-7J4cKl21bhrUc9NTqhctDHegZoZluDr1G-yLq-h5K86pmYmHNnvyVx5HqLgVXp1ibceDhh",
        "prices": {
            "FN": 10.1,
            "MW": 4.75,
            "FT": 4.72,
            "WW": 4.3,
            "BS": 3.71,
            "FNST": 38.01,
            "MWST": 7.72,
            "FTST": 5.6,
            "WWST": 5.11,
            "BSST": 5.09
        }
    }, {
        "id": 383,
        "collectionId": 27,
        "type": "weapon",
        "weaponName": "Nova",
        "skinName": "Tempest",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpouLWzKjhoyszbdDxR5dizq4KZluH7DLfYkWNFpsdwjriS946j31Hi_BY5Y2uhI46XIwM5ZVvX_AXoxLvo0JLq6prPzyZ9-n51UFl855Q",
        "prices": {
            "FN": 11.76,
            "MW": 5.06,
            "FT": 4.57,
            "FNST": 24.38,
            "MWST": 8.52,
            "FTST": 6.04
        }
    }, {
        "id": 384,
        "collectionId": 27,
        "type": "weapon",
        "weaponName": "USP-S",
        "skinName": "Overgrowth",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo6m1FBRp3_bGcjhQ09Svq5OCkvDxDLnDl31e18l4jeHVu9mk31bs8hZrazulcY7HI1I5MgnRqwDsxru705fovJ-YzHQxuHRz53nD30vgBAkSFQ0",
        "prices": {
            "FN": 63.7,
            "MW": 25.44,
            "FT": 22.02,
            "WW": 22.7,
            "BS": 20.47,
            "FNST": 353.63,
            "MWST": 56.34,
            "FTST": 38.19,
            "WWST": 36.67,
            "BSST": 34.98
        }
    }, {
        "id": 385,
        "collectionId": 27,
        "type": "weapon",
        "weaponName": "MAC-10",
        "skinName": "Graven",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7umeldf0uL3dClB5Nmyq42KlKakDLnDl31e18l4jeHVu9ms2VK3qRA5MmH6J4CQcVJvMF3S-APvyOe9gMO86ZWdnHZk7iQm53zD30vgr85VbAE",
        "prices": {
            "FN": 26.92,
            "MW": 24.93,
            "FT": 21.61,
            "WW": 18.87,
            "BS": 19.45,
            "FNST": 118.89,
            "MWST": 41.68,
            "FTST": 37.87,
            "WWST": 33.55,
            "BSST": 39.3
        }
    }, {
        "id": 386,
        "collectionId": 27,
        "type": "weapon",
        "weaponName": "M4A4",
        "skinName": "Zirka",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhzw8zbZTxQ096klZaEqPv9NLPF2G8F6ZAni-vErdSgiQW1-0A5Mmj0J9eTI1drM1yG-1Hskru8g8e875_XiSw0WKtGtpw",
        "prices": {
            "FN": 39.66,
            "MW": 18.75,
            "FT": 17.6,
            "WW": 23.28,
            "FNST": 112,
            "MWST": 38.99,
            "FTST": 32.37,
            "WWST": 24.2
        }
    }, {
        "id": 387,
        "collectionId": 27,
        "type": "weapon",
        "weaponName": "M4A1-S",
        "skinName": "Bright Water",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO-jb-ElPL1PYTThGpH5_p9g-7J4cKiiQ3g-UdoamDxIoeQcQM5ZFrW8wDowOnrgpW_6cmaziA27iV0tCqPgVXp1k7hrEcT",
        "prices": {
            "FN": 29.13,
            "MW": 30.59,
            "FNST": 62.14,
            "MWST": 54.75
        }
    }, {
        "id": 388,
        "collectionId": 27,
        "type": "weapon",
        "weaponName": "AWP",
        "skinName": "Graphite",
        "rarity": "classified",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FAZt7PDaZDBS4NmJlpKKgfjLP7LWnn8fvcMk0-3Ep96ijAbs-xVvMGqhJ4_DI1M5NFzZqwK_xe3shp7v7Ziby2wj5HdqUaxXFQ",
        "prices": {
            "FN": 200.21,
            "MW": 174.99,
            "FNST": 373.79,
            "MWST": 413
        }
    }, {
        "id": 389,
        "collectionId": 27,
        "type": "weapon",
        "weaponName": "P2000",
        "skinName": "Ocean Foam",
        "rarity": "classified",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovrG1eVcwg8zJfAJN_8-_kpm0lfvhNoTBxDsBuPpzmOjX-rP5gVO8v11lYj_xJoOTcQNoZg3Uq1i2x7zqhMO8tc-bmHNjvHNz4y7ZzUOw1UoecKUx0rDlqGqw",
        "prices": {
            "FN": 143.52,
            "MW": 130.36,
            "FNST": 388.19,
            "MWST": 350.25
        }
    }, {
        "id": 390,
        "collectionId": 27,
        "type": "weapon",
        "weaponName": "P90",
        "skinName": "Emerald Dragon",
        "rarity": "classified",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopuP1FAR17PfacDpN4uOmzdC0leX1JbTummJW4NE_2LmR8Iqg2Qe1rkFlMjz0IoOUI1I9N1vRr1e2k-u9hJ66vprAzHVh7D5iuyg1KAc3xw",
        "prices": {
            "FN": 335.76,
            "MW": 136.16,
            "FT": 108.23,
            "WW": 47.63,
            "BS": 124.16,
            "FNST": 1046,
            "MWST": 278.07,
            "FTST": 255.03,
            "WWST": 244.64,
            "BSST": 137.12
        }
    }, {
        "id": 391,
        "collectionId": 27,
        "type": "weapon",
        "weaponName": "AK-47",
        "skinName": "Fire Serpent",
        "rarity": "covert",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszOeC9H_9mkhIWFg8j1OO-GqWlD6dN-teXI8oThxg3n8kM5ZD-nJI-UJ1c2MFjU-VXolezugZXpvMyan3I3v3Qjty2OlhKpwUYbndZ_4hw",
        "prices": {
            "FN": 2811.25,
            "MW": 1270.73,
            "FT": 832.14,
            "WW": 725,
            "BS": 445.42,
            "FNST": 7302,
            "MWST": 3343.09,
            "FTST": 1966.99,
            "WWST": 1955.34,
            "BSST": 1139.39
        }
    }, {
        "id": 392,
        "collectionId": 27,
        "type": "weapon",
        "weaponName": "Desert Eagle",
        "skinName": "Golden Koi",
        "rarity": "covert",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposr-kLAtl7PLFTi5B7dCzh7-JhfbiPITdn2xZ_IsnievAodqj0QGx_Ec9azumcY-WcFNvaFiDrwC8xbvugZDv7sifzCdkpGB8srQmEFgj",
        "prices": {
            "FN": 36.14,
            "MW": 33.15,
            "FNST": 124.4,
            "MWST": 142.89
        }
    }, {
        "id": 393,
        "collectionId": 27,
        "type": "weapon",
        "weaponName": "Rare",
        "skinName": "Special Item",
        "rarity": "gold",
        "image": "./assets/rare-item.png"
    },

    // Winter Offensive
    {
        "id": 394,
        "collectionId": 28,
        "type": "weapon",
        "weaponName": "Galil AR",
        "skinName": "Sandstorm",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbupIgthwczLZAJR7dKyh5SEhfrLP7LWnn8fuJUp07qWot6ijQPhqRVkZ2mnJtSQcwdqYgzY_li9kO_t15Pp6J-Ymmwj5He-V7Mj7w",
        "prices": {
            "FN": 2.81,
            "MW": 0.72,
            "FT": 0.94,
            "WW": 0.63,
            "FNST": 4.7,
            "MWST": 1.09,
            "FTST": 1.21,
            "WWST": 1.33
        }
    }, {
        "id": 395,
        "collectionId": 28,
        "type": "weapon",
        "weaponName": "Five-SeveN",
        "skinName": "Kami",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLOzLhRlxfbGTjVb09e3mYm0m_7zO6-flW4FsZYojOyVpI6m2Ffi-kdvNW37I46Se1c7Zg3UrFTow-zo0J69vYOJlyXxEGu1HA",
        "prices": {
            "FN": 1.33,
            "MW": 0.89,
            "FT": 0.93,
            "FNST": 2.31,
            "MWST": 1.36,
            "FTST": 1.11
        }
    }, {
        "id": 396,
        "collectionId": 28,
        "type": "weapon",
        "weaponName": "M249",
        "skinName": "Magma",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-jxcjhhwszHcy5L6NW3mr-HnvD8J_XSzmoCsMYo2byV9t7z3AHn-hVsa2nxcdfEdg9tMAnZ8la2k7y5jMPoot2XnoUzripl",
        "prices": {
            "FN": 1.02,
            "MW": 0.77,
            "FT": 0.59,
            "WW": 0.64,
            "BS": 0.58,
            "FNST": 1.99,
            "MWST": 1.27,
            "FTST": 1.03,
            "WWST": 0.93,
            "BSST": 1.01
        }
    }, {
        "id": 397,
        "collectionId": 28,
        "type": "weapon",
        "weaponName": "PP-Bizon",
        "skinName": "Cobalt Halftone",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLO_JAlf0v73ZShQ_dO_h4W0n_b4Na_emG5u5Mx2gv2P8N-hjFfgqRI-YT_ycNeTdFQ-ZQqE-AW9kr-715O9v57Amidru3YmsWGdwUKaHgO32A",
        "prices": {
            "FN": 1.93,
            "MW": 0.82,
            "FT": 0.65,
            "WW": 0.58,
            "FNST": 3.97,
            "MWST": 1.56,
            "FTST": 1.08,
            "WWST": 0.99
        }
    }, {
        "id": 398,
        "collectionId": 28,
        "type": "weapon",
        "weaponName": "FAMAS",
        "skinName": "Pulse",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLuoKhRf0Ob3dzxP7c-JhJWHhPLLP7LWnn8f7sR13-3H9oiiigS3qBU5ZWz2d4HGcQ8-YgzQ81C_xe7mhZK1uZScmmwj5HeDCkLaKQ",
        "prices": {
            "FN": 5.92,
            "MW": 5.08,
            "FT": 4.65,
            "WW": 4.72,
            "FNST": 13.41,
            "MWST": 10.35,
            "FTST": 8.55,
            "WWST": 6.59
        }
    }, {
        "id": 399,
        "collectionId": 28,
        "type": "weapon",
        "weaponName": "Dual Berettas",
        "skinName": "Marina",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpos7asPwJf2-r3fDxQ5dK3q5OemeX9IL7ummJW4NE_iOrF89-kjgG1rUc9Zjv6dtPDcFRsYQzV-VK4xu_q1JXtvJnJziBquD5iuyix28IB1g",
        "prices": {
            "FN": 13.92,
            "MW": 5.58,
            "FT": 4.7,
            "WW": 4.59,
            "BS": 4.18,
            "FNST": 33.74,
            "MWST": 10.72,
            "FTST": 9.38,
            "WWST": 6.9,
            "BSST": 7.91
        }
    }, {
        "id": 400,
        "collectionId": 28,
        "type": "weapon",
        "weaponName": "MP9",
        "skinName": "Rose Iron",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6r8FAZt7OfAfi9M9eOkm5OOqPrkaoTdn2xZ_Itw27GW892m3ATgrhE9am-ncYCXcFA6MlHUr1m7wenn08S9tMnBnXUwpGB8sjkI-Dv2",
        "prices": {
            "FN": 6.75,
            "MW": 5.32,
            "FT": 5.06,
            "FNST": 12.55,
            "MWST": 10.55,
            "FTST": 9.08
        }
    }, {
        "id": 401,
        "collectionId": 28,
        "type": "weapon",
        "weaponName": "Nova",
        "skinName": "Rising Skull",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpouLWzKjhjxszbeihO4OO4m5aKqPv9NLPF2D4EsMEl2L2ToY3xjFXsqBBvYGHwdoaQJgM9aVCG_VS2wum9hZHp6szXiSw0gX3sx4k",
        "prices": {
            "FN": 6.09,
            "MW": 5.02,
            "FT": 4.47,
            "WW": 3.94,
            "BS": 4.59,
            "FNST": 13.22,
            "MWST": 9.85,
            "FTST": 7.87,
            "WWST": 4.83,
            "BSST": 2.73
        }
    }, {
        "id": 402,
        "collectionId": 28,
        "type": "weapon",
        "weaponName": "M4A1-S",
        "skinName": "Guardian",
        "rarity": "classified",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO1gb-Gw_alfqjuk2dU78R_ntbN_Iv9nBrlqhA-MWnzIoaTdg4-aFmBqVS9w7q6g57v6snOy3IxvXF27HfdmhOzn1gSOVYg1Yji",
        "prices": {
            "FN": 35.3,
            "MW": 28.26,
            "FT": 24.9,
            "WW": 23.52,
            "BS": 21.17,
            "FNST": 95.97,
            "MWST": 68.91,
            "FTST": 55.84,
            "WWST": 51.55,
            "BSST": 46.29
        }
    }, {
        "id": 403,
        "collectionId": 28,
        "type": "weapon",
        "weaponName": "P250",
        "skinName": "Mehndi",
        "rarity": "classified",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopujwezhjxszYI2gS086zkomFkvPLP7LWnn8fscFw2bHD9tmj2Vbi_kRqZmz2doeScgZraA3R-gXqk73qh5-1uM7Pzmwj5HcyHuJxQg",
        "prices": {
            "FN": 19.57,
            "MW": 12.95,
            "FT": 11.07,
            "WW": 9.41,
            "BS": 8.94,
            "FNST": 59.83,
            "MWST": 29.53,
            "FTST": 27.05,
            "WWST": 20.65,
            "BSST": 19.99
        }
    }, {
        "id": 404,
        "collectionId": 28,
        "type": "weapon",
        "weaponName": "AWP",
        "skinName": "Redline",
        "rarity": "classified",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FAR17PLfYQJB496klb-HnvD8J_XSkDkB68Ani-qQpNmkigC1-EM4azj7IIadc1NtZVvX-QLsl7-7gce4ot2XngYgmyTY",
        "prices": {
            "FN": 60.51,
            "MW": 37.7,
            "FT": 40.38,
            "FNST": 132.13,
            "MWST": 67.17,
            "FTST": 76.01
        }
    }, {
        "id": 405,
        "collectionId": 28,
        "type": "weapon",
        "weaponName": "M4A4",
        "skinName": "Asiimov",
        "rarity": "covert",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhjxszFJQJD_9W7m5a0mvLwOq7c2GlUucFwjruR9t7231DmrRc_NW7yItCRcVNoYVHS-APrwbzu0JK-78nXiSw0EnwDRM0",
        "prices": {
            "FN": 126.6,
            "MW": 68.03,
            "FT": 35.36,
            "FNST": 386.81,
            "MWST": 169.18,
            "FTST": 108.6
        }
    }, {
        "id": 406,
        "collectionId": 28,
        "type": "weapon",
        "weaponName": "Sawed-Off",
        "skinName": "The Kraken",
        "rarity": "covert",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopbuyLgNv1fX3cih9_92hkYSEkfHLPLjFmXtE5dVOhuDG_Zi73wLlrxVpamjycdDGdFc3Z1jW-wK5k-3r0JK97Z-fn3Q26SYjsHrVzQv330-41vffvw",
        "prices": {
            "FN": 8.01,
            "MW": 6.18,
            "FT": 5.56,
            "WW": 7.89,
            "FNST": 37.74,
            "MWST": 19.68,
            "FTST": 14.84,
            "WWST": 68.42
        }
    }, {
        "id": 407,
        "collectionId": 28,
        "type": "weapon",
        "weaponName": "Rare",
        "skinName": "Special Item",
        "rarity": "gold",
        "image": "./assets/rare-item.png"
    }, 

    // eSports Winter
    {
        "id": 408,
        "collectionId": 29,
        "type": "weapon",
        "weaponName": "Galil AR",
        "skinName": "Blue Titanium",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbupIgthwczJfwJW5ci3momemqSkJYTdn2xZ_Isl2L-V8NTwiwW3rhc-YDugcYWUIw43MlHT_gK4wu690ZO66JnBySFipGB8sqXilvyj",
        "prices": {
            "FN": 1.3,
            "FNST": 4.25
        }
    }, {
        "id": 409,
        "collectionId": 29,
        "type": "weapon",
        "weaponName": "PP-Bizon",
        "skinName": "Water Sigil",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLO_JAlf2-r3ZjxW6c6Jl5KOhOPLP7LWnn8f65F12ujA8dX2igzj80RsNWH3coWScg9oN1uC8gTtkue50JK0tcnBwGwj5Hf6zmNPeA",
        "prices": {
            "FN": 1.18,
            "MW": 1.02,
            "FT": 0.9,
            "WW": 0.89,
            "BS": 0.88,
            "FNST": 4.21,
            "MWST": 3.44,
            "FTST": 2.98,
            "WWST": 2.2,
            "BSST": 2.41
        }
    }, {
        "id": 410,
        "collectionId": 29,
        "type": "weapon",
        "weaponName": "Nova",
        "skinName": "Ghost Camo",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpouLWzKjhzw8zLcDBN08u5m4S0lfvhNoTdn2xZ_It13LrEpdr02wyxrUBlZTj6IIPBJ1BqZgvRqwW3lb_m18e7tcucz3I3pGB8sjnlfuX_",
        "prices": {
            "FN": 1.39,
            "MW": 0.96,
            "FT": 0.9,
            "WW": 1.44,
            "FNST": 4.19,
            "MWST": 3.48,
            "FTST": 2.96,
            "WWST": 3.12
        }
    }, {
        "id": 411,
        "collectionId": 29,
        "type": "weapon",
        "weaponName": "G3SG1",
        "skinName": "Azure Zebra",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposem2LFZfwOP3azhA_t21lY20lfvhNoTdn2xZ_Isl2LiYrIqsiwC3-xE4Yj-lLdCQdA9qZw3X-VW2kuu80MLquJvKySRmpGB8sm7JBxX4",
        "prices": {
            "FN": 1.23,
            "MW": 0.96,
            "FT": 0.89,
            "FNST": 3.66,
            "MWST": 3.69,
            "FTST": 3.22
        }
    }, {
        "id": 412,
        "collectionId": 29,
        "type": "weapon",
        "weaponName": "P250",
        "skinName": "Steel Disruption",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopujwezhh3szMdS1D-NizmpOOqOT9P63UhFRd4cJ5nqeSo96n2Fbn80dsamCmcICUIQRsaAqB_FXvl-bmjMS0tZ-czSNn6SUq-z-DyIkxyb4T",
        "prices": {
            "FN": 1.12,
            "MW": 1.34,
            "FT": 1.38,
            "FNST": 2.99,
            "MWST": 2.69,
            "FTST": 3.43
        }
    }, {
        "id": 413,
        "collectionId": 29,
        "type": "weapon",
        "weaponName": "Five-SeveN",
        "skinName": "Nightshade",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLOzLhRlxfbGTjVb09q6m5eOheTLP7LWnn8fvMMo3uzF89r0iwTn-RBtZj-mcNfDIwBsMFmG-FW8xL_r1se07smcnWwj5HeuoxKIvw",
        "prices": {
            "FN": 1.1,
            "MW": 1.01,
            "FT": 0.91,
            "WW": 0.89,
            "BS": 0.82,
            "FNST": 3.14,
            "MWST": 3.16,
            "FTST": 2.86,
            "WWST": 2.98,
            "BSST": 2.69
        }
    }, {
        "id": 414,
        "collectionId": 29,
        "type": "weapon",
        "weaponName": "AK-47",
        "skinName": "Blue Laminate",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhoyszJemkV4N27q4KHgvLLP7LWnn8fscMpj-qUpNymjVK1_hFrMmmhJ4-Ue1c_YgrUrgS5ybvu18K6vZ-YyWwj5HdyMRX4FA",
        "prices": {
            "FN": 7.99,
            "MW": 6.87,
            "FT": 7.12,
            "WW": 9.94,
            "FNST": 25.48,
            "MWST": 18.3,
            "FTST": 17.24,
            "WWST": 19.87
        }
    }, {
        "id": 415,
        "collectionId": 29,
        "type": "weapon",
        "weaponName": "P90",
        "skinName": "Blind Spot",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopuP1FA957P7HdS5S48ilq4yCkP_gfbqGxjlTsMN0i--R8N6g3gyx_UM5NTvxddSScAQ2YFGC-lS8wLu-gcSi_MOeeRvTTZs",
        "prices": {
            "FN": 7.97,
            "MW": 7.38,
            "FT": 6.74,
            "WW": 5.85,
            "BS": 5.66,
            "FNST": 12.16,
            "MWST": 11.4,
            "FTST": 9.77,
            "WWST": 7.68,
            "BSST": 7.28
        }
    }, {
        "id": 416,
        "collectionId": 29,
        "type": "weapon",
        "weaponName": "Desert Eagle",
        "skinName": "Cobalt Disruption",
        "rarity": "classified",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposr-kLAtl7PLFTjlG_N2ikIWFhPLLI77QlWRS4_p9g-7J4cL03AzirxFvYm_zdtXBIVA4MwvVq1Dqye_ojMW4uZ2byXA1vCIi5HrcgVXp1tntQJzL",
        "prices": {
            "FN": 62.72,
            "MW": 48.14,
            "FT": 45.23,
            "FNST": 106.26,
            "MWST": 74.49,
            "FTST": 55.38
        }
    }, {
        "id": 417,
        "collectionId": 29,
        "type": "weapon",
        "weaponName": "AWP",
        "skinName": "Electric Hive",
        "rarity": "classified",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FA957PvBZzh94NWxnJTFxaasauKEzm4D6cNw2OqXrI_zi1Cw80NrYmv3d4SSe1c-NF7U_1e8xPCv28G2xAySNA",
        "prices": {
            "FN": 57.84,
            "MW": 43.11,
            "FT": 34.36,
            "WW": 38.3,
            "FNST": 93.02,
            "MWST": 74.91,
            "FTST": 51.33,
            "WWST": 72.62
        }
    }, {
        "id": 418,
        "collectionId": 29,
        "type": "weapon",
        "weaponName": "FAMAS",
        "skinName": "Afterimage",
        "rarity": "classified",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLuoKhRf0Ob3cy9N59m4q5CKg__LNbrcl3hu5Mx2gv2PoIih3QHn8kRvZj37J47DJFNoNVrW_le5kOa8gpC77prIwXJk6Scq4GGdwUKKLhXZrQ",
        "prices": {
            "MW": 34.26,
            "FT": 26.8,
            "WW": 35.32,
            "FNST": 19.09,
            "MWST": 20.32
        }
    }, {
        "id": 419,
        "collectionId": 29,
        "type": "weapon",
        "weaponName": "M4A4",
        "skinName": "X-Ray",
        "rarity": "covert",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhjxszQYzxb09Hiq4yCkP_gfb6IxDJT6pYo07HF89is2Aa3-RE4ZT_1ctTHdQE7Mg2D-la_xOvn18ei_MOeUwVqCl8",
        "prices": {
            "FN": 10.47,
            "MW": 8.34,
            "FT": 7.73,
            "FNST": 50.77,
            "MWST": 23.98,
            "FTST": 22.04
        }
    }, {
        "id": 420,
        "collectionId": 29,
        "type": "weapon",
        "weaponName": "Rare",
        "skinName": "Special Item",
        "rarity": "gold",
        "image": "./assets/rare-item.png"
    }, 

    // CS:GO 3 Weapon
    {
        "id": 421,
        "collectionId": 30,
        "type": "weapon",
        "weaponName": "CZ75-Auto",
        "skinName": "Crimson Web",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotaDyfgZf2-r3ZjhA_-O6nYeDg7mmY-KClD8C6cB3i7GT8Imj3wXnqEdrYWr7INPEcA49NwyE_lXowezsm9bi61EmokZ_",
        "prices": {
            "FN": 11.96,
            "MW": 1.06,
            "FT": 0.81,
            "WW": 0.79,
            "BS": 0.74,
            "FNST": 80.39,
            "MWST": 3.74,
            "FTST": 1.16,
            "WWST": 1.02,
            "BSST": 0.89
        }
    }, {
        "id": 422,
        "collectionId": 30,
        "type": "weapon",
        "weaponName": "P2000",
        "skinName": "Red FragCam",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovrG1eVcwg8zAaAJS49Cvq4OKmvjLP7LWnn8f7ZFy3LyWo4ml2Qbt_Ec-Mm_zcYDBIFU5YQ6F_wLqwL2-1sW_vJ3IyGwj5HdR2SbvVg",
        "prices": {
            "FN": 1.04,
            "MW": 0.71,
            "FT": 0.61,
            "WW": 0.73,
            "BS": 0.72,
            "FNST": 2.51,
            "MWST": 1.32,
            "FTST": 0.94,
            "WWST": 1.61,
            "BSST": 1.16
        }
    }, {
        "id": 423,
        "collectionId": 30,
        "type": "weapon",
        "weaponName": "Dual Berettas",
        "skinName": "Panther",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpos7asPwJfwPz3YTxM-NSzhr-HnvD8J_WBxzIFu5Rz2e_C9N2tigTm_BdsZD-mJo_BclNrZgqG8lnql-nqgJG6ot2XnpvsYABA",
        "prices": {
            "FN": 1.88,
            "MW": 1.19,
            "FT": 0.86,
            "WW": 0.83,
            "BS": 0.71,
            "FNST": 6.54,
            "MWST": 2.58,
            "FTST": 1.23,
            "WWST": 1.7,
            "BSST": 0.99
        }
    }, {
        "id": 424,
        "collectionId": 30,
        "type": "weapon",
        "weaponName": "USP-S",
        "skinName": "Stainless",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo6m1FBRp3_bGcjhQ092nq5WYh8jnJ7rYmGdU-9ZOhuDG_Zi721Lirhc-azyhcIKUcQ45ZVrV-lW2xOe6hcK_6ZqazHMyuCNx5naJzQv330_GtPNhtQ",
        "prices": {
            "FN": 17.66,
            "MW": 7.5,
            "FT": 3.7,
            "WW": 4.8,
            "BS": 2.82,
            "FNST": 72.52,
            "MWST": 27.81,
            "FTST": 13.35,
            "WWST": 12.77,
            "BSST": 9.67
        }
    }, {
        "id": 425,
        "collectionId": 30,
        "type": "weapon",
        "weaponName": "Glock-18",
        "skinName": "Blue Fissure",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbaqKAxf2-r3ci9D_cmzmJWZksj4OrzZgiUJ7Zwmj-uQoo2l2VHj-BBoZDj7LY6SdA47NV_U-gO9xeq-0MS-78_B1zI97YdssEhj",
        "prices": {
            "FN": 10.23,
            "MW": 1.23,
            "FT": 0.96,
            "WW": 1.61,
            "BS": 0.96,
            "FNST": 63.87,
            "MWST": 5.81,
            "FTST": 2.86,
            "WWST": 3.99,
            "BSST": 2.59
        }
    }, {
        "id": 426,
        "collectionId": 30,
        "type": "weapon",
        "weaponName": "CZ75-Auto",
        "skinName": "Tread Plate",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotaDyfgZf0v73dTRD4dO4kL-bm_bgNoTdn2xZ_It0jL2ToI-t2la1rkY4am7ydtKQJwdraAvV_gO3krrt05-1vsjNnHNlpGB8shn635Ab",
        "prices": {
            "FN": 5.3,
            "MW": 4.91,
            "FT": 5.26,
            "FNST": 9.09,
            "MWST": 7.08,
            "FTST": 7.14
        }
    }, {
        "id": 427,
        "collectionId": 30,
        "type": "weapon",
        "weaponName": "Tec-9",
        "skinName": "Titanium Bit",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoor-mcjhh3szOfShW6diJgIWIzsj4OrzZgiVT7scl37mXpNmliQLj_hFuZz3wJYGdJAI7Zl3Q_QXsw-fvhpW6uMnP1zI97ZyCKvWN",
        "prices": {
            "FN": 6.33,
            "MW": 5.6,
            "FT": 5.32,
            "FNST": 11.81,
            "MWST": 8.17,
            "FTST": 6.68
        }
    }, {
        "id": 428,
        "collectionId": 30,
        "type": "weapon",
        "weaponName": "Desert Eagle",
        "skinName": "Heirloom",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposr-kLAtl7PLZTjhM6863goWPqPPxMrzdk1Rd4cJ5nqeZpdj02VXk-hJuajulLIaTdQVsZlvZrFLrk-zthZS7vszPwXFruykh-z-DyCnDiqA0",
        "prices": {
            "FN": 11.53,
            "MW": 6.54,
            "FT": 5.43,
            "WW": 5.14,
            "BS": 4.98,
            "FNST": 35.82,
            "MWST": 14.97,
            "FTST": 8.78,
            "WWST": 10.47,
            "BSST": 8.64
        }
    }, {
        "id": 429,
        "collectionId": 30,
        "type": "weapon",
        "weaponName": "Five-SeveN",
        "skinName": "Copper Galaxy",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLOzLhRlxfbGTjxP09-5hJCOhcjyP77SnXhu5Mx2gv2P8d70jgzl_xFrZW71J46dcgI5YQqD_VG9yLrqgJC16c_OzSBhvCkl7WGdwUJRJd5CYQ",
        "prices": {
            "FN": 6.71,
            "MW": 5.91,
            "FT": 5.96,
            "FNST": 12.37,
            "MWST": 8.92,
            "FTST": 7.57
        }
    }, {
        "id": 430,
        "collectionId": 30,
        "type": "weapon",
        "weaponName": "CZ75-Auto",
        "skinName": "The Fuschia Is Now",
        "rarity": "classified",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotaDyfgZf0v73dyhR79S_lb-HnvD8J_WIlWoFupQp0rqUod6jiwPt-kdkYTjwcIHGIQVsYViE-lHtyOvn0ZK8ot2Xnq5iU-8q",
        "prices": {
            "FN": 41.57,
            "MW": 33.42,
            "FT": 23.2,
            "WW": 10.94,
            "FNST": 40.1,
            "MWST": 22.16,
            "FTST": 12.14,
            "WWST": 17.19
        }
    }, {
        "id": 431,
        "collectionId": 30,
        "type": "weapon",
        "weaponName": "P250",
        "skinName": "Undertow",
        "rarity": "classified",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopujwezhh3szYI2gS096zlYSOk8jkMrLfglRd4cJ5nqeT8Yjx2VDgqUU4N2-ldYSVegQ-YVnY-lPvx-6-1sDttcmYmyNkuCJ2-z-DyKbJCvT-",
        "prices": {
            "FN": 41.8,
            "MW": 29.7,
            "FT": 24.11,
            "FNST": 46.32,
            "MWST": 32.11,
            "FTST": 25.91
        }
    }, {
        "id": 432,
        "collectionId": 30,
        "type": "weapon",
        "weaponName": "CZ75-Auto",
        "skinName": "Victoria",
        "rarity": "covert",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotaDyfgZf0uL3dClB5Nmyq4ORwKLLP7LWnn8fvcNw3eyV89mj3gTkrhU5Mjqmdo-cIw86aQvWrAC7lb3sg5K07Z6bwGwj5HdaraW_tg",
        "prices": {
            "FN": 7.2,
            "MW": 4.46,
            "FT": 3.72,
            "WW": 5.01,
            "BS": 3.96,
            "FNST": 83.93,
            "MWST": 26.75,
            "FTST": 16.79,
            "WWST": 58.4,
            "BSST": 16.45
        }
    }, {
        "id": 433,
        "collectionId": 30,
        "type": "weapon",
        "weaponName": "Rare",
        "skinName": "Special Item",
        "rarity": "gold",
        "image": "./assets/rare-item.png"
    },
    
    // Operation Phoenix Weapon
    {
        "id": 434,
        "collectionId": 31,
        "type": "weapon",
        "weaponName": "UMP-45",
        "skinName": "Corporal",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo7e1f1Jf0Ob3ZDBS09-5hpCEhfb4DLfYkWNFpsR02LqS99jziVa38hU6Zj-mcoDBcANvaV_R_VTtlOu-0Z7qvsiczyd9-n51rL5-Xj4",
        "prices": {
            "FN": 0.93,
            "MW": 0.24,
            "FT": 0.16,
            "WW": 0.25,
            "BS": 0.18,
            "FNST": 1.43,
            "MWST": 0.54,
            "FTST": 0.32,
            "WWST": 0.35,
            "BSST": 0.22
        }
    }, {
        "id": 435,
        "collectionId": 31,
        "type": "weapon",
        "weaponName": "Negev",
        "skinName": "Terrain",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpouL-iLhFfwOP3fzhF6cqJgJWZhsjgNqnDl2Jf18l4jeHVu9ugigfmrUVlamD0JILBdlBqZ1zS-1S9k-3u1JK6vJ7MziNjvHJx5X3D30vg7XCk_fM",
        "prices": {
            "FN": 0.35,
            "MW": 0.24,
            "FT": 0.15,
            "WW": 0.16,
            "FNST": 0.97,
            "MWST": 0.57,
            "FTST": 0.36,
            "WWST": 0.52
        }
    }, {
        "id": 436,
        "collectionId": 31,
        "type": "weapon",
        "weaponName": "Tec-9",
        "skinName": "Sandstorm",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoor-mcjhjxszcdD4b08-3moSYg_jmPoTdn2xZ_It0jLHHoNqt2Fa2qkNvYjr1doCcdFU_MlCGq1bvwbrpjJTvtMvNwSFhpGB8snlTOTi3",
        "prices": {
            "FN": 1.55,
            "MW": 0.18,
            "FT": 0.29,
            "WW": 0.16,
            "FNST": 3.25,
            "MWST": 0.48,
            "FTST": 0.77,
            "WWST": 0.3
        }
    }, {
        "id": 437,
        "collectionId": 31,
        "type": "weapon",
        "weaponName": "MAG-7",
        "skinName": "Heaven Guard",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7uifDhjxszFcDoV09SzlZaOmcj4OrzZgiVSuJN13ruWoYjzjA3srkVrNjqgJ4CWdQM4N1HW-Vm7lLjm1sLpv5iY1zI97WT-9f-n",
        "prices": {
            "FN": 0.37,
            "MW": 0.24,
            "FT": 0.17,
            "WW": 0.23,
            "FNST": 0.97,
            "MWST": 0.57,
            "FTST": 0.35,
            "WWST": 0.43
        }
    }, {
        "id": 438,
        "collectionId": 31,
        "type": "weapon",
        "weaponName": "MAC-10",
        "skinName": "Heat",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7umeldf0Ob3fDxBvYyJhoWPn_jgDLfYkWNFpsQo3L6Yptqm0FXm_ENqNWvyIYaSd1c9Yg7Yq1fryO_rjJ_ptJvPmnp9-n514f3dXk4",
        "prices": {
            "FN": 4.26,
            "MW": 2.56,
            "FT": 1.41,
            "WW": 1.22,
            "BS": 1.22,
            "FNST": 11.55,
            "MWST": 6.49,
            "FTST": 2.8,
            "WWST": 2.63,
            "BSST": 2.36
        }
    }, {
        "id": 439,
        "collectionId": 31,
        "type": "weapon",
        "weaponName": "SG 553",
        "skinName": "Pulse",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopb3wflFf0Ob3YjoXuY-JhJWHhPLLP7LWnn8fvpMki72X99zx2FC3_0M-MTilIIKTclBoNA3YrFe2yb--1pe66MnBzGwj5Hfq1kZOBw",
        "prices": {
            "FN": 3.62,
            "MW": 1.45,
            "FT": 1.32,
            "WW": 1.1,
            "FNST": 8.18,
            "MWST": 2.7,
            "FTST": 2.85,
            "WWST": 2.43
        }
    }, {
        "id": 440,
        "collectionId": 31,
        "type": "weapon",
        "weaponName": "FAMAS",
        "skinName": "Sergeant",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLuoKhRf0v33dzxP7c-Jh4efqPv9NLPF2DIAucYniejCodnw3lK1-kJqNz_wLYXGJwc_Y1nTqAW2xOnqh5--uZjXiSw0lXvR31M",
        "prices": {
            "FN": 5.25,
            "MW": 1.36,
            "FT": 1.22,
            "WW": 1.07,
            "FNST": 8.15,
            "MWST": 2.45,
            "FTST": 2.42,
            "WWST": 2.14
        }
    }, {
        "id": 441,
        "collectionId": 31,
        "type": "weapon",
        "weaponName": "USP-S",
        "skinName": "Guardian",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo6m1FBRp3_bGcjhQ09-jq5WYh8jxP77Wl2VF18l4jeHVu9Wh3gzlqRU6NmqhINXDelA9MliBr1O_kLjuh5Dt7sjLnyBlviJ0syvD30vgdbWoQSw",
        "prices": {
            "FN": 3.57,
            "MW": 2.52,
            "FT": 1.46,
            "FNST": 9.48,
            "MWST": 6.28,
            "FTST": 3.1
        }
    }, {
        "id": 442,
        "collectionId": 31,
        "type": "weapon",
        "weaponName": "AK-47",
        "skinName": "Redline",
        "rarity": "classified",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV09-5lpKKqPv9NLPF2G1UsZFw373Cp96kigbgrUBuY22nLIWUcgRvN17Y8lnrlbrm157quJ3XiSw0p7BLliM",
        "prices": {
            "FN": 76.06,
            "MW": 15.72,
            "FT": 13.2,
            "WW": 9.53,
            "FNST": 175.12,
            "MWST": 40.23,
            "FTST": 32.77,
            "WWST": 20.91
        }
    }, {
        "id": 443,
        "collectionId": 31,
        "type": "weapon",
        "weaponName": "P90",
        "skinName": "Trigon",
        "rarity": "classified",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopuP1FAR17OORIQJW_tWxm460m_7zO6-fwDkG7pxwibiU9t6k2AHirkBtNmGgINCXdFM8MlvWqFjowr28jJC_tIOJlyVRsc7XqA",
        "prices": {
            "FN": 10.38,
            "MW": 8.75,
            "FT": 8.42,
            "WW": 8.91,
            "FNST": 17.2,
            "MWST": 14.38,
            "FTST": 13.73,
            "WWST": 17.28
        }
    }, {
        "id": 444,
        "collectionId": 31,
        "type": "weapon",
        "weaponName": "Nova",
        "skinName": "Antique",
        "rarity": "classified",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpouLWzKjhjxszGfitD0924gImagvLLP7LWnn8fusQji7_ErNum3wbsrUpuY2v2JITDc1NrNw2CqQXtk-a50MDutJTOwWwj5Hfomz2D2g",
        "prices": {
            "FN": 10.13,
            "MW": 9.85,
            "FT": 9.6,
            "FNST": 25.17,
            "MWST": 17.26,
            "FTST": 13.58
        }
    }, {
        "id": 445,
        "collectionId": 31,
        "type": "weapon",
        "weaponName": "AWP",
        "skinName": "Asiimov",
        "rarity": "covert",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FAR17PLfYQJD_9W7m5a0mvLwOq7c2G9SupUijOjAotyg3w2x_0ZkZ2rzd4OXdgRoYQuE8gDtyL_mg5K4tJ7XiSw0WqKv8kM",
        "prices": {
            "FN": 142.45,
            "MW": 103.43,
            "FT": 76.68,
            "FNST": 273.09,
            "MWST": 183.58,
            "FTST": 122.43
        }
    }, {
        "id": 446,
        "collectionId": 31,
        "type": "weapon",
        "weaponName": "AUG",
        "skinName": "Chameleon",
        "rarity": "covert",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot6-iFAR17PLddgJB5N27kYyOmPn1OqnUqWdY781lxLiW9Nr2iwzh_xFpMW70cYeXIQE4ZwnR-wW5w--9gZPuvpjMziNrvyk8pSGK5tyGFpE",
        "prices": {
            "FN": 5.24,
            "FNST": 19.12,
            "MWST": 11.04,
            "FTST": 7.9,
            "WWST": 8.38,
            "BSST": 9.08
        }
    }, {
        "id": 447,
        "collectionId": 31,
        "type": "weapon",
        "weaponName": "Rare",
        "skinName": "Special Item",
        "rarity": "gold",
        "image": "./assets/rare-item.png"
    },

    // Huntsman Case
    {
        "id": 448,
        "collectionId": 32,
        "type": "weapon",
        "weaponName": "CZ75-Auto",
        "skinName": "Twist",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotaDyfgZf0v73diRQ7cizq4yCkP_gfeKBkDIGu5Moi76Yo9WgiQOyrxA-ZWrwdY_Ge1c3NF3WrFO3kO7q0ZOi_MOeMT7uSi0",
        "prices": {
            "FN": 1.49,
            "MW": 1,
            "FT": 0.86,
            "WW": 0.81,
            "BS": 0.83,
            "FNST": 2.46,
            "MWST": 1.63,
            "FTST": 1.27,
            "WWST": 1.12,
            "BSST": 1.17
        }
    }, {
        "id": 449,
        "collectionId": 62,
        "type": "weapon",
        "weaponName": "CZ75-Auto",
        "skinName": "Poison Dart",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotaDyfgZf0v73fzRW_tOxkY60m_7zO6-fk2oA7JQmjL7EpY700VK1_EJtYW-iIIDHcVRvaFGCrFO7ybq508O-uYOJlyUWxV7F4g",
        "prices": {
            "FN": 3.89,
            "MW": 1.48,
            "FT": 1.14,
            "WW": 2.84,
            "BS": 1.49,
            "FNST": 8.84,
            "MWST": 2.82,
            "FTST": 1.44,
            "WWST": 2.74,
            "BSST": 1.08
        }
    }, {
        "id": 450,
        "collectionId": 32,
        "type": "weapon",
        "weaponName": "P90",
        "skinName": "Module",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopuP1FAZu7OHHaDxO7tCzkYS0m_7zO6-fwzNV7scl0ryQrNytjAPsqEBtNmvzIYKSdQE3YgnW-FG3w-3ohpHo7oOJlyXY6CwB5A",
        "prices": {
            "FN": 1.2,
            "MW": 0.95,
            "FT": 0.84,
            "FNST": 2.55,
            "MWST": 1.69,
            "FTST": 1.49
        }
    }, {
        "id": 451,
        "collectionId": 62,
        "type": "weapon",
        "weaponName": "P90",
        "skinName": "Desert Warfare",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopuP1FAR17OORIQJR79OkhImehMj4OrzZgiUJ7pRzibvHo43ziwCx_BVlNT-hI9eRdwc8ZFrU_FDoxL_u0cC8u8yd1zI97Zyq9VwK",
        "prices": {
            "FN": 2.23,
            "MW": 1.49,
            "FT": 1.2,
            "WW": 1.63,
            "BS": 3.29,
            "FNST": 9.07,
            "MWST": 2.95,
            "FTST": 1.46,
            "WWST": 2.14,
            "BSST": 3
        }
    }, {
        "id": 452,
        "collectionId": 32,
        "type": "weapon",
        "weaponName": "P2000",
        "skinName": "Pulse",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovrG1eVcwg8zLZAJSvozmxL-bgvvnNoTdn2xZ_Itw3bDH9or2jAHt-UNuZ2D2IYGWI1RoNQyD-wS5x-zo18O6vs_NnHMwpGB8so7_je6r",
        "prices": {
            "FN": 1.12,
            "MW": 1,
            "FT": 0.86,
            "WW": 0.81,
            "BS": 0.75,
            "FNST": 2.04,
            "MWST": 1.55,
            "FTST": 1.3,
            "WWST": 1.08,
            "BSST": 1
        }
    }, {
        "id": 453,
        "collectionId": 62,
        "type": "weapon",
        "weaponName": "Dual Berettas",
        "skinName": "Retribution",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpos7asPwJf0Ob3YzhW_tW0gZSCmPnLP7LWnn8fsZx3jL6WpNSt31Hj8hZuYjumJ4eRegFtYF3QqQO5lO7ngsW7tMmfn2wj5HdUrNxcDA",
        "prices": {
            "FN": 2.77,
            "MW": 2.31,
            "FT": 1.59,
            "WW": 1.71,
            "FNST": 3.74,
            "MWST": 1.78,
            "FTST": 1.29,
            "WWST": 1.59
        }
    }, {
        "id": 454,
        "collectionId": [32,62],
        "type": "weapon",
        "weaponName": "Tec-9",
        "skinName": "Isaac",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoor-mcjhjxszcdD4b092lnYmGmOHLP7LWnn8fscQljOuY947z3lLk-kFsajv7ctKWJ1BoNAyB-wTrkri8hMO57ZSYymwj5HfRdvOI1A",
        "prices": {
            "FN": 8.5,
            "MW": 2.45,
            "FT": 1.35,
            "WW": 0.85,
            "BS": 0.82,
            "FNST": 21.11,
            "MWST": 4.74,
            "FTST": 2.18,
            "WWST": 1.27,
            "BSST": 1.11
        }
    }, {
        "id": 455,
        "collectionId": [32,62],
        "type": "weapon",
        "weaponName": "SSG 08",
        "skinName": "Slashed",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopamie19f0Ob3Yi5FvISJnY2GmOXgMrfum25V4dB8xLHE8In03VGxrRc5YWH7cIDEIVRqN13V_QDskue8hse7uJqbyXJr7nI8pSGK39kSQ_o",
        "prices": {
            "MW": 0.89,
            "FT": 0.83,
            "WW": 0.76,
            "MEST": 1.45,
            "FTST": 1.29,
            "WWST": 1.17
        }
    }, {
        "id": 456,
        "collectionId": [32,62],
        "type": "weapon",
        "weaponName": "Galil AR",
        "skinName": "Kami",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbupIgthwczAaAJF7dC_mL-Alvr9DLfYkWNFpsMg3bGSot6kigHn-ks5MmzydtXHdQ43YQqG8wLqwe7ngcfq78nKnHF9-n51KnSskEo",
        "prices": {
            "FN": 2.3,
            "MW": 1.42,
            "FT": 0.84,
            "WW": 0.91,
            "BS": 0.76,
            "FNST": 3.78,
            "MWST": 2.36,
            "FTST": 1.38,
            "WWST": 1.43,
            "BSST": 1.01
        }
    }, {
        "id": 457,
        "collectionId": [32,62],
        "type": "weapon",
        "weaponName": "MAC-10",
        "skinName": "Tatter",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7umeldf0Ob3ejJQ-cyiq4yCkP_gfb2Axm8IvJIgibGTo4in3QfkrRE_MTr7JNKTd1M9YQvV-VPvxOa9gJGi_MOesRT03GA",
        "prices": {
            "FN": 7.33,
            "MW": 6.56,
            "FT": 5.8,
            "WW": 4.64,
            "BS": 4.28,
            "FNST": 13.49,
            "MWST": 12.57,
            "FTST": 9.76,
            "WWST": 6.9,
            "BSST": 4.27
        }
    }, {
        "id": 458,
        "collectionId": [32,62],
        "type": "weapon",
        "weaponName": "AUG",
        "skinName": "Torque",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot6-iFAR17PLddgJS_tOxhoWYhP7iDLfYkWNFpsMm27vD9Iqs2gHnqRdvZm6gI4fEcwM8ZAyBqVS_lO3vh5-075TMynd9-n51xJ7ya_c",
        "prices": {
            "FN": 8.09,
            "MW": 6.54,
            "FT": 6.11,
            "WW": 4.86,
            "BS": 4.44,
            "FNST": 15.39,
            "MWST": 13.06,
            "FTST": 9.87,
            "WWST": 7.74,
            "BSST": 6.27
        }
    }, {
        "id": 459,
        "collectionId": [32,62],
        "type": "weapon",
        "weaponName": "PP-Bizon",
        "skinName": "Antique",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLO_JAlf0Ob3czRY49KJlY6fnubhNoTdn2xZ_Ish3L2Xot2i3QHl-kprZT2icYKXcw9raAuC-Aftyb-9h5bo6p2cz3dgpGB8sj073FQS",
        "prices": {
            "FN": 8.31,
            "MW": 6.7,
            "FT": 5.65,
            "WW": 4.44,
            "BS": 4.34,
            "FNST": 15,
            "MWST": 11.73,
            "FTST": 9.84,
            "WWST": 6.44,
            "BSST": 4.9
        }
    }, {
        "id": 460,
        "collectionId": [32,62],
        "type": "weapon",
        "weaponName": "XM1014",
        "skinName": "Heaven Guard",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgporrf0e1Y07PDdTiVPvYznwL-DkvbiNrXukX5Q-sFOhuDG_Zi7iwOy-BVka2j2co_GI1c3YwyBq1Tol7vrhp-8tJXJmnNluiZ04S7Vngv330-HrBGoDg",
        "prices": {
            "FN": 8.48,
            "MW": 6.44,
            "FT": 5.82,
            "WW": 5.09,
            "BS": 4.73,
            "FNST": 14.23,
            "MWST": 13.06,
            "FTST": 9.67,
            "WWST": 6.79,
            "BSST": 5.08
        }
    }, {
        "id": 461,
        "collectionId": 32,
        "type": "weapon",
        "weaponName": "USP-S",
        "skinName": "Caiman",
        "rarity": "classified",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo6m1FBRp3_bGcjhQ09-jq4uKnvr1PYTdn2xZ_Ispj-2Qo9Sh3wyx-ENqMT3wLITEewZvNwrRqFa_kLrm05G5uZybynZhpGB8srszwr4w",
        "prices": {
            "FN": 49.79,
            "MW": 39.44,
            "FT": 33.86,
            "WW": 28.58,
            "FNST": 101.25,
            "MWST": 71.63,
            "FTST": 46.62,
            "WWST": 28.27
        }
    }, {
        "id": 462,
        "collectionId": 62,
        "type": "weapon",
        "weaponName": "USP-S",
        "skinName": "Orion",
        "rarity": "classified",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo6m1FBRp3_bGcjhQ09-jq5WYh8jnI7LFkGJD7fp9g-7J4cKt0Ae280RrMmGiIYHGe1JqYFnS8ge8xOvv0cLoupTNnXtms3Yh5HrdgVXp1tiSOwO6",
        "prices": {
            "FN": 50.94,
            "MW": 40.55,
            "FT": 34.11,
            "WW": 36.81,
            "BS": 35.59,
            "FNST": 110.38,
            "MWST": 72.22,
            "FTST": 64.85,
            "WWST": 129.86,
            "BSST": 214.94
        }
    }, {
        "id": 463,
        "collectionId": [32,62],
        "type": "weapon",
        "weaponName": "M4A1-S",
        "skinName": "Atomic Alloy",
        "rarity": "classified",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO3mb-Gw_alfqjul2dd59xOhfvA-4vwt1i9rBsofWHxdtKXdQRqYVrV_Ae_xru9jZC8vpSYwSZiviEjtnuImkfhg0ofZ7ZxxavJioUkVPc",
        "prices": {
            "FN": 65.14,
            "MW": 35.22,
            "FT": 29.59,
            "WW": 23.8,
            "BS": 20.74,
            "FNST": 118,
            "MWST": 71.39,
            "FTST": 37.2,
            "WWST": 29.49,
            "BSST": 25.74
        }
    }, {
        "id": 464,
        "collectionId": [32,62],
        "type": "weapon",
        "weaponName": "SCAR-20",
        "skinName": "Cyrex",
        "rarity": "classified",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopbmkOVUw7PDdTi5B7c6Jl5mZku_LP7LWnn8f7cAljuiQpomnjAPgr0M6N2ilcNTEIw5oYwuB_ljrk--8gsC87c6amGwj5HcY7eHXug",
        "prices": {
            "FN": 52.53,
            "MW": 42.47,
            "FT": 32.38,
            "WW": 22.09,
            "BS": 21.43,
            "FNST": 93.79,
            "MWST": 71.76,
            "FTST": 42.63,
            "WWST": 9.1,
            "BSST": 9.05
        }
    }, {
        "id": 465,
        "collectionId": 32,
        "type": "weapon",
        "weaponName": "M4A4",
        "skinName": "Desert-Strike",
        "rarity": "covert",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhjxszceClD4s-im5KGqPv9NLPF2GoAvpR3jL_E9N6miVLmr0o-MT2gJNeSdwFoZFnW-QfvwL-7jZHtv53XiSw0Hg_ppDA",
        "prices": {
            "FN": 5.19,
            "MW": 3.85,
            "FT": 3.07,
            "WW": 4.59,
            "BS": 3.59,
            "FNST": 20.18,
            "MWST": 11.3,
            "FTST": 7.84,
            "WWST": 15.06,
            "BSST": 8.78
        }
    }, {
        "id": 466,
        "collectionId": 62,
        "type": "weapon",
        "weaponName": "M4A4",
        "skinName": "Howl",
        "rarity": "covert",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhjxszFJTwT09S5g4yCmfDLP7LWnn8f65Mli7DH9tXziQTgqUY4YmmnINSUJwQ-YVnT_wS7yOzngMW07ZrOmmwj5HeObpQQtA",
        "prices": {
            "FN": 7524.8,
            "MW": 5137.12,
            "FT": 4114.87,
            "WW": 4005.73,
            "FNST": 19753,
            "MWST": 14065,
            "FTST": 8379,
            "WWST": 10012.8
        }
    }, {
        "id": 467,
        "collectionId": [32,62],
        "type": "weapon",
        "weaponName": "AK-47",
        "skinName": "Vulcan",
        "rarity": "covert",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV086jloKOhcj4OrzZgiUEsJYnibqZ8d-l2wO1_hJtNWDzctDBIQ5taAzQqFi6wujo1se06cud1zI97ZAmS4pT",
        "prices": {
            "FN": 696.63,
            "MW": 441.65,
            "FT": 210.2,
            "WW": 105.86,
            "BS": 59.57,
            "FNST": 1319.02,
            "MWST": 741.85,
            "FTST": 322.39,
            "WWST": 176.08,
            "BSST": 110.48
        }
    }, {
        "id": 996,
        "collectionId": [32,62],
        "type": "weapon",
        "weaponName": "Rare",
        "skinName": "Huntsman Knife",
        "rarity": "gold",
        "image": "./assets/huntsman-knife.png"
    }, 

    // Operation Breakout
    {
        "id": 468,
        "collectionId": 33,
        "type": "weapon",
        "weaponName": "MP7",
        "skinName": "Urban Hazard",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6ryFAR17P7YJnBB49G7lY6PkuXLP7LWnn8fupMhjrrHp9uj3Vfs-BVrZjyicNfGd1dsNV6FrFW_yem61JTvvp3BwGwj5HdMYFr9GQ",
        "prices": {
            "FN": 0.21,
            "MW": 0.13,
            "FT": 0.08,
            "WW": 0.11,
            "BS": 0.13,
            "FNST": 0.8,
            "MWST": 0.42,
            "FTST": 0.23,
            "WWST": 0.28,
            "BSST": 0.27
        }
    }, {
        "id": 469,
        "collectionId": 33,
        "type": "weapon",
        "weaponName": "Negev",
        "skinName": "Desert-Strike",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpouL-iLhFf0Ob3fzhF6cqJgImflvnnJ7TDm1Rd4cJ5nqfE99v3iVC3_EY5MDuhJdSRIVJoYl2CrAO7wu7njZG_vc-bnHNi6XIi-z-DyP8H2Bl8",
        "prices": {
            "FN": 0.21,
            "MW": 0.12,
            "FT": 0.07,
            "WW": 0.1,
            "BS": 0.06,
            "FNST": 0.74,
            "MWST": 0.38,
            "FTST": 0.22,
            "WWST": 0.24,
            "BSST": 0.29
        }
    }, {
        "id": 470,
        "collectionId": 33,
        "type": "weapon",
        "weaponName": "SSG 08",
        "skinName": "Abyss",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopamie19f0uL3fThU5d2inIGFqPv9NLPF2DtVuMZ03ruU99mm3wDi_0E4Yz3yctTDJgZtYQ2D_FK6lLzngJG86s_XiSw0q3P5_qg",
        "prices": {
            "FN": 3.34,
            "MW": 0.76,
            "FT": 0.31,
            "WW": 0.16,
            "BS": 0.16,
            "FNST": 11.71,
            "MWST": 2.23,
            "FTST": 0.94,
            "WWST": 0.65,
            "BSST": 0.68
        }
    }, {
        "id": 471,
        "collectionId": 33,
        "type": "weapon",
        "weaponName": "UMP-45",
        "skinName": "Labyrinth",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo7e1f1Jf2-r3fTRM6c-Jm5KKmfDxDLfYkWNFpsEh2r3E9N-t0Qbn_RZqNTj2cNeXJAY7ZF2BqFTswunthsTo6p7PnXN9-n515zllnX0",
        "prices": {
            "FN": 0.2,
            "MW": 0.12,
            "FT": 0.08,
            "WW": 0.18,
            "FNST": 0.79,
            "MWST": 0.36,
            "FTST": 0.23,
            "WWST": 0.3
        }
    }, {
        "id": 472,
        "collectionId": 33,
        "type": "weapon",
        "weaponName": "P2000",
        "skinName": "Ivory",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovrG1eVcwg8zLZAJSvozmxL-CgfjmKoTdn2xZ_Isji72W992higHtqBZram_6IYCcdw5tNFnTqQO4wejugpe4tMvOznNipGB8suknXBW9",
        "prices": {
            "FN": 0.39,
            "MW": 0.12,
            "FT": 0.08,
            "WW": 0.06,
            "BS": 0.07,
            "FNST": 1.34,
            "MWST": 0.36,
            "FTST": 0.23,
            "WWST": 0.19,
            "BSST": 0.17
        }
    }, {
        "id": 473,
        "collectionId": 33,
        "type": "weapon",
        "weaponName": "Nova",
        "skinName": "Koi",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpouLWzKjhjxszGfitD09e5nb-HnvD8J_WDzmgC7sAh2e-Wptr33AywrhZtYzzycY6dJwE5MAvQ-FC9w7q818e6ot2XnnuHYbTd",
        "prices": {
            "FN": 1.29,
            "MW": 0.79,
            "FT": 0.56,
            "FNST": 3.82,
            "MWST": 2.29,
            "FTST": 1.77
        }
    }, {
        "id": 474,
        "collectionId": 33,
        "type": "weapon",
        "weaponName": "P250",
        "skinName": "Supernova",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopujwezhjxszKeClW6c6lg4WOg8j4OrzZgiUJu8Z13rGYo9Tx3w3g-kE5YzqlJoSWcVQ2NFnY_FG8l7jtgp-87cnN1zI97REHXRpE",
        "prices": {
            "FN": 1.27,
            "MW": 0.8,
            "FT": 0.54,
            "WW": 0.89,
            "FNST": 3.5,
            "MWST": 2.29,
            "FTST": 1.6,
            "WWST": 2.21
        }
    }, {
        "id": 475,
        "collectionId": 33,
        "type": "weapon",
        "weaponName": "PP-Bizon",
        "skinName": "Osiris",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLO_JAlf0Ob3czRY49L7m5OChf7nDLfYkWNFppcn0-yRpomkiVDh8ks-ZG-icNSdegI5YVyD_ge6ybroh5Pu6c_MnyF9-n517UL6Piw",
        "prices": {
            "FN": 1.35,
            "MW": 0.79,
            "FT": 0.52,
            "WW": 0.52,
            "BS": 0.5,
            "FNST": 4.08,
            "MWST": 2.33,
            "FTST": 1.43,
            "WWST": 1.05,
            "BSST": 0.89
        }
    }, {
        "id": 476,
        "collectionId": 33,
        "type": "weapon",
        "weaponName": "CZ75-Auto",
        "skinName": "Tigris",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotaDyfgZf0Ob3cmoX7ZGinYeOhcj4OrzZgiVTv5AliLzAot_20FLmqUFsZGD3JtPHcgI4NA6EqAW6kr-70Ja4uZzK1zI97c1w2kE2",
        "prices": {
            "FN": 1.54,
            "MW": 0.76,
            "FT": 0.5,
            "WW": 0.4,
            "BS": 0.38,
            "FNST": 4.43,
            "MWST": 2.09,
            "FTST": 1.29,
            "WWST": 1.01,
            "BSST": 0.81
        }
    }, {
        "id": 477,
        "collectionId": 33,
        "type": "weapon",
        "weaponName": "Desert Eagle",
        "skinName": "Conspiracy",
        "rarity": "classified",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposr-kLAtl7PDdTjlH7du6kb-KguXxJqjummJW4NE_3e_Aotql3QO3qUNpNWugddSdcA9sNFzU8ge_w-6-0JO4vJrIzCZj7z5iuygmT5QrCQ",
        "prices": {
            "FN": 7.36,
            "MW": 5.03,
            "FT": 4.72,
            "FNST": 23.57,
            "MWST": 15.27,
            "FTST": 13.57
        }
    }, {
        "id": 478,
        "collectionId": 33,
        "type": "weapon",
        "weaponName": "Five-SeveN",
        "skinName": "Fowl Play",
        "rarity": "classified",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLOzLhRlxfbGTjxT04nhq4aOluP8NqnCqWdY781lxOjArNinjgbsr0Y6N2H1LICRcVQ7ZQqB-gK9wOnohZXotM_PyHdkvyQ8pSGKUj1ARXg",
        "prices": {
            "FN": 6.57,
            "MW": 3.32,
            "FT": 2.19,
            "WW": 1.82,
            "BS": 1.88,
            "FNST": 19.99,
            "MWST": 8.27,
            "FTST": 4.69,
            "WWST": 3.45,
            "BSST": 3.11
        }
    }, {
        "id": 479,
        "collectionId": 33,
        "type": "weapon",
        "weaponName": "Glock-18",
        "skinName": "Water Elemental",
        "rarity": "classified",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbaqKAxf0Ob3djFN79f7mImagvLnML7fglRd4cJ5nqeQoN3w0QHgrhdoMjylJo7GIVU7ZAzQqQC6k-rs1JHotZvNzSRgvHFx-z-DyPzurK-U",
        "prices": {
            "FN": 11.21,
            "MW": 6.2,
            "FT": 4.45,
            "WW": 5.22,
            "BS": 3.84,
            "FNST": 37.6,
            "MWST": 22.06,
            "FTST": 12.01,
            "WWST": 12.52,
            "BSST": 9.5
        }
    }, {
        "id": 480,
        "collectionId": 33,
        "type": "weapon",
        "weaponName": "M4A1-S",
        "skinName": "Cyrex",
        "rarity": "covert",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO1gb-Gw_alIITSj3lU8Pp9g-7J4cKk3AC2_0NpYDyhI4XHdlc6Zg7Y-1O2lLy9hcO0vJWdwSdhsnYnt3aOgVXp1hcjOJd2",
        "prices": {
            "FN": 38.28,
            "MW": 26.31,
            "FT": 18.13,
            "WW": 16.86,
            "BS": 16.22,
            "FNST": 103.81,
            "MWST": 71.25,
            "FTST": 41.9,
            "WWST": 36.03,
            "BSST": 33.59
        }
    }, {
        "id": 481,
        "collectionId": 33,
        "type": "weapon",
        "weaponName": "P90",
        "skinName": "Asiimov",
        "rarity": "covert",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopuP1FAR17OORIXBD_9W_mY-dqPv9NLPF2DtS6ZJ33e_Cpd-niw3sqEY_MGzzItXGJlM3YwrT-QS7ye3p1J7ttJXXiSw09F9GDzA",
        "prices": {
            "FN": 38.01,
            "MW": 19.29,
            "FT": 9.08,
            "WW": 7.33,
            "BS": 6.58,
            "FNST": 141.56,
            "MWST": 50.73,
            "FTST": 20.47,
            "WWST": 17.09,
            "BSST": 15.08
        }
    }, {
        "id": 482,
        "collectionId": 33,
        "type": "weapon",
        "weaponName": "Rare",
        "skinName": "Butterfly Knife",
        "rarity": "gold",
        "image": "./assets/butterfly-knife.png"
    }, 

    // eSports 2014 Summer
    {
        "id": 483,
        "collectionId": 34,
        "type": "weapon",
        "weaponName": "XM1014",
        "skinName": "Red Python",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgporrf0e1Y07PvRTi5M7dezh4uCmcjmNr_ummJW4NE_jrmQrI2n3VHl-xU5ZmqlJtPBJAQ3ZFCGqFK8w73qjJC-vcybmnY37z5iuygToKRWzQ",
        "prices": {
            "FN": 1.18,
            "MW": 0.75,
            "FT": 0.75,
            "WW": 0.71,
            "FNST": 2.43,
            "MWST": 1.15,
            "FTST": 1.02,
            "WWST": 1.09
        }
    }, {
        "id": 484,
        "collectionId": 34,
        "type": "weapon",
        "weaponName": "Negev",
        "skinName": "Bratatat",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpouL-iLhFf0Ob3cy9D-N2ilZS0mfLzNq3ummJW4NE_iL6UrdX22wfhrRFrY2_1cIOWIAc2aF-F-lG-l-7shMK_vZvPzXM2vD5iuyhjALW35A",
        "prices": {
            "FN": 4.2,
            "MW": 1.29,
            "FT": 0.87,
            "WW": 0.96,
            "BS": 0.68,
            "FNST": 16.77,
            "MWST": 3.55,
            "FTST": 1.78,
            "WWST": 1.24,
            "BSST": 1.16
        }
    }, {
        "id": 485,
        "collectionId": 34,
        "type": "weapon",
        "weaponName": "CZ75-Auto",
        "skinName": "Hexane",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotaDyfgZf2-r3czFX6dSzjL-HnvD8J_WBxTlUvMch07CYrd-liQDhr0RoYGCnJIHDI1NoZ16C8lO3yL_uhZPqot2XnnI1PsT0",
        "prices": {
            "FN": 2.85,
            "MW": 1.14,
            "FT": 0.83,
            "WW": 1.22,
            "FNST": 7.65,
            "MWST": 2.34,
            "FTST": 1.19,
            "WWST": 0.99
        }
    }, {
        "id": 486,
        "collectionId": 34,
        "type": "weapon",
        "weaponName": "USP-S",
        "skinName": "Blood Tiger",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo6m1FBRp3_bGcjhQ09Svq5KOk-P9NL7DqWdY781lxLzFotutjgLk-EM4Nm36Jo-TJAU6aFjY-1a2wLrngcPqvpzMmHsxsyA8pSGKsCRkSow",
        "prices": {
            "FN": 3.14,
            "MW": 1.22,
            "FT": 1.03,
            "FNST": 8.23,
            "MWST": 2.77,
            "FTST": 3.01
        }
    }, {
        "id": 487,
        "collectionId": 34,
        "type": "weapon",
        "weaponName": "MAC-10",
        "skinName": "Ultraviolet",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7umeldfwPz3YShQ_NCzq4yCkP_gfeyFxjkJucd1jriSpdWj3A3trUdoZm2nIIKTJgY4ZljT_QO7yOzt15Gi_MOeZdyTg1I",
        "prices": {
            "FN": 17.88,
            "MW": 2.3,
            "FT": 0.95,
            "WW": 0.95,
            "BS": 0.7,
            "FNST": 39.33,
            "MWST": 3.82,
            "FTST": 1.46,
            "WWST": 1.32,
            "BSST": 1.15
        }
    }, {
        "id": 488,
        "collectionId": 34,
        "type": "weapon",
        "weaponName": "SSG 08",
        "skinName": "Dark Water",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopamie19f0v73azhA_t2JkIGZnMj4OrzZgiUEvpYn2b6Qo9WjjVGx-EE4ajjwcYOdelBoYgrU-Ae4k-3sgpG66JTA1zI97X70QwDF",
        "prices": {
            "FN": 1.41,
            "MW": 0.99,
            "FNST": 2.85,
            "MWST": 1.71
        }
    }, {
        "id": 489,
        "collectionId": 34,
        "type": "weapon",
        "weaponName": "Desert Eagle",
        "skinName": "Crimson Web",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposr-kLAtl7PvRTipH7s-JkIGZnPLmDLfYkWNFppJz0-rDpNX3iVfh-RY-Nm6gII_AcVdsNQ6C-gK6we661JS5vsucn3p9-n51o0mKsnM",
        "prices": {
            "FN": 96.62,
            "MW": 20.67,
            "FT": 5.65,
            "WW": 6.75,
            "BS": 4.92,
            "FNST": 397.99,
            "MWST": 46.6,
            "FTST": 12.53,
            "WWST": 12.91,
            "BSST": 11.38
        }
    }, {
        "id": 490,
        "collectionId": 34,
        "type": "weapon",
        "weaponName": "Glock-18",
        "skinName": "Steel Disruption",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbaqKAxf0v73dTlS7ciykY6YksjnOrfHk3lu5Mx2gv2PoYit21fkqkM-amz7dtSUd1A4aFyD_VG6xufmg8Pv6ZjAn3Yx7yAntGGdwUKGy9wICw",
        "prices": {
            "FN": 2.67,
            "MW": 2.15,
            "FT": 2.56,
            "FNST": 6.91,
            "MWST": 5.18,
            "FTST": 4.5
        }
    }, {
        "id": 491,
        "collectionId": 34,
        "type": "weapon",
        "weaponName": "MP7",
        "skinName": "Ocean Foam",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6ryFAZt7PzbYjRE9eO0mJWOqPv9NLPF2GkD65Um3ejH9t6mjFC2_0tva2j1Jo-UdwM5YFvY-1fqk7jvjMDutJnXiSw09mDA2sI",
        "prices": {
            "FN": 3.01,
            "MW": 2.84,
            "FNST": 7.24,
            "MWST": 7.53
        }
    }, {
        "id": 492,
        "collectionId": 34,
        "type": "weapon",
        "weaponName": "PP-Bizon",
        "skinName": "Blue Streak",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLO_JAlf2-r3Yi1O7ciikZK0m_7zO6-fwWoGvJQmjrCUodSgi1G2-UJoazuncIXBcAQ2Y1nZ-VG5webt0Me07YOJlyXH5-nvZA",
        "prices": {
            "FN": 6.96,
            "MW": 2.21,
            "FT": 1.33,
            "WW": 1.31,
            "BS": 1.23,
            "FNST": 18.66,
            "MWST": 4.38,
            "FTST": 2.29,
            "WWST": 2.19,
            "BSST": 1.62
        }
    }, {
        "id": 493,
        "collectionId": 34,
        "type": "weapon",
        "weaponName": "P90",
        "skinName": "Virus",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopuP1FA957OnHfD9L6eO6nYeDg7mjNe2HlDgB7ZMo2rvA8Nui2ga2_EppYj-nI4KRdFdrZg3ZqFK2ye66m9bi66gMGC9v",
        "prices": {
            "FN": 3.6,
            "MW": 2.16,
            "FT": 1.99,
            "WW": 1.29,
            "BS": 1.99,
            "FNST": 14.9,
            "MWST": 4.43,
            "FTST": 2.04,
            "WWST": 1.85,
            "BSST": 1.73
        }
    }, {
        "id": 494,
        "collectionId": 34,
        "type": "weapon",
        "weaponName": "P2000",
        "skinName": "Corticera",
        "rarity": "classified",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovrG1eVcwg8zLZAJE7cqzmIG0h6WkY-vummJW4NE_ieqVpYj33FDh-0dkMG6ncNXDIAM8Z1zSrli7xbvmhJK8vMjMwHBquj5iuygQNvutGg",
        "prices": {
            "FN": 9,
            "MW": 4.11,
            "FT": 4.35,
            "FNST": 25.26,
            "MWST": 11.34,
            "FTST": 8.47
        }
    }, {
        "id": 495,
        "collectionId": 34,
        "type": "weapon",
        "weaponName": "AWP",
        "skinName": "Corticera",
        "rarity": "classified",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FAR17PXJZzhO7eO3g5C0m_7zO6-fwjgDscYh3r7E9N2t0Q2y-EtoZTjydY6UdwU3MwnSq1O5x-jq1JO46YOJlyV_32xwKg",
        "prices": {
            "FN": 37.28,
            "MW": 16.71,
            "FT": 14.72,
            "FNST": 83.73,
            "MWST": 37.28,
            "FTST": 27.99
        }
    }, {
        "id": 496,
        "collectionId": 34,
        "type": "weapon",
        "weaponName": "Nova",
        "skinName": "Bloomstick",
        "rarity": "classified",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpouLWzKjhjxszbYS9L4tuJmo-dlsj4OrzZgiUB6sAo3-iRpIjx3QC2_kRlYmH1IICRJgY7YluD_1C3xLi515e47ZWf1zI97e0mCGNf",
        "prices": {
            "FN": 49.33,
            "MW": 13.5,
            "FT": 5.37,
            "WW": 4.73,
            "BS": 5.7,
            "FNST": 194.85,
            "MWST": 32.77,
            "FTST": 10.67,
            "WWST": 5.76,
            "BSST": 8.88
        }
    }, {
        "id": 497,
        "collectionId": 34,
        "type": "weapon",
        "weaponName": "AUG",
        "skinName": "Bengal Tiger",
        "rarity": "classified",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot6-iFA957OfBdjhQ09C_k4if2fOmNb6IwzxVu5wh2e3CoNui0QDk-BY4Yjr6IY-RdVM_aQ6B_QS4l7rxxcjrbrM2HEQ",
        "prices": {
            "FN": 35.24,
            "MW": 7.38,
            "FT": 3.52,
            "WW": 3.65,
            "BS": 3.17,
            "FNST": 117.12,
            "MWST": 21.9,
            "FTST": 7.53,
            "WWST": 7.41,
            "BSST": 7.13
        }
    }, {
        "id": 498,
        "collectionId": 34,
        "type": "weapon",
        "weaponName": "M4A4",
        "skinName": "Bullet Rain",
        "rarity": "covert",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhjxszKZDFO6ciJhoGCmcj5Z7qAqWdY781lxL3Dptms2wzjqUs9MTqndobEJw88YFvUqAC-l-zuhZDvuJ3MnXthuCI8pSGKrTrO99I",
        "prices": {
            "FN": 32.42,
            "MW": 8.68,
            "FT": 7.49,
            "WW": 9.99,
            "BS": 21.11,
            "FNST": 118.9,
            "MWST": 36.08,
            "FTST": 19.85,
            "WWST": 51.95,
            "BSST": 128.48
        }
    }, {
        "id": 499,
        "collectionId": 34,
        "type": "weapon",
        "weaponName": "AK-47",
        "skinName": "Jaguar",
        "rarity": "covert",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszYcDNW5Nmkq4GAw6DLP7LWnn8fvscmibGTpdSmigGyqRFrYm_wJdfBdQ84YAmD-1S6wrru08W-7ZianWwj5HfSt_Eogg",
        "prices": {
            "FN": 93.48,
            "MW": 35.74,
            "FT": 25.3,
            "WW": 21.63,
            "BS": 20.33,
            "FNST": 352.63,
            "MWST": 152.84,
            "FTST": 81.23,
            "WWST": 52.8,
            "BSST": 55.1
        }
    }, {
        "id": 500,
        "collectionId": 34,
        "type": "weapon",
        "weaponName": "Rare",
        "skinName": "Special Item",
        "rarity": "gold",
        "image": "./assets/rare-item.png"
    },

    // Operation Vanguard Weapon
    {
        "id": 501,
        "collectionId": 35,
        "type": "weapon",
        "weaponName": "Five-SeveN",
        "skinName": "Urban Hazard",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLOzLhRlxfbGTj5X09q_goWYkuHxPYTEhGlQ5vp5i_PA54jKhF2zowdyZ2z1LYCTJgQ9NwmG-1G9xb3qhMS0vZ7Jm3UyvSAg7HuMyRW_hhhOaPsv26Lv8Ntyjw",
        "prices": {
            "FN": 0.81,
            "MW": 0.66,
            "FT": 0.69,
            "FNST": 2.27,
            "MWST": 1.47,
            "FTST": 1.36
        }
    }, {
        "id": 502,
        "collectionId": 35,
        "type": "weapon",
        "weaponName": "G3SG1",
        "skinName": "Murky",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposem2LFZf0v73dm5R642JmZWZnO7LP7LWnn8f6sYlj7HFpYmi2FDm8kZuZm71cIPGewA7YgyB_VDow--91pa-7pXIyWwj5Hc7-sC_eg",
        "prices": {
            "FN": 0.55,
            "MW": 0.46,
            "FT": 0.42,
            "FNST": 1.66,
            "MWST": 1.16,
            "FTST": 1.33
        }
    }, {
        "id": 503,
        "collectionId": 35,
        "type": "weapon",
        "weaponName": "MAG-7",
        "skinName": "Firestarter",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7uifDhzw8zFcDoV09q_hoWJnuPgNrXummJW4NE_3L2R9IqnjVC2_kE9ZD_yI4aTcAZrYF_VrgXvkOu5gMXqu5vKynBm6D5iuyjWv-u0WQ",
        "prices": {
            "FN": 3.76,
            "MW": 0.51,
            "FT": 0.43,
            "WW": 0.75,
            "BS": 0.58,
            "FNST": 13.31,
            "MWST": 1.4,
            "FTST": 0.93,
            "WWST": 1.18,
            "BSST": 1.54
        }
    }, {
        "id": 504,
        "collectionId": 35,
        "type": "weapon",
        "weaponName": "MP9",
        "skinName": "Dart",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6r8FAR17P7YKAJB5Nmgho-FqPv9NLPF2D0IsMRz37GSoN-ijQexr0c-ZG_1JdKWJFVoZl2Cr1e8l-680cDt7pTXiSw02Kf5uV0",
        "prices": {
            "FN": 0.71,
            "MW": 0.54,
            "FT": 0.43,
            "WW": 0.53,
            "BS": 1.03,
            "FNST": 2.26,
            "MWST": 1.39,
            "FTST": 1.04,
            "WWST": 1.16,
            "BSST": 1.28
        }
    }, {
        "id": 505,
        "collectionId": 35,
        "type": "weapon",
        "weaponName": "UMP-45",
        "skinName": "Delusion",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo7e1f1JfwOP3ZDBSuImJkM2dnuT9PLXCqWdY781lxLqS9ImijQ2x8xE6YW2mcY-SJAJoYgzTrwS_wO26gJe7tJ-Yzndl7HE8pSGKq7XC8Wk",
        "prices": {
            "FN": 1.74,
            "MW": 0.44,
            "FT": 0.38,
            "FNST": 3.45,
            "MWST": 1.13,
            "FTST": 0.98
        }
    }, {
        "id": 506,
        "collectionId": 35,
        "type": "weapon",
        "weaponName": "Glock-18",
        "skinName": "Grinder",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbaqKAxf0uL3djFN79eJl4-Cm_LwDLfYkWNFpsEljurD89zx2gPg_Eo-amyiINfBdgVtYl6G-QO9l-271p677s-dwXZ9-n51WfGqKvY",
        "prices": {
            "FN": 1.85,
            "MW": 1.4,
            "FT": 1.79,
            "FNST": 6.41,
            "MWST": 4.7,
            "FTST": 4.38
        }
    }, {
        "id": 507,
        "collectionId": 35,
        "type": "weapon",
        "weaponName": "M4A1-S",
        "skinName": "Basilisk",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO3hb-Gw_alIITTl3hY5MxigdbN_Iv9nBrl80BrYz31IYOSdwY-Yl_Wr1C9xr3o05DuvJqazic3viZx7CuOzEO1n1gSObrYfbsp",
        "prices": {
            "FN": 10.5,
            "MW": 5.9,
            "FT": 4.44,
            "WW": 6.98,
            "BS": 5.02,
            "FNST": 36.57,
            "MWST": 19.09,
            "FTST": 15.29,
            "WWST": 17.9,
            "BSST": 18.72
        }
    }, {
        "id": 508,
        "collectionId": 35,
        "type": "weapon",
        "weaponName": "M4A4",
        "skinName": "Griffin",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhjxszFJTwW09uknYaNnvnLP7LWnn8fupAkiO2Zporx2wDnrhJkNmGnLILEc1I7MlHU81S3le69h5Dv7cuYnGwj5HeWs6qHHw",
        "prices": {
            "FN": 3.67,
            "MW": 1.65,
            "FT": 1.28,
            "WW": 4.49,
            "BS": 1.55,
            "FNST": 11.6,
            "MWST": 4.65,
            "FTST": 2.59,
            "WWST": 4.81,
            "BSST": 3.05
        }
    }, {
        "id": 509,
        "collectionId": 35,
        "type": "weapon",
        "weaponName": "Sawed-Off",
        "skinName": "Highwayman",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopbuyLgNv1fX3cCx9_92hkYSEkfHLMbfQlWBW58l1teXI8oThxgC18xBvMmv0d4GdclU8MF2FqVLrxbzpg566uJTBnSE2viMrsXqMmBapwUYbmhi3RII",
        "prices": {
            "FN": 1.86,
            "MW": 1.01,
            "FT": 0.76,
            "WW": 0.59,
            "BS": 0.64,
            "FNST": 8.03,
            "MWST": 3.81,
            "FTST": 1.51,
            "WWST": 1.13,
            "BSST": 0.89
        }
    }, {
        "id": 510,
        "collectionId": 35,
        "type": "weapon",
        "weaponName": "P250",
        "skinName": "Cartel",
        "rarity": "classified",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopujwezhhwszYI2gS09-3hpSOm8j4OrzZgiVVvpZ0i7iQotWm3FW38xVlMm3zddDAcgQ5NwnUq1C6wua718S9u5rO1zI97QJBKztq",
        "prices": {
            "FN": 13.76,
            "MW": 5.82,
            "FT": 4.25,
            "WW": 4.19,
            "BS": 4.43,
            "FNST": 48.6,
            "MWST": 18.02,
            "FTST": 11.32,
            "WWST": 13.43,
            "BSST": 11.24
        }
    }, {
        "id": 511,
        "collectionId": 35,
        "type": "weapon",
        "weaponName": "SCAR-20",
        "skinName": "Cardiac",
        "rarity": "classified",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopbmkOVUw7PDdTi5B7c7kxL-CmePxIa3UmH9Y58tOhuDG_Zi70QKw8hJuZTqgdYCUdQQ-ZlrQ8gC2wui7gZS46JvOzyAw6CJxsHyPlgv3308fY4CoRw",
        "prices": {
            "FN": 14.35,
            "MW": 5.04,
            "FT": 3.8,
            "WW": 3.15,
            "BS": 3,
            "FNST": 56.12,
            "MWST": 14.41,
            "FTST": 8.14,
            "WWST": 6.47,
            "BSST": 6.15
        }
    }, {
        "id": 512,
        "collectionId": 35,
        "type": "weapon",
        "weaponName": "XM1014",
        "skinName": "Tranquility",
        "rarity": "classified",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgporrf0e1Y07PDdTiVPvYznwL-IluX9J7rCqWdY781lxLmXpYmj2wPsrUY-ZjihItDGdwVvYwyC_lS_l-27g57utJ3KyiRguiQ8pSGKKGgJqwY",
        "prices": {
            "FN": 13.16,
            "MW": 6.18,
            "FT": 3.36,
            "WW": 3.2,
            "BS": 3.27,
            "FNST": 61.33,
            "MWST": 21.48,
            "FTST": 9.67,
            "WWST": 9.57,
            "BSST": 8.75
        }
    }, {
        "id": 513,
        "collectionId": 35,
        "type": "weapon",
        "weaponName": "AK-47",
        "skinName": "Wasteland Rebel",
        "rarity": "covert",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszcYzRA-cizq4GAw6DLP7LWnn8f7pVyie_E8I2tiQDn-RJkYTqlINDHdVA-ZVnRq1a8xbq915K_uJjAmGwj5HcdAgaXHA",
        "prices": {
            "FN": 157.47,
            "MW": 38.12,
            "FT": 25.58,
            "WW": 26.41,
            "BS": 22.75,
            "FNST": 1303.69,
            "MWST": 144.65,
            "FTST": 79.33,
            "WWST": 89.39,
            "BSST": 65.96
        }
    }, {
        "id": 514,
        "collectionId": 35,
        "type": "weapon",
        "weaponName": "P2000",
        "skinName": "Fire Elemental",
        "rarity": "covert",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovrG1eVcwg8zLZAJSvozmxL-NnuXxDL7dk2ZU5tFwhtbN_Iv9nBrlrkZrN22nLdCUIQM_NF7R-QK_yOzshpG77czMzCQy6CRw5S6Pnkfkn1gSOQPxEiVv",
        "prices": {
            "FN": 12.36,
            "MW": 7.23,
            "FT": 5.52,
            "WW": 6.46,
            "BS": 5.6,
            "FNST": 73.47,
            "MWST": 39.69,
            "FTST": 27.33,
            "WWST": 25.01,
            "BSST": 23.26
        }
    }, {
        "id": 515,
        "collectionId": 35,
        "type": "weapon",
        "weaponName": "Rare",
        "skinName": "Special Item",
        "rarity": "gold",
        "image": "./assets/rare-item.png"
    },

    // Chroma Case
    {
        "id": 516,
        "collectionId": 36,
        "type": "weapon",
        "weaponName": "Glock-18",
        "skinName": "Catacombs",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbaqKAxf0Ob3djFN79eJkIWKg__gPLfdqWdY781lxOrH9o-jiQXj-0BrMmrwdtTHdwQ6MgnR8lS4ku7o1sC7usmdmHZns3Q8pSGK4NV4g5I",
        "prices": {
            "FN": 0.39,
            "MW": 0.26,
            "FT": 0.17,
            "WW": 0.49,
            "BS": 1.06,
            "FNST": 1.94,
            "MWST": 1.19,
            "FTST": 0.67,
            "WWST": 1.8,
            "BSST": 1.57
        }
    }, {
        "id": 517,
        "collectionId": 36,
        "type": "weapon",
        "weaponName": "M249",
        "skinName": "System Lock",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-jxcjhjxszFI2kb08-zn5SEhcj4OrzZgiVSsZAmj76R9tqg3gTm_xFuMGn1JtCSI1A8YVvRq1a4krzs1p6_6pya1zI97fYyj9_i",
        "prices": {
            "FN": 0.81,
            "MW": 0.23,
            "FT": 0.13,
            "WW": 0.19,
            "BS": 0.3,
            "FNST": 2.21,
            "MWST": 0.71,
            "FTST": 0.35,
            "WWST": 0.51,
            "BSST": 0.25
        }
    }, {
        "id": 518,
        "collectionId": 36,
        "type": "weapon",
        "weaponName": "XM1014",
        "skinName": "Quicksilver",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgporrf0e1Y07PLZTiVPvYznwL-YnvD4MoTdn2xZ_Ism2-qQrdz2jAe28xE4Njj0cIbHcwc3MArSqFjqxOrojJTvuZybyiMypGB8siECplOC",
        "prices": {
            "FN": 0.29,
            "MW": 0.19,
            "FT": 0.13,
            "WW": 0.18,
            "BS": 0.16,
            "FNST": 1.05,
            "MWST": 0.57,
            "FTST": 0.36,
            "WWST": 0.58,
            "BSST": 0.43
        }
    }, {
        "id": 519,
        "collectionId": 36,
        "type": "weapon",
        "weaponName": "MP9",
        "skinName": "Deadly Poison",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6r8FAR17P7YKAJG6d2ymJm0h_j9ILTfqWdY781lxLmWotqs3wKx_ENlNjr0doOVcVJqZg3U_QO2kufph5W_tJvIzCBm7nE8pSGKOfWakqU",
        "prices": {
            "FN": 1.47,
            "MW": 0.36,
            "FT": 0.19,
            "WW": 0.13,
            "BS": 0.16,
            "FNST": 4.63,
            "MWST": 1.22,
            "FTST": 0.65,
            "WWST": 0.44,
            "BSST": 0.37
        }
    }, {
        "id": 520,
        "collectionId": 36,
        "type": "weapon",
        "weaponName": "SCAR-20",
        "skinName": "Grotto",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopbmkOVUw7PLZTi5B7c7kxL-Hkvb_DLfYkWNFppUniLCTpt2j2wy2qkBoZDz6JdWTdQdrMg7SqVC9x-rogJK7tZnBwHF9-n51IW4yjAA",
        "prices": {
            "FN": 0.34,
            "MW": 0.2,
            "FT": 0.13,
            "WW": 0.18,
            "BS": 0.25,
            "FNST": 1.04,
            "MWST": 0.57,
            "FTST": 0.35,
            "WWST": 0.42,
            "BSST": 0.44
        }
    }, {
        "id": 521,
        "collectionId": 36,
        "type": "weapon",
        "weaponName": "MAC-10",
        "skinName": "Malachite",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7umeldf0v73fDxBvYyJmYGHlvT8Oq_UqWdY781lxLCZ8Y-n2wLs-UFpNmigdYPGJwQ5Y1_T-gfvwuy-jJS778vLynUx6HM8pSGK9VzjGmg",
        "prices": {
            "FN": 2.39,
            "MW": 1.58,
            "FT": 1.21,
            "WW": 1.22,
            "BS": 1.2,
            "FNST": 5.84,
            "MWST": 3.58,
            "FTST": 2.46,
            "WWST": 2.19,
            "BSST": 1.58
        }
    }, {
        "id": 522,
        "collectionId": 36,
        "type": "weapon",
        "weaponName": "Sawed-Off",
        "skinName": "Serenity",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopbuyLgNv1fX3cih9_92hkYSEkfHLN77Hl1Rd4cJ5nqeY84rxjQTgrUE6Y2HxcNXAdg88M1qGq1frw-vv05C16pjKwSNmunIn-z-DyMFXoJu6",
        "prices": {
            "FN": 2.02,
            "MW": 1.29,
            "FT": 0.89,
            "WW": 0.84,
            "BS": 0.92,
            "FNST": 5.76,
            "MWST": 2.95,
            "FTST": 2.07,
            "WWST": 1.75,
            "BSST": 1.62
        }
    }, {
        "id": 523,
        "collectionId": 36,
        "type": "weapon",
        "weaponName": "Dual Berettas",
        "skinName": "Urban Shock",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpos7asPwJf0Ob3dDFL-Nmlq5WZlfb6IK_ehGZu5Mx2gv2P8d-miw2wr0VpZ2r3cI7He1A6NF-C_1G3w7i81pTpvJqYwXVn7yYg4GGdwUKBwyb7aQ",
        "prices": {
            "FN": 1.95,
            "MW": 1.41,
            "FT": 0.98,
            "WW": 1.04,
            "BS": 1,
            "FNST": 5.89,
            "MWST": 3.39,
            "FTST": 2.17,
            "WWST": 1.89,
            "BSST": 2.23
        }
    }, {
        "id": 524,
        "collectionId": 36,
        "type": "weapon",
        "weaponName": "Desert Eagle",
        "skinName": "Naga",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposr-kLAtl7PLZTjlH7du6kb-FlvD1DLfYkWNFpscl27nA8dSm3Vbl80poMm33LICSdFdrYV3Z-lS2x-zmjcfqvs6bynF9-n51bHG-s3k",
        "prices": {
            "FN": 5.62,
            "MW": 1.96,
            "FT": 1.14,
            "WW": 1.03,
            "BS": 1.01,
            "FNST": 17.39,
            "MWST": 6.52,
            "FTST": 3.54,
            "WWST": 3.06,
            "BSST": 3.23
        }
    }, {
        "id": 525,
        "collectionId": 36,
        "type": "weapon",
        "weaponName": "P250",
        "skinName": "Muertos",
        "rarity": "classified",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopujwezhjxszYI2gS09G3moSKm_bLP7LWnn8fuMRyiLyQodqhi1Dj-UVoYDr1dYfDJ1BvN1DX-Ve8yea615PovJ-fzmwj5Hf1-Su83w",
        "prices": {
            "FN": 7.96,
            "MW": 3.84,
            "FT": 3.72,
            "WW": 3.94,
            "BS": 3.31,
            "FNST": 21.88,
            "MWST": 12.62,
            "FTST": 9.25,
            "WWST": 10.03,
            "BSST": 8.74
        }
    }, {
        "id": 526,
        "collectionId": 36,
        "type": "weapon",
        "weaponName": "M4A4",
        "skinName": "龍王 (Dragon King)",
        "rarity": "classified",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhjxszFJTwW0924l4WYg-X1P4Tdn2xZ_ItyiO2Yot-n3gztrUduMW6icdWcc1RqM1HR_FfswLu6gZe4tZrNmiBkpGB8smM7Zio1",
        "prices": {
            "FN": 18.83,
            "MW": 8.06,
            "FT": 4.77,
            "WW": 5.42,
            "BS": 4.58,
            "FNST": 41.39,
            "MWST": 19.49,
            "FTST": 10.99,
            "WWST": 15.7,
            "BSST": 9.95
        }
    }, {
        "id": 527,
        "collectionId": 36,
        "type": "weapon",
        "weaponName": "AK-47",
        "skinName": "Cartel",
        "rarity": "classified",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhhwszJemkV09-3hpSOm8j4OrzZgiUD7ZJzj7DHoY-iilC1-ENoNWuiI9WWdQI8Z1iE81Tvl7i81J-_6p2b1zI97XPwFCE_",
        "prices": {
            "FN": 13.83,
            "MW": 7.11,
            "FT": 5.65,
            "WW": 8.31,
            "BS": 6.16,
            "FNST": 48.06,
            "MWST": 26.28,
            "FTST": 17.84,
            "WWST": 20.47,
            "BSST": 20.22
        }
    }, {
        "id": 528,
        "collectionId": 36,
        "type": "weapon",
        "weaponName": "Galil AR",
        "skinName": "Chatterbox",
        "rarity": "covert",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbupIgthwczLZAJF7dC_mL-KleX1ILLemFRc7cF4n-SPodvz2gzjrUE4ZWyld4_DdlBrNAyC_ge4xr_qhZO-7s_PwXRmsnJw7GGdwUI2M1HQMQ",
        "prices": {
            "FN": 53.68,
            "MW": 11.27,
            "FT": 6.4,
            "FNST": 203.52,
            "MWST": 35.46,
            "FTST": 16.85
        }
    }, {
        "id": 529,
        "collectionId": 36,
        "type": "weapon",
        "weaponName": "AWP",
        "skinName": "Man-o'-war",
        "rarity": "covert",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FAZt7PLfYQJF4NOkjb-HnvD8J_WCwjNU6cAhjLzFoYj00ALj-ktkZWHxIoCRelJqZVnZ_QC3yezmhZ-8ot2Xnsiba0rA",
        "prices": {
            "FN": 34.45,
            "MW": 31.15,
            "FNST": 73.26,
            "MWST": 61.89
        }
    }, {
        "id": 530,
        "collectionId": 36,
        "type": "weapon",
        "weaponName": "Rare",
        "skinName": "Special Item",
        "rarity": "gold",
        "image": "./assets/rare-item.png"
    }, 

    // Chroma 2
    {
        "id": 531,
        "collectionId": 37,
        "type": "weapon",
        "weaponName": "Sawed-Off",
        "skinName": "Origami",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopbuyLgNv1fX3cih9_92hkYSEkfHLPKnYkWpc4fp9g-7J4cKgjgW2-BA5NW-nIYedIVJvZ1GEqwDolbq7jMS-75_NySNhs3N05SyOgVXp1nH_rq73",
        "prices": {
            "FN": 0.28,
            "MW": 0.15,
            "FT": 0.09,
            "WW": 0.15,
            "BS": 0.13,
            "FNST": 0.81,
            "MWST": 0.46,
            "FTST": 0.24,
            "WWST": 0.31,
            "BSST": 0.26
        }
    }, {
        "id": 532,
        "collectionId": 37,
        "type": "weapon",
        "weaponName": "Negev",
        "skinName": "Man-o'-war",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpouL-iLhFf0v73fzhF6cqJk4yEhe7LP7LWnn8fuZR0iOvEoN6gjQ3mqRdsMmz1cNKRJgVvZl_Z_wC9wL_vhJ6-v8-Yzmwj5HdYBPwVRg",
        "prices": {
            "FN": 0.12,
            "MW": 0.1,
            "FNST": 0.47,
            "MWST": 0.4
        }
    }, {
        "id": 533,
        "collectionId": 37,
        "type": "weapon",
        "weaponName": "P250",
        "skinName": "Valence",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopujwezhhwszYI2gS09-5mpSEguXLP7LWnn8f7sR33-uSpdn23gyw8xY9YWr7JYKUdAVsYQnW8wXvl7_ohpe07pXIwWwj5HeF0_VeIQ",
        "prices": {
            "FN": 0.63,
            "MW": 0.2,
            "FT": 0.09,
            "WW": 0.2,
            "BS": 0.1,
            "FNST": 2.67,
            "MWST": 0.85,
            "FTST": 0.32,
            "WWST": 0.75,
            "BSST": 0.31
        }
    }, {
        "id": 534,
        "collectionId": 37,
        "type": "weapon",
        "weaponName": "Desert Eagle",
        "skinName": "Bronze Deco",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposr-kLAtl7PLFTj9Q49Kskb-Yh_bmOLfUqWdY781lxL2T8Y-kjAa2qhZlNmz7ItCSd1I4ZVrVrFi6kO_mgJa9uJXAyHdguXI8pSGKoKTrgPA",
        "prices": {
            "FN": 0.57,
            "MW": 0.28,
            "FT": 0.13,
            "WW": 0.17,
            "BS": 0.66,
            "FNST": 2.11,
            "MWST": 1.25,
            "FTST": 0.7,
            "WWST": 1.2,
            "BSST": 3.89
        }
    }, {
        "id": 535,
        "collectionId": 37,
        "type": "weapon",
        "weaponName": "MP7",
        "skinName": "Armor Core",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6ryFAZx7P7YJgJX4MiklY2Ek_LmPYTdn2xZ_Isk2byQ8N2s2gKx_xJlZmD6cIeRe1U6aFzRq1m4we25gZe4v8ufwHtqpGB8spOTsiIZ",
        "prices": {
            "FN": 0.22,
            "MW": 0.14,
            "FT": 0.09,
            "WW": 0.12,
            "BS": 0.11,
            "FNST": 0.74,
            "MWST": 0.39,
            "FTST": 0.23,
            "WWST": 0.26,
            "BSST": 0.34
        }
    }, {
        "id": 536,
        "collectionId": 37,
        "type": "weapon",
        "weaponName": "AK-47",
        "skinName": "Elite Build",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV09G3h5SOhe7LP7LWnn8fvJYh3-qR942higTmqBZpYGild4adIQQ5ZA6B_AC3lebo0ce-78vOnGwj5HeAJ9sV6g",
        "prices": {
            "FN": 5.07,
            "MW": 1.91,
            "FT": 1.42,
            "WW": 0.96,
            "BS": 0.95,
            "FNST": 20.52,
            "MWST": 6.39,
            "FTST": 4.13,
            "WWST": 3.03,
            "BSST": 3.03
        }
    }, {
        "id": 537,
        "collectionId": 37,
        "type": "weapon",
        "weaponName": "UMP-45",
        "skinName": "Grand Prix",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo7e1f1Jf0v73ZDBS0863l4WZqPrxN7LEmyUD7MR1ibGZrIqg0QC38xZvY2D6ddeTIQ9saArU_ADsyei-0ZC0vJ-Y1zI97ahngDsr",
        "prices": {
            "FN": 0.39,
            "FNST": 0.64
        }
    }, {
        "id": 538,
        "collectionId": 37,
        "type": "weapon",
        "weaponName": "CZ75-Auto",
        "skinName": "Pole Position",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotaDyfgZf0Ob3cicVueOmhoWInuT9PLXummJW4NE_i7nFpYn00VDt-RU6ajr2J4PGIFJvMFGD-lbvwL_mgMe5vZXImHph6D5iuyh7hT4MJQ",
        "prices": {
            "FN": 1.62,
            "MW": 0.7,
            "FT": 0.42,
            "WW": 0.46,
            "BS": 0.33,
            "FNST": 3.58,
            "MWST": 1.37,
            "FTST": 0.65,
            "WWST": 0.79,
            "BSST": 0.62
        }
    }, {
        "id": 539,
        "collectionId": 37,
        "type": "weapon",
        "weaponName": "MAG-7",
        "skinName": "Heat",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7uifDhjxszFcDoV086zkIiEg8j4OrzZgiUGvpUp3eiZptrw0Fft8xU4Ymn0IoPEdlQ7ZwyDq1i6x7y-gMfv7pmd1zI97Us53qRd",
        "prices": {
            "FN": 2.51,
            "MW": 0.78,
            "FT": 0.43,
            "WW": 0.34,
            "BS": 0.33,
            "FNST": 8.12,
            "MWST": 2.17,
            "FTST": 0.93,
            "WWST": 0.68,
            "BSST": 0.65
        }
    }, {
        "id": 540,
        "collectionId": 37,
        "type": "weapon",
        "weaponName": "AWP",
        "skinName": "Worm God",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FAZx7PLfYQJW-9W4kb-HnvD8J_XXzzwH65EgiLHHrNutjAa28xdtYG7wINCUdlA4ZFDW81m8lebqjMC9ot2XnlThvpXE",
        "prices": {
            "FN": 2.19,
            "MW": 1.43,
            "FT": 1.25,
            "WW": 1.4,
            "FNST": 7.16,
            "MWST": 4.09,
            "FTST": 3.48,
            "WWST": 6.85
        }
    }, {
        "id": 541,
        "collectionId": 37,
        "type": "weapon",
        "weaponName": "FAMAS",
        "skinName": "Djinn",
        "rarity": "classified",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLuoKhRf0uL3dzxP7c-JnomFmcj4OrzZgiVQuMAgiLHEp42g3wa3_hZvN2_3I4SUegdqZQnQrlftlOm5gJe9v5Sf1zI97SI8ljcV",
        "prices": {
            "FN": 12.63,
            "MW": 4.53,
            "FT": 2.53,
            "WW": 1.94,
            "BS": 1.71,
            "FNST": 26.23,
            "MWST": 9.45,
            "FTST": 4.22,
            "WWST": 3.66,
            "BSST": 3.41
        }
    }, {
        "id": 542,
        "collectionId": 37,
        "type": "weapon",
        "weaponName": "Galil AR",
        "skinName": "Eco",
        "rarity": "classified",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbupIgthwczLZAJF7dC_mL-OlPjLP7LWnn8fv8Mn3uyT8dui3AbnqUA_Z2v1J9eSdlVvNAyB-1m9ye28h8O4tJqdzGwj5HeCx7zj9Q",
        "prices": {
            "FN": 24.57,
            "MW": 4.47,
            "FT": 2.44,
            "WW": 1.73,
            "FNST": 60.53,
            "MWST": 8.06,
            "FTST": 4.45,
            "WWST": 3.96
        }
    }, {
        "id": 543,
        "collectionId": 37,
        "type": "weapon",
        "weaponName": "Five-SeveN",
        "skinName": "Monkey Business",
        "rarity": "classified",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLOzLhRlxfbGTj5X09q_goWYkuHxPYTTl2VQ5sROhuDG_Zi72lDj8xJqZWj3d9SWcA9vNQnY81Ltybrvh57p7piayyBnsiV053mLnwv330_hwP2Y_Q",
        "prices": {
            "FN": 10.17,
            "MW": 2.74,
            "FT": 2.01,
            "WW": 1.95,
            "FNST": 28.01,
            "MWST": 5.39,
            "FTST": 3.78,
            "WWST": 3.29
        }
    }, {
        "id": 544,
        "collectionId": 37,
        "type": "weapon",
        "weaponName": "MAC-10",
        "skinName": "Neon Rider",
        "rarity": "covert",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7umeldf0Ob3fDxBvYyJmoWEmeX9N77DqWdY781lxOyQrIjw2ATmrkQ_YT2lcYbEcAJsNQqD_1fol7jnjJbp75nMmHI3vHI8pSGKtEQei0M",
        "prices": {
            "FN": 11.63,
            "MW": 7.78,
            "FT": 6.41,
            "WW": 6.12,
            "FNST": 31.96,
            "MWST": 19.44,
            "FTST": 13.35,
            "WWST": 12.79
        }
    }, {
        "id": 545,
        "collectionId": 37,
        "type": "weapon",
        "weaponName": "M4A1-S",
        "skinName": "Hyper Beast",
        "rarity": "covert",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO1gb-Gw_alDLPIhm5D18d0i_rVyoD8j1yg5UBta2zzLYWSdAA_aFvVq1G4w7rq05Dq7cvMmHM1uiJ0sS3Un0e_hxlSLrs4IEpMMwQ",
        "prices": {
            "FN": 141.31,
            "MW": 59.78,
            "FT": 27.33,
            "WW": 19.72,
            "BS": 14.45,
            "FNST": 353.01,
            "MWST": 118.63,
            "FTST": 61.37,
            "WWST": 41.19,
            "BSST": 33.49
        }
    }, {
        "id": 546,
        "collectionId": 37,
        "type": "weapon",
        "weaponName": "Rare",
        "skinName": "Special Item",
        "rarity": "gold",
        "image": "./assets/rare-item.png"
    }, 

    // Falchion Case
    {
        "id": 547,
        "collectionId": 38,
        "type": "weapon",
        "weaponName": "USP-S",
        "skinName": "Torque",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo6m1FBRp3_bGcjhQ09-jq5WYh8jkIbTWhG5C-8xnteXI8oThxg3lqBc5ZGHyd9KVIQ47YVqCqAPsx-i5hpHv75qfyCAy7CJz5H-OnxCpwUYbnuEcrvs",
        "prices": {
            "FN": 1.61,
            "MW": 1.38,
            "FT": 0.83,
            "WW": 1.05,
            "BS": 1.48,
            "FNST": 4.23,
            "MWST": 3.15,
            "FTST": 2.18,
            "WWST": 3.09,
            "BSST": 3.27
        }
    }, {
        "id": 548,
        "collectionId": 38,
        "type": "weapon",
        "weaponName": "UMP-45",
        "skinName": "Riot",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo7e1f1Jf0Ob3ZDBSuImJgZCZmPbmDLfYkWNFppUlie2Zod-n2Ffg-ERsMTqmcIeRIwU3aVGC-gS_xe-808C6u8iawXp9-n51mEUNdNg",
        "prices": {
            "FN": 0.3,
            "MW": 0.19,
            "FT": 0.1,
            "WW": 0.18,
            "BS": 0.09,
            "FNST": 1.17,
            "MWST": 0.5,
            "FTST": 0.24,
            "WWST": 0.34,
            "BSST": 0.21
        }
    }, {
        "id": 549,
        "collectionId": 38,
        "type": "weapon",
        "weaponName": "P90",
        "skinName": "Elite Build",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopuP1FAR17OORIQJP7c-ikZKSqPv9NLPF2G0EsMN33rGY9tWnjlK18xBqNm2gIISdcwJsMAzQ-wK9xOy705bt7pvXiSw0wcJJWjY",
        "prices": {
            "FN": 1.58,
            "MW": 0.3,
            "FT": 0.13,
            "WW": 0.1,
            "BS": 0.09,
            "FNST": 7.8,
            "MWST": 1.38,
            "FTST": 0.55,
            "WWST": 0.32,
            "BSST": 0.26
        }
    }, {
        "id": 550,
        "collectionId": 38,
        "type": "weapon",
        "weaponName": "Nova",
        "skinName": "Ranger",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpouLWzKjhjxszGfitD0863moeOhcj4OrzZgiVUu8AojrrFodvx3QPk_ENlYWvxJ9eXdA5rN13ZqwXsxO280JG6vprB1zI97XbcBqAw",
        "prices": {
            "FN": 0.48,
            "MW": 0.22,
            "FT": 0.17,
            "WW": 0.19,
            "BS": 0.16,
            "FNST": 1.81,
            "MWST": 0.66,
            "FTST": 0.28,
            "WWST": 0.23,
            "BSST": 0.22
        }
    }, {
        "id": 551,
        "collectionId": 38,
        "type": "weapon",
        "weaponName": "Glock-18",
        "skinName": "Bunsen Burner",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbaqKAxf0uL3djFN79fnzL-Nm_b5NqjulGdE7fp9g-7J4cKgjlGw-UA4ZjjwJoGccVU8ZFHR_gTrk-fm15K56pyYyyBj6XIrsXmOgVXp1s5QzU_K",
        "prices": {
            "FN": 0.86,
            "MW": 0.25,
            "FT": 0.14,
            "WW": 0.49,
            "BS": 0.14,
            "FNST": 4.69,
            "MWST": 1.39,
            "FTST": 0.63,
            "WWST": 2.01,
            "BSST": 0.68
        }
    }, {
        "id": 552,
        "collectionId": 38,
        "type": "weapon",
        "weaponName": "Galil AR",
        "skinName": "Rocket Pop",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbupIgthwczLZAJF7dC_mIGZqOf1Ia_YlWdU-_p9g-7J4cKt3wfmrUVoN2zwcNTGe1Q-Ml_T-Fe6wOjqgMK46pTAyHBn7ihxtCyOgVXp1nGGEdIU",
        "prices": {
            "FN": 6.07,
            "MW": 2.33,
            "FT": 0.84,
            "WW": 0.41,
            "BS": 0.23,
            "FNST": 14.97,
            "MWST": 3.6,
            "FTST": 1.49,
            "WWST": 0.76,
            "BSST": 0.59
        }
    }, {
        "id": 553,
        "collectionId": 38,
        "type": "weapon",
        "weaponName": "P2000",
        "skinName": "Handgun",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovrG1eVcwg8zJYAJSvozmxL-JmPj5DLfYkWNFppYojLmQ99z30AK2_EppMTyiIYCWcgY6YlqGrwLok7jmhpK9uciczHp9-n51ZSRDar0",
        "prices": {
            "FN": 2.77,
            "MW": 1.03,
            "FT": 0.65,
            "WW": 0.49,
            "BS": 0.46,
            "FNST": 9.91,
            "MWST": 2.55,
            "FTST": 1.31,
            "WWST": 0.93,
            "BSST": 0.93
        }
    }, {
        "id": 554,
        "collectionId": 38,
        "type": "weapon",
        "weaponName": "Negev",
        "skinName": "Loudmouth",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpouL-iLhFf0Ob3fzhF6cqJlY6Fnv_9P7rFmXlu5Mx2gv2Pod6k2Aft-EZrMDqhdtXHe1RvYFzV_ALvkO-60ZTt6ZnBy3sxvyQr4GGdwUKgsYZg7Q",
        "prices": {
            "FN": 4.07,
            "MW": 0.62,
            "FT": 0.51,
            "WW": 0.53,
            "FNST": 15.79,
            "MWST": 1.27,
            "FTST": 2.08,
            "WWST": 1.12
        }
    }, {
        "id": 555,
        "collectionId": 38,
        "type": "weapon",
        "weaponName": "MP9",
        "skinName": "Ruby Poison Dart",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6r8FAZt7P7YKAJM5cikm4eOmcj4OrzZgiUC6ZVz3-iW9oim2VXjqBU4Zj_zcI-VIA9vYQnRrgPokrq9g5K-786Y1zI97cCdnP7W",
        "prices": {
            "FN": 1.71,
            "MW": 1.11,
            "FT": 0.7,
            "WW": 0.79,
            "BS": 0.7,
            "FNST": 4.95,
            "MWST": 2.94,
            "FTST": 1.64,
            "WWST": 1.76,
            "BSST": 1.82
        }
    }, {
        "id": 556,
        "collectionId": 38,
        "type": "weapon",
        "weaponName": "M4A4",
        "skinName": "Evil Daimyo",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhjxszFJTwW09mgnYy0k_b9PqLeqWdY781lxOqTpdT3iQbh-RBsN2H6JITGI1c3ZluB_FK6kry51J-4uZjJwSNkuyY8pSGKLxf1Y6o",
        "prices": {
            "FN": 3.07,
            "MW": 1.67,
            "FT": 0.96,
            "WW": 1.37,
            "BS": 1.3,
            "FNST": 9.31,
            "MWST": 3.98,
            "FTST": 2.29,
            "WWST": 3.83,
            "BSST": 3.64
        }
    }, {
        "id": 557,
        "collectionId": 38,
        "type": "weapon",
        "weaponName": "FAMAS",
        "skinName": "Neural Net",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLuoKhRf0v73dzxP7c-JkI-fhMj4OrzZgiVV65N327CTotT3iVfh-RY9Y2-hLNOWdwE4NwnT-FW4w-q5h8C0vs_N1zI97WjxIji5",
        "prices": {
            "FN": 1.72,
            "MW": 1.1,
            "FT": 0.66,
            "WW": 0.83,
            "BS": 0.62,
            "FNST": 5.24,
            "MWST": 2.75,
            "FTST": 1.68,
            "WWST": 1.79,
            "BSST": 1.55
        }
    }, {
        "id": 558,
        "collectionId": 38,
        "type": "weapon",
        "weaponName": "SG 553",
        "skinName": "Cyrex",
        "rarity": "classified",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopb3wflFf0Ob3YjoXuY-Jl5mZku_LP7LWnn8f7cMjjOuQ8Njx0Ayx8xY-ZDrzcdDAcwRrY1vRq1a5wr2-hJG1vszNnWwj5HdA303JHQ",
        "prices": {
            "FN": 14.42,
            "MW": 6.69,
            "FT": 5.01,
            "WW": 3.7,
            "BS": 3.12,
            "FNST": 43.75,
            "MWST": 17.38,
            "FTST": 8.77,
            "WWST": 6.36,
            "BSST": 5.56
        }
    }, {
        "id": 559,
        "collectionId": 38,
        "type": "weapon",
        "weaponName": "MP7",
        "skinName": "Nemesis",
        "rarity": "classified",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6ryFAR17P7YJgJM6dGlnZO0m_7zO6-fwTkBv5F03bjAp9ut2gOy_0I4MGynItCQcwdqYw7Q-lLtwLzphcK07YOJlyWB9VchYA",
        "prices": {
            "FN": 12.15,
            "MW": 5.75,
            "FT": 4.88,
            "FNST": 25.35,
            "MWST": 12.53,
            "FTST": 8.74
        }
    }, {
        "id": 560,
        "collectionId": 38,
        "type": "weapon",
        "weaponName": "CZ75-Auto",
        "skinName": "Yellow Jacket",
        "rarity": "classified",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotaDyfgZf0Ob3cicVud2Jl4iKhOP9Kb7DqWdY781lxO2Sp9-hiwPl-RBvMGn1LNfBIFRoNV3X-1ntxejn1pG7tMvLyndi7nQ8pSGKLZrRnqo",
        "prices": {
            "FN": 12.42,
            "MW": 5.49,
            "FT": 4.3,
            "WW": 3.75,
            "BS": 3.31,
            "FNST": 27.55,
            "MWST": 12.86,
            "FTST": 7.4,
            "WWST": 7.19,
            "BSST": 6.68
        }
    }, {
        "id": 561,
        "collectionId": 38,
        "type": "weapon",
        "weaponName": "AWP",
        "skinName": "Hyper Beast",
        "rarity": "covert",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FAR17PLfYQJK9cyzhr-JkvbnJ4Tdn2xZ_Ismju2To9qm31Hsr0ZsMTryJo_BcANrMwyCrFLrx7vrhJa1vZrByXo2pGB8sr2_Epwm",
        "prices": {
            "FN": 95.53,
            "MW": 60.04,
            "FT": 35.55,
            "WW": 26.7,
            "BS": 23.31,
            "FNST": 270.07,
            "MWST": 118.12,
            "FTST": 75.13,
            "WWST": 55.57,
            "BSST": 51.47
        }
    }, {
        "id": 562,
        "collectionId": 38,
        "type": "weapon",
        "weaponName": "AK-47",
        "skinName": "Aquamarine Revenge",
        "rarity": "covert",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV09-5gZKKkPLLMrfFqWdY781lxLuW8Njw31Dn8xc_YTqmJ4DDJFM2ZwqE_ATtx-u7g8C5vpjOzHM263E8pSGKJ1XuG9M",
        "prices": {
            "FN": 82.24,
            "MW": 52.19,
            "FT": 30.27,
            "WW": 19.1,
            "BS": 17.82,
            "FNST": 216.21,
            "MWST": 106.9,
            "FTST": 63.33,
            "WWST": 40.56,
            "BSST": 36.32
        }
    }, {
        "id": 563,
        "collectionId": 38,
        "type": "weapon",
        "weaponName": "Rare",
        "skinName": "Falchion Knife",
        "rarity": "gold",
        "image": "./assets/falchion-knife.png"
    },

    // Shadow Case
    {
        "id": 564,
        "collectionId": 39,
        "type": "weapon",
        "weaponName": "Dual Berettas",
        "skinName": "Dualing Dragons",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpos7asPwJf0Ob3dShD4N6zhpKOg-P1DL_Dl2xe5tZOhuDG_Zi72gPg-UVrZzqhcoSWdVI_MwnVrAO4lLrm05botZ2cyXIyuiMn4n-Llgv330-3xQiTrw",
        "prices": {
            "FN": 1.88,
            "MW": 0.55,
            "FT": 0.28,
            "WW": 0.19,
            "BS": 0.2,
            "FNST": 6.33,
            "MWST": 1.43,
            "FTST": 0.77,
            "WWST": 0.63,
            "BSST": 0.76
        }
    }, {
        "id": 565,
        "collectionId": 39,
        "type": "weapon",
        "weaponName": "FAMAS",
        "skinName": "Survivor Z",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLuoKhRf0Ob3dzxP7c-JmIWFg_bLP7LWnn8fv8Rz37mZ9Nil31Hh_RI-Zm3ycNfAcwQ5NA7VrAK4xbjvjMC67cjJwWwj5HfemqCEuw",
        "prices": {
            "FN": 0.5,
            "MW": 0.33,
            "FT": 0.18,
            "WW": 0.29,
            "BS": 0.15,
            "FNST": 1.6,
            "MWST": 0.99,
            "FTST": 0.56,
            "WWST": 1.12,
            "BSST": 0.52
        }
    }, {
        "id": 566,
        "collectionId": 39,
        "type": "weapon",
        "weaponName": "Glock-18",
        "skinName": "Wraiths",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbaqKAxf1OD3djFN79fnzL-chfbgO6LCqWdY781lxLHC89j0ilXm-xdtamqiJYCRdFQ9ZlCB-QW-xb_p08Ppv8vPz3VhvnM8pSGKoJPZaSg",
        "prices": {
            "FN": 0.69,
            "MW": 0.31,
            "FT": 0.16,
            "WW": 0.26,
            "BS": 0.13,
            "FNST": 4.08,
            "MWST": 1.18,
            "FTST": 0.47,
            "WWST": 1.68,
            "BSST": 0.55
        }
    }, {
        "id": 567,
        "collectionId": 39,
        "type": "weapon",
        "weaponName": "MAC-10",
        "skinName": "Rangeen",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7umeldf0Ob3fDxBvYyJlYyOnP_tMoTVg2Ru5Mx2gv2PrdvxigTs80VpMj-nIoLHIABqZV-G_Fi7l7jog8e97p_Iy3JquSIgs2GdwULIC3Uk8A",
        "prices": {
            "FN": 0.44,
            "MW": 0.31,
            "FT": 0.19,
            "WW": 0.19,
            "BS": 0.19,
            "FNST": 1.27,
            "MWST": 0.88,
            "FTST": 0.48,
            "WWST": 0.67,
            "BSST": 0.54
        }
    }, {
        "id": 568,
        "collectionId": 39,
        "type": "weapon",
        "weaponName": "MAG-7",
        "skinName": "Cobalt Core",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7uifDhjxszFcDoV09GvhoOOmfLLP7LWnn8fv8Z12uzFrdXxigO1qBA_Z22nJ4Sde1A3N1nV-Fjrwb_ogMC4upnKnGwj5Hd-M-D3zQ",
        "prices": {
            "FN": 0.46,
            "MW": 0.29,
            "FT": 0.16,
            "WW": 0.36,
            "BS": 0.19,
            "FNST": 1.32,
            "MWST": 0.78,
            "FTST": 0.36,
            "WWST": 0.36,
            "BSST": 0.37
        }
    }, {
        "id": 569,
        "collectionId": 39,
        "type": "weapon",
        "weaponName": "SCAR-20",
        "skinName": "Green Marine",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopbmkOVUw7PTbTi5B7c7kxL-bkvb3NrbQnW5DuJZOhuDG_Zi72ALlrUo9MGulcobEcgI-N16GqQK8yOi8gZO9753Anydh7yEr7SnVnAv330-PPKTi9g",
        "prices": {
            "FN": 0.45,
            "MW": 0.29,
            "FT": 0.15,
            "WW": 0.19,
            "BS": 0.11,
            "FNST": 1.43,
            "MWST": 0.73,
            "FTST": 0.28,
            "WWST": 0.3,
            "BSST": 0.24
        }
    }, {
        "id": 570,
        "collectionId": 39,
        "type": "weapon",
        "weaponName": "XM1014",
        "skinName": "Scumbria",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgporrf0e1Y07PLZTiVPvYznwL-YlOL5ManYl1Rd4cJ5nqfDrYmi0VbnqEdvamj0LIKUdwdqZlDZrwXqlO3phcLu7cycn3U17iF0-z-DyO9Fcks1",
        "prices": {
            "FN": 0.59,
            "MW": 0.27,
            "FT": 0.15,
            "WW": 0.14,
            "BS": 0.12,
            "FNST": 2.13,
            "MWST": 0.9,
            "FTST": 0.38,
            "WWST": 0.34,
            "BSST": 0.24
        }
    }, {
        "id": 571,
        "collectionId": 39,
        "type": "weapon",
        "weaponName": "Galil AR",
        "skinName": "Stone Cold",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbupIgthwczPYgJF7dC_mL-FnvD8J6zYmGxu5Mx2gv2P94-i2VK2-xFlYmnxcoSXcQI2N1vZ-lC7k-m70JPt6sudz3JruCl35WGdwUJVtppLKg",
        "prices": {
            "FN": 6.37,
            "MW": 2.65,
            "FT": 1.52,
            "WW": 1.31,
            "BS": 1.05,
            "FNST": 17.73,
            "MWST": 6.51,
            "FTST": 2.95,
            "WWST": 2.53,
            "BSST": 2.03
        }
    }, {
        "id": 572,
        "collectionId": 39,
        "type": "weapon",
        "weaponName": "M249",
        "skinName": "Nebula Crusader",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-jxcjhnwMzFI2kb09KzlpWHlsj3Ia7Cl29U-vp9g-7J4cKj2FLi-xBlNmHxJIWQdQNrYg3TrFS7xuq715O9vZ7LnHAxuHZ34izagVXp1iP8BI4S",
        "prices": {
            "FN": 3.7,
            "MW": 2.14,
            "FT": 1.47,
            "WW": 1.23,
            "BS": 0.98,
            "FNST": 9.79,
            "MWST": 4.74,
            "FTST": 2.88,
            "WWST": 2.33,
            "BSST": 2.25
        }
    }, {
        "id": 573,
        "collectionId": 39,
        "type": "weapon",
        "weaponName": "MP7",
        "skinName": "Special Delivery",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6ryFAR17P7YJgJB4N2lh4mNnvLwDLfYkWNFppci2-vAo92i3QW3-UprZWv2LNTDewBsYgzRrgO7kLvp0MXuvJ6bwHd9-n51y_tSVsE",
        "prices": {
            "FN": 3.51,
            "MW": 2.11,
            "FT": 1.43,
            "WW": 1.26,
            "BS": 1.03,
            "FNST": 6.52,
            "MWST": 4.39,
            "FTST": 2.89,
            "WWST": 2.11,
            "BSST": 2
        }
    }, {
        "id": 574,
        "collectionId": 39,
        "type": "weapon",
        "weaponName": "P250",
        "skinName": "Wingshot",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopujwezhoyszYI2gS09-klYOAhP_7J4Tdn2xZ_Isk2bHApt_3igyw_BI6a2D3co-TdwQ7ZgvT8we4yOfug57pvZ_MmiY3pGB8sr2n0-Lc",
        "prices": {
            "FN": 3.86,
            "MW": 2.21,
            "FT": 1.46,
            "WW": 1.32,
            "BS": 1.15,
            "FNST": 11.87,
            "MWST": 5.24,
            "FTST": 2.9,
            "WWST": 2.5,
            "BSST": 2.23
        }
    }, {
        "id": 575,
        "collectionId": 39,
        "type": "weapon",
        "weaponName": "AK-47",
        "skinName": "Frontside Misty",
        "rarity": "classified",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV08u_mpSOhcjnI7TDglRd4cJ5nqeSrY_x2VDlqBZrZTr2LIfAe1RvYgzW_Va6kL3u0JG8vJ7NyyQwunEj-z-DyIN9IvW2",
        "prices": {
            "FN": 52.7,
            "MW": 26.58,
            "FT": 14.12,
            "WW": 13.66,
            "BS": 10.41,
            "FNST": 118.77,
            "MWST": 48.6,
            "FTST": 30.49,
            "WWST": 27.88,
            "BSST": 23.69
        }
    }, {
        "id": 576,
        "collectionId": 39,
        "type": "weapon",
        "weaponName": "G3SG1",
        "skinName": "Flux",
        "rarity": "classified",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposem2LFZf1OD3dm5R642Jkoyej8jkJqnBmm5u5Mx2gv2Po4nx3ASx-kNoZWv2d4-TcgFrZgyG_wTrx-7sgpXtvZSdyiYy7yYh4WGdwUIAgFufLg",
        "prices": {
            "FN": 26.01,
            "MW": 12.5,
            "FT": 8.89,
            "WW": 7.77,
            "BS": 6.45,
            "FNST": 57.31,
            "MWST": 30.02,
            "FTST": 13.7,
            "WWST": 11.75,
            "BSST": 11.68
        }
    }, {
        "id": 577,
        "collectionId": 39,
        "type": "weapon",
        "weaponName": "SSG 08",
        "skinName": "Big Iron",
        "rarity": "classified",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopamie19f0Ob3Yi5FvISJgIWIn_n9MLrdn39I18l4jeHVu9302AHjqkJoMDjyLYfGJwc8Z1rZr1G4w-_o1sTptJvJwHVnviRw5XzD30vgQmdxPxk",
        "prices": {
            "FN": 23.5,
            "MW": 12.79,
            "FT": 8.83,
            "WW": 7.72,
            "BS": 7.62,
            "FNST": 52.49,
            "MWST": 32.53,
            "FTST": 17.27,
            "WWST": 14.12,
            "BSST": 14.75
        }
    }, {
        "id": 578,
        "collectionId": 39,
        "type": "weapon",
        "weaponName": "M4A1-S",
        "skinName": "Golden Coil",
        "rarity": "covert",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uOxh7-Gw_alIITCmGpa7cd4nuz-8oP5jGu4ohQ0J3f2I4LEIVM5Zg3R-lW6lby5hse_tJqfy3Jj6CIq43jenBfiiB9IOOJvm7XAHiKtaglX",
        "prices": {
            "FN": 174.38,
            "MW": 99.48,
            "FT": 62.49,
            "WW": 40.11,
            "BS": 28.18,
            "FNST": 290.95,
            "MWST": 176.36,
            "FTST": 107.24,
            "WWST": 80.11,
            "BSST": 58.07
        }
    }, {
        "id": 579,
        "collectionId": 39,
        "type": "weapon",
        "weaponName": "USP-S",
        "skinName": "Kill Confirmed",
        "rarity": "covert",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo6m1FBRp3_bGcjhQ09-jq5WYh8j_OrfdqWhe5sN4mOTE8bP5gVO8v109YDj0do7Dcw9taA6C81K_k-_n1pfp6MnOnSZhu3Qm4SrfzBbkg01McKUx0iC2I2fd",
        "prices": {
            "FN": 172.97,
            "MW": 84.29,
            "FT": 54.34,
            "WW": 41.8,
            "BS": 36.92,
            "FNST": 729,
            "MWST": 269.92,
            "FTST": 146.66,
            "WWST": 108.3,
            "BSST": 83.89
        }
    }, {
        "id": 580,
        "collectionId": 39,
        "type": "weapon",
        "weaponName": "Rare",
        "skinName": "Shadow Daggers",
        "rarity": "gold",
        "image": "./assets/shadow-daggers.png"
    },

    // Revolver Case
    {
        "id": 581,
        "collectionId": 40,
        "type": "weapon",
        "weaponName": "R8 Revolver",
        "skinName": "Crimson Web",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopL-zJAt21uH3eSR9-9m0h7-HnvD8J_WDlztT6sdw3r2SrdSg2Abk_UM9amjzdoPEcw5oZArW_gO7k7vv15Xoot2Xno-j0KC_",
        "prices": {
            "FN": 4.49,
            "MW": 0.24,
            "FT": 0.09,
            "WW": 0.09,
            "BS": 0.07,
            "FNST": 20.01,
            "MWST": 1.45,
            "FTST": 0.34,
            "WWST": 0.3,
            "BSST": 0.2
        }
    }, {
        "id": 582,
        "collectionId": 40,
        "type": "weapon",
        "weaponName": "AUG",
        "skinName": "Ricochet",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot6-iFAZt7PLddgJI-dG0mIW0m_7zO6-fkjMHsZUgi72T896m0VCwqEBlMD31IIPBcFc_ZlrY-1m2wLi6hpHouYOJlyUksb3lzA",
        "prices": {
            "FN": 0.75,
            "MW": 0.27,
            "FT": 0.09,
            "WW": 0.22,
            "BS": 0.1,
            "FNST": 2.71,
            "MWST": 0.98,
            "FTST": 0.37,
            "WWST": 1.22,
            "BSST": 0.26
        }
    }, {
        "id": 583,
        "collectionId": 40,
        "type": "weapon",
        "weaponName": "Desert Eagle",
        "skinName": "Corinthian",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposr-kLAtl7PLZTjlH7du6kb-ImOX9Pa_Zn2pf18l4jeHVu9303g3g80puMmj6IYXEcwU_Zl_V_lS_le7qgZS5vJWbzSBg7il34njD30vgSPN-IfI",
        "prices": {
            "FN": 0.59,
            "MW": 0.34,
            "FT": 0.23,
            "WW": 0.39,
            "FNST": 3.06,
            "MWST": 2.13,
            "FTST": 1.65,
            "WWST": 3.24
        }
    }, {
        "id": 584,
        "collectionId": 40,
        "type": "weapon",
        "weaponName": "P2000",
        "skinName": "Imperial",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovrG1eVcwg8zJfAJSvozmxL-CmufxIbLQmlRD7cFOhuDG_Zi7iwDjrkFsZGrzI4GXd1NqYA7Zr1ntl-i7hJK7tMmbnyZgvyIhtniMmAv3308P9JxMBw",
        "prices": {
            "FN": 0.36,
            "MW": 0.24,
            "FT": 0.17,
            "FNST": 1.25,
            "MWST": 0.76,
            "FTST": 0.61
        }
    }, {
        "id": 585,
        "collectionId": 40,
        "type": "weapon",
        "weaponName": "Sawed-Off",
        "skinName": "Yorick",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopbuyLgNv1fX3di59_92hkYSEkfHLPb7ShGRc6ctyj_v--YXygED68xA5Mj3xIYHEJFJoMA7VqFm7w7_phMK-v5jBmCNg7HIq4SuIyR2xgQYMMLK-nAIxoA",
        "prices": {
            "FN": 0.42,
            "MW": 0.18,
            "FT": 0.08,
            "WW": 0.06,
            "BS": 0.06,
            "FNST": 1.89,
            "MWST": 0.61,
            "FTST": 0.32,
            "WWST": 0.19,
            "BSST": 0.17
        }
    }, {
        "id": 586,
        "collectionId": 40,
        "type": "weapon",
        "weaponName": "SCAR-20",
        "skinName": "Outbreak",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopbmkOVUw7PvRTi5B7c7kxL-BgvnzP77DqWdY781lxL3Ho9il2lK1qEY_Mmn3JdfEJwFqM1nXqFO_xbvq1sDouZjIzXswviQ8pSGKZe0NLy8",
        "prices": {
            "FN": 0.35,
            "MW": 0.24,
            "FT": 0.09,
            "WW": 0.1,
            "BS": 0.08,
            "FNST": 1.28,
            "MWST": 0.57,
            "FTST": 0.34,
            "WWST": 0.23,
            "BSST": 0.22
        }
    }, {
        "id": 587,
        "collectionId": 40,
        "type": "weapon",
        "weaponName": "PP-Bizon",
        "skinName": "Fuel Rod",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLO_JAlf0Ob3czRY49KJmo-TnvjhIITdn2xZ_It1ibrA89mijlXk-UdoZ2GhJoLAdlJqM1DY-Vnvwb_shp_v6cjNzyE2pGB8st2-4asr",
        "prices": {
            "FN": 2.91,
            "MW": 1.39,
            "FT": 0.83,
            "WW": 0.61,
            "BS": 0.56,
            "FNST": 8.67,
            "MWST": 4.06,
            "FTST": 1.77,
            "WWST": 1.27,
            "BSST": 1.24
        }
    }, {
        "id": 588,
        "collectionId": 40,
        "type": "weapon",
        "weaponName": "Negev",
        "skinName": "Power Loader",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpouL-iLhFf0Ob3fzhF6cqJnY2blvTgDLfYkWNFppYi27zHo96i2lftqRFrammlLYCScQc4ZVvS-VO-wea9gcS075rLwHR9-n51CuXQpfM",
        "prices": {
            "FN": 6.33,
            "MW": 2.83,
            "FT": 1.27,
            "WW": 0.73,
            "BS": 0.52,
            "FNST": 30.27,
            "MWST": 11.06,
            "FTST": 4.61,
            "WWST": 2.81,
            "BSST": 2
        }
    }, {
        "id": 589,
        "collectionId": 40,
        "type": "weapon",
        "weaponName": "Five-SeveN",
        "skinName": "Retrobution",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLOzLhRlxfbGTj5X09q_goWYkuHxPYTDk39D58dknuDO-7P5gVO8v11rNj_3doSVIA5taAmFrlXqx-rphJ66vc7AnXtg6Cgj43zdyRPm0h9NcKUx0kOQhc3i",
        "prices": {
            "FN": 3.07,
            "MW": 1.51,
            "FT": 0.79,
            "WW": 0.64,
            "BS": 0.54,
            "FNST": 7.45,
            "MWST": 4,
            "FTST": 1.7,
            "WWST": 1.18,
            "BSST": 1.18
        }
    }, {
        "id": 590,
        "collectionId": 40,
        "type": "weapon",
        "weaponName": "SG 553",
        "skinName": "Tiger Moth",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopb3wflFf1OD3YjoXuY-JgImMkuXLPrTFnlRd4cJ5nqeQrYjw2FHhrkNuam73JdeTdQU9YVjT8gS4xei51MS9uZTPnyE17ygq-z-DyOkB2OsD",
        "prices": {
            "FN": 2.5,
            "MW": 1.33,
            "FT": 0.83,
            "WW": 0.63,
            "BS": 0.57,
            "FNST": 7.37,
            "MWST": 3.52,
            "FTST": 1.54,
            "WWST": 1.23,
            "BSST": 1.11
        }
    }, {
        "id": 591,
        "collectionId": 40,
        "type": "weapon",
        "weaponName": "Tec-9",
        "skinName": "Avalanche",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoor-mcjhjxszcdD4b092glYyKmfT8NoTdn2xZ_It0iL-Wp9r02gDk80c-NWylJ9WdIQ5tZliDrlnrkO3ogZS57ZrJwSdgpGB8sqmt10R9",
        "prices": {
            "FN": 4.01,
            "MW": 2.05,
            "FT": 1.1,
            "WW": 0.7,
            "BS": 0.57,
            "FNST": 12.23,
            "MWST": 5.28,
            "FTST": 2.85,
            "WWST": 1.68,
            "BSST": 1.56
        }
    }, {
        "id": 592,
        "collectionId": 40,
        "type": "weapon",
        "weaponName": "XM1014",
        "skinName": "Teclu Burner",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgporrf0e1Y07PLZTiVPvYznwL-DmOPLIbTVqWdY781lxO-Xo9j32Afirko-ZzygIoWddwE6N1nXq1jsxru-hZ-8ucjBmndk7yA8pSGKrPA1flw",
        "prices": {
            "FN": 2,
            "MW": 1.35,
            "FT": 0.78,
            "WW": 0.83,
            "BS": 0.68,
            "FNST": 5.92,
            "MWST": 3.42,
            "FTST": 1.6,
            "WWST": 1.68,
            "BSST": 1.64
        }
    }, {
        "id": 593,
        "collectionId": 40,
        "type": "weapon",
        "weaponName": "AK-47",
        "skinName": "Point Disarray",
        "rarity": "classified",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV08y5nY6fqPP9ILrDhGpI18l4jeHVu4702FLiqBA4MDv6JYHEIwRsNQ3Srwe-wu_t1pO76JrPyiNlu3Qh4X7D30vg5znacIE",
        "prices": {
            "FN": 29.17,
            "MW": 17.35,
            "FT": 11.85,
            "WW": 11.04,
            "BS": 9.54,
            "FNST": 78.59,
            "MWST": 44.31,
            "FTST": 25.56,
            "WWST": 25.04,
            "BSST": 22.08
        }
    }, {
        "id": 594,
        "collectionId": 40,
        "type": "weapon",
        "weaponName": "P90",
        "skinName": "Shapewood",
        "rarity": "classified",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopuP1FAR17OORIQJR5N2mkZeEmPPLP7LWnn8f7ZIm3r2Zodz20A22-hFkYDumLITBcFA4ZQqFqFTvx-nujMW4u8-dymwj5HeKrOWJ7A",
        "prices": {
            "FN": 8.54,
            "MW": 2.94,
            "FT": 1.73,
            "WW": 1.54,
            "BS": 1.59,
            "FNST": 27.12,
            "MWST": 8.58,
            "FTST": 3.84,
            "WWST": 3.03,
            "BSST": 3.17
        }
    }, {
        "id": 595,
        "collectionId": 40,
        "type": "weapon",
        "weaponName": "G3SG1",
        "skinName": "The Executioner",
        "rarity": "classified",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposem2LFZf0Ob3dm5R642JkZiOlOLgOrTfk3lu5Mx2gv2Pptql3wW2rkJrMmv1ItCXelI2Z1vRqFHolens1J_u6ZvOz3Uw7yMr7GGdwUKAPvlJ9A",
        "prices": {
            "FN": 13.1,
            "MW": 1.6,
            "FT": 1.48,
            "WW": 1.43,
            "FNST": 75.43,
            "MWST": 3.66,
            "FTST": 2.56,
            "WWST": 2.47
        }
    }, {
        "id": 596,
        "collectionId": 40,
        "type": "weapon",
        "weaponName": "R8 Revolver",
        "skinName": "Fade",
        "rarity": "covert",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopL-zJAt21uH3cDx96t2ykb-ZkuH7P63UhFRd4cJ5nqfA89uiiVGx8hVkYWDwItOSdwc-M1DZr1bowb3u18Tqus-fmCM17CQn-z-DyMgtirei",
        "prices": {
            "FN": 12.07,
            "MW": 7.11,
            "FT": 4.3,
            "WW": 5.59,
            "FNST": 55.02,
            "MWST": 29.14,
            "FTST": 16.54,
            "WWST": 26.53
        }
    }, {
        "id": 597,
        "collectionId": 40,
        "type": "weapon",
        "weaponName": "M4A4",
        "skinName": "Royal Paladin",
        "rarity": "covert",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhnwMzFJTwW0865jYGHqOTlJrLDk1Rd4cJ5nqfHrdynjVfnqBVlMGigIo6WdVI2ZVnT8lXox7ruhJS_uprKzXJrsiBw-z-DyEuekK1S",
        "prices": {
            "FN": 58.26,
            "MW": 12.37,
            "FT": 4.24,
            "WW": 5.2,
            "BS": 4.54,
            "FNST": 398.97,
            "MWST": 52.23,
            "FTST": 14.53,
            "WWST": 22.47,
            "BSST": 13.04
        }
    }, {
        "id": 598,
        "collectionId": 40,
        "type": "weapon",
        "weaponName": "Rare",
        "skinName": "Special Item",
        "rarity": "gold",
        "image": "./assets/rare-item.png"
    },

    // Wildfire
    {
        "id": 599,
        "collectionId": 41,
        "type": "weapon",
        "weaponName": "PP-Bizon",
        "skinName": "Photic Zone",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLO_JAlf0Ob3czRY49KJl4mfnu3xPYTdn2xZ_Ity2brArNXzjQPi-hU_Zmv2J4OXcAJrZluE-ADoyO-9jJTt75rOz3FkpGB8slDw9TrO",
        "prices": {
            "FN": 1.91,
            "MW": 0.65,
            "FT": 0.25,
            "WW": 0.15,
            "BS": 0.13,
            "FNST": 6.13,
            "MWST": 1.68,
            "FTST": 0.65,
            "WWST": 0.34,
            "BSST": 0.34
        }
    }, {
        "id": 600,
        "collectionId": 41,
        "type": "weapon",
        "weaponName": "Dual Berettas",
        "skinName": "Cartel",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpos7asPwJf0uL3dShD4N6zhoWfg_bnDLjQhH9U5Pp9g-7J4cKg2lGw-UdtYm-ndo7EdQQ7ZQnT_FfrkOe5gcC4tc_Kmic17Cl3sCvegVXp1sjO0ZOu",
        "prices": {
            "FN": 1.02,
            "MW": 0.28,
            "FT": 0.16,
            "WW": 0.14,
            "BS": 0.13,
            "FNST": 3.42,
            "MWST": 0.82,
            "FTST": 0.46,
            "WWST": 0.31,
            "BSST": 0.27
        }
    }, {
        "id": 601,
        "collectionId": 41,
        "type": "weapon",
        "weaponName": "MAC-10",
        "skinName": "Lapis Gator",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7umeldf0v73fDxBvYyJkYyOlOPmOrjYgnJu5Mx2gv2P8Y722FayrxZlZW-ndYTGIFQ8ZluB_lW8kO2805--vMnNziAyuyEltmGdwULZS1VHEw",
        "prices": {
            "FN": 0.55,
            "MW": 0.31,
            "FT": 0.18,
            "WW": 0.2,
            "BS": 0.17,
            "FNST": 1.63,
            "MWST": 0.97,
            "FTST": 0.5,
            "WWST": 0.61,
            "BSST": 0.39
        }
    }, {
        "id": 602,
        "collectionId": 41,
        "type": "weapon",
        "weaponName": "SSG 08",
        "skinName": "Necropos",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopamie19f0Ob3Yi5FvISJmoWIhfjkPKjummJW4NE_ie2T89-niVXk-EdlNj2gddKWI1NoMA3Y-gO7wee51pO1up-YyyBguj5iuygJJGQRng",
        "prices": {
            "FN": 2.09,
            "MW": 0.33,
            "FT": 0.2,
            "WW": 0.14,
            "BS": 0.13,
            "FNST": 7.11,
            "MWST": 1.47,
            "FTST": 0.8,
            "WWST": 0.64,
            "BSST": 0.63
        }
    }, {
        "id": 603,
        "collectionId": 41,
        "type": "weapon",
        "weaponName": "Tec-9",
        "skinName": "Jambiya",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoor-mcjhnwMzcdD4b09a3mYKCjvbLP7LWnn8f7JR33ruUp933igPj_0ZqZz_7JNeQcwRtYlHZ-gS5x-bugp_v6pzIyGwj5HdCAt7aPA",
        "prices": {
            "FN": 0.76,
            "MW": 0.25,
            "FT": 0.16,
            "WW": 0.13,
            "BS": 0.12,
            "FNST": 2.35,
            "MWST": 0.79,
            "FTST": 0.45,
            "WWST": 0.32,
            "BSST": 0.27
        }
    }, {
        "id": 604,
        "collectionId": 41,
        "type": "weapon",
        "weaponName": "USP-S",
        "skinName": "Lead Conduit",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo6m1FBRp3_bGcjhQ09ulq5WYh8jiPLfFl2xU18l4jeHVu92kjQDkqUc4Zz-gJI-VdgVqZQ6B_1C9l-3mhJXv7ZvMnyQw7HJw4X7D30vgsvcMSkE",
        "prices": {
            "FN": 2.05,
            "MW": 0.67,
            "FT": 0.46,
            "WW": 0.43,
            "BS": 0.43,
            "FNST": 9.9,
            "MWST": 2.46,
            "FTST": 1.75,
            "WWST": 1.69,
            "BSST": 1.74
        }
    }, {
        "id": 605,
        "collectionId": 41,
        "type": "weapon",
        "weaponName": "FAMAS",
        "skinName": "Valence",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLuoKhRf0uL3dzxP7c-Jl4-Fg_jhIYTdn2xZ_Isn3-2UpNn0igfgqkU6ZmmgLNeQcA84M13W-AC2wLq-gZS6up6bwXNqpGB8soOdR92B",
        "prices": {
            "FN": 4.59,
            "MW": 2.53,
            "FT": 1.68,
            "WW": 2.04,
            "BS": 1.3,
            "FNST": 12.2,
            "MWST": 5.43,
            "FTST": 3.07,
            "WWST": 3.12,
            "BSST": 2.32
        }
    }, {
        "id": 606,
        "collectionId": 41,
        "type": "weapon",
        "weaponName": "Five-SeveN",
        "skinName": "Triumvirate",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLOzLhRlxfbGTj5X09q_goWYkuHxPYTQg2xc7ctlj-3--YXygED6rhFramH2I9TGcFM6M1DQrFXrlbjphMe875iYznA16HF37X-LnES1gQYMMLIHFR1F_Q",
        "prices": {
            "FN": 3.4,
            "MW": 2.08,
            "FT": 1.52,
            "WW": 1.43,
            "BS": 1.21,
            "FNST": 7,
            "MWST": 4.37,
            "FTST": 3.08,
            "WWST": 2.38,
            "BSST": 2.01
        }
    }, {
        "id": 607,
        "collectionId": 41,
        "type": "weapon",
        "weaponName": "Glock-18",
        "skinName": "Royal Legion",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbaqKAxf1OD3djFN79fnzL-KgPbmN4Tdn2xZ_Isg07HCpYj23QLn-0prYzvycoXHIFVsYljXq1C9wObogZPv7Z3JzydkpGB8sj7oAKPM",
        "prices": {
            "FN": 5,
            "MW": 2.15,
            "FT": 1.63,
            "WW": 1.52,
            "BS": 1.44,
            "FNST": 21.39,
            "MWST": 6,
            "FTST": 3.52,
            "WWST": 2.68,
            "BSST": 2.23
        }
    }, {
        "id": 608,
        "collectionId": 41,
        "type": "weapon",
        "weaponName": "MAG-7",
        "skinName": "Praetorian",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7uifDhnwMzFcDoV08yklYWfmOX9MrXummJW4NE_37zFrNrzilDn-0BtZmDyJdeXcQ85NA7Z_1G2yem6jcDo7ZnKmHE26T5iuyjUAkGA1A",
        "prices": {
            "FN": 3.39,
            "MW": 2.1,
            "FT": 1.76,
            "WW": 1.53,
            "FNST": 7.16,
            "MWST": 4.25,
            "FTST": 3.07,
            "WWST": 2.25
        }
    }, {
        "id": 609,
        "collectionId": 41,
        "type": "weapon",
        "weaponName": "MP7",
        "skinName": "Impire",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6ryFBRw7P7YJgJL4cy_hoW0m_7zO6-fl25UvJYgiOrCp92k3FK2qEo6ZjqlIIDGIw85Yl2D8lfqlbzrgJbu7YOJlyWNmkVbaQ",
        "prices": {
            "FN": 3.3,
            "MW": 2.06,
            "FT": 1.55,
            "WW": 1.45,
            "FNST": 7.58,
            "MWST": 4.88,
            "FTST": 2.97,
            "WWST": 2.22
        }
    }, {
        "id": 610,
        "collectionId": 41,
        "type": "weapon",
        "weaponName": "AWP",
        "skinName": "Elite Build",
        "rarity": "classified",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FAR17PLfYQJP7c-ikZKSqPv9NLPF2D0Av8Ai2byRod_z2gHkqBc-aj31dYLGdQ82NFjX_wPryOvphcXo6JnXiSw0NEnp7Nc",
        "prices": {
            "FN": 27.62,
            "MW": 16.07,
            "FT": 12.93,
            "WW": 11.47,
            "BS": 9.24,
            "FNST": 64.2,
            "MWST": 34.68,
            "FTST": 21.53,
            "WWST": 17.26,
            "BSST": 17.69
        }
    }, {
        "id": 611,
        "collectionId": 41,
        "type": "weapon",
        "weaponName": "Desert Eagle",
        "skinName": "Kumicho Dragon",
        "rarity": "classified",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposr-kLAtl7PLZTjlH_9mkgIWKkPvxDLDEm2JS4Mp1mOjG-oLKhF2zowdyYmD7I4LAe1c8YQuGqwK6yLu518O96pzMzHUxsyknsHvYnBO0gk4aO_sv26LIOeeP5w",
        "prices": {
            "FN": 28.59,
            "MW": 15.63,
            "FT": 12.3,
            "WW": 12,
            "BS": 9.92,
            "FNST": 63.36,
            "MWST": 38.16,
            "FTST": 25.4,
            "WWST": 28.37,
            "BSST": 23.35
        }
    }, {
        "id": 612,
        "collectionId": 41,
        "type": "weapon",
        "weaponName": "Nova",
        "skinName": "Hyper Beast",
        "rarity": "classified",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpouLWzKjhjxszGfitD09SvhIWZlfL1IK_ummJW4NE_j-qXoYmkiVXm-Rc_ZGGldYCccFc8Y17Zq1i3x-jmjZK-7pTImiFl7D5iuyh56VPybg",
        "prices": {
            "FN": 24.24,
            "MW": 15.26,
            "FT": 12.64,
            "WW": 11.21,
            "BS": 9.37,
            "FNST": 58.75,
            "MWST": 34.72,
            "FTST": 22.22,
            "WWST": 16.23,
            "BSST": 14.52
        }
    }, {
        "id": 613,
        "collectionId": 41,
        "type": "weapon",
        "weaponName": "AK-47",
        "skinName": "Fuel Injector",
        "rarity": "covert",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhnwMzJemkV08-jhIWZlP_1IbzUklRd4cJ5nqeZ9Nzx3Qex80c-ZGn3LYWTdFc9NFuEqAO8xLrtjMC4u56dznQ36XVw-z-DyK64IMQ5",
        "prices": {
            "FN": 328.04,
            "MW": 218.46,
            "FT": 143.23,
            "WW": 96.98,
            "BS": 68.33,
            "FNST": 837,
            "MWST": 354.27,
            "FTST": 241.71,
            "WWST": 164.83,
            "BSST": 133.26
        }
    }, {
        "id": 614,
        "collectionId": 41,
        "type": "weapon",
        "weaponName": "M4A4",
        "skinName": "The Battlestar",
        "rarity": "covert",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhnwMzFJTwW08y_m46OkuXLP7LWnn8fusFyib3CrN_0jAXs_0JrajzwINSccQM3YVHQrla9yObohJ7ov5uczWwj5Hd7eyZ_vw",
        "prices": {
            "FN": 6.63,
            "MW": 3.49,
            "FT": 3.17,
            "WW": 4.09,
            "BS": 3.26,
            "FNST": 32.92,
            "MWST": 15.49,
            "FTST": 9.35,
            "WWST": 13.61,
            "BSST": 9.57
        }
    }, {
        "id": 615,
        "collectionId": 41,
        "type": "weapon",
        "weaponName": "Rare",
        "skinName": "Special Item",
        "rarity": "gold",
        "image": "./assets/rare-item.png"
    },

    // Chroma 3
    {
        "id": 616,
        "collectionId": 42,
        "type": "weapon",
        "weaponName": "Dual Berettas",
        "skinName": "Ventilators",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpos7asPwJf1OD3dShD4N6zhoWfg_bnDK3UmH9Y5MRlhfvSyoD8j1yg5UdpMDvyctDBcANqNFmFrlTsyO691Je8uM_In3o2unEqsC3fyke1hB1SLrs4UL7xe9U",
        "prices": {
            "FN": 0.21,
            "MW": 0.11,
            "FT": 0.07,
            "WW": 0.07,
            "FNST": 0.88,
            "MWST": 0.41,
            "FTST": 0.22,
            "WWST": 0.34
        }
    }, {
        "id": 617,
        "collectionId": 42,
        "type": "weapon",
        "weaponName": "G3SG1",
        "skinName": "Orange Crash",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposem2LFZfwOP3dm5R642JmYmHnuP9MrTDl2VW7fp9g-7J4cKn2QGw_kc4Zjr7Ioedd1M4YAzW_1e3xebmjMTqvJ_An3Q2uiciti6PgVXp1gXLUlLI",
        "prices": {
            "FN": 0.22,
            "MW": 0.11,
            "FT": 0.06,
            "WW": 0.08,
            "BS": 0.06,
            "FNST": 0.85,
            "MWST": 0.34,
            "FTST": 0.15,
            "WWST": 0.19,
            "BSST": 0.16
        }
    }, {
        "id": 618,
        "collectionId": 42,
        "type": "weapon",
        "weaponName": "M249",
        "skinName": "Spectre",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-jxcjhjxszFI2kb08-mkYOfhfLLP7LWnn8f6pVw2LrCodjw3QLn8kM-ZzuhcNWXIQU2aFHR-we4kr3t15K-6MzKnWwj5HdN0A91jg",
        "prices": {
            "FN": 0.22,
            "MW": 0.12,
            "FT": 0.07,
            "WW": 0.09,
            "BS": 0.08,
            "FNST": 0.74,
            "MWST": 0.39,
            "FTST": 0.2,
            "WWST": 0.23,
            "BSST": 0.21
        }
    }, {
        "id": 619,
        "collectionId": 42,
        "type": "weapon",
        "weaponName": "MP9",
        "skinName": "Bioleak",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6r8FAZt7P7YKAJA5dO6kYGAqPv9NLPF2G8I6pV12uyY84n02gXk_0trYjzzIYeVIFI5YVyCrAC-wr270ZC8uZvXiSw0m4a2ZsM",
        "prices": {
            "FN": 0.29,
            "MW": 0.17,
            "FT": 0.08,
            "WW": 0.15,
            "BS": 0.1,
            "FNST": 1.09,
            "MWST": 0.75,
            "FTST": 0.36,
            "WWST": 0.7,
            "BSST": 0.34
        }
    }, {
        "id": 620,
        "collectionId": 42,
        "type": "weapon",
        "weaponName": "P2000",
        "skinName": "Oceanic",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovrG1eVcwg8zAaAJSvozmxL-ElPL1PbLummJW4NE_0u-Xodqg3Ffh8kVoam72d46QcAY_M1mEqAPql-m9jcDq7c_Oz3ox7z5iuyh2yQpQrg",
        "prices": {
            "FN": 0.21,
            "MW": 0.12,
            "FT": 0.06,
            "WW": 0.08,
            "BS": 0.06,
            "FNST": 0.78,
            "MWST": 0.35,
            "FTST": 0.15,
            "WWST": 0.52,
            "BSST": 0.13
        }
    }, {
        "id": 621,
        "collectionId": 42,
        "type": "weapon",
        "weaponName": "Sawed-Off",
        "skinName": "Fubar",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopbuyLgNv1fX3di59_92hkYSEkfHLNa7Tl3lu5cB1g_zMu9ihjFG1_0Y-Zjr7cIOVIA49aAvTrlS4kuvr18C7uZ_Ly3QwsiF05X7D30vgzfynV54",
        "prices": {
            "FN": 0.09,
            "MW": 0.06,
            "FNST": 0.26,
            "MWST": 0.11
        }
    }, {
        "id": 622,
        "collectionId": 42,
        "type": "weapon",
        "weaponName": "SG 553",
        "skinName": "Atlas",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopb3wflFf0Ob3YjoXuY-JlZSHluTLP7LWnn8fvZYn2LiZ89Sk3gTg80Y6MmDxI9OUe1BvYV6GrwXvlOrs0Z_vvJmcz2wj5HeM9iqsXg",
        "prices": {
            "FN": 0.41,
            "MW": 0.11,
            "FT": 0.05,
            "WW": 0.07,
            "BS": 0.05,
            "FNST": 0.83,
            "MWST": 0.3,
            "FTST": 0.13,
            "WWST": 0.45,
            "BSST": 0.12
        }
    }, {
        "id": 623,
        "collectionId": 42,
        "type": "weapon",
        "weaponName": "CZ75-Auto",
        "skinName": "Red Astor",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotaDyfgZf1OD3cicVud2JhoWPluTgPKnummJW4NE_j7mR8Nqt0A3s_RBpY2H0I9eUcgVoNF7Wrla-l7q5hMDvvZ6bmydr6D5iuygHt3zVOw",
        "prices": {
            "FN": 1.35,
            "MW": 0.67,
            "FT": 0.41,
            "WW": 0.33,
            "BS": 0.33,
            "FNST": 3.98,
            "MWST": 1.37,
            "FTST": 0.67,
            "WWST": 0.58,
            "BSST": 0.55
        }
    }, {
        "id": 624,
        "collectionId": 42,
        "type": "weapon",
        "weaponName": "Galil AR",
        "skinName": "Firefight",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbupIgthwczPYgJF7dC_mIGZqP76ML7fk3lQ_MpjteXI8oThxgLi8kpsYjv7IISWdAdsZV7R-lntlLrv1JO5ucvMzHVmsiMrsX_UnECpwUYbQtacsVs",
        "prices": {
            "FN": 1.5,
            "MW": 0.72,
            "FT": 0.41,
            "WW": 0.33,
            "BS": 0.34,
            "FNST": 6.07,
            "MWST": 1.53,
            "FTST": 0.72,
            "WWST": 0.64,
            "BSST": 0.71
        }
    }, {
        "id": 625,
        "collectionId": 42,
        "type": "weapon",
        "weaponName": "SSG 08",
        "skinName": "Ghost Crusader",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopamie19f1OD3Yi5FvISJlZKGlvT7Ib7ummJW4NE_2r2Sptin0ALtqEVoNmiiJI6UcgE-ZF2B_gS_k-3sh8fotc7Oz3Ewuj5iuygoy1B0ow",
        "prices": {
            "FN": 3.14,
            "MW": 1.36,
            "FT": 0.58,
            "WW": 0.4,
            "BS": 0.36,
            "FNST": 11.72,
            "MWST": 4.23,
            "FTST": 1.91,
            "WWST": 1.32,
            "BSST": 1.16
        }
    }, {
        "id": 626,
        "collectionId": 42,
        "type": "weapon",
        "weaponName": "Tec-9",
        "skinName": "Re-Entry",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoor-mcjhh3szcdD4b086zkIKHluTgDLfYkWNFppV30u3Eotmi2wO3qEBpMjrycIeRIVA5ZVHS_lm9ybq-gcK77c_BzXt9-n516LZ7lec",
        "prices": {
            "FN": 1.29,
            "MW": 0.71,
            "FT": 0.47,
            "WW": 0.47,
            "FNST": 3.84,
            "MWST": 1.7,
            "FTST": 0.87,
            "WWST": 1.16
        }
    }, {
        "id": 627,
        "collectionId": 42,
        "type": "weapon",
        "weaponName": "XM1014",
        "skinName": "Black Tie",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgporrf0e1Y07PDdTiVPvYznwL-Yh_L3J6nEm1Rd4cJ5nqeXpt2tjVHh-hBoY2yldoPAelc6YQmFrgftwrrmjcK5v52fznpq6yVw-z-DyAxPPsAe",
        "prices": {
            "FN": 1.9,
            "MW": 0.83,
            "FT": 0.45,
            "WW": 0.45,
            "BS": 0.34,
            "FNST": 7.18,
            "MWST": 2.62,
            "FTST": 0.87,
            "WWST": 1,
            "BSST": 0.67
        }
    }, {
        "id": 628,
        "collectionId": 42,
        "type": "weapon",
        "weaponName": "AUG",
        "skinName": "Fleet Flock",
        "rarity": "classified",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot6-iFAR17PLddgJR-926mI-chMj4OrzZgiUDscAl0uvA9Nil0AK2-UM5Zzj2coGUdlQ7N1CDqVe9xO670JHvu5jB1zI97aEA4lly",
        "prices": {
            "FN": 10.24,
            "MW": 4.1,
            "FT": 2.65,
            "WW": 2.06,
            "BS": 1.82,
            "FNST": 23.33,
            "MWST": 8.04,
            "FTST": 3.99,
            "WWST": 2.84,
            "BSST": 2.86
        }
    }, {
        "id": 629,
        "collectionId": 42,
        "type": "weapon",
        "weaponName": "P250",
        "skinName": "Asiimov",
        "rarity": "classified",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopujwezhjxszYI2gS092lnYmGmOHLP7LWnn8fv8ZyjL2XoIqijFfh_hduN2D1JIKTd1I6YVyD-1Htk73n1pK4vs6cnGwj5Hc6h7wWIQ",
        "prices": {
            "FN": 16.04,
            "MW": 3.51,
            "FT": 2.53,
            "WW": 1.7,
            "FNST": 54.27,
            "MWST": 9.45,
            "FTST": 7.36,
            "WWST": 5.2
        }
    }, {
        "id": 630,
        "collectionId": 42,
        "type": "weapon",
        "weaponName": "UMP-45",
        "skinName": "Primal Saber",
        "rarity": "classified",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo7e1f1Jf0Ob3ZDBSuImJhJKCmvb4ILrTk3lu5Mx2gv2Po9v3jVLt-hJoYG7wINKTdwI7YF6G_FTtxeznjZG9vc_LzHU3uCAm7GGdwUIwVIf-Gg",
        "prices": {
            "FN": 9.82,
            "MW": 4.32,
            "FT": 2.73,
            "WW": 2.18,
            "BS": 1.56,
            "FNST": 20.45,
            "MWST": 9.09,
            "FTST": 4.02,
            "WWST": 3.85,
            "BSST": 2.98
        }
    }, {
        "id": 631,
        "collectionId": 42,
        "type": "weapon",
        "weaponName": "M4A1-S",
        "skinName": "Chantico's Fire",
        "rarity": "covert",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO1gb-Gw_alIITCmX5d_MR6j_v--YXygED6_0pvaj31LdTBdA8_NVzS-wLvyL3o0ZC5uZWbzXRjsihx7S6Omha2hgYMMLLrQAonqQ",
        "prices": {
            "FN": 121.55,
            "MW": 55,
            "FT": 30.35,
            "WW": 21.32,
            "BS": 15.23,
            "FNST": 231.77,
            "MWST": 99.37,
            "FTST": 56.36,
            "WWST": 37.5,
            "BSST": 36.12
        }
    }, {
        "id": 632,
        "collectionId": 42,
        "type": "weapon",
        "weaponName": "PP-Bizon",
        "skinName": "Judgement of Anubis",
        "rarity": "covert",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLO_JAlf0Ob3czRY49KJl5WZhPLLP7LWnn8f65Qoie-Urdjx21Hm8xc-Z2DyINKUdwM3MgzT8la3yOfrgJG1uJmdwWwj5Hfykm1Yuw",
        "prices": {
            "FN": 8.86,
            "MW": 5.97,
            "FT": 4.1,
            "WW": 3.96,
            "BS": 3.51,
            "FNST": 33.4,
            "MWST": 18.57,
            "FTST": 11.39,
            "WWST": 8.65,
            "BSST": 7.89
        }
    }, {
        "id": 633,
        "collectionId": 42,
        "type": "weapon",
        "weaponName": "Rare",
        "skinName": "Special Item",
        "rarity": "gold",
        "image": "./assets/rare-item.png"
    },

    // Gamma
    {
        "id": 634,
        "collectionId": 43,
        "type": "weapon",
        "weaponName": "Five-SeveN",
        "skinName": "Violent Daimyo",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLOzLhRlxfbGTj5X09q_goW0hPLiNrXukmpY5dx-teXI8oThxlDn8kdvamGgddOUewE5ZFzW8lm5wOrq0cXquszNwXth7iJ3sX3UzkSpwUYbP1ABv1A",
        "prices": {
            "FN": 0.45,
            "MW": 0.19,
            "FT": 0.08,
            "WW": 0.15,
            "BS": 0.09,
            "FNST": 2.02,
            "MWST": 0.85,
            "FTST": 0.32,
            "WWST": 1.01,
            "BSST": 0.29
        }
    }, {
        "id": 635,
        "collectionId": 43,
        "type": "weapon",
        "weaponName": "MAC-10",
        "skinName": "Carnivore",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7umeldf0uL3fDxB043mq4GHnvL6DLjQm2Ru5Mx2gv2PoNXw2FCxqEE5ZWv0cY_AJwVsN13Z_we5l7q5hcXq7p_Kn3owvSl05WGdwULaNsd9iQ",
        "prices": {
            "FN": 0.41,
            "MW": 0.15,
            "FT": 0.08,
            "WW": 0.08,
            "BS": 0.08,
            "FNST": 1.61,
            "MWST": 0.4,
            "FTST": 0.21,
            "WWST": 0.18,
            "BSST": 0.19
        }
    }, {
        "id": 636,
        "collectionId": 43,
        "type": "weapon",
        "weaponName": "Nova",
        "skinName": "Exo",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpouLWzKjhhwszGfitD08-1nb-Nnsj4OrzZgiUI68Mj3LGZpNr2iVDhqRc-NmrwdtKRJgdqNQuF-wTsye-5jJa5vZvN1zI97btNrV2z",
        "prices": {
            "FN": 0.26,
            "MW": 0.18,
            "FT": 0.13,
            "WW": 0.21,
            "BS": 0.13,
            "FNST": 0.91,
            "MWST": 0.5,
            "FTST": 0.25,
            "WWST": 0.25,
            "BSST": 0.32
        }
    }, {
        "id": 637,
        "collectionId": 43,
        "type": "weapon",
        "weaponName": "P250",
        "skinName": "Iron Clad",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopujwezhnwMzYI2gS09GzgIGHqOf1Pb7dhVRd4cJ5nqfApNyhi1Hl-RZpYz-iJoKScwc5YVDX8lPrxLro15S_6ZybmiBk7iFw-z-DyIqJ8OGX",
        "prices": {
            "FN": 0.47,
            "MW": 0.13,
            "FT": 0.07,
            "WW": 0.09,
            "BS": 0.07,
            "FNST": 1.51,
            "MWST": 0.37,
            "FTST": 0.19,
            "WWST": 0.24,
            "BSST": 0.19
        }
    }, {
        "id": 638,
        "collectionId": 43,
        "type": "weapon",
        "weaponName": "PP-Bizon",
        "skinName": "Harvester",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLO_JAlf1OD3YS197tWsm460n_bmJb7Cgm5D18l4jeHVu9qg3FDm_RdoYD30cYKQegVvYQ2Er1Trwbu-g8TuupTOwXdrvCkqsSzD30vgYAZZ8iA",
        "prices": {
            "FN": 0.37,
            "MW": 0.15,
            "FT": 0.08,
            "WW": 0.15,
            "BS": 0.09,
            "FNST": 1.14,
            "MWST": 0.34,
            "FTST": 0.21,
            "WWST": 0.13,
            "BSST": 0.13
        }
    }, {
        "id": 639,
        "collectionId": 43,
        "type": "weapon",
        "weaponName": "Tec-9",
        "skinName": "Ice Cap",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoor-mcjhh3szcdD59teOlkYG0hPb4J4Tdn2xZ_Ism2L_HotTzjAzj-RI9YTqgctXEIA9vYV3RqFXsxue8hpe46JjJmHY2pGB8srWWYKT2",
        "prices": {
            "FN": 0.73,
            "MW": 0.38,
            "FT": 0.12,
            "WW": 0.14,
            "BS": 0.27,
            "FNST": 2.03,
            "MWST": 1.23,
            "FTST": 0.46,
            "WWST": 0.5,
            "BSST": 0.42
        }
    }, {
        "id": 640,
        "collectionId": 43,
        "type": "weapon",
        "weaponName": "SG 553",
        "skinName": "Aerial",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopb3wflFf0Ob3YjoXuY-JlYWZnvb4DLfYkWNFpsQg2LqZotil0QG18kU9amuiddfGJgZoZ1yB_gfrl-vr08e4uZicwXB9-n51wGEO0Qg",
        "prices": {
            "FN": 0.28,
            "MW": 0.16,
            "FT": 0.08,
            "WW": 0.15,
            "BS": 0.1,
            "FNST": 1.12,
            "MWST": 0.53,
            "FTST": 0.21,
            "WWST": 0.41,
            "BSST": 0.2
        }
    }, {
        "id": 641,
        "collectionId": 43,
        "type": "weapon",
        "weaponName": "AWP",
        "skinName": "Phobos",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FABz7PLfYQJS5NO0m5O0m_7zO6-fkGhQsZMgieqYrI-i2ACy-0o_Z22mItOdcAU5aVzT_gTowbvth5a0u4OJlyU2Brz6WA",
        "prices": {
            "FN": 1.55,
            "MW": 1,
            "FT": 1.01,
            "WW": 2.93,
            "FNST": 6.33,
            "MWST": 3.66,
            "FTST": 3.36,
            "WWST": 6.79
        }
    }, {
        "id": 642,
        "collectionId": 43,
        "type": "weapon",
        "weaponName": "AUG",
        "skinName": "Aristocrat",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot6-iFABz7PLddgJD_tWlgI-IhfbgDLfYkWNFppEh2r3F946n2Ffk-BdtMmvyJNDDe1c3aVHW8gXqk-zqhMTo6smdmnR9-n51p3fUIBA",
        "prices": {
            "FN": 1.71,
            "MW": 0.83,
            "FT": 0.46,
            "WW": 0.79,
            "BS": 0.4,
            "FNST": 4.82,
            "MWST": 2.22,
            "FTST": 1.04,
            "WWST": 1.68,
            "BSST": 1.38
        }
    }, {
        "id": 643,
        "collectionId": 43,
        "type": "weapon",
        "weaponName": "P90",
        "skinName": "Chopper",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopuP1FABz7OORIQJE-dC6q5SDhfjgJ7fUqWdY781lxL6R8Iqj0FDj-0VtZDyhJ4edJwRqN1jVr1G3l-nnhZK4tMzImyM1unQ8pSGK75hLHr0",
        "prices": {
            "FN": 1.62,
            "MW": 0.93,
            "FT": 0.53,
            "WW": 0.87,
            "BS": 0.56,
            "FNST": 4.72,
            "MWST": 2.5,
            "FTST": 1.29,
            "WWST": 1.99,
            "BSST": 1.11
        }
    }, {
        "id": 644,
        "collectionId": 43,
        "type": "weapon",
        "weaponName": "Sawed-Off",
        "skinName": "Limelight",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopbuyLgNv1fX3cih9_92hkYS0mPHyDLfYm25u5Mx2gv2Prdvzilax-kZlZDyiJILEdwdsZF6G-QO-l-m8hsDvuszMnyRlvyUhtmGdwULNRxrMww",
        "prices": {
            "FN": 2.03,
            "MW": 0.79,
            "FT": 0.48,
            "WW": 0.38,
            "BS": 0.37,
            "FNST": 5.58,
            "MWST": 1.86,
            "FTST": 0.97,
            "WWST": 0.87,
            "BSST": 0.69
        }
    }, {
        "id": 645,
        "collectionId": 43,
        "type": "weapon",
        "weaponName": "R8 Revolver",
        "skinName": "Reboot",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopL-zJAt21uH3cih9_oSJl5mJkuXnI7TDglRd4cJ5nqfFoIn30AbjrUplMm3zJY-Ud1Q2Yl_XrwXvxrznhMe87s7AmiM2vnJ0-z-DyNeUBGhM",
        "prices": {
            "FN": 3.24,
            "MW": 1.08,
            "FT": 0.57,
            "WW": 0.37,
            "BS": 0.38,
            "FNST": 13.85,
            "MWST": 3.63,
            "FTST": 1.58,
            "WWST": 1.02,
            "BSST": 0.94
        }
    }, {
        "id": 646,
        "collectionId": 43,
        "type": "weapon",
        "weaponName": "M4A4",
        "skinName": "Desolate Space",
        "rarity": "classified",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhjxszFJTwW09izh4-HluPxDKjBl2hU18l4jeHVu93zi1aw_hZtYW2icYHGdwJtN1nSr1foxui8gZW96ZvPznMyvSMq4XrD30vgc83x0v4",
        "prices": {
            "FN": 17.4,
            "MW": 4.95,
            "FT": 3.23,
            "WW": 2.61,
            "BS": 2.66,
            "FNST": 53.03,
            "MWST": 15.8,
            "FTST": 8.05,
            "WWST": 7.91,
            "BSST": 7.91
        }
    }, {
        "id": 647,
        "collectionId": 43,
        "type": "weapon",
        "weaponName": "SCAR-20",
        "skinName": "Bloodsport",
        "rarity": "classified",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopbmkOVUw7PTbTi5B7c7kxL-Jm_j7N6jBmXlF18l4jeHVu4jx0Q2yrhA_MWrycITAIQQ3ZwqDrle8wb-90Z60ucjPnydmunQm4SrD30vg_ZtSLog",
        "prices": {
            "FN": 7.72,
            "MW": 4.58,
            "FT": 3,
            "WW": 2.35,
            "FNST": 17.34,
            "MWST": 8.33,
            "FTST": 4.68,
            "WWST": 3.95
        }
    }, {
        "id": 648,
        "collectionId": 43,
        "type": "weapon",
        "weaponName": "P2000",
        "skinName": "Imperial Dragon",
        "rarity": "classified",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovrG1eVcwg8zPYgJSvozmxL-CmufxIbLQmlRV-sR2hef--YXygED6qBBkYTugIoWQcVc-NFCDr1i4wrjp15buup3JwHJm7iR2tnzazUOz0AYMMLKd06oYrw",
        "prices": {
            "FN": 8.89,
            "MW": 4.46,
            "FT": 2.87,
            "WW": 2.34,
            "BS": 2.21,
            "FNST": 17.4,
            "MWST": 8.29,
            "FTST": 4.52,
            "WWST": 5.3,
            "BSST": 4.77
        }
    }, {
        "id": 649,
        "collectionId": 43,
        "type": "weapon",
        "weaponName": "Glock-18",
        "skinName": "Wasteland Rebel",
        "rarity": "covert",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbaqKAxf0Ob3djFN79eJg4GYg_L4MrXVqXlU6sB9teXI8oThxgbs_0tlajihJ4PAd1c8aAvWrwXsx-q9h8fqvZTNmic2uylz5SqJlxypwUYbBM1DXmo",
        "prices": {
            "FN": 6.89,
            "MW": 4.85,
            "FT": 4.46,
            "WW": 4.94,
            "BS": 4.42,
            "FNST": 26.82,
            "MWST": 17.33,
            "FTST": 13.3,
            "WWST": 13.65,
            "BSST": 11.9
        }
    }, {
        "id": 650,
        "collectionId": 43,
        "type": "weapon",
        "weaponName": "M4A1-S",
        "skinName": "Mecha Industries",
        "rarity": "covert",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uOxh7-Gw_alDLbUlWNQ18x_jvzS4Z78jUeLpxo7Oy3tJo-ScVVoZAuB8wW_xOft0ZC6uZ-bn3Nn63Mq7C2Oyx2yiBsYarNv1OveFwt9ELX6XQ",
        "prices": {
            "FN": 74.57,
            "MW": 51.31,
            "FT": 30.59,
            "WW": 28.19,
            "BS": 19.97,
            "FNST": 136.95,
            "MWST": 93.49,
            "FTST": 52.97,
            "WWST": 51.63,
            "BSST": 43.4
        }
    }, {
        "id": 651,
        "collectionId": 43,
        "type": "weapon",
        "weaponName": "Rare",
        "skinName": "Special Item",
        "rarity": "gold",
        "image": "./assets/rare-item.png"
    },

    // Gamma 2
    {
        "id": 652,
        "collectionId": 44,
        "type": "weapon",
        "weaponName": "CZ75-Auto",
        "skinName": "Imprint",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotaDyfgZf1OD3cicVueOihoWKk8j4OrzZgiUJ65cm3O3Dot-lilbn-EdrZDiidYOXJAFvY1vY-FTow-fq0Je4v5vN1zI97U0IONk-",
        "prices": {
            "FN": 0.31,
            "MW": 0.1,
            "FT": 0.06,
            "WW": 0.05,
            "BS": 0.05,
            "FNST": 1.14,
            "MWST": 0.27,
            "FTST": 0.13,
            "WWST": 0.12,
            "BSST": 0.12
        }
    }, {
        "id": 653,
        "collectionId": 44,
        "type": "weapon",
        "weaponName": "Five-SeveN",
        "skinName": "Scumbria",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLOzLhRlxfbGTjxT09q_goW0hPLiNrXuhWhE5cdjg-j--YXygED6qRBsZj-gIoKWd1Q2ZV3S_wC-kLzugZbu75rLnHJguHEr7SuMzRK2gQYMMLImO8cY6g",
        "prices": {
            "FN": 0.3,
            "MW": 0.1,
            "FT": 0.06,
            "WW": 0.06,
            "BS": 0.07,
            "FNST": 1.36,
            "MWST": 0.26,
            "FTST": 0.13,
            "WWST": 0.12,
            "BSST": 0.13
        }
    }, {
        "id": 654,
        "collectionId": 44,
        "type": "weapon",
        "weaponName": "G3SG1",
        "skinName": "Ventilator",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposem2LFZf1OD3dm5R642JgoWFg_74Mq_ehFRd4cJ5nqeU9oim3gDnr0c4ajqnJIOce1M8ZAnR-VG8lOnnjZC9vc-dwCNjuiIh-z-DyLXb1QOb",
        "prices": {
            "FN": 0.21,
            "MW": 0.1,
            "FT": 0.06,
            "WW": 0.06,
            "FNST": 0.7,
            "MWST": 0.26,
            "FTST": 0.14,
            "WWST": 0.18
        }
    }, {
        "id": 655,
        "collectionId": 44,
        "type": "weapon",
        "weaponName": "Negev",
        "skinName": "Dazzle",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpouL-iLhFf2-r3fzhF6cqJkIGRjfvxDLfYkWNFppYk37HE9omniQPk-UZuNzqidY7AIw9rYlrU_1K3kLvu1JLq75ybmnJ9-n51ZvItZMo",
        "prices": {
            "FN": 0.39,
            "MW": 0.06,
            "FT": 0.08,
            "WW": 0.06,
            "FNST": 1.66,
            "MWST": 0.17,
            "FTST": 0.49,
            "WWST": 0.15
        }
    }, {
        "id": 656,
        "collectionId": 44,
        "type": "weapon",
        "weaponName": "P90",
        "skinName": "Grim",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopuP1FAR17OORIQJF_tW7mb-HnvD8J_WEzz4AvMEmiLyV89qm31Ln-kdvYWChdoXDJ1A_Ml-GrAW_k-_qhsTtot2Xnl5g8bQH",
        "prices": {
            "FN": 0.98,
            "MW": 0.35,
            "FT": 0.11,
            "WW": 0.26,
            "BS": 0.11,
            "FNST": 3.69,
            "MWST": 1.24,
            "FTST": 0.5,
            "WWST": 1.71,
            "BSST": 0.36
        }
    }, {
        "id": 657,
        "collectionId": 44,
        "type": "weapon",
        "weaponName": "UMP-45",
        "skinName": "Briefing",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo7e1f1Jf0Ob3ZDBSuImJmYWfhf7gNqnQqWdY781lxL2X9I-h2wzsqkpqZmigIYOQJ1U4aVzZ-VS2k-bq05C87ZXOmnFhsnQ8pSGKJGHF3CM",
        "prices": {
            "FN": 0.29,
            "MW": 0.09,
            "FT": 0.06,
            "WW": 0.05,
            "BS": 0.06,
            "FNST": 1.25,
            "MWST": 0.28,
            "FTST": 0.15,
            "WWST": 0.13,
            "BSST": 0.13
        }
    }, {
        "id": 658,
        "collectionId": 44,
        "type": "weapon",
        "weaponName": "XM1014",
        "skinName": "Slipstream",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgporrf0e1Y07PvRTiVPvYznwL-Nhfb3J7rdqWld_cBOhuDG_Zi7jQ3j-UM6MW6hIY-XelJsaQqDrFa3lejtjZO87cvMmyRnvSVw7CqOmgv3309KvhYMug",
        "prices": {
            "FN": 0.23,
            "MW": 0.11,
            "FT": 0.06,
            "WW": 0.07,
            "BS": 0.08,
            "FNST": 0.89,
            "MWST": 0.49,
            "FTST": 0.19,
            "WWST": 0.27,
            "BSST": 0.17
        }
    }, {
        "id": 659,
        "collectionId": 44,
        "type": "weapon",
        "weaponName": "Desert Eagle",
        "skinName": "Directive",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposr-kLAtl7PLZTjlH_9mkgL-OlvD4NoTSmWVC_MRzhuz--YXygED6rRFuNWv1I4XBJgU3aF-B-FDsl7jmhJS16Z2dyydhsyRx5XzdlhDiiQYMMLJVFcMKgw",
        "prices": {
            "FN": 6.14,
            "MW": 1.09,
            "FT": 0.42,
            "WW": 0.37,
            "BS": 0.34,
            "FNST": 24.65,
            "MWST": 4.51,
            "FTST": 1.28,
            "WWST": 1.37,
            "BSST": 1.26
        }
    }, {
        "id": 660,
        "collectionId": 44,
        "type": "weapon",
        "weaponName": "Glock-18",
        "skinName": "Weasel",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbaqKAxf0Ob3djFN79fnzL-ckvbnNrfummJW4NE_j7mT8Nrw3QXt_RY-NzymIIHGdw87ZlHZrAe-wO-70ZC4uZzNzndjvz5iuyhP0kvddA",
        "prices": {
            "FN": 2.57,
            "MW": 0.95,
            "FT": 0.46,
            "WW": 0.37,
            "BS": 0.35,
            "FNST": 8.79,
            "MWST": 2.76,
            "FTST": 1.51,
            "WWST": 1.33,
            "BSST": 1.24
        }
    }, {
        "id": 661,
        "collectionId": 44,
        "type": "weapon",
        "weaponName": "MAG-7",
        "skinName": "Petroglyph",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7uifDhjxszFcDoV08iknYKKm8j4OrzZgiVSupcn3buZ9Iqh3AOy-0RkY2GmdYOcdwJrM1GB-FW7w-bvjJTotZrL1zI97ch2lL8S",
        "prices": {
            "FN": 1.18,
            "MW": 0.64,
            "FT": 0.41,
            "WW": 0.44,
            "FNST": 2.94,
            "MWST": 1.17,
            "FTST": 0.57,
            "WWST": 0.6
        }
    }, {
        "id": 662,
        "collectionId": 44,
        "type": "weapon",
        "weaponName": "AUG",
        "skinName": "Syd Mead",
        "rarity": "classified",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot6-iFABz7PLddgJR9diJmYWKk8j4OrzZgiUCu5Yk077Epdmg3QLn8hVpN270IYKUIQU4YgnZqAO9ybrmgJa5ucvK1zI97Wf9hRPh",
        "prices": {
            "FN": 7.39,
            "MW": 3.7,
            "FT": 1.93,
            "WW": 2.19,
            "BS": 1.65,
            "FNST": 19.94,
            "MWST": 8.36,
            "FTST": 3.52,
            "WWST": 3.41,
            "BSST": 2.9
        }
    }, {
        "id": 663,
        "collectionId": 44,
        "type": "weapon",
        "weaponName": "MP9",
        "skinName": "Airlock",
        "rarity": "classified",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6r8FAR17P7YKAJM7c61nZO0m_7zO6-flT0C7cR32e_A99T23gGxqEA9MWvxcNedcAY7MgqF-QK7wO3pg8K77YOJlyX5QzWtUg",
        "prices": {
            "FN": 7.56,
            "MW": 3.58,
            "FT": 2,
            "WW": 1.81,
            "BS": 1.89,
            "FNST": 20.14,
            "MWST": 7.52,
            "FTST": 3.61,
            "WWST": 2.82,
            "BSST": 2.96
        }
    }, {
        "id": 664,
        "collectionId": 44,
        "type": "weapon",
        "weaponName": "Tec-9",
        "skinName": "Fuel Injector",
        "rarity": "classified",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoor-mcjhnwMzcdD4b08-jhIWZlP_1IbzUklRd4cJ5nqfEpon3iwbkrUJsNjimJISSewZoNFHV_VG9k-jvjJ_t786YyCZisiAr-z-DyHMz0KNe",
        "prices": {
            "FN": 11.76,
            "MW": 4.94,
            "FT": 2.93,
            "WW": 2.02,
            "FNST": 31.3,
            "MWST": 12.53,
            "FTST": 5.95,
            "WWST": 4.35,
            "BSST": 4.39
        }
    }, {
        "id": 665,
        "collectionId": 44,
        "type": "weapon",
        "weaponName": "AK-47",
        "skinName": "Neon Revolution",
        "rarity": "covert",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV0924lZKIn-7LP7LWnn8fvsAo0u-R9trzi1bs-hI9NjqiJIXGdwBrNAzW8li4w7jqhcW16cvAzWwj5HdQlBgtMw",
        "prices": {
            "FN": 56.58,
            "MW": 27.84,
            "FT": 17.03,
            "WW": 20.2,
            "BS": 14.87,
            "FNST": 130.44,
            "MWST": 54.98,
            "FTST": 34.29,
            "WWST": 40.26,
            "BSST": 31.93
        }
    }, {
        "id": 666,
        "collectionId": 44,
        "type": "weapon",
        "weaponName": "FAMAS",
        "skinName": "Roll Cage",
        "rarity": "covert",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLuoKhRf1OD3dzxP7c-JhoGHm-7LP7LWnn8fvZYpiOjE8NihjVbj_EE4NmD2JIScJwI8Z1-Fq1jtxe_uhZfu7s7AzWwj5HcX23zPaA",
        "prices": {
            "FN": 16.65,
            "MW": 6.09,
            "FT": 3.45,
            "WW": 2.94,
            "BS": 2.89,
            "FNST": 78.26,
            "MWST": 13.74,
            "FTST": 7.51,
            "WWST": 5.43,
            "BSST": 5.39
        }
    }, {
        "id": 667,
        "collectionId": 44,
        "type": "weapon",
        "weaponName": "Rare",
        "skinName": "Special Item",
        "rarity": "gold",
        "image": "./assets/rare-item.png"
    },

    // Glove Case
    {
        "id": 668,
        "collectionId": 45,
        "type": "weapon",
        "weaponName": "MP9",
        "skinName": "Sand Scale",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6r8FAZh7PvBdTgP4czvq4yCkP_gfeyGlG4B65V0jrGTotqm0Ae3_RJuN23xLIKXJlA9YFjYqAPqle_ohsSi_MOeHdPXcDU",
        "prices": {
            "FN": 0.27,
            "MW": 0.17,
            "FT": 0.11,
            "WW": 0.11,
            "FNST": 0.95,
            "MWST": 0.51,
            "FTST": 0.35,
            "WWST": 0.36
        }
    }, {
        "id": 669,
        "collectionId": 45,
        "type": "weapon",
        "weaponName": "MAG-7",
        "skinName": "Sonar",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7uifDhh3szFcDoV09G3mIaEhfrLP7LWnn8fsMQp3eqYrNmg2FXgrUVsajz0J4OSIFQ6N17TrADtl-bph5G17cuamGwj5HefKFtC5g",
        "prices": {
            "FN": 0.27,
            "MW": 0.18,
            "FT": 0.12,
            "WW": 0.12,
            "FNST": 0.92,
            "MWST": 0.51,
            "FTST": 0.33,
            "WWST": 0.26
        }
    }, {
        "id": 670,
        "collectionId": 45,
        "type": "weapon",
        "weaponName": "CZ75-Auto",
        "skinName": "Polymer",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotaDyfgZf0v73cidUvuO7kr-HnvD8J_XUzzJV7MAj07rEoNrz3gWw_ERlY2GhLIWXdFI8MFDZ-1S7wubmgp6_ot2Xnh9O--Qm",
        "prices": {
            "FN": 0.28,
            "MW": 0.18,
            "FT": 0.12,
            "WW": 0.12,
            "BS": 0.11,
            "FNST": 1,
            "MWST": 0.52,
            "FTST": 0.3,
            "WWST": 0.28,
            "BSST": 0.26
        }
    }, {
        "id": 671,
        "collectionId": 45,
        "type": "weapon",
        "weaponName": "Galil AR",
        "skinName": "Black Sand",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbupIgthwczLZAJF7dC_mL-Khbr3MrbeqWdY781lxL-Sp9unigHgrkpvN23zIIWWJA5tNA2D_lDrl7u8h5a8uMnMyHtnu3Q8pSGK6neZ1Cc",
        "prices": {
            "FN": 0.49,
            "MW": 0.19,
            "FT": 0.11,
            "WW": 0.1,
            "BS": 0.11,
            "FNST": 2.01,
            "MWST": 0.6,
            "FTST": 0.32,
            "WWST": 0.27,
            "BSST": 0.29
        }
    }, {
        "id": 672,
        "collectionId": 45,
        "type": "weapon",
        "weaponName": "P2000",
        "skinName": "Turf",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovrG1eVcwg8zPYgJSvozmxM2Yh_jmJ4Tdn2xZ_Iso3OjFrI6i3gXn-xA5MmD2cdWXJAdsMl7RrwS6w-a6g8e1tZWYyntrpGB8suGATXim",
        "prices": {
            "FN": 0.49,
            "MW": 0.19,
            "FT": 0.11,
            "WW": 0.12,
            "BS": 0.12,
            "FNST": 1.98,
            "MWST": 0.52,
            "FTST": 0.31,
            "WWST": 0.26,
            "BSST": 0.25
        }
    }, {
        "id": 673,
        "collectionId": 45,
        "type": "weapon",
        "weaponName": "MP7",
        "skinName": "Cirrus",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6ryFABz7PXBfzxO08y5m4yPkvbwJenummJW4NE_2bnE9N720Fft-Ec-Z2CldYbEd1M8M1CD_1HrkubnhcW9vMjLn3Bqvz5iuyjHksjlGg",
        "prices": {
            "FN": 0.78,
            "MW": 0.33,
            "FT": 0.12,
            "WW": 0.23,
            "BS": 0.11,
            "FNST": 2.79,
            "MWST": 1.05,
            "FTST": 0.41,
            "WWST": 1.03,
            "BSST": 0.34
        }
    }, {
        "id": 674,
        "collectionId": 45,
        "type": "weapon",
        "weaponName": "Glock-18",
        "skinName": "Ironwork",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbaqKAxf0uL3djFN79eJkIGZnLryMrfdqWdY781lxOjCptn22ga2qEZsZW_zd46cJ1VoNF_W_1XrlOfs18S16p3JmyZl7CQ8pSGKL8GUOzY",
        "prices": {
            "FN": 0.91,
            "MW": 0.19,
            "FT": 0.13,
            "WW": 0.13,
            "BS": 0.12,
            "FNST": 4.3,
            "MWST": 0.96,
            "FTST": 0.43,
            "WWST": 0.35,
            "BSST": 0.37
        }
    }, {
        "id": 675,
        "collectionId": 45,
        "type": "weapon",
        "weaponName": "Nova",
        "skinName": "Gila",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpouLWzKjhh3szGfitD08-3moS0m_7zO6-fxm9S6pV3ibmXoNii31Hk-hI6Nzj7cdXHIQ49Y1jY_1S_kOu5h8O1u4OJlyXObzUKtw",
        "prices": {
            "FN": 1.33,
            "MW": 0.68,
            "FT": 0.43,
            "FNST": 2.94,
            "MWST": 1.49,
            "FTST": 1.03
        }
    }, {
        "id": 676,
        "collectionId": 45,
        "type": "weapon",
        "weaponName": "G3SG1",
        "skinName": "Stinger",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposem2LFZf1OD3dm5R642JgombkuXLKr7dmmRG18l4jeHVu9n03wO3_ko-azrxLYPBcFM_YQ7S_QO2wunt1Je4usjAznE37nZw53rD30vgmcE2eQU",
        "prices": {
            "FN": 1.46,
            "MW": 0.68,
            "FT": 0.41,
            "WW": 0.79,
            "BS": 0.38,
            "FNST": 3.11,
            "MWST": 1.47,
            "FTST": 0.61,
            "WWST": 0.64,
            "BSST": 0.57
        }
    }, {
        "id": 677,
        "collectionId": 45,
        "type": "weapon",
        "weaponName": "Dual Berettas",
        "skinName": "Royal Consorts",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpos7asPwJf1OD3dShD4OO0kZKOg-P1IITWmWdV7ctOnOzP_I_wt1i9rBsofWvwcIGWJlQ4Mg7SqFPvxr-5h5C4vZmdy3RgvSMj4n6Jyxbl1BhKPORxxavJR7JVvdI",
        "prices": {
            "FN": 2.63,
            "MW": 1.24,
            "FT": 0.54,
            "WW": 0.35,
            "BS": 0.34,
            "FNST": 8.31,
            "MWST": 2.39,
            "FTST": 1.08,
            "WWST": 1.07,
            "BSST": 0.86
        }
    }, {
        "id": 678,
        "collectionId": 45,
        "type": "weapon",
        "weaponName": "USP-S",
        "skinName": "Cyrex",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo6m1FBRp3_bGcjhQ09-jq5WYh8j3KqnUjlRd4cJ5nqfC9Inz3VHtrRJrNmj6d4XEdlBqZw7R-VTqxr-6hJS-uJjAm3FnsnQi-z-DyGAd0sdD",
        "prices": {
            "FN": 3.42,
            "MW": 2.25,
            "FT": 1.39,
            "WW": 1.66,
            "BS": 1.35,
            "FNST": 11.25,
            "MWST": 6.42,
            "FTST": 3.33,
            "WWST": 5.4,
            "BSST": 3.3
        }
    }, {
        "id": 679,
        "collectionId": 45,
        "type": "weapon",
        "weaponName": "M4A1-S",
        "skinName": "Flashback",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO1gb-Gw_alDL3dl3hZ6sRygdbN_Iv9nBrhrkU_YT32LITBcQU-YV7U-FTsx--71pbpvMjBmnBr73N2tHaLlxC0n1gSOTTnAQeD",
        "prices": {
            "FN": 4.64,
            "MW": 2.08,
            "FT": 1.31,
            "WW": 1.23,
            "BS": 1.21,
            "FNST": 18.54,
            "MWST": 7.75,
            "FTST": 5.49,
            "WWST": 5.38,
            "BSST": 5.39
        }
    }, {
        "id": 680,
        "collectionId": 45,
        "type": "weapon",
        "weaponName": "Sawed-Off",
        "skinName": "Wasteland Princess",
        "rarity": "classified",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopbuyLgNv1fX3cih9-8yJh4GckvP7Nb3ummJW4NE_3-qS89uki1bt-Uo5Zj3xLYSXIAQ7Ml_W_lXqwbi5hJ-0vcnAyyQyuj5iuyhoSspqEg",
        "prices": {
            "FN": 6.35,
            "MW": 3.35,
            "FT": 1.74,
            "WW": 1.96,
            "BS": 1.59,
            "FNST": 15.07,
            "MWST": 8.04,
            "FTST": 3.38,
            "WWST": 3.39,
            "BSST": 2.93
        }
    }, {
        "id": 681,
        "collectionId": 45,
        "type": "weapon",
        "weaponName": "P90",
        "skinName": "Shallow Grave",
        "rarity": "classified",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopuP1FABz7OORIQJR5N26mI-cqPDmMq3UqWdY781lxLCVrdyk0VLhrRU-ZG-hd9WXdlVoNAyF-1jtyOft08Duv5mcyicw63Y8pSGKeWe5Vcs",
        "prices": {
            "FN": 6.57,
            "MW": 3.32,
            "FT": 1.81,
            "WW": 1.95,
            "BS": 1.97,
            "FNST": 17.94,
            "MWST": 8,
            "FTST": 3.71,
            "WWST": 4.29,
            "BSST": 3.33
        }
    }, {
        "id": 682,
        "collectionId": 45,
        "type": "weapon",
        "weaponName": "FAMAS",
        "skinName": "Mecha Industries",
        "rarity": "classified",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLuoKhRf1OD3dzxP7c-JmYWIn_bLP7LWnn8f65cnjrrH9o_22QHirRZuZTuiJ4WXd1NqZluC-Fi-yOy9hsO9tJ3Aymwj5Hdve0dwuA",
        "prices": {
            "FN": 6.97,
            "MW": 4.6,
            "FT": 2.95,
            "WW": 2.7,
            "BS": 2.42,
            "FNST": 17.37,
            "MWST": 9.19,
            "FTST": 5.2,
            "WWST": 4.95,
            "BSST": 4.99
        }
    }, {
        "id": 683,
        "collectionId": 45,
        "type": "weapon",
        "weaponName": "M4A4",
        "skinName": "Buzz Kill",
        "rarity": "covert",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhnwMzFJTwW08-zl5SEhcj4OrzZgiUFu8By27iQ8Iqg3Qyy_Ec_Z2CmJ4eTcAdqZV3VrFi9k7_rhJK7vZmc1zI97eGSYpLn",
        "prices": {
            "FN": 17.88,
            "MW": 7.64,
            "FT": 4.76,
            "WW": 5.88,
            "BS": 4.48,
            "FNST": 47.8,
            "MWST": 21.77,
            "FTST": 12.7,
            "WWST": 18.77,
            "BSST": 12.88
        }
    }, {
        "id": 684,
        "collectionId": 45,
        "type": "weapon",
        "weaponName": "SSG 08",
        "skinName": "Dragonfire",
        "rarity": "covert",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopamie19f0Ob3Yi5FvISJkJKKkPj6NbLDk1RC68phj9bN_Iv9nBrg80FkZmGgLdKVeg46ZFyC_lPrxO25hZTotZ_OmHphuiNx43aJyUa1n1gSOaKu3f6c",
        "prices": {
            "FN": 21.56,
            "MW": 13.83,
            "FT": 11.31,
            "WW": 11.15,
            "BS": 10.35,
            "FNST": 78.04,
            "MWST": 44.33,
            "FTST": 30.11,
            "WWST": 28.15,
            "BSST": 27.14
        }
    }, {
        "id": 685,
        "collectionId": 45,
        "type": "weapon",
        "weaponName": "Rare",
        "skinName": "★ Gloves ★",
        "rarity": "gold",
        "image": "./assets/rare-item.png"
    },

    // Spectrum Case
    {
        "id": 686,
        "collectionId": 46,
        "type": "weapon",
        "weaponName": "MP7",
        "skinName": "Akoben",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6ryFBRw7P7YJgJW_tW0lYy0jvL4P7TGqWdY781lxLjCpdnx2gPg80Q6Njv2cI6XJw4_Z13X-FC3xey61JXtupqczyAyuSM8pSGKG3rzCmA",
        "prices": {
            "FN": 0.24,
            "MW": 0.19,
            "FT": 0.11,
            "WW": 0.15,
            "BS": 0.09,
            "FNST": 0.8,
            "MWST": 0.44,
            "FTST": 0.25,
            "WWST": 0.3,
            "BSST": 0.22
        }
    }, {
        "id": 687,
        "collectionId": 46,
        "type": "weapon",
        "weaponName": "P250",
        "skinName": "Ripple",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopujwezhh3szYI2gS08-mgZSFnvzLP7LWnn8fu50m3L-Uptys3wG1qhJoY2n1cNLEdVc8ZV3T-QDtwLzvgMe67puYwWwj5Hf4p3Uhrg",
        "prices": {
            "FN": 0.25,
            "MW": 0.18,
            "FT": 0.1,
            "WW": 0.12,
            "BS": 0.16,
            "FNST": 0.74,
            "MWST": 0.44,
            "FTST": 0.27,
            "WWST": 0.32,
            "BSST": 0.34
        }
    }, {
        "id": 688,
        "collectionId": 46,
        "type": "weapon",
        "weaponName": "PP-Bizon",
        "skinName": "Jungle Slipstream",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLO_JAlf2-r3czRY49KJgI-ZmcjzIb7UmFRd4cJ5nqeQ9I2l3wKxrxZqMmv2JYfHJAA5Zw6GqFDtxL_s0Mfq78zOyCFmsnEk-z-DyIQLMxpA",
        "prices": {
            "FN": 0.26,
            "MW": 0.19,
            "FT": 0.1,
            "WW": 0.1,
            "BS": 0.13,
            "FNST": 0.68,
            "MWST": 0.43,
            "FTST": 0.25,
            "WWST": 0.21,
            "BSST": 0.25
        }
    }, {
        "id": 689,
        "collectionId": 46,
        "type": "weapon",
        "weaponName": "Five-SeveN",
        "skinName": "Capillary",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLOzLhRlxfbGTj5X09q_goWYkuHxPYTHk2Jf18l4jeHVu9ij3FG3_UptMWqgJ9WcIQ48aQmB-wC2leq6h8S8u5udmCNn6Cdz4SnD30vgWlTck20",
        "prices": {
            "FN": 0.26,
            "MW": 0.18,
            "FT": 0.11,
            "WW": 0.15,
            "BS": 0.1,
            "FNST": 0.91,
            "MWST": 0.46,
            "FTST": 0.26,
            "WWST": 0.67,
            "BSST": 0.22
        }
    }, {
        "id": 690,
        "collectionId": 46,
        "type": "weapon",
        "weaponName": "SCAR-20",
        "skinName": "Blueprint",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopbmkOVUw7PDdTj9O-dmmhomFg8jnMLrDqWdY781lxLDAot3w0AXt-hBuMWvzLIfDd1BqYlDY_ge7xrjmhJ-6up6by3Q27yU8pSGKGwiMA-c",
        "prices": {
            "FN": 0.34,
            "MW": 0.19,
            "FT": 0.1,
            "WW": 0.13,
            "BS": 0.11,
            "FNST": 1.54,
            "MWST": 0.45,
            "FTST": 0.26,
            "WWST": 0.32,
            "BSST": 0.17
        }
    }, {
        "id": 691,
        "collectionId": 46,
        "type": "weapon",
        "weaponName": "Desert Eagle",
        "skinName": "Oxide Blaze",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposr-kLAtl7PDdTjlH_9mkgL-OlvD4NoTSmXlD58F0hNbN_Iv9nBrhrRc5YTqgJdWcIA48M1iF81m8wurrgMW76s_LmydguSRwtn3VmUThn1gSOZyN_0a1",
        "prices": {
            "FN": 0.4,
            "MW": 0.22,
            "FT": 0.15,
            "WW": 0.19,
            "BS": 0.18,
            "FNST": 2,
            "MWST": 1.38,
            "FTST": 0.81,
            "WWST": 1.26,
            "BSST": 1.89
        }
    }, {
        "id": 692,
        "collectionId": 46,
        "type": "weapon",
        "weaponName": "Sawed-Off",
        "skinName": "Zander",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopbuyLgNv1fX3cCx9_92hkYSEkfHLKbrfkm5Duvp9g-7J4cKg2QCy_BBqMG_zIoScdA49aQ7V_FG8webogsK7u5vLmndqvnRx4S2JgVXp1gGJxOF0",
        "prices": {
            "FN": 0.41,
            "MW": 0.18,
            "FT": 0.11,
            "WW": 0.09,
            "BS": 0.09,
            "FNST": 0.93,
            "MWST": 0.45,
            "FTST": 0.24,
            "WWST": 0.18,
            "BSST": 0.17
        }
    }, {
        "id": 693,
        "collectionId": 46,
        "type": "weapon",
        "weaponName": "M249",
        "skinName": "Emerald Poison Dart",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-jxcjhzw8zFI2kb09qkm4e0mOX9NLLfl2du5Mx2gv2Pot-m2VG2-BdqZG-mdtLDelJoZlmBrgO7ybzrhsfp7ZvKz3Rj7Ccq4GGdwUJpddwSYA",
        "prices": {
            "FN": 2.02,
            "MW": 1.37,
            "FT": 1.17,
            "WW": 1.04,
            "FNST": 4.67,
            "MWST": 2.62,
            "FTST": 1.98,
            "WWST": 1.71
        }
    }, {
        "id": 694,
        "collectionId": 46,
        "type": "weapon",
        "weaponName": "MAC-10",
        "skinName": "Last Dive",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7umeldf0vL3fDxBvYyJgIiOqPv1IK_ukmJH7fp9g-7J4cLwiQDm_RdpMGjxI9OXdQ5oYw2F_Vjsw-u715futZ2cyXFmv3EksS3fgVXp1layEcKi",
        "prices": {
            "FN": 2.17,
            "MW": 1.49,
            "FT": 1.19,
            "WW": 1.3,
            "BS": 1.15,
            "FNST": 4.97,
            "MWST": 2.76,
            "FTST": 1.96,
            "WWST": 2.21,
            "BSST": 1.65
        }
    }, {
        "id": 695,
        "collectionId": 46,
        "type": "weapon",
        "weaponName": "XM1014",
        "skinName": "Seasons",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgporrf0e1Y07PLZTiVP09CzlYa0kfbwNoTdn2xZ_It33byS99333wXkqktsYWqmJo-cJgc3YFCDq1C7wbzrh5K0v86YyCE3pGB8sheESime",
        "prices": {
            "FN": 2.21,
            "MW": 1.45,
            "FT": 1.15,
            "WW": 1.11,
            "BS": 1.14,
            "FNST": 4.92,
            "MWST": 3,
            "FTST": 2.15,
            "WWST": 2.13,
            "BSST": 2.23
        }
    }, {
        "id": 696,
        "collectionId": 46,
        "type": "weapon",
        "weaponName": "Galil AR",
        "skinName": "Crimson Tsunami",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbupIgthwczbYQJF7dC_mL-cluHxDLfYkWNFppVw3r6XpIn3igLi-0duazj0I9eTcAQ2aV3Q_1XrwL3rgcXqvJ7AzHt9-n51xe-nTf0",
        "prices": {
            "FN": 2.22,
            "MW": 1.44,
            "FT": 1.13,
            "WW": 1.06,
            "BS": 1,
            "FNST": 5.21,
            "MWST": 3.05,
            "FTST": 2.02,
            "WWST": 1.89,
            "BSST": 2
        }
    }, {
        "id": 697,
        "collectionId": 46,
        "type": "weapon",
        "weaponName": "UMP-45",
        "skinName": "Scaffold",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo7e1f1Jf1OD3ZDBS0920jZOYqPv9NLPF2D4EsZQh2LCZ9Nr3jQ22-0RtYmz1cdCUdQBvYlmE-Fe-wem7jJTovMvXiSw0GHO1Iuc",
        "prices": {
            "FN": 2.43,
            "MW": 1.43,
            "FT": 1.15,
            "WW": 0.97,
            "BS": 0.97,
            "FNST": 6.12,
            "MWST": 3.22,
            "FTST": 1.92,
            "WWST": 1.81,
            "BSST": 1.97
        }
    }, {
        "id": 698,
        "collectionId": 46,
        "type": "weapon",
        "weaponName": "CZ75-Auto",
        "skinName": "Xiangliu",
        "rarity": "classified",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotaDyfgZf1OD3cid9_9K3n4WYqOfhIavdk1Rd4cJ5nqfApdqg0Q2yqhFtN27wJ4OXJFI3ZliGqVG9xOi8h5e575jJmiNk7ylz-z-DyEHqwXVj",
        "prices": {
            "FN": 10.55,
            "MW": 7.74,
            "FT": 6.68,
            "WW": 6.34,
            "BS": 5.83,
            "FNST": 23.93,
            "MWST": 16.62,
            "FTST": 11.78,
            "WWST": 9.95,
            "BSST": 9.83
        }
    }, {
        "id": 699,
        "collectionId": 46,
        "type": "weapon",
        "weaponName": "AWP",
        "skinName": "Fever Dream",
        "rarity": "classified",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FAR17PLfYQJS_8W1nI-bluP8DLfYkWNFppQgj7yV9Nqi2Fbj_Eo5Ym72I9XGJwc2NAnS_1Pqxu6615W575uYznd9-n51iddPieY",
        "prices": {
            "FN": 12.38,
            "MW": 9.98,
            "FT": 7.64,
            "WW": 8.33,
            "BS": 6.89,
            "FNST": 31.12,
            "MWST": 20.78,
            "FTST": 14.87,
            "WWST": 19.78,
            "BSST": 14.84
        }
    }, {
        "id": 700,
        "collectionId": 46,
        "type": "weapon",
        "weaponName": "M4A1-S",
        "skinName": "Decimator",
        "rarity": "classified",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uOxh7-Gw_alDL_UlWJc6dF-mNbN_Iv9nBrhqhVkYTz6LYSScVBtMliB_gDqwuu9h5-7vc_PynVrvXV37HfUyxPmn1gSOa-1kwUB",
        "prices": {
            "FN": 35.47,
            "MW": 19.98,
            "FT": 13.06,
            "WW": 13.3,
            "BS": 11.79,
            "FNST": 68.51,
            "MWST": 37.69,
            "FTST": 28,
            "WWST": 31.61,
            "BSST": 22.25
        }
    }, {
        "id": 701,
        "collectionId": 46,
        "type": "weapon",
        "weaponName": "USP-S",
        "skinName": "Neo-Noir",
        "rarity": "covert",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo6m1FBRp3_bGcjhQ09-jq5WYh-TLPbTYhFRd4cJ5nqfE8dzz3Abg_hBtMWDzJ4fGdFI6YFjT-lHtlOi70Jfqvcifm3Vmvigj-z-DyA8aEmbE",
        "prices": {
            "FN": 45.45,
            "MW": 27,
            "FT": 17.42,
            "WW": 18.12,
            "BS": 13.4,
            "FNST": 135.09,
            "MWST": 74.18,
            "FTST": 41.68,
            "WWST": 42.39,
            "BSST": 28.11
        }
    }, {
        "id": 702,
        "collectionId": 46,
        "type": "weapon",
        "weaponName": "AK-47",
        "skinName": "Bloodsport",
        "rarity": "covert",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhnwMzJemkV0966m4-PhOf7Ia_ummJW4NE_3rnHpdujjgK28kE5Y2Gid9WWdQ44YVHS-VS9wr--jJG6tJrAzCBh6D5iuyjdE47G3Q",
        "prices": {
            "FN": 102.9,
            "MW": 83.41,
            "FT": 73.97,
            "WW": 62.19,
            "FNST": 209.22,
            "MWST": 158.07,
            "FTST": 129.54,
            "WWST": 127.15
        }
    }, {
        "id": 703,
        "collectionId": 46,
        "type": "weapon",
        "weaponName": "Rare",
        "skinName": "Special Item",
        "rarity": "gold",
        "image": "./assets/rare-item.png"
    },

    // Clutch Case
    {
        "id": 704,
        "collectionId": 49,
        "type": "weapon",
        "weaponName": "Five-SeveN",
        "skinName": "Flame Test",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLOzLhRlxfbGTjpR09q_goWYkuHxPYTZmX9u-sp1tf_I-oDwnGu4ohQ0J3f1ItXHcVI4YlvWrFXrkO7o1JHquMibmyZguykgtnrUyRXm10sdbbM8m7XAHrBtyPY3",
        "prices": {
            "FN": 0.18,
            "MW": 0.1,
            "FT": 0.05,
            "WW": 0.06,
            "BS": 0.06,
            "FNST": 0.61,
            "MWST": 0.24,
            "FTST": 0.12,
            "WWST": 0.15,
            "BSST": 0.12
        }
    }, {
        "id": 705,
        "collectionId": 49,
        "type": "weapon",
        "weaponName": "SG 553",
        "skinName": "Aloha",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopb3wflFfwOP3YjoXv4-JlYyEn_bLP7LWnn8fuJZwi7GXptqt2FW2-UFuYGDxINfAe1VsNFCC_Ve4w7_ngcDuvZvLmmwj5Hc11_x0mg",
        "prices": {
            "FN": 0.19,
            "MW": 0.08,
            "FT": 0.05,
            "WW": 0.06,
            "BS": 0.06,
            "FNST": 0.6,
            "MWST": 0.25,
            "FTST": 0.11,
            "WWST": 0.13,
            "BSST": 0.11
        }
    }, {
        "id": 706,
        "collectionId": 49,
        "type": "weapon",
        "weaponName": "XM1014",
        "skinName": "Oxide Blaze",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgporrf0e1Y07PDdTiVPvYznwL-Ej_7wNoTTmmpL7fp9g-7J4cKj0QW2rktsMW7zItOUJ1c6NwmG8wO7kue90MW4vM_Kz3Ni6CF24XvdgVXp1gKDw8ad",
        "prices": {
            "FN": 0.19,
            "MW": 0.1,
            "FT": 0.05,
            "WW": 0.06,
            "BS": 0.05,
            "FNST": 0.61,
            "MWST": 0.23,
            "FTST": 0.11,
            "WWST": 0.13,
            "BSST": 0.11
        }
    }, {
        "id": 707,
        "collectionId": 49,
        "type": "weapon",
        "weaponName": "PP-Bizon",
        "skinName": "Night Riot",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLO_JAlf0Ob3czRY49KJhomEg8j4OrzZgiUD7pUp3rHDp9v00QXj-UtrY2_xJ4aTJAI3aV_QqQe3lL3vg8Tu7s-c1zI97Wr-owub",
        "prices": {
            "FN": 0.2,
            "MW": 0.09,
            "FT": 0.06,
            "WW": 0.06,
            "BS": 0.05,
            "FNST": 0.66,
            "MWST": 0.23,
            "FTST": 0.1,
            "WWST": 0.15,
            "BSST": 0.11
        }
    }, {
        "id": 708,
        "collectionId": 49,
        "type": "weapon",
        "weaponName": "P2000",
        "skinName": "Urban Hazard",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovrG1eVcwg8zLZAJSvozmxL-ehfX1PYTZl3FQ-sFOhuDG_Zi72QPi_kQ_Zzz6d4WWdQ9oZ1vUqVa2lOq7hZTv7ZScwCQy6XJ37CqJzQv3309hpG0-UA",
        "prices": {
            "FN": 0.22,
            "MW": 0.09,
            "FT": 0.06,
            "WW": 0.05,
            "BS": 0.06,
            "FNST": 0.81,
            "MWST": 0.23,
            "FTST": 0.1,
            "WWST": 0.1,
            "BSST": 0.11
        }
    }, {
        "id": 709,
        "collectionId": 49,
        "type": "weapon",
        "weaponName": "MP9",
        "skinName": "Black Sand",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6r8FAR17P7YKAJA4N21n7-YlvnwDLfYkWNFppYmjurEpdTz3ATnrhBrYDrycYeTIAVqMlzW-le2k-zth5-_6ZTMyHZ9-n51wvY0MQA",
        "prices": {
            "FN": 0.24,
            "MW": 0.09,
            "FT": 0.05,
            "WW": 0.05,
            "BS": 0.05,
            "FNST": 0.92,
            "MWST": 0.22,
            "FTST": 0.11,
            "WWST": 0.1,
            "BSST": 0.11
        }
    }, {
        "id": 710,
        "collectionId": 49,
        "type": "weapon",
        "weaponName": "R8 Revolver",
        "skinName": "Grip",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopL-zJAt21uH3di59_tmgm4ydkuXLJ6nUl29u5Mx2gv2Poo-milDl-ENuNW_xLIOWJwM4aFyBrwK8lenv1sC975rIzXIxuXZx5WGdwUIffS2-og",
        "prices": {
            "FN": 0.27,
            "MW": 0.09,
            "FT": 0.05,
            "WW": 0.05,
            "BS": 0.05,
            "FNST": 0.83,
            "MWST": 0.22,
            "FTST": 0.12,
            "WWST": 0.1,
            "BSST": 0.11
        }
    }, {
        "id": 711,
        "collectionId": 49,
        "type": "weapon",
        "weaponName": "Negev",
        "skinName": "Lionfish",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpouL-iLhFfwOP3fzhF6cqJmImEmfH9ILPummJW4NE_jLGSp9r03gPi-kQ_ZmjwLNfHelQ4N16BrAK2wO3ogMDu6J3AyHJguT5iuyjn_404lQ",
        "prices": {
            "FN": 1.16,
            "MW": 0.63,
            "FT": 0.4,
            "WW": 0.36,
            "BS": 0.35,
            "FNST": 2.82,
            "MWST": 1.28,
            "FTST": 0.63,
            "WWST": 0.53,
            "BSST": 0.53
        }
    }, {
        "id": 712,
        "collectionId": 49,
        "type": "weapon",
        "weaponName": "Glock-18",
        "skinName": "Moonrise",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbaqKAxf0vL3djFN79eJxdi0guX2MrXum2Re5vp3j__E57P5gVO8v109Y2vxI9Cdc1M6ZQyCq1e2kLy90JO1ucnNy3U3vCJ07CnUn0HmiBEYcKUx0m01ug-1",
        "prices": {
            "FN": 1.2,
            "MW": 0.7,
            "FT": 0.39,
            "WW": 0.43,
            "BS": 0.36,
            "FNST": 3.42,
            "MWST": 1.75,
            "FTST": 0.83,
            "WWST": 1.45,
            "BSST": 0.81
        }
    }, {
        "id": 713,
        "collectionId": 49,
        "type": "weapon",
        "weaponName": "Nova",
        "skinName": "Wild Six",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpouLWzKjhnwMzGfitD0924l4iEhf7gNoTdn2xZ_Isl27DDrdqsigHn-kU-ZW6iItPBdAE9NAyBrAW-yea-jMK9us7Jz3QwpGB8ssgBFjCg",
        "prices": {
            "FN": 1.22,
            "MW": 0.68,
            "FT": 0.38,
            "WW": 0.35,
            "BS": 0.32,
            "FNST": 3.02,
            "MWST": 1.25,
            "FTST": 0.53,
            "WWST": 0.59,
            "BSST": 0.49
        }
    }, {
        "id": 714,
        "collectionId": 49,
        "type": "weapon",
        "weaponName": "MAG-7",
        "skinName": "SWAG-7",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7uifDhhwszFcDoV08-hlYfcqPv9NLPF2DkBu5Egj7qYo4j30Ay1_hY_Nzz7INCdIA4-YgnV-lHoxb-61pXuuZjXiSw0lnHrE7k",
        "prices": {
            "FN": 1.25,
            "MW": 0.66,
            "FT": 0.39,
            "WW": 0.32,
            "BS": 0.3,
            "FNST": 3.47,
            "MWST": 1.26,
            "FTST": 0.53,
            "WWST": 0.49,
            "BSST": 0.45
        }
    }, {
        "id": 715,
        "collectionId": 49,
        "type": "weapon",
        "weaponName": "UMP-45",
        "skinName": "Arctic Wolf",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo7e1f1Jf0Ob3ZDBSuImJg4iCg_LLNbrfkVRd4cJ5nqfHo9_02QSw_hY5YmGmJ4aRd1dqNwyDrFi4wrzmhZC77p6bySNl6CQq-z-DyN1nM0Y5",
        "prices": {
            "FN": 1.25,
            "MW": 0.67,
            "FT": 0.4,
            "WW": 0.38,
            "BS": 0.32,
            "FNST": 3.13,
            "MWST": 1.34,
            "FTST": 0.6,
            "WWST": 0.63,
            "BSST": 0.47
        }
    }, {
        "id": 716,
        "collectionId": 49,
        "type": "weapon",
        "weaponName": "MP7",
        "skinName": "Bloodsport",
        "rarity": "covert",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6ryFABz7P7YJgJA4NO5kJObmOXgDLfYkWNFpsRz3-qSpdis2AW3rhFvYWn3LISSdgRsYVzR8lC7lOm9gMO_786bwHd9-n51Z2R5ZH4",
        "prices": {
            "FN": 4.01,
            "MW": 2.83,
            "FT": 2.15,
            "WW": 2.35,
            "BS": 1.9,
            "FNST": 12.05,
            "MWST": 7.08,
            "FTST": 3.62,
            "WWST": 5.95,
            "BSST": 3.38
        }
    }, {
        "id": 717,
        "collectionId": 49,
        "type": "weapon",
        "weaponName": "AUG",
        "skinName": "Stymphalian",
        "rarity": "classified",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot6-iFABz7PLddgJR-MW7hIiKm_71PYTTn3lV-_p9g-7J4cKl0ADkqEdpNzvyJ47EcgE8Zl2D-FO7wb_vjZ696sjOzHA1uCdx43_cgVXp1nDtdJ8l",
        "prices": {
            "FN": 6.29,
            "MW": 3.03,
            "FT": 1.67,
            "WW": 1.55,
            "BS": 1.46,
            "FNST": 15.04,
            "MWST": 6.25,
            "FTST": 2.8,
            "WWST": 2.58,
            "BSST": 2.47
        }
    }, {
        "id": 718,
        "collectionId": 49,
        "type": "weapon",
        "weaponName": "AWP",
        "skinName": "Mortis",
        "rarity": "classified",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FABz7PLfYQJG6d2inL-HnvD8J_WAz2lV7cAh3uyX9Nz33FXnqUs6a2rxctKdJ1c_aQ6Fq1DrxOvn05Tpot2XnvIeBIAw",
        "prices": {
            "FN": 6.46,
            "MW": 3.27,
            "FT": 1.68,
            "WW": 2.35,
            "BS": 1.7,
            "FNST": 15.69,
            "MWST": 7.44,
            "FTST": 4.59,
            "WWST": 6.36,
            "BSST": 5.88
        }
    }, {
        "id": 719,
        "collectionId": 49,
        "type": "weapon",
        "weaponName": "USP-S",
        "skinName": "Cortex",
        "rarity": "classified",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo6m1FBRp3_bGcjhQ09-jq5WYh8j3Jq_ummJW4NE_376S84-tiwHt_0VqZDzwI47DcVNqaFDZ-gLrxea918S5tJucwSY2uj5iuygjNe-uOA",
        "prices": {
            "FN": 8.47,
            "MW": 3.84,
            "FT": 2.2,
            "WW": 1.85,
            "BS": 1.65,
            "FNST": 21.11,
            "MWST": 9.4,
            "FTST": 5.11,
            "WWST": 4.34,
            "BSST": 3.69
        }
    }, {
        "id": 720,
        "collectionId": 49,
        "type": "weapon",
        "weaponName": "M4A4",
        "skinName": "Neo-Noir",
        "rarity": "covert",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhjxszFJTwW09Kzm7-FmP7mDLfYkWNFpsch2evFo9Wl2lflr0RtZzilJNTBdgE3ZAyDr1nrx-vs0cK9vsmamnt9-n51UgTl8ms",
        "prices": {
            "FN": 30.9,
            "MW": 7.71,
            "FT": 3.25,
            "WW": 3.01,
            "BS": 2.65,
            "FNST": 68.03,
            "MWST": 23.24,
            "FTST": 7.83,
            "WWST": 7.71,
            "BSST": 7.08
        }
    }, {
        "id": 721,
        "collectionId": 49,
        "type": "weapon",
        "weaponName": "Rare",
        "skinName": "★ Gloves ★",
        "rarity": "gold",
        "image": "./assets/rare-item.png"
    },
    
    // Hydra Case
    {
        "id": 722,
        "collectionId": 47,
        "type": "weapon",
        "weaponName": "MAG-7",
        "skinName": "Hard Water",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7uifDhh3szFcDoV09-3gZOfnvTLP7LWnn8fuZYiiOvH9NXz21ey80FuYz_7cdSQdwM4NVyE_1Xvxujp1sC975ScyWwj5HeAY-I7KQ",
        "prices": {
            "FN": 1.92,
            "MW": 1.51,
            "FT": 1.34,
            "WW": 1.15,
            "FNST": 3.9,
            "MWST": 2.78,
            "FTST": 2.42,
            "WWST": 1.91
        }
    }, {
        "id": 723,
        "collectionId": 47,
        "type": "weapon",
        "weaponName": "FAMAS",
        "skinName": "Macabre",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLuoKhRfwOP3dzxP7c-JmYGIlvXmNoTdn2xZ_Ism37GTpNmljQbgqkVlamvxdo6UdlI4M13W-lG6wuzo0JS-vZTBwHI3pGB8svCrsedC",
        "prices": {
            "FN": 2.01,
            "MW": 1.55,
            "FT": 1.22,
            "WW": 1.26,
            "BS": 1.21,
            "FNST": 3.5,
            "MWST": 2.77,
            "FTST": 2.18,
            "WWST": 2.09,
            "BSST": 2.86
        }
    }, {
        "id": 724,
        "collectionId": 47,
        "type": "weapon",
        "weaponName": "UMP-45",
        "skinName": "Metal Flowers",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo7e1f1Jf0uL3ZDBSuImJkoyKmvLyP7TGk3lu5Mx2gv2PrI-giVGwqUFtMj31IICUJAY5Z1nT_VTtxO29gJbqvJ7JnyNj7yEitmGdwULd1U8dAw",
        "prices": {
            "FN": 2.15,
            "MW": 1.54,
            "FT": 1.36,
            "WW": 1.16,
            "BS": 1.42,
            "FNST": 4.12,
            "MWST": 2.74,
            "FTST": 2.14,
            "WWST": 1.71,
            "BSST": 1.98
        }
    }, {
        "id": 725,
        "collectionId": 47,
        "type": "weapon",
        "weaponName": "MAC-10",
        "skinName": "Aloha",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7umeldf0v73fDxBvYyJlYyEn_bLP7LWnn8fsZ1w3OiY8dTw3QDir0BtNm-mdtLEIAZrZViGrFPvkOzrjcDuvZ_PmGwj5HfqJxVUTQ",
        "prices": {
            "FN": 2.13,
            "MW": 1.65,
            "FT": 2.2,
            "WW": 1.56,
            "BS": 1.6,
            "FNST": 3.81,
            "MWST": 2.69,
            "FTST": 2.04,
            "WWST": 2.12,
            "BSST": 2.08
        }
    }, {
        "id": 726,
        "collectionId": 47,
        "type": "weapon",
        "weaponName": "Tec-9",
        "skinName": "Cut Out",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoor-mcjhhwszcdD4b09--lYyAqOf1J6_UhGVu5Mx2gv2P8Nyh2gGw-xJpZTqiIdeXcAI-M1_R_li7kOu605Tu75mYn3I2syMh5GGdwULq_VC6dg",
        "prices": {
            "FN": 5.53,
            "MW": 1.9,
            "FT": 1.41,
            "WW": 1.29,
            "BS": 1.17,
            "FNST": 11.95,
            "MWST": 3.83,
            "FTST": 3.07,
            "WWST": 1.96,
            "BSST": 2.41
        }
    }, {
        "id": 727,
        "collectionId": 47,
        "type": "weapon",
        "weaponName": "P250",
        "skinName": "Red Rock",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopujwezhjxszYI2gS092unY-GqPv9NLPF2GoI6pYlj7nArN_xilW18xU9ZWmnctLHcg4-aVrXqFi_yOfsjcK16pvXiSw0GYfq61U",
        "prices": {
            "FN": 8.38,
            "MW": 6.28,
            "FT": 5.46,
            "WW": 4.84,
            "BS": 3.8,
            "FNST": 16.93,
            "MWST": 11.5,
            "FTST": 8.67,
            "WWST": 5.72,
            "BSST": 5.45
        }
    }, {
        "id": 728,
        "collectionId": 47,
        "type": "weapon",
        "weaponName": "SSG 08",
        "skinName": "Death's Head",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopamie19f0Ob3Yi5FvISJkIWKg__nO77QklRd4cJ5nqeWrdqi3la3_hU_Nm73ddCQcw9vMwyDqQDrxbruhJ-7vpqaynth7HF0-z-DyAzfVpYm",
        "prices": {
            "FN": 8.38,
            "MW": 6.59,
            "FT": 5.5,
            "WW": 5.29,
            "BS": 4.42,
            "FNST": 17.78,
            "MWST": 11.93,
            "FTST": 10.05,
            "WWST": 9.05,
            "BSST": 9.85
        }
    }, {
        "id": 729,
        "collectionId": 47,
        "type": "weapon",
        "weaponName": "P2000",
        "skinName": "Woodsman",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovrG1eVcwg8zLZAJSvozmxL-DgvngNqnummJW4NE_377HoYn03Vax_xVlMTygcYDEcVQ5YF3S-wC9xu67jMfq7pmYmyBi7D5iuyhbjmQOcg",
        "prices": {
            "FN": 8.98,
            "MW": 6.62,
            "FT": 5.37,
            "WW": 4.54,
            "BS": 3.62,
            "FNST": 15.45,
            "MWST": 11.51,
            "FTST": 9.37,
            "WWST": 9.71,
            "BSST": 6.82
        }
    }, {
        "id": 730,
        "collectionId": 47,
        "type": "weapon",
        "weaponName": "P90",
        "skinName": "Death Grip",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopuP1FA957OORIQJA7c6zlo-FkuTLMbfEk1Rd4cJ5nqfCrNytjAKyqEU4ZmqgdoTDdgc4aQnW_gO3kO3t0JLuus_MzXVq7HMq-z-DyDp1RLqf",
        "prices": {
            "FN": 9.34,
            "MW": 7.07,
            "FT": 5.57,
            "WW": 5.05,
            "BS": 5.62,
            "FNST": 20.5,
            "MWST": 11.74,
            "FTST": 9.64,
            "WWST": 6.8,
            "BSST": 9.05
        }
    }, {
        "id": 731,
        "collectionId": 47,
        "type": "weapon",
        "weaponName": "M4A1-S",
        "skinName": "Briefing",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO1gb-Gw_alIITck39D4dF0mOj--YXygED6rhBlMGylLIDBdAE2aVzQ-FS_yLy6gsTouZybwXZquSUnsy2Llhbi1AYMMLKLissC3Q",
        "prices": {
            "FN": 12.62,
            "MW": 6.13,
            "FT": 2.69,
            "WW": 6.14,
            "BS": 2.48,
            "FNST": 34.7,
            "MWST": 15.04,
            "FTST": 9.55,
            "WWST": 11.01,
            "BSST": 9.44
        }
    }, {
        "id": 732,
        "collectionId": 47,
        "type": "weapon",
        "weaponName": "AK-47",
        "skinName": "Orbit Mk01",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhnwMzJegJB49C5mpnbxsjmNr_ummJW4NE_iL-ZrYj03wLl_hFqNm71cteWdlA5Zl2F-FG-yO_r0cW4uMnMynFl6T5iuyjnxSwaOw",
        "prices": {
            "FN": 15.4,
            "MW": 11.45,
            "FT": 9.54,
            "WW": 11.1,
            "BS": 10.97,
            "FNST": 45.2,
            "MWST": 31.02,
            "FTST": 26.22,
            "WWST": 25.75,
            "BSST": 25.31
        }
    }, {
        "id": 733,
        "collectionId": 47,
        "type": "weapon",
        "weaponName": "USP-S",
        "skinName": "Blueprint",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo6m1FBRp3_bGcjhQ09-jq5WYh-TLMbfEk3tD4ctlteXI8oThxlHg-kppY2D7dtSWIwc-ZA3W_1W7le3t1pLou5_BwXo1vCchtyvamRSpwUYbl4sQs20",
        "prices": {
            "FN": 31.68,
            "MW": 10.23,
            "FT": 5.3,
            "WW": 6.13,
            "BS": 3.45,
            "FNST": 106.47,
            "MWST": 28.15,
            "FTST": 13.45,
            "WWST": 13.6,
            "BSST": 10.25
        }
    }, {
        "id": 734,
        "collectionId": 47,
        "type": "weapon",
        "weaponName": "M4A4",
        "skinName": "Hellfire",
        "rarity": "classified",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhjxszFJTwW09SzmIyNnuXxDLfYkWNFpsEi3L6UrdiljFXlr0VsNmj6dteXdFBtYFnV-VjryO3qhMe86c7BwHB9-n51JK1M_qQ",
        "prices": {
            "FN": 49.02,
            "MW": 38.98,
            "FT": 32.86,
            "WW": 31.87,
            "BS": 28.71,
            "FNST": 91.15,
            "MWST": 63.25,
            "FTST": 50.19,
            "WWST": 48.42,
            "BSST": 46.12
        }
    }, {
        "id": 735,
        "collectionId": 47,
        "type": "weapon",
        "weaponName": "Dual Berettas",
        "skinName": "Cobra Strike",
        "rarity": "classified",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpos7asPwJf1OD3dShD4N6zhoWfg_bnDLjelHlQ18l4jeHVu9z22gHj_UFvZz36IdXHcwQ-aVGE8wfqkLrrgsK96pqcnCZk7CUktnfD30vg2qddNKU",
        "prices": {
            "FN": 52.73,
            "MW": 38.55,
            "FT": 34.44,
            "WW": 22.36,
            "BS": 27.3,
            "FNST": 89.36,
            "MWST": 64.36,
            "FTST": 45.57,
            "WWST": 19.74,
            "BSST": 20.61
        }
    }, {
        "id": 736,
        "collectionId": 47,
        "type": "weapon",
        "weaponName": "Galil AR",
        "skinName": "Sugar Rush",
        "rarity": "classified",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbupIgthwczLZAJF7dC_mL-IlvnwKrjZl2RC18l4jeHVu9uliwWwqRJqMGuncY-cdFNtZ17Wq1O4wbzphZLvu5vJnHJi6HIg5SvD30vgL7LkLAY",
        "prices": {
            "FN": 55.51,
            "MW": 41.79,
            "FT": 35.56,
            "WW": 29.85,
            "BS": 28,
            "FNST": 103.18,
            "MWST": 68.5,
            "FTST": 50.33,
            "WWST": 28.46,
            "BSST": 12.75
        }
    }, {
        "id": 737,
        "collectionId": 47,
        "type": "weapon",
        "weaponName": "Five-SeveN",
        "skinName": "Hyper Beast",
        "rarity": "covert",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLOzLhRlxfbGTj5X09q_goWYkuHxPYTZj3tU-sd0i_rVyoD8j1yg5RduNj_yLNSQdVQ-M1DS-1e8xbvrh56_vMiczSFnvXUg4X6IyxGzhh5SLrs4rcs7-T4",
        "prices": {
            "FN": 71.83,
            "MW": 32.87,
            "FT": 20.94,
            "WW": 14.97,
            "BS": 14.37,
            "FNST": 313.63,
            "MWST": 102.22,
            "FTST": 62.57,
            "WWST": 46.75,
            "BSST": 31.58
        }
    }, {
        "id": 738,
        "collectionId": 47,
        "type": "weapon",
        "weaponName": "AWP",
        "skinName": "Oni Taiji",
        "rarity": "covert",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FAR17PLfYQJK7dK4jYG0m_7zO6-fk28C65V0ibnEoon00AHj80Jla2qlI9fHIwNqYl3YqVO4wb3pgpK17oOJlyWSYujjQg",
        "prices": {
            "FN": 540.25,
            "MW": 432.86,
            "FT": 334.81,
            "WW": 175.09,
            "BS": 141,
            "FNST": 949,
            "MWST": 670.93,
            "FTST": 382.27,
            "WWST": 303.62,
            "BSST": 281.42
        }
    }, {
        "id": 739,
        "collectionId": 47,
        "type": "weapon",
        "weaponName": "Rare",
        "skinName": "★ Gloves ★",
        "rarity": "gold",
        "image": "./assets/rare-item.png"
    }, 

    // Spectrum 2
    {
        "id": 740,
        "collectionId": 48,
        "type": "weapon",
        "weaponName": "SCAR-20",
        "skinName": "Jungle Slipstream",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopbmkOVUw7PvRTi5B7c7kxL-BgvnzP77uhWdY-NZlmOzA-LP5gVO8v104Z2ClLY_EIQ47ZQvRq1O7l73rg8To6ZidnXFh7CQh7S2JyxC_hk5NcKUx0mqrOQdE",
        "prices": {
            "FN": 0.2,
            "MW": 0.11,
            "FT": 0.07,
            "WW": 0.07,
            "BS": 0.08,
            "FNST": 0.61,
            "MWST": 0.26,
            "FTST": 0.14,
            "WWST": 0.16,
            "BSST": 0.18
        }
    }, {
        "id": 741,
        "collectionId": 48,
        "type": "weapon",
        "weaponName": "MAC-10",
        "skinName": "Oceanic",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7umeldf0v73fDxBvYyJm4OOlvn9DLfYkWNFppVy2eyTotnz2g3i_xY9Y2zycISRegc5Yl2GqQXox7rugpLtvp-byCB9-n5110WGdRs",
        "prices": {
            "FN": 0.21,
            "MW": 0.12,
            "FT": 0.06,
            "WW": 0.1,
            "BS": 0.06,
            "FNST": 0.83,
            "MWST": 0.4,
            "FTST": 0.18,
            "WWST": 0.3,
            "BSST": 0.17
        }
    }, {
        "id": 742,
        "collectionId": 48,
        "type": "weapon",
        "weaponName": "Sawed-Off",
        "skinName": "Morris",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopbuyLgNv1fX3cCx9_92hkYTGmPHyDL3dmXxU-vp9g-7J4cKljA3sqUNkMDz7JISWJgI3NQmD-Ae5x7zuhcPqvsvKmiZk6yMh5nrdgVXp1lTx2r2f",
        "prices": {
            "FN": 0.25,
            "MW": 0.11,
            "FT": 0.06,
            "WW": 0.06,
            "BS": 0.06,
            "FNST": 1.02,
            "MWST": 0.25,
            "FTST": 0.12,
            "WWST": 0.11,
            "BSST": 0.12
        }
    }, {
        "id": 743,
        "collectionId": 48,
        "type": "weapon",
        "weaponName": "G3SG1",
        "skinName": "Hunter",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposem2LFZf1OD3dm5R642Jl4WfmvLLIb7Vg3Nu5Mx2gv2PpNT0jAW1rRc-YGuld9eXcA45aAyDrgW8w7vqgp_vucyfmCc1vHF27WGdwUL26xPDqw",
        "prices": {
            "FN": 0.26,
            "MW": 0.1,
            "FT": 0.06,
            "WW": 0.06,
            "BS": 0.06,
            "FNST": 0.93,
            "MWST": 0.25,
            "FTST": 0.12,
            "WWST": 0.11,
            "BSST": 0.11
        }
    }, {
        "id": 744,
        "collectionId": 48,
        "type": "weapon",
        "weaponName": "Tec-9",
        "skinName": "Cracked Opal",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoor-mcjhjxszcdD4b09-klYOAkvPLPKvQmlRd4cJ5nqfFo4msi1flqEBtZmzzctfAI1U3Ml3V-VW_k7vugpbt7svJznBnv3Il-z-DyKmyxRUt",
        "prices": {
            "FN": 0.34,
            "MW": 0.11,
            "FT": 0.06,
            "WW": 0.06,
            "BS": 0.06,
            "FNST": 1.5,
            "MWST": 0.37,
            "FTST": 0.15,
            "WWST": 0.14,
            "BSST": 0.14
        }
    }, {
        "id": 745,
        "collectionId": 48,
        "type": "weapon",
        "weaponName": "AUG",
        "skinName": "Triqua",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot6-iFAR17PLddgJN_t24k4W0g-X9MrXWmm5u5Mx2gv2PotWmjVbk_hY_a23yd4STdAJsaVzY-FS4xLvq0Za0vM7OynM3vHVxsWGdwULM0AciSg",
        "prices": {
            "FN": 0.37,
            "MW": 0.11,
            "FT": 0.05,
            "WW": 0.05,
            "BS": 0.05,
            "FNST": 2.34,
            "MWST": 0.38,
            "FTST": 0.15,
            "WWST": 0.12,
            "BSST": 0.14
        }
    }, {
        "id": 746,
        "collectionId": 48,
        "type": "weapon",
        "weaponName": "Glock-18",
        "skinName": "Off World",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbaqKAxf0Ob3djFN79eJnY6PnvD7DLfYkWNFppYm0r_Coo-milHjr0NvNjzzIYWVdwZvN1qG_QC2xezogp6-u5nLnHN9-n516M620HI",
        "prices": {
            "FN": 0.58,
            "MW": 0.12,
            "FT": 0.08,
            "WW": 0.08,
            "BS": 0.08,
            "FNST": 3.06,
            "MWST": 0.69,
            "FTST": 0.33,
            "WWST": 0.33,
            "BSST": 0.38
        }
    }, {
        "id": 747,
        "collectionId": 48,
        "type": "weapon",
        "weaponName": "UMP-45",
        "skinName": "Exposure",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo7e1f1Jf0Ob3ZDBSuImJjM2Zlu7LPrrSnmJf7fp9g-7J4cL03AHi-BZsYmylcIWWJgc2ZlyDqVO8werqjcLuvprMzSNiv3R25XeMgVXp1uyLuzoQ",
        "prices": {
            "FN": 1.25,
            "MW": 0.77,
            "FT": 0.47,
            "WW": 0.48,
            "BS": 0.43,
            "FNST": 3.26,
            "MWST": 1.55,
            "FTST": 0.94,
            "WWST": 1.03,
            "BSST": 0.9
        }
    }, {
        "id": 748,
        "collectionId": 48,
        "type": "weapon",
        "weaponName": "CZ75-Auto",
        "skinName": "Tacticat",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotaDyfgZf1OD3cicVueOilYOfnvT1J4Tdn2xZ_It0jrDD9N7z3le28xU4ZjzxdYTHdFVoM1mC8wC-k7_r1p6775TKnCFgpGB8stXRbcWP",
        "prices": {
            "FN": 1.26,
            "MW": 0.85,
            "FT": 0.47,
            "WW": 0.46,
            "BS": 0.41,
            "FNST": 3.41,
            "MWST": 1.57,
            "FTST": 0.88,
            "WWST": 0.84,
            "BSST": 0.79
        }
    }, {
        "id": 749,
        "collectionId": 48,
        "type": "weapon",
        "weaponName": "MP9",
        "skinName": "Goo",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6r8FAR17P7YKAJF49OJmImMn-O6YLjQlDNU68ci37_E8Nnz2gHg8hBtMWj3LNCQewA_NwyG_wW3krrog4j84socNYvhew",
        "prices": {
            "FN": 1.26,
            "MW": 0.8,
            "FT": 0.51,
            "WW": 0.48,
            "BS": 0.43,
            "FNST": 3.42,
            "MWST": 1.7,
            "FTST": 0.99,
            "WWST": 1.01,
            "BSST": 0.86
        }
    }, {
        "id": 750,
        "collectionId": 48,
        "type": "weapon",
        "weaponName": "XM1014",
        "skinName": "Ziggy",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgporrf0e1Y07PLZTiVPvYznwL-RnvDzKoTQmGpD681oteXI8oThxgPk_0FqZ2uhdYOVdgVsNF6F-wLsyey7g8TutczJzHRksiQi5yuIzhSpwUYb0YoGxag",
        "prices": {
            "FN": 1.27,
            "MW": 0.8,
            "FT": 0.49,
            "WW": 0.5,
            "BS": 0.43,
            "FNST": 3.23,
            "MWST": 1.64,
            "FTST": 0.96,
            "WWST": 1.09,
            "BSST": 0.95
        }
    }, {
        "id": 751,
        "collectionId": 48,
        "type": "weapon",
        "weaponName": "SG 553",
        "skinName": "Phantom",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopb3wflFf1OD3YjoXuY-JhIiKmeP7PoTdn2xZ_Isk2-_CoduiiwXk-UdqYm2lItCQcAY2YQzTqFa8we7rhZ7vtcnLwXpipGB8snPKL3t3",
        "prices": {
            "FN": 1.31,
            "MW": 0.78,
            "FT": 0.47,
            "WW": 0.43,
            "BS": 0.4,
            "FNST": 3.43,
            "MWST": 1.6,
            "FTST": 0.94,
            "WWST": 0.94,
            "BSST": 0.91
        }
    }, {
        "id": 752,
        "collectionId": 48,
        "type": "weapon",
        "weaponName": "P250",
        "skinName": "See Ya Later",
        "rarity": "covert",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopujwezhjxszYI2gS09-vloWZlOX7MITdn2xZ_Isi07_F8N3x3Qfj8kQ6a2H0IdKXdgRqYA2C-VLqxLznhMLv6Z-bm3o2pGB8sr9Yt3dq",
        "prices": {
            "FN": 9.65,
            "MW": 6,
            "FT": 3.51,
            "WW": 3.57,
            "BS": 3.28,
            "FNST": 40.88,
            "MWST": 17.99,
            "FTST": 8.43,
            "WWST": 10.36,
            "BSST": 7.64
        }
    }, {
        "id": 753,
        "collectionId": 48,
        "type": "weapon",
        "weaponName": "R8 Revolver",
        "skinName": "Llama Cannon",
        "rarity": "classified",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopL-zJAt21uH3di59_oSJmIyKmvb3MrXfmWVu5Mx2gv2P9Imhi1Hs_0RqZzv3LI-XIwRrMFqE-Qe3l-6-08W5u53LyiRk6HRx7WGdwUJ7o0v99A",
        "prices": {
            "FN": 9.94,
            "MW": 3.84,
            "FT": 2.2,
            "WW": 1.94,
            "BS": 1.72,
            "FNST": 24.04,
            "MWST": 8.33,
            "FTST": 4.21,
            "WWST": 3.76,
            "BSST": 3.26
        }
    }, {
        "id": 754,
        "collectionId": 48,
        "type": "weapon",
        "weaponName": "PP-Bizon",
        "skinName": "High Roller",
        "rarity": "classified",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLO_JAlf0Ob3czRY49KJlYyHqP76DLfYkWNFpsEi2-jErNvzjQDg8xFpZmmgctOVdFI4YF-EqwC9xOnq1pG76ZWayyN9-n51Ejfp6Vw",
        "prices": {
            "FN": 10.48,
            "MW": 3.91,
            "FT": 2.49,
            "WW": 1.87,
            "BS": 1.79,
            "FNST": 26.77,
            "MWST": 9.27,
            "FTST": 4.68,
            "WWST": 3.71,
            "BSST": 2.79
        }
    }, {
        "id": 755,
        "collectionId": 48,
        "type": "weapon",
        "weaponName": "M4A1-S",
        "skinName": "Leaded Glass",
        "rarity": "classified",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uOxh7-Gw_alDKjZl39F7ddOhuDG_Zi7jgCw_0trMDulLYOTJ1Q_YgnV-lTsyeftg8W06p2fz3Ew6CMk5XuPnAv330_ASVB-pQ",
        "prices": {
            "FN": 13.17,
            "MW": 8.3,
            "FT": 6.31,
            "WW": 7.63,
            "BS": 5.76,
            "FNST": 29.93,
            "MWST": 18.46,
            "FTST": 13.22,
            "WWST": 17.22,
            "BSST": 12.83
        }
    }, {
        "id": 756,
        "collectionId": 48,
        "type": "weapon",
        "weaponName": "AK-47",
        "skinName": "The Empress",
        "rarity": "covert",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhnwMzJemkV09m7hJKOhOTLP7LWnn8f7p0gjrnDpdvxi1Xn80JqYGygLI_DdQJsMgyC_AO4xb_p0ce66ZXImmwj5Hei5N5mVw",
        "prices": {
            "FN": 105.25,
            "MW": 43.84,
            "FT": 27.23,
            "WW": 21.76,
            "BS": 19.64,
            "FNST": 277,
            "MWST": 104.87,
            "FTST": 67.05,
            "WWST": 49.67,
            "BSST": 45.79
        }
    }, {
        "id": 757,
        "collectionId": 48,
        "type": "weapon",
        "weaponName": "Rare",
        "skinName": "Special Item",
        "rarity": "gold",
        "image": "./assets/rare-item.png"
    }, 

    // Horizon Case
    {
        "id": 758,
        "collectionId": 50,
        "type": "weapon",
        "weaponName": "R8 Revolver",
        "skinName": "Survivalist",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopL-zJAt21uH3cih9_oSJh5WZgf7iMrfYhX9u5Mx2gv2P9oj03AzmrUJtMm_wd46cIQM5ZVrR-wO2leu61J_tup3OyXE2uXN252GdwUKQwrSyig",
        "prices": {
            "FN": 0.35,
            "MW": 0.23,
            "FT": 0.12,
            "WW": 0.15,
            "BS": 0.1,
            "FNST": 1.11,
            "MWST": 0.64,
            "FTST": 0.27,
            "WWST": 0.24,
            "BSST": 0.24
        }
    }, {
        "id": 759,
        "collectionId": 50,
        "type": "weapon",
        "weaponName": "AUG",
        "skinName": "Amber Slipstream",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot6-iFA957PLddgJW4864q4-ZlvnzNoTdn2xZ_Isk2euUpI2l2gaw-Es5Mmr6cdDDd1BoMw2E81O7xO-71pG4vcjIziFgpGB8siZU0y43",
        "prices": {
            "FN": 0.35,
            "MW": 0.21,
            "FT": 0.14,
            "WW": 0.11,
            "BS": 0.11,
            "FNST": 1.05,
            "MWST": 0.61,
            "FTST": 0.28,
            "WWST": 0.51,
            "BSST": 0.35
        }
    }, {
        "id": 760,
        "collectionId": 50,
        "type": "weapon",
        "weaponName": "Dual Berettas",
        "skinName": "Shred",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpos7asPwJfwOP3dDFL-Nmlq5eCmePxIYTDl2JV7ddOhuDG_Zi7jVCwqEE5aminJIadc1M7Zl3Y8gO5xevqjZ--vJTJwHYyvHIhsHaPmQv330_UwHJPFg",
        "prices": {
            "FN": 0.36,
            "MW": 0.24,
            "FT": 0.15,
            "WW": 0.18,
            "BS": 0.2,
            "FNST": 1.08,
            "MWST": 0.65,
            "FTST": 0.35,
            "WWST": 0.5,
            "BSST": 0.26
        }
    }, {
        "id": 761,
        "collectionId": 50,
        "type": "weapon",
        "weaponName": "MP9",
        "skinName": "Capillary",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6r8FAR17P7YKAJU6dW4q4yCkP_gfb-BxzMI6pcgjOvAodql21Ky80s4Z2n0cIDEJAZrZ1vQ81Low-y91JGi_MOe7kDKSbU",
        "prices": {
            "FN": 0.41,
            "MW": 0.26,
            "FT": 0.14,
            "WW": 0.28,
            "BS": 0.16,
            "FNST": 1.39,
            "MWST": 0.68,
            "FTST": 0.31,
            "WWST": 0.65,
            "BSST": 0.27
        }
    }, {
        "id": 762,
        "collectionId": 50,
        "type": "weapon",
        "weaponName": "Tec-9",
        "skinName": "Snek-9",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoor-mcjhjxszcdD4b08-4lYuOqPv9NLPF2DIBvpAh27zEoNnxiVXg-kpsMWD0dY7HIQY9YlHS_wTqwb-615ft7snXiSw09bfpQ0A",
        "prices": {
            "FN": 0.6,
            "MW": 0.22,
            "FT": 0.13,
            "WW": 0.09,
            "BS": 0.1,
            "FNST": 2.04,
            "MWST": 0.66,
            "FTST": 0.3,
            "WWST": 0.23,
            "BSST": 0.22
        }
    }, {
        "id": 763,
        "collectionId": 50,
        "type": "weapon",
        "weaponName": "Glock-18",
        "skinName": "Warhawk",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbaqKAxf1OD3djFN79eJgIiemfPxIYTVg3hF18l4jeHVu9zw2gK1rRc4amyhddWUdVVrYVmD_AS-yOm81JbutZqdm3Ew7HZ3sHvD30vg_MRC0B4",
        "prices": {
            "FN": 0.7,
            "MW": 0.27,
            "FT": 0.19,
            "WW": 0.2,
            "BS": 0.17,
            "FNST": 4.01,
            "MWST": 0.72,
            "FTST": 0.34,
            "WWST": 0.3,
            "BSST": 0.3
        }
    }, {
        "id": 764,
        "collectionId": 50,
        "type": "weapon",
        "weaponName": "P90",
        "skinName": "Traction",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopuP1FABz7OORIQJW_tm3kL-HnvD8J_WBl2hTsJJ1j7rF99qljQW3-0Q9Mmj2LdDBd1Q2Y1vYqFC_k7zn057qot2XnsJUPN1Z",
        "prices": {
            "FN": 0.76,
            "MW": 0.23,
            "FT": 0.12,
            "WW": 0.09,
            "BS": 0.1,
            "FNST": 2.86,
            "MWST": 0.7,
            "FTST": 0.34,
            "WWST": 0.25,
            "BSST": 0.26
        }
    }, {
        "id": 765,
        "collectionId": 50,
        "type": "weapon",
        "weaponName": "MP7",
        "skinName": "Powercore",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6ryFABz7OPHZjhQ79Okkb-Gh6DLP7LWnn8f68N327uQptin2AC1rhVtNz2gIoHAcwI8YVDYq1Psxr261p-9vZTPyWwj5HfkDNyabQ",
        "prices": {
            "FN": 2.56,
            "MW": 1.53,
            "FT": 0.81,
            "WW": 0.77,
            "BS": 0.55,
            "FNST": 6.48,
            "MWST": 3.02,
            "FTST": 1.37,
            "WWST": 1.17,
            "BSST": 1.09
        }
    }, {
        "id": 766,
        "collectionId": 50,
        "type": "weapon",
        "weaponName": "G3SG1",
        "skinName": "High Seas",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposem2LFZf1OD3dm5R642JlpWIlPb6Nr7DqWdY781lxL-Z9tqsjQ3s_kU6N23wcoeSIwI_Z12E-we8xu_ug5K1upvMziQ3uiA8pSGKL_pwBhg",
        "prices": {
            "FN": 2.67,
            "MW": 1.48,
            "FT": 0.84,
            "WW": 0.74,
            "BS": 0.57,
            "FNST": 6.54,
            "MWST": 3.25,
            "FTST": 1.41,
            "WWST": 1.32,
            "BSST": 1.1
        }
    }, {
        "id": 767,
        "collectionId": 50,
        "type": "weapon",
        "weaponName": "CZ75-Auto",
        "skinName": "Eco",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotaDyfgZf0Ob3cicVueOzl4-0m_7zO6-fxzJQ6ZJz07iV9I-i2Q3i8xZrYDigII7Hcwc8M1GG_gK2wO_p1pG6u4OJlyX1lloaZw",
        "prices": {
            "FN": 2.92,
            "MW": 1.49,
            "FT": 0.84,
            "WW": 0.71,
            "BS": 0.57,
            "FNST": 7.98,
            "MWST": 2.92,
            "FTST": 1.4,
            "WWST": 1.26,
            "BSST": 0.96
        }
    }, {
        "id": 768,
        "collectionId": 50,
        "type": "weapon",
        "weaponName": "Nova",
        "skinName": "Toy Soldier",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpouLWzKjhjxszGfitD08i5jb-YmPvwOr7DqWdY781lxOySoN-n2FDl80dsZjv0I9DHe1JqZA3U81TolOq5g5S57pWYm3QwsiI8pSGKHGIUcoI",
        "prices": {
            "FN": 2.92,
            "MW": 1.42,
            "FT": 0.8,
            "WW": 0.7,
            "BS": 0.58,
            "FNST": 8,
            "MWST": 3.09,
            "FTST": 1.37,
            "WWST": 1.17,
            "BSST": 1.33
        }
    }, {
        "id": 769,
        "collectionId": 50,
        "type": "weapon",
        "weaponName": "AWP",
        "skinName": "PAW",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FAZt7PLfYQJS7cumlZe0m_7zO6-fxm1XuZQkibqQptyii1fn-kFuZmr1d4KRIw9vNA7Xr1e6w-no0cW9tYOJlyVvfC5tEA",
        "prices": {
            "FN": 5.49,
            "MW": 3.5,
            "FT": 1.73,
            "WW": 1.8,
            "BS": 1.7,
            "FNST": 14.92,
            "MWST": 8.65,
            "FTST": 4.58,
            "WWST": 5.65,
            "BSST": 5.98
        }
    }, {
        "id": 770,
        "collectionId": 50,
        "type": "weapon",
        "weaponName": "FAMAS",
        "skinName": "Eye of Athena",
        "rarity": "classified",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLuoKhRf0Ob3dzxP7c-Jm5eHqPjmMrXWk1Rd4cJ5nqeW9o6miQzir0BqYGj0IYWVewA6N1zQrle4k-nqgJG0tcmcziEysihz-z-DyOcjvJ-R",
        "prices": {
            "FN": 13.2,
            "MW": 5.87,
            "FT": 4.28,
            "WW": 3.96,
            "BS": 2.75,
            "FNST": 28.94,
            "MWST": 13.7,
            "FTST": 6.99,
            "WWST": 5.91,
            "BSST": 4.74
        }
    }, {
        "id": 771,
        "collectionId": 50,
        "type": "weapon",
        "weaponName": "Sawed-Off",
        "skinName": "Devourer",
        "rarity": "classified",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopbuyLgNv1fX3cih9_92hkYSEkfHLN77HmX5D7ddOhuDG_Zi7jAzn_UY5YmrwJobDcAZrM13T-AC8levuhZ_pvcuayndmvCJwtnzamQv330-LHBr0xA",
        "prices": {
            "FN": 13.41,
            "MW": 5.64,
            "FT": 4.04,
            "WW": 3.79,
            "BS": 2.35,
            "FNST": 27.71,
            "MWST": 12.46,
            "FTST": 6.69,
            "WWST": 5.89,
            "BSST": 4.85
        }
    }, {
        "id": 772,
        "collectionId": 50,
        "type": "weapon",
        "weaponName": "M4A1-S",
        "skinName": "Nightmare",
        "rarity": "classified",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO1gb-Gw_alIITfn2xZ_MhwmOz--YXygED6_Us5a2DxcdSRJlNqMAzY-li8weu-gMDovJufyHVmuCklsX6PyhTk0wYMMLLeV8xVfw",
        "prices": {
            "FN": 45.97,
            "MW": 24.29,
            "FT": 13.1,
            "WW": 9.01,
            "BS": 8.47,
            "FNST": 101.77,
            "MWST": 53.75,
            "FTST": 28.36,
            "WWST": 21.11,
            "BSST": 19.5
        }
    }, {
        "id": 773,
        "collectionId": 50,
        "type": "weapon",
        "weaponName": "Desert Eagle",
        "skinName": "Code Red",
        "rarity": "covert",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposr-kLAtl7PTbTjlH7du6kb-KkPDmNqjCmXlu5Mx2gv2PoN3zjlbs_BVsYDimJNKWIQI4ZgzU_lC8l-28h5K6vJvOznZr7yYjsWGdwULr5DlSTQ",
        "prices": {
            "FN": 68.13,
            "MW": 38.16,
            "FT": 23.62,
            "WW": 18.48,
            "BS": 17.48,
            "FNST": 151.8,
            "MWST": 80.64,
            "FTST": 51.35,
            "WWST": 39.09,
            "BSST": 35.01
        }
    }, {
        "id": 774,
        "collectionId": 50,
        "type": "weapon",
        "weaponName": "AK-47",
        "skinName": "Neon Rider",
        "rarity": "covert",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJegJM6dO4q5KCk_LmDLfYkWNFppwj2rCQrN733QXgqEc5MGD7JYKTIAI5ZV-ErwK2krvrhZHttZrOmnp9-n51haggJHM",
        "prices": {
            "FN": 126.04,
            "MW": 66.34,
            "FT": 36.12,
            "WW": 33.44,
            "BS": 22.07,
            "FNST": 313.73,
            "MWST": 133.32,
            "FTST": 72.33,
            "WWST": 68.93,
            "BSST": 48.47
        }
    }, {
        "id": 775,
        "collectionId": 50,
        "type": "weapon",
        "weaponName": "Rare",
        "skinName": "Special Item",
        "rarity": "gold",
        "image": "./assets/rare-item.png"
    }, 

    // Danger Zone
    {
        "id": 776,
        "collectionId": 51,
        "type": "weapon",
        "weaponName": "Nova",
        "skinName": "Wood Fired",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpouLWzKjhnwMzGfitD09SjmpSOhcj2Ia7Fk1Rd4cJ5nqeZ8N6g2gSy-UZsamHzIYDGIVI-YgrW_Vi2xOfrgJ7q6M7JyXQwunEl-z-DyIZLVv7H",
        "prices": {
            "FN": 0.21,
            "MW": 0.12,
            "FT": 0.06,
            "WW": 0.07,
            "BS": 0.06,
            "FNST": 0.65,
            "MWST": 0.29,
            "FTST": 0.14,
            "WWST": 0.21,
            "BSST": 0.14
        }
    }, {
        "id": 777,
        "collectionId": 51,
        "type": "weapon",
        "weaponName": "Sawed-Off",
        "skinName": "Black Sand",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopbuyLgNv1fX3cih9_92hkYSEkfHLMbfQlWBu-8R_jtbN_Iv9nBrjrhdlMDz2JI6Wdg43MliGrge3w-bugcC86c-fz3tnv3Vx4ynflkGzn1gSORw4QN2y",
        "prices": {
            "FN": 0.23,
            "MW": 0.11,
            "FT": 0.06,
            "WW": 0.06,
            "BS": 0.06,
            "FNST": 0.83,
            "MWST": 0.28,
            "FTST": 0.14,
            "WWST": 0.12,
            "BSST": 0.12
        }
    }, {
        "id": 778,
        "collectionId": 51,
        "type": "weapon",
        "weaponName": "SG 553",
        "skinName": "Danger Close",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopb3wflFf1OD3YjoXuY-Jm5aOhcj8NrrFk29u5Mx2gv2P9I702wXs80BqYzvxdY6SIA44aV-E_VLvl-i8h8O_vJ7Ny3tjviAgtmGdwUKuDFVKtQ",
        "prices": {
            "FN": 0.24,
            "MW": 0.15,
            "FT": 0.06,
            "WW": 0.06,
            "BS": 0.06,
            "FNST": 1.18,
            "MWST": 0.28,
            "FTST": 0.13,
            "WWST": 0.19,
            "BSST": 0.12
        }
    }, {
        "id": 779,
        "collectionId": 51,
        "type": "weapon",
        "weaponName": "MP9",
        "skinName": "Modest Threat",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6r8FABz7P7YKAJB49C5mpnbxsj4OrzZgiVXsMEo3bCTpN-kigPs_UNuZjj6IobBJlNqMFqFrwO5xrjmgsW5ucjK1zI97d1xtbMt",
        "prices": {
            "FN": 0.26,
            "MW": 0.12,
            "FT": 0.06,
            "WW": 0.09,
            "BS": 0.06,
            "FNST": 1.03,
            "MWST": 0.38,
            "FTST": 0.18,
            "WWST": 0.51,
            "BSST": 0.16
        }
    }, {
        "id": 780,
        "collectionId": 51,
        "type": "weapon",
        "weaponName": "Glock-18",
        "skinName": "Oxide Blaze",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbaqKAxf0Ob3djFN79fnzL-ImOXmPL_UmFRd4cJ5nqeXrdWl3lXk_kFvYGD6doOcewM7ZF_U_AO7wLq9h8Dq7c7LwCFm7nIn-z-DyH1H2yRG",
        "prices": {
            "FN": 0.33,
            "MW": 0.12,
            "FT": 0.07,
            "WW": 0.11,
            "BS": 0.08,
            "FNST": 1.81,
            "MWST": 0.39,
            "FTST": 0.22,
            "WWST": 0.36,
            "BSST": 0.22
        }
    }, {
        "id": 781,
        "collectionId": 51,
        "type": "weapon",
        "weaponName": "M4A4",
        "skinName": "Magnesium",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhnwMzFJTwW09--m5CbkuXLNLPehX9u5Mx2gv2Pptuh0QXnrxJoamvwJ4SXcVJrZQuB-wfowee-h5bv75-YziNqviIq7WGdwULQRBs-zw",
        "prices": {
            "FN": 0.51,
            "MW": 0.1,
            "FT": 0.06,
            "WW": 0.05,
            "BS": 0.05,
            "FNST": 2.9,
            "MWST": 0.59,
            "FTST": 0.25,
            "WWST": 0.23,
            "BSST": 0.21
        }
    }, {
        "id": 782,
        "collectionId": 51,
        "type": "weapon",
        "weaponName": "Tec-9",
        "skinName": "Fubar",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoor-mcjhnwMzcdD4b09qjloGZqPv9NLPF2DsB7pMl2rmWrNSm3QLlrUZrMGHzLNSXcVM3Y17QrwPrkOjrhpHu75rXiSw0u_Jn4OQ",
        "prices": {
            "FN": 0.97,
            "MW": 0.05,
            "FT": 0.06,
            "WW": 0.06,
            "FNST": 2.63,
            "MWST": 0.17,
            "FTST": 0.16,
            "WWST": 0.13
        }
    }, {
        "id": 783,
        "collectionId": 51,
        "type": "weapon",
        "weaponName": "USP-S",
        "skinName": "Flashback",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo6m1FBRp3_bGcjhQ09-jq5WYh8jyP7rCnmlQ685OhuDG_Zi73AOx-kNtYWCicoWWcQY9MwmD_1S5xOjvgZa8757KnHY17yUn4HnVnwv330_JUMYbnw",
        "prices": {
            "FN": 1.18,
            "MW": 0.81,
            "FT": 0.58,
            "WW": 0.75,
            "BS": 0.73,
            "FNST": 3.32,
            "MWST": 1.98,
            "FTST": 1.56,
            "WWST": 2.69,
            "BSST": 2.21
        }
    }, {
        "id": 784,
        "collectionId": 51,
        "type": "weapon",
        "weaponName": "G3SG1",
        "skinName": "Scavenger",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposem2LFZf1OD3dm5R642Jh4GdlvDxDLfYkWNFpsAl37uUotjz3QzkrUZtMWindYCWcwRtYQ7Y-gC-lb3vgsO8u56dwSB9-n51rvm1CME",
        "prices": {
            "FN": 1.21,
            "MW": 0.76,
            "FT": 0.5,
            "WW": 0.44,
            "BS": 0.35,
            "FNST": 3.19,
            "MWST": 1.54,
            "FTST": 0.86,
            "WWST": 0.79,
            "BSST": 0.69
        }
    }, {
        "id": 785,
        "collectionId": 51,
        "type": "weapon",
        "weaponName": "Galil AR",
        "skinName": "Signal",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbupIgthwczAaAJF7dC_mL-YnvD6MrfuhG5V18l4jeHVu4iiiwbirUZoNT30JtPGdgM_YVHUrwC5xufu0J--vZ7NzydjuyMj7HjD30vgGbTJvko",
        "prices": {
            "FN": 1.24,
            "MW": 0.81,
            "FT": 0.56,
            "WW": 0.5,
            "BS": 0.49,
            "FNST": 3.33,
            "MWST": 1.66,
            "FTST": 1.15,
            "WWST": 1.42,
            "BSST": 1.38
        }
    }, {
        "id": 786,
        "collectionId": 51,
        "type": "weapon",
        "weaponName": "P250",
        "skinName": "Nevermore",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopujwezhh0szYI2gS09uklZaOk_7zNL7DhVRd4cJ5nqfF89qt2FHg_UdkNWymJI7AIQBraFqFrlK4kOu9jMW8ucycwSAwv3Ym-z-DyLzD5snZ",
        "prices": {
            "FN": 1.26,
            "MW": 0.8,
            "FT": 0.62,
            "WW": 0.65,
            "FNST": 3.32,
            "MWST": 1.61,
            "FTST": 1.1,
            "WWST": 1.76
        }
    }, {
        "id": 787,
        "collectionId": 51,
        "type": "weapon",
        "weaponName": "MAC-10",
        "skinName": "Pipe Down",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7umeldf1OD3fDxBvYyJkZiEqOf9I77CqWdY781lxOyZpt6i3wXir0FrYjzycYPDcwJoZAmG-le7xem7gMfvtZrIzSYyvik8pSGKw8th8IY",
        "prices": {
            "FN": 1.33,
            "MW": 0.77,
            "FT": 0.48,
            "WW": 0.43,
            "BS": 0.37,
            "FNST": 3.83,
            "MWST": 1.71,
            "FTST": 0.87,
            "WWST": 0.82,
            "BSST": 0.72
        }
    }, {
        "id": 788,
        "collectionId": 51,
        "type": "weapon",
        "weaponName": "UMP-45",
        "skinName": "Momentum",
        "rarity": "classified",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo7e1f1Jf0Ob3ZDBS092kho-chMj4OrzZgiUDuMch27GYpdis3VDk8kQ-YG72cNOScAY7ZQnV-VTtwOu7gpC0tZrJ1zI97XuqSfkK",
        "prices": {
            "FN": 8.21,
            "MW": 5,
            "FT": 3.84,
            "WW": 3.72,
            "BS": 3.3,
            "FNST": 19.18,
            "MWST": 11.41,
            "FTST": 6.38,
            "WWST": 5.73,
            "BSST": 6.16
        }
    }, {
        "id": 789,
        "collectionId": 51,
        "type": "weapon",
        "weaponName": "Desert Eagle",
        "skinName": "Mecha Industries",
        "rarity": "classified",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposr-kLAtl7PTbTjlH7du6kb-GkvT8MoTdn2xZ_It02rHCpIrx0APk8hVqMWr1LI-QdFU6YAvW8gO_xr3ugMDqup7Mz3FmpGB8st6VkheS",
        "prices": {
            "FN": 8.26,
            "MW": 5.51,
            "FT": 4.3,
            "WW": 4.32,
            "BS": 3.42,
            "FNST": 21.02,
            "MWST": 13.76,
            "FTST": 9.6,
            "WWST": 10.58,
            "BSST": 9.04
        }
    }, {
        "id": 790,
        "collectionId": 51,
        "type": "weapon",
        "weaponName": "MP5-SD",
        "skinName": "Phosphor",
        "rarity": "classified",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6rwOANf1OD3fC0X09qzh5SCgfb4DL_Dn3tu5Mx2gv2P9tukiVLkqkRkZzz2cdXBdFM7NV2G-Ae5wOfphMTpvZjMnHBruXN2sGGdwUKk4NUKRA",
        "prices": {
            "FN": 8.7,
            "MW": 5.31,
            "FT": 3.89,
            "WW": 3.89,
            "BS": 3.22,
            "FNST": 21.86,
            "MWST": 11.36,
            "FTST": 6.17,
            "WWST": 5.94,
            "BSST": 5.2
        }
    }, {
        "id": 791,
        "collectionId": 51,
        "type": "weapon",
        "weaponName": "AWP",
        "skinName": "Neo-Noir",
        "rarity": "covert",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FAR17PLfYQJM6dO4m4mZqPv9NLPF2GgE7MEk3e-ZoNmgjAXnqEdtNWn7JISRJAQ5MFHT-1W-xuq9g5-07cvXiSw0SeFYhWE",
        "prices": {
            "FN": 42.63,
            "MW": 35.6,
            "FT": 30.25,
            "WW": 30.09,
            "BS": 25.38,
            "FNST": 95.78,
            "MWST": 74.98,
            "FTST": 55.69,
            "WWST": 51.96,
            "BSST": 49.41
        }
    }, {
        "id": 792,
        "collectionId": 51,
        "type": "weapon",
        "weaponName": "AK-47",
        "skinName": "Asiimov",
        "rarity": "covert",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV092lnYmGmOHLP7LWnn8fvpMkjOqS99Smiwzk_0VvamH0LIHEdwFqYw2G_QC3lefsjZS4uJXLyWwj5HclxVTx0A",
        "prices": {
            "FN": 183.52,
            "MW": 54.94,
            "FT": 31.12,
            "WW": 30.66,
            "BS": 22.53,
            "FNST": 399.82,
            "MWST": 103.96,
            "FTST": 57.34,
            "WWST": 62.37,
            "BSST": 43.75
        }
    }, {
        "id": 793,
        "collectionId": 51,
        "type": "weapon",
        "weaponName": "Rare",
        "skinName": "Special Item",
        "rarity": "gold",
        "image": "./assets/rare-item.png"
    }, 

    // Prisma Case
    {
        "id": 794,
        "collectionId": 52,
        "type": "weapon",
        "weaponName": "FAMAS",
        "skinName": "Crypsis",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLuoKhRfwOP3dzxP7c-Jk4iEhOPLOrXCk2hF-_p9g-7J4bP5iUazrl1rYW6gI9LHcVA4NQ7UqwDrybzpjJTqupTPzyYx6yQk5S6OzkPlgR8acKUx0of5JTFn",
        "prices": {
            "FN": 0.47,
            "MW": 0.29,
            "FT": 0.15,
            "WW": 0.19,
            "BS": 0.14,
            "FNST": 1.45,
            "MWST": 0.74,
            "FTST": 0.36,
            "WWST": 0.32,
            "BSST": 0.3
        }
    }, {
        "id": 795,
        "collectionId": 52,
        "type": "weapon",
        "weaponName": "MP7",
        "skinName": "Mischief",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6ryFAR17P7YJgJQ7d-9kZSOkuXLP7LWnn9u5MRjjeyP942gigfi_0I-ZDvwJI_GJlI_ZwzZrFS6l73t18W-v57InHVgsikg7GGdwUK3QL_u2w",
        "prices": {
            "FN": 0.48,
            "MW": 0.15,
            "FT": 0.16,
            "WW": 0.13,
            "FNST": 1.26,
            "MWST": 0.34,
            "FTST": 0.3,
            "WWST": 0.25
        }
    }, {
        "id": 796,
        "collectionId": 52,
        "type": "weapon",
        "weaponName": "P250",
        "skinName": "Verdigris",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopujwezhhwszYI2gS08qzhoSCkOX9IITdn2xZ_Isi3bDFpNX0jgTn80FtYjqiJ9TDdVI8YQvUqVa7xuzp0J_u6Z7PwXdlpGB8shANWKCP",
        "prices": {
            "FN": 0.5,
            "MW": 0.33,
            "FT": 0.18,
            "WW": 0.3,
            "BS": 0.19,
            "FNST": 1.53,
            "MWST": 0.76,
            "FTST": 0.35,
            "WWST": 0.45,
            "BSST": 0.35
        }
    }, {
        "id": 797,
        "collectionId": 52,
        "type": "weapon",
        "weaponName": "Galil AR",
        "skinName": "Akoben",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbupIgthwczbYQJF7dC_mL-KnPj2NrXummJW4NFOhujT8om72wG18hZrMmmldY-RcVdtY1iE-wO_xeu7hpDu6p6dzSEw7CMhtizVmwv3308ApowVKw",
        "prices": {
            "FN": 0.51,
            "MW": 0.33,
            "FT": 0.21,
            "WW": 0.44,
            "BS": 0.21,
            "FNST": 1.56,
            "MWST": 0.76,
            "FTST": 0.37,
            "WWST": 0.61,
            "BSST": 0.3
        }
    }, {
        "id": 798,
        "collectionId": 52,
        "type": "weapon",
        "weaponName": "P90",
        "skinName": "Off World",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopuP1FAR17OORIQJN6tqhm5KHk8j4OrzZglRd6dd2j6eVoIqkjFbhqUs-Z2r2IYGRJAI4Nw6Gr1a5yOjv0Z7p6p_AzHNq73Nz-z-DyOKXWLG1",
        "prices": {
            "FN": 0.53,
            "MW": 0.34,
            "FT": 0.16,
            "WW": 0.24,
            "BS": 0.14,
            "FNST": 1.81,
            "MWST": 0.78,
            "FTST": 0.38,
            "WWST": 0.76,
            "BSST": 0.31
        }
    }, {
        "id": 799,
        "collectionId": 52,
        "type": "weapon",
        "weaponName": "MAC-10",
        "skinName": "Whitefish",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7umeldf1OD3fDxBvYyJkomYn8j2MrLFqWdY781lteXA54vwxlex_xVrMmv7Jo-QewI4YQ7TqQS6xum90ZO4tZzJmyRl6HR05SzbykapwUYb2Zum6mQ",
        "prices": {
            "FN": 0.66,
            "MW": 0.28,
            "FT": 0.15,
            "WW": 0.12,
            "BS": 0.13,
            "FNST": 1.82,
            "MWST": 0.73,
            "FTST": 0.37,
            "WWST": 0.25,
            "BSST": 0.27
        }
    }, {
        "id": 800,
        "collectionId": 52,
        "type": "weapon",
        "weaponName": "UMP-45",
        "skinName": "Moonrise",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo7e1f1Jf0vL3ZDBSuImJmY-EmeX9IL7uhX5f-8BlteXI8oTht1i1uRQ5fW_wd9CXdQ9vZ16E81S5xOm5gcDp6sjNwHoxsikm7X_UmRO_iR9MZuZxxavJmvndWak",
        "prices": {
            "FN": 1.23,
            "MW": 0.65,
            "FT": 0.4,
            "WW": 0.45,
            "FNST": 3.05,
            "MWST": 1.32,
            "FTST": 0.63,
            "WWST": 1.13
        }
    }, {
        "id": 801,
        "collectionId": 52,
        "type": "weapon",
        "weaponName": "MP5-SD",
        "skinName": "Gauss",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6rwOANf1OD3fC0X_9iJlZOfhfj5Mq_YlVRd4cJ5ntbN9J7yjRqw_BI_MTjyJY7DcwVrZQrXqFHqyO_rg8Lo6MnKyyE1vSF2tHbfnhXjn1gSOZEV41Ti",
        "prices": {
            "FN": 1.34,
            "MW": 0.66,
            "FT": 0.41,
            "WW": 0.32,
            "BS": 0.32,
            "FNST": 3.25,
            "MWST": 1.25,
            "FTST": 0.58,
            "WWST": 0.49,
            "BSST": 0.47
        }
    }, {
        "id": 802,
        "collectionId": 52,
        "type": "weapon",
        "weaponName": "AK-47",
        "skinName": "Uncharted",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV092sgIWIqPv9NLPFqWdQ-sJ0xLqXrYis2Fa1_BE_Y2iidYOTdg43ZlHSq1m3x-y705O_uJ7Lynowv3M8pSGK7lPtmXQ",
        "prices": {
            "FN": 1.59,
            "MW": 0.76,
            "FT": 0.46,
            "WW": 0.82,
            "BS": 0.5,
            "FNST": 5.8,
            "MWST": 2.89,
            "FTST": 2.47,
            "WWST": 3.44,
            "BSST": 2.49
        }
    }, {
        "id": 803,
        "collectionId": 52,
        "type": "weapon",
        "weaponName": "R8 Revolver",
        "skinName": "Skull Crusher",
        "rarity": "classified",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopL-zJAt21uH3cih9_tmgm4ydkuXLPKvBhG5C-8pjteTE8YXghWu4qgE7Nnf2cNWTewJvZFrZqQLqk7y-05C6ucjAziRnvSAl5n3czkez1ElFO-I7m7XAHlXg5QHi",
        "prices": {
            "FN": 1.67,
            "MW": 1.41,
            "FT": 1.45,
            "FNST": 3.46,
            "MWST": 2.6,
            "FTST": 2.44
        }
    }, {
        "id": 804,
        "collectionId": 52,
        "type": "weapon",
        "weaponName": "Tec-9",
        "skinName": "Bamboozle",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoor-mcjhjxszcdD4b0963mYKEmMj4OrzZglRd6dd2j6eToYit0QziqEdtNWr3INKdIQdraFnW_QC3wuu8gsS1vJnOzHU1siV3-z-DyEii9lU5",
        "prices": {
            "FN": 1.73,
            "MW": 0.84,
            "FT": 0.42,
            "WW": 0.52,
            "BS": 0.36,
            "FNST": 4.73,
            "MWST": 1.98,
            "FTST": 0.89,
            "WWST": 1.22,
            "BSST": 0.94
        }
    }, {
        "id": 805,
        "collectionId": 52,
        "type": "weapon",
        "weaponName": "Desert Eagle",
        "skinName": "Light Rail",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposr-kLAtl7PTbTjlH7du6kb-Oj_jLP7LWnn9u5MRjjeyPrY7xiw3nrUI-Z2ymctTEcw45ZlzY-le7lbu505-6u8icn3o1uHYgsWGdwUIySWubDg",
        "prices": {
            "FN": 3.71,
            "MW": 1.55,
            "FT": 0.71,
            "WW": 0.74,
            "BS": 0.65,
            "FNST": 11.58,
            "MWST": 5.3,
            "FTST": 2.66,
            "WWST": 3.25,
            "BSST": 2.54
        }
    }, {
        "id": 806,
        "collectionId": 52,
        "type": "weapon",
        "weaponName": "XM1014",
        "skinName": "Incinegator",
        "rarity": "classified",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgporrf0e1Y07PDdTiVPvYznwL-CmfT9Pb7Dl39e-vp9g-7J4bP5iUazrl1rZW36coCRIFRoNAnU8wW4l-67jJO9v5_JnHIx7nQr7SvbzUDigRBEcKUx0pL3N0pS",
        "prices": {
            "FN": 11.67,
            "MW": 1.87,
            "FT": 1.72,
            "WW": 1.49,
            "FNST": 35.26,
            "MWST": 3.51,
            "FTST": 2.89,
            "WWST": 2.84
        }
    }, {
        "id": 807,
        "collectionId": 52,
        "type": "weapon",
        "weaponName": "Five-SeveN",
        "skinName": "Angry Mob",
        "rarity": "covert",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLOzLhRlxfbGTj5X09q_goW0hPLiNrXul2VW-txOhuDG_ZjKhFWmrBZyZm36LIDAegA_ZlCF-lW4w7rsgcDpu5WbzyBkuCYg7H3VnhayhRkaa_sv26KGUuZy7w",
        "prices": {
            "FN": 11.89,
            "MW": 6.32,
            "FT": 3.71,
            "WW": 3.27,
            "BS": 3.01,
            "FNST": 40.14,
            "MWST": 17.01,
            "FTST": 8.1,
            "WWST": 10.03,
            "BSST": 7.9
        }
    }, {
        "id": 808,
        "collectionId": 52,
        "type": "weapon",
        "weaponName": "AWP",
        "skinName": "Atheris",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FAR17PLfYQJU5cyzhr-HnvD8J4Tdl3lW7YsjjuyWoNil0FXjqEZlZmryJtKQegQ-Yg7V-QK5wr_s1Je06syYzSNgpGB8shyWYXeM",
        "prices": {
            "FN": 13.5,
            "MW": 6.11,
            "FT": 3.35,
            "WW": 2.5,
            "BS": 2.45,
            "FNST": 39.24,
            "MWST": 17.55,
            "FTST": 9.05,
            "WWST": 6.69,
            "BSST": 6.44
        }
    }, {
        "id": 809,
        "collectionId": 52,
        "type": "weapon",
        "weaponName": "AUG",
        "skinName": "Momentum",
        "rarity": "classified",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot6-iFAR17PLddgJP49GzmpSemsj4OrzZglRd6dd2j6eQ89-j2AfjqBY_ZGn0dY-QdQE2ZF7S_we-xbzsgpK87s_My3pl7iEk-z-DyMyvwAZv",
        "prices": {
            "FN": 19.25,
            "MW": 6.07,
            "FT": 2.34,
            "WW": 1.93,
            "BS": 1.89,
            "FNST": 113.68,
            "MWST": 16.33,
            "FTST": 4.63,
            "WWST": 3.27,
            "BSST": 2.89
        }
    }, {
        "id": 810,
        "collectionId": 52,
        "type": "weapon",
        "weaponName": "M4A4",
        "skinName": "The Emperor",
        "rarity": "covert",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhnwMzFJTwW09m7hIWZmOXLP7LWnn9u5MRjjeyPo933jQDs_kZlMWmiIdKQdVM-ZVnQ8ge2xui5gMXqu5jMnCFr63Nx7WGdwUKmIT3TEw",
        "prices": {
            "FN": 111.66,
            "MW": 29.57,
            "FT": 8.31,
            "WW": 8.22,
            "BS": 6.33,
            "FNST": 314.22,
            "MWST": 76.24,
            "FTST": 22.91,
            "WWST": 21.18,
            "BSST": 20.86
        }
    }, {
        "id": 811,
        "collectionId": 52,
        "type": "weapon",
        "weaponName": "Rare",
        "skinName": "Special Item",
        "rarity": "gold",
        "image": "./assets/rare-item.png"
    }, 
    
    // CS20 Case
    {
        "id": 812,
        "collectionId": 53,
        "type": "weapon",
        "weaponName": "SCAR-20",
        "skinName": "Assault",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopbmkOVUw7PDdTi5B7c6JlZOYluL4J4Tdn2xZ_Pp9i_vG8MKg31W180plZGCnctfEIAU9ZQqC-QS3wL3vjMC5uJ_PwCdqsnN04XiMgVXp1qjN3NFX",
        "prices": {
            "FN": 0.25,
            "MW": 0.13,
            "FT": 0.07,
            "WW": 0.11,
            "BS": 0.07,
            "FNST": 0.89,
            "MWST": 0.33,
            "FTST": 0.16,
            "WWST": 0.28,
            "BSST": 0.17
        }
    }, {
        "id": 813,
        "collectionId": 53,
        "type": "weapon",
        "weaponName": "Tec-9",
        "skinName": "Flash Out",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoor-mcjhjxszcdD4b09q6lZODqPv9NLPFqWdQ-sJ0xLCWotyi3lbhrRZrMmulcNSccQU5NQ3Sq1Lol-m8gcS0upqcwCBlvSQ8pSGKcKA2Srg",
        "prices": {
            "FN": 0.25,
            "MW": 0.13,
            "FT": 0.07,
            "WW": 0.19,
            "BS": 0.08,
            "FNST": 1.15,
            "MWST": 0.46,
            "FTST": 0.17,
            "WWST": 0.39,
            "BSST": 0.17
        }
    }, {
        "id": 814,
        "collectionId": 53,
        "type": "weapon",
        "weaponName": "Dual Berettas",
        "skinName": "Elite 1.6",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpos7asPwJf1OD3dShD4OOzmImfkuTLMLfQhXhY6_p9g-7J4bP5iUazrl09a2D6ddKcJARrYAqC8lS8w7i70MS8vp-awHswvCRx53vYmR21h0xNcKUx0nQnrd-d",
        "prices": {
            "FN": 0.26,
            "MW": 0.13,
            "FT": 0.07,
            "WW": 0.16,
            "BS": 0.08,
            "FNST": 1.5,
            "MWST": 0.41,
            "FTST": 0.21,
            "WWST": 0.38,
            "BSST": 0.23
        }
    }, {
        "id": 815,
        "collectionId": 53,
        "type": "weapon",
        "weaponName": "MAG-7",
        "skinName": "Popdog",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7uifDhnwMzFcDoV08y5hISEkMj4OrzZglRd6dd2j6eS9tigjlDm-BA4YmD3I9THe1Q_ZlzXr1K4yezsjJ687ZnNnycy73Qm-z-DyKAIbOaD",
        "prices": {
            "FN": 0.27,
            "MW": 0.12,
            "FT": 0.06,
            "WW": 0.11,
            "BS": 0.07,
            "FNST": 0.86,
            "MWST": 0.31,
            "FTST": 0.17,
            "WWST": 0.3,
            "BSST": 0.19
        }
    }, {
        "id": 816,
        "collectionId": 53,
        "type": "weapon",
        "weaponName": "MAC-10",
        "skinName": "Classic Crate",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7umeldf1OD3fDxBvYyJkJWYg8j3IbrFk1Rd4cJ5ntbN9J7yjRrt80tkYm-iI4PHIQI_N1vUqQO_yb-505-978jPy3dluCkrtHaMmhfkn1gSOWILGKqQ",
        "prices": {
            "FN": 0.36,
            "MW": 0.11,
            "FT": 0.07,
            "WW": 0.06,
            "BS": 0.06,
            "FNST": 1.31,
            "MWST": 0.28,
            "FTST": 0.16,
            "WWST": 0.15,
            "BSST": 0.17
        }
    }, {
        "id": 817,
        "collectionId": 53,
        "type": "weapon",
        "weaponName": "FAMAS",
        "skinName": "Decommissioned",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLuoKhRf0Ob3dzxP7c-JmpWAksjgNrXCn2Rf18l4jeHVyoD0mlOx5UM_NWD3JYTAcARoZ1rWr1e5xLzog5O8us6fyyRhviBz43uMnxDlgxpSLrs4241xVvs",
        "prices": {
            "FN": 0.49,
            "MW": 0.13,
            "FT": 0.08,
            "WW": 0.07,
            "BS": 0.07,
            "FNST": 2.09,
            "MWST": 0.51,
            "FTST": 0.28,
            "WWST": 0.27,
            "BSST": 0.27
        }
    }, {
        "id": 818,
        "collectionId": 53,
        "type": "weapon",
        "weaponName": "M249",
        "skinName": "Aztec",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-jxcjhhwszFI2kb092sgIWIqPv9NLPFqWdQ-sJ0xLGQpNumiwG2_UI-NmHzIoaWe1M4ZVuB-gK8xu26gcLv6Z7KmyZm73U8pSGKNCKmBkk",
        "prices": {
            "FN": 1.34,
            "MW": 0.98,
            "FT": 0.64,
            "WW": 0.58,
            "BS": 0.55,
            "FNST": 3.72,
            "MWST": 1.96,
            "FTST": 1.05,
            "WWST": 1,
            "BSST": 0.77
        }
    }, {
        "id": 819,
        "collectionId": 53,
        "type": "weapon",
        "weaponName": "Glock-18",
        "skinName": "Sacrifice",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbaqKAxf0Ob3djFN79eJnIWZmMj4OrzZglRd6dd2j6eW99zz3Q3j_hBrNmmhdYXGJwc4aFyD_la3xOvthZe0uMuazHQwuSYl-z-DyKtTZWhf",
        "prices": {
            "FN": 1.45,
            "MW": 0.29,
            "FT": 0.13,
            "WW": 0.11,
            "BS": 0.1,
            "FNST": 6.65,
            "MWST": 1.53,
            "FTST": 0.73,
            "WWST": 0.55,
            "BSST": 0.53
        }
    }, {
        "id": 820,
        "collectionId": 53,
        "type": "weapon",
        "weaponName": "Five-SeveN",
        "skinName": "Buddy",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLOzLhRlxfbGTj5X09q_goWYkuHxPYTWhWwI18l4jeHVyoD0mlOx5UtrYz2md4KdJA87YAzTq1e6w-690cS_v5-fySMw7iInsCrcnRCz0xlSLrs4aHy31kQ",
        "prices": {
            "FN": 1.46,
            "MW": 1.02,
            "FT": 0.69,
            "WW": 0.66,
            "BS": 0.55,
            "FNST": 3.63,
            "MWST": 2.32,
            "FTST": 1.22,
            "WWST": 1.33,
            "BSST": 0.98
        }
    }, {
        "id": 821,
        "collectionId": 53,
        "type": "weapon",
        "weaponName": "P250",
        "skinName": "Inferno",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopujwezhnwMzYI2gS09W4koWZmfjLP7LWnn9u5MRjjeyPrdX33AfhqBVoMWimddSdIw9oNAzYrFbvkO_mh5S06sjAzXBi6CR3t2GdwUKzOAMUbw",
        "prices": {
            "FN": 1.57,
            "MW": 1.01,
            "FT": 0.64,
            "WW": 0.61,
            "BS": 0.53,
            "FNST": 3.9,
            "MWST": 2.24,
            "FTST": 1.25,
            "WWST": 1.47,
            "BSST": 0.93
        }
    }, {
        "id": 822,
        "collectionId": 53,
        "type": "weapon",
        "weaponName": "UMP-45",
        "skinName": "Plastique",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo7e1f1Jf0Ob3ZDBS0965mYK0m_7zO6_ummpD78A_3rGQo97z0Q3j-UppMDv0JtWWd1dtM1qFqwfslLjph5buup2YyHRmsz5iuygoROZNCw",
        "prices": {
            "FN": 1.64,
            "MW": 1,
            "FT": 0.65,
            "WW": 0.68,
            "BS": 0.47,
            "FNST": 4.51,
            "MWST": 2.14,
            "FTST": 1.08,
            "WWST": 1.18,
            "BSST": 0.86
        }
    }, {
        "id": 823,
        "collectionId": 53,
        "type": "weapon",
        "weaponName": "MP5-SD",
        "skinName": "Agent",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6rwOANf1OD3fC0X09q0nb-HnvD8J4Tdl3lW7Yso0uqSrNvx2wWyrhFuY2ilcIXBdQM6MFqF-gO_le_qhZ7ou5ibyyBqpGB8skTxF_xK",
        "prices": {
            "FN": 2.96,
            "MW": 1.01,
            "FT": 0.68,
            "WW": 0.58,
            "BS": 0.49,
            "FNST": 13.11,
            "MWST": 2.89,
            "FTST": 1.28,
            "WWST": 0.91,
            "BSST": 1.1
        }
    }, {
        "id": 824,
        "collectionId": 53,
        "type": "weapon",
        "weaponName": "AUG",
        "skinName": "Death by Puppy",
        "rarity": "classified",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot6-iFAZt7PLddgJG6d2inL-JjsjwPLzWj1Rd4cJ5ntbN9J7yjRqxqUo-Zm_xI4XBcQZtZFiC81Lqw729hce-6Z_BzXExvyIn5X7flxK_n1gSOfCWU6Ar",
        "prices": {
            "FN": 11.24,
            "MW": 6.75,
            "FT": 5.8,
            "WW": 5.65,
            "FNST": 24.7,
            "MWST": 12.86,
            "FTST": 9.17,
            "WWST": 7.82
        }
    }, {
        "id": 825,
        "collectionId": 53,
        "type": "weapon",
        "weaponName": "P90",
        "skinName": "Nostalgia",
        "rarity": "classified",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopuP1FAR17OORIQJM48-ilYyMnvbLP7LWnn9u5MRjjeyPotmmilXm_0U6ZWGlcIHDd1M5M1DU_Qe8kLq8057v75SawSEwvCh05WGdwUIx_ttQJA",
        "prices": {
            "FN": 11.71,
            "MW": 6.99,
            "FT": 5.69,
            "WW": 5.23,
            "BS": 4.45,
            "FNST": 25.8,
            "MWST": 13.16,
            "FTST": 8.74,
            "WWST": 7.49,
            "BSST": 7.37
        }
    }, {
        "id": 826,
        "collectionId": 53,
        "type": "weapon",
        "weaponName": "MP9",
        "skinName": "Hydra",
        "rarity": "classified",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6r8FAR17P7YKAJK9diklb-HnvD8J4Tdl3lW7Ytz3b6Xpo2t2QW2-BE_aj3yLdKVdgM-Yw6Cq1Hrlb3p1sTpv5jMznRlpGB8snH8MK4B",
        "prices": {
            "FN": 12.03,
            "MW": 7.19,
            "FT": 6.44,
            "WW": 4.83,
            "BS": 3.78,
            "FNST": 34.39,
            "MWST": 14.91,
            "FTST": 8.14,
            "WWST": 6.78,
            "BSST": 5.98
        }
    }, {
        "id": 827,
        "collectionId": 53,
        "type": "weapon",
        "weaponName": "FAMAS",
        "skinName": "Commemoration",
        "rarity": "covert",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLuoKhRf1OD3dzxP7c-JmIWMlvTtDLzemm9u5Mx2gv3--Y3nj1H6-EdsYmr7LILGcwQ8Zl6E-wK2wr2615Lp7ZSfm3pgviIqsSndnRy1gQYMMLK6CbACJQ",
        "prices": {
            "FN": 20.81,
            "MW": 14.19,
            "FT": 11.46,
            "WW": 11,
            "BS": 10.82,
            "FNST": 71.85,
            "MWST": 39.78,
            "FTST": 30.85,
            "WWST": 27.19,
            "BSST": 27.21
        }
    }, {
        "id": 828,
        "collectionId": 53,
        "type": "weapon",
        "weaponName": "AWP",
        "skinName": "Wildfire",
        "rarity": "covert",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FAR17PLfYQJV5dCykomZksj4OrzZglRd6dd2j6eXpImm3lbl-RY-Z2yiJ4-dcQBtNQrVqADqk-u-gJW6u57Oz3pnsiYj-z-DyLDxQcXO",
        "prices": {
            "FN": 135.88,
            "MW": 91.88,
            "FT": 59.58,
            "WW": 51.5,
            "BS": 31.9,
            "FNST": 298.68,
            "MWST": 184.38,
            "FTST": 105.18,
            "WWST": 88.64,
            "BSST": 58.06
        }
    }, {
        "id": 829,
        "collectionId": 53,
        "type": "weapon",
        "weaponName": "Rare",
        "skinName": "Classic Knife",
        "rarity": "gold",
        "image": "./assets/classic-knife.png"
    },

    // Shattered Web
    {
        "id": 830,
        "collectionId": 54,
        "type": "weapon",
        "weaponName": "SCAR-20",
        "skinName": "Torn",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopbmkOVUw7ODYTi5B7c7kxL-Yg-X9OL7DqW9E-9FOhuDG_ZjKhFWmrBZyY2H3JtLHJlA-Nw3X-1XtyOy5g5W47p7Ozydiv3Mgs3eOnRTlh0xJaPsv26JVqJWlhA",
        "prices": {
            "FN": 0.56,
            "MW": 0.5,
            "FT": 0.24,
            "WW": 0.3,
            "FNST": 1.61,
            "MWST": 1.01,
            "FTST": 0.56,
            "WWST": 0.47
        }
    }, {
        "id": 831,
        "collectionId": 54,
        "type": "weapon",
        "weaponName": "MP5-SD",
        "skinName": "Acid Wash",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6rwOANf1OD3fC0X09mil4i0m_7zO6_ummpD78A_i7GXrdqiiQDnrkBqY26gJY6XdFQ4NVnQ_Fm5wby5g5-6uJ_PwXUxuj5iuygwwUghaQ",
        "prices": {
            "FN": 0.68,
            "MW": 0.42,
            "FT": 0.26,
            "WW": 0.32,
            "BS": 0.28,
            "FNST": 1.91,
            "MWST": 1.18,
            "FTST": 0.53,
            "WWST": 1.13,
            "BSST": 0.48
        }
    }, {
        "id": 832,
        "collectionId": 54,
        "type": "weapon",
        "weaponName": "Nova",
        "skinName": "Plume",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpouLWzKjhjxszGfitD09qzlZSDkuXnJLLfkVRd4cJ5ntbN9J7yjRrg8hZkYm76JoGRdFJtZlDU_gfowOa8gZPq7p_KyXFj6XQqt3nbyxC-n1gSOdl4EIgx",
        "prices": {
            "FN": 0.72,
            "MW": 0.4,
            "FT": 0.26,
            "WW": 0.3,
            "BS": 0.25,
            "FNST": 2.64,
            "MWST": 1.23,
            "FTST": 0.57,
            "WWST": 0.73,
            "BSST": 0.47
        }
    }, {
        "id": 833,
        "collectionId": 54,
        "type": "weapon",
        "weaponName": "M249",
        "skinName": "Warbird",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-jxcjhnwMzFI2kb08u3hoKChfPLJb7Fk3lQ5vp9g-7J4bP5iUazrl1uajjxcdOXcAQ8YwrQ-Vbrx-btgMDuvM7LynIy6ycr7Hjcl0CzgBlJcKUx0jSSNtWg",
        "prices": {
            "FN": 0.81,
            "MW": 0.33,
            "FT": 0.24,
            "WW": 0.52,
            "BS": 0.29,
            "FNST": 2.53,
            "MWST": 1,
            "FTST": 0.52,
            "WWST": 0.61,
            "BSST": 0.47
        }
    }, {
        "id": 834,
        "collectionId": 54,
        "type": "weapon",
        "weaponName": "R8 Revolver",
        "skinName": "Memento",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopL-zJAt21uH3di59_oSJmYWGkvngPITdn2xZ_Pp9i_vG8MKti1Xi-0M9am2gI4THd1c9M1vTqAO2w-i-hMe5tJWfzidnsnQnsHjVgVXp1mN7CGLZ",
        "prices": {
            "FN": 0.81,
            "MW": 0.42,
            "FT": 0.25,
            "WW": 0.39,
            "BS": 0.33,
            "FNST": 4.79,
            "MWST": 1.27,
            "FTST": 0.57,
            "WWST": 0.78,
            "BSST": 0.52
        }
    }, {
        "id": 835,
        "collectionId": 54,
        "type": "weapon",
        "weaponName": "G3SG1",
        "skinName": "Black Sand",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposem2LFZf0Ob3dm5R642JloyKlPznMrXVqWdY781lteXA54vwxgy18hFvZW30I4-RewVvNFnZq1m5lLzr0JG_7czNziRnviMgsXyLmxSpwUYbjJfDXCI",
        "prices": {
            "FN": 0.99,
            "MW": 0.37,
            "FT": 0.25,
            "WW": 0.43,
            "BS": 0.27,
            "FNST": 1.87,
            "MWST": 1.2,
            "FTST": 0.6,
            "WWST": 0.48,
            "BSST": 0.44
        }
    }, {
        "id": 836,
        "collectionId": 54,
        "type": "weapon",
        "weaponName": "Dual Berettas",
        "skinName": "Balance",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpos7asPwJf1OD3dShD4OOzmImfkuTLIbTCk1Rd4cJ5ntbN9J7yjRrsrxVkamHzJoaWIAc3aVDX81m5xLy6gZK6uZvKz3Mw6XJw4X7alhTin1gSORlkLgXN",
        "prices": {
            "FN": 1.68,
            "MW": 0.43,
            "FT": 0.26,
            "WW": 0.26,
            "BS": 0.26,
            "FNST": 5.2,
            "MWST": 1.37,
            "FTST": 0.98,
            "WWST": 0.65,
            "BSST": 0.62
        }
    }, {
        "id": 837,
        "collectionId": 54,
        "type": "weapon",
        "weaponName": "P2000",
        "skinName": "Obsidian",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovrG1eVcwg8zLZAJSvozmxL-EleT9N7LQmFRd4cJ5ntbN9J7yjRrkqkU9N2ryctOdJAE-ZVjRrAfqle3ogsW-tJTKyXs3uiIn433VnUaxn1gSORT4o59X",
        "prices": {
            "FN": 3.74,
            "MW": 1.84,
            "FT": 0.96,
            "WW": 1.06,
            "BS": 1.11,
            "FNST": 11.32,
            "MWST": 4.1,
            "FTST": 1.76,
            "WWST": 1.28,
            "BSST": 1.24
        }
    }, {
        "id": 838,
        "collectionId": 54,
        "type": "weapon",
        "weaponName": "MP7",
        "skinName": "Neon Ply",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6ryFAR17P7YJgJQ6cy6nYOKqPv9NLPFqWdQ-sJ0xO-Uo4-l3QS3qUZtZ276JY7AJFQ4aV_SqQS4wLi71JW5tMzPwXYw7CU8pSGKdmrW7WE",
        "prices": {
            "FN": 3.81,
            "MW": 1.93,
            "FT": 0.94,
            "WW": 0.87,
            "BS": 0.75,
            "FNST": 11.1,
            "MWST": 4.32,
            "FTST": 1.92,
            "WWST": 1.52,
            "BSST": 1.39
        }
    }, {
        "id": 839,
        "collectionId": 54,
        "type": "weapon",
        "weaponName": "PP-Bizon",
        "skinName": "Embargo",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLO_JAlf0Ob3czRY49KJho-Kk8jjMqnDn2RD18l4jeHVyoD0mlOx5UpuNz3wddeVcQI4YVnQq1frwr_ph5PovJyYnHY1syYn5HbYzhWy1RpSLrs4sTdZH8s",
        "prices": {
            "FN": 3.99,
            "MW": 1.95,
            "FT": 0.92,
            "WW": 0.88,
            "BS": 0.77,
            "FNST": 9.08,
            "MWST": 4.45,
            "FTST": 2.38,
            "WWST": 1.52,
            "BSST": 1.46
        }
    }, {
        "id": 840,
        "collectionId": 54,
        "type": "weapon",
        "weaponName": "AUG",
        "skinName": "Arctic Wolf",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot6-iFAR17PLddgJV5NWikYaKmfDLP7LWnn9u5MRjjeyPpdmkigblrxJoNmz1d4CRI1I5aQ2F8gC4xr_v0J_pvp7OmHY2uiFw5GGdwULhaPOI8w",
        "prices": {
            "FN": 5.99,
            "MW": 3.21,
            "FT": 1.72,
            "WW": 1.83,
            "BS": 1.02,
            "FNST": 17.54,
            "MWST": 8.55,
            "FTST": 3.8,
            "WWST": 4.65,
            "BSST": 2.47
        }
    }, {
        "id": 841,
        "collectionId": 54,
        "type": "weapon",
        "weaponName": "AK-47",
        "skinName": "Rat Rod",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhnwMzJemkV09K_loKHkuXLP7LWnn9u5MRjjeyPpI-h2Aaw-EppMW_xLNfEdwA4ZlrT8wTrkurrg5K86Jqfz3Jg7icn4WGdwUKC_cawAQ",
        "prices": {
            "FN": 9.4,
            "MW": 5.08,
            "FT": 3.65,
            "WW": 3.47,
            "BS": 3.16,
            "FNST": 25.92,
            "MWST": 13.33,
            "FTST": 9.41,
            "WWST": 9.65,
            "BSST": 9.02
        }
    }, {
        "id": 842,
        "collectionId": 54,
        "type": "weapon",
        "weaponName": "SG 553",
        "skinName": "Colony IV",
        "rarity": "classified",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopb3wflFf0Ob3YjoXuY-JhoWKlOP7IYTdn2xZ_Pp9i_vG8ML0jgG3-0Q4YWzxLIecegA6YAmErFK8krjsgZ-07czOnXBruCNw5XvVgVXp1mEkNP6x",
        "prices": {
            "FN": 28.84,
            "MW": 12.42,
            "FT": 7.42,
            "WW": 6.29,
            "BS": 5.59,
            "FNST": 73.51,
            "MWST": 30.83,
            "FTST": 11.14,
            "WWST": 9.54,
            "BSST": 9.83
        }
    }, {
        "id": 843,
        "collectionId": 54,
        "type": "weapon",
        "weaponName": "Tec-9",
        "skinName": "Decimator",
        "rarity": "classified",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoor-mcjhnwMzcdD4b09izl4mGluP7IYTdn2xZ_Pp9i_vG8MLz3Aft-xFuZm7yLdKXcVVvZVjR_FDrwufm1pXtuM_AmCM2vSAg43zVgVXp1l50fGvJ",
        "prices": {
            "FN": 35.4,
            "MW": 18.11,
            "FT": 8.66,
            "WW": 8.44,
            "BS": 7.37,
            "FNST": 93.2,
            "MWST": 39.7,
            "FTST": 21.06,
            "WWST": 17.53,
            "BSST": 15.77
        }
    }, {
        "id": 844,
        "collectionId": 54,
        "type": "weapon",
        "weaponName": "SSG 08",
        "skinName": "Bloodshot",
        "rarity": "classified",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopamie19f0Ob3Yi5FvISJgImInPvxIYTdn2xZ_Pp9i_vG8ML33lXj-BI6Mm_xco6cegU8YFnX_lHvwOvohZK9vMmfzXplvnYm4CnbgVXp1jqI559_",
        "prices": {
            "FN": 39.98,
            "MW": 7.44,
            "FT": 6.84,
            "WW": 6.33,
            "FNST": 228.7,
            "MWST": 12.57,
            "FTST": 12.02,
            "WWST": 10.8
        }
    }, {
        "id": 845,
        "collectionId": 54,
        "type": "weapon",
        "weaponName": "MAC-10",
        "skinName": "Stalker",
        "rarity": "covert",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7umeldf1OD3fDxBvYyJh5SKm_zxIYTdn2xZ_Pp9i_vG8ML2igCw_BJqYzj1LY-SelA_ZF_V_1O4l-fojMTptMjInHNmuShz43jegVXp1qY6y7-1",
        "prices": {
            "FN": 59.79,
            "MW": 24.96,
            "FT": 12.37,
            "WW": 9.09,
            "BS": 8.38,
            "FNST": 327.09,
            "MWST": 75.22,
            "FTST": 35.24,
            "WWST": 24.03,
            "BSST": 19.95
        }
    }, {
        "id": 846,
        "collectionId": 54,
        "type": "weapon",
        "weaponName": "AWP",
        "skinName": "Containment Breach",
        "rarity": "covert",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FAR17PLfYQJU5c6jh7-HnvD8J4Tdl3lW7Ysh2rqRooqt2Qyw_0FpN2D3d9SdJwJrNAyB-wS8xujmjMC7vZ6fm3ZmpGB8srM2Wpih",
        "prices": {
            "FN": 309.57,
            "MW": 131.65,
            "FT": 75.86,
            "WW": 54.19,
            "BS": 38.28,
            "FNST": 681.07,
            "MWST": 260.34,
            "FTST": 138.68,
            "WWST": 93.08,
            "BSST": 68.36
        }
    }, {
        "id": 847,
        "collectionId": 54,
        "type": "weapon",
        "weaponName": "Rare",
        "skinName": "Special Item",
        "rarity": "gold",
        "image": "./assets/rare-item.png"
    },

    // Prisma 2
    {
        "id": 848,
        "collectionId": 55,
        "type": "weapon",
        "weaponName": "Negev",
        "skinName": "Prototype",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpouL-iLhFf0Ob3fzhF6cqJhJKEg_jgKqvUqWdY781lteXA54vwxlDlrkZoYT37IYGQdFRoMlHWqAO9w7vp0ZTqtM_MzXo16HIg4y3fzkGpwUYboJsltMQ",
        "prices": {
            "FN": 0.2,
            "MW": 0.1,
            "FT": 0.06,
            "WW": 0.06,
            "BS": 0.05,
            "FNST": 0.8,
            "MWST": 0.34,
            "FTST": 0.1,
            "WWST": 0.21,
            "BSST": 0.11
        }
    }, {
        "id": 849,
        "collectionId": 55,
        "type": "weapon",
        "weaponName": "R8 Revolver",
        "skinName": "Bone Forged",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopL-zJAt21uH3di59_oSJmIWdnvbgO7rfqWdY781lteXA54vwxgLh_RFrZDymd9KRJ1A2N13VrFC_yejp1sXpv8mYy3VksnQktizayxCpwUYbtdJWqoE",
        "prices": {
            "FN": 0.2,
            "MW": 0.09,
            "FT": 0.06,
            "WW": 0.06,
            "BS": 0.06,
            "FNST": 0.64,
            "MWST": 0.26,
            "FTST": 0.1,
            "WWST": 0.16,
            "BSST": 0.13
        }
    }, {
        "id": 850,
        "collectionId": 55,
        "type": "weapon",
        "weaponName": "CZ75-Auto",
        "skinName": "Distressed",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotaDyfgZf0Ob3cicVueO1kZKKnPjgNoTdn2xZ_Pp9i_vG8MKnjgzm80U9ajqiJoWUcVU8YgvWrljvlea7hMW1uJvMySc1siUktnzagVXp1sHp_Hd3",
        "prices": {
            "FN": 0.26,
            "MW": 0.1,
            "FT": 0.06,
            "WW": 0.06,
            "BS": 0.06,
            "FNST": 0.85,
            "MWST": 0.26,
            "FTST": 0.1,
            "WWST": 0.11,
            "BSST": 0.11
        }
    }, {
        "id": 851,
        "collectionId": 55,
        "type": "weapon",
        "weaponName": "MP5-SD",
        "skinName": "Desert Strike",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6rwOANf0Ob3fC0X09izh4WZg8jnJ6nYnW5u5Mx2gv3--Y3nj1H6_0dlZmGmJteRdQI6Z1jU-QW4kuftjMK56pmbzSdg6HVz5H-LmxTkiAYMMLJGEoqizg",
        "prices": {
            "FN": 0.29,
            "MW": 0.09,
            "FT": 0.06,
            "WW": 0.06,
            "BS": 0.06,
            "FNST": 1.41,
            "MWST": 0.28,
            "FTST": 0.12,
            "WWST": 0.11,
            "BSST": 0.11
        }
    }, {
        "id": 852,
        "collectionId": 55,
        "type": "weapon",
        "weaponName": "AUG",
        "skinName": "Tom Cat",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot6-iFABz7PLddgJW5Mm4kIWZhOP7IbbummJW4NFOhujT8om72QbjqRJtMmClI9WSJ1NoZwrX-lDsl-7u1MK5vM_Km3NnvHYrt3bYngv330_mNCXIVg",
        "prices": {
            "FN": 0.33,
            "MW": 0.11,
            "FT": 0.06,
            "WW": 0.07,
            "BS": 0.06,
            "FNST": 1.37,
            "MWST": 0.4,
            "FTST": 0.13,
            "WWST": 0.35,
            "BSST": 0.13
        }
    }, {
        "id": 853,
        "collectionId": 55,
        "type": "weapon",
        "weaponName": "Desert Eagle",
        "skinName": "Blue Ply",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposr-kLAtl7PDdTjlH7du6kb-Zkuf4OrjQqWdY781lteXA54vwxg3k-xJvY277I9LBdVA6N1vS_lK7kr3qgMO5usmaynZm7icq5S2MzkCpwUYbCa_cApM",
        "prices": {
            "FN": 0.87,
            "MW": 0.19,
            "FT": 0.11,
            "WW": 0.09,
            "BS": 0.09,
            "FNST": 5,
            "MWST": 1.04,
            "FTST": 0.63,
            "WWST": 0.61,
            "BSST": 0.61
        }
    }, {
        "id": 854,
        "collectionId": 55,
        "type": "weapon",
        "weaponName": "Sawed-Off",
        "skinName": "Apocalypto",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopbuyLgNv1fX3cih9_92hkYSEkfHLMqvelWpd8dVlhdbN_Iv9nGu4qgE7Nneld4bDdA9oNAvQ_gLoxbrpjJO56cvNmCNlvCIrsX_VnETmhB1IP7Npm7XAHgKzuWqP",
        "prices": {
            "FN": 1.73,
            "MW": 0.9,
            "FT": 0.51,
            "WW": 0.43,
            "BS": 0.38,
            "FNST": 5.22,
            "MWST": 1.81,
            "FTST": 0.96,
            "WWST": 0.75,
            "BSST": 0.72
        }
    }, {
        "id": 855,
        "collectionId": 55,
        "type": "weapon",
        "weaponName": "P2000",
        "skinName": "Acid Etched",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovrG1eVcwg8zJYAJSvozmxL-KlP7wDLjdmX1U-vp9g-7J4bP5iUazrl1lMW-gI9CXIQZsNVvQrgK4x-vohcW4vZzJyHNhs3UjtHnfm0TlhkpEcKUx0pjVNx96",
        "prices": {
            "FN": 1.78,
            "MW": 0.9,
            "FT": 0.49,
            "WW": 0.43,
            "BS": 0.39,
            "FNST": 5.19,
            "MWST": 1.76,
            "FTST": 1.06,
            "WWST": 0.76,
            "BSST": 0.71
        }
    }, {
        "id": 856,
        "collectionId": 55,
        "type": "weapon",
        "weaponName": "SG 553",
        "skinName": "Darkwing",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopb3wflFf0Ob3YjoXuY-JkIGZnOD9PbzummJW4NFOhujT8om7jg23-ENuYW76ddDAIFJqY1rR-VW6l7_qjMC7v5WfwHFivXRx4X7fnQv330_a99p--w",
        "prices": {
            "FN": 1.9,
            "MW": 0.81,
            "FT": 0.5,
            "WW": 0.43,
            "BS": 0.4,
            "FNST": 6.13,
            "MWST": 1.86,
            "FTST": 0.99,
            "WWST": 0.75,
            "BSST": 0.72
        }
    }, {
        "id": 857,
        "collectionId": 55,
        "type": "weapon",
        "weaponName": "SCAR-20",
        "skinName": "Enforcer",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopbmkOVUw7PTbTi5B7c7kxL-OmfH7IbjUhFRd4cJ5ntbN9J7yjRrm-xY-MmqiIdeddlA9ZFjR8wLrk-m51MfpuJiYySBnuCQktHjflhy_n1gSOYBfus65",
        "prices": {
            "FN": 1.98,
            "MW": 0.88,
            "FT": 0.5,
            "WW": 0.41,
            "BS": 0.36,
            "FNST": 5.52,
            "MWST": 1.72,
            "FTST": 0.98,
            "WWST": 0.72,
            "BSST": 0.67
        }
    }, {
        "id": 858,
        "collectionId": 55,
        "type": "weapon",
        "weaponName": "AWP",
        "skinName": "Capillary",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FAR17PLfYQJU6dW4q4yCkP_gDLfQhGxUpp0n3LzF9tj33Abn-kFlazz6dtTGI1Q5MAmE-QDsk7y5h5Tpv8idnXp9-n51GL1nfac",
        "prices": {
            "FN": 2.16,
            "MW": 0.43,
            "FT": 0.15,
            "WW": 0.37,
            "BS": 0.17,
            "FNST": 9.81,
            "MWST": 1.87,
            "FTST": 1.11,
            "WWST": 1.91,
            "BSST": 1.18
        }
    }, {
        "id": 859,
        "collectionId": 55,
        "type": "weapon",
        "weaponName": "SSG 08",
        "skinName": "Fever Dream",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopamie19f0Ob3Yi5FvISJkoWdkuXLN6nUl2Zu5Mx2gv3--Y3nj1H6qBY_Zmz3dY6TcAY6YlzUrle6xui9jJa7vZzMwSQ3uiIr43yMnkTm0gYMMLJz5vUHjQ",
        "prices": {
            "FN": 2.16,
            "MW": 1.11,
            "FT": 0.57,
            "WW": 0.91,
            "BS": 0.48,
            "FNST": 7.37,
            "MWST": 3.25,
            "FTST": 1.6,
            "WWST": 3.09,
            "BSST": 1.29
        }
    }, {
        "id": 860,
        "collectionId": 55,
        "type": "weapon",
        "weaponName": "AK-47",
        "skinName": "Phantom Disruptor",
        "rarity": "classified",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJenAWu-OmnIGFg_j5DL_YhXlE-NF-mNbN_Iv9nGu4qgE7NnegJYLDIVNsNFnXq1XtwL_qhZ_p6M7MwHUxuSN2ti3UzRDj0kwdbec9m7XAHkqGBcP1",
        "prices": {
            "FN": 11.1,
            "MW": 8.04,
            "FT": 5.7,
            "WW": 6.84,
            "BS": 5.31,
            "FNST": 34.14,
            "MWST": 19.87,
            "FTST": 13.95,
            "WWST": 15.49,
            "BSST": 12.48
        }
    }, {
        "id": 861,
        "collectionId": 55,
        "type": "weapon",
        "weaponName": "MAG-7",
        "skinName": "Justice",
        "rarity": "classified",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7uifDhnwMzFcDoV09ajh5SClPLLP7LWnn9u5MRjjeyP84_xiwPnqhFrZGCidoaccVNrZgzZ-gW3wL3u0JXvv5vAmyAwsnQk4GGdwULDadNVtQ",
        "prices": {
            "FN": 12.42,
            "MW": 5.42,
            "FT": 2.97,
            "WW": 2.48,
            "BS": 1.83,
            "FNST": 29.86,
            "MWST": 10.52,
            "FTST": 4.62,
            "WWST": 3.57,
            "BSST": 3.05
        }
    }, {
        "id": 862,
        "collectionId": 55,
        "type": "weapon",
        "weaponName": "MAC-10",
        "skinName": "Disco Tech",
        "rarity": "classified",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7umeldf0Ob3fDxBvYyJmoGIhfLLP7LWnn9u5MRjjeyPrdzziQay-0VlYjzwI9OTJwRvY1_V_wO2kOm5g8Xv6JubnyNruXYht2GdwUKMosOtLg",
        "prices": {
            "FN": 14.05,
            "MW": 6.93,
            "FT": 3.6,
            "WW": 2.61,
            "BS": 2.3,
            "FNST": 39.92,
            "MWST": 12.42,
            "FTST": 7.2,
            "WWST": 4.6,
            "BSST": 3.9
        }
    }, {
        "id": 863,
        "collectionId": 55,
        "type": "weapon",
        "weaponName": "Glock-18",
        "skinName": "Bullet Queen",
        "rarity": "covert",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbaqKAxf0Ob3djFN79fnzL-cluX5MrLVk2Vu5Mx2gv3--Y3nj1H6r0plMm-lcNSRIQc6Z1GE-1e6wObt1JG46cmbmHo37yAn4HjfmUTmhAYMMLKVxXRrDQ",
        "prices": {
            "FN": 59.68,
            "MW": 17.63,
            "FT": 9.67,
            "WW": 6.56,
            "BS": 5.43,
            "FNST": 169.52,
            "MWST": 57.12,
            "FTST": 27.85,
            "WWST": 16.97,
            "BSST": 14.63
        }
    }, {
        "id": 864,
        "collectionId": 55,
        "type": "weapon",
        "weaponName": "M4A1-S",
        "skinName": "Player Two",
        "rarity": "covert",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO1gb-Gw_alIITShWxeupUl0tbN_Iv9nGu4qgE7Nnf1IYWUcAQ7MgnS-FW6wOi705Lo75uYmHNh6SZ3tiqMmh210xkZb-Rvm7XAHs3vPuvv",
        "prices": {
            "FN": 120.02,
            "MW": 67.24,
            "FT": 32.78,
            "WW": 30.49,
            "BS": 16.86,
            "FNST": 227.74,
            "MWST": 110.88,
            "FTST": 54,
            "WWST": 50.75,
            "BSST": 31.44
        }
    }, {
        "id": 865,
        "collectionId": 55,
        "type": "weapon",
        "weaponName": "Rare",
        "skinName": "Special Item",
        "rarity": "gold",
        "image": "./assets/rare-item.png"
    }, 

    // Fracture Case
    {
        "id": 866,
        "collectionId": 56,
        "type": "weapon",
        "weaponName": "SG 553",
        "skinName": "Ol' Rusty",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopb3wflFf1OD3YjoXuY-JhpWYg-7LP7LWnn9u5MRjjeyP9tnxjAzm-0c6Z22hcYDAdA4-Z1HW-VLrk-zphMS6upvNyHZnvnZ042GdwUL6H1mM1A",
        "prices": {
            "FN": 0.2,
            "MW": 0.09,
            "FT": 0.06,
            "WW": 0.06,
            "BS": 0.06,
            "FNST": 0.62,
            "MWST": 0.24,
            "FTST": 0.11,
            "WWST": 0.18,
            "BSST": 0.1
        }
    }, {
        "id": 867,
        "collectionId": 56,
        "type": "weapon",
        "weaponName": "P250",
        "skinName": "Cassette",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopujwezhjxszYI2gS09-3h5OOg-PxDLfYkWNF18lwmO7Eu9Tw3gay8xBta23xJdTGJ1Q9Zl-F81TvkOi-jZa67pjOz3U16XYl5n7D30vgEiB9r4A",
        "prices": {
            "FN": 0.21,
            "MW": 0.11,
            "FT": 0.05,
            "WW": 0.06,
            "BS": 0.06,
            "FNST": 0.69,
            "MWST": 0.33,
            "FTST": 0.13,
            "WWST": 0.24,
            "BSST": 0.13
        }
    }, {
        "id": 868,
        "collectionId": 56,
        "type": "weapon",
        "weaponName": "Negev",
        "skinName": "Ultralight",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpouL-iLhFf0Ob3fzhF6cqJgYyfhfb4OrzZglRd4cJ5ntbN9J7yjRqy_0Rqa2mgctXBd1U8NArR_1i6l7rq1MO5vcidwCEy7CFwt3mJlkbjn1gSORALg32d",
        "prices": {
            "FN": 0.21,
            "MW": 0.08,
            "FT": 0.06,
            "WW": 0.06,
            "BS": 0.06,
            "FNST": 0.69,
            "MWST": 0.24,
            "FTST": 0.1,
            "WWST": 0.15,
            "BSST": 0.11
        }
    }, {
        "id": 869,
        "collectionId": 56,
        "type": "weapon",
        "weaponName": "P90",
        "skinName": "Freight",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopuP1FABz7OORIQJB49KilYmFkuXLP7LWnn9u5MRjjeyP8ImtjAPj8kBtaz-gJYWTdVQ_Ml7TqAPokOzvh8K6vpvImHJivSFx5GGdwUJl-uhAcw",
        "prices": {
            "FN": 0.25,
            "MW": 0.11,
            "FT": 0.06,
            "WW": 0.06,
            "BS": 0.06,
            "FNST": 1.03,
            "MWST": 0.25,
            "FTST": 0.11,
            "WWST": 0.11,
            "BSST": 0.1
        }
    }, {
        "id": 870,
        "collectionId": 56,
        "type": "weapon",
        "weaponName": "P2000",
        "skinName": "Gnarled",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovrG1eVcwg8zJYAJSvozmxL-HmOTgDKzehGdV18l4jeHVyoD0mlOx5UI4azvxdYeRIARsZArX8lbskOrqhZS8uc-byiRiuSMk4neJzUCxiRpSLrs4DPAc4sI",
        "prices": {
            "FN": 0.25,
            "MW": 0.08,
            "FT": 0.06,
            "WW": 0.06,
            "BS": 0.06,
            "FNST": 1.06,
            "MWST": 0.23,
            "FTST": 0.11,
            "WWST": 0.1,
            "BSST": 0.12
        }
    }, {
        "id": 871,
        "collectionId": 56,
        "type": "weapon",
        "weaponName": "PP-Bizon",
        "skinName": "Runic",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLO_JAlf1OD3czRY49KJnIWHm-X1Or_UhFRd4cJ5ntbN9J7yjRq3_BI9Z2H0JoCdIAdraVCC-AS5l7zu08C_75Wayyc273Ig4SvZmhW3n1gSOWigl-N3",
        "prices": {
            "FN": 0.28,
            "MW": 0.1,
            "FT": 0.06,
            "WW": 0.06,
            "BS": 0.06,
            "FNST": 1.41,
            "MWST": 0.27,
            "FTST": 0.11,
            "WWST": 0.1,
            "BSST": 0.11
        }
    }, {
        "id": 872,
        "collectionId": 56,
        "type": "weapon",
        "weaponName": "SSG 08",
        "skinName": "Mainframe 001",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopamie19f0Ob3Yi5FvISJmYGCmfHmMrbUqWdY781lteXA54vwxgOw_BdkZWindY6VIFBrMgqF_1C6wLjujMDu6J7Lm3tm7HIm4XbbzEOpwUYbzunpojk",
        "prices": {
            "FN": 0.51,
            "MW": 0.12,
            "FT": 0.05,
            "WW": 0.05,
            "BS": 0.05,
            "FNST": 2.71,
            "MWST": 0.61,
            "FTST": 0.31,
            "WWST": 0.25,
            "BSST": 0.25
        }
    }, {
        "id": 873,
        "collectionId": 56,
        "type": "weapon",
        "weaponName": "MP5-SD",
        "skinName": "Kitbash",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6rwOANf1OD3fC0X_9iJg4GYg_L4MrXVqWdU78Ryk9bN_Iv9nGu4qgE7Nnf6IdTEewQ2NQvSqVi_wbu9jZe1vZTNy3Bk63Er5HbbyUHhh0xFO7A-m7XAHt-G88cu",
        "prices": {
            "FN": 1.55,
            "MW": 0.87,
            "FT": 0.56,
            "WW": 0.51,
            "BS": 0.41,
            "FNST": 3.77,
            "MWST": 1.87,
            "FTST": 0.8,
            "WWST": 0.95,
            "BSST": 0.62
        }
    }, {
        "id": 874,
        "collectionId": 56,
        "type": "weapon",
        "weaponName": "Galil AR",
        "skinName": "Connexion",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbupIgthwczPYgJF7dC_mL-bn_jxPbLJqWdY781lteXA54vwxgLm8kNlMm-mI4adIwM4NFDW_VjsyL--jJS-uc-YzXFr6CEn5nbYnhSpwUYbtmvWxUo",
        "prices": {
            "FN": 1.57,
            "MW": 0.96,
            "FT": 0.57,
            "WW": 0.54,
            "BS": 0.43,
            "FNST": 3.66,
            "MWST": 1.82,
            "FTST": 0.77,
            "WWST": 1.06,
            "BSST": 0.66
        }
    }, {
        "id": 875,
        "collectionId": 56,
        "type": "weapon",
        "weaponName": "Tec-9",
        "skinName": "Brother",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoor-mcjhnwMzcdD4b09ujkZKCm_v1DLfYkWNF18lwmO7Eu9us3gHn_xBsamj3J4CUJ1NtZlHWrwLtlevqgJ61v53JwHQ1vSV07HnD30vgpLbVCkY",
        "prices": {
            "FN": 1.62,
            "MW": 0.97,
            "FT": 0.59,
            "WW": 0.41,
            "BS": 0.41,
            "FNST": 4.62,
            "MWST": 1.75,
            "FTST": 0.85,
            "WWST": 0.67,
            "BSST": 0.63
        }
    }, {
        "id": 876,
        "collectionId": 56,
        "type": "weapon",
        "weaponName": "MAC-10",
        "skinName": "Allure",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7umeldf0Ob3fDxBvYyJnZOEmPn6MoTdn2xZ_Pp9i_vG8MKl2AC1_xc4NW6mLYWUelVoMw3Z8lW6ybzu1pXutJXBnyZn63Z07SuJgVXp1mZoDeap",
        "prices": {
            "FN": 1.67,
            "MW": 0.99,
            "FT": 0.58,
            "WW": 0.43,
            "BS": 0.42,
            "FNST": 4.14,
            "MWST": 1.91,
            "FTST": 0.91,
            "WWST": 0.7,
            "BSST": 0.63
        }
    }, {
        "id": 877,
        "collectionId": 56,
        "type": "weapon",
        "weaponName": "MAG-7",
        "skinName": "Monster Call",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7uifDhjxszFcDoV09G5mpOfkuXLMLrdmlRd4cJ5ntbN9J7yjRrsqRdqZWnxJtXBIwI5MArY_we5wrvog5Po757MzHBl7yZz5yyImEO3n1gSOSCZljDB",
        "prices": {
            "FN": 1.93,
            "MW": 0.88,
            "FT": 0.56,
            "WW": 0.42,
            "BS": 0.41,
            "FNST": 5.52,
            "MWST": 2,
            "FTST": 0.92,
            "WWST": 0.62,
            "BSST": 0.62
        }
    }, {
        "id": 878,
        "collectionId": 56,
        "type": "weapon",
        "weaponName": "XM1014",
        "skinName": "Entombed",
        "rarity": "classified",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgporrf0e1Y07PDdTiVPvYznwL-KmuL4Nq_ulGdE7fp9g-7J4bP5iUazrl1tYG72IICSJlM4ZQ6Cq1e5x-zqhsfvu5rImyFq6XUqs3fezRPmiU5LcKUx0sbazufk",
        "prices": {
            "FN": 9.65,
            "MW": 5.91,
            "FT": 4.11,
            "WW": 3.78,
            "BS": 3.61,
            "FNST": 22.1,
            "MWST": 10.57,
            "FTST": 6.23,
            "WWST": 5.42,
            "BSST": 5.17
        }
    }, {
        "id": 879,
        "collectionId": 56,
        "type": "weapon",
        "weaponName": "Glock-18",
        "skinName": "Vogue",
        "rarity": "classified",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbaqKAxf0Ob3djFN79eJkZmOlPj6J7rSglRd4cJ5ntbN9J7yjRqyqURla2GnJdKWJg9oN1nV8we2wLrs1pbotczLnCMw6Ckl4yrflxG1n1gSOanH9nA-",
        "prices": {
            "FN": 9.86,
            "MW": 6.85,
            "FT": 4.19,
            "WW": 4.12,
            "BS": 3.85,
            "FNST": 24.63,
            "MWST": 12.72,
            "FTST": 6.87,
            "WWST": 8.04,
            "BSST": 5.49
        }
    }, {
        "id": 880,
        "collectionId": 56,
        "type": "weapon",
        "weaponName": "M4A4",
        "skinName": "Tooth Fairy",
        "rarity": "classified",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhjxszFJTwW082jkYWFkfb9IaLummJW4NFOhujT8om7jQGyqUNuYWj3IYKRcFVoaV2Cq1W2xLrn1pXv6snNn3RgsyEr5neInwv330_EUH3GMA",
        "prices": {
            "FN": 9.96,
            "MW": 6.17,
            "FT": 3.84,
            "WW": 3.8,
            "BS": 3.42,
            "FNST": 19.93,
            "MWST": 10.9,
            "FTST": 6,
            "WWST": 6.06,
            "BSST": 4.87
        }
    }, {
        "id": 881,
        "collectionId": 56,
        "type": "weapon",
        "weaponName": "AK-47",
        "skinName": "Legion of Anubis",
        "rarity": "covert",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV0924gYKChMj4OrzZglRd6dd2j6eWotWs3Fbtr0U9YT_wJISVIQZtZAmB8gK3kum5gpa_uZqdzXRj6HZ0-z-DyDgX3Rs-",
        "prices": {
            "FN": 20.89,
            "MW": 15.27,
            "FT": 11.53,
            "WW": 11.8,
            "BS": 9.03,
            "FNST": 68.23,
            "MWST": 40.06,
            "FTST": 26.03,
            "WWST": 28.36,
            "BSST": 18.74
        }
    }, {
        "id": 882,
        "collectionId": 56,
        "type": "weapon",
        "weaponName": "Desert Eagle",
        "skinName": "Printstream",
        "rarity": "covert",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposr-kLAtl7PDdTjlH7duJhJKCmePnJ6nUl2Zu5Mx2gv3--Y3nj1H6qUdqazz2IoCVdVJvYlGGqFPtyea6gZ-_uJjPy3tj7HQnsS3cmBHkiQYMMLIjaxhhAw",
        "prices": {
            "FN": 124.69,
            "MW": 78.73,
            "FT": 57.39,
            "WW": 51.52,
            "BS": 41.63,
            "FNST": 247.28,
            "MWST": 138.94,
            "FTST": 95.85,
            "WWST": 87.62,
            "BSST": 68.71
        }
    }, {
        "id": 883,
        "collectionId": 56,
        "type": "weapon",
        "weaponName": "Rare",
        "skinName": "Special Item",
        "rarity": "gold",
        "image": "./assets/rare-item.png"
    }, 

    // Operation Broken Fang Case
    {
        "id": 884,
        "collectionId": 57,
        "type": "weapon",
        "weaponName": "G3SG1",
        "skinName": "Digital Mesh",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposem2LFZf1OD3dm5R642JkImYheLkJ4Tdn2xZ_Pp9i_vG8MKm0QewqUY_YjjyIIXEJgFoMlGF-QK6w7_o0Ze778zBz3Iw7yQr5S6PgVXp1pWKJBRH",
        "prices": {
            "FN": 0.45,
            "MW": 0.28,
            "FT": 0.14,
            "WW": 0.2,
            "BS": 0.14,
            "FNST": 1.43,
            "MWST": 0.63,
            "FTST": 0.26,
            "WWST": 0.44,
            "BSST": 0.2
        }
    }, {
        "id": 885,
        "collectionId": 57,
        "type": "weapon",
        "weaponName": "P90",
        "skinName": "Cocoa Rampage",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopuP1FA957OORIQJG5dK5q5KKmuf1NL7ummJW4NFOhujT8om72gbn-kRoYT_zIYWSd1I9Yl_QrFToybi91pHq6J6fyiRluCNzs3nVlwv3309SNStznA",
        "prices": {
            "FN": 0.46,
            "MW": 0.28,
            "FT": 0.14,
            "WW": 0.15,
            "BS": 0.12,
            "FNST": 1.54,
            "MWST": 0.71,
            "FTST": 0.29,
            "WWST": 0.37,
            "BSST": 0.28
        }
    }, {
        "id": 886,
        "collectionId": 57,
        "type": "weapon",
        "weaponName": "P250",
        "skinName": "Contaminant",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopujwezhjxszYI2gS09W4koWIg8j4OrzZglRd6dd2j6eTptnx0VLlr0M5NTr0ctOSdgE6aVjY_wTtlebogJK87Z3KmHZmvyF2-z-DyPRmpxJ8",
        "prices": {
            "FN": 0.47,
            "MW": 0.29,
            "FT": 0.14,
            "WW": 0.16,
            "BS": 0.13,
            "FNST": 1.61,
            "MWST": 0.69,
            "FTST": 0.27,
            "WWST": 0.74,
            "BSST": 0.25
        }
    }, {
        "id": 887,
        "collectionId": 57,
        "type": "weapon",
        "weaponName": "MP5-SD",
        "skinName": "Condition Zero",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6rwOANf1OD3fC0X09-5moSCg_77PaHUhGRu5Mx2gv3--Y3nj1H6_xY4YzyhcILDewY3NwmG-AS-yLzq0Je06c7JwSdj6yAr5njclkOxggYMMLJbdMR-kw",
        "prices": {
            "FN": 0.56,
            "MW": 0.27,
            "FT": 0.14,
            "WW": 0.11,
            "BS": 0.11,
            "FNST": 2.31,
            "MWST": 0.59,
            "FTST": 0.28,
            "WWST": 0.23,
            "BSST": 0.24
        }
    }, {
        "id": 888,
        "collectionId": 57,
        "type": "weapon",
        "weaponName": "M249",
        "skinName": "Deep Relief",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-jxcjhjxszFI2kb09izkZC0hfL4Or7XqWdY781lteXA54vwxgbm_BJsYmzyLNCRd1VsM16B_lK3ye-6hpDuu5ufz3JksiV07H_VmkepwUYb-wiXbAo",
        "prices": {
            "FN": 0.59,
            "MW": 0.27,
            "FT": 0.13,
            "WW": 0.1,
            "BS": 0.11,
            "FNST": 1.69,
            "MWST": 0.64,
            "FTST": 0.25,
            "WWST": 0.2,
            "BSST": 0.22
        }
    }, {
        "id": 889,
        "collectionId": 57,
        "type": "weapon",
        "weaponName": "Galil AR",
        "skinName": "Vandal",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbupIgthwczPYgJF7dC_mL-dlvnwMrfummJW4NFOhujT8om73QXg_xBvN26nJNKUdQ43MwvVq1O7le2-g5TqvZiamiZrvSZx7HfYmgv3308glBa-KA",
        "prices": {
            "FN": 0.61,
            "MW": 0.27,
            "FT": 0.14,
            "WW": 0.11,
            "BS": 0.11,
            "FNST": 2.33,
            "MWST": 0.62,
            "FTST": 0.35,
            "WWST": 0.27,
            "BSST": 0.28
        }
    }, {
        "id": 890,
        "collectionId": 57,
        "type": "weapon",
        "weaponName": "CZ75-Auto",
        "skinName": "Vendetta",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotaDyfgZf1OD3cicVueOgkY6PkuPgMoTdn2xZ_Pp9i_vG8MKliwex-UppNmHxcI6UcQdsYFiF8gXvkOy-hJO6tMjMzno17yAj4HvcgVXp1s4D2v3Y",
        "prices": {
            "FN": 0.65,
            "MW": 0.27,
            "FT": 0.14,
            "WW": 0.11,
            "BS": 0.11,
            "FNST": 2.01,
            "MWST": 0.62,
            "FTST": 0.26,
            "WWST": 0.21,
            "BSST": 0.24
        }
    }, {
        "id": 891,
        "collectionId": 57,
        "type": "weapon",
        "weaponName": "UMP-45",
        "skinName": "Gold Bismuth",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo7e1f1Jf1OD3ZDBS09u5mIS0lf7nPq7FnlRd4cJ5ntbN9J7yjRq3-0o6MmyhJICUdVI_MlzY_Fa9xr3m18Puv5Sfznsx73Mh5HnfnkHkn1gSOTwvrMJl",
        "prices": {
            "FN": 3.63,
            "MW": 2.67,
            "FT": 1.59,
            "WW": 1.5,
            "BS": 1.33,
            "FNST": 7.26,
            "MWST": 4.62,
            "FTST": 2.19,
            "WWST": 1.94,
            "BSST": 1.67
        }
    }, {
        "id": 892,
        "collectionId": 57,
        "type": "weapon",
        "weaponName": "Dual Berettas",
        "skinName": "Dezastre",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpos7asPwJf1OD3dShD4OOzmImfkuTLN77Ll3hF-sBOhuDG_ZjKhFWmrBZyajv0ddecI1VtNVmF-VDvw-7t15bqvsybz3Q3unN07Svenxa-1E1LOvsv26KRGIX1Dw",
        "prices": {
            "FN": 3.86,
            "MW": 2.57,
            "FT": 1.73,
            "WW": 1.49,
            "BS": 1.38,
            "FNST": 8.46,
            "MWST": 4.44,
            "FTST": 2.27,
            "WWST": 1.87,
            "BSST": 1.66
        }
    }, {
        "id": 893,
        "collectionId": 57,
        "type": "weapon",
        "weaponName": "Nova",
        "skinName": "Clear Polymer",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpouLWzKjhjxszGfitD08y5mJmGkuXLP7LWnn9u5MRjjeyP9NigigOxrUVqNWGmIoTAJ1VoY17W8la2yOy6gMW47ZrPwHRl7id042GdwUJscDXiPg",
        "prices": {
            "FN": 3.92,
            "MW": 2.59,
            "FT": 1.7,
            "WW": 1.52,
            "BS": 1.37,
            "FNST": 7.6,
            "MWST": 4.84,
            "FTST": 2.19,
            "WWST": 1.76,
            "BSST": 1.84
        }
    }, {
        "id": 894,
        "collectionId": 57,
        "type": "weapon",
        "weaponName": "SSG 08",
        "skinName": "Parallax",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopamie19f0Ob3Yi5FvISJl4iZmPr1J7LSqWdY781lteXA54vwxgLirUZsZTyhcY-RdVQ4aQmGq1Dqwr_p1sTu6MnBwHNl6CAn4SnVm0SpwUYbg4QLWnY",
        "prices": {
            "FN": 4.01,
            "MW": 2.56,
            "FT": 1.7,
            "WW": 1.52,
            "BS": 1.41,
            "FNST": 11.79,
            "MWST": 5.23,
            "FTST": 2.25,
            "WWST": 1.92,
            "BSST": 1.73
        }
    }, {
        "id": 895,
        "collectionId": 57,
        "type": "weapon",
        "weaponName": "AWP",
        "skinName": "Exoskeleton",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FABz7PLfYQJH9NOln4WHkuP7PYTdn2xZ_Pp9i_vG8MKiigO18xI6ZWqiLNWVdFRrMAuFq1a6yOq-gZft6M6dmHc3v3F0sSvVgVXp1mj51bRN",
        "prices": {
            "FN": 6.24,
            "MW": 2.44,
            "FT": 1.6,
            "WW": 1.47,
            "BS": 1.33,
            "FNST": 22.51,
            "MWST": 8.11,
            "FTST": 4.02,
            "WWST": 3.96,
            "BSST": 4.09
        }
    }, {
        "id": 896,
        "collectionId": 57,
        "type": "weapon",
        "weaponName": "M4A4",
        "skinName": "Cyber Security",
        "rarity": "classified",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhjxszFJTwW09-vloWZh-L6OITdn2xZ_Pp9i_vG8MKtjVDj-0FlYz2mLI6Rew5oMg6EqVHtyee5h5Xu7Z-YnXRj6HQj5i7YgVXp1qR0cFCZ",
        "prices": {
            "FN": 30.52,
            "MW": 20.46,
            "FT": 13.81,
            "WW": 12.51,
            "BS": 11.08,
            "FNST": 63.71,
            "MWST": 35.69,
            "FTST": 17.45,
            "WWST": 14.12,
            "BSST": 12.8
        }
    }, {
        "id": 897,
        "collectionId": 57,
        "type": "weapon",
        "weaponName": "USP-S",
        "skinName": "Monster Mashup",
        "rarity": "classified",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo6m1FBRp3_bGcjhQ09-jq5WYh8j_IbTamXhu5Mx2gv3--Y3nj1H6rhVlZzj6LYHBIAJvaFHQr1S7k73rgcK47p3Om3Bm7CB04X3dyhC-1AYMMLLxSvuMdg",
        "prices": {
            "FN": 32.89,
            "MW": 22.29,
            "FT": 14.78,
            "WW": 13.25,
            "BS": 11.2,
            "FNST": 67.84,
            "MWST": 39.03,
            "FTST": 18.78,
            "WWST": 15.75,
            "BSST": 13.15
        }
    }, {
        "id": 898,
        "collectionId": 57,
        "type": "weapon",
        "weaponName": "Five-SeveN",
        "skinName": "Fairy Tale",
        "rarity": "classified",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLOzLhRlxfbGTj5X09q_goW0hPLiNrXukmJQ-txOhuDG_ZjKhFWmrBZyNmn6dYSTJlA8Yl7V8lDrwey715W878mbm3swvyVzsS3fzhHjgxpFbPsv26JFUuNUhg",
        "prices": {
            "FN": 34.34,
            "MW": 20.94,
            "FT": 13.92,
            "WW": 13.1,
            "BS": 11.68,
            "FNST": 73.83,
            "MWST": 38.06,
            "FTST": 17.92,
            "WWST": 14.87,
            "BSST": 13.02
        }
    }, {
        "id": 899,
        "collectionId": 57,
        "type": "weapon",
        "weaponName": "Glock-18",
        "skinName": "Neo-Noir",
        "rarity": "covert",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbaqKAxf0Ob3djFN79eJmo-Chcj4OrzZglRd6dd2j6fCrN_x2Fe2rRJrZW6nJdCdcARvZFuFqAftkO67gJHquZ7LyXpr6SQq-z-DyI0SmLqC",
        "prices": {
            "FN": 42.49,
            "MW": 17.57,
            "FT": 8.9,
            "WW": 6.53,
            "BS": 5.44,
            "FNST": 152.33,
            "MWST": 57.12,
            "FTST": 26.47,
            "WWST": 18.73,
            "BSST": 15.83
        }
    }, {
        "id": 900,
        "collectionId": 57,
        "type": "weapon",
        "weaponName": "M4A1-S",
        "skinName": "Printstream",
        "rarity": "covert",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO1gb-Gw_alIITBhGJf_NZlmOzA-LP5gVO8vywwMiukcZice1M9ZViD-ATrle7v15O46cifzHFhunZ243yInxW-10sZOrBp1qTLVxzAUNxEoFAP",
        "prices": {
            "FN": 486.83,
            "MW": 282.7,
            "FT": 170.68,
            "WW": 143.31,
            "BS": 100.2,
            "FNST": 869.3,
            "MWST": 438.02,
            "FTST": 264.41,
            "WWST": 205.67,
            "BSST": 156.32
        }
    }, {
        "id": 901,
        "collectionId": 57,
        "type": "weapon",
        "weaponName": "Rare",
        "skinName": "★ Gloves ★",
        "rarity": "gold",
        "image": "./assets/rare-item.png"
    }, 

    // Snakebite Case
    {
        "id": 902,
        "collectionId": 58,
        "type": "weapon",
        "weaponName": "UMP-45",
        "skinName": "Oscillator",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo7e1f1Jf0v73ZDBSuImJkYyOlOPmPKzQgG5u5Mx2gv3--Y3nj1H68ks-ZTj2JoeUIAc3Mw6FrwLsx-e7hZ7v75qcmydlvygmtimLnBC01wYMMLLb9wWKMQ",
        "prices": {
            "FN": 0.35,
            "MW": 0.18,
            "FT": 0.1,
            "WW": 0.1,
            "BS": 0.11,
            "FNST": 1.26,
            "MWST": 0.62,
            "FTST": 0.33,
            "WWST": 0.29,
            "BSST": 0.32
        }
    }, {
        "id": 903,
        "collectionId": 58,
        "type": "weapon",
        "weaponName": "Nova",
        "skinName": "Windblown",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpouLWzKjhzw8zGfitD08u_moS0k_7nI77DhWpd18l4jeHVyoD0mlOx5UptZm-nIdeXcgBrYQ3UqFW5l-bugcTp6ZSbzyBmvnFx5S7cmUe2hBFSLrs4oxm_23A",
        "prices": {
            "FN": 0.36,
            "MW": 0.18,
            "FT": 0.1,
            "WW": 0.12,
            "BS": 0.11,
            "FNST": 1.29,
            "MWST": 0.62,
            "FTST": 0.33,
            "WWST": 0.3,
            "BSST": 0.3
        }
    }, {
        "id": 904,
        "collectionId": 58,
        "type": "weapon",
        "weaponName": "M249",
        "skinName": "O.S.I.P.R.",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-jxcjhnwMzFI2kb09-5mYKCmfLLP7LWnn9u5MRjjeyPo4qt3wbgrhVkam_2JIDAJlM-aFrVq1W8xLq-hZO1upSfyHsy63Z2tmGdwUIJtswwdA",
        "prices": {
            "FN": 0.39,
            "MW": 0.19,
            "FT": 0.1,
            "WW": 0.11,
            "BS": 0.1,
            "FNST": 1.29,
            "MWST": 0.6,
            "FTST": 0.32,
            "WWST": 0.3,
            "BSST": 0.28
        }
    }, {
        "id": 905,
        "collectionId": 58,
        "type": "weapon",
        "weaponName": "R8 Revolver",
        "skinName": "Junk Yard",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopL-zJAt21uH3di59_oSJhpWYg_z9PbzummJW4NFOhujT8om73Qbg_kJrazqlLILAc1RoaQzX_QTsxr_s0MW9tcnIyXoyvSAj5n6JnAv330-b64w-6g",
        "prices": {
            "FN": 0.44,
            "MW": 0.18,
            "FT": 0.11,
            "WW": 0.11,
            "BS": 0.1,
            "FNST": 1.65,
            "MWST": 0.6,
            "FTST": 0.33,
            "WWST": 0.29,
            "BSST": 0.3
        }
    }, {
        "id": 906,
        "collectionId": 58,
        "type": "weapon",
        "weaponName": "CZ75-Auto",
        "skinName": "Circaetus",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotaDyfgZf0Ob3cicVueOhnImZm-D9Pb_ummJW4NFOhujT8om70ALi-0prZGn0IICTdwNtYl3QqAO5k-7ngse0752fyCRi6CUnsX_cyQv330-K5zDKuQ",
        "prices": {
            "FN": 0.46,
            "MW": 0.19,
            "FT": 0.11,
            "WW": 0.11,
            "BS": 0.1,
            "FNST": 1.6,
            "MWST": 0.62,
            "FTST": 0.31,
            "WWST": 0.28,
            "BSST": 0.28
        }
    }, {
        "id": 907,
        "collectionId": 58,
        "type": "weapon",
        "weaponName": "SG 553",
        "skinName": "Heavy Metal",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopb3wflFf1OD3YjoXuY-JkIWKg__5Nq_QmlRd4cJ5ntbN9J7yjRq3_0JsZ2inJdeTew49aQzTqFe4l-zuhZW-vpjNyXRl73F3tHeLyhG2n1gSOQK8z5S-",
        "prices": {
            "FN": 0.47,
            "MW": 0.18,
            "FT": 0.1,
            "WW": 0.1,
            "BS": 0.11,
            "FNST": 1.71,
            "MWST": 0.6,
            "FTST": 0.32,
            "WWST": 0.28,
            "BSST": 0.28
        }
    }, {
        "id": 908,
        "collectionId": 58,
        "type": "weapon",
        "weaponName": "Glock-18",
        "skinName": "Clear Polymer",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbaqKAxf1OD3djFN79eJhI-HjvrxIYTdn2xZ_Pp9i_vG8MKsiQHiqUJpMWuncdPEdw46ZgrQ8lO-kuu-0Z-0vs7Izntl6XMqsH-OgVXp1pCcljBx",
        "prices": {
            "FN": 0.72,
            "MW": 0.19,
            "FT": 0.11,
            "WW": 0.1,
            "BS": 0.1,
            "FNST": 3.28,
            "MWST": 0.82,
            "FTST": 0.35,
            "WWST": 0.31,
            "BSST": 0.3
        }
    }, {
        "id": 909,
        "collectionId": 58,
        "type": "weapon",
        "weaponName": "Negev",
        "skinName": "dev_texture",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpouL-iLhFf0Ob3fzhF6cqJkIWdg_LsJ67Dk1Rd4cJ5ntbN9J7yjRq1-xBqNWuld9TEIQ9qZV_TrlbsyLrvgZO-u5rKwXZg6SIq4XnVnEC0n1gSOdjW9rAC",
        "prices": {
            "FN": 1.17,
            "MW": 0.67,
            "FT": 0.37,
            "WW": 0.33,
            "BS": 0.3,
            "FNST": 3.03,
            "MWST": 1.19,
            "FTST": 0.52,
            "WWST": 0.48,
            "BSST": 0.44
        }
    }, {
        "id": 910,
        "collectionId": 58,
        "type": "weapon",
        "weaponName": "MAC-10",
        "skinName": "Button Masher",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7umeldf0Ob3fDxBvYyJhI-Zg_b2P77ummJW4NFOhujT8om7jACx8kRtYW6iLYTAIVRvYFrY8lXrxL-5hZ6_7czBzXRrvyQq4y3elgv330_bBVmBuA",
        "prices": {
            "FN": 1.18,
            "MW": 0.64,
            "FT": 0.36,
            "WW": 0.32,
            "BS": 0.31,
            "FNST": 2.87,
            "MWST": 1.14,
            "FTST": 0.54,
            "WWST": 0.46,
            "BSST": 0.43
        }
    }, {
        "id": 911,
        "collectionId": 58,
        "type": "weapon",
        "weaponName": "P250",
        "skinName": "Cyber Shell",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopujwezhnwMzYI2gS09-vloWZhP_xP7fummJW4NFOhujT8om70VLk_0NkMD2mLI-dJlI2YF7Q81S6wL_n0JC06svInyQ2siEh53-Lywv3309nhbYnfQ",
        "prices": {
            "FN": 1.24,
            "MW": 0.69,
            "FT": 0.38,
            "WW": 0.35,
            "BS": 0.33,
            "FNST": 2.92,
            "MWST": 1.33,
            "FTST": 0.48,
            "WWST": 0.87,
            "BSST": 0.48
        }
    }, {
        "id": 912,
        "collectionId": 58,
        "type": "weapon",
        "weaponName": "Desert Eagle",
        "skinName": "Trigger Discipline",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposr-kLAtl7PDdTjlH7duJgJKCkPDxIYTVn3hS4dV9g-fEyoD8j1yglB89IT6mOo_BegA_ZFHU_we-xue6hsC76czBzSFmvSJ0sXzZmxW_100ZaOZrhKaACQLJyKyK7VI",
        "prices": {
            "FN": 3.01,
            "MW": 1.16,
            "FT": 0.45,
            "WW": 0.3,
            "BS": 0.27,
            "FNST": 10.5,
            "MWST": 4.69,
            "FTST": 2.03,
            "WWST": 1.69,
            "BSST": 1.46
        }
    }, {
        "id": 913,
        "collectionId": 58,
        "type": "weapon",
        "weaponName": "XM1014",
        "skinName": "XOXO",
        "rarity": "classified",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgporrf0e1Y07PLZTiVPvYznwL-bgvn_DLfYkWNF18lwmO7Eu9T23lG2_hE_NWvwIIeSewE_YgnV-AO_kOu6h5Tvupmay3MwvyIi5XjD30vg9oIGPLs",
        "prices": {
            "FN": 8.15,
            "MW": 3.07,
            "FT": 1.59,
            "WW": 1.51,
            "BS": 1.4,
            "FNST": 20.21,
            "MWST": 7.17,
            "FTST": 3.23,
            "WWST": 3.12,
            "BSST": 2.44
        }
    }, {
        "id": 914,
        "collectionId": 58,
        "type": "weapon",
        "weaponName": "MP9",
        "skinName": "Food Chain",
        "rarity": "classified",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6r8FAR17P7YKAJE49Oyq4ODlv76DLfYkWNF18lwmO7Eu9mt0QGy_xA_a2_3J46SIwA_MFvX8lK6xu7vhpHpusidyHtmuXYlsSnD30vgbTUHI8E",
        "prices": {
            "FN": 8.29,
            "MW": 3.58,
            "FT": 1.75,
            "WW": 1.4,
            "BS": 1.38,
            "FNST": 26.33,
            "MWST": 9.16,
            "FTST": 4.2,
            "WWST": 2.95,
            "BSST": 2.3
        }
    }, {
        "id": 915,
        "collectionId": 58,
        "type": "weapon",
        "weaponName": "Galil AR",
        "skinName": "Chromatic Aberration",
        "rarity": "classified",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbupIgthwczLZAJF7dC_mL-In-X7PrruhmJf4_p9g-7J4bP5iUazrl05YWCgdo6WelJrYA6D_FK_ybrsg8PovsnOy3Rg6Cd0tiqLnhXmhUxEcKUx0gvh2894",
        "prices": {
            "FN": 10.13,
            "MW": 4.23,
            "FT": 1.92,
            "WW": 1.43,
            "BS": 1.38,
            "FNST": 26.8,
            "MWST": 10.65,
            "FTST": 4.75,
            "WWST": 2.92,
            "BSST": 2.45
        }
    }, {
        "id": 916,
        "collectionId": 58,
        "type": "weapon",
        "weaponName": "AK-47",
        "skinName": "Slate",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhnwMzJemkV08ykm4aOhOT9PLXQmlRd4cJ5ntbN9J7yjRqw-0o4ZWvwcIbEdQQ7Ml7Tr1nvwufvgMC6us-bmHZi6HEgsCvYlkC_n1gSOasHEuYf",
        "prices": {
            "FN": 10.37,
            "MW": 4.78,
            "FT": 2.86,
            "WW": 2.69,
            "BS": 2.66,
            "FNST": 38.38,
            "MWST": 16.29,
            "FTST": 9.96,
            "WWST": 9.51,
            "BSST": 9.33
        }
    }, {
        "id": 917,
        "collectionId": 58,
        "type": "weapon",
        "weaponName": "M4A4",
        "skinName": "In Living Color",
        "rarity": "covert",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhjxszFJTwW09C5goW0m_7zO6_ummpD78A_3--W89r02wTs_hI5NzrydY6SelJqYFjY8lC_xeq6gp61tMzLnSBg7j5iuyjjy9o9kg",
        "prices": {
            "FN": 33.42,
            "MW": 9.44,
            "FT": 3.45,
            "WW": 5.03,
            "BS": 3.08,
            "FNST": 74.62,
            "MWST": 27.04,
            "FTST": 8.55,
            "WWST": 16.65,
            "BSST": 8.79
        }
    }, {
        "id": 918,
        "collectionId": 58,
        "type": "weapon",
        "weaponName": "USP-S",
        "skinName": "The Traitor",
        "rarity": "covert",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo6m1FBRp3_bGcjhQ09ulq5WYh-TLO7rfkW5V5cR_teXI8oTht1i1uRQ5fTjzJY6cclBqNArY-VK7xe3o0cC77cvPz3Zi6ydw4Snbyhfh0ksdbeFxxavJpJcZ4v4",
        "prices": {
            "FN": 59.01,
            "MW": 27.68,
            "FT": 16.22,
            "WW": 12.33,
            "BS": 12.07,
            "FNST": 211.25,
            "MWST": 74.51,
            "FTST": 42.11,
            "WWST": 34.13,
            "BSST": 29.5
        }
    }, {
        "id": 919,
        "collectionId": 58,
        "type": "weapon",
        "weaponName": "Rare",
        "skinName": "★ Gloves ★",
        "rarity": "gold",
        "image": "./assets/rare-item.png"
    },

    // Operation Riptide Case
    {
        "id": 920,
        "collectionId": 59,
        "type": "weapon",
        "weaponName": "G3SG1",
        "skinName": "Keeping Tabs",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposem2LFZf0Ob3dm5R642JgIGIg_73Mrfcl3tu5Mx2gv3--Y3nj1H6qEJvZ2mnJIKUdAdtYF-G_lntl-7vjJftuZ-fz3Zq6SF37C2Jl0GzgAYMMLJX-ZcVpA",
        "prices": {
            "FN": 0.48,
            "MW": 0.28,
            "FT": 0.14,
            "WW": 0.15,
            "BS": 0.12,
            "FNST": 1.74,
            "MWST": 0.67,
            "FTST": 0.3,
            "WWST": 0.41,
            "BSST": 0.24
        }
    }, {
        "id": 921,
        "collectionId": 59,
        "type": "weapon",
        "weaponName": "PP-Bizon",
        "skinName": "Lumen",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLO_JAlf1OD3czRY49KJkoyKhP_xIYTdn2xZ_Pp9i_vG8ML02gTkr0ZuYmqnIdDAe1A8NF_UqFTtkOu9jMXptMicm3U273UmsXqLgVXp1pZUfEB1",
        "prices": {
            "FN": 0.56,
            "MW": 0.29,
            "FT": 0.14,
            "WW": 0.17,
            "BS": 0.12,
            "FNST": 2.12,
            "MWST": 0.91,
            "FTST": 0.32,
            "WWST": 0.74,
            "BSST": 0.23
        }
    }, {
        "id": 922,
        "collectionId": 59,
        "type": "weapon",
        "weaponName": "AUG",
        "skinName": "Plague",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot6-iFABz7PLddgJS4N2xgYW0m_7zO6_ummpD78A_jr7Cpd332FHgrkE-MGimLI-VIVA9aF7V8la6l7-7jce97s_LziNivT5iuyg_4N-24A",
        "prices": {
            "FN": 0.59,
            "MW": 0.27,
            "FT": 0.13,
            "WW": 0.24,
            "BS": 0.13,
            "FNST": 2.22,
            "MWST": 0.9,
            "FTST": 0.3,
            "WWST": 0.82,
            "BSST": 0.29
        }
    }, {
        "id": 923,
        "collectionId": 59,
        "type": "weapon",
        "weaponName": "MP7",
        "skinName": "Guerrilla",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6ryFAR17P7YJgJJ5N29nb-HnvD8J4Tdl3lW7Yty0-_DrN7zjVex-xVoYWzwJo7AcFU7MlCD_1K4wu7t0MK-6M-an3tqpGB8shj3ZA9m",
        "prices": {
            "FN": 0.65,
            "MW": 0.3,
            "FT": 0.13,
            "WW": 0.12,
            "BS": 0.12,
            "FNST": 2.43,
            "MWST": 0.74,
            "FTST": 0.34,
            "WWST": 0.22,
            "BSST": 0.23
        }
    }, {
        "id": 924,
        "collectionId": 59,
        "type": "weapon",
        "weaponName": "Dual Berettas",
        "skinName": "Tread",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpos7asPwJf1OD3dShD4OO0kZKOg-P1IITFhG5Q7Pp9g-7J4bP5iUazrl0_Z2GlIdKSegVqNVCG81DqkLy508XoupmanXA3syUk7H-PnBW-0k1JcKUx0vWbc5pz",
        "prices": {
            "FN": 0.65,
            "MW": 0.28,
            "FT": 0.22,
            "WW": 0.16,
            "BS": 0.14,
            "FNST": 2.21,
            "MWST": 0.68,
            "FTST": 0.33,
            "WWST": 0.23,
            "BSST": 0.28
        }
    }, {
        "id": 925,
        "collectionId": 59,
        "type": "weapon",
        "weaponName": "XM1014",
        "skinName": "Watchdog",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgporrf0e1Y07PTbTiVPvYznwL-cluP3O7_ekVRd4cJ5ntbN9J7yjRrh_0dvYmD1IIeRIQY-MF3XqFO4lee-05O86JmYzncyuSV2sXeJzUG_n1gSOXXpxQhR",
        "prices": {
            "FN": 1.47,
            "MW": 0.39,
            "FT": 0.16,
            "WW": 0.13,
            "BS": 0.13,
            "FNST": 6.23,
            "MWST": 1.07,
            "FTST": 0.44,
            "WWST": 0.27,
            "BSST": 0.26
        }
    }, {
        "id": 926,
        "collectionId": 59,
        "type": "weapon",
        "weaponName": "MAG-7",
        "skinName": "BI83 Spectrum",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7uifDhnwMzFcDoV096_h42eg__LP7LWnn9u5MRjjeyP89nxjgHtqUZsYW2hJoXEc1VvYFDX81m7k-npgJbpv57OmCY36yRw4WGdwUIvxsZ5iw",
        "prices": {
            "FN": 2.24,
            "MW": 1.41,
            "FT": 0.73,
            "WW": 0.71,
            "BS": 0.64,
            "FNST": 5.95,
            "MWST": 3.47,
            "FTST": 1.49,
            "WWST": 1.49,
            "BSST": 1.22
        }
    }, {
        "id": 927,
        "collectionId": 59,
        "type": "weapon",
        "weaponName": "Five-SeveN",
        "skinName": "Boost Protocol",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLOzLhRlxfbGTjpR09q_goW0hPLiNrXuk21E-8x-hNbN_Iv9nGu4qgE7Nnf0LNWRdlQ4aAmC_lG6xOi9jJa-u5SYnXJhvyIm43yIlkHiiRlKO-Jnm7XAHvwFf_gW",
        "prices": {
            "FN": 2.39,
            "MW": 1.45,
            "FT": 0.87,
            "WW": 1.11,
            "FNST": 6.54,
            "MWST": 3.74,
            "FTST": 2.25,
            "WWST": 3.01
        }
    }, {
        "id": 928,
        "collectionId": 59,
        "type": "weapon",
        "weaponName": "USP-S",
        "skinName": "Black Lotus",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo6m1FBRp3_bGcjhQ09-jq5WYh8j2P7rSnVRd59FkmdbN_Iv9nGu4qgE7NnenIIbBJwM6M17Xr1O7xObohMe-7Z7ImHNm7ygl5CrVyxS_hBhIZ7A-m7XAHq9Yk5td",
        "prices": {
            "FN": 3.62,
            "MW": 1.03,
            "FT": 0.65,
            "WW": 0.67,
            "BS": 0.61,
            "FNST": 17.81,
            "MWST": 4.07,
            "FTST": 2.25,
            "WWST": 2.07,
            "BSST": 2
        }
    }, {
        "id": 929,
        "collectionId": 59,
        "type": "weapon",
        "weaponName": "FAMAS",
        "skinName": "ZX Spectron",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLuoKhRf0Ob3dzxP7c-Jh5COlOPmPLXummJW4NFOhujT8om73Qbl-RI-YmH7cdWSJgM6M13VrlW8ye68hsS5vJWbyHMxu3Yn43iIywv330-_qT0VMw",
        "prices": {
            "FN": 5.34,
            "MW": 2.17,
            "FT": 1.17,
            "WW": 0.95,
            "BS": 0.92,
            "FNST": 18.01,
            "MWST": 5.57,
            "FTST": 2.84,
            "WWST": 2.28,
            "BSST": 2.24
        }
    }, {
        "id": 930,
        "collectionId": 59,
        "type": "weapon",
        "weaponName": "M4A4",
        "skinName": "Spider Lily",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhnwMzFJQJE4NOhkZKYqPv9NLPFqWdQ-sJ0xLCYoN-t3gDn-UU9N236IdOWcFQ2ZF2BqVW7lefphpC77pzNwCA2syA8pSGKXgX3GQ4",
        "prices": {
            "FN": 5.86,
            "MW": 1.62,
            "FT": 0.76,
            "WW": 0.63,
            "BS": 0.56,
            "FNST": 21.72,
            "MWST": 5.08,
            "FTST": 2.07,
            "WWST": 2.1,
            "BSST": 2.19
        }
    }, {
        "id": 931,
        "collectionId": 59,
        "type": "weapon",
        "weaponName": "MP9",
        "skinName": "Mount Fuji",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6r8FAZh7P7YKAJE-da_q5CCmfzLP7LWnn9u5MRjjeyPoI-iilLk_hU6Y2ynLITGcQJsZwzX-wC9kL_mgpO_u8jMzCE26SklsGGdwULurTqCeA",
        "prices": {
            "FN": 6.1,
            "MW": 3.28,
            "FT": 1.14,
            "WW": 1.03,
            "BS": 0.89,
            "FNST": 12.24,
            "MWST": 5.97,
            "FTST": 2.2,
            "WWST": 1.87,
            "BSST": 1.48
        }
    }, {
        "id": 932,
        "collectionId": 59,
        "type": "weapon",
        "weaponName": "MAC-10",
        "skinName": "Toybox",
        "rarity": "classified",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7umeldf0Ob3fDxBvYyJgI-SlfjsDLfYkWNF18lwmO7Eu9zwiVXh-UM-YG6gI9KQcVNqYg2G_1W_lOvm0ZS_vJ7OyHYwvXUg5CvD30vgnb5BE34",
        "prices": {
            "FN": 9.81,
            "MW": 4.92,
            "FT": 3.09,
            "WW": 2.39,
            "BS": 2.1,
            "FNST": 31.07,
            "MWST": 12.56,
            "FTST": 5.74,
            "WWST": 4.19,
            "BSST": 3.54
        }
    }, {
        "id": 933,
        "collectionId": 59,
        "type": "weapon",
        "weaponName": "SSG 08",
        "skinName": "Turbo Peek",
        "rarity": "classified",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopamie19f0Ob3Yi5F09OgkZKflvzxDLfYkWNF18lwmO7Eu9qn2gLl-0Zta2j7cdSXc1A_Yg3X8lPtlerm1JW_tZrJynRj6CQn7X7D30vgp4shdZk",
        "prices": {
            "FN": 11.01,
            "MW": 5.9,
            "FT": 3.74,
            "WW": 3.56,
            "BS": 3.22,
            "FNST": 37.06,
            "MWST": 19.33,
            "FTST": 8.29,
            "WWST": 8.1,
            "BSST": 6.26
        }
    }, {
        "id": 934,
        "collectionId": 59,
        "type": "weapon",
        "weaponName": "Glock-18",
        "skinName": "Snack Attack",
        "rarity": "classified",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbaqKAxf0Ob3djFN79eJh46KlPz1J6_QlWBu5Mx2gv3--Y3nj1H6-kdpN2H1J4GUdlBsYQ6E_Ae5x-i605S06p7PynswunV0sSqJmhW2iQYMMLKO7TPsAg",
        "prices": {
            "FN": 14.82,
            "MW": 5.7,
            "FT": 3.32,
            "WW": 2.95,
            "BS": 2.84,
            "FNST": 53.45,
            "MWST": 17.93,
            "FTST": 8.28,
            "WWST": 6.44,
            "BSST": 5.97
        }
    }, {
        "id": 935,
        "collectionId": 59,
        "type": "weapon",
        "weaponName": "AK-47",
        "skinName": "Leet Museo",
        "rarity": "covert",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhnwMzJemkV0920h5SZlvTgDLfYkWNF18lwmO7Eu4-ljVe1-RI-YzqmcYTGdAY6aFmC8wO4xe3qjcC7vsyczXFqsnUl7S7D30vgp4yMCZE",
        "prices": {
            "FN": 48.94,
            "MW": 27.31,
            "FT": 19.14,
            "WW": 19.78,
            "BS": 17.71,
            "FNST": 117.13,
            "MWST": 71.38,
            "FTST": 43.41,
            "WWST": 47.62,
            "BSST": 39.5
        }
    }, {
        "id": 936,
        "collectionId": 59,
        "type": "weapon",
        "weaponName": "Desert Eagle",
        "skinName": "Ocean Drive",
        "rarity": "covert",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposr-kLAtl7PDdTjlH7du6kb-AnuP3O4Tdn2xZ_Pp9i_vG8MKljFLtqUZuZ2-nJoGSegBsZVnT_FW8l-u51p-5tcvKziZrsikgtnyMgVXp1v8LytPO",
        "prices": {
            "FN": 91.55,
            "MW": 38.38,
            "FT": 19.02,
            "WW": 13.9,
            "BS": 11.19,
            "FNST": 230.68,
            "MWST": 90.59,
            "FTST": 42.96,
            "WWST": 30.03,
            "BSST": 25.37
        }
    }, {
        "id": 937,
        "collectionId": 59,
        "type": "weapon",
        "weaponName": "Rare",
        "skinName": "Special Item",
        "rarity": "gold",
        "image": "./assets/rare-item.png"
    },

    // Dreams & Nightmares Case
    {
        "id": 938,
        "collectionId": 60,
        "type": "weapon",
        "weaponName": "SCAR-20",
        "skinName": "Poultrygeist",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopbmkOVUw7ODYTi5B7c6Jl4iClPzxPb3YkWNF18l4jeHVyoD0mlOx5RFvYT-ncYSSJAZoZV3U_1fsxb3u0JPqvJnAmydl7CQmtyzVmRG-0x9SLrs4w6klS8s",
        "prices": {
            "FN": 0.25,
            "MW": 0.14,
            "FT": 0.08,
            "WW": 0.08,
            "BS": 0.1,
            "FNST": 0.82,
            "MWST": 0.5,
            "FTST": 0.23,
            "WWST": 0.25,
            "BSST": 0.3
        }
    }, {
        "id": 939,
        "collectionId": 60,
        "type": "weapon",
        "weaponName": "MAG-7",
        "skinName": "Foresight",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7uifDhjxszFcDoV08ykkYSClOP7IYTdn2xZ_Pp9i_vG8MKh2wXj-Ec_MjzyIIfBcgBvY1iGq1K4wOu7hp7pv8_IzCFkuigk5X2MgVXp1pgXBZ4a",
        "prices": {
            "FN": 0.25,
            "MW": 0.15,
            "FT": 0.08,
            "WW": 0.1,
            "BS": 0.11,
            "FNST": 0.87,
            "MWST": 0.49,
            "FTST": 0.24,
            "WWST": 0.29,
            "BSST": 0.31
        }
    }, {
        "id": 940,
        "collectionId": 60,
        "type": "weapon",
        "weaponName": "Sawed-Off",
        "skinName": "Spirit Board",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopbuyLgNv1fX3cih9_92hkYSEkfHLPK7YnGpu5Mx2gv3--Y3nj1H6_Eo5NmjwLIGTcQE6NwnRrAW8l-7r18PttJnIy3YwuCYnsy3YmhG3hgYMMLKc7wSu3A",
        "prices": {
            "FN": 0.29,
            "MW": 0.14,
            "FT": 0.08,
            "WW": 0.08,
            "BS": 0.11,
            "FNST": 1.05,
            "MWST": 0.43,
            "FTST": 0.23,
            "WWST": 0.22,
            "BSST": 0.32
        }
    }, {
        "id": 941,
        "collectionId": 60,
        "type": "weapon",
        "weaponName": "P2000",
        "skinName": "Lifted Spirits",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovrG1eVcwg8zLZAJSvteJkoySnvnzDL_Dk2pc18l4jeHVyoD0mlOx5Rc-YmqnIdKTcQNrZlqB_wK4leu-15G4vszPnyNg6yF3tnvcnRyzgR1SLrs4oNFBqs8",
        "prices": {
            "FN": 0.29,
            "MW": 0.14,
            "FT": 0.09,
            "WW": 0.08,
            "BS": 0.12,
            "FNST": 1.07,
            "MWST": 0.46,
            "FTST": 0.24,
            "WWST": 0.25,
            "BSST": 0.33
        }
    }, {
        "id": 942,
        "collectionId": 60,
        "type": "weapon",
        "weaponName": "MP5-SD",
        "skinName": "Necro Jr.",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6rwOANf1OD3fC0X09e_kL-FkvTmPLXem2JS58tOhuDG_ZjKhFWmrBZya273IIWddQdrY1HZ_lntley80Me-uM7JyCA3uCQjt3zbnRbiiBkYOvsv26JVcvImbA",
        "prices": {
            "FN": 0.38,
            "MW": 0.14,
            "FT": 0.09,
            "WW": 0.08,
            "BS": 0.11,
            "FNST": 1.82,
            "MWST": 0.5,
            "FTST": 0.26,
            "WWST": 0.24,
            "BSST": 0.35
        }
    }, {
        "id": 943,
        "collectionId": 60,
        "type": "weapon",
        "weaponName": "Five-SeveN",
        "skinName": "Scrawl",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLOzLhRlxfbGTj5X09q_goWYkuHxPYTQmntZ6fp-h-zG9LP5gVO8vywwMiukcZiTew5qYViE_1K4w--8hMS-v5jBz3dm63F0s3uLmBe-00tMO7FphvWeVxzAUFFwYKtp",
        "prices": {
            "FN": 0.41,
            "MW": 0.14,
            "FT": 0.09,
            "WW": 0.08,
            "BS": 0.13,
            "FNST": 2.27,
            "MWST": 0.6,
            "FTST": 0.3,
            "WWST": 0.28,
            "BSST": 0.32
        }
    }, {
        "id": 944,
        "collectionId": 60,
        "type": "weapon",
        "weaponName": "MAC-10",
        "skinName": "Ensnared",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7umeldf0Ob3fDxBvYyJhImTnvLLP7LWnn9u5MRjjeyPp9qs3QSx-EM5NW6mI4LAdA83Y1iE_Fa3x-u8gZa17pWbwXpquiJx7WGdwULwMeB_qg",
        "prices": {
            "FN": 0.64,
            "MW": 0.16,
            "FT": 0.09,
            "WW": 0.09,
            "BS": 0.12,
            "FNST": 2.52,
            "MWST": 0.7,
            "FTST": 0.3,
            "WWST": 0.29,
            "BSST": 0.32
        }
    }, {
        "id": 945,
        "collectionId": 60,
        "type": "weapon",
        "weaponName": "XM1014",
        "skinName": "Zombie Offensive",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgporrf0e1Y07PLFTiVP08a5mYKCksj7Nb3UmHhY_sBOhuDG_ZjKhFWmrBZyYzzyIdKTe1BsN1GC-QW3wrzugcC5uMvBzCQysiRwti3Zmka_1xxFO_sv26IMuXvssQ",
        "prices": {
            "FN": 1.28,
            "MW": 0.67,
            "FT": 0.39,
            "WW": 0.33,
            "BS": 0.32,
            "FNST": 3,
            "MWST": 1.14,
            "FTST": 0.58,
            "WWST": 0.48,
            "BSST": 0.5
        }
    }, {
        "id": 946,
        "collectionId": 60,
        "type": "weapon",
        "weaponName": "G3SG1",
        "skinName": "Dream Glade",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposem2LFZf0Ob3dm5R642Jk4yKk_LLP7LWnn9u5MRjjeyPrN_w2QPi80ZrYmHwJYWTJAI5YwvY-wO5xO3shJ--tcnOm3di7iNzsWGdwUKZjxvmOg",
        "prices": {
            "FN": 1.51,
            "MW": 0.75,
            "FT": 0.38,
            "WW": 0.33,
            "BS": 0.31,
            "FNST": 3.96,
            "MWST": 1.3,
            "FTST": 0.57,
            "WWST": 0.46,
            "BSST": 0.46
        }
    }, {
        "id": 947,
        "collectionId": 60,
        "type": "weapon",
        "weaponName": "PP-Bizon",
        "skinName": "Space Cat",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLO_JAlf0Ob3czRY49KJh5CKlPL3Mq_ummJW4NFOhujT8om7iwa38hE-NWD3LdWRIFJoYwuF-VC5wr27h5K4u5jMwHNkvScj4yuJnAv330-6Hkec3g",
        "prices": {
            "FN": 1.51,
            "MW": 0.9,
            "FT": 0.42,
            "WW": 0.37,
            "BS": 0.33,
            "FNST": 3.69,
            "MWST": 2,
            "FTST": 0.69,
            "WWST": 0.68,
            "BSST": 0.51
        }
    }, {
        "id": 948,
        "collectionId": 60,
        "type": "weapon",
        "weaponName": "USP-S",
        "skinName": "Ticket to Hell",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo6m1FBRp3_bGcjhQ09-jq5WYh8jgPITZk2dd18l4jeHVyoD0mlOx5UJvamjxcteUcQ9oY1jV_we5lO3vgZLtvp7NmCZiuyFwty2OyhCziU5SLrs4xNicnZY",
        "prices": {
            "FN": 3.11,
            "MW": 1.57,
            "FT": 0.77,
            "WW": 1.23,
            "BS": 0.5,
            "FNST": 14.08,
            "MWST": 6.67,
            "FTST": 2.93,
            "WWST": 4.54,
            "BSST": 1.87
        }
    }, {
        "id": 949,
        "collectionId": 60,
        "type": "weapon",
        "weaponName": "M4A1-S",
        "skinName": "Night Terror",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uOxh7-Gw_alIITYmHhe5ct4i9bN_Iv9nGu4qgE7NnfxIoPAdFNsaV7Wrla7wL2-05Lu7sjOn3owsnIk5yrZnxXkhE5Mb-Jqm7XAHrs5PyMk",
        "prices": {
            "FN": 3.73,
            "MW": 2.44,
            "FT": 1.94,
            "WW": 3.09,
            "BS": 4.65,
            "FNST": 13.08,
            "MWST": 7.6,
            "FTST": 6.13,
            "WWST": 9.45,
            "BSST": 13.23
        }
    }, {
        "id": 950,
        "collectionId": 60,
        "type": "weapon",
        "weaponName": "FAMAS",
        "skinName": "Rapid Eye Movement",
        "rarity": "classified",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLuoKhRf1OD3dzxP7c-JhoGbnvPLNqLUhVRd4cJ5ntbN9J7yjRrsqkJqZTz1cIWTcwQ_M1nWrgXqku_u15_t78zAzSZm6SUm5C3dzRCxn1gSObQrE_CU",
        "prices": {
            "FN": 10.92,
            "MW": 5.4,
            "FT": 2.69,
            "WW": 1.96,
            "BS": 1.55,
            "FNST": 25.82,
            "MWST": 10.27,
            "FTST": 4.81,
            "WWST": 3.26,
            "BSST": 2.48
        }
    }, {
        "id": 951,
        "collectionId": 60,
        "type": "weapon",
        "weaponName": "Dual Berettas",
        "skinName": "Melondrama",
        "rarity": "classified",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpos7asPwJf0Ob3dDFL-Nmlq4KOgPbmNoTdn2xZ_Pp9i_vG8MKmiQDh-kRsYmmmJoWScwU4N1GDqQC7kuvmhsTp6cmdwHYyuHEitH7YgVXp1r6aPbAJ",
        "prices": {
            "FN": 11.27,
            "MW": 5.33,
            "FT": 2.77,
            "WW": 2.05,
            "BS": 1.59,
            "FNST": 27.43,
            "MWST": 10.6,
            "FTST": 5.08,
            "WWST": 3.47,
            "BSST": 2.92
        }
    }, {
        "id": 952,
        "collectionId": 60,
        "type": "weapon",
        "weaponName": "MP7",
        "skinName": "Abyssal Apparition",
        "rarity": "classified",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6ryFAR17P7YJgJE6d2kq4yCkP_gDLfQhGxUppQmjL-RrY_w3wSy_0c9NWn6d4fEewRtZFzR_lK-ye7rgZS17cjLnXR9-n51k7vdI74",
        "prices": {
            "FN": 11.34,
            "MW": 5.13,
            "FT": 2.65,
            "WW": 1.99,
            "BS": 1.48,
            "FNST": 24.82,
            "MWST": 9.66,
            "FTST": 4.62,
            "WWST": 3.24,
            "BSST": 2.39
        }
    }, {
        "id": 953,
        "collectionId": 60,
        "type": "weapon",
        "weaponName": "MP9",
        "skinName": "Starlight Protector",
        "rarity": "covert",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6r8FABz7P7YKAJR-N2kmImMn-PLP7LWnn9u5MRjjeyPotXx2g3h_UM_ZGigINTEdw88aVrUqVDvwLvs1J69u5-amnVhvClwsGGdwUKxD8sm0Q",
        "prices": {
            "FN": 41.97,
            "MW": 20.16,
            "FT": 8.01,
            "WW": 7.17,
            "BS": 3.89,
            "FNST": 107.92,
            "MWST": 44.19,
            "FTST": 16.82,
            "WWST": 15.96,
            "BSST": 8.86
        }
    }, {
        "id": 954,
        "collectionId": 60,
        "type": "weapon",
        "weaponName": "AK-47",
        "skinName": "Nightwish",
        "rarity": "covert",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV09K_k4ifgP7nO4Tdn2xZ_Pp9i_vG8MKliwDh80I-Nmn6INOXIFI5YlqCrwK_ybu90cfovsvOyCBiuiEqtCnfgVXp1iNhGu0F",
        "prices": {
            "FN": 144.69,
            "MW": 68.92,
            "FT": 33.22,
            "WW": 21.53,
            "BS": 13.78,
            "FNST": 311.17,
            "MWST": 138.48,
            "FTST": 61.42,
            "WWST": 43.18,
            "BSST": 29.97
        }
    }, {
        "id": 955,
        "collectionId": 60,
        "type": "weapon",
        "weaponName": "Rare",
        "skinName": "Special Item",
        "rarity": "gold",
        "image": "./assets/rare-item.png"
    }, 

    // Recoil Case
    {
        "id": 956,
        "collectionId": 61,
        "type": "weapon",
        "weaponName": "Galil AR",
        "skinName": "Destroyer",
        "rarity": "mil-spec",
        "image": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_galilar_cu_galil_destroyer_light_large.00308096b32ca8c6252ed241878ca1ec5e743c36.png",
        "prices": {
            "FN": 0.46,
            "MW": 0.32,
            "FT": 0.19,
            "WW": 0.16,
            "BS": 0.14,
            "FNST": 1.42,
            "MWST": 0.73,
            "FTST": 0.35,
            "WWST": 0.49,
            "BSST": 0.29
        }
    }, {
        "id": 957,
        "collectionId": 61,
        "type": "weapon",
        "weaponName": "Negev",
        "skinName": "Drop Me",
        "rarity": "mil-spec",
        "image": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_negev_cu_negev_clear_sky_light_large.fc6f06d0f44e71207660f44b9b56021ce42a7e46.png",
        "prices": {
            "FN": 0.49,
            "MW": 0.31,
            "FT": 0.19,
            "WW": 0.16,
            "BS": 0.14,
            "FNST": 1.51,
            "MWST": 0.59,
            "FTST": 0.35,
            "WWST": 0.26,
            "BSST": 0.23
        }
    }, {
        "id": 958,
        "collectionId": 61,
        "type": "weapon",
        "weaponName": "UMP-45",
        "skinName": "Roadblock",
        "rarity": "mil-spec",
        "image": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ump45_gs_ump_roadblock_light_large.d6b1372a575db666a8a7f039a39c05597d6cb60b.png",
        "prices": {
            "FN": 0.5,
            "MW": 0.31,
            "FT": 0.18,
            "WW": 0.15,
            "BS": 0.14,
            "FNST": 1.43,
            "MWST": 0.62,
            "FTST": 0.35,
            "WWST": 0.25,
            "BSST": 0.24
        }
    }, {
        "id": 959,
        "collectionId": 61,
        "type": "weapon",
        "weaponName": "MAC-10",
        "skinName": "Monkeyflage",
        "rarity": "mil-spec",
        "image": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mac10_cu_mac10_monkeyflage_light_large.8f24ab7b33719d43a7d4e0886cb3f79d506e7068.png",
        "prices": {
            "FN": 0.51,
            "MW": 0.3,
            "FT": 0.19,
            "WW": 0.15,
            "BS": 0.14,
            "FNST": 1.48,
            "MWST": 0.62,
            "FTST": 0.35,
            "WWST": 0.25,
            "BSST": 0.24
        }
    }, {
        "id": 960,
        "collectionId": 61,
        "type": "weapon",
        "weaponName": "M4A4",
        "skinName": "Poly Mag",
        "rarity": "mil-spec",
        "image": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_m4a1_cu_m4a4_elite_tactical_light_large.015fd86aa32f4f0331aa1b7dc2571d89dbf38671.png",
        "prices": {
            "FN": 0.73,
            "MW": 0.31,
            "FT": 0.19,
            "WW": 0.16,
            "BS": 0.14,
            "FNST": 4.03,
            "MWST": 0.98,
            "FTST": 0.42,
            "WWST": 0.33,
            "BSST": 0.3
        }
    }, {
        "id": 961,
        "collectionId": 61,
        "type": "weapon",
        "weaponName": "FAMAS",
        "skinName": "Meow 36",
        "rarity": "mil-spec",
        "image": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_famas_gs_famas_corp_meow_light_large.7e27ced9616b1a4808cad37e8c0c653b9c866f07.png",
        "prices": {
            "FN": 0.78,
            "MW": 0.3,
            "FT": 0.19,
            "WW": 0.16,
            "BS": 0.13,
            "FNST": 2.39,
            "MWST": 0.78,
            "FTST": 0.43,
            "WWST": 0.31,
            "BSST": 0.29
        }
    }, {
        "id": 962,
        "collectionId": 61,
        "type": "weapon",
        "weaponName": "Glock-18",
        "skinName": "Winterized",
        "rarity": "mil-spec",
        "image": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_glock_gs_glock_elite_camo_light_large.00d135c0b32cabd8b48692d11794c830a9a4de5c.png",
        "prices": {
            "FN": 0.94,
            "MW": 0.32,
            "FT": 0.19,
            "WW": 0.16,
            "BS": 0.13,
            "FNST": 5.29,
            "MWST": 1.3,
            "FTST": 0.63,
            "WWST": 0.37,
            "BSST": 0.36
        }
    }, {
        "id": 963,
        "collectionId": 61,
        "type": "weapon",
        "weaponName": "M249",
        "skinName": "Downtown",
        "rarity": "restricted",
        "image": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_m249_cu_m249_downvote_light_large.9d51d5d89b1df07b160580b5b929f66f06bb8310.png",
        "prices": {
            "FN": 4.22,
            "MW": 3.05,
            "FT": 1.91,
            "WW": 1.54,
            "BS": 1.37,
            "FNST": 9.44,
            "MWST": 5.96,
            "FTST": 2.97,
            "WWST": 2.57,
            "BSST": 2.27
        }
    }, {
        "id": 964,
        "collectionId": 61,
        "type": "weapon",
        "weaponName": "P90",
        "skinName": "Vent Rush",
        "rarity": "restricted",
        "image": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_p90_gs_p90_tangled_light_large.d1c6b11dc6876f1cf546281df8b8fac68a037518.png",
        "prices": {
            "FN": 4.32,
            "MW": 3,
            "FT": 1.82,
            "WW": 1.54,
            "BS": 1.39,
            "FNST": 9.33,
            "MWST": 5.88,
            "FTST": 2.97,
            "WWST": 2.6,
            "BSST": 2.26
        }
    }, {
        "id": 965,
        "collectionId": 61,
        "type": "weapon",
        "weaponName": "SG 553",
        "skinName": "Dragon Tech",
        "rarity": "restricted",
        "image": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_sg556_cu_sg553_cyber_dragon_light_large.563b70babc5251fe5df218140582cd0aa576701e.png",
        "prices": {
            "FN": 4.36,
            "MW": 3.16,
            "FT": 1.8,
            "WW": 1.69,
            "BS": 1.34,
            "FNST": 10.1,
            "MWST": 6.08,
            "FTST": 3.03,
            "WWST": 2.62,
            "BSST": 2.27
        }
    }, {
        "id": 966,
        "collectionId": 61,
        "type": "weapon",
        "weaponName": "R8 Revolver",
        "skinName": "Crazy 8",
        "rarity": "restricted",
        "image": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_revolver_gs_revolver_purple_elite_light_large.12a25ff5490bc9199a7ef870677455e42b9d8847.png",
        "prices": {
            "FN": 4.73,
            "MW": 3.03,
            "FT": 1.78,
            "WW": 1.51,
            "BS": 1.35,
            "FNST": 11.98,
            "MWST": 5.8,
            "FTST": 2.9,
            "WWST": 2.36,
            "BSST": 2.27
        }
    }, {
        "id": 967,
        "collectionId": 61,
        "type": "weapon",
        "weaponName": "Dual Berettas",
        "skinName": "Flora Carnivora",
        "rarity": "restricted",
        "image": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_elite_cu_dual_elites_evil_flora_light_large.3afd7e8e7cf008e4b38a206b79adae3b9d0d7757.png",
        "prices": {
            "FN": 4.91,
            "MW": 3.05,
            "FT": 1.85,
            "WW": 1.46,
            "BS": 1.33,
            "FNST": 11.77,
            "MWST": 6,
            "FTST": 3.02,
            "WWST": 2.42,
            "BSST": 2.14
        }
    }, {
        "id": 968,
        "collectionId": 61,
        "type": "weapon",
        "weaponName": "P250",
        "skinName": "Visions",
        "rarity": "classified",
        "image": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_p250_gs_p250_visions_light_large.a47ba6d191d3c734c3248667fb341a0e3f0c423e.png",
        "prices": {
            "FN": 22.35,
            "MW": 14.29,
            "FT": 9.28,
            "WW": 8.97,
            "BS": 7.5,
            "FNST": 53.94,
            "MWST": 30.38,
            "FTST": 14.36,
            "WWST": 12.31,
            "BSST": 11.33
        }
    }, {
        "id": 969,
        "collectionId": 61,
        "type": "weapon",
        "weaponName": "Sawed-Off",
        "skinName": "Kiss♥Love",
        "rarity": "classified",
        "image": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_sawedoff_cu_sawedoff_kisslove_light_large.55dc07f073e8c5ce65f21e4fb5957625db7ba266.png",
        "prices": {
            "FN": 23.74,
            "MW": 14.38,
            "FT": 9.34,
            "WW": 8.44,
            "BS": 6.78,
            "FNST": 55.14,
            "MWST": 28.77,
            "FTST": 14.14,
            "WWST": 11.38,
            "BSST": 9.76
        }
    }, {
        "id": 970,
        "collectionId": 61,
        "type": "weapon",
        "weaponName": "AK-47",
        "skinName": "Ice Coaled",
        "rarity": "classified",
        "image": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ak47_cu_ak47_cogthings_light_large.9b4678a70c315e5d60a203436b7a95cd4c5dcc89.png",
        "prices": {
            "FN": 77.5,
            "MW": 45.77,
            "FT": 24.66,
            "WW": 23.19,
            "BS": 16.66,
            "FNST": 162.9,
            "MWST": 86.24,
            "FTST": 45.54,
            "WWST": 38.56,
            "BSST": 31.7
        }
    }, {
        "id": 971,
        "collectionId": 61,
        "type": "weapon",
        "weaponName": "AWP",
        "skinName": "Chromatic Aberration",
        "rarity": "covert",
        "image": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_awp_cu_awp_chroma_pink_light_large.afc69cbf51b04e24149744b6ee1d998cc18d3002.png",
        "prices": {
            "FN": 99.13,
            "MW": 72.65,
            "FT": 38.23,
            "WW": 34.23,
            "BS": 26.38,
            "FNST": 191.04,
            "MWST": 114.62,
            "FTST": 60.33,
            "WWST": 48.78,
            "BSST": 51.81
        }
    }, {
        "id": 972,
        "collectionId": 61,
        "type": "weapon",
        "weaponName": "USP-S",
        "skinName": "Printstream",
        "rarity": "covert",
        "image": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_usp_silencer_cu_usp_printstream_light_large.9f5bcd4f94db3d965b3b2e7c3aace470e9466380.png",
        "prices": {
            "FN": 297.39,
            "MW": 158.76,
            "FT": 102.66,
            "WW": 88.89,
            "BS": 69.41,
            "FNST": 742.28,
            "MWST": 342.52,
            "FTST": 198.44,
            "WWST": 144.85,
            "BSST": 118.56
        }
    }, {
        "id": 973,
        "collectionId": 61,
        "type": "weapon",
        "weaponName": "Rare",
        "skinName": "★ Gloves ★",
        "rarity": "gold",
        "image": "./assets/rare-item.png"
    },

    // Vertigo 2013
    {
        "id": 997,
        "collectionId": 63,
        "type": "weapon",
        "weaponName": "XM1014",
        "skinName": "Urban Perforated",
        "rarity": "base",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgporrf0e1Y07ODYTilD_NmJkI-fhMjhIbnQmFRd4cJ5nqeWoN322VHm-0ZlNmihLdSdJ1A4ZQrUqQW3xbzth8O_uc6amiZjvicl-z-DyOX_dJuw",
        "prices": {
            "FN": 5.05,
            "MW": 1.74,
            "FT": 1.06,
            "WW": 1.33,
            "BS": 1.26,
        }
    }, {
        "id": 998,
        "collectionId": 63,
        "type": "weapon",
        "weaponName": "MAC-10",
        "skinName": "Urban DDPAT",
        "rarity": "base",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7umeldf2-r3dTlS7ciJgZKJqPv9NLPF2DoCvZ10iOjF8Nr321Hn8xA_YGH3IIOSc1c_NVCB8lnqlLy6hpS8v5vXiSw0rU_vVoI",
        "prices": {
            "FN": 8.29,
            "MW": 1.89,
            "FT": 1.29,
            "WW": 1.1,
            "BS": 1.14,
        }
    }, {
        "id": 999,
        "collectionId": 63,
        "type": "weapon",
        "weaponName": "P90",
        "skinName": "Glacier Mesh",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopuP1FBRw7P7NYjV969C3l4mOhcj4OrzZgiUGvJck2bCYpdzx3QXs_RVqaz2mctSQJFdtZg3Wq1m8xunu1pW8vsmd1zI97XX66x_K",
        "prices": {
            "FN": 16.4,
            "MW": 5.24,
            "FT": 2.23,
            "WW": 2.35,
            "BS": 2.76,
        }
    }, {
        "id": 1000,
        "collectionId": 63,
        "type": "weapon",
        "weaponName": "AK-47",
        "skinName": "Black Laminate",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhoyszJemkV4N27q4KcqPv9NLPF2GgEuJFyi-uTotT03A3h_hZlYWv2IdPAcAY8Y1vU-gPrw7rvjJ6-7ZnXiSw034A6uhk",
        "prices": {
            "FN": 143.91,
            "MW": 33.34,
            "FT": 24.03,
            "WW": 23.32,
            "BS": 26.88,
        }
    }, {
        "id": 1001,
        "collectionId": 63,
        "type": "weapon",
        "weaponName": "Dual Berettas",
        "skinName": "Demolition",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpos7asPwJfwPz3ZTxM69mknY6OqPrxN7LEmyUJ7JUmi-zFrNys3ATiqUduZGymdYTGJldoMFzX_Va3lebshZa_uMzO1zI97ULd0Egc",
        "prices": {
            "FN": 5.5,
            "MW": 4.2,
            "FT": 3.42,
        }
    }, {
        "id": 1002,
        "collectionId": 63,
        "type": "weapon",
        "weaponName": "PP-Bizon",
        "skinName": "Carbon Fiber",
        "rarity": "industrial",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLO_JAlf0v73cjxQ7tO4q4aClfLmDLfYkWNFpsdy3u_D8YnxjgPlqUA-amvxdYSQewBqMAvYrge9kuvvhpa66c6fzHN9-n51aYxySVE",
        "prices": {
            "FN": 10.06,
            "MW": 6,
        }
    }, 

    // Office
    {
        "id": 1003,
        "collectionId": 64,
        "type": "weapon",
        "weaponName": "P2000",
        "skinName": "Silver",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovrG1eVcwg8zJfwJR5dCgkZK0m_7zO6-fzj9T7sEjjLnD8Y-iiVbi-kc4ajqnI4eVcVQ5NVjX-1e-x-_ujZe6uoOJlyU5sT_JRA",
        "prices": {
            "FN": 4.43,
            "MW": 7.3
        }
    }, {
        "id": 1004,
        "collectionId": 64,
        "type": "weapon",
        "weaponName": "FAMAS",
        "skinName": "Contrast Spray",
        "rarity": "base",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLuoKhRfwOP3Yi1Q7cWJmImMn-O6Nb6Jzj1VsJch3b2X9tzz3Afn-BBsNmmmdYDBcQY2ZV_Tr1O6wL3r14j84sqUdMychw",
        "prices": {
            "FN": 33.05,
            "MW": 4.43,
            "FT": 2.05,
            "WW": 1.93,
            "BS": 1.53
        }
    }, {
        "id": 1005,
        "collectionId": 64,
        "type": "weapon",
        "weaponName": "Galil AR",
        "skinName": "Winter Forest",
        "rarity": "industrial",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbupIgthwczAaAJE486zh5S0gP76J77DqWdY781lxLvApY723Vfj80c6MG_0LISWcgJrM1uFrFe2lOq5hZHvus7AyyZg6HY8pSGKRerlrt4",
        "prices": {
            "FN": 70.94,
            "MW": 13.31,
            "FT": 3.47,
            "WW": 3.24,
            "BS": 3
        }
    }, {
        "id": 1006,
        "collectionId": 64,
        "type": "weapon",
        "weaponName": "M249",
        "skinName": "Blizzard Marbleized",
        "rarity": "industrial",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-jxcjhoyszKfTRY9t2kkL-HnvD8J_XVxD8GvZYhi-2YoYnw2lXkqEJqZ2jyItSde1BqYg7T8gC6wrq905W8ot2XnqjzBKae",
        "prices": {
            "FN": 78.21,
            "MW": 10.55,
            "FT": 3.52,
            "WW": 2.66,
            "BS": 2.61
        }
    }, {
        "id": 1007,
        "collectionId": 64,
        "type": "weapon",
        "weaponName": "G3SG1",
        "skinName": "Arctic Camo",
        "rarity": "industrial",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposem2LFZf2-r3cC9B-NW1q4yCkP_gfevUlD4F7cBzieyQoN2i3QXnrhA4MWr0LI6Rdw9tYVHT_1m3xu-5gpGi_MOeXMs2wjo",
        "prices": {
            "FN": 80.23,
            "MW": 11.73,
            "FT": 3.42,
            "WW": 2.91,
            "BS": 3.3
        }
    }, {
        "id": 1008,
        "collectionId": 64,
        "type": "weapon",
        "weaponName": "MP7",
        "skinName": "Whiteout",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6ryFBRv7OTAeClH48miq4yCkP_gferXxDwDv5Zy27GY9t2sigDm_kVrMT2nIILDJFU9NF2Cr1a-lL_s1JKi_MOeui7SoYY",
        "prices": {
            "FN": 423.32,
            "MW": 41.71,
            "FT": 5.97,
            "WW": 4.52,
            "BS": 4.17
        }
    }, 

    // Militia
    {
        "id": 1009,
        "collectionId": 65,
        "type": "weapon",
        "weaponName": "XM1014",
        "skinName": "Grassland",
        "rarity": "base",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgporrf0e1Y07ODHTjpQ7c-lmIGFk8j4OrzZgiUFuZd02rHHoIqk0QSwqUJpNm_yJY7Acw9tZw2B-la7w7y91MPovZXJ1zI97b6G3gQJ",
        "prices": {
            "FN": 3.77,
            "MW": 2.14,
            "FT": 0.98,
            "WW": 0.92,
            "BS": 1.04
        }
    }, {
        "id": 1010,
        "collectionId": 65,
        "type": "weapon",
        "weaponName": "PP-Bizon",
        "skinName": "Forest Leaves",
        "rarity": "base",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLO_JAlfwOP3fThD-tmlq4yCkP_gfbjUxGoGv5Z13b3CpdmliwXsrUplNziidYWcJgJsZ1_Q8la2kLy7jJ-i_MOeb20uXFE",
        "prices": {
            "FN": 7.47,
            "MW": 1.94,
            "FT": 1.05,
            "WW": 3.75,
            "BS": 1.02
        }
    }, {
        "id": 1011,
        "collectionId": 65,
        "type": "weapon",
        "weaponName": "MAC-10",
        "skinName": "Tornado",
        "rarity": "base",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7umeldfwPz3ZTJQ4t2ym7-HnvD8J_XXzzIJuJwi2LjArNT03Vfi8hdqa2z6ddeUcwdsYVjY-1m4l-bthZG4ot2Xnqk4tkhH",
        "prices": {
            "FN": 7.99,
            "MW": 2.09,
            "FT": 1.09,
            "WW": 0.91,
            "BS": 1.01
        }
    }, {
        "id": 1012,
        "collectionId": 65,
        "type": "weapon",
        "weaponName": "PP-Bizon",
        "skinName": "Modern Hunter",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLO_JAlf2-r3eShM-Nmkq42Ek_LmPYTdn2xZ_Ish3rGYpN2i3lay-0FkZzuiINCdcgY8MlqD-VO6xeu818LpuZ2YwSFlpGB8sl1JW1qL",
        "prices": {
            "FN": 177.53,
            "MW": 11.66,
            "FT": 6.15,
            "WW": 7.03,
            "BS": 5.88
        }
    }, {
        "id": 1013,
        "collectionId": 65,
        "type": "weapon",
        "weaponName": "SCAR-20",
        "skinName": "Splash Jam",
        "rarity": "classified",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopbmkOVUw7PvRTjVX4sizhr-Jm_buNoTBn2Va18l4jeHVu46iiVLhrhY4ZTumJNWSJg87NAvQ-wS8lLrmhJC0uJydmHJjv3NxsyzD30vgw6xVMJ0",
        "prices": {
            "FN": 775.07,
            "MW": 30.68,
            "FT": 5.52,
            "WW": 5.12,
            "BS": 3.34
        }
    }, {
        "id": 1014,
        "collectionId": 65,
        "type": "weapon",
        "weaponName": "P2000",
        "skinName": "Grassland Leaves",
        "rarity": "industrial",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovrG1eVcwg8zbYQJO6d2gkZO0kOX1IKjdl2VV18l4jeHVu42i0AzhrkdoajzzLYGUelQ7YliB_we2lOq9gp_tv53AynM1uyAmti3D30vgX-J8LAE",
        "prices": {
            "FN": 77.56,
            "MW": 11.59,
            "FT": 5.42,
            "WW": 3.57,
            "BS": 2.11
        }
    }, {
        "id": 1015,
        "collectionId": 65,
        "type": "weapon",
        "weaponName": "Nova",
        "skinName": "Blaze Orange",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpouLWzKjhoyszAZDNW6c6JloyKjfLLPKnQmGxU18l4jeHVu9_0iQzl-UNvZmHwI4WcI1M9Z1nX8lbox-zqjJG66MiczyBk6yF053rD30vgAuPsDfg",
        "prices": {
            "FN": 92.71,
            "MW": 17.07,
            "FT": 5.88,
            "WW": 5.39,
            "BS": 3.67
        }
    }, {
        "id": 1016,
        "collectionId": 65,
        "type": "weapon",
        "weaponName": "XM1014",
        "skinName": "Blaze Orange",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgporrf0e1Y07PvRTjVX4sizhr-Jm_buNoTehGpf78BOhuDG_Zi7jFGy-EJrYmmmJYLHdwE9aVrZq1O_wua508W7756cmCYxuXYm7CrYzAv3308_zX4FKA",
        "prices": {
            "FN": 94.05,
            "MW": 16.81,
            "FT": 6.02,
            "WW": 8.83,
            "BS": 6.05
        }
    }, {
        "id": 1017,
        "collectionId": 65,
        "type": "weapon",
        "weaponName": "Nova",
        "skinName": "Modern Hunter",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpouLWzKjhoyszAZDNW6c6JmY-PkuX6DLfYkWNFppEmiLCQ8I2i3FHs-RVqNmn3JdTGJARqYVuD-1C5k7vph8fpvpjAyXt9-n51ZoikmFc",
        "prices": {
            "FN": 131.79,
            "MW": 13.98,
            "FT": 6.41,
            "WW": 18.91,
            "BS": 5.07
        }
    }, {
        "id": 1018,
        "collectionId": 65,
        "type": "weapon",
        "weaponName": "M4A4",
        "skinName": "Modern Hunter",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhoyszAZDNW6c6JmY-PkuX6DLfYkWNFppwm37rD8I72jAaxr0c-MTj7dYKWcAQ2Yg7T_wK7le_mgp-9vsmbwCZ9-n51LLZAfPE",
        "prices": {
            "FN": 262.02,
            "MW": 38.71,
            "FT": 14.31,
            "WW": 15.35,
            "BS": 18.11
        }
    }, {
        "id": 1019,
        "collectionId": 65,
        "type": "weapon",
        "weaponName": "P250",
        "skinName": "Modern Hunter",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopujwezhoyszAZDNW6c6JmY-PkuX6DLfYkWNFppUgj7-WoNnx0Vbg-RdtZmD3LIWSJAA-MwmE_Vjrwbjph5-56MvBnSB9-n51v2AAFR4",
        "prices": {
            "FN": 271,
            "MW": 18.2,
            "FT": 6.45,
            "WW": 6.9,
            "BS": 5.05
        }
    }, 

    // Aztec
    {
        "id": 1020,
        "collectionId": 66,
        "type": "weapon",
        "weaponName": "Nova",
        "skinName": "Forest Leaves",
        "rarity": "base",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpouLWzKjhzw8zEdDxU6c-JmImMn-O6MeyElWkB65Rz0rvCoY-kiQHh8hVsMWincYWUcwVtN1HW_VG8yO_og4j84sqw9HSVkg",
        "prices": {
            "FN": 4.2,
            "MW": 2.57,
            "FT": 1.05,
            "WW": 1.64,
            "BS": 1.08
        }
    }, {
        "id": 1021,
        "collectionId": 66,
        "type": "weapon",
        "weaponName": "Tec-9",
        "skinName": "Ossified",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoor-mcjhh3szHYi5L6sWJmImMn-O6YeLTx24FuMByiLyWrd3wjQKy_0Q-Z2_zcIWWdQRsZAvW_FG_lenpjYj84srtx4T2zA",
        "prices": {
            "FN": 1.02,
            "MW": 8.85
        }
    }, {
        "id": 1022,
        "collectionId": 66,
        "type": "weapon",
        "weaponName": "SSG 08",
        "skinName": "Lichen Dashed",
        "rarity": "base",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopamie19fwOP3YjVN_siJgIGbksj4OrzZgiVXusMk3r6Xo4qi2lfs80I-MGnxJNSccAJsNF2Br1G8x7q805a6ucmY1zI97WgcbLEr",
        "prices": {
            "FN": 9.12,
            "MW": 2.66,
            "FT": 1.18,
            "WW": 0.97,
            "BS": 1.05
        }
    }, {
        "id": 1023,
        "collectionId": 66,
        "type": "weapon",
        "weaponName": "Five-SeveN",
        "skinName": "Jungle",
        "rarity": "base",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLOzLhRlxfbGTi5N09ajmoeHksj4OrzZgiVVsZ102LyUp9SmiQy3rRdsajiid9SXdwI-ZAnS_AS7ye66hsK9vpSf1zI97brss9rb",
        "prices": {
            "FN": 17.39,
            "MW": 3.03,
            "FT": 1.18,
            "WW": 1.05,
            "BS": 0.98
        }
    }, {
        "id": 1024,
        "collectionId": 66,
        "type": "weapon",
        "weaponName": "M4A4",
        "skinName": "Jungle Tiger",
        "rarity": "industrial",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhoyszeTilL69mkq4yCkP_gfbjVkDhXsMAl2b3E9N-j0ADmrRJpYWmgddTAIQ4_Yw2BqAC9l-y51JOi_MOeuFGxnXQ",
        "prices": {
            "FN": 35.48,
            "MW": 3.73,
            "FT": 3.59,
            "WW": 2.76,
            "BS": 2.93
        }
    }, {
        "id": 1025,
        "collectionId": 66,
        "type": "weapon",
        "weaponName": "AK-47",
        "skinName": "Jungle Spray",
        "rarity": "industrial",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhzw8zbYS9D9eO8gY6Mm_LLP7LWnn8f6cMk2L3E9NqkilHm8hI-a2inctSWcAc8Zl-C81nvw-_uhpW06MjKzmwj5Hd9a9y0Zw",
        "prices": {
            "FN": 67.05,
            "MW": 14.63,
            "FT": 7.12,
            "WW": 6.29,
            "BS": 6.05
        }
    }, 

    // Alpha
    {
        "id": 1026,
        "collectionId": 67,
        "type": "weapon",
        "weaponName": "XM1014",
        "skinName": "Jungle",
        "rarity": "base",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgporrf0e1Y07ODHTjdX4tu6kb-JhfbiPITdn2xZ_IshiLmYrNT22Vfm_0Q6NTr7I4bHIFJsMlyD_1K4yOi80Z7ttZrNn3FjpGB8soGqpBfa",
        "prices": {
            "FN": 4.38,
            "MW": 2.09,
            "FT": 0.69,
            "WW": 0.9,
            "BS": 0.66
        }
    }, {
        "id": 1027,
        "collectionId": 67,
        "type": "weapon",
        "weaponName": "MP9",
        "skinName": "Dry Season",
        "rarity": "base",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6r8FBRw7OfJYTh96NOih7-JhfbiPITdn2xZ_It03L-Tod6k2lfh-0VuYmzxLYPDJANsN1mC_gK3k7rogJS_6M_KmCBmpGB8slvDS5gi",
        "prices": {
            "FN": 4.49,
            "MW": 1.34,
            "FT": 0.65,
            "WW": 1.07,
            "BS": 0.76
        }
    }, {
        "id": 1028,
        "collectionId": 67,
        "type": "weapon",
        "weaponName": "Five-SeveN",
        "skinName": "Anodized Gunmetal",
        "rarity": "base",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLOzLhRlxfbGTjxM09ujmo2Og_b4DLnDl31e18l4jeHVu9r0iVLk-EVsYDj0cdCSdg5oZFvZ_wDow7_ohp7qtJTAn3ZhuSUg5y3D30vgIk2HfTE",
        "prices": {
            "FN": 5.9,
            "MW": 4.99
        }
    }, {
        "id": 1029,
        "collectionId": 67,
        "type": "weapon",
        "weaponName": "M249",
        "skinName": "Jungle DDPAT",
        "rarity": "base",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-jxcjhoyszMdS1D-OO8gY6Mm_LLManQgGRu5Mx2gv2P8dWm0AXm-UBqZ233ddDGdAFvYQzZ81Xtle25g8Dt7ZnLyCNmvSEj4WGdwUIqtfR_xQ",
        "prices": {
            "FN": 6.66,
            "MW": 1.47,
            "FT": 0.67,
            "WW": 0.9,
            "BS": 0.66
        }
    }, {
        "id": 1030,
        "collectionId": 67,
        "type": "weapon",
        "weaponName": "Tec-9",
        "skinName": "Tornado",
        "rarity": "base",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoor-mcjhz3Mzcfi9M7di5q4KZluH7DLfYkWNFpscoiOrA8NSljlXl8hJsMmuiJYKSdg46ZVrX_VK9wOnt1pS9tJSam3t9-n510ZX2qrw",
        "prices": {
            "FN": 8.17,
            "MW": 2.18,
            "FT": 0.75,
            "WW": 0.74,
            "BS": 1.28
        }
    }, {
        "id": 1031,
        "collectionId": 67,
        "type": "weapon",
        "weaponName": "P250",
        "skinName": "Facets",
        "rarity": "industrial",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopujwezhoyszLYyhP_NCzq4SKhfzLManQgGRu5Mx2gv2PpNmsjVHnrkA5Zjr2JIHBegA3MlHQ8li3xua-jcPotJ_BwHU16XZz4WGdwUK2FlY9Zg",
        "prices": {
            "FN": 8.99,
            "MW": 3.3,
            "FT": 1.97,
            "WW": 1.69,
            "BS": 1.72
        }
    }, {
        "id": 1032,
        "collectionId": 67,
        "type": "weapon",
        "weaponName": "MP7",
        "skinName": "Groundwater",
        "rarity": "base",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6ryFBRv7PzEeCtH096klZaEqPv9NLPF2G1VvJxwj7nCpN3ziQDgrRFqYmjzcoLAIQ9qYlzW_1Dqxbvp05-9tJjXiSw0MtBfwCk",
        "prices": {
            "FN": 9.01,
            "MW": 1.7,
            "FT": 0.7,
            "WW": 0.91,
            "BS": 1.66
        }
    }, {
        "id": 1033,
        "collectionId": 67,
        "type": "weapon",
        "weaponName": "Sawed-Off",
        "skinName": "Mosaico",
        "rarity": "industrial",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopbuyLgNv1fX3eSR97dC_q5SCm_LLManQgGRu5Mx2gv2PrNusigHj_hBsZjv6JNfHe1draVvWrAe8ye3mg5G_u57LynpisnUjt2GdwUKBUvVtoA",
        "prices": {
            "FN": 13.89,
            "MW": 3.09,
            "FT": 2.12,
            "WW": 1.39,
            "BS": 1.1
        }
    }, {
        "id": 1034,
        "collectionId": 67,
        "type": "weapon",
        "weaponName": "PP-Bizon",
        "skinName": "Rust Coat",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLO_JAlf0uL3YilH6dCJlpKKgfjLP7LWnn8f6cZ037uY8ImjjASxrhU5amj2LdPEJAY6YQrT_FXvlebqhsXv6pXAymwj5HcaiWp-nA",
        "prices": {
            "FN": 11.09,
            "MW": 5.34,
            "FT": 5.05,
            "WW": 3.73,
            "BS": 16.08
        }
    }, {
        "id": 1035,
        "collectionId": 67,
        "type": "weapon",
        "weaponName": "AUG",
        "skinName": "Anodized Navy",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot6-iFAZu7P3JZyR97s63go-0m_7zO6-fzjsEv5Yp0uuQ8dui3wTt_RBsYG-lJdSXJg5sMFGDr1C7wO7sg5G06IOJlyVTQYQwXg",
        "prices": {
            "FN": 16.86,
            "MW": 16.32
        }
    }, {
        "id": 1036,
        "collectionId": 67,
        "type": "weapon",
        "weaponName": "SSG 08",
        "skinName": "Mayan Dreams",
        "rarity": "industrial",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopamie19f2-r3fDxb7dKJkJKOlvrnDLnDl31e18l4jeHVu9qh31Xs_hY6NWn0cYCQdANraA3S8lW3x-a7jMW9vczInCFnuHRz43fD30vgXl6H59Q",
        "prices": {
            "FN": 16.99,
            "MW": 3.65,
            "FT": 2.28,
            "WW": 1.68,
            "BS": 2.27
        }
    }, {
        "id": 1037,
        "collectionId": 67,
        "type": "weapon",
        "weaponName": "Negev",
        "skinName": "Palm",
        "rarity": "industrial",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpouL-iLhFfwOP3YTxO4eO0hoGdmMj4OrzZgiUCupIgi7HE8Yr33Aaw-kVvNWj7dY-QdVRtYF7SrgXowe-5h5_ov52Y1zI97QWVHCTw",
        "prices": {
            "FN": 20.89,
            "MW": 3.01,
            "FT": 2.2,
            "WW": 1.31,
            "BS": 2.27
        }
    }, {
        "id": 1038,
        "collectionId": 67,
        "type": "weapon",
        "weaponName": "SCAR-20",
        "skinName": "Emerald",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopbmkOVUw7PLGTjhP6c63mIS0leX1JbTummJW4NE_2-_F8Y322gKw_UFkZ232dtLGew47Zw3Q_gO7lOe8g5_quZ_PyHBj6D5iuyhXhSRN_w",
        "prices": {
            "FN": 23.92,
            "MW": 41.36
        }
    }, {
        "id": 1039,
        "collectionId": 67,
        "type": "weapon",
        "weaponName": "Glock-18",
        "skinName": "Sand Dune",
        "rarity": "industrial",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbaqKAxfwPz3YjxM6OO0hoGdmMj4OrzZgiVTvZUk27iU99Xw31XnrkVoa2n1LYHDcgQ4YwzX_AK3xO_n1pC56ZjJ1zI97Z-o7L5L",
        "prices": {
            "FN": 51.61,
            "MW": 6.09,
            "FT": 2.48,
            "WW": 2.33,
            "BS": 2.46
        }
    }, {
        "id": 1040,
        "collectionId": 67,
        "type": "weapon",
        "weaponName": "MAG-7",
        "skinName": "Hazard",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7uifDhzw8zAcCdD_tiJlpKKgfjLP7LWnn8fvZR30r2SpY3wiQDiqks6amqmIYaRJFQ3NAnZ_1Htlenoh5-_vMnPnWwj5HeouX7iBw",
        "prices": {
            "FN": 68.87,
            "MW": 8.18,
            "FT": 4.44,
            "WW": 8.46,
            "BS": 7.84
        }
    }, {
        "id": 1041,
        "collectionId": 67,
        "type": "weapon",
        "weaponName": "FAMAS",
        "skinName": "Spitfire",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLuoKhRfwOP3Yi1L-Nq_hoW0kfb5MqjulHlQ_spOhuDG_Zi7iVfg_kY-Y273LYGWcVQ-MwyDr1G_yL3v0Jbvu5nLznI3vCgrsC3Umgv3308XRo8TmA",
        "prices": {
            "FN": 79.54,
            "MW": 31.66,
            "FT": 7.01,
            "WW": 7.82,
            "BS": 3.3
        }
    }, 

    // Safehouse
    {
        "id": 1042,
        "collectionId": 68,
        "type": "weapon",
        "weaponName": "Tec-9",
        "skinName": "Army Mesh",
        "rarity": "base",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoor-mcjhzw8zFdC5K092kmZm0m_7zO6-flDkFuJFz3OjApY-ijQXh80c6Nmv1LYfGJFNsMF_Qrlm8wr-505O6voOJlyUZNPPaxw",
        "prices": {
            "FN": 0.04,
            "MW": 0.03,
            "FT": 0.03,
            "WW": 0.03,
            "BS": 0.03,
        }
    }, {
        "id": 1043,
        "collectionId": 68,
        "type": "weapon",
        "weaponName": "MP7",
        "skinName": "Army Recon",
        "rarity": "base",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6ryFBRw7ODYYzxb092kmZm0m_7zO6-fkzMGsccp0rmZ89T20QLjrkc6Y2GlcNOUewJqZwzV8ge4xbq50cS-6IOJlyXkj-WPVg",
        "prices": {
            "FN": 0.09,
            "MW": 0.03,
            "FT": 0.03,
            "WW": 0.03,
            "BS": 0.03,
        }
    }, {
        "id": 1044,
        "collectionId": 68,
        "type": "weapon",
        "weaponName": "SCAR-20",
        "skinName": "Contractor",
        "rarity": "base",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopbmkOVUw7ODHTi1P7-O6nYeDg7n3YL6Bw2lQ7cZy27yTp9X00Qztrxc4Y2DwLYCRJw9tZQ3ZrAPrx-a-m9bi67t5CePh",
        "prices": {
            "FN": 0.1,
            "MW": 0.03,
            "FT": 0.03,
            "WW": 0.03,
            "BS": 0.03,
        }
    }, {
        "id": 1045,
        "collectionId": 68,
        "type": "weapon",
        "weaponName": "Dual Berettas",
        "skinName": "Contractor",
        "rarity": "base",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpos7asPwJfwPz3YTBB09C_k4if2fL2Y7mHw20IvpRy2L7Hp9-mjAzs_0U_a2nwJIeTdAA3Y13X-1PryO3xxcjroxw_w2w",
        "prices": {
            "FN": 0.13,
            "MW": 0.03,
            "FT": 0.03,
            "WW": 0.03,
            "BS": 0.03,
        }
    }, {
        "id": 1046,
        "collectionId": 68,
        "type": "weapon",
        "weaponName": "M249",
        "skinName": "Gator Mesh",
        "rarity": "industrial",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-jxcjhzw8zFdC5K08yvgIiEmcj4OrzZgiUCscMj2u-UodWsiQOw_Us5azv6JNecJwY4ZQvZ81LryL_nhZXou5_I1zI97T4Sdvxh",
        "prices": {
            "FN": 0.15,
            "MW": 0.11,
            "FT": 0.09,
            "WW": 0.1,
            "BS": 0.09,
        }
    }, {
        "id": 1047,
        "collectionId": 68,
        "type": "weapon",
        "weaponName": "G3SG1",
        "skinName": "VariCamo",
        "rarity": "industrial",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposem2LFZf2-r3ZzxQ5d-3mY-0m_7zO6-fwGgIvJF00ruRrdzz3gyw80Rka2igcNfHegA2ZFqF81K5xL-5jMTutYOJlyXlhr-41Q",
        "prices": {
            "FN": 0.16,
            "MW": 0.11,
            "FT": 0.09,
            "WW": 0.1,
            "BS": 0.09
        }
    }, {
        "id": 1048,
        "collectionId": 68,
        "type": "weapon",
        "weaponName": "Galil AR",
        "skinName": "VariCamo",
        "rarity": "industrial",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbupIgthwczAaAJU7c6_l4GGmMj4OrzZgiUFsJwij-3E89qt2wzh-Us6Mj2gd4bEdQ8-MFiFrlC9w72705Tqvc_A1zI97VeOATXT",
        "prices": {
            "FN": 0.17,
            "MW": 0.11,
            "FT": 0.1,
            "WW": 0.1,
            "BS": 0.09
        }
    }, {
        "id": 1049,
        "collectionId": 68,
        "type": "weapon",
        "weaponName": "SSG 08",
        "skinName": "Blue Spruce",
        "rarity": "base",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopamie19fwPz3fDJR_-O6nYeDg7mjZ-yExW9Qu5wkj7-W8dis2AXk-kFqamHwLNLDcA5rYArW-VC9kOzqm9bi61mW1oPB",
        "prices": {
            "FN": 0.21,
            "MW": 0.03,
            "FT": 0.03,
            "WW": 0.03,
            "BS": 0.03,
        }
    }, {
        "id": 1050,
        "collectionId": 68,
        "type": "weapon",
        "weaponName": "MP9",
        "skinName": "Orange Peel",
        "rarity": "industrial",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6r8FBRw7OfJYTh94863moeOqPv9NLPF2DwGsJAl2LGT84r22QflqUQ-MTz7I47GcwI-M1uD_lDsl7zohpO-uJ_XiSw07Q-lohE",
        "prices": {
            "FN": 0.4,
            "MW": 0.1,
            "FT": 0.09,
            "WW": 0.1,
            "BS": 0.09
        }
    }, {
        "id": 1051,
        "collectionId": 68,
        "type": "weapon",
        "weaponName": "AUG",
        "skinName": "Condemned",
        "rarity": "industrial",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot6-iFBRw7P7NYjV96tOkkZOfqPH9Ib7ummJW4NE_j-jD89v33g23qkJoZ26hcdOQewBtNQqBrFO_k-rn1sK7uZ7OnSAw7z5iuyhKuKzaAw",
        "prices": {
            "FN": 0.76,
            "MW": 0.1,
            "FT": 0.08,
            "WW": 0.09,
            "BS": 0.09
        }
    }, {
        "id": 1052,
        "collectionId": 68,
        "type": "weapon",
        "weaponName": "USP-S",
        "skinName": "Forest Leaves",
        "rarity": "industrial",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo6m1FBRp3_bGcjhQ08-mq4yOluHxIITdn2xZ_Itw3bjCrYj23AzmrRY9ZziidYfGdFQ7MlnR_wS9xu6-gsO9v5mdnSQ3pGB8stw9ewh8",
        "prices": {
            "FN": 1.11,
            "MW": 0.22,
            "FT": 0.08,
            "WW": 0.11,
            "BS": 0.15
        }
    }, {
        "id": 1053,
        "collectionId": 68,
        "type": "weapon",
        "weaponName": "FAMAS",
        "skinName": "Teardown",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLuoKhRfwOP3fDhR5OO-m5S0lvnwDLjemm9u5Mx2gv2P9tWmiQPk-xE-YDqlINKUdgQ6YAzTqVm9xuvpjMS5u5zPwXcxunIg7GGdwUK4xWYQ4w",
        "prices": {
            "FN": 1.16,
            "MW": 0.91,
            "FT": 0.72,
            "WW": 0.71,
            "BS": 0.66
        }
    }, {
        "id": 1054,
        "collectionId": 68,
        "type": "weapon",
        "weaponName": "Five-SeveN",
        "skinName": "Silver Quartz",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLOzLhRlxfbGTjxP09-kjZOflvv4OqHUklRC4clnj_v--YXygED6-hBpNmuldoPEcQM6YF3S-Qe_l7js1JS06pnIyno3siN3sCvezhOw1wYMMLJHgOIdFw",
        "prices": {
            "FN": 1.19,
            "MW": 0.91,
            "FT": 0.71,
            "WW": 0.69,
        }
    }, {
        "id": 1055,
        "collectionId": 68,
        "type": "weapon",
        "weaponName": "SSG 08",
        "skinName": "Acid Fade",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopamie19f0vL3dzxG6eOxhoGYhPv1Pb_ummJW4NE_0ruYoNz0jgflqEJrZD3yII-dcQA4ZFzV8wXqlLvogsC6v57OwCRn7j5iuyiZeoRmBw",
        "prices": {
            "FN": 1.71
        }
    }, {
        "id": 1056,
        "collectionId": 68,
        "type": "weapon",
        "weaponName": "M4A1-S",
        "skinName": "Nitro",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uOlm7-Ehfb6NL7ul2hS7ctlmdbN_Iv9nBri-UY6ZmGgcNWQdAI_N1zU-gLtl-y50J66us7KyHdh6CUq5XyJnkO1n1gSOWcLwBkX",
        "prices": {
            "FN": 10.32,
            "MW": 4.8,
            "FT": 2.25,
            "WW": 2.2,
            "BS": 1.93
        }
    }, 

    // Lake
    {
        "id": 1057,
        "collectionId": 69,
        "type": "weapon",
        "weaponName": "G3SG1",
        "skinName": "Jungle Dashed",
        "rarity": "base",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposem2LFZfwOP3ZTxS6eOlnI-Zg8j-JrXWmm5u5Mx2gv2Ppd7zjATirxFkNWD2JIGde1Q4MlyCrAe8x-u705a6uJ7Aynph6SUq4GGdwUKYnSlmwg",
        "prices": {
            "FN": 0.13,
            "MW": 0.03,
            "FT": 0.03,
            "WW": 0.03,
            "BS": 0.03,
        }
    }, {
        "id": 1058,
        "collectionId": 69,
        "type": "weapon",
        "weaponName": "SG 553",
        "skinName": "Waves Perforated",
        "rarity": "base",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopb3wflFfwOP3ZTxS6eOym5SYqOD1Jb7CqWdY781lxL-Tp9n331Wx-0NvMDylddfHdVJrMgnXrwC7wOnqgpC1tZzJzHcx6HQ8pSGKCgprHXY",
        "prices": {
            "FN": 0.14,
            "MW": 0.03,
            "FT": 0.03,
            "WW": 0.03,
            "BS": 0.03,
        }
    }, {
        "id": 1059,
        "collectionId": 69,
        "type": "weapon",
        "weaponName": "PP-Bizon",
        "skinName": "Night Ops",
        "rarity": "industrial",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLO_JAlf2-r3ZzxQ5d-3mY-0mf7zO6_ummJW4NE_jLmUrN_22gCw-kdvYGqmIo7GdVNsYQ3Z-1e9yevtgpbouZvIyyBnvD5iuyhUzb9WHg",
        "prices": {
            "FN": 0.15,
            "MW": 0.11,
            "FT": 0.08,
            "WW": 0.08,
            "BS": 0.07
        }
    }, {
        "id": 1060,
        "collectionId": 69,
        "type": "weapon",
        "weaponName": "XM1014",
        "skinName": "Blue Spruce",
        "rarity": "base",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgporrf0e1Y07ODHTjBN_8-JmImMn-O6ZuiBzjwIvsNw3OzHp4nxiVXg_hJqMG-mI4XGdw86ZFqGqVO4xOnnhIj84sodiQTp-w",
        "prices": {
            "FN": 0.19,
            "MW": 0.03,
            "FT": 0.03,
            "WW": 0.03,
            "BS": 0.03,
        }
    }, {
        "id": 1061,
        "collectionId": 69,
        "type": "weapon",
        "weaponName": "P250",
        "skinName": "Boreal Forest",
        "rarity": "base",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopujwezhoyszOfi9H_8iJlo-Zkvb4DLfYkWNFpsEp2rzDpo-g3lLj_0duYzyiJoPAcwJqM1DWr1btl-bujZfotZXIynZ9-n51cU1OKdk",
        "prices": {
            "FN": 0.19,
            "MW": 0.03,
            "FT": 0.03,
            "WW": 0.03,
            "BS": 0.03,
        }
    }, {
        "id": 1062,
        "collectionId": 69,
        "type": "weapon",
        "weaponName": "AUG",
        "skinName": "Storm",
        "rarity": "base",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot6-iFBRv7ODcfi9P6s65mpS0m_7zO6-fzj9V7cAl2eyVpIrz2FKx8kZtZGqhIoWQJwU4aArU8le2xea50J--6oOJlyWzfFi66w",
        "prices": {
            "FN": 0.19,
            "MW": 0.03,
            "FT": 0.03,
            "WW": 0.03,
            "BS": 0.03,
        }
    }, {
        "id": 1063,
        "collectionId": 69,
        "type": "weapon",
        "weaponName": "Galil AR",
        "skinName": "Sage Spray",
        "rarity": "base",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbupIgthwczbYQJR_M63jb-PkuTxIa_uhWpW7fp9g-7J4cKm3FLl-UVkMGugcoeXJwE5aFzV-Vnsxu_rhZK5usnKznNl7igj5HvfgVXp1li1IAsv",
        "prices": {
            "FN": 0.29,
            "MW": 0.03,
            "FT": 0.03,
            "WW": 0.03,
            "BS": 0.03,
        }
    }, {
        "id": 1064,
        "collectionId": 69,
        "type": "weapon",
        "weaponName": "XM1014",
        "skinName": "Blue Steel",
        "rarity": "industrial",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgporrf0e1Y07PLZTj9O-dmyq4yCkP_gfeiDxDMEuMBz2r_F89mm3Qay-ENuMW-nINLDJFQ_NVrU_VPqkL3qjJCi_MOe-fT9b8U",
        "prices": {
            "FN": 0.33,
            "MW": 0.09,
            "FT": 0.07,
            "WW": 0.08,
            "BS": 0.08
        }
    }, {
        "id": 1065,
        "collectionId": 69,
        "type": "weapon",
        "weaponName": "Dual Berettas",
        "skinName": "Cobalt Quartz",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpos7asPwJf0v73ci9b_8i3mIyCjfLwDLndg25u5Mx2gv2PoNug3lDk-RVlamn7cYfGdlI5YQ3WrFDqyLq-0JO_7p7OynM16SB0sWGdwULhW51YQw",
        "prices": {
            "FN": 0.45,
            "MW": 0.29,
            "FT": 0.25,
            "WW": 0.31,
        }
    }, {
        "id": 1066,
        "collectionId": 69,
        "type": "weapon",
        "weaponName": "SG 553",
        "skinName": "Anodized Navy",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopb3wflFf0v33fzxU9eO6nYeDg7mhMO-ElTpSu5Yg2rmXrNjziwTl-xJvajuiLYTAcVdoMArRrlbtxLvom9bi65LEnjT7",
        "prices": {
            "FN": 0.81,
            "MW": 1
        }
    }, {
        "id": 1067,
        "collectionId": 69,
        "type": "weapon",
        "weaponName": "FAMAS",
        "skinName": "Cyanospatter",
        "rarity": "industrial",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLuoKhRf2-r3YzhH6uO6nYeDg7nwYOqCzm0FvJwgiLyVpN-n3AW2rUVoMmHxcYaQdgNqNQvUqVjrye67m9bi68H1zE-y",
        "prices": {
            "FN": 1.04,
            "MW": 0.1,
            "FT": 0.07,
            "WW": 0.07,
            "BS": 0.07
        }
    }, {
        "id": 1068,
        "collectionId": 69,
        "type": "weapon",
        "weaponName": "USP-S",
        "skinName": "Night Ops",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo6m1FBRp3_bGcjhQ09Svq5aKhf73MrbeqWVY781lteXI8oThxlCy-hA9MGqlJoHAIw4_Y1vXqwLskue7gJC9v5qfzCdg7nR05XjfyxCpwUYbxcylpaA",
        "prices": {
            "FN": 1.04,
            "MW": 0.76,
            "FT": 0.69,
            "WW": 0.67,
            "BS": 0.65,
        }, 
    }, {
        "id": 1069,
        "collectionId": 69,
        "type": "weapon",
        "weaponName": "P90",
        "skinName": "Teardown",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopuP1FBRw7P7NYjV95NOiq4GFk8j3PLfVqWdY781lxOuQ8Nug0VG3_EVkYmz7LIXHJAVrY1HT-FC7lO3ngJ7p7czJznRg6CE8pSGK_1A-hqA",
        "prices": {
            "FN": 1.05,
            "MW": 0.79,
            "FT": 0.69,
            "WW": 0.64,
            "BS": 0.63,
        }
    }, {
        "id": 1070,
        "collectionId": 69,
        "type": "weapon",
        "weaponName": "Desert Eagle",
        "skinName": "Mudder",
        "rarity": "industrial",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposr-kLAtl7PvRTjBN-Mi6kYS0hPb6N4Tdn2xZ_Isn27zD8Nyt3FDgqRBlNzv7d4-ddgM_N1nT-VS_kr-6hMDtvMiaz3swpGB8spRzyX72",
        "prices": {
            "FN": 1.23,
            "MW": 0.11,
            "FT": 0.07,
            "WW": 0.08,
            "BS": 0.08,
        }
    }, {
        "id": 1071,
        "collectionId": 69,
        "type": "weapon",
        "weaponName": "AWP",
        "skinName": "Safari Mesh",
        "rarity": "industrial",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FBRw7P7NYjV9-N24q4yCkP_gfeiHxjNS6sBz0-vDpNqmilKw-RE5MDv3cdTGIVM8ZF_WqFjtkOnn0Z-i_MOe5x-cbmw",
        "prices": {
            "FN": 2.63,
            "MW": 0.19,
            "FT": 0.08,
            "WW": 0.12,
            "BS": 0.25,
        }
    }, 

    // Italy
    {
        "id": 1072,
        "collectionId": 70,
        "type": "weapon",
        "weaponName": "PP-Bizon",
        "skinName": "Sand Dashed",
        "rarity": "base",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLO_JAlfwOP3ZTxS6eOlnI-Zg8jnMrXVqWdY781lxO3C89Wk21Xnqkc6MD33JoeVcwQ6aVqF8gK_krzqgMK8ucnAwXBr7Ck8pSGKKT36elM",
        "prices": {
            "FN": 0.12,
            "MW": 0.03,
            "FT": 0.03,
            "WW": 0.03,
            "BS": 0.03,
        }
    }, {
        "id": 1073,
        "collectionId": 70,
        "type": "weapon",
        "weaponName": "AUG",
        "skinName": "Contractor",
        "rarity": "base",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot6-iFBRv7OPFcgJO5du-gM6OxfakZbnQw28H65Eg2L2RrYin3ADjrkJqYWz0Jo6UdVNrYV3SqAW9366x0l1OAhlP",
        "prices": {
            "FN": 0.13,
            "MW": 0.03,
            "FT": 0.03,
            "WW": 0.03,
            "BS": 0.03,
        }
    }, {
        "id": 1074,
        "collectionId": 70,
        "type": "weapon",
        "weaponName": "Nova",
        "skinName": "Sand Dune",
        "rarity": "base",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpouLWzKjhz3MzbcDNG09C_k4if2aSna-6FwzsJu5Ypj-uVrdyk2wzkqEQ4ZD3wJo7DcAQ2ZAmE-QC5xejxxcjrmUdg9dQ",
        "prices": {
            "FN": 0.14,
            "MW": 0.03,
            "FT": 0.03,
            "WW": 0.03,
            "BS": 0.03,
        }
    }, {
        "id": 1075,
        "collectionId": 70,
        "type": "weapon",
        "weaponName": "FAMAS",
        "skinName": "Colony",
        "rarity": "base",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLuoKhRfwPz3Yi1D79mJmYGZnvnxDLfYkWNFpsdy2uiQpNyt2FftqUA-ZmmgJYXBJlRrZQmGq1Lox7jmg5W9vcucmnZ9-n51AJPKCtE",
        "prices": {
            "FN": 0.14,
            "MW": 0.03,
            "FT": 0.03,
            "WW": 0.03,
            "BS": 0.03,
        }
    }, {
        "id": 1076,
        "collectionId": 70,
        "type": "weapon",
        "weaponName": "XM1014",
        "skinName": "CaliCamo",
        "rarity": "industrial",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgporrf0e1Y07PvRTitD_tW1lY2EqPPxIL7DglRd4cJ5nqeZrN-ki1ayrUE9MmrxLY-Xeg85ZlzS-gW-xOjug8S_vJucm3IysyF0-z-DyLOku5tY",
        "prices": {
            "FN": 0.15,
            "MW": 0.11,
            "FT": 0.08,
            "WW": 0.08,
            "BS": 0.07
        }
    }, {
        "id": 1077,
        "collectionId": 70,
        "type": "weapon",
        "weaponName": "Nova",
        "skinName": "Candy Apple",
        "rarity": "industrial",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpouLWzKjhz3MzadDl94NWxnJTFkaata-OHkjtVuJR03bqR84-kjQTh-0dtZTj1IoKXdg42ZFrWq1i6kvCv28GQlu_wcQ",
        "prices": {
            "FN": 0.16,
            "MW": 0.1,
            "FT": 0.1
        }
    }, {
        "id": 1078,
        "collectionId": 70,
        "type": "weapon",
        "weaponName": "Tec-9",
        "skinName": "Groundwater",
        "rarity": "base",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoor-mcjhz3MzHfTRU6eO6nYeDg7miMOiEkDlS6pN0jLnHrdWmjgTmr0RsZGz6d4OXelBrZVHV8gDqlLy8m9bi6ya9iyPP",
        "prices": {
            "FN": 0.21,
            "MW": 0.03,
            "FT": 0.03,
            "WW": 0.03,
            "BS": 0.03,
        }
    }, {
        "id": 1079,
        "collectionId": 70,
        "type": "weapon",
        "weaponName": "P2000",
        "skinName": "Granite Marbleized",
        "rarity": "industrial",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovrG1eVcwg8zAaAJF_t24nZSOqPv9NLPF2DgB7JNw3LHCoN6niVHhrxdsMD_0dYCSJwY5NAuDqFe4krjqhcS8uM7XiSw0dqnDKw8",
        "prices": {
            "FN": 0.26,
            "MW": 0.1,
            "FT": 0.08,
            "WW": 0.07,
            "BS": 0.07
        }
    }, {
        "id": 1080,
        "collectionId": 70,
        "type": "weapon",
        "weaponName": "UMP-45",
        "skinName": "Gunsmoke",
        "rarity": "industrial",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo7e1f1Jf2-r3djhO_Nm4q4yCkP_gfeyIkjkD7sQh2u2Vodil0FXj-ko-ZDj7IIbEIwI6aF-FrwPtkOjn08Si_MOeD9MsV0w",
        "prices": {
            "FN": 0.31,
            "MW": 0.1,
            "FT": 0.07,
            "WW": 0.07,
            "BS": 0.07,
        }
    }, {
        "id": 1081,
        "collectionId": 70,
        "type": "weapon",
        "weaponName": "Dual Berettas",
        "skinName": "Stained",
        "rarity": "industrial",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpos7asPwJf0uL3dzJQ79myq4yCkP_gfbiHwz8DvZMn27rEpdSs21bl_RE5YW6iI4CXc1NtZV7Zq1e9kOfmgJOi_MOekFRFcA0",
        "prices": {
            "FN": 0.37,
            "MW": 0.12,
            "FT": 0.08,
            "WW": 0.08,
            "BS": 0.08
        }
    }, {
        "id": 1082,
        "collectionId": 70,
        "type": "weapon",
        "weaponName": "AWP",
        "skinName": "Pit Viper",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FA957ODGcDZH_9e_mr-HnvD8J_XUwGpV7Mdz3rDAotyn3FLs-0M9YGygLdOVegc6YVqB-AK2x-3uhZS0ot2XniAGuoRm",
        "prices": {
            "FN": 0.89,
            "MW": 0.46,
            "FT": 0.68,
            "WW": 0.75,
        }
    }, {
        "id": 1083,
        "collectionId": 70,
        "type": "weapon",
        "weaponName": "MP7",
        "skinName": "Anodized Navy",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6ryFAZu7P3JZyR94NWxnJTFwPWjY-6CxT1Su8B03r6T8Y6s2wft-EJpam6lJNfHcw8_Y1nXqFLqkvCv28FJ8mUtyA",
        "prices": {
            "FN": 0.94,
            "MW": 0.97
        }
    }, {
        "id": 1084,
        "collectionId": 70,
        "type": "weapon",
        "weaponName": "Sawed-Off",
        "skinName": "Full Stop",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopbuyLgNv1fX3eSR9-t2knYOKmvjLIb7VqWdY781lxLHF99il0Ffg-EJrNmj6dtDBJA5vNQvWqVK_ye3sh5G0upvNy3FnviU8pSGKve7IyHk",
        "prices": {
            "FN": 1.03,
            "MW": 0.81,
            "FT": 0.7,
            "WW": 0.63,
            "BS": 0.62
        }
    }, {
        "id": 1085,
        "collectionId": 70,
        "type": "weapon",
        "weaponName": "Glock-18",
        "skinName": "Candy Apple",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbaqKAxfwPz3YzhG09C_k4if2aajMeqJlzgF6ZF10r2RrNyg3Qzjrkptazj7IYaVdwE4NFHRqFHtk-fxxcjr1j3fJ1k",
        "prices": {
            "FN": 1.34,
            "MW": 0.92,
            "FT": 0.84
        }
    }, {
        "id": 1086,
        "collectionId": 70,
        "type": "weapon",
        "weaponName": "M4A1-S",
        "skinName": "Boreal Forest",
        "rarity": "industrial",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO-jb-NmOXxIK_ulGRD7cR9teXI8oThxgW1_BVvYG2hIoPBc1BoYAnUqQC-k7zr1JfuvZvNnXRnuSEk7CnUlxepwUYbU-jLqog",
        "prices": {
            "FN": 5.06,
            "MW": 0.78,
            "FT": 0.22,
            "WW": 0.32,
            "BS": 0.23
        }
    }, 

    // Bank
    {
        "id": 1087,
        "collectionId": 71,
        "type": "weapon",
        "weaponName": "SG 553",
        "skinName": "Army Sheen",
        "rarity": "base",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopb3wflFf0v73cC9P9eOlnImFksj4OrzZgiVQuJJw077FoIr3iQPnqhY5MD-gIdXGewU4ZQ3QrlW9lerojZ--v5rK1zI97cHouWKJ",
        "prices": {
            "FN": 0.04,
            "MW": 0.03,
            "FT": 0.03
        }
    }, {
        "id": 1088,
        "collectionId": 71,
        "type": "weapon",
        "weaponName": "Negev",
        "skinName": "Army Sheen",
        "rarity": "base",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpouL-iLhFf0v73cC9P9eOlnImFksj4OrzZgiUJsJEh0rzHoY2k21bj80U6YzigI4SWdlI4YF6GrFG_kObrjcC-tMnM1zI97ZIqhaER",
        "prices": {
            "FN": 0.04,
            "MW": 0.03,
            "FT": 0.03
        }
    }, {
        "id": 1089,
        "collectionId": 71,
        "type": "weapon",
        "weaponName": "Sawed-Off",
        "skinName": "Forest DDPAT",
        "rarity": "base",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopbuyLgNv1fX3eSR96NimlZS0m_7zO6-fkzhXvJIniL6Xrdqs21Xk_0Vlam2iLYbAcFdtMFjU_wW9w-e6g5-5u4OJlyXfj1l0Bw",
        "prices": {
            "FN": 0.06,
            "MW": 0.03,
            "FT": 0.03,
            "WW": 0.03,
            "BS": 0.03
        }
    }, {
        "id": 1090,
        "collectionId": 71,
        "type": "weapon",
        "weaponName": "MP7",
        "skinName": "Forest DDPAT",
        "rarity": "base",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6ryFA957PfMYTxW09C_k4if2aemY-zXlD5X7ZVw2-yTpI_xjFXm8xZsY2ylI4-TclA8NQvU_VO2k-fxxcjrEfavWb4",
        "prices": {
            "FN": 0.1,
            "MW": 0.03,
            "FT": 0.03,
            "WW": 0.03,
            "BS": 0.03
        }
    }, {
        "id": 1091,
        "collectionId": 71,
        "type": "weapon",
        "weaponName": "R8 Revolver",
        "skinName": "Bone Mask",
        "rarity": "base",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopL-zJAt21uH3Yi19-N2mkb-HnvD8J_XSzm0IuZcljO-WpY_02lXirktkZW76JobGJgU3NFyGqFa9wea-1p67ot2Xnn1HMgmw",
        "prices": {
            "FN": 0.14,
            "MW": 0.03,
            "FT": 0.03,
            "WW": 0.03,
            "BS": 0.03
        }
    }, {
        "id": 1092,
        "collectionId": 71,
        "type": "weapon",
        "weaponName": "Glock-18",
        "skinName": "Death Rattle",
        "rarity": "industrial",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbaqKAxf2-r3fzhQ49i_lb-HnvD8J_WEwjsBvpJ33bmS94qiigTm-xdkNTynctXGdAU8Y13S-QDsxerm0ZC0ot2Xnjdfx6Ff",
        "prices": {
            "FN": 0.16,
            "MW": 0.12,
            "FT": 0.13,
            "WW": 0.12
        }
    }, {
        "id": 1093,
        "collectionId": 71,
        "type": "weapon",
        "weaponName": "UMP-45",
        "skinName": "Carbon Fiber",
        "rarity": "industrial",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo7e1f1Jf0v73cjxQ7tO4q4aClfLmDLfYkWNFpscj37nDrdqlilax_RVrMm_7LYKRelVtZV-C_ADtw-vrh5Hpv8nBzXp9-n517oYZno4",
        "prices": {
            "FN": 0.19,
            "MW": 0.17
        }
    }, {
        "id": 1094,
        "collectionId": 71,
        "type": "weapon",
        "weaponName": "Nova",
        "skinName": "Caged Steel",
        "rarity": "industrial",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpouLWzKjhh3szHZzxO09SzjL-HnvD8J_WGwD0AuZ0o07nDptun3gLl_BY4ZWvzJ9Ocd1dsMl_R_lC5lby7hZO7ot2XnnibtMPm",
        "prices": {
            "FN": 0.2,
            "MW": 0.16,
            "FT": 0.14
        }
    }, {
        "id": 1095,
        "collectionId": 71,
        "type": "weapon",
        "weaponName": "G3SG1",
        "skinName": "Green Apple",
        "rarity": "industrial",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposem2LFZfwPz3di9H6dKJmImMn-O6YePSwm4GupIk3evEo9ii3wG3-kJtYjigJNOScwI8MFnU_QLvkrzm1oj84srJ8w6n6Q",
        "prices": {
            "FN": 0.21,
            "MW": 0.16,
            "FT": 0.15
        }
    }, {
        "id": 1096,
        "collectionId": 71,
        "type": "weapon",
        "weaponName": "MAC-10",
        "skinName": "Silver",
        "rarity": "industrial",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7umeldf0v33YjRO-tmkq4yCkP_gfbqEkmpQvpYg2u2Ro9yl3gS1_xE_ZmqnJteTdgc7YgmEq1m7lLq61pWi_MOeTf6eBqg",
        "prices": {
            "FN": 0.19,
            "MW": 0.22
        }
    }, {
        "id": 1097,
        "collectionId": 71,
        "type": "weapon",
        "weaponName": "Tec-9",
        "skinName": "Urban DDPAT",
        "rarity": "base",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoor-mcjhoyszMdS1D-OOjhoK0m_7zO6-flG8FvJEo2-2W8Ymt3QC3-0s5YWD2JdOUdlA3YV7Wqwfqk-3rhcLouoOJlyWPsiOOZw",
        "prices": {
            "FN": 0.23,
            "MW": 0.03,
            "FT": 0.03,
            "WW": 0.03,
            "BS": 0.03
        }
    }, {
        "id": 1098,
        "collectionId": 71,
        "type": "weapon",
        "weaponName": "CZ75-Auto",
        "skinName": "Tuxedo",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotaDyfgZfwPz3fi9B7eO6nYeDg7msZ-KBzj0E7cdw2b_CpdX2i1Dj_hJlMWilLYWRdgNoN1qF8we8k-a5m9bi6-1tbAt1",
        "prices": {
            "FN": 1.64,
            "MW": 1.55,
            "FT": 1.08,
            "WW": 0.97,
            "BS": 0.9
        }
    }, {
        "id": 1099,
        "collectionId": 71,
        "type": "weapon",
        "weaponName": "Galil AR",
        "skinName": "Tuxedo",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbupIgthwczbfgJN_t-3q4yCkP_gfe7VlDwJv5Up3r-V8Nym2Vfi80U9NmumI4WVJw83Zg3Q-1S8x7_o0Mei_MOe7tXEvoo",
        "prices": {
            "FN": 1.86,
            "MW": 1.61,
            "FT": 1.07,
            "WW": 1.05,
            "BS": 0.9
        }
    }, {
        "id": 1100,
        "collectionId": 71,
        "type": "weapon",
        "weaponName": "Desert Eagle",
        "skinName": "Meteorite",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposr-kLAtl7PLFTj5Q9c-ilYyHnu3xN4TVl3la18l4jeHVu97x31Dj_kA9a2DwcdWWJAZvZV_Qqwe3x-fv1Me6uMmanCE3vSEm4ynD30vgrmdJqGM",
        "prices": {
            "FN": 2.05,
            "MW": 1.54,
            "FT": 1.24
        }
    }, {
        "id": 1101,
        "collectionId": 71,
        "type": "weapon",
        "weaponName": "P250",
        "skinName": "Franklin",
        "rarity": "classified",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopujwezhjxszFfjNH9eO6nYeDg7n1a-2CxG5V7JAp3r_DrY-sjFHk8hBrYmiicNeRdVA5NQ2DqVa9yLzom9bi67a-Ft70",
        "prices": {
            "FN": 2.11,
            "MW": 1.44,
            "FT": 1.05,
            "WW": 2.31
        }
    }, {
        "id": 1102,
        "collectionId": 71,
        "type": "weapon",
        "weaponName": "AK-47",
        "skinName": "Emerald Pinstripe",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszYeDNR-M6_hIW0lvygZITdn2xZ_Isj27uSod6kiQbirRE5ZW7wcdPEdVU-Y1vYqVa6xe--jZXutZqYmHNkpGB8sorXHHb4",
        "prices": {
            "FN": 16.06,
            "MW": 9.68,
            "FT": 7.42,
            "WW": 6.42,
            "BS": 6.06
        }
    }, 

    // Baggage
    {
        "id": 1103,
        "collectionId": 72,
        "type": "weapon",
        "weaponName": "CZ75-Auto",
        "skinName": "Green Plaid",
        "rarity": "base",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotaDyfgZf2-r3YTFD5djkq4yCkP_gfeODkzgIucdw3LjCpdWnjVex-UVpNmqhcNOUdAQ9ZgmC_wC7wO7uhpai_MOeD-HdyvQ",
        "prices": {
            "FN": 2.46,
            "MW": 1.47,
            "FT": 1.31,
            "WW": 1.8,
            "BS": 1.82
        }
    }, {
        "id": 1104,
        "collectionId": 72,
        "type": "weapon",
        "weaponName": "MP9",
        "skinName": "Green Plaid",
        "rarity": "base",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6r8FA957OPEcDRGvuO6nYeDg7mkZrmJwWgGv8AkjLrCrN322wXjrUpuNTinI4aSeg43YA7U_gC6xO3nm9bi6_chMGlx",
        "prices": {
            "FN": 2.6,
            "MW": 1.44,
            "FT": 1.11,
            "WW": 1.2,
            "BS": 0.94
        }
    }, {
        "id": 1105,
        "collectionId": 72,
        "type": "weapon",
        "weaponName": "MP7",
        "skinName": "Olive Plaid",
        "rarity": "base",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6ryFA957OPEcDRGveO6nYeDg7mhZbmDkDJS6sYnjrDAoo30jQe3-hY_Mm3yJYOUIwQ-Z1-B-1W8xrvnm9bi6yrfX6Vp",
        "prices": {
            "FN": 2.83,
            "MW": 1.55,
            "FT": 1.2,
            "WW": 0.82,
            "BS": 1.33
        }
    }, {
        "id": 1106,
        "collectionId": 72,
        "type": "weapon",
        "weaponName": "G3SG1",
        "skinName": "Contractor",
        "rarity": "base",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposem2LFZfwPz3YTBB09C_k4if2aKiYL-IwjgAvcQki7_HoNul2w23qBc6Zjv1I4THJAA7NV7Q8gK2wOfxxcjrGqjj_1M",
        "prices": {
            "FN": 5,
            "MW": 1.76,
            "FT": 1.37,
            "WW": 1.46,
            "BS": 1.28
        }
    }, {
        "id": 1107,
        "collectionId": 72,
        "type": "weapon",
        "weaponName": "P2000",
        "skinName": "Coach Class",
        "rarity": "industrial",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovrG1eVcwg8zLZAJO-duxlYeOqOemY-uBqWdY781lxL_F84_wiQPnqhVkMmqgcoKXcgI8NwrX_wPrx-fsgZPv6pjMy3dgvic8pSGKGYo2X-E",
        "prices": {
            "FN": 7.88,
            "MW": 5.67,
            "FT": 4.44,
            "WW": 3.91,
            "BS": 3.42
        }
    }, {
        "id": 1108,
        "collectionId": 72,
        "type": "weapon",
        "weaponName": "SG 553",
        "skinName": "Traveler",
        "rarity": "industrial",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopb3wflFf0Ob3fShF692xkb-YkKKhYITdn2xZ_Isi3b3DrNis2wzg-EtpYDild4-UcVc_ZlvVqFC7xbi818To7s_Pn3pqpGB8sla1raXI",
        "prices": {
            "FN": 8.46,
            "MW": 5.76,
            "FT": 4.51,
            "WW": 3.85,
            "BS": 4.05
        }
    }, {
        "id": 1109,
        "collectionId": 72,
        "type": "weapon",
        "weaponName": "P90",
        "skinName": "Leather",
        "rarity": "industrial",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopuP1FAR17PHafipM09CzlZSDkuXLI-KBqWdY781lxL-Yod_33wzmrUI_Y2mncI-WcVVvYg2F-QK_yOnrjMPtvpnAzXpqs3M8pSGK1jc3FeA",
        "prices": {
            "FN": 10.2,
            "MW": 5.93,
            "FT": 4.86,
            "WW": 4.11,
            "BS": 4.25
        }
    }, {
        "id": 1110,
        "collectionId": 72,
        "type": "weapon",
        "weaponName": "MAC-10",
        "skinName": "Commuter",
        "rarity": "industrial",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7umeldf0Ob3fShF692xkb-GlvSlY4Tdn2xZ_Isk3-iRpoihjQy1-kRlMW-ncNCQclI5Z1CB_1G3l-jmgZW-757IzndjpGB8svTjrhVv",
        "prices": {
            "FN": 14.51,
            "MW": 5.77,
            "FT": 4.58,
            "WW": 3.93,
            "BS": 3.66
        }
    }, {
        "id": 1111,
        "collectionId": 72,
        "type": "weapon",
        "weaponName": "XM1014",
        "skinName": "Red Leather",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgporrf0e1Y07PDdTjFH7ci-kZK0j_qlY-qFqWdY781lxL3Dp4qjjgOwrUQ4Y2qlJNTDIAQ5YAzRrlG4kufrjcTutM6dmiBj6SA8pSGKXAbUj-c",
        "prices": {
            "FN": 26.39,
            "MW": 20.22,
            "FT": 17.81,
            "WW": 26.03,
            "BS": 24.46
        }
    }, {
        "id": 1112,
        "collectionId": 72,
        "type": "weapon",
        "weaponName": "Sawed-Off",
        "skinName": "First Class",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopbuyLgNv1fX3cih9686zkY60m_L1J7PUhFRC6dJ0jubH87P5gVO8v11tZTr7IYWRcwZvZF7Z_Fm7yb_r0cW_tJ6fyXYwuXQnsHvfzRW_hxtNcKUx0utU4ZPS",
        "prices": {
            "FN": 29.39,
            "MW": 18.01,
            "FT": 15.17,
            "WW": 13.53,
            "BS": 24.83
        }
    }, {
        "id": 1113,
        "collectionId": 72,
        "type": "weapon",
        "weaponName": "SSG 08",
        "skinName": "Sand Dune",
        "rarity": "base",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopamie19fwPz3YjxM6OO6nYeDg7mjYrjTwzxTsZx0j7CU9NWn2wXkqUc6ZmynI4GVe1RtZA7VqQK8xOu6m9bi6zNHnIHx",
        "prices": {
            "FN": 30.83,
            "MW": 3.97,
            "FT": 1.34,
            "WW": 1.54,
            "BS": 2.38
        }
    }, {
        "id": 1114,
        "collectionId": 72,
        "type": "weapon",
        "weaponName": "USP-S",
        "skinName": "Business Class",
        "rarity": "mil-spec",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo6m1FBRp3_bGcjhQ09-jq4yekPD1NL7ug3hBpdZOhuDG_Zi721WwqBJvMGH2coPEJwRsYVDT_lm3kO_vgJ_pvZ_MzXZivXZ04nyOlwv330_YPZS7Gw",
        "prices": {
            "FN": 41.97,
            "MW": 24.26,
            "FT": 19.36,
            "WW": 16.12,
            "BS": 16.29
        }
    }, {
        "id": 1115,
        "collectionId": 72,
        "type": "weapon",
        "weaponName": "AK-47",
        "skinName": "First Class",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszPYzhH4uO6kYGfn_LmDLrawjxu5Mx2gv2PrNqn2lLkr0Fkaj36LNfEdwY8YlCD-gK3xOjphpfuu56bmnFivSF3sWGdwUIT_NQ9Tg",
        "prices": {
            "FN": 88.92,
            "MW": 61.89,
            "FT": 48.59,
            "WW": 41.74,
            "BS": 41.75
        }
    }, {
        "id": 1116,
        "collectionId": 72,
        "type": "weapon",
        "weaponName": "Desert Eagle",
        "skinName": "Pilot",
        "rarity": "restricted",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposr-kLAtl7PLZTi1L4NOiq4SOlvD4NoTdn2xZ_Isn2uuR8Nug3VGy-kdvYmiiLITDd1A9ZFHS8gDqwOa718S67cjLmHplpGB8stOGlY0p",
        "prices": {
            "FN": 123.2,
            "MW": 78.07,
            "FT": 61.34,
            "WW": 40.77,
            "BS": 39.43
        }
    }, {
        "id": 1117,
        "collectionId": 72,
        "type": "weapon",
        "weaponName": "AK-47",
        "skinName": "Jet Set",
        "rarity": "classified",
        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszfdDFO08iklZaOm_LwDLrawjxu5Mx2gv2PotytiQHnqhBoZGqnI9XBcgQ-Yl_Y_Vfvyey9g8S4753JzSA1s3Eh5GGdwUIoc5a5cw",
        "prices": {
            "FN": 579.31,
            "MW": 208.27,
            "FT": 161.83,
            "WW": 123.67,
            "BS": 114.59
        }
    },

    // Revolution Case
    {
        "id": 1118,
        "collectionId": 73,
        "type": "weapon",
        "weaponName": "SCAR-20",
        "skinName": "Fragments",
        "rarity": "mil-spec",
        "image": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_scar20_gs_scar_fragments_black_light_large.d6bde287b06ba2380ba07621a0b06c36b13c4025.png",
        "prices": {
            "FN": null
        }
    }, {
        "id": 1119,
        "collectionId": 73,
        "type": "weapon",
        "weaponName": "Rare",
        "skinName": "★ Gloves ★",
        "rarity": "gold",
        "image": "./assets/rare-item.png"
    },
];

export default Weapons;

export const getCollectionItems = collectionId => {
    return Weapons.filter(weapon => {
        if (Array.isArray(weapon.collectionId)) {
            return weapon.collectionId.includes(
                Number(collectionId)
            );
        }

        return weapon.collectionId === Number(collectionId);
    });
}

const STEAM_IMAGES_ROOT = "https://steamcommunity-a.akamaihd.net/economy/image/";
export const getItemImageUrl = item => {
    if (!item || !item.image) return null;

    if (
        item.image.startsWith("http")
        || item.image.startsWith("./assets")
    ) return item.image;

    return STEAM_IMAGES_ROOT + item.image;
};

window.Weapons = Weapons;
window.RareItems = RareItems;

// MATH WEAPON PRICE HELPER
var startId = 0, collectionId = 0;
const proxy = () => {
    startId++;
    return scanPage(startId, collectionId);
}
const proxy_ = () => {
    startId--;
    var t = scanPage(startId, collectionId);
    t.rarity = "gold";
    return t;
}

const getDollars2 = (...dollars) => {
    var basic = ["FN","MW","FT","WW","BS"]
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
    
        return Number(text)
    })

    rarity = rarity.replace(/grade| /ig, "");
    if (rarity == "consumer") rarity = "base";
    
    return {
        id,
        collectionId,
        type: "weapon",
        weaponName: name[0],
        skinName: name[1],
        rarity: rarity,
        image,
        prices: getDollars2(...prices)
    }
} 