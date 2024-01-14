/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function (word1, word2) {
    let w1 = {};
    let w2 = {};
    for (let i = 0; i < word1.length; i++) {
        if (w1[word1[i]] === undefined) {
            w1[word1[i]] = 1;
        } else {
            w1[word1[i]]++;
        }
    }
    for (let i = 0; i < word2.length; i++) {
        if (w2[word2[i]] === undefined) {
            w2[word2[i]] = 1;
        } else {
            w2[word2[i]]++;
        }
    }
    let r1 = Object.keys(w1).sort().join('');
    let r2 = Object.keys(w2).sort().join('');
    let l1 = Object.values(w1).sort((a, b) => a - b).join('');
    let l2 = Object.values(w2).sort((a, b) => a - b).join('');
    delete w1;
    delete w2;
    if (r1 === r2 && l1 === l2) {
        return true;
    }
    return false;
};

//Problem 1657