let result = {};

module.exports = {

    construct: function() {
        result.equipmentTypesWithAffixPoolsForCombination = [];
        result.highlightSettings = {
            highValueSetting: "",
            midValueSetting: "",
            lowValueSetting: ""
        };
    },

    setHighValueHighlightSetting: function(value) {
        result.highlightSettings.highValueSetting = value;
    },

    setMidValueHighlightSetting: function(value) {
        result.highlightSettings.midValueSetting = value;
    },
    
    setLowValueHighlightSetting: function(value) {
        result.highlightSettings.lowValueSetting = value;
    },

    newAffixPool: function() {
        result.equipmentTypesWithAffixPoolsForCombination = [];
    },

    setAffixPoolForItemType: function(pool, typeOfItem) {
        const itemWithAffixPool = {
            itemType: typeOfItem,
            affixPool: pool
        };

        result.equipmentTypesWithAffixPoolsForCombination.push(itemWithAffixPool);
    },
    
    build: function() {
        return result;
    }
}