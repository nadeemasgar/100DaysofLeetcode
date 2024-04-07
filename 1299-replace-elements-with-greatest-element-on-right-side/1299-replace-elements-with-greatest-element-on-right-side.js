/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    const n = arr.length - 1;
    const ans  = [];
    ans[n] = -1;
    
    for(let i = n - 1; i >= 0; i--) {
        const max = Math.max(arr[i + 1], ans[i + 1]);
        ans[i] = max;
    }
    
    return ans;
};