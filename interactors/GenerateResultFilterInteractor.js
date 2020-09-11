const affixCombinator = require('../core/AffixCombinator');
const resultPagePresenter = require('../ioadapters/presenters/ResultPagePresenter');

module.exports = {
    combineAffixPoolsOfEquipments: function(equipmentsWithAffixPools, kChooseNumber) {
        if (kChooseNumber != NaN) {
            resultPagePresenter.constructResultPagePresenter();

            const combinedAffixes = equipmentsWithAffixPools.map(itemTypeWithAffixPool => {
                if (itemTypeWithAffixPool.affixes != null) {
                    affixCombinator.setupAffixCombinator(itemTypeWithAffixPool.affixes);
                    return affixCombinator.combine(kChooseNumber);
                }

                return [];
            });

            const resultFilterOutput = transformCombinedAffixesToOutputFormat(combinedAffixes);

            resultPagePresenter.showResult(resultFilterOutput);
        }
    }
}

function transformCombinedAffixesToOutputFormat(combinedAffixesPerItem) {
    const resultWithEmptyItemCombinations = combinedAffixesPerItem.map(allCombinationsForItem => {
        return allCombinationsForItem.map(oneAffixCombination => {
            return oneAffixCombination.reduce((stringifiedAffixes, currentAffix) => {
                return stringifiedAffixes + '\n' + currentAffix;
            });
        });
    });

    const resultWithInnerArray = resultWithEmptyItemCombinations.filter(itemCombination => itemCombination.length > 0);
    const resultArrayOfIndividualItemTypes = resultWithInnerArray.map(innerFilterArrayForItemType => {
        return innerFilterArrayForItemType.reduce((stringifiedFilters, currentFilter) => {
            return stringifiedFilters + '\n\n' + currentFilter;
        });
    });

    const result = resultArrayOfIndividualItemTypes.reduce((finalLootFilterString, itemSpecificLootFilter) => {
        return finalLootFilterString + '\n\n' + itemSpecificLootFilter;
    });

    return result;
}