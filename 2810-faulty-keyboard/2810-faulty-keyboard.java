class Solution {
    public String finalString(String s) {
        StringBuilder sb = new StringBuilder();
        for(int i = 0; i < s.length(); i++) {
            char ch = s.charAt(i);
            if(ch != 'i') {
                sb.append(ch); 
            }
            else {
                sb.reverse();
            }
        }
        
        return sb.toString();
    }
}

/*
String Methods ->
- charAt()	Returns the character at the specified index (position)
- compareTo()	Compares two strings lexicographically
- concat()	Appends a string to the end of another string
- equals()	Compares two strings. Returns true if the strings are equal, and false if not
- valueOf()	Returns the string representation of the specified value
- trim()	Removes whitespace from both ends of a string
- length()	Returns the length of a specified string
- toCharArray()	Converts this string to a new character array
- substring()	Returns a new string which is the substring of a specified string

StringBuilder Methods ->
- String str = new String("Nadeem");
- append(String s)	It is utilized to append the specified string to the provided string. This function is overloaded.
- insert(int offset, String s)	This string is used to insert the provided string at the designated place.
- delete(int startIndex, int endIndex)	It is used to delete the string from startIndex and endIndex that are provided.
- reverse()	It is used to reverse the string.
- charAt(int index)	It is utilised to retrieve the character at the requested location.
- length()	The length of the string, or the total number of characters, is returned using this method.
- substring(int beginIndex)	The substring starting at the supplied beginIndex is returned using it.
- substring(int beginIndex, int endIndex)	It is used to retrieve the substring starting at the beginIndex and endIndex values supplied.
*/