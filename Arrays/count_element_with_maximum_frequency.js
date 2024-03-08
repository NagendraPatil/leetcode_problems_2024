/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function (nums) {
    let obj = {};
    for (let i = 0; i < nums.length; i++) {
        if (obj[nums[i]] === undefined) {
            obj[nums[i]] = 1;
        } else {
            obj[nums[i]]++;
        }
    }
    let max = Math.max(...Object.values(obj));
    let count = 0;
    for (let key in obj) {
        if (obj[key] === max) {
            count += obj[key];
        }
    }
    return count;
};

// Problem 3005