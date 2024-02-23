/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function (n) {
    let count = 0;
    let st = 1;
    let strt = 1;
    let idx = 1;
    while (idx <= n) {
        if (idx % 7 === 0) {
            count += st;
            st = strt + 1;
            strt++;
        } else {
            count += st;
            st++;
        }
        // console.log(count, st, idx);
        idx++;
    }
    return count;
};

// Problem 1716