/**
 * @param {number[]} nums
 * @return {number}
 */
var returnToBoundaryCount = function (nums) {
    let count = 0;
    let ref = 0;
    for (let i = 0; i < nums.length; i++) {
        ref += nums[i];
        if (ref === 0) {
            count++;
        }
    }
    return count;
};

// Problem 3028