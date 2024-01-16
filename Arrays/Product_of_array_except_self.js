/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    let refFrZeros = 0;
    let zeros = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            if (refFrZeros === 0 && zeros<=1) {
                refFrZeros = 1;
            }
            refFrZeros *= nums[i];
        }else{
            zeros++;
        }
    }

    if(zeros>1){
        return nums.fill(0);
    }

    let ref = nums.reduce((a, b) => a * b);
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            nums[i] = refFrZeros;
        } else {
            nums[i] = ref / nums[i];
        }
    }
    return nums;
};

// Problem 238