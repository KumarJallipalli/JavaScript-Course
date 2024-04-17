/**
 *  Singleton --> Restricting the number of instances to 1
 *      - It is a design pattern [ S from SOLID ]
 *      - If any class has multiple instances ==> Not a singleton
*/



/**
 *  Objects:
 *  --------
 *      - Objects are collection of properties (properties --> key-value pairs) [Arrays are collection of values only]
 *      - These properties can be primitive value, array, object & function
 *              - primitive value --> value that has no property or method.
 *              - primitive data type --> data that has a primitive value
 *      - An object method --> defining an object property as a function.
 *      - Methods --> actions that can be performed on Objects
*/



/**
 *  NOTE:
 *      - Objects created using literals --> Not a Singleton
 *      - Objects created using constructors --> Singleton
*/
// creating Objects using constructors [Both the below are singleton Objects]
const Obj_constructor1 = new Object();
const Obj_constructor2 = Object.create(null);       // This requires an Object or null as argument to define an object

// Creating Objects using literals
const obj = {
    name: "kumar",
    age: 25,
    isMale: true,
    weight: 72.8,
    location: "hyderabad",
    "full name": "Kumar Jallipalli"
}



/**
 *  - Key names are by default converted to "Strings" in JS
 *          - So, we can directly define keys (or) we can define keys in string format
 * 
 *  - JS Objects can be accessed in 2 ways
 *          1. using dot (.) operator
 *          2. using square braces []
 *      - But dot operator cannot access the keys which are defined using string format, only [] does
 *      - But to access Objects using square braces, key names must be passed in s"tring format" only 
*/
console.log(obj.name);     // No problem in accessing normal keys [i.e., not defined in string format]
// console.log(obj.full name);     // throws error, since the key name is defined in string format
// console.log(obj."full name");     // throws error
console.log(obj["full name"]);     // correct notation



/**
 *  - We can modify (or) add a new property to an Object using assignment operator ( = )
 *          - If property is existing in Object --> Modifies the value
 *          - If property is doesn't exist in Object --> adds the value
*/
obj.age = 26        // age is modified
// obj."last name" = "Jallipalli"      // wrong operator is used to access 
obj["last name"] = "jallipalli"     // last name is added into Object as a new property

console.log(obj);



/**
 *  How to dynamically refer variables from outside the object, in an Object..?
 *          - we cannot just use the name of var  --> it treats that name as new name inside the object
 *          - we need to use square braces [] while refering
 *          - And accessing this referring symbol is also different 
 *                  - obj[key_name], here we haven't used "" while using []
 * 
 *  - we can define symbols inside an object too
*/
obj["mySym"] = Symbol("key1");      // inserted a symbol into an object
console.log(typeof obj.mySym);

let sym = Symbol("Key1");           // this symbol("key1") is different from above, this is unique
let str = "ABCD";

const new_obj1 = {
    name : "Siva",
    sym : "Key2",
    str : "XYZ",
    my_sym : Symbol(25)
}
// the above sym key is not a symbol, as it isn't referring to symbol

const new_obj2 = {
    name : "Siva",
    [sym] : "Key2",
    [str] : "XYZ",          // this is actually getting the value of str from previous & assigning to XYZ => ABCD: XYZ
    my_sym : Symbol(25)
}
// Now, the sym key is actually referring to symbol [which we have created]

console.log(new_obj1);      // { name: 'Siva', sym: 'Key2', str: 'XYZ', my_sym: Symbol(25) }
console.log(new_obj2);      // { name: 'Siva', ABCD: 'XYZ', my_sym: Symbol(25), [Symbol(Key1)]: 'Key2' }
console.log(typeof new_obj2.sym);           // undefined
console.log(typeof new_obj2["sym"]);        // undefined
console.log(typeof new_obj2[sym]);          // String   &&  we haven't used any string format to access the value



/**
 *  Object().freeze(obj_name)  --> used to freeze the obj from any modificication
*/
console.log(obj);
Object.freeze(obj);

obj.age = 20;           // age won't be changes, since we freezed the object
console.log(obj);



/**
 * we can use "this" to refer to any peroperty of an object
*/
const my_obj = {
    lastname: "Jallipalli",
    fullname: "Kumar" + this.lastname,          // here this refers to global varibale [which is absent in node env]
    greetings : function() {console.log(`Hello ${this.fullname}`);}
}
console.log(my_obj);

my_obj.greetings();
console.log(my_obj.greetings);      // function
console.log(my_obj.greetings());    // undefined

/**
 *      Why fullname is not as expected..?
*/