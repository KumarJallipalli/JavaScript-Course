/**
 * Why Using Getters and Setters?
        It gives simpler syntax
        It allows equal syntax for properties and methods
        It can secure better data quality
        It is useful for doing things behind-the-scenes
*/


class User {
    constructor(email, password){
        this.email = email;
        this.password = password;
    }

    get password () {
        return this._password.toUpperCase();
    }

    // If we write only get, we will get error --> Cannot set property password of #<User> which has only a getter

    set password (value) {
        this._password = value
        console.log(this);          // User { email: 'kumar@fb.com', _password: 'abc' }
    }
}
/**
 *  - The above code will give error --> Maximum call stack size exceeded
 *  - because, here this refers to User Obj && this.password refers to get method which means it is recursion.
 *  - which will end up using all memory [stack]
 *  - Hence, we need to change the property name inside the setter & getter to new name like "this_password = value"
 *  - So, the password prop will be defined by setter only instead of constructor
*/

const user1 = new User( "kumar@fb.com", "abc")
console.log(user1.password);        // ABC
console.log(user1._password);       // abc


// *********************        Actual way          ***************************************
class Login {
    constructor(email, password){
        this.email = email;
        this.password = password;
    }

    get mail () {
        return this.email.toUpperCase()
    };
    set mail (value) {
        this.email = value;
    };
}

const user2 = new Login("siva@fb.com", "123")
console.log(user2.mail);
console.log(user2.password);




/**
 *  Another way of getter & setters
*/
function Person (email, password) {
    this.email = email;
    this.password = password;

    Object.defineProperty(this, "mail", {
        get: function() {console.log(this); return this.email.toUpperCase()},
        set: function(value) {this.email = value}
    })
    // if we make the 2nd argument to "email", it will throw max callstack error agian as above
}

const person1 = new Person("praveen@fb.com", "xyz");
console.log(person1.email);
console.log(person1.mail);




/**
 * Getters & Setters in Objects
*/
const Obj = {
    email: "hitesh@fb.com",
    password: "123",

    get mail () {
        return this.email.toUpperCase()
    },
    set mail (value) {
        this.email = value;
    },

    mailFunction: function() {
        return this.email.toUpperCase()
    }
}

const obj1 = new Object(Obj);
console.log(obj1.mail);
console.log(obj1.mailFunction());
console.log(obj1.email);
console.log(obj1.password);

/**
 *  NOTE:
 *      - getters & setters are methods in reality but they are accessed as properties only instead of methods.
 *              - This is the difference between a function  && a getter/setter [ as shown in 103 & 104 lines]
 *              - It helps making simpler codes
 *      - The Object.defineProperty() method can also be used to add Getters and Setters:
*/