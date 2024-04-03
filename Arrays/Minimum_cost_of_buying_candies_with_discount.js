/**
 * @param {number[]} cost
 * @return {number}
 */
var minimumCost = function (cost) {
    cost.sort((a, b) => a - b);
    let op = 0;
    let count = 0;
    for (let i = cost.length - 1; i >= 0; i--) {
        count++;
        if (count < 3) {
            op += cost[i];
        } else {
            count = 0;
        }
    }
    return op;
};

// Problem 2144