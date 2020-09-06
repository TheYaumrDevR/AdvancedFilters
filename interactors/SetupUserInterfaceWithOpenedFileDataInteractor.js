const highLightRulesRendererThreadGateway = require('../ioadapters/gateways/HighlightRulesRenderThreadGateway');
const affixPoolUiGateway = require('../ioadapters/gateways/AffixPoolUiGateway');

module.exports = {

    setupUserInterfaceWithLoadedData: function(loadedData) {
        if (loadedData.hasOwnProperty('highlightSettings')) {
            sendHighlightSettingsToHighlightSettingsUi(loadedData.highlightSettings);
        }

        if (loadedData.hasOwnProperty('equipmentTypesWithAffixPoolsForCombination')) {
            sendAffixPoolToAffixPoolUi(loadedData.equipmentTypesWithAffixPoolsForCombination);
        }
    }
}

function sendHighlightSettingsToHighlightSettingsUi(highlightSettings) {
    if (highlightSettings.hasOwnProperty('highValueSetting')) {
        highLightRulesRendererThreadGateway.fillHighlightRulesUiWithHighValueHighlightRule(highlightSettings.highValueSetting);
    }

    if (highlightSettings.hasOwnProperty('midValueSetting')) {
        highLightRulesRendererThreadGateway.fillHighlightRulesUiWithMediumValueHighlightRule(highlightSettings.midValueSetting);
    }
    
    if (highlightSettings.hasOwnProperty('lowValueSetting')) {
        highLightRulesRendererThreadGateway.fillHighlightRulesUiWithLowValueHighlightRule(highlightSettings.lowValueSetting);
    }    
}

function sendAffixPoolToAffixPoolUi(affixPool) {
    if (Array.isArray(affixPool)) {
        affixPoolUiGateway.fillAffixPoolUiWithAffixes(affixPool);
    }
}