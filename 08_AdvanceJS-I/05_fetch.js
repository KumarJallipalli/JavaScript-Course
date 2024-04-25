
// These promises are to scheck whether these are executed 1st (or) fetch method
Promise.resolve("Hi This is fetch lecture")
.then((response) => {
    console.log(response);
})

new Promise((resolve, reject) => {
    resolve("Hello World");
}).then((d) => {
    console.log(d);
})



/**
 *  fetch():
 *  --------
 *      - fetch() --> is a global method, used to send a network request & get the response back
 *      - It is a successor to "XMLHTTPRequest()"
 *      - The Fetch API always returns a Promise object.
 *              - Hence, we can handle it using then/catch (or) async/await
 * 
 * 
 *  NOTE:
 *      - A fetch() promise only rejects when the request fails [like ba URL or network issue]
 *      - A fetch() promise does not reject if server responds with status codes that indicate errors (404, 504, etc.)
 *      - Simply, if connection is failed --> promise reject || else, promise response
*/

// fetch using async/await
async function getUser () {
    try {
        let user = await fetch("https://api.github.com/users/KumarJallipalli")
        let data = await user.json();
        console.log(data.name);
    } catch (error) {
        console.log("Error: ", error);
    }
}
getUser()

// fetch using then/catch
fetch("https://api.github.com/users/hiteshchoudhary")
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data.login);
})
.catch((reject) => {
    console.log("Error: ", reject);
})

// Any one of the above 2 can be executed 1st depending on the wait response time



/**
 *  How does fetch work in the Runtime Env like node/browser
 *      - WKT, asynchronous functions will be handled by webAPI's [browser/node]
 *      - These functions are then sent to a queue where Event loop will continuosly check this queue
 *      - So, event loop will send these fn's again to the execution context to get executed
 *      
 *      - But for fetch(), there will be a special queue other than the normal one
 *      - event loop will prioritize the fn's from this special queue rather than the normal one
 * 
 *      - Hence, sometimes we can see that 1st fetch() methods are being executed & then the async functions
*/

/**
 *  fetch() functionality is divided into 2 parts
 *          1. browser/node --> will take care of all the netwrok calls & returns the response from web
 *          2. global memory --> this will store the fetch data once it get's as a response
 *                  - This response from web is stored in an array called onFulfilled[]/onRejected[] based on fetch
 *                  - Now this data stored in the array is being returned by fetch() method
*/