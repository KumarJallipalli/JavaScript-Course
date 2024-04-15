const marvel_heroes = ["Ironman", "Captain America", "Thor"];
const DC_heroes = ["Batman", "Superman", "Flash"]
marvel_heroes.push(DC_heroes)
console.log(marvel_heroes);
/**
 *  - The above push() method pushes an array into another array, making an array within another array
 *  - This is not merging 2 arrays
 * 
 *  - An array within an array is called "2D Array"
*/

// arr.concat(array) --> This method concats/mergers the specified array with the original array [arr] & returns a new array
const arr_concat = marvel_heroes.concat(DC_heroes)
console.log(arr_concat);
console.log(arr_concat.unshift(6));     // returns length of the array & inserts 6 at start of array



/**
 *  The JavaScript spread operator (...) 
 *          - allows us to quickly copy all or part of an existing array or object into another array or object.
 *          - mainly used in array & object destructions    [will be discussed later]
*/
const arr_spread = [...DC_heroes, ...marvel_heroes]     // same as concat method
console.log(arr_spread);



/**
 *  flat(depth)
 *          - Returns a new array with all sub-array elements concatenated into it recursively [up to the specified depth.]
 *          - default depth - 1
 */
const new_arr1 = [1, 2, [3, 4, 5], 6, 7, [8, 9, [10, 11, 12]], 13]      // depth = 2
console.log(new_arr1.flat());           // concats all the sub-array elements upto depth 1
console.log(new_arr1.flat(2));          // concats all the sub-array elements upto depth 2
console.log(new_arr1.flat(Infinity));   // concats all the sub-array elements available



/**
 *  - The isArray() method returns boolean based on if an "object is an array"
 *  - Array.isArray() is a static property of the JavaScript Array object.
 *          - You can only use it as Array.isArray().
 *          - Using x.isArray(), where x is an array will return "undefined".
*/
console.log(Array.isArray(new_arr1));       // true
console.log(Array.isArray("new_arr1"));     // false



/**
 *  - The Array.from() method returns an array from any iterable object. 
 *  - Array.from() is a static property of the JavaScript Array object.
 *          - You can only use it as Array.isArray().
 *          - Using x.isArray(), where x is an array will return "undefined".
*/
console.log(Array.from("new_arr1"));        // converts string [iterab;e object] to an array object
console.log(typeof Array.from("new_arr1"));        // object
