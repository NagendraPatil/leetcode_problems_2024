/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    let vowels = '';
    let op = '';
    for (let i = 0; i < s.length; i++) {
        if ('aeiouAEIOU'.includes(s[i])) {
            vowels += s[i];
            op += '_';
        } else {
            op += s[i];
        }
    }
    let idx = 0;
    op = op.split('');
    for (let i = op.length; i >= 0; i--) {
        if (op[i] === '_') {
            op[i] = vowels[idx];
            idx++;
        }
    }
    return op.join('');
};
//  Problem 345