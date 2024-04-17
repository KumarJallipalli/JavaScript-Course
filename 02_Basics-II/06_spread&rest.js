/**
 *  Spread Operator (...):
 *  ----------------------
 *      - it takes an iterable and expands(spreads) it into individual elements.
 *      - With spread operator we can clone, update, and merge objects in an immutable way. 
 *      - The Object Destructuring and Spread syntaxes are not the same thing in JavaScript.
*/


// 1. clone of an object
const user = { 
    'name': 'Alex',
    'address': '15th Park Avenue',
    'age': 43
}

const clone = {...user}     // {name: "Alex", address: "15th Park Avenue", age: 43}
clone === user;             // false     [ Since, both the refreneces are not same. Hence immutable]

// WKT, we can also use the Object.assign() to clone
const clone_user = Object.assign(user);     // since there is only target with no source, it is returned
console.log(clone_user);                    //{ name: 'Alex', address: '15th Park Avenue', age: 43 }


// 2. add a new property to object
const add_and_clone = {...user, email:"kumar@gmail.com"};       // new prop is email
console.log(add_and_clone);


// 3. update the existing property of an object
const update_user = {...user, age:36, name: "Thomas"}
console.log(update_user);


// 4. combine/concat (or) merge 2 objects  --> const merged = {...obj_1, ...obj_2};
const department = {
    'name': 'Sales',
    'Shift': 'Morning'
}

const merge_objs = {...user, ...department};
console.log(merge_objs);


// 5. Update, add the nested objects using spread (...)
const employee = { 
    'name': 'Alex',
    'address': '15th Park Avenue',
    'age': 43,
    'department':{
        'name': 'Sales',
        'Shift': 'Morning',
        'address': {
            'city': 'Bangalore',
            'street': '7th Residency Rd',
            'zip': 560001
        }
    }
}

// Now, how can we add a new property called, number with a value of, say, 7 for the department object
const updated = {
    ...employee, 
    department: {'number': 7}
}

console.log(updated);

// This code replaced the entire department object with the new value as, {'number': 7}.
// So, How can we update nested objects..?
// We need to "spread the nested objects" too, in order to update, add properties in nested objects
const updated_correct = {
    ...employee, 
    department: {                   // updating the department prop in the employee obj
        ...employee.department,     
        number: 7,                  // adding the new prop
        name: "Deveoper"            // updating the existing prop
    }
}

console.log(updated_correct);



/**
 *  NOTE:
 *      this way of merging performs a shallow merge. 
 *      This means that if there is a common property between both the objects, 
 *      then the property value of obj_2 will replace the property value of obj_1 in the merged object.
 *      Hence, the name property value of the user object is replaced by the name property value of the department object
*/




/**
 *  Rest:
 *  -----
 *      - The Rest parameter is kind of opposite to the spread syntax.
 *      - While spread syntax helps expand/spread elements and properties, the rest parameter helps collect them together.
 *      - the rest parameter is mostly used with destructuring, to consolidate the remaining properties into a new object.
*/
let {age, ...remaining_obj} = user;     // destructured the age & created a new obj with the remaining propeties of user
console.log(age, remaining_obj);