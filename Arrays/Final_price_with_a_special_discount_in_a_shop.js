/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function (prices) {
    let answers = [];
    for (let i = 0; i < prices.length; i++) {
        let ref = true;
        for (let j = i + 1; j < prices.length; j++) {
            if (prices[j] <= prices[i]) {
                answers.push(prices[i] - prices[j]);
                ref = false;
                break;
            }
        }
        if (ref) {
            answers.push(prices[i]);
        }
    }
    return answers;
};

// Problem 1475