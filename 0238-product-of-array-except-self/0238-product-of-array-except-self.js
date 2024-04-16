/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    // left product
    const leftProd = [1];
    for(let i = 1; i < nums.length; i++) {
        leftProd.push(leftProd[i-1] * nums[i-1]);
    }
   
    const rightProd = new Array(nums.length).fill(1);
    for(let i = nums.length - 2; i >= 0; i--) {
        rightProd[i] = rightProd[i + 1] * nums[i + 1];
    }
    
    const res = [];
    for(let i = 0; i < nums.length; i++) {
        res.push(leftProd[i] * rightProd[i]);
    }
    
    return res;
};