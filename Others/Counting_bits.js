/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
    function getBinary(num) {
        let count = 0;
        let ref = num.toString(2);
        for (let i = 0; i < ref.length; i++) {
            if (ref[i] === '1') {
                count++;
            }
        }
        return count;
    }
    let op = [];
    for (let i = 0; i <= n; i++) {
        op.push(getBinary(i));
    }
    return op;
};

// Problem 338