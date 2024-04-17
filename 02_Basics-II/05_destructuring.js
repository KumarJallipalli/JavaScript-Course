/**
 *  WKT, We create objects with curly braces {…} and add properties in it. 
 *  A property is a key-value pair [where the key must be a string or a symbol, and the value can be of any type]
*/
const user1 = { 
    'name': 'Alex',
    'address': '15th Park Avenue',
    'age': 43
}
// in real-life programming, we need to extract the data from the above object & assign it to variables, like
let user1_name = user1.name;
let user1_address = user1.address;


/**
 *  What if, we have to extract huge data..?
 *      - JS has simplified this process of extracting the data from ES6 with "Destructuring"
 * 
 *  "Destructuring" is a JS expression/syntax that allows us to extract data from arrays, objects and assign them to variables. 
 *      - syntax: let { var1, var2 ... } = obj_name
 *              - here, var1, var2... must be the key_names from obj, otherwise data won't be extracted
 *      - we cannot omit let (or) const keyword     ex: {name} = user --> throws error
 *      - we cannot use the pre-declare variable names      ex:let name;    {name} = user --> throws error
*/

const employee = {            // Object we want to destructure
    firstname: 'Jon',
    lastname: 'Snow',
    dateofbirth: '1990'
};

// destructuring the object into variables
let { firstname, lastname } = employee;
console.log( firstname, lastname );           // Jon Snow 




/**
 *  We can do much more with destructuring in JS
 *          1. In destructuring objects, var_names must be same as key_names from object
 *          2. We can add a new variable while destructuring and add a default value to it.
 *                  - If the var_names doesn't match with key_names, then data won't be extracted & gives undefined
 *                  - In those cases, we ca assign some default values to the new varibles.
 *          3. You can give an alias name to the destructured variables. [we can use both original & alias names]
 *          4. Destructuring in nested objects
 *          5. Destructuring in function parameters
*/

const user = { 
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


// 1. Adding a new variable [which is not a key_name] while destructuring 
let {id, name, age} = user;
// since, id is a new variable, which is not a key_name. Hence treats it as a normal variable without destructuring
console.log(id, name, age);     // undefined Alex 43


// 2. Adding a new variable while destructuring and add a default value to it.
// we can give default name using the object property too [since the var_name is not matching with key_name]
let { surname = "Thomas", fullname = `${name} ${surname}`, department} = user;      
console.log(surname, fullname, department);


// 3. Giving an alias name to the destructured variables
let {department: dept} = user;
console.log(department);        // original name
console.log(dept);              // alias name
console.log(user.department);   
console.log(user.dept);         // undefined


// 4. Destructuring  the nested objects --> let { nested_keyName: { var_name } }
let {department: {address}} = user              // we have destructured the address which is nested inside department
let {department: {address: {city}}} = user      // we have destructured the city which is nested inside department > address

console.log(address, city);


// 5. Destructure in function parameter
const user2 = { 
    'name': 'Alex',
    'address': '15th Park Avenue',
    'age': 43
}

// function to return a string using the user's name and age.  "Alex is 43 year(s) old!""
// Here, we need to use the " destructuring syntax --> {} " during parameters & pass "obj as argument"
function logDetails( {name, age} ) {
    console.log(`${name} is ${age} year(s) old!`)
}

logDetails(user);



/**
 *  NOTE:
 *      - getVlaues(key) --> gives us the value of it's associated key-pair
 *      - Destructuring is also possible in arrays & maps too
*/