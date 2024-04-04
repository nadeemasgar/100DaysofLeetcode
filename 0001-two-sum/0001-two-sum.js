/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const newArray = nums.map((ele, idx) => {
        return { ele: ele, idx: idx }
    });
    newArray.sort((a, b) => a.ele - b.ele);
    
    let i = 0, j = newArray.length - 1;
    
    while(i < j) {
        const sum = newArray[i].ele + newArray[j].ele;
        if(sum < target) {
            i++;
        }
        else if(sum > target) {
            j--;
        }
        else {
            return new Array(newArray[i].idx, newArray[j].idx);
        }
    }
    
    return new Array(0);
};