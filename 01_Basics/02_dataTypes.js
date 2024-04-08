"use strict";

/**
 *  - This above statement says, treat all the JS code in this file as newer version
 *  - i.e., execute all the JS code with latest version/standards
 *  - This is alos known as "Strict Mode"
 *  - By Default, JS runs in strict mode
 */


// window.alert('Hi this is an alert window, which interrupts the code execution');
// This above statement is NOT possible in IDE as it uses node. But it is possible in Borwser. Hence commented out


/**
 *  DataTypes in JS
 *      - number --> describes both decimals & integers
 *      - bigInt --> describes big integers values, if the int value is more than the range defined by number dataType
 *      - String --> describes sequence of characters
 *      - boolean --> describes only 2 values, true (or) false
 *      - null --> describes a standalone value used as a placeholder for values to be assigned in future
 *      - undefined --> describes that the variable is not defined/assigned with any value
 *      - symbol --> mostly used in React for uniqueness
 * 
 *  "typeof" --> used to get the type of any variable 
 */


console.log(typeof undefined);      // o/p: undefined --> since, it is a datatype
console.log(typeof null);           // o/p: object --> what...! [ Since it is a type, it should o/p null ]