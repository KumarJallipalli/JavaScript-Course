/**
 *  We need to add a <li> element in the <ul>
 *      - There are many ways to do it, 
 *          1. using createELement() & appendChild()
 *          2. using createELement() & appendChild() & createTextNode()
*/

// 1. using createELement() & appendChild()

function createLiElements (item) {
    const li = document.createElement("li");
    li.innerText = item;

    document.querySelector(".language").appendChild(li)
}
/**
 *  - But the above function is NOT optimised one
 *  - It is due to that "li.innerText"
 *          - This will traverse the whole tree to insert the value
 *  - SO, other optimized way is to use "createTextNode()"
*/

createLiElements("Java");
createLiElements("CPP");
createLiElements("Python");


// 2. optimal code
function createLiElementsOptimal (item) {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(item))

    document.querySelector(".language").appendChild(li)
}

createLiElementsOptimal("golang");
createLiElementsOptimal("Ruby on Rails");




/**
 *  Modifying the elements
*/

// 1.
const secondlanguage = document.querySelector("li:nth-child(2)")
secondlanguage.innerText = "TypeScript"

// 2. replaceWith() --> replaces selected elements with new HTML/DOM elements.
const firstLanguage = document.querySelector("li:first-child")
const newLanguage = document.createElement("li");
newLanguage.textContent = "Swift";
firstLanguage.replaceWith(newLanguage);

// 3.
const lastLanguage = document.querySelector("li:last-child");
lastLanguage.outerHTML = "<li>C</li>"



/**
 *  Removing the Elements
 *      - The remove() method --> removes a node from the document.
*/
const thirdLanguage = document.querySelector("li:nth-child(3");
console.log(thirdLanguage);
thirdLanguage.remove();