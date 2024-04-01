/**
 * @param {string} s
 * @return {string}
 */
var finalString = function(s) {
    const res = [];
    for(let i = 0; i < s.length; i++) {  //  for (char of s)
        const ch = s.charAt(i); // const ch = s[i]
        if(ch !== 'i') {
            res.push(ch);
        }
        else {
            res.reverse();
        }
    }
    
    return res.join('');
};

/*
The JavaScript for of statement loops through the values of an iterable object such as Arrays, Strings, Maps, NodeLists.
Property acess - let char = text[0];
charAt()	It provides the char value present at the specified index.
concat()	It provides a combination of two or more strings.
indexOf()	It provides the position of a char value present in the given string.
lastIndexOf()	It provides the position of a char value present in the given string by searching a character from the last position.
search()	It searches a specified regular expression in a given string and returns its position if a match occurs.
substring()	It is used to fetch the part of the given string on the basis of the specified index.
split()	It splits a string into substring array, then returns that newly created array.
trim()	It trims the white space from the left and right side of the string.
*/