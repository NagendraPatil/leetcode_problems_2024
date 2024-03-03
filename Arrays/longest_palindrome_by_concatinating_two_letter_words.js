/**
 * @param {string[]} words
 * @return {number}
 */
var longestPalindrome = function (words) {
    let doubles = {};
    let singles = {};
    for (let i = 0; i < words.length; i++) {
        if (words[i][0] !== words[i][1]) {
            if (singles[words[i]] === undefined) {
                singles[words[i]] = 1;
            } else {
                singles[words[i]]++;
            }
        } else {
            if (doubles[words[i]] === undefined) {
                doubles[words[i]] = 1;
            } else {
                doubles[words[i]]++;
            }
        }
    }
    let greater = 0;
    for (let key in singles) {
        let key2 = key[1] + key[0];
        if (singles[key] && singles[key2]) {
            greater += Math.min(singles[key], singles[key2]) * 2;
            singles[key] = 0;
            singles[key2] = 0;
        }
    }
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
        let isFilled = false;
        for (let key in doubles) {
            if (ref !== key) {
                if (doubles[key] % 2 === 0) {
                    greater += doubles[key];
                } else {
                    if (rep % 2 === 0 && !isFilled) {
                        greater += doubles[key];
                        isFilled = true;
                    } else {
                        greater += doubles[key] - 1;
                    }
                }
            }
        }
    }
    return (greater) * 2;
};

// Problem 2131