/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = new Map();
    for(let i = 0; i < nums.length; i++) {
        map.set(nums[i], i);
    }
    
    for(let i = 0; i < nums.length; i++) {
        const requiredElement = target - nums[i];
        if(map.has(requiredElement) && i !== map.get(requiredElement)) {
            return new Array(i, map.get(requiredElement))
        }
    }
    
    return new Array(1);
};