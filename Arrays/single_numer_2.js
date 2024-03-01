/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    let op = {};
    for (let i = 0; i < nums.length; i++) {
        if (op[nums[i]] === undefined) {
            op[nums[i]] = 1;
        } else {
            op[nums[i]]++;
        }
    }

    for (let key in op) {
        if (op[key] === 1) {
            return key;
        }
    }
};

// problem 137