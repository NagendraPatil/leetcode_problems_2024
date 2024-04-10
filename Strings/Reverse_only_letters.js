/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function (s) {
    let op = [];
    let str = '';
    let ref = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for (let i = 0; i < s.length; i++) {
        if (ref.includes(s[i])) {
            op.push(null);
            str += s[i];
        } else {
            op.push(s[i]);
        }
    }
    // console.log(op,str);
    let idx = 0;
    for (let i = op.length - 1; i >= 0; i--) {
        if (op[i] === null) {
            op[i] = str[idx];
            idx++;
        }
    }
    // console.log(op)
    return op.join('');
};

// Problem 917