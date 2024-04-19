/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    let idx = 0;
    const result = [];
    while(idx < arr.length) {
        const chunkedArray = arr.slice(idx, idx + size);
        result.push(chunkedArray);
        idx += size;
    }
    
    return result;
};
