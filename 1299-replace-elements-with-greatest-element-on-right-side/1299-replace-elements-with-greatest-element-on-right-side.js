/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    const ans = [];
    let n = arr.length;
    for(let i = 0; i < arr.length - 1; i++) {
        let max = Number.MIN_VALUE;
        for(let j = i + 1; j < arr.length; j++) {
            max = Math.max(max, arr[j]);
        }
        ans[i] = max;
    }
    
    ans[n - 1] = -1;
    return ans;
};