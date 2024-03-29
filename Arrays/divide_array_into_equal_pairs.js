/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function (nums) {
    let obj = {};
    for (let i = 0; i < nums.length; i++) {
        if (obj[nums[i]] === undefined) {
            obj[nums[i]] = 1;
        } else {
            obj[nums[i]]++;
        }
    }
    for (let key in obj) {
        if (obj[key] % 2 !== 0) {
            return false;
        }
    }
    return true;
};