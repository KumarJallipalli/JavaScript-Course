/**
 *  WKT, there are 2 types of datatypes based on how they are stored & accessed
 *      1. Primitive [ call by value ]
 *      2. Non-Primitive [ call b y reference ]
 * 
 * 
 *  Thare are 2 types of memory where all these variables are stored based on the datatypes
 *      1. stack 
 *              - All the primitive types are stored here
 *              - All the other variables who tries to access this data will be given a copy of data
 *              - Hence, if we change the value of new variable who tried to access the original, original data won't be changed 
 *              - All the variable names [ names are nothing but addresses which are nothing but refences ] are store in stack memory [ no matter the data ]
 *      2. heap 
 *              - All the non-primitive types are stored here
 *              - All the other variables who tries to access this data will be given the original data [through reference]
 *              - Hence, if we change the value of new variable who tried to access the original, original data will be changed
 *              - All the variable's value are store in heap memory [ no matter the data ] 
 */

// stack memory
let person1 = "Kumar Jallipalli"        // here, person --> variable name || kumar Jallipalli --> var value
let person2 = person1;                  // here, person1 && person2 --> stored in stack && Kumar Jallipalli --> stored in heap
/**
 *  person2 tried to access the person1's data.
 *  As these are primitive datatypes, A copy of person1's value is given to person2 instead of the address [refrenece]
 *  i.e., person2 = "kumar Jallipalli"
 *  
 *  Hence, person1 & 2 are both having their own memory with unique memory address to access the data
 */

person2 = "Siva Jallipalli"

console.log(person1);       // kumar Jallipalli
console.log(person2);       // Siva Jallipalli


// heap memory
let user1 = {  name: "kumar", age: 15 };     // here, user1 --> stored in stack && { name: 'Siva', age: 15 } --> store in heap
let user2 = user1;
/**
 *  Since, Object's are Non-primitive datatypes, user2 will be given the reference of user1 [ i.e., actual address of user1's data]
 *  Hence, If we change the values using user2, changes will get reflected in the user1 too [ since, both of them are pointing to same values]
 */

user2.name = "Siva"

console.log(user1);     // { name: 'Siva', age: 15 }
console.log(user2);     // { name: 'Siva', age: 15 }