/**
 * @param {string} s
 * @return {string}
 */
var sortVowels = function (s) {
    s = s.split('');
    let ref = [];
    for (let i = 0; i < s.length; i++) {
        if ('AEIOUaeiou'.includes(s[i])) {
            ref.push(s[i]);
        }
    }
    ref.sort();
    let idx = 0;
    for (let i = 0; i < s.length; i++) {
        if ('AEIOUaeiou'.includes(s[i])) {
            s[i] = ref[idx];
            idx++;
        }
    }
    return s.join('');
};

// Problem 2785