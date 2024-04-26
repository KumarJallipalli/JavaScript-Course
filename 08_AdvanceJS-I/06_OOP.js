/**
 *  Does JS have classes..?
 *      - Yes, JS does have classes. [introduced in ES6]
 *      - But it is primarly a "prototype-based" Language
 *      - JS provided classes [which behind the scene runs on prototype-based ] for syntactical purpose only
 *              - to provide familiar syntax for people coming from OOP languages like java, C++
*/

/**
 *  Objects:
 *  -------
 *      - Objects --> Collection of properties & methods
 *              - properties --> key:value pairs
 *              - method --> A property defined as a function [functions assosiated with the Objects]
 *                      - Using methods, we can perform actiosn on the object
*/

// Object Literals --> literally, just an Object
let user = {
    username: "Kumar Jallipalli",
    isLoggedIn: true,
    loginCount: 9,
    getUser: function() {
        console.log(`User Name: ${this.username}`);
    }
}

/**
 *  - As it just a single user, we were able to create it
 *  - What if there are 100 users to be created..?
 *  - i.e., why we got the "functions"
*/

function User (username, loginCount, isLoggedIn) {

    // WKT, this inside a fn refers to global obj
    // console.log(this);

    // we are pushing the data into that global obj & returning it
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    return this
}

let user1 = User("kumar", 5, false);
console.log(user1);

let user2 = User("Siva", 7, true);
console.log(user2);

/**
 *  - Here, user2 has overwritten the data in global obj previously set by user1
 *  - If we create 100 users, it will only put the last 100th user details
 *  - So, we need a new instance everytime we create a user
 *  - i.e., where we have "construction" functions
*/

/**
 *  Constructor:
 *  -----------
 *      - creates new instance by constructing a new Object with the template of existing one
 *      - A fn becomes a Constructor fn, by inserting a "new" keyword infront of the fn call
 *      - when we use "new", follwoing happens
 *              1. creates an new obj --> {} [referred by this & is called an instance]
 *              2. prototype is linked to this obj constructor
 *              3. constructor is called/executed
 *              4. returns a new instace of the object [with the help of this]
 *          These above 4 will be explained in next lecture
*/

/**
 *  - now we will use "new" keyword to create the new users. Then,
 *          - here, the function behavior also changed, 
 *                  - this inside the fn is now an "Empty Obj" --> {}
 *                  - Hence we are filling the empty obj with properties here
 *          - This is due to the fn became a constructor function
 * 
 *  - To add a new property to a constructor, you must add it to the constructor function only
 *          - You cannot add a new property by name of construction [ex: User.state = "Hyd" --> Not added]
*/
function User (username, loginCount, isLoggedIn) {

    // WKT, this inside a fn refers to {} obj 
    // console.log(this);

    // we are pushing the data into that {} obj & it will return it by default
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    return this
}

let user3 = new User("kumar", 5, false);
console.log(user3);

let user4 =  new User("Siva", 7, true);
console.log(user4);

// we can print the constructor --> which gives the reference to User fn
console.log(user4.constructor);

// The instanceof operator --> tests the presence of constructor.prototype in object's prototype chain.
console.log(user4 instanceof User);
console.log(user4 instanceof user3);     // Throws error --> Right-hand side of 'instanceof' is not callable
console.log(user4 instanceof Object);





/**
 *  NOTE:
 *      - We can define a fn with the same name any number of times we want
 *      - And the last defined fn will be executed for all, irrespective of where fn call [due to hoisting]
*/