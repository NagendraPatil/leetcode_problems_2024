/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortString = function (order, s) {
    let obj = {};
    for (let i = 0; i < s.length; i++) {
        if (obj[s[i]] === undefined) {
            obj[s[i]] = 1;
        } else {
            obj[s[i]]++;
        }
    }
    let op = '';
    let idx = 0;
    for (let key in obj) {
        if (obj.hasOwnProperty(order[idx])) {
            for (let i = 0; i < obj[order[idx]]; i++) {
                op += order[idx];
            }
            obj[order[idx]] = 0;
            idx++;
        }
    }
    for (let key in obj) {
        for (let i = 0; i < obj[key]; i++) {
            op += key;
        }
    }
    return op;
};

// Problem 791