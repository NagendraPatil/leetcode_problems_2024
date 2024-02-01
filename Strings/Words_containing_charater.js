/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function (words, x) {
    let op = [];
    for (let i = 0; i < words.length; i++) {
        if (words[i].includes(x)) {
            op.push(i);
        }
    }
    return op;
};

// Problem 2942