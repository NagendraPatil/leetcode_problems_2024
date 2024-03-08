/**
 * @param {string} s
 * @return {number}
 */
var minimumLength = function (s) {
    s = s.split('');
    let l = 0; r = s.length - 1;
    while (l < r) {
        if (s[l] === s[r] && l === r - 1) {
            return 0;
        }
        else if (s[l] === s[l + 1] && s[l] === s[r]) {
            s[l] = '-';
            l++;
        }
        else if (s[r] === s[r - 1] && s[l] === s[r]) {
            s[r] = '-';
            r--;
        }
        else if (s[l] === s[r]) {
            s[l] = '-';
            s[r] = '-';
            l++;
            r--;
        }
        else {
            break;
        }
    }
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== '-') {
            count++;
        }
    }
    return count;
};

// Problem 1750