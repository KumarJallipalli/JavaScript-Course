/**
 * - WKT,
 * - The DOM is a tree-like structure generated from the HTML file [by browser]
 * - Browser then exposes this DOM as a set of JS objects that we can access, such as window & document objects.
*/



/**
 *  Console:
 *  --------
 *      - The Console object provides access to the browser’s debugging console
 *      - The console.log() --> prints out a String representation of the object
 *      - The console.dir() --> prints the list of object properties of a specified object.
*/
console.log(document);
console.dir(document);



/**
 *  DOM Manipulations:
 *  ------------------
 *      - HTML DOM "methods" are actions you can perform (on HTML Elements).
 *      - HTML DOM "properties" are values (of HTML Elements) that you can get, set or change.
 *      - In the DOM, all HTML elements are defined as objects.
 * 
 *  - To manipulate a HTML element, 
 *      1. find/access the element
 *      2. modify the element's properties
 * 
 *      - The most common way to access an HTML element is to use the id of the element --> "getElementById()" 
 *      - The easiest way to get the content of an element is by using the innerHTML property. --> "innerHTML" 
 *              - The innerHTML property is useful for "getting" or "replacing" the content of HTML elements.
*/

// 1. Find the p-element from DOM.html file using JS
document.getElementById("p-tag");

// 2. Get the content of p-tag using JS
console.log(document.getElementById("p-tag").innerHTML);

// 3. Modify the content of p-tag using JS   
document.getElementById("p-tag").innerHTML = "Hello DOM manipulator";

// we can also get & set the attributes
document.getElementById("p1").getAttribute("id")        // p1
document.getElementById("p1").setAttribute("id", "p")   // set id="p"




/**
 *  Finding the HTML elements:
 *  -------------------------
 *     1. getElementById("intro") --> returns the element with matching id as an "Object"
 *     2. getElementsByTagName("p") --> returns all the elements with matching tag-name as "HTML collection"
 *     3. getElementsByClassName("p2") --> returns all elements with the matching class-name as "HTML collection"
 *          
 *     4. querySelector("selector") --> returns 1st element that match a specified CSS selector as "Object"
 *     5. querySelectorAll("selector") --> returns all elements that match a specified CSS selector as "NodeList" 
 * 
 *  NOTE:
 *          - querySelector() is mostly used as it gives us the freedom to pass the required "selector combination"
 *          - Only querySelectorAll() returns a "NodeList" where we can apply forEach() method
 *          - getElementsByTagName("p") & getElementsByClassName("p2") returns "HTML Collection" [we can't apply any loops]
*/

const p_element = document.getElementById("p1")
console.log(p_element);

const p_elements = document.getElementsByTagName("p")
console.log(p_elements);

const p_class = document.getElementsByTagName("p2")
console.log(p_class);

const p_selector = document.querySelector("div p")
console.log(p_selector);

const p_selectors = document.querySelectorAll("div")
console.log(p_selectors);




/**
 *  WKT, for HTML Collections, we can't apply any of the loops like arrays
 *          - So, we need to convert the HTML collection to arrays
 *          - We can convert it using "Array.from()"    [ we have discussed this before too]
 *          - we can convert both HTML collection & NodeList using "Array.from(Obj)"
 * 
 *  Array.from(object):
 *  -------------------
 *      - Array.from() method returns an array from any iterable object.
 *              - iterable object --> Object with length property
 *      - Array.from() is a static property
 *              - Only Array.from(obj) NOT like myArr.from(obj)
*/




/**
 *  Access & Modify the element's properties:
 *  -----------------------------------------
 *      - getAttribute("attribute") method --> returns the value of the specified element's attribute.
 *      - setAttribute("attribute", "new_value") method --> sets a new value to the specified attribute.
 * 
 *      - document.getElementById(id).style.property = new style    --> add/update style to the element  
 *  
 *      - innerText --> sets or returns Just the text content visible to the user [NO spacing and CSS hidden text]
 *      - textContent --> sets or returns only the text content from HTML code [with spacing and CSS hidden text]
 *      - innerHTML --> sets or returns content of element as it is from HTML code.
*/

// WKT, thr following returns an object, hence we can use the associated properties & methods
const p_id = document.getElementById("p1")
console.log(p_id);

p_id.id;                        // get/set the id attribute's value
p_id.className;                 // get/set the class attribute's value
p_id.getAttribute("p1");        // get's the value of the specified attribute
p_id.setAttribute("p1", "p");   // set's the value of the specified attribute with the new specified attribute

p_id.style.color = "red"        // set's the style property color with specified value

// ex: <p>   This element has extra spacing     and contains <span style="display:none;" >a span element</span>.</p>
p_id.innerText      // This element has extra spacing and contains
p_id.textContent;   //    This element has extra spacing     and contains a span element.
p_id.innerHTML;     //    This element has extra spacing     and contains <span style="display:none;" >a span element</span>.


//******************************************************************************************************* */

/**
 *  Methods:
 *      document.getElementById(id)	            -->     Find an element by element id
 *      document.getElementsByTagName(name)	    -->     Find elements by tag name
 *      document.getElementsByClassName(name)	-->     Find elements by class name
 * 
 *      element.setAttribute(attribute, value)	-->     Change the attribute value of an HTML element
 *      element.getAttribute(attribute)	        -->     gets the attribute's value of an HTML element
 * 
 *      document.createElement(element)	        -->     Create an HTML element
 *      document.removeChild(element)	        -->     Remove an HTML element
 *      document.appendChild(element)	        -->     Add an HTML element
 *      document.replaceChild(new, old)	        -->     Replace an HTML element
 * 
 *  NOTE:
 *          - All the above method's argument msut be passed in "String" format
 * 
 *  Properties:
 *      element.innerHTML =  new html content	-->     Change the inner HTML of an element
 *      element.attribute = new value	        -->     Change the attribute value of an HTML element
 *      element.style.property = new style	    -->     Change the style of an HTML element
*/