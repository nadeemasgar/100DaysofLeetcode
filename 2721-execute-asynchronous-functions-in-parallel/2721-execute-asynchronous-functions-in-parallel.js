/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function(functions) {
    
    return new Promise((resolve, reject) => {
        const total = functions.length;
        const result = [];
        let count = 0;
        
        functions.forEach((fn, idx) => {
            fn().then((data) => {
                result[idx] = data;
            })
            .catch((err) => {
                reject(err);
            })
            .finally(() => {
                count++;
                if(count === total) {
                    resolve(result);
                }
            })
    })
    })
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */