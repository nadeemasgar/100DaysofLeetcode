/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
    const res = {};
    for(const i of arr1) {
        res[i.id] = i;
    }
    
    for(const i of arr2) {
        if(res[i.id]) {
            res[i.id] = {...res[i.id], ...i}; 
        }
        else {
            res[i.id] = i;
        }
    }
    
    return Object.values(res);
};