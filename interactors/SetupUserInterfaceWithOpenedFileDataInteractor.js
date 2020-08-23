const highLightRulesRendererThreadGateway = require('../ioadapters/gateways/HighlightRulesRenderThreadGateway');

module.exports = {

    setupUserInterfaceWithLoadedData: function(loadedData) {
        if (loadedData.hasOwnProperty('highlightSettings')) {
            sendHighlightSettingsToHighlightSettingsUi(loadedData.highlightSettings);
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