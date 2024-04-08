/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const map = new Map();
    for(let s of strs) {
        const key = s.split("").sort().join("");
        if(!map.has(key)) {
            map.set(key, new Array(s));
        }
        else {
            const arr = map.get(key);
            arr.push(s);
        }
    }
    
    const ans = [];
    for(let value of map.values()) {
        ans.push(value);
    }
    return ans;
};