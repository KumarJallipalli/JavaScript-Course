/**
 *  Form --> will collect & send the collected data
 *  - Get the data from input elements while submitting, for that
 *          1. we need to 1st stop the from from sending of data  
 *          2. Get the data 
 *          3. Paste it in the div with ID-result
*/


/**
 * preventDefault(): 
 * -----------------
 *      - preventDefault() --> cancels the event if it is cancelable, 
 *      - meaning that the default action that belongs to the event will not occur.
 *      - For example, this can be useful when:
 *              - Clicking on a "Submit" button, prevent it from submitting a form
 *              - Clicking on a link, prevent the link from following the URL
 * 
 *  NOTE: Not all events are cancelable. Use the "cancelable" property to find out if an event is cancelable.
*/

/**
 *  parseInt():
 *  -----------
 *      - The parseInt method parses a value as a string and returns the first integer.
 *      - Only the first integer found is returned.
 *      - Leading and trailing spaces are ignored.
 *      - If the first character cannot be converted, "NaN" is returned.
 *              ex: parseInt("34 45 66") --> 34
 *                  parseInt("   60   ") --> 60
 *                  parseInt("40 years") --> 40
*/

const form = document.querySelector("form");


// form submission is a submit event
form.addEventListener("submit", (e) => {
    e.preventDefault();             // stops the default behavior of submitting

    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    const results = document.querySelector("#results");

    if (height < 0 || isNaN(height) ) {
        results.innerHTML = `Please input a valid  height: ${height}`;
    }
    else if (weight < 0 || isNaN(weight) ) {
        results.innerHTML = `Please input a valid  weight: ${weight}`;
    }
    else {
        const bmi = (weight / ((height*height)/10000)).toFixed(2);

        if (bmi <= 18.6) {
            results.innerHTML = `<span>${bmi} <br> You are "Under Weight" </span>`;
        }
        else if (bmi <= 24.9) {
            results.innerHTML = `<span>${bmi} <br> You are "Normal Weight" </span>`;
        }
        else {
            results.innerHTML = `<span>${bmi} <br> You are "Over Weight" </span>`;
        }

    }
})
