/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const map = new Map();
    for(let num of nums) {
        const freq = map.get(num) || 0;
        map.set(num, freq + 1);
    }
    console.log(map)
    let count = 0;
    const sortedByValue = new Map([...map.entries()].sort((a, b) => b[1] - a[1]));

    const ans = [];
    for(let [key, value] of sortedByValue) {
        if(count < k) {
            ans.push(key);
            count++;
        }
    }
    
    return ans;
};