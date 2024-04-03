/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let res = [];

    for (let i = 0; i < numRows; i++) {
        let subList = [];

        for (let j = 0; j <= i; j++) {
            if (j === 0 || j === i) {
                subList.push(1);
            } else {
                let sum = res[i - 1][j] + res[i - 1][j - 1];
                subList.push(sum);
            }
        }

        res.push(subList);
    }

    return res;    
};