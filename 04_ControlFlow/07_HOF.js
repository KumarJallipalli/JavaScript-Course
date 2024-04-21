/**
 *  Higher ORder Functions:
 *  ----------------------
 *      - A HOF is a function that takes one or more functions as arguments (or) returns a function.
 * 
 *  Callback function:
 *  ------------------
 *      - A callback is a function passed as an argument to another function
 *      - This technique allows a function to call another function
 * 
 *  NOTE:
 *          - When you pass a function as an argument, remember NOT to use parenthesis ().
*/

let arr = [5, 2, 7, 9, 12];

let result = arr.forEach ( (item) => {return item} )
console.log(result);        // undefined

/**
 *  - If we observe, for-of, for-in & forEach() won't return  any values
 *  - Hence, some more HOF for arrays have developed which will work on array elements & return
*/



/**
 *  .filter():
 *  ----------
 *      - The filter() method returns a new array filled with elements that pass a test provided by a function.
 *      - i.e., it will filter the array based on the condition in the callback function's return statement
 *      - It doesn't effect the original array
 *      - It is a HOF & expects a callback fn
 * 
 *      - cllback fn will be executed for each element in the array. 
 *      - And It should return a "truthy" value to keep the element in the returning array.
*/

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let evenNums1 = arr.filter( (item, ind) => {console.log(item%2 == 0);} )
console.log(evenNums1);
let evenNums = arr.filter( (item, ind) => { return item%2 == 0; } )
console.log(evenNums);

let first5 = arr.filter( (item, ind) => (item <=5) )
console.log(first5);

// last filter example in forEach()
let newarray = [];
console.log(arr.forEach ( (item) => {
    if (item <= 5) 
        newarray.push(item);
} ));



const books = [
    {title: "Book One", genre: "Fiction", publish: 1981, edition: 2004},
    {title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008},
    {title: "Book Three", genre: "History", publish: 1989, edition: 2007},
    {title: "Book Four", genre: "Non-Fiction", publish: 2009, edition: 2010},
    {title: "Book Five", genre: "Science", publish: 1987, edition: 2014},
    {title: "Book Six", genre: "Fiction", publish: 1986, edition: 2010},
    {title: "Book Seven", genre: "History", publish: 2011, edition: 1996},
    {title: "Book Eight", genre: "Science", publish: 1999, edition: 2016},
    {title: "Book Nine", genre: "Fiction", publish: 2010, edition: 1998}
]

// filter the books with genre History
console.log(books.filter( (book) => book.genre === "History" ));

// filter the books which are published after 1996
console.log(books.filter( (book) => {return book.publish >= 1996 } ));

// filter the books with genre Science && editions after 2010
console.log(books.filter( (book) => book.genre === "Science" && book.edition >= 2010 ));




/**
 *  .map():
 *  -------
 *      - map() --> returns a new array from calling a function for every array element.
 *      - map() does not change the original array.
 *      - It is also a HOF & expects a callback fn
 * 
 *  NOTE:
 *          - Both .map() & .forEach() are same. Only difference is that former one returns a new array
*/

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log( arr.map( (item) => item+10 ) );

// we can return the ind & item together as an array
console.log( arr.map( (item, ind) => { return [item*10, ind]}) );



/**
 *  Method Chaining:
 *  ----------------
 *      - It is a mechanism for calling a method on another method of the same object.
 *      - This ensures a cleaner and readable code.
 * 
 *  How method chaining is possible in JS..?
 *      - JavaScript "this" keyword refers to the current object in which it is called. 
 *      - Thus, when a method returns "this", it simply returns an instance of the object in which it is returned. 
 *      - Since the returned value is an instance of an object, therefore, it is possible to call another method on the returned value. 
 *      - This makes method chaining possible in JavaScript.
 * 
 *  NOTE:
 *          - Make sure that the method returns the value, else method chaining won't work
*/

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(
    arr.map( (item) => item*10 )        // 1st this callback is applied on each element
    .map( (item) => item+2 )            // and then this callback is applied on each updated element
    .filter( (item) => item >= 40 )     // finally, this callback will filter the elements
);  




/**
 *  .reduce():
 *  ----------
 *      - The reduce() method --> iterates & reduces the array's value to a single value [accumulated value]
 *      - accumulator --> The value returned by the callbackFn in each iteration 
 *      - The accumulator from the previous iteration will get's added to the accumulator of the current iteration.
 *      - Hence, The accumulated value will get updated after each iteration
 * 
 *      Syntax:
 *                  array.reduce( function (accumulator, currentValue, currentIndex, arr), initialValue)
 * 
 *      - initialValue --> the value to which accumulator is initialized the first time the callback is called.
 *      - accumulator --> The value returning from the previous callbackFn. 
 *                          - On the first call, its value is initialValue if initialValue is specified; otherwise its value is array[0].
 *      - cuurentVlue --> The value of the current element.
 *                          - On the first call, its value is array[0] if initialValue is specified; otherwise its value is array[1].
*/

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let sum = arr.reduce( function (accumulator, currentValue) {
    console.log(`accumulator: ${accumulator} && currentValue: ${currentValue}`);
    return accumulator + currentValue
})
console.log(sum);
/**
 *  - Here, we haven't passed any initialValue.
 *  - Hence, 0th element is taken as initialValue && callback fn will be executed from 1st element onwards
*/

let total = arr.reduce( function (accumulator, currentValue) {
    console.log(`accumulator: ${accumulator} && currentValue: ${currentValue}`);
    return accumulator + currentValue
}, 10)
console.log(total);
/**
 *  - Here, we have passed the initialVlaue
 *  - Hence, callback will be executed from 0th element onwards
*/


// This reduce is used in calculating the total price of all the items in the shopping cart
let shoppingCart = [
    {
        item: "Mobile Phone",
        price: 13999
    },
    {
        item: "Mobile Backcase",
        price: 599
    },
    {
        item: "Mobile Charger",
        price: 1999
    },
    {
        item: "Extended Warranty",
        price: 999
    },
]

let totalPrice = shoppingCart.reduce( (acc, val) => {return acc + val.price}, 0 )
console.log(totalPrice);