//solution 1
/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
    let refObj = {};
    for (let i = 0; i < nums.length; i++) {
        if (refObj[nums[i]] === undefined) {
            refObj[nums[i]] = 1;
        } else {
            refObj[nums[i]]++;
        }
    }
    if (Object.values(refObj).includes(1)) {
        return -1;
    }
    let count = 0;
    for (let ele in refObj) {
        if (refObj[ele] % 3 === 0) {
            count += refObj[ele] / 3;
        } else if (refObj[ele] % 3 === 2 || refObj[ele] % 3 === 1) {
            count += Math.floor(refObj[ele] / 3) + 1;
        }else if (refObj[ele] % 2 === 0) {
            count += refObj[ele] / 2;
        }
    }
    return count;
};

//solution 2
/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
    let refObj = {};
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        if (refObj[nums[left]] === undefined || refObj[nums[right]] === undefined) {
            if (nums[left] === nums[right]) {
                refObj[nums[left]] = 2;
                if (left === right) {
                    refObj[nums[left]] = 1;
                }
            } else {
                if (refObj[nums[right]] === undefined) {
                    refObj[nums[right]] = 1;
                } else {
                    refObj[nums[right]]++;
                }
                if (refObj[nums[left]] === undefined) {
                    refObj[nums[left]] = 1;
                } else {
                    refObj[nums[left]]++;
                }
            }
        } else {
            refObj[nums[left]]++;
            refObj[nums[right]]++;
            if (left === right) {
                refObj[nums[left]]--;
            }
        }
        left++;
        right--;
    }
    // console.log(refObj)
    if (Object.values(refObj).includes(1)) {
        return -1;
    }
    let count = 0;
    for (let ele in refObj) {
        if (refObj[ele] % 3 === 0) {
            count += refObj[ele] / 3;
        } else if (refObj[ele] % 3 === 2 || refObj[ele] % 3 === 1) {
            count += Math.floor(refObj[ele] / 3) + 1;
        } else if (refObj[ele] % 2 === 0) {
            count += refObj[ele] / 2;
        }
    }
    return count;
};