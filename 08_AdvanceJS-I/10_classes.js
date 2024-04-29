// Classes in JS is an ES6 feature

// This syntax is mostly similar with java language
class User {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }

}

// here, we cannot create an Object chai from Class User unless we use "new"
const chai = new User("chai", "chai@gmail.com", "123")

console.log(chai.encryptPassword());
console.log(chai.changeUsername());



// behind the scene

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}


const tea = new User("tea", "tea@gmail.com", "123")

console.log(tea.encryptPassword());
console.log(tea.changeUsername());


// ******************************************       Inheritance      *******************************************

class User2 {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User2{
    constructor(username, email, password){
        // this does the same thing like .call()
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

let chai2 = new Teacher("chai", "chai@teacher.com", "123")
chai.logMe()

let masalaChai = new User2("masalaChai")
masalaChai.logMe()

console.log(chai2 instanceof User);
console.log(chai2 instanceof Teacher);


// *****************************************        Static Properties       ***********************************

/**
 *  -  Static properties "cannot" be directly accessed on instances of the class [i.e., objects] . 
 *          - Instead, they're accessed on the class itself.
*/

class User3 {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

const hitesh = new User3("hitesh")
// console.log(hitesh.createId())

class Teacher2 extends User3 {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher2("iphone", "i@phone.com")
console.log(iphone.createId());