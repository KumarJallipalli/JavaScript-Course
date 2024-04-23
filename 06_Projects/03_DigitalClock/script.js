const clock = document.querySelector("#clock");

setInterval(function () {
    const date = new Date();
    // console.log(date.toLocaleTimeString());
    clock.innerHTML = date.toLocaleTimeString()
}, 1000)



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
 *      - setTimeout() is also returns an "id"
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