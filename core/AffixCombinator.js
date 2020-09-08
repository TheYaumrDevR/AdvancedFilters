let affixesToCombine;

module.exports = {
    setupAffixCombinator: function(affixes) {
        affixesToCombine = affixes;
    },

    combine: function(k) {
        return combineRecursive(affixesToCombine, k);
    }
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