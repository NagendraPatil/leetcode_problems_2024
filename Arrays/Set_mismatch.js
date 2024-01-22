/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
    let ref = new Array(nums.length + 1).fill(0);
    ref[0] = -1;
    for (let i = 0; i < nums.length; i++) {
        ref[nums[i]]++;
    }
    let op = [-1, -1];
    for (let i = 0; i < ref.length; i++) {
        if (op[0] >= 0 && op[1] >= 0) {
            break;
        }
        if (ref[i] > 1) {
            op[0] = i;
        }
        if (ref[i] === 0) {
            op[1] = i;
        }
    }
    return op;
};
// Problem 645