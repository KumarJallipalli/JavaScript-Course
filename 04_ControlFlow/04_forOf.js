/**
 *  - In JS, we loop over arrays & objects very often
 *  - Hence, JS provided us with more loops to simplify the looping over arrays & objects
 *  - Some of them are: for-of loop, for-in loop, forEach() & son on...
*/



/**
 *  for-of:
 *  -------
 *      - for-of --> loops through the "values" of an iterable object.
 *      - It lets us loop over iterable data structures such as Arrays, Strings, Maps, Sets, NodeLists, and more:
 * 
 *      Syntax:
 *              for ( variable of iterable ) {
 *                  // code block to be executed
 *              }
 * 
 *      - variable --> which iterates over each value of iterator & get's assigned
 *      - iterable --> actual iterator [An object that has iterable properties.]
 * 
 *  NOTE:
 *          - for-of cannot work on "objects". [Since "Objects" are NOT directly iterable]
*/

// for-of on arrays
const array1 = ['a', 'b', 'c'];

for (const element of array1) {
  console.log(element);
}

// for-of on Strings
const greet = "Hello World!"

for (let i of greet) {
    console.log(i);
}

// for-of on Objects        [ throws error]
const person = {
    name: "kumar",
    age: 25,
    city: "Hyderabad"
}

// for (let i of person) {
//     console.log(i);
// }




/**
 *  Maps:
 *  -----
 *      - A Map holds/contains key-value pairs & remembers/retains the original insertion order of the keys.
 *      - Map keys are "unique" & can be of any datatype
 *      - As it is an Object, we will have many methods to operate on
 *              - new Map()	-->     Creates a new Map object
 *              - set()	    -->     add/update elements to a Map 
 *              - get()	    -->     Gets the value for a key in a Map
 *              - clear()   --> 	Removes all the elements from a Map
 *              - delete()  -->     Removes a Map element specified by a key
 *              - keys()    -->     Returns an iterator object with the keys in a Map
 *              - values()  -->     Returns an iterator object of the values in a Map
 *              - size()    -->     Returns the number of elements
*/

// for-of loop in Map
const map = new Map();
map.set("In", "India");
// map.set(Ind, "India");          // Throws error
map.set("Fr", "France");
map.set("USA", "United States of America");
map.set("Fr", "Finland");       // it updates the existing key's value [since keys are unique]

for (let i of map) {
    console.log(i);
}
/**
 *  - The above for-of loop iterates over ech element of map. i.e., key-value pair
 *  - Hence, we will get "key-value pairs in arrays" as output
*/

// So, we can iterate over maps like this [key, value]
for (let [key, value] of map ) {
    console.log(`Key: ${key} & value: ${value}`);
}




/**
 *  Difference between JS Objects & Maps..?
 *              Object	                                    Map
 *              ------                                      ---
 *          Not directly iterable	                Directly iterable
 *          Do not have a size property	            Have a size property
 *          Keys must be Strings (or Symbols)       Keys can be any datatype
 *          Keys are not well ordered               Keys are ordered by insertion
 *          Have default keys	                    Do not have default keys
*/