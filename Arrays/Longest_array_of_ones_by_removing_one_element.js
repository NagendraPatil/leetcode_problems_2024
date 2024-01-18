/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function (nums) {
    let op = [];
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            count++;
        } else {
            op.push(count);
            count = 0;
        }
    }
    op.push(count);
    if (count === nums.length) {
        return nums.length - 1;
    }
    let max = 0;
    for (let i = 0; i < op.length - 1; i++) {
        if (max < (op[i] + op[i + 1])) {
            max = (op[i] + op[i + 1]);
        }
    }
    return max;
};

// Problem 1493