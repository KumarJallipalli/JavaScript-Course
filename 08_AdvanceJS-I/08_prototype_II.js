let str1 = "Kumar"
console.log(str1.length);        // O/P: 5

let str2 = "kumar       "
console.log(str2.length);       // O/P: 12
console.log(str2.trim().length);

/**
 *  Challenge:
 *  ----------
 *      - We need to create a function called "trueLength()" 
 *      - "trueLength()" must return "True Length is 'str2.trim().length' value"
 *      - Finally, This fn should be available to all strings in JS
*/

let heroes = ["Superman", "Batman"];

let heroPowers = {
    superman: "Strength",
    batman: "Money, MarshalArts & Intelligent",

    getBatmanPower: function () {
        console.log(`Batman's super power is ${this.batman}`);
    }
}

/**
 *  Now, Does heroPowers has a method called siva()..?
 *      - No
 *      - Then, how can I add it..? --> using prototype
*/

heroPowers.siva = function () {
    console.log("Hi, My name is Siva");
}

heroPowers.siva();
/**
 *      - When we use "heroPowers.prototype.siva = function () {}" instead of above code
 *      - Then the above code throws error --> Cannot set properties of undefined [Since Siva is undefined]
*/


/**
 *  NOTE:
 *      - we cannot set properties to a normal object using "prototype"
 *      - We can only set properties to Object constructors using "protortype"
*/

Object.prototype.kumar = function () {
    console.log("Hi, My name is Kumar");
}

heroPowers.kumar()

/**
 *  - Now this above property "kumar" is available to all Objects
 *  - That means for arrays, Objects, strings & functions too
 *      - we have already seen for Obj
 *      - we will see for others
*/

heroes.kumar();     // available
str2.kumar()        // available

// checking for functions
function name () {
    console.log("This is to check the name property");
}

name();
name.kumar();       // available in functions too too

/**
 *  NOTE:
 *      - This is what we meant about the "prototypical behavior" of JS
 *      - JS searched for the data on each level from bottom of tree to the top most of tree until it reaches "null"
 * 
 *  - Now what if we create a property in bottom level tree & try to access it in parent level..?
 *      - like if we create in Array, can we access it in Object..?
 *          - From the prototypical behavior, we cannot access
 *          - Let's check..!
*/

Array.prototype.surname = function() {
    console.log("My surname is 'Jallipalli");
}

heroes.surname();           // accessible [as expected]
// heroPowers.surname();       // Error: heroPowers.surname is not a function ==> NOT accessible [as expected]



/**
 *  Linking of Objects:
 *  -------------------
 *      - we can link any 2 objects using
 *              1. __proto__
 *                      - __proto__ is a method that exposes the hidden [[Prototype]] property and allows you to modify it.
 *              2. setPrototypeOf() --> Object.setPrototypeOf(Obj, targetObj)
 *                      - The Object.setPrototypeOf() --> sets the prototype 
 *                      - (i.e., internal [[Prototype]] property) of a specified object to another object or null.
 * 
 *  NOTE:
 *      - [[Prototype]] is a hidden private property which holds a reference to the object’s prototype.
 *      - __proto__ is depriciated. Hence use       Object.getPrototypeOf() and Object.setPrototypeOf()
*/

let user1 = {
    name: "Kumar Jallipalli",
    email: "kumar@example.com",
    place: "Hyderabad"
}


// 1.1 using __proto__ inside the obj definition
let user2 = {
    name: "Siva Jallipalli",
    email: "siva@example.com",
    // with this line, user2 can access the prototype/properties of user1
    __proto__: user1
}

console.log(user2.place);       // Hyderabad


// 1.2 using __proto__  outside the obj definition
let user3 = {
    name: "Praveen Jallipalli",
    email: "Praveen@example.com",
}

user3.__proto__ = user1
console.log(user3.place);       // Hyderabad


// 2. setPrototypeOf()
let user4 = {
    name: "Rajesh Jallipalli",
    email: "Rajesh@example.com",
}

Object.setPrototypeOf(user4, user1)
console.log(user4.place);       // Hyderabad



// Challenge
String.prototype.trueLength = function() {
    console.log(`True Length is: ${this.trim().length}`);   // Here, this refers to the string which is calling the method
}

str1.trueLength()
str2.trueLength()