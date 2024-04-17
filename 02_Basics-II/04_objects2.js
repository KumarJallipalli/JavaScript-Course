/**
 *  WKT, Objects created using constructor notation are "Singleton"
 *      Objects created using Object literals are "Non Singleton"
*/
const obj_literal = {
    name: "ReactJS",
    email: "kumar@reactjs.com"
}

const obj_constructor1 = new Object(obj_literal);          
const obj_const = Object.create(obj_literal);

/**
 *  There is NO difference between the above 2 ways of Object creation in terms of functionality
 *  Hence, we use obj literals for now, & others when required
*/



/**
 *  What is the differenece between "new Object()" & "Object.create()"..?
 *      - const obj_constructor1 = new Object(obj_literal); --> it assigns the Obj reference to obj_constructor
 *      - const obj_const = Object.create(obj_literal); --> creates a new obj & inherits the obj_literal
 * 
 *  - Object.create() creates a new object, using an existing object as the prototype of the newly created object.
 *      - It's requires a mandatory parameter [either a prototype Object (or) an null ]   
 *      - It inherits the properties of the prototype Object
 */

console.log(obj_constructor1);
console.log(obj_const);         // {}
console.log(obj_const.name);    // ReactJS

obj_constructor1.name = "AngularJS"     // since both obj_lit && obj_constuctor1 has same reference, both gets changed
obj_const.name = "VueJS"
console.log(obj_constructor1);
console.log(obj_const);
console.log(obj_literal);
/**
 *  Here, if we changed the obj_const, obj_literal also changed     --> shallow copy
 *  i.e., Object copy operations are "shallow-copies" when using "new"
*/



/**
 *  Nesting --> code snippet within the same code snippet is called nesting
 *      - We can see nesting in all the places, like
 *      - array nesting - an array within the same array [2D array]
 *      - function nesting - a function within the same function
 *      - Object nesting - An object within the same Object
*/
const nested_obj = {
    name: "kumar",
    address: {
        area: "R.P Road, 25th line",
        city: "Hyderabad",
        pincode: 523001
    },
    college: {
        name: "SRKREG",
        address: {
            city: "Vijayawada",
            state: "AP"
        }
    }
}
// we can use "chaining" to get the nested elements
console.log(nested_obj);
console.log(nested_obj.college);
console.log(nested_obj.college.address);
console.log(nested_obj.college.address.city);



/**
 *  How to concate objects..?
 *      - We have multiple ways to cancat objects, let's see them..
 *      - Object.assign()
 *      - Spread operator (...)
*/
const obj1 = {a: 1, b: 2};
const obj2 = {c: 3, d: 4};

const obj3 = {obj1, obj2}
/**
 *  This is NOT concatination, this inserts obj1 & Obj2 inside an obj3 --> nesting
 *          - o/p: { obj1: {...}, obj2{...} }   ==> NOT concatination
 *  This is the same problem we have faced in arrays too [ arr1 = [arr2, arr3] ]
*/

/**
 *  Object.assign(target, source1, source2)
 *      - This copies source obj elements into target & returns as a new object
*/
const obj_assign = Object.assign(obj1, obj2);   // This has a problem
console.log(obj_assign);
console.log(obj1);          // problem --> Obj1 has also changed [this concatinated obj2 with obj1]
console.log(obj2);
/**
 *  Here, assign() methods concats the source with target
 *  Hence, target will also get's changed
 *  To avoid this, we will use {} as target in assign() method
*/
obj2.c = 99;

const obj_assign2 = Object.assign({}, obj1, obj2);   // This has a NO problem
console.log(obj_assign2);
console.log(obj1);          
console.log(obj2);
/**
 *  As we have seen above, obj1 has already has keys with name c & d. here it is just updated the c
 *  If there are same key names, then it will ignore or update accordingly
*/

const obj4 = {e: 5, d: 6}
const obj_spread = {...obj2, ...obj4}
console.log(obj_spread);
/**
 *  Spread --> converts all the properties from objects into individual properties 
 *          - o/p: { c: 99, d: 6, e: 5 } --> since, d already prenet in obj2, it updated the value
*/



/**
 *  Some additional Object methods
 *      - Object.keys(Object) --> returns all the keys in the form of an array
 *      - Object.values(Object) --> returns all the values in the form of an array
 *      - Object.entries(Object) --> all the key-value pairs turned to sub-arrays & finally returns an array
 *  All the above can be applied on any iterable obj --> string, array, obj
 * 
 *      - obj.hasOwnProperty("prop_name") --> returns boolean [prop-name must be passed in string format]
*/
console.log(Object.keys(obj_assign));
console.log(Object.values(obj_assign));
console.log(Object.entries(obj_assign));

console.log(obj_assign.hasOwnProperty("g"));