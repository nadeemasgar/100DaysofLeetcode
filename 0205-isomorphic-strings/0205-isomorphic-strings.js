/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if (s.length !== t.length) return false;

    const map = new Map();

    for (let i = 0; i < s.length; i++) {
        const original = s.charAt(i);
        const replacement = t.charAt(i);

        if (!map.has(original)) {
            if (![...map.values()].includes(replacement)) {
                map.set(original, replacement);
            } else {
                return false;
            }
        } else {
            const mappedCharacter = map.get(original);
            if (mappedCharacter !== replacement) {
                return false;
            }
        }
    }

    return true;
};