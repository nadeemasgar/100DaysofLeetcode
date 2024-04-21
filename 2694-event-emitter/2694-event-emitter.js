class EventEmitter {
    constructor() {
        this.eventMap = {};
    }
    /**
     * @param {string} eventName
     * @param {Function} callback
     * @return {Object}
     */
    subscribe(eventName, cb) {
        if(!(this.eventMap[eventName])) {
            this.eventMap[eventName] = new Set();
        }
        
        this.eventMap[eventName].add(cb);
        
        return {
            unsubscribe: () => {
                this.eventMap[eventName].delete(cb)
            }
        };
    }
    
    /**
     * @param {string} eventName
     * @param {Array} args
     * @return {Array}
     */
    emit(eventName, args = []) {
        const res = [];
        (this.eventMap[eventName] ?? [])
         .forEach((cb) => res.push(cb(...args)))
        
        return res;
    }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */