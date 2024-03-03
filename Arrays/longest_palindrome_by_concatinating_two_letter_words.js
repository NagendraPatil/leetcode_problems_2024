/**
 * @param {string[]} words
 * @return {number}
 */
var longestPalindrome = function (words) {
    let doubles = {};
    let singles = 0;
    for (let i = 0; i < words.length; i++) {
        if (words[i] && words[i][0] !== words[i][1]) {
            let idx = words.findIndex((ele) => ele === words[i][1] + words[i][0]);
            if (idx > -1) {
                words[i] = null;
                words[idx] = null;
                singles += 2;
            }
        } else if (words[i]) {
            if (doubles[words[i]] === undefined) {
                doubles[words[i]] = 1;
            } else {
                doubles[words[i]]++;
            }
        }
    }
    let greater = 0;
    if (Object.keys(doubles).length) {
        let rep = Math.max(...Object.values(doubles));
        greater += rep;
        let ref = '';
        for (let key in doubles) {
            if (doubles[key] === rep) {
                ref = key;
                break;
            }
        }
        for (let key in doubles) {
            if (doubles[key] % 2 === 0) {
                greater += doubles[key];
            } else if (ref !== key) {
                greater += doubles[key] - 1;
            }
        }
    }
    return (greater + singles) * 2;
};

// Problem 2131