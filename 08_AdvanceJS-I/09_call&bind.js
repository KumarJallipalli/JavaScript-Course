/**
 *  call():
 *  -------
 *      - call & bind are very musch used in the starting days of React
 *      - With call(), an object can use a method belonging to another object.
 *              - Hence, changing it's reference/owner to the argument's object
 *      - We can use call() in 
 *              1. objects --> substituting another object's reference for the current object.
 *              2. functions --> pass the current execution context of fn to another fn
 * 
 *  NOTE:
 *          - If a function is not a method of a JavaScript object, it is a function of the global object
*/

// 1. call() in Objects

// we know the following code, as this refers to current object - person
const user = {
    firstName:"John",
    lastName: "Doe",
    fullName: function () {
      return this.firstName + " " + this.lastName;
    }
}
console.log(user.fullName());


// Then, what abut the following code..?
const person = {
    fullName: function() {
      return this.firstName + " " + this.lastName ;
    }
}
const person1 = {
    firstName:"John",
    lastName: "Doe"
}
const person2 = {
    firstName:"Mary",
    lastName: "Doe"
}
  
console.log(person.fullName());         // undefined undefined, since this refers to person

/**
 *  - But the following code uses .call()
 *          - Here, the reference of "this" changes from person's Obj to person1's
 *          - Hence, "this.firstname" refers to person1's firstname
 *          - i.e, It will return "John Doe":
*/
console.log(person.fullName.call(person1));
person.fullName.call(person2);



// 2. function

function createUser (username, email, pwd) {
    setUsername(username)
    this.email = email;
    this.passsword = pwd;
}

function setUsername (username) {
    this.username = username;
}

// let user1 = new createUser ("kumar", "kumar@fb.com", 123)
// console.log(user1);
/**
 *  - O/P : createUser { email: 'kumar@fb.com', passsword: 123 }
 *          - this is due to that, when the setUsername() fn is called
 *          - It will assign the value & will be destroying it once executed
 *          - Hence, NO "username" in the object
 * 
 *  - this is where .call() comes into picture in functions
*/

function createUser2 (username, email, pwd) {
    /**
     * here, "this" referenece is changed to empty object obj as we have used call()
    // but still we won't be setting the username
    // for that we need to send another argument called, "this"
    // now, this will pass the current execution context of fn to another fn
     */
        // setUsername.call(username)
    setUsername.call(this, username)
    this.email = email;
    this.passsword = pwd;
}

let user2 = new createUser2 ("kumar", "kumar@fb.com", 123)
console.log(user2);
