/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
    if (nums.length === k) {
        return (nums.reduce((a, b) => a + b)) / k;
    }
    if (k === 1) {
        return Math.max(...nums);
    }
    let op = [];
    let idx = 0;
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        if (i >= k) {
            sum -= nums[idx];
            idx++;
        }
        sum += nums[i];
        if (i >= k-1) {
            op.push(sum / k);
        }
        // console.log(sum);
    }
    // console.log(op);
    return Math.max(...op);
};

// Problem 643