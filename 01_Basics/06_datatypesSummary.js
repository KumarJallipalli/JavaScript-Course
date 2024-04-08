/**
 *  Datatypes are classified into 2 categories based on "how the data is stored & accessed"
 *      1. Primitive [ call by value]
 *              - number, booleam, null, undefined, Sting, BigInt, Symbol [ Toatl - 7]
 *      2. Non-Primitive [ call by Reference ]
 *              - Array, Object, function
 */

let bigNumber = 45287942824661485142n;      
/**
 *  explicitly giving n atlast ==> mentioning this number as a BigInt type
 *  else, it will throw error, as the number is NOT > 2^53
 */

let id = Symbol('123');
let anotherId = Symbol('123');
console.log(id === anotherId);      // false

let arr = ["kumar", 25, "Hyderabad"];
let obj = { name:"Kumar", age: 25, city: "Hyderabad" };
let func = function(){console.log("This is representing function as an Expression")};



/**
 *  JS is a Dynamically Typed Language 
 *          Statically typed language --> data types are defined & checked during Compile time. 
 *          Dynamic typed language --> data types are defined & checked during Run time.
 */



/**
 *  WKT, typeof returns the datatype of a variable
 *  So, let's see what the typeof returns for each datatype
 */
console.log(typeof null);           // Object
console.log(typeof undefined);      // undefined
console.log(typeof arr);            // object
console.log(typeof obj);            // object
console.log(typeof func);           // function [object-function]
console.log(typeof bigNumber);      // bigint
console.log(typeof id);             // symbol

console.log(typeof Number);         // function     [ Since, these are all constructors]
console.log(typeof Boolean);        // function
console.log(typeof String);         // function
console.log(typeof Symbol);         // function
console.log(typeof BigInt);         // function

/** 
 *  typeof Function returns "function" --> but technically, it is an Object-function
 */