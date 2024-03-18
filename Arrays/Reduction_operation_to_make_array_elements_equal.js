/**
 * @param {number[]} nums
 * @return {number}
 */
var reductionOperations = function (nums) {
    let obj = {};
    for (let i = 0; i < nums.length; i++) {
        if (obj[nums[i]] == undefined) {
            obj[nums[i]] = 1;
        } else {
            obj[nums[i]]++;
        }
    }
    let count = 0;
    let ele = Object.keys(obj).sort((a, b) => a - b);
    let len = ele.length - 1;
    for (let key in obj) {
        count += (len) * obj[`${ele[len]}`];
        len--;
    }
    return count;
};

// Problem 1887