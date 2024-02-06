/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
    if ([...new Set(s.split(''))].length !== [...new Set(t.split(''))].length) {
        return false;
    }
    let obj1 = {};
    for (let i = 0; i < s.length; i++) {
        if (obj1[s[i]] === undefined) {
            obj1[s[i]] = t[i];
        } else if (obj1[s[i]] === t[i]) {
            continue;
        } else {
            return false;
        }
    }
    return true;
};


// Problem 205