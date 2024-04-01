/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let str = s.trim();
    const arr = str.split(' ');
    return arr[arr.length - 1].length
};