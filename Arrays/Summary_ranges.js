/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
    if (nums.length === 0) {
        return [];
    }
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] + 1 === nums[i + 1]) {
            nums[i] = ';' + nums[i];
        } else {
            nums[i] = '*' + nums[i];
        }
    }
    let op = [];
    let idx = 0;
    let ref = '';
    while (idx < nums.length) {
        if (nums[idx][0] === '*' && ref === '') {
            op.push(nums[idx].split('*')[1]);
        } else if (nums[idx][0] === '*' && ref !== '') {
            op.push(ref + '->' + nums[idx].split('*')[1]);
            ref = '';
        } else if (nums[idx][0] === ';' && ref === '') {
            ref = nums[idx].split(';')[1];
        }
        idx++;
    }
    return op;
};

// Problem 228