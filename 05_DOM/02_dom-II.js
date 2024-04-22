
/*
 *  Where to add the <script> tag in HTML..?
 *      - <Script>s can be placed in the <body>, or in the <head> section of an HTML page, or in both.
 *      - We can add any number of <script> tags
 * 
 *  NOTE:   
 *      - We can also add <script> tag between </body> & </html> tag too. [but doesn't works all times]
 *      - other than these 3 places, it will fail to load the <script> tag
 *              - in the <body>, in the <head> & between </body> & </html> [only occasionally works]
*/
    


/**
 *  HTML Nodes (vs) Elements:
 *  -------------------------
 *      - WKT, DOM represents the "tree of nodes"
 *      - nodes --> describes all of element nodes, text nodes & comment nodes
 *              - Element nodes --> Only elements
 *              - text nodes --> whitespaces & text
 *              - comment nodes --> only comments
 *              - Attributes are also nodes
 *      - Elements --> are nothing but "element nodes"
 */



/**
 *  children property:
 *  ------------------
 *      - The children property --> returns a collection of an element's child elements.
 *      - It returns a "HTML Collection" Object
*/

const parent = document.querySelector(".parent");
console.log(parent);

// children property helps us to get the child elements in "HTML collection"
console.log(parent.children);

// since it is a collection, we cannot use HOF, but we can use basic for loop to access each child
for (let i=0; i<parent.children.length; i++) {
    console.log(parent.children[i].innerText);
}



/**
 *  Instead of accessing the child elements using the index, we can use some properties
 *      - "firstElementChild" property --> returns the first child element of the specified element.
 *      - "lastElementChild" property --> returns the last child element of an element.
*/

// Accessing the 1st & last elements of child elements
parent.firstElementChild.style.color = "red"
parent.lastElementChild.style.color = "orange"



/**
 *  Similarly, we can access the parent element using child element
 *      - "parentElement" property --> returns the parent element of the specified element.
 * 
 *      - "nextElementSibling" property --> returns the next element in the "same tree level".
 *      - "previousElementSibling" property --> returns the previous element in the same tree level.
*/
const child_element = document.querySelector(".day");

// Accessing the parent element from child
console.log(child_element.parentElement);
child_element.parentElement.setAttribute("id", "main-div");

// Accessing the next sibling element
console.log(child_element.nextElementSibling.innerHTML);

// Accessing the previous sibling element
console.log(parent.children[3].previousElementSibling.innerHTML);



/**
 *  childNodes property:
 *  -------------------
 *      - "childNodes" property --> returns a collection (NodeList) of an elements's child nodes.
 *              - nodes --> Element nodes, text nodes, and comment nodes.
 *      - It returns a "NodeList" object.
*/

// Accessing all the child Nodes of the parent div
console.log(parent.childNodes);



/**
 *  childNodes (vs) children:
 *  -------------------------
 *      - childNodes --> returns child nodes (element nodes, text nodes, and comment nodes).
 *                  - returns a NoseList 
 *      - children --> returns child elements (ignores text and comment nodes).
 *                  - returns a HTML Collection 
*/

/**
 *  firstChild vs firstElementChild:
 *  -------------------------------
 *      - firstChild --> returns the first child node (an element node, a text node or a comment node).
 *      - firstElementChild --> returns the first child element (ignoring text and comment nodes).
*/

/**
 *  nextSibling vs nextElementSibling:
 *  ---------------------------------
 *      - nextSibling --> returns the next siblingnode (an element node, a text node or a comment node)
 *      - nextElementSibling returns the next sibling element (ignoring text and comment nodes).
*/