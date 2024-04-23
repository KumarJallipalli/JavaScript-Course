/**
 *  addEventListener():
 *  -------------------
 *      - This method attaches an event handler to an element (or) document & executes the callback on it.
 * 
 *      - element.addEventListener(event_name, function)
 *              - function --> to run when the event occurs.
 *              - When the event occurs, an "event" object is passed to the function as the first parameter.
 *              - event.target --> return the "element" from where the event is triggered/occurred
*/



const spans = document.querySelectorAll(".button");
const body = document.querySelector("body");

// console.log(spans);

spans.forEach( (element) => {
    // console.log(element);

    element.addEventListener("click", (e) => {                  // e --> event object
        // console.log(e);
        // console.log(e.target);

        switch (e.target.id) {
            case "grey" :
                body.style.backgroundColor = e.target.id;
                break;
            case "white" :
                body.style.backgroundColor = e.target.id;
                break;
            case "yellow" :
                body.style.backgroundColor = e.target.id;
                break;
            case "blue" :
                body.style.backgroundColor = e.target.id;
                break;
            default:
                body.style.backgroundColor = "black";
                break;
        }
    })
} )


