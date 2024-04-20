/**
 *  IIFE:
 *  -----
 *      - IIFE --> Immediately Invoked Function Expressions 
 *      - "IIFE" are JavaScript functions that are executed immediately after they are defined.
 * 
 *      Syntax:
 *              ( function fn_name () {
 *                  ** Code Block
 *              }) ()
 * 
 *      - If we observe carefully, we have wrapped the function definition in () & then again used ()
 *      - i.e, 2 parenthesis () are used to create IIFE
 *              - 1st () --> is used to define the IIFE
 *              - 2nd () --> to execute the IIFE
*/

// named IIFE
( function namedIIFE () {
    console.log("DB Connection");
}) ();

/**
 *  NOTE:
 *          - " ; " is mandatory when we want to execute 2 or more IIFE's
*/


// un-named (or) anonymous IIFE
( () => {
    console.log("DB connection TWO");
} ) ();

/**
 *  If we execute the above 2 function, we will get error
 *      - That is due to, IIFE fn doesn't know when to terminate when 2 IIFE's are executed simultaneously
 *      - We need to use statement terminator " ; " to avaoid this error
*/


// How to pass parameters in IIFE..?
( (name) => {
    console.log(`${name} is Connected`);
} ) ("mySQL")


// IIFE with variables
let x = (function () {
    console.log("This is IIFE with variables");
    return 5
}) ();

x();                // error x is not a function
console.log(x);     // 5
/**
 *  NOTE: 
 *          - We cannot hold IIFE's inside a variable
 *                  - Since, IIFE's are immediately executed, we cannot use variables to execute [ like x() ]
 *          - We can only hold the return values if IIFE's in variables
*/


/**
 *  Why IIFE..?
 *      - They are used to create a local scope for variables (global) to prevent them from polluting the scope.
 *              - i.e., used to create private scope in JavaScript, 
 *              - allowing variables and functions to be encapsulated and inaccessible from outside the function.
 *      - They are also used whenever a fn needs to be immedeiately executed - like DB connection
*/

// Example to show the private scope & IIFE with variables
var counter = (function() {
	var count = 0;

	return {
		increment: function() {
			count++;
		},
		decrement: function() {
			count--;
		},
		getCount: function() {
			return count;
		}
	};
})();

// Increment the counter
counter.increment();
counter.increment();
counter.increment();

console.log(counter.getCount()); // Output: 3

// Trying to access the private count variable directly
console.log(counter.count); // Output: undefined (cannot access private variable)
