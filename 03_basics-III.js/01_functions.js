/**
 *  Functions:
 *  ----------
 *      - A function is a block of code designed to perform a particular task.
 *      - A JS function is defined with the function keyword, followed by a name, parentheses () & code block {}.
 *      - Syntax:   This is defining a function (or) function definition
 *                  
 *                  function fn_name (parameter1, parameter2, parameter3) {
                            ** code to be executed **
                    } 

 *      - for the code block to be executed, we need to call/invoke the function 
                    fn_name                 --> reference (function Object)
                    fn_nme (arguments...)   --> executing/invoking the function

 *      - Variables declared within a JavaScript function, become LOCAL to the function.
*/

// This is function definition
function add (num1, num2) {
    let result = num1 + num2;
    console.log(result);
}

add (2, 7);             // function execution/call/invoke
console.log(add);       // refrence to add function object
console.log(add());  
/**
 *  - In the line containing console.log(add());
 *      - 1st it will execute the add function since we used "add()", then it will print the returned value of add()
 *      - But we haven't returned any value from add()..!
 *      - By default all JS functions returns "undefined"
*/



/**
 *  What if we didn't pass any arguments in add function [like add() ] ..?
 *          - num1, num2 --> undefined, undefined respectively
 *          - ans = NaN     [since, undefined + undefined = NAN ]
 * 
 *      i.e, why we sometimes give default values to parameters
 *          - ex: function add (num1 = 0, num2 = 0) {...}
 *          - If NO values are passed as arguments, then these default values are taken
 *          - else, whatever the values passed in arguments will overwrite these deafult values
*/  



/**
 *  WHat is the difference between function parametrs & arguments..?
 *      - parameters --> The variables that are defined inside (), during function definition are known as parameters.
 *      - arguments --> The variables that are passed inside (), during function execution are known as arguments.
*/



/**
 *  Functions with "return" keyword
 *          - The "return" statement stops the execution of a function and returns a value.
 *          - the function will stop executing when it reaches return statement.
 *          - Hence the code below return statements inside a function won't be exeucted at all.
 * 
 *      We can store this returned value from a function into a variable & use it.
*/

function multiply (num1 = 1, num2 = 1) {        // we have set default values for parameters
    let result = num1 * num2
    return result
    console.log(result);        // this line won't be executed as it is below return statement
}

let result = multiply(2, 5);
console.log(result);

console.log(multiply(2, 5));    // as we used return statement, instead of "undefined", it will print return statement



/**
 *  What if we pass more arguments than the parameters..?
 *          - It will just "ignore" the additional arguments passed during the fn call
 * 
 *  What if we declare more parameters than the arguments..?
 *          - It is same as "passing less arguments than the parameters"
 *          - This is already disussed that, it will take those remaining parameter values as "undefined"
 *          - Hence, we will use default values while defining the parameters
*/

add (2, 8, 9, 5 ,17)        // o/p : 10     [ since except 2st 2 arguments, remaining are ignored ]



// Rest operator in functions
function restUsage (...par) {
    return par;
}

console.log( restUsage (25, 85, 523, 254) );


function restUsage2 (var1, var2, ...rem) {
    return rem;
}

console.log(restUsage2 (200, 300, 400, 500, 666, 777) );

/**
 *  WKT, Rest will collect all the elements
 *  Similarly, it has collected all the fn arguments & made an "array" out of it
*/



/**
 *  NOTE:
 *          - We can directly pass "objects & arrays" as arguments too
*/

let obj = {
    name: "Kumar",
    age: 25
}

function objParam (param1) {
    return `My name is ${param1.name} and I'm ${param1.age} years old`;
}

console.log( objParam (obj) );

console.log( objParam ( {
    name: "Siva",
    age: 18
} ) );
