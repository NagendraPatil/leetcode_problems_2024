/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function (nums) {
    let op = -1;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] - nums[i] > op && i < j && j < nums.length && nums[i] < nums[j]) {
                op = nums[j] - nums[i];
            }
        }
    }
    return op;
};

// Problem 2016