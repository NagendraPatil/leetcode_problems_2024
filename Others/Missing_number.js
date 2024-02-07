/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length; i++) {
        if (i + 1 === nums[i]) {
            return i;
        }
    }
    return nums.length;
};

// Problem 268