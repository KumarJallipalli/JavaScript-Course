/**
 *  There are 2 ways to define a number in JS
 *          1. Direct notation [ using let, var & const ]
 *          2. Object notation [ using new Number() ]
*/

let num = 200;              // here, num is a number type
console.log(num);
console.log(typeof num);

let objNum = new Number(300);   // here, objNum is a object type
console.log(objNum);
console.log(typeof objNum);

/**
 *  Since, objNum is an Object, we can use the associated methods that comes with the Number Object
*/
console.log(objNum.toString());         // converts number to string type. Hence we can use string methods on this
console.log(objNum.toString().length);  // 3
console.log(objNum.toString().charAt('1'));  // 0

console.log(objNum.toFixed(3));         // represents Number of digits after the decimal point. [ returns a string ]

console.log(objNum.toPrecision(2));      // round offs to specified digits including decimals [ returns a string ]
let num2 = 1253.245;
let num3 = 1253.743;
console.log(num2.toPrecision(6));       // 1253.24
console.log(num3.toPrecision(4));       // 1254

console.log(objNum.toLocaleString())    // Returns A string representing the given number according to language-specific conventions
let num4 = 1000000;
console.log(num4.toLocaleString('en-IN'));  // default is Indian Eng    [ Not sure why it isn't 'en-US' ]
console.log(num4.toLocaleString('en-US'));  // As default is Indian Eng, we have changed to US Eng

console.log(objNum.valueOf());          // Coverts to primitive number type from Obj type



/**
 *      NOTE:
 *              valueOf() --> converts from any obj type to it's relevent primitive type
 * 
 *              Normally, numbers like 3000, cannot have methods or properties because they are not "objects".
 *              But with JS, methods and properties are also available to numbers, because JS treats numbers as objects when executing methods and properties.
*/



let maxNum = Number.MAX_VALUE;      // The largest positive representable number.
let minNum = Number.MIN_VALUE       // The smallest positive representable number
console.log(maxNum);
console.log(minNum);



//  +++++++++++++++++++++++++++++++++++++++       MATHS       +++++++++++++++++++++++++++++++++++++++++++++++++++++

/**
 *  JavaScript provides a built-in "Math object" that provides a set of methods to perform mathematical operations.
 *      Math works with the "Number" type. It doesn't work with "BigInt".
 * 
 *      
 *      - Math.abs() --> Returns the absolute value of x. [ i.e., returns only +ve numbers even x is +ve/-ve]
 * 
 *      - Math.round() --> Returns the value of the number x rounded to the nearest integer.
 *              - Math.ceil() --> Returns the smallest integer greater than or equal to x. [ removes decimal part & + 1 ]
 *              - Math.floor() --> Returns the largest integer less than or equal to x. [ removes the decimal part ]
 * 
 *      - Math.pow(x, y) --> Returns the value of x raised to the power of y. [ similar to ** operator ]
 *      - Math.sqrt(x) --> Returns the square root of x.
 *      - Math.cbrt(x) --> Returns the cube root of x.
 * 
 *      - Math.min() --> Returns the min of numbers
 *      - Math.max() --> Returns the max of numbers
 * 
 *      - Math.random() --> Returns a pseudo-random number between 0 (inclusive) and 1 (exclusive).
 * 
 *      - Math.E --> 2.718..
 *      - Math.PI --> 3.14159..
 */

console.log(Math);
console.log(Math.E);
console.log(Math.PI);

console.log(Math.abs(-95));
console.log(Math.round(56.25));     // automatic round off
console.log(Math.ceil(56.25));      // manually rounding it off to higher int
console.log(Math.floor(56.25));     // manually rounding it off to lower int
console.log(Math.min(-86, 78, 0, 52));
console.log(Math.max(-86, 78, 0, 52));      // It only takes numbers but not array of numbers




/**
 *  Print a random number between 1 & 10..? 
 * 
 *      - WKT, Math.random() --> always returns a pseudo-random number between 0 (inclusive) and 1 (exclusive).
 *      - But we want 1 to 10..!
 *      - Hence multiply the Math.random() with 10 --> we will get random number between 0 (inclusive) and 10 (exclusive).
 *      - But we need 1 & 10 included, hence we add 1 to it --> Math.random()*10 + 1;   [ But we won't get 0 here]
 *      - And the result is in decimal form, So we convert it to integers with Math.floor()
*/
// So, Final expression to get a random number between 1 & 10 both included
console.log( Math.floor( Math.random()*10 + 1 ) );



/**
 *  Print a random number between 10 & 20..?
 * 
 *      - WKT, with "Math.floor( Math.random()*10 )", we will get a random number between 0 & 9 [both included]
 *      - To get between 10 & 20, just add 11 --> we will get a random number between 0+11 & 9+11 ==> 11 & 20
*/
console.log( Math.floor( Math.random()*10 + 1 + 10 ) );     // But here, 10 is NOT INCLUDED

/**
 *      - WKT, with "Math.random()*10" --> [0,9] => this represents numbers between 0 & 9 both included
 *      - with "Math.random()*10 + 1" --> [0,9] + 1 --> [1,10]
 *      - with "Math.random()*10 + 1 + 11" --> [1, 10] + 10 --> [11, 20] => 10 is not included
 *      - Hence, it isn't giving us the required results
 * 
 *      - Here, we are multiplying "Math.random()" with (max-min) --> "Math.random()*10", hence [0,9]
 *      - If we multiply "Math.random()" with (max - min + 1) --> "Math.random()*11", hence [0,10]
 *      - Now, if we add 10 [ which is min of two ] will give us required --> "Math.random()*11 + 10", hence [10,20]
 */

// A more universal fomula is [ min = 10 && max = 20]
let min=24, max=39
console.log( Math.floor( Math.random()*(max-min) + 1 + (min) ) );   // [0,14] + 1 = [1,15] + 24 = [25, 39]
console.log( Math.floor( Math.random()*(max-min+1) + (min) ) );     // [0,15] + 24 = [24, 39]

/**
 *  Hence, Formula for generating any random number between x & y is [ min = Math.min(x,y) && max = Math.max(x,y) ]
 *              - console.log( Math.floor( Math.random()*(max - min + 1) + (min) ) );
 */