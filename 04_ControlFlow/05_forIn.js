/**
 *  for-in:
 *  -------
 *      - for-in -->  loops through the "keys/properties" of an Object
 *      
 *      Symbol:
 *              for (key in object) {
 *                // code block to be executed
 *              }
*/

// for-in loop n objects
const object = { a: 1, b: 2, c: 3 };

for (const key in object) {
  console.log(`${key}: ${object[key]}`);
}

// for-in loop on arrays
const arr = [5, 1, 9, 7];

for (let ind in arr) {
    console.log(`Index of Array is ${ind} & it's value is ${arr[ind]}`);
}

// for-in loop on strings
const str = "String"

for (let ind in str) {
    console.log(`${ind}th char is ${str[ind]}`);
}



/**
 *  NOTE:
 *          - for-in loops works on objects, arrays & Strings. But NOT on Maps
 *          - It won't throw any error, But we won't get any output in the console
 * 
 *          - for-in won't work on Maps && for-of won't work on Objects
*/
// for-of loop in Map
const map = new Map();
map.set("In", "India");
map.set("Fr", "France");
map.set("USA", "United States of America");

for (let key in map) {
    console.log(key);       // No output
}




/**
 *  Differences between for-in & for-of..?
 *          - The main difference between them is in what they iterate over.
 *          - for-in loop, iterates overs the keys
 *          - for-of loop, iterates overs the values
*/