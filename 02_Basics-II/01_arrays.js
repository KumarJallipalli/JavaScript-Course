/**
 *  Arrays:
 *  ------
 *      - An array in JS is a collection of elements of multiple types
 *      - Arrays in JS are Objects & are resizable
 *      - JS array-copy-operations are shallow-copies
 *              - A shallow-copy of an object is a copy whose properties share the same references
 *              - A deep-copy of an object is a copy whose properties do not share the same references
 *      - Arrays are 0-based indexing & Each element is accessed using indices
*/



/**
 *  There are 2 ways to define an array in JS
 *      1. using array literals
 *      2. using new keyword
 * 
 *  Both are same in every aspect, hence we use 1st way
 * 
 *  NOTE:
 *      - Generally arrays are defines using "const"
 *      - square braces are used to define an array (or) collection of elements
*/
const arr1 = ["Kumar", 25, true, 53.26];
const arr2 = new Array("Siva", 25, false);

console.log(arr1[0], arr1[1], arr1[2]);
console.log(arr2[0], arr2[1], arr2[2]);



/**
 *  Array Methods:
 *      - push(element) --> inserts element at the end/back of array
 *      - pop() --> removes element from the end/back of array && returns the element
 * 
 *      - unshift(element) --> inserts element at the start of array
 *      - shift() --> removes element from the start of array && returns the element
 *              - These operations are less optimised, since we have to shift all the elements in order to insert/remove
 * 
 *      - includes(element) --> returns a boolean value if the element is found/included in the array
 *      - indexOf(element) --> if found, returns index of element, else returns "-1" instead of error
 * 
 *      - arr.length --> returns length of the array
 * 
 *      NOTE:
 *          - push() & unshift() methods also returns length of the array
*/
const my_arr1 = [1, 2, 3, 4, 5];
console.log(my_arr1);

my_arr1.push(6);
console.log(my_arr1);

my_arr1.unshift(0);
console.log(my_arr1);

my_arr1.pop();
console.log(my_arr1);

my_arr1.shift();
console.log(my_arr1);

console.log(my_arr1.includes(5));
console.log(my_arr1.includes(-5));

console.log(my_arr1.indexOf(3));
console.log(my_arr1.indexOf(13));



/**
 *      array.join(separator) 
 *          - The join() method returns an array as a "string".
            - The join() method does not change the original array.
            - Any separator can be specified. The default is comma (,).
*/
console.log(my_arr1.join());       
console.log(typeof my_arr1.join());       
console.log(my_arr1.join("_"));



/**
 *  Slice() && splice()
 *  -------------------
 *      Slice(start, end)
                - The slice() method returns selected elements in an array, as a new array.
                - The slice() method selects from a given start, up to a (not inclusive) given end.
                - The slice() method "does not change/overwrite the original array".

        Splice(index, howmany, item1, ....., itemX)
                - The splice() method adds and/or removes array elements & returns it as a new array.
                        - index --> describes the position to add/remove
                        - howmany --> describes how many to be removed 
                        - items --> describes the items to be added/inserted in original array
                    - ind & howmany --> used to remove the elements from original & return it as a new array
                    - items --> used to add it in the original array
                - The splice() method "overwrites" the original array.
*/
const new_arr = [1, 2, 3, 4, 5, 6];
console.log("new Array: ", new_arr);

const new_arr1 = new_arr.slice(1, 3);       // returns the elements in a new array
console.log("Original Array: ", new_arr);
console.log("Sliced Array: ", new_arr1);

const new_arr2 = new_arr.splice(2, 3, "kumar"); // returns the removed elements in new array & adds the new elements in original
console.log("Original Array: ", new_arr);
console.log("Spliced Array: ", new_arr2);