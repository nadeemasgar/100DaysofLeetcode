/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
    const res = [];
    
    for(let i = 0; i < arr.length; i++) {
        const ele = arr[i];
        if(Array.isArray(ele) && n > 0) {
            res.push(...flat(ele, n - 1))
        }
        else {
            res.push(ele);
        }
    }
    
    return res;
};