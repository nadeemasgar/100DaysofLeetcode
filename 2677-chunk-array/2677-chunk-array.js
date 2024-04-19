/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    const result = [];
    while(arr.length > 0) {
        const removedEle = arr.splice(0, size);
        result.push(removedEle);
    }
    
    return result;
};
