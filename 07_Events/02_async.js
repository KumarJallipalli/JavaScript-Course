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

// ********************************************************************************************************


/**
 *  Events are of different types
 *      1. keyboard Events
 *      2. mouse Events
*/



/**
 *  KeyboardEvent:
 *  --------------
 *      - KeyboardEvent --> events that occur when a user presses a key on the keyboard.
 *      
 *              onkeydown	-->     A user presses a key
 *              onkeypress	-->     A user presses a key
 *              onkeyup	    -->     A user releases a key
 * 
 *      - The keydown and keyup events handles "all keys" & provide a code indicating which key is pressed, 
 *      - while keypress event only handles "typable characters" & indicates which character was entered.
 * 
 *      - All the event (e) properties:
 *              key	            The value of the key that triggered the event
 *              code	        The code of the key that triggered the event [NOT a number but returns exact key]
 * 
 *              altKey	        If the ALT key was pressed
 *              ctrlKey	        If the CTRL key was pressed
 *              shiftKey	    If the SHIFT key was pressed
 *              repeat	        If a key is being hold down repeatedly, or not
 * 
 *              isComposing	    If the state of the event is composing or not
 *              location	    The location of a key on the keyboard or device
 *              metaKey	        If the META key was pressed
*/



/**
 *  MouseEvent:
 *  -----------
 *      - The MouseEvent --> events that occur when the mouse interacts with the HTML document.
 * 
 *              onclick	            A user clicks on an element     [mousedown + mouseup]
 *              oncontextmenu	    A user right-clicks on an element
 *              ondblclick	        A user double-clicks on an element
 *              onmousedown	        A mouse button is pressed over an element
 *              onmouseup	        A mouse button is released over an element
 * 
 *              onmouseenter	    The mouse pointer moves into an element     [use these]
 *              onmouseleave	    The mouse pointer moves out of an element
 * 
 *              onmousemove	        The mouse pointer moves over an element
 *              onmouseout	        The mouse pointer moves out of an element
 * 
 *              onmouseover	        The mouse pointer moves onto an element
 * 
 *      - Some of the event (e) properties:   
 *              button	            returns Which mouse button is pressed
 *              relatedTarget	    returns The element that triggered the mouse event
 * 
 *  NOTE:
 *      - The mouseover event triggers when the mouse pointer enters the div element, and its child elements too.
 *              - if we try to move cursor to child element, it triggers 2 times [1 for each parent & child]
 *      - The mouseenter event is only triggered when the mouse pointer enters the div element.
 *              - if we try to move cursor to child element, it triggers only 1 times [i.e, for parent div only]
 *      - The onmousemove event triggers every time the mouse pointer is moved over the div element & it's child too. 
 *              - it will trigger everytime you move the cursor inside div
 */