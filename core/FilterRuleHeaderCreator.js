module.exports = {
    mapItemTypeToFilterRuleHeader: function(itemId) {
        itemType = mapItemIdToItemType(itemId);
        filterRuleHeader = 'Show\n\tIdentified True\n\tRarity Rare\n\tClass "' + itemType + '"\n';
        return filterRuleHeader;
    }
}

function mapItemIdToItemType(itemId) {
    switch(itemId) {
        case 'weapon':
            return 'Weapon';
        case 'helmet':
            return 'Helmets';
        case 'body':
            return 'Body Armour';
        case 'boots':
            return 'Boots';
        case 'gloves':
            return 'Gloves';
        case 'amulets':
            return 'Amulets';
        case 'rings':
            return 'Rings';
        case 'belts':
            return 'Belts';
        case 'crimsonJewel':
            return 'Crimson Jewel';
        case 'viridianJewel':
            return 'Viridian Jewel';
        case 'cobaltJewel':
            return 'Cobalt Jewel';
        case 'murderousEyeJewel':
            return 'Abyss Jewel';
        case 'searchingEyeJewel':
            return 'Abyss Jewel';
        case 'hypnoticEyeJewel':
            return 'Abyss Jewel';
        case 'ghastlyEyeJewel':
            return 'Abyss Jewel';
    }
}