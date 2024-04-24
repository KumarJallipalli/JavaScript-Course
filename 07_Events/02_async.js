/**
 *  Javascript:
 *  -----------
 *      - JS is Synchronous in nature [i.e., sequencial --> one after another]
 *              - [current operation won't gets executed until the previous operation gets executed]
 *      - JS is single treaded language
 * 
 *  NOTE:
 *      - Only "deafult JS" is synchronous & single-threaded
*/



/**
 *  Blocking (vs) Non-Blocking Code..?
 *          - Blocking --> blocking the flow of program/execution until the current operation finishes.
 *                  - Blocking methods are executed synchronously. 
 *                  -Synchronously means that the program is executed line by line.
 * 
 *          - Non-Blocking --> doesn't block the flow of pragram even the current operation is NOT finished
 *                  - Non-Blocking methods are executed asynchronously. 
 *                  - Asynchronously means that the program may not necessarily execute line by line.
*/



/**
 *  setInterval(callback, time):
 *  ---------------------------
 *      - The setInterval() method calls a function "repeatedly" at specified intervals (in milliseconds).
 *      - And it continues calling the function until "clearInterval()" is called, or the "window is closed".
 * 
 *      - setInterval() returns a number called ID, used to identify it & stop it using "clearInterval()"             
*/

/**
 *  The setTimeout() method 
 *      - setTimeout() -->  calls a function after a specified number of milliseconds.
 *      - The setTimeout() is executed only once.
 *      - setTimeout() will also returns an "id"
*/

/**
 *  NOTE:
 *      - The clearInterval() method clears a timer set with the setInterval() method.
 *      - The clearTimeout() method clears a timer set with the setTimeout() method.
*/

const id = setInterval( () => {
    console.log("Hello..!");
}, 1000 )

setTimeout( () => {
    clearInterval(id)
}, 5000);