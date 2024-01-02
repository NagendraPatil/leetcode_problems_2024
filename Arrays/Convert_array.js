/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findMatrix = function (nums) {
    nums = nums.sort((a, b) => a - b);
    let max = 1;
    let id = 0;
    let id2 = 1;
    let ele = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (ele === nums[i]) {
            id2++;
        } else {
            if (max < (id2 - id)) {
                max = id2 - id;
            }
            id = id2;
            id2 = id + 1;
            ele = nums[i];
        }
    }
    if (max < (id2 - id)) {
        max = id2 - id;
    }
    let op = new Array(max);
    for (let i = 0; i < op.length; i++) {
        op[i] = [];
    }
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < max; j++) {
            if (!(op[j].includes(nums[i]))) {
                op[j].push(nums[i]);
                break;
            }
        }
    }
    return op;
};