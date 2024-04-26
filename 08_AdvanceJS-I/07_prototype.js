/**
 *  Prototype:
 *  ---------
 *      - WKT, JS is a prototype-based language
 *      - Prototype-based programming is a programming-paradigm
 *      - Prototype-based programming is a style of object-oriented programming in which classes are not explicitly defined
 *              - this type of style allows the creation of an object without first defining its class.
 *  
 *      - JS has a prototype behavior --> it will search on each level of tree to find the ans until it gets null value
 *      - So, At which level of tree, will the JS stop trying..?
 *              Array --> Object --> null
 *              String --> Object --> null
 *              function --> Object --> null
*/

/**
 *     - Function has a special status here:
 *              - It will act like a fn [i.e., fn defining & execution]
 *              - I will also act like an obj --> add properties to fn
*/
function multiplyby5 (num) {
    return num*5
}
multiplyby5.age = 25;

console.log(multiplyby5(8));
console.log(multiplyby5.age);
console.log(multiplyby5.name);          // default property by prototype
console.log(multiplyby5.prototype);     // O/P: {}



// 1. prototype property allows you to add new properties & methods to object constructors:
// WKT, we can't add a new property to a object constructor, just like a normal object
function User (username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    // this.state = "Hyd"              // we can only add property by adding in the fn 

    return this
}

User.state = "Hyd"          // Not added to Obj constructor fn but as a new property to fn obj
console.log(User.state);    // Hyd

// But prototype property allows you to add new properties to object constructors:
User.prototype.language = "English"     // added language property to object constructor 
console.log(User.language);             // undefined

User.prototype.increment = function() {
    this.loginCount++;
}

// 2. new properties added via prototype cannot be accessed by Objects unless they are created using "new"
let user1 = User("siva", 5, false)
console.log(user1.increment);
console.log(user1.language);                     // No language property [since we crated without "new"]
console.log(user1);

let user2 = new User("Kumar", 10, true)
console.log(user2.increment());             // since we have used "new", we can acesse new methods & props
console.log(user2.language);
console.log(user2);


/*

Here's what happens behind the scenes when the "new" keyword is used:
-------------------------------------------------------------------

A new object is created --> The new keyword initiates the creation of a new JavaScript object.

A prototype is linked --> The newly created object gets linked to the prototype property of the constructor function. 
This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called --> The constructor function is called with the specified arguments and this is bound to the newly created object. 
If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned --> After the constructor function has been called, 
        - if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/