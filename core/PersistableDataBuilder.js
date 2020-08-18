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
    
    build: function() {
        return result;
    }
}