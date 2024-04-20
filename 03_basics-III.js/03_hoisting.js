/**
 *  Hoisting:       [Hoist == raise/lift] 
 *  ---------
 *      - Declarations of variables and functions are moved to the top of their respective scopes.
 *      - It is the default behavior of JS
 * 
 *      - JavaScript interpreter splits the declaration and assignment of functions and variables: 
 *      - And it "hoists" the declarations to the top of their respective scope before execution.
 *      - Hoisting allows us to use functions and variables before they're even declared
*/



/**
 *  Variable Hoisting:
 *  ------------------
 *      - Variable hoisting acts differently depending on how the variable is declared. 
 *              - Variables declared with "var" are hoisted & initialized with a default value "undefined".
 *              - Variables declared with let and const are hoisted but NOT initialized with a default value.
 */

// hoisting in "var"
console.log(foo);           // undefined
console.log(typeof foo);    // undefined

var foo = 'bar';

console.log(foo);           // "bar"

// hositing in let [ same for const too ]
    // console.log(bar);           // ReferenceError
    // console.log(typeof bar);    // ReferenceError

let bar = 'foo';

console.log(bar);           // "bar"




/**
 *  Function Hoisting:
 *  ------------------
 *      - Function hoisting allows us to call a function before it is defined.
 *      - Note that only function declarations are hoisted, but NOT function expressions.
 *              - Since, variable assignments aren't hoisted, functions as expressions are also not hoisted
*/

// Hoisting of function declarations [normal functions]
foz();                          // "foz"

function foz() {
	console.log('foz');
}

// Hoisting of function expressions
fooz();                     // Uncaught TypeError: fooz is not a function
var fooz = function () { return 5 }

barr();                     // Uncaught ReferenceError: Cannot access 'bar' before initialization
let barr = function () { return 5 }

baz();                      // Uncaught ReferenceError: Cannot access 'baz' before initialization
const baz = function () { return 5 }