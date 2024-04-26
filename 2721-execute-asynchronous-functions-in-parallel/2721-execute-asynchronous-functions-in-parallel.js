/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function(functions) {
    const res = [];
    let count = 0;
    
    return new Promise((resolve, reject) => {
        functions.forEach((fn, idx) => {
            fn().then((val) => {
                res[idx] = val;
                count++;
            }).catch((err) => {
                reject(err);
            })
            .finally(() => {
                
                if(count === functions.length) {
                    resolve(res);
                }
            })
            
        })
    })
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */