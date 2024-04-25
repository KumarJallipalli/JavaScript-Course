/**
 *  Async & Await:
 *  --------------
 *      - The async/await syntax enables you to handle promises without using .then() and .catch() method chaining, 
 *      - which also removes the need for nested callbacks. AND makes your code cleaner and clearer
 * 
 *      - When handling a Promise, we need to chain the calls to the function/variable that returns a Promise using then/catch methods.
 *      - So, instead of using then/catch, we will use "await"
 * 
 *      - The await keyword basically makes JavaScript wait until the Promise object is resolved or rejected
 *      - The await keyword is placed before the call to a function or variable that returns a promise.
 * 
 *      - But The await keyword can only be used inside an asynchronous function.
 *      - The keyword async before a function makes the function asynchronous & return a promise:
*/

// this throws error
// const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
// const json = await response.json();
// console.log(json)

// this is correct
async function runProcess() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const json = response.json();     // since, converting to JSON also takes time, we made await
    console.log(json)
    // this is to wait for the responce to get converted to JSON, else use "await" at line 24
    setTimeout(() => {
        console.log(json);
    }, 1000)
}
runProcess();



/**
 *  But the problem in async/await is, errors (or) rejects are not handled
 *  - We need to explicity use try/catch blocks to handle errors in async/awiat
 *  - where as error are by default handled by then/catch in promises
*/
async function runProcess() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.log(error);
    }
}
runProcess();



/**
 *  Why to use async/await..?
 *      - By using the async/await syntax, you reduce the need for method chaining and nested callbacks. 
 *      - This increases the readability of your code, 
 *              - especially when you have a complex code (or) nested code like if/else and a for loop block 
*/


// handling promises using both then/catch & async/await
const promise3 = new Promise(function (resolve, reject) {
    let error = true;
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

// using then/catch
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

// using async/await
async function handlingPromise3 () {
    try {
        let resolve = await promise3;
        console.log(resolve.username);
        console.log(resolve.email);
    } catch (error) {
        console.log(`errorType2: ${error.erorrtype} && mail2: ${error.errormessage}`);
    }
}
// handlingPromise3()
console.log(handlingPromise3());



/**
 *  NOTE:
 *      - To use then/catch, we need promise's response/reject => we definitely need a promise
 *      - To use await, we definitely need an async function
*/