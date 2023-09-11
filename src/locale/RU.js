export default {
    common: {
        price: "Цена",
        from: "Из",
        buy: "Купить",
        balance: "Баланс",
        selected: "выбрано",
        search: "Поиск",
        cancel: "Закрыть",
        sell: "Продать",
        storage: "Хранилище",
        use: "Использовать",
        ok: "ОК",
        murkup: "Наценка",
        options: "Опции",
        next: "Далее"
    },

    property: {
        souvenir: "Сувенирный",
        rarity: "Редкость",
        quality: "Качество",
        origin: "Источник",
        collection: "Коллекция",
        exclusive: "Эксклюзивный",
        percentOfInventory: "{d} от цены вашего инвентаря",
        couldContain: "Ваш инвентарь может содержать {d} таких",

        TypeMachineguns: "Пулемёты",
        TypeShotguns: "Дробовики",
        TypeSniperRifles: "Снайперские Винтовки",
        TypeRifles: "Винтовки",
        TypeSMGs: "ПП",
        TypePistols: "Пистолеты",
        TypeGloves: "Перчатки",
        TypeKnifes: "Ножи",

        RarityGold: "Очень Редкое",
        RarityCovert: "Тайное",
        RarityClassified: "Засекреченное",
        RarityRestricted: "Запрещённое",
        RarityMilspec: "Армейское",
        RarityIndustrial: "Промышленное",
        RarityBase: "Ширпотреб",

        QualityFN: "Прямо с Завода",
        QualityMW: "Немного поношенное",
        QualityFT: "После полевых",
        QualityWW: "Поношенное",
        QualityBS: "Закаленное в боях",

        OriginFoundinCrate: "Получен из Кейса",
        OriginCrafted: "Крафт",
        OriginPurchased: "Приобретен",
        OriginUpgraded: "Апгрейд",
        OriginTradedUp: "Контракт",
        OriginUnknown: "Неизвестно"
    },

    filters: {
        allTypes: "Все Типы",
        allQualities: "Все Качества",
        allRarities: "Все Редкости"
    },

    tabs: {
        menu: "Меню",
        cases: "Кейсы",
        profile: "Профиль",
        casino: "Казино",
        statistics: "Статистика",
        settings: "Настройки",
    },

    cases: {
        bestDrop: "Лучший Дроп",
        cases: "Кейсы",
        special: "Коллекции",
        openCase: "Открыть Кейс",
        openCollection: "Открыть Коллекцию"
    },

    profile: {
        showcase: "Витрина",
        inventory: "Инвентарь",
        special: "Особое",
        rifles: "Винтовки",
        pistols: "Пистолеты",
        totalItems: "Предметов",
        totalStorages: "Хранилищ",
        selectForShowcase: "Выставить на Витрину",
        findInShop: "Найти в Магазине",
        removeFromShowcase: "Убрать с Витрины",
        available: "Имеется",
        selectAll: "Выбрать все",
        selectAllHint: "Выбрать все {s} ({d})"
    },

    casino: {
        roulette: "Рулетка",
        craft: "Крафт",
        contract: "Контракт",
        upgrader: "Апгрейд",
        shop: "Магазин"
    },

    contract: {
        hint: "выберите от 3 до 5 предметов",
        totalPrice: "Цена Контракта",
        possibleRange: "Возможный Выигрыш",
        sign: "Подписать",
        new: "Новый Контракт"
    },

    craft: {
        rarity: "Редкость",
        extra: "Дополнительно",
        defaultSubtitle: "Стандартные Предметы",
        stattrackSubtitle: "Предметы с Технологией StatTrak™",

        craftPrice: "Сумма Крафта",
        craftRange: "Возможный Выигрыш",
        signCraft: "Подписать",
        newCraft: "Новый Крафт"
    },

    upgrader: {
        hint: "Выберите Предмет",
        multiplier: "Множитель",
        priority: "Приоритет",
        upgrade: "Апгрейд",
        error: "Нет доступных предметов. Выберите другой предмет или множитель!"
    },

    shop: {
        hint: "Выберите Коллекцию",
        hint2: "Выберите Предмет"
    },

    roulette: {
        bet: "Ставка",
        roll: "Крутить!",
        error: "Минимальная ставка: {d}!"
    },

    ItemPage: {
        previousPage: "Предыдущая страница",
        nextPage: "Следующая страница",
        openFilters: "Открыть Фильтры"
    },

    modals: {
        sellItems: {
            title: "Продать {d} {s}",
            line1: "Вы уверены, что хотите продать {d} {s}?",
            line2: "После продажи вы получите {d}"
        }, 
        
        storageBuy: {
            title: "Купить хранилище",
            line1: "Купить хранилище за {d}?",
            line2: "Введите имя хранилища",
            line3: "Внимание: Имя не может быть изменено в будущем",
            placeholder: "Имя хранилища",
            action: "Купить за {d}",
            invalidName: "Неверное имя хранилища!",
            nameTaken: "Это имя уже занято!",
            validName: "Это имя можно использовать"
        },

        settings: {
            language: "Язык",
            currency: "Валюта",
            volume: "Громкость"
        }
    },

    Plural: {
        items: [ "предмет", "предмета", "предметов" ]
    }
}