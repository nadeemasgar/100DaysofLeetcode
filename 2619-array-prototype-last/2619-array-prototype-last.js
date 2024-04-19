/**
 * @return {null|boolean|number|string|Array|Object}
 */
Array.prototype.last = function() {
    const idx = this.length - 1;
    return this[idx] !== undefined ? this[idx] : -1;
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */