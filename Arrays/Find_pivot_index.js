/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        let sum1 = 0;
        let sum2 = 0;
        for (let j = 0; j < nums.length; j++) {
            if (j < i) {
                sum1 += nums[j];
            }
            if (j > i) {
                sum2 += nums[j];
            }
        }
        if (sum1 === sum2) {
            return i;
        }
    }
    return -1;
};

// Problem 724