/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
    nums1 = [...new Set(nums1)];
    nums2 = [...new Set(nums2)];
    let op = [[], []];

    for (let i = 0; i < nums1.length; i++) {
        if (!nums2.includes(nums1[i]) && !op[0].includes(nums1[i])) {
            op[0].push(nums1[i])
        }
    }

    for (let i = 0; i < nums2.length; i++) {
        if (!nums1.includes(nums2[i]) && !op[1].includes(nums2[i])) {
            op[1].push(nums2[i])
        }
    }
    return op;
};

//Problem 2215