// let's take an object
const obj1 = {
    name: "Kumar",
    age: 25,
    welcome: function () {
        // We want to access the name variable inside the function
        console.log(`Hi ${this.name} Welcome..!`);
        console.log(this);
    }
}

obj1.welcome()          // Hi Kumar Welcome..!
obj1.name = "Siva"
obj1.welcome()          // Hi Siva Welcome..!

console.log(this);      // {}

/**
 *  this:
 *  -----
 *      - In JavaScript, the "this" keyword refers to an "object". [different objects depending on how it is used/invoked]
 *              - In an object method, this refers to the "object". [ in which the fn defined ]
 *              - Alone, this refers to the "empty" object " {} ". [in browser, global obj --> "window"]
 *              - In a function, this refers to the global object.
 *              - In a function, in strict mode, this is undefined.
 *              - In an event, this refers to the element that received the event. 
 *              - Methods like call(), apply(), and bind() can refer this to any object.
*/

// 1. In an object method, this refers to the object. [ in which the fn defined ]
const obj2 = {
    name: "Kumar",
    welcome: function () {
        // Here, this refers to object "obj1", 
        // Hence we can use this & dot operator (.) to access the values
        console.log(this);
        // o/p:     { name: 'Kumar', welcome: [Function: welcome] }
    }
}


// 2. Alone, this refers to the empty object {}.
let x = this;
console.log(x);         // {}
console.log(this);      // {}
/**
 *  - "this" in node env, refers to empty object {}     
 *  - "this" in browser, refers to "Window" object      
*/


// 3. "this" in a function
// 3.1 In a function, this refers to the global object.
function thisFunction () {
    console.log(this);
}
thisFunction()
/**
 *  - "this" in node env, refers to "global" object     [ Since, global obj in node is "global" ]
 *  - "this" in browser, refers to "Window" object      [ Since, global obj in browser is "Window" & is default binding]
*/


// 3.2 In a function, in strict mode, this is undefined.
function thisStrictFunction () {
    "use strict"
    console.log(this);
}
thisStrictFunction()
/**
 *  - in strict mode, "this" in node env, is "undefined"      [ Since, strict mode does not allow default binding ]
 *  - in strict mode, "this" in browser is "undefined"         [ Since, strict mode does not allow default binding ]
*/


// 3.3 In a function expression, "this" behavior is same as normal function's "this" --> global object
let thisFUnctionExp = function () {
    console.log(this);
}
thisFUnctionExp()


// 3.4  In a function expression, in strict mode too "this" behavior is same as normal function's "this" --> undefined
let thisStrictFunctionExp = function () {
    "use strict"
    console.log(this);
}
thisStrictFunctionExp()




/**
 *  Arrow Functions:
 *  ----------------
 *      - An "Arrow function expression" is a compact alternative to a traditional function expression, 
 *      - with some semantic differences and deliberate limitations in usage:
 *              - Arrow functions don't have their own bindings to this, arguments, or super
 *              - Arrow functions should not be used as methods.
 *              - Arrow functions cannot be used as constructors & generator functions [ Since, it cannot use "yield" ]
 * 
 *      - Syntax: 
 *                  fn expression -->  let func = function () {}
 *                  Arrow fn    -->    let func = () => {}       [ remove "function" keyword & add "=>" between () & {} ]
*/



/**
 *  - Some special syntax allowances to arrow functions are:
 *          - If function has only one statement, you can remove the {} :
 *                  - If that only 1 statement returns a value, we can remove the return keyword too along with {}
 *          - if you have only one parameter, you can skip the parentheses ()
 *          - If you have only 1 parameter & 1 statement. you can skip (), with {} & return
*/

// 1. If function has only one statement & that returns value, you can remove the {} and the return keyword:
let hello = () => {
    return "Hello World!";
}

// Here, we can remove the {} & return keyword
let helloCompact = () => "Hello WOrld";


// 2. if you have only one parameter, you can skip the parentheses ()
let func = (firstname) => {
    let fullname = firstname + "Jallipalli";
    return fullname;
}

let funcCompact = firstname => {
    let fullname = firstname + "Jallipalli";
    return fullname;
}


// 3. If you have only 1 parameter & 1 statement, you can skip (), with {} & return
let myFn = (name) => {
    return "hello" + name;
}

// Here, you can skip the parentheses () along with {} &  return
let myFnCompact = name => "Hello" + name;



/**
 *  A special case:
 *          - WKT, if there is only 1 statement & if it returns value, we can remove {} & return keyword
 *          - What if, we want to return an object in the same scenario..?
 *                      - It will throw error
 *                      - Hence, we will wrap that single statement in parenthesis ()
*/

// This is normal arrow function, which doesn't throw any issues
let returnObj1 = () => {
    return {name: "Kumar", age: 25}
}
let obj_returned1 = returnObj1()
console.log(obj_returned1.name);

// Here, we cannot define 2nd property as it will throw error & during 162 line, it throws error
    // let returnObj2 = () => {name: "Kumar"};
    // let obj_returned2 = returnObj2()
    // console.log(obj_returned2.name);

// But if we wrap in (), we were able to define any number of properties & it won't throw any error dueing assigning
let returnObj3 = () => ({name: "Kumar", age: 25, place: "Hyderabad"});
let obj_returned3 = returnObj3()
console.log(obj_returned3.place);




/**
 *  "this" in arrow functions
 *          - with arrow functions there are no binding of "this".  [ like in srict mode ]
 *          - In arrow functions, "this" keyword always represents the "object that defined the arrow function".
 *          - In regular functions, "this" keyword represented the "object that called the function"
*/
let thisArrowFn = () => console.log(this);      // this refers to {}    [Window in browser]
thisArrowFn()

let thisArrowStrictFn = () => {
    "use strict"
    console.log(this);                          // this refers to {}    [Window in browser]
}
thisArrowStrictFn()
