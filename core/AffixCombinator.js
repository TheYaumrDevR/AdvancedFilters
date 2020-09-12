let affixesToCombine;

module.exports = {
    setupAffixCombinator: function(affixes) {
        affixesToCombine = affixes;
    },

    combine: function(k) {
        const allCombinations =  combineRecursive(affixesToCombine, k);

        if (k > 3) {
            return removeCombinationsWithMoreThanThreePrefixesOrSuffixes(allCombinations);
        }

        return allCombinations;
    }
}

function removeCombinationsWithMoreThanThreePrefixesOrSuffixes(allCombinations) {
    return allCombinations.filter(combination => {
        let amountOfPrefixes = 0;
        let amountOfSuffixes = 0;

        for (let i = 0; i < combination.length; i++) {
            if (isSuffix(combination[i])) {
                amountOfSuffixes++;
            } else {
                amountOfPrefixes++;
            }
        }

        return amountOfPrefixes < 4 && amountOfSuffixes < 4;
    });
}

function isSuffix(affix) {
    return affix.startsWith('"of ');
}

function combineRecursive(affixes, k) {
    const result = [];

    if (0 == k) {
        return [];
    }

    if (0 == affixes.length) {
        return [];
    }

    if (k >= affixes.length) {
        result.push(affixes);
        return result;
    }

    if (1 == k) {
        for (let i = 0; i < affixes.length; i++) {
            result.push([affixes[i]]);
        }
    } else {
        for (let i = 0; i < affixes.length - k + 1; i++) {
            const head = affixes.slice(i, i + 1);
            const tailCombinations = combineRecursive(affixes.slice(i + 1), k - 1);

            for (let j = 0; j < tailCombinations.length; j++) {
                result.push(head.concat(tailCombinations[j]));
            }
        }
    }

    return result;
}