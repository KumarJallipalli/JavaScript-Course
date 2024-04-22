/**
 *  Create a HTML Element:
 *  ----------------------
 *      - To create a HTML Element, we need to 
 *              1. create a element
 *              2. add/attach the element in the document
 *                      2.1 select the target [element] in the document
 *                      2.2 append the created element at the selected position 
 * 
 *  createElement() method -->  creates an element node. [Not a Node]
 *  The appendChild() method --> appends a node as the "last child" of an element.
*/

/**
 * Let's create <p> element & add it after the parent div
*/
const p_element1 = document.createElement("p");

p_element1.class = "p-tag"
p_element1.style.backgroundColor = "yellow";
p_element1.innerText = "This is a newly created paragraph element & added inside body element"

// Attached the p-tag to document
document.body.appendChild(p_element1);


/**
 * Let's create <p> element & add it inside div tag as a child
*/
const p_element2 = document.createElement("p");

p_element2.class = "p-tag"
p_element2.style.backgroundColor = "orange";
p_element2.style.padding = "10px";
p_element2.innerText = "Newly created paragraph element added between div & p"

// Attached the p-tag inside div as a child
document.querySelector('.parent').appendChild(p_element2);



/**
 *  - In the above at line-34, we have created a new content, which is textNode using .innerText
 *  - We can also create the same content using another way --> by actually creating a textNode
 * 
 *  - The createTextNode() method --> creates a text node. 
 *          - It is a method of document object --> document.createTextNode("value")
*/
const addText = document.createTextNode("New Text inside p-tag");

// Add the text just after the previous p-tag's Text with No spaces
p_element2.appendChild(addText);




/**
 *  NOTE:
 *      - if we add properties to elements using element.id, element.class...,
 *      - It will 1st get's the value & then overwrite the value --> 2 operations
 * 
 *      - Hence, use setAttribute("attribute", "value") --> directly overwrites --> 1 operation
*/