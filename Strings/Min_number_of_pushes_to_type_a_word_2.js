/**
 * @param {string} word
 * @return {number}
 */
var minimumPushes = function (word) {
    let ref = {};
    for (let i = 0; i < word.length; i++) {
        if (ref[word[i]] === undefined) {
            ref[word[i]] = 1;
        } else {
            ref[word[i]]++;
        }
    }
    if (Object.keys(ref).length <= 8) {
        return Object.values(ref).reduce((a, b) => a + b);
    } else {
        let el = Object.values(ref).sort((a,b) => b - a);
        let count = 0;
        for (let i = 0; i < el.length; i++) {
            if (i < 8) {
                count += el[i];
            }
            if (i >= 8 && i < 16) {
                count += el[i] * 2;
            }
            if (i >= 16 && i < 24) {
                count += el[i] * 3;
            }
            if (i >= 24) {
                count += el[i] * 4;
            }
        }
        return count;
    }
};

// Problem 3016