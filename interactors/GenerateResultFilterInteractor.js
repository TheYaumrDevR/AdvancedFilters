const affixCombinator = require('../core/AffixCombinator');
const filterRuleHeaderCreator = require('../core/FilterRuleHeaderCreator');
const resultPagePresenter = require('../ioadapters/presenters/ResultPagePresenter');

module.exports = {
    combineAffixPoolsOfEquipments: function(equipmentsWithAffixPools, kChooseNumber) {
        if (kChooseNumber != NaN) {
            resultPagePresenter.constructResultPagePresenter();

            const combinedAffixes = equipmentsWithAffixPools.map(itemTypeWithAffixPool => {
                if (itemTypeWithAffixPool.affixes != null) {
                    affixCombinator.setupAffixCombinator(itemTypeWithAffixPool.affixes);
                    const combinedAffixes = affixCombinator.combine(kChooseNumber);
                    const result = combinedAffixes.map(singleCombinedAffixes => {
                        return { 
                            itemType: itemTypeWithAffixPool.itemType,
                            affixCombination: singleCombinedAffixes,
                            highlightInstruction: itemTypeWithAffixPool.highlightInstruction
                        }
                    });
                    return result;
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
            const result = {
                itemType: oneAffixCombination.itemType,
                highlightInstruction: oneAffixCombination.highlightInstruction,
                affixCombination: ''
            }

            const affixCombinationString = oneAffixCombination.affixCombination.reduce((stringifiedAffixes, currentAffix) => {
                if (stringifiedAffixes === '') {
                    return '\tHasExplicitMod ' + currentAffix;
                }

                return stringifiedAffixes + '\n\tHasExplicitMod ' + currentAffix;
            }, '');

            result.affixCombination = affixCombinationString;
            return result;
        });
    });

    const resultWithInnerArray = resultWithEmptyItemCombinations.filter(itemCombination => itemCombination.length > 0);
    const resultArrayOfIndividualItemTypes = resultWithInnerArray.map(innerFilterArrayForItemType => {
        return innerFilterArrayForItemType.reduce((stringifiedFilters, currentFilter) => {
            const filterHeader = filterRuleHeaderCreator.mapItemTypeToFilterRuleHeader(currentFilter.itemType);

            if (stringifiedFilters === '') {
                return filterHeader + currentFilter.affixCombination + '\n' + currentFilter.highlightInstruction;;
            }

            return stringifiedFilters + '\n\n' + filterHeader + currentFilter.affixCombination + '\n' + currentFilter.highlightInstruction;
        }, '');
    });

    const result = resultArrayOfIndividualItemTypes.reduce((finalLootFilterString, itemSpecificLootFilter) => {
        return finalLootFilterString + '\n\n' + itemSpecificLootFilter;
    });

    return result;
}