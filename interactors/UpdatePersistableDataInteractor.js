const persistableDataBuilder = require('../core/PersistableDataBuilder');
const dataPersistenceGateway = require('../ioadapters/gateways/DataPersistenceMainThreadGateway');

module.exports = {
    prepareHighlightingRulesForFuturePersistence: function(allHighlightingRulesFromInput) {
        persistableDataBuilder.construct();
        persistableDataBuilder.setLowValueHighlightSetting(allHighlightingRulesFromInput.lowValueHighlightingRule);
        persistableDataBuilder.setMidValueHighlightSetting(allHighlightingRulesFromInput.midValueHighlightingRule);
        persistableDataBuilder.setHighValueHighlightSetting(allHighlightingRulesFromInput.highValueHighlightingRule);
        
        const highlightRulesAndCombinableAffixesPerEquipmentType = persistableDataBuilder.build();

        dataPersistenceGateway.persistDataOnMainThread(highlightRulesAndCombinableAffixesPerEquipmentType);
    }
}