/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const map1 = new Map();
    const map2 = new Map();
    
    for(const char of s) {
        const freq = map1.get(char) || 0;
        map1.set(char, freq + 1);
    }
    
    for(const char of t) {
        const freq = map2.get(char) || 0;
        map2.set(char, freq + 1);
    }
    
    if(map1.size !== map2.size) return false;
    
    for(const key of map1.keys()) {
        const val1 = map1.get(key) || 0;
        const val2 = map2.get(key) || 0;
        
        if(val1 !== val2) return false;
    }
    
    return true;
};