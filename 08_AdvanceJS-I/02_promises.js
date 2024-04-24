/**
 *  Callbacks:
 *  ---------
 *      - A callback is a function that is passed as an argument to another function
 *      - A HOF is a function that takes one or more functions as arguments, or returns a function
 *      - Callbacks allow you to handle the results of an asynchronous operation in a non-blocking manner
 * 
 *      - Callbacks allow you to continue executing code while the operation is being executed in the background. 
 *      - Once the operation has completed, the callback function is called with the result of the operation.
*/

setTimeout(handler, 2000);
function handler() {
    console.log("Async statement to be printed after 2s");
};
/**
 *  How callbacks handles the async functions..?
 *      - setTimeout() is a async function, It will get executed after 2s
 *      - But we don't want to wait for 2s, since we have other tasks below waiting to be executed
 *      - So, how can we execute this setTimeout after 2s && execute the below tasks too..?
 * 
 *      - Here comes the concept called "callback functions" to handle the async functions
 *      - we will assign this task to be done in async to a hadler function & ask it to execute after 2s
 *              - How we will assign this async task to handler fn..?
 *              - By passing this function [called handler] as an argument
 *      - Now this handler fn will execute the async task after 2s && the results get returned/printed by the callback
 *      - meanwhile, JS will execute the other tasks in synchronous way
*/



// Guess the O/P
console.log("1st Statement is printed");
console.log("2nd Statement is printed");
setTimeout(function() {
    console.log("3. Async statement to be printed immediately since timeOut is '0s'");
}, 0)
console.log("4th Statement is printed");



/**
 *  Callback Hell:
 *  -------------
 *      - Callback Hell is essentially nested callbacks [stacked below one another forming a pyramid structure]
 *      - Every callback depends/waits for the previous callback, 
 *      - thereby making a pyramid structure that "affects the readability and maintainability" of the code. 
*/
setTimeout(() => {
    console.log("1st callback executed after 2s");
    setTimeout(() => {
        console.log("2nd callback executed after 3s, i.e., after Total 2+3 = 5s");
        setTimeout(() => {
            console.log("3rd callback executed after 4s, i.e., after Total 2+3+4 = 9s");
        }, 4000)
    }, 3000)
},2000)




/**
 *  Promise:
 *  --------
 *      - Promise "object" represents the eventual completion (or failure) of an asynchronous operation and its result.
 *      - A Promise can have 3 states:
 *              pending	    initial state   [result is undefined]
 *              rejected	operation failed   [result is error]
 *              fulfilled	operation completed   [result is value]
 *              - Promise basically represents a pending state that must be fulfilled/rejected at some point later
 *      - Promises are used to handle asynchronous operations in JavaScript.
 * 
 *  - JavaScript Promise are easy to manage when dealing with multiple asynchronous operations 
 *  - particularly where callbacks can create callback hell leading to unmanageable code
 *  - The promise pattern was created to replace the use of callbacks in certain situations.
*/

let promise = new Promise(function(resolve, reject){
    //do something
});
/**
 *  - The promise constructor takes only 1 argument which is a "callback" function
 *  - The callback function takes two arguments --> "resolve" and "reject"
 *          - If the callback fn is executed successfully, then "resolve" fn is called
 *          - If the callback fn is executed un-successfully, then "reject" fn is called
 *  NOTE:
 *      - To handle the Promise object, you need to chain the function call with the then() and catch()
*/

const promise1 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log("promise1's Async task is completed after 2s");
    },2000)
})

promise1.then(function() {
    console.log("Promise1 is fulfilled");
})

/**
 *  - Here, if we observe, then() is not executed. Why..?
 *  - The resolve() function corresponds to the then() function && reject() corresponds to the catch() function. 
 *  - Those couples are interlinked.
 *  - inorder to execute .then(), we need to invoke resolve() && to execute .catch(), we need to invoke reject()
*/

new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log("Promise2's async task is completed after 2s");
        resolve("Promise2 is fulfilled");
    }, 2000)
}).then((data) => {
    console.log(data);
})
/**
 *  NOTE:
 *          - Whatever the function arguments passed in resolve & reject functions inside the promise object
 *          - will be the same arguments passed in .then() & .catch() callback functions
 * 
 *          - .finally() can be used as default method & is called when promise is either fulfilled (or) rejected.
 *          - finally won't expect any arguments in it's callback fn.
 * 
 *          - there can be many .then() methods for the same promise object
 *          - But only 1 catch() && 1 finlly()
*/

const promise3 = new Promise(function (resolve, reject) {
    let error = false;
    setTimeout(() => {
        if(!error) {
            console.log("Promise3's async task is completed after 2s");
            resolve({username:"kumarjallipalli", email:"kumar@example.com"});
        }
        else {
            console.log("Promise3's async task is failed after 2s");
            reject({erorrtype:"Runtime Error", errormessage:"Promise Rejected"});
        }
    }, 2000)
})

promise3.then((data) => {
    console.log(`name: ${data.username} && mail: ${data.email}`);
    return data.username;
}).then((data) => {
    console.log(data);
}).catch((e)=>{
    console.log(`errorType: ${e.erorrtype} && mail: ${e.errormessage}`);
}).finally(() => {
    console.log("Always executed");
})

// refactoring the callback hell code in promises


new Promise((resolve) => {
    setTimeout(() => {
        console.log("1st callback executed after 2s");
        resolve();
    },3000)
}).then(() => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("2nd callback executed after 5s");
            resolve();
        },4000)
    })
}).then(() => {
    setTimeout(() => {
        console.log("3rd callback executed after 9s");
    },5000)
})



/**
 *  When to use callbacks & promises..?
 *      - Even promises use callbacks inside the then() and catch() methods.
 *      - Promises are used when you need to wait for a certain task to finish before running the next process.
 *      - you can use callbacks when your code doesn't have to wait for certain processes to finish. [like forEach()]
*/