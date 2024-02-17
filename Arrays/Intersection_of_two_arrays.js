/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
    for (let i = 0; i < nums1.length; i++) {
        if (!nums2.includes(nums1[i])) {
            nums1.splice(i, 1);
            i--;
        }
    }
    return [...new Set(nums1)];
};

// Problem 349