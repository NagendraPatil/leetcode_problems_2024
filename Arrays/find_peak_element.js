/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
    if (nums.length === 1) {
        return 0;
    } else {
        let ele = Math.max(...nums);
        return nums.findIndex(el => el === ele);
    }
};

// Problem 162