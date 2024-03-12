/**
 * @param {number} n
 * @return {string}
 */
var thousandSeparator = function (n) {
    n = n.toString();
    let op = '';
    let idx = 0;
    for (let i = n.length - 1; i >= 0; i--) {
        if (idx % 3 === 0 && idx!==n.length) {
            op = '.' + op;
        }
        op = n[i] + op;
        idx++;
    }
    op = op.split('');
    op.pop();
    return op.join('');
};

// Problem 1556