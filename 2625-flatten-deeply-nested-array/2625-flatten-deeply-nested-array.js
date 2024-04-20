/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function flatRecc (arr, d) {
    if(!Array.isArray(arr)) {
        return new Array();
    }
    
    const res = [];
    
    for(const ele of arr) {
        if(Array.isArray(ele) && d > 0) {
            res.push(...flatRecc(ele, d - 1));
        }
        else {
            res.push(ele);
        }
    }
    
    return res;
    
};