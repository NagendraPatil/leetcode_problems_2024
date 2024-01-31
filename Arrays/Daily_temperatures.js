/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
    let op = new Array(temperatures.length).fill(0);
    for (let i = 0; i < temperatures.length; i++) {
        if (temperatures[i] === temperatures[i - 1] && op[i - 1] !== 0) {
            op[i] = op[i - 1] - 1;
        } else {
            let count = 0;
            for (let j = i; j < temperatures.length; j++) {
                if (temperatures[j] > temperatures[i]) {
                    op[i] = count;
                    break;
                }
                count++;
            }
        }
    }
    return op;
};

// Problem 739