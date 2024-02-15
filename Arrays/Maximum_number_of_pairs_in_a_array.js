/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberOfPairs = function (nums) {
    let ref = {};
    for (let i = 0; i < nums.length; i++) {
        if (ref[nums[i]] === undefined) {
            ref[nums[i]] = 1;
        } else {
            ref[nums[i]]++;
        }
    }
    let op = [0, 0];
    for (let key in ref) {
        if (ref[key] % 2 === 0) {
            op[0] += ref[key] / 2;
        } else {
            op[0] += Math.floor(ref[key] / 2);
            op[1]++;
        }
    }
    return op;
};

// Problem 2341