/**
 *  Scope:
 *  ------
 *      - Scope --> area where an item (such as a function or variable) is visible and accessible to other code.
 *                  - code --> data that computers understand.
 *      - A scope chain refers to the unique spaces that exist from the scope where a variable got called to the global scope.
 *      - The global scope is always the last scope of any JavaScript scope chain.
 *      - 
*/


/**
 *  Lexical Scope:
 *  --------------
 *      - Lexical refers to the definition of things [words, expressions, or variables]
 *      - Lexical scope is the scope of a variable or function "based on where it is defined" in the source code.
 * 
 *      - Lexical scope is the ability for a function scope where inner fn can access the variables declared in parent fn
 *      
*/

function outer () {
    // WKT, scope of "username" is within Outer fn
    let username = "kumar"

    function innerFirst () {
        let secret = "Hyderabad"

        // innerFirst fn can access the "username" from parent scope via Lexical Scoping
        console.log("innerFirst's Username: ", username);
    }

    function innerSecond () {
        console.log("innerFirst's Username: ", username);
        // here, it can access "username" but NOT "secret" as it is not in parent's scope but in sibling's scope
        console.log("innerFirst's Username: ", secret);
    }

    // here, child can access the variables defined in parent's scope but parent's can't access the child's variables
    console.log("innerFirst's Username: ", secret);
    innerFirst();
    innerSecond();
}

// throws error
console.log("Outside the Outer fn: ", username);




/**
 *  Closure:
 *  --------
 *      - Ability of a fn to remember it's own execution context & the Lexical scope of variables when returned
*/

function makeFunc() {
    const name = "Mozilla";

    function displayName() {
        // this name is accessible via lexical scoping
        console.log(name);
    }

    return displayName;
}
  
const myFunc = makeFunc();
myFunc();       // Mozilla
/**
 *  - we are returning the reference of "displayName" fn
 *  - here, it will pass the Execution context & the lexical scope along with it
 *  - Hence we are able to access the "name" variable in the "myFunc()" & print "Mozilla"
 *  - This way of accessing the lexical scope when returned as a fn is called "Closure" in JS
*/