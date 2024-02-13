/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var rowAndMaximumOnes = function (mat) {
    let op = [0, 0];
    for (let i = 0; i < mat.length; i++) {
        let ones = 0;
        for (let j = 0; j < mat[i].length; j++) {
            if (mat[i][j] === 1) {
                ones++;
            }
        }
        if (op[1] < ones) {
            op[1] = ones;
            op[0] = i;
        }
    }
    return op;
};

// Problem 2643