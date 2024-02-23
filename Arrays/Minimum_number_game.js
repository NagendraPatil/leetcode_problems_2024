/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberGame = function (nums) {
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length; i = i + 2) {
        let temp = nums[i + 1];
        nums[i + 1] = nums[i];
        nums[i] = temp;
    }
    return nums;
};

// Problem 2974