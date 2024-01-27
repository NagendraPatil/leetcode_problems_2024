/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function (spells, potions, success) {
    if ([...new Set(spells)].length === 1 && [...new Set(potions)].length === 1 && [...new Set(potions)][0] * Math.min(...spells) >= success) {
        return spells;
    }
    potions.sort((a, b) => a - b);
    let op = [];
    let count = 0;
    for (let i = 0; i < spells.length; i++) {
        let l = 0;
        let r = potions.length - 1;
        while (l <= r) {
            let mid = l + (Math.floor((r - l) / 2));
            if (potions[mid] * spells[i] >= success) {
                r = mid - 1;
            } else {
                l = mid + 1;
            }
        }
        count = potions.length - 1 - r;
        op.push(count);
        count = 0;
    }
    return op;
}

// Problem 2300