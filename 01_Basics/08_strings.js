/**
 *  Strings
        - `Strings`  are sequence of characters
        - We can use either single or double quotes to represent sequence of characters in JS
*/



/**
 *  Template Literals ( ` ` )
        - **Template Literals** use back-ticks (` `) rather than the quotes (" " or ' ') to define a string
        - It is an ES6 feature
*/



/**
 *  Strings (vs) Template Literals
        - **Template Literals** allow both single and double quotes inside a string [ without any worries ]
            - let text = `He's often called "Johnny"`;
        - **Template Literals** allow multiline strings & it is displayed as it is in console
        - **Template Literals** provide an easy way to interpolate/embed variables and expressions into strings using `${ }`
            - Automatic replacing of expressions with real values is called **string interpolation**.
            - let text = `Welcome ${firstName}, ${lastName}!`;
            - let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;
*/



/**
 *  There are 2 ways to defines strings
 *          1. using single quotes, double quotes & backticks
 *          2. using new keyword & String() constructor
 * 
 *  And we can use all the methods & indexing on both the ways of defined strings
*/
let string1 = "Kumar Jallipalli";
let string2 = new String("Siva Jallipalli");

console.log(string1);
console.log(string2);

console.log(typeof string1);        // string
console.log(typeof string2);        // object



/**
 *  Indexing in Strings
 *          - WKT, Strings are sequence of characters. So, cn we access the individual characters..?
 *          - Yes, we can access using a concept called "Indexing"
 *          - Indexing --> giving the individual characters some numbers [ to access those later ]
 *          - Indexing in JS starts with "0". i.e., numbering starts from "0"
 *          - ex:  K    u   m   a   r       J   a   l   l   i   p   a   l   l   i
 *            Ind: 0    1   2   3   4   5   6   7   8   9   10  11  12  13  14  15
 *                -16  -15 -14 -13 -12 -11 -10 -9  -8  -7  -6   -5  -4  -3  -2  -1 
 */
console.log(string1[2]);
console.log(string2[2]);

/**
 *  String Methods
 *          - length --> The length property returns the length of a string
 * 
 *          - Extracting string characters
 *                  - charAt() --> The charAt() method returns the character at a specified index (position) in a string
 *                  - at() --> The at() method returns the character at a specified index (position) in a string [ SInce ES2022 ]
 *                          - It allows the use of negative indexes [ while charAt() do not ].
 *                  - [] --> As discussed in indexing. 
 *                          - It is read only -->  attempting to delete or assign a value to these properties will not succeed.
 *          
 *          - Extracting String parts
 *                  - slice() --> extracts a part of a string and returns the extracted part in a new string.
 *                  - substring() --> is similar to slice(). The difference is that start and end values less than 0 are treated as 0.
 *                  - substr() --> is similar to slice(). The difference is that the second parameter specifies the length of the extracted part.
 * 
 *          - toUpperCase()     --> A string is converted to upper case 
 *          - toLowerCase()     --> A string is converted to lower case
 * 
 *          - The trim()    --> removes whitespace & line terminators from both sides of a string [ trimStart() && trimEnd() ]
 * 
 *          - replace()	    --> Searches a string for a pattern, and returns a string where the first match is replaced
 *          - replaceAll()  --> Searches a string for a pattern and returns a new string where all matches are replaced
 * 
 *          - split()       --> Splits a string into an array of substrings
 * 
 *          - includes()    --> Returns if a string contains a specified value [ returns boolean value]
 *          - indexOf()	    --> Returns the index (position) of the first occurrence of a value in a string
 *          - lastIndexOf() --> Returns the index (position) of the last occurrence of a value in a string
 *          
 *          - valueOf()     --> Returns the primitive value of a String object 
 * 
 * 
 *      NOTE:   All string methods return a new string. They don't modify the original string.
 *              i.e., "Strings are immutable": Strings cannot be changed, only replaced. 
 *              
 *              Normally, strings like "John Doe", cannot have methods or properties because they are not "objects".
 *              But with JS, methods and properties are also available to strings, because JS treats strings as objects when executing methods and properties.
 */
console.log(string1.length);
console.log(string2.length);

console.log(string1.charAt(6));
console.log(string2.at(6));

console.log(string1.slice(2));      // If 2nd parameter is not provided, it will slice till end
console.log(string1.slice(2, 6));      // If 2nd parameter is provided, it will slice till the specified index & excluding it
console.log(string1.slice(-12, -6));

console.log(string1.substr(-12));
console.log(string1.substr(-12, 7));    // 2nd parameter tells how many characters to be sliced from specified index

console.log(string2.toLowerCase());
console.log(string1.toUpperCase);       // this prints a function called toUpperCase, since we haven't given ()

console.log("     Kumar     ".trim());  // removes all the empty spaces from both sides

// sometimes we will have an URL which contains some characters which needs to be removed.
let url = "https://google.com/search?complete+JavaScript+Series";
console.log(url.replaceAll("+", ""));   // we replaced the "+"'s with ""

console.log(string1.split());           // Just converts the whole string into an array [ array of single element by default ]
console.log(string1.split(" "));        // Splits at mentioned character [here it is space]

console.log(string1.includes("Jall"));    // returns a boolean value, if the given string is included in string1

console.log(string1.indexOf("r"));



console.log(`Hello, My name is ${string1}`);    // strings defined using string lieterals