const p1 = Promise.resolve('Success');
const p2 = Promise.resolve(200);
const p3 = Promise.resolve('Finished');

// individual promises
p1.then((response) => {
    console.log(response);
})
p2.then((response) => {
    console.log(response);
})
p3.then((response) => {
    console.log(response);
})

// case-1: promise chaining --> we move to next response only if current response is obtained/executed
// ANd we can't get all the 3 promises responses together
p1.then((response1) => {
    console.log(response1);
    return p2
}).then((response2) => {
    console.log(response2);
    return p3
}).then((response3) => {
    console.log(response3);
})

// case-2: promise nesting --> All 3 promises executed at same time & getting all 3 responses together to use them
p1.then((response1) => {
    console.log(response1, "2");
    return p2.then((response2) => {
        console.log(response2, "2");
        return p3.then((response3) => {
            console.log(response3, "2");
            return [response1, response2, response3]
        })
    })
})
.then((array) => {
    console.log(array);
})

/**
 *  - But, This promise nesting is similar to callback hell
 *  - Hence, we want to avoid it.
 *  - So, JS provides us with few methods to deal these kind of scenarios
*/

Promise.all([p1, p2, p3])
.then( (response) => {
    console.log(response);
})
.catch( (reject) => {
    console.log(reject);
})



/**
 *  Promise.all():
 *  --------------
 *      - The Promise.all() method accepts an array of promises, and 
 *      - when all promises are resolved 
 *              --> will pass the responses returned by the each promise as an array and pass it to the then() method.
 *      - If one of the promises is rejected, 
 *              --> will returns the first reject it encounters and stops any further process
 * 
 * NOTE:
 *          - It takes promises as an array 
 *          - It returns the each promise's response as an array [in the same order of promise array]
 *          - this response array is passed to .then() [since response is array, then recives an array]
*/


/**
 *  Promise.allSettled():
 *  ---------------------
 *      - The Promise.allSettled() method is similar to the Promise.all() method, 
 *      - but instead of proceeding to catch() when one of the promises got rejected, 
 *      - this method will store the reject result and continue processing other promises.
 *      - When all promises are settled, method will return an "array of objects" that contains details of each promise.
*/

let p7 = Promise.reject('Error From Promise One');
let p8 = Promise.resolve(200);
let p9 = Promise.resolve('Finished');

Promise.allSettled([p7, p8, p9]).then(response => {
  console.log(response);
});
// // O/P
// [
//     { status: 'rejected', reason: 'Error From Promise One' },
//     { status: 'fulfilled', value: 200 },
//     { status: 'fulfilled', value: 'Finished' }
// ]


/**
 *  Promise.any():
 *  -------------
 *      - The Promise.any() method is similar to the Promise.all() method, 
 *      - except that it "returns only a single value" from any promise that calls the "resolve()" function first. 
 * 
 *  Promise.race():
 *  ---------------
 *      - The Promise.race() method is like the Promise.any() method, 
 *      - with one difference: the promise is settled when any promise is "either resolved or rejected:"
*/