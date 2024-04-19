/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    const res = [];
    let subArray = [];
    
    for(let i = 0; i < arr.length; i++) {
        subArray.push(arr[i]);
        if(subArray.length === size) {
            res.push(subArray);
            subArray = [];
        }
    }
    
    if(subArray.length) {
        res.push(subArray);
    }
    
    return res;
};
