/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
    nums = nums.sort((a,b)=>{return a-b;});
    let s = 0;
    let e = nums.length - 1;
    let count = 0;
    while(s<e){
          if(nums[s]+nums[e]===k){
                  count++;
                  s++;
                  e--;
          }else if(nums[s]+nums[e]>k){
                  e--;
          }else{
                  s++;
          }
    }
    return count;
};

// Problem 1679