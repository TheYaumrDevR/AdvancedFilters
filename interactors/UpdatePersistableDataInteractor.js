const persistableDataBuilder = require('../core/PersistableDataBuilder');
const dataPersistenceGateway = require('../ioadapters/gateways/DataPersistenceMainThreadGateway');

persistableDataBuilder.construct();

module.exports = {
    prepareHighlightingRulesForFuturePersistence: function(allHighlightingRulesFromInput) {
        persistableDataBuilder.setLowValueHighlightSetting(allHighlightingRulesFromInput.lowValueHighlightingRule);
        persistableDataBuilder.setMidValueHighlightSetting(allHighlightingRulesFromInput.midValueHighlightingRule);
        persistableDataBuilder.setHighValueHighlightSetting(allHighlightingRulesFromInput.highValueHighlightingRule);
        
        const highlightRulesAndCombinableAffixesPerEquipmentType = persistableDataBuilder.build();

        dataPersistenceGateway.persistDataOnMainThread(highlightRulesAndCombinableAffixesPerEquipmentType);
    },

    affixPoolChanged: function() {
        persistableDataBuilder.newAffixPool();
    },

    prepareAffixPoolOfItemTypeForPersistence: function(affixPool, itemType) {
        persistableDataBuilder.setAffixPoolForItemType(affixPool, itemType);

        const highlightRulesAndCombinableAffixesPerEquipmentType = persistableDataBuilder.build();

        dataPersistenceGateway.persistDataOnMainThread(highlightRulesAndCombinableAffixesPerEquipmentType);
    }
}