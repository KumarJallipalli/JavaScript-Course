/**
 *  forEach():
 *  ----------
 *      - The forEach() method --> calls a function for each element in an array.
 *      - It is a Higher Order function
 *      - It expects a function as an argument --> callback function
 *      
 *      Syntax:
 *                  array.forEach( function(currentValue, index, arr) )
 * 
 *      NOE:
 *              - 1st parameter is always the element of array [& 2nd will be ind & 3rd will be array itself]
*/



/**
 *  Higher ORder Functions:
 *  ----------------------
 *      - A HOF is a function that takes one or more functions as arguments (or) returns a function.
 * 
 *  Callback function:
 *  ------------------
 *      - A callback is a function passed as an argument to another function
 *      - This technique allows a function to call another function
 * 
 *  NOTE:
 *          - When you pass a function as an argument, remember NOT to use parenthesis ().
*/

const arr = [5, 2, 9, 7];

// callback fn as anonymous function
arr.forEach( function (element, ind ) {
    console.log(ind, element);
} )

// callback fn as arrow fn
arr.forEach( (item, ind, arr) => {
    console.log(ind, item, arr);
} )

// callback function as function definition
function print (item, i) {
    console.log(item, i, arr[i]);
}

arr.forEach(print)     
/**
 *  - we should only pass the name/reference of the function as callback
 *  - We should NOT include parenthesis () & the fn parameters, while passing a fn as callback
*/



/**
 *  - Arrays containing Objects as elements arr = [ {}. {}. {} ]
 *  - It is most used format in JS [ be it in FE or BE]
*/
const array = [
    {
        firstname: "kumar",
        lastname: "jallipalli"
    },
    {
        firstname: "siva",
        lastname: "chennamsetty"
    },
    {
        firstname: "sai",
        lastname: "peddisetty"
    }
]

array.forEach( (item) => {
    console.log(item.firstname, item.lastname);
} )

for ( let item of array ) {
    console.log(item.lastname, item.firstname);
}