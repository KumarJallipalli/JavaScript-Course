/**
 *  - Can we change the value of Math.PI in JS..?
 *          - Since, it is a const value, even if we try to change it, it still remains same
*/
console.log(Math.PI);       // 3.141592653589793
Math.PI = 5;
console.log(Math.PI);       // 3.141592653589793

/**
 *  Why..?
 *      - It is because, Math Object has PI property defined like this
 *                  {
                        value: 3.141592653589793,
                        writable: false,
                        enumerable: false,
                        configurable: false
                    }
        - Here, writable is false & hence we cannot change
        - Even if we try to change this property field, JS will throw error
*/
let descriptor = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(descriptor);

// Object.defineProperty(Math, "PI", {
//     writable: true
// })
// The above code throws error --> Cannot redefine property: PI




const person = {
    name: "kumar",
    mail: "kumar.fb.com"
}

let nameDescriptor = Object.getOwnPropertyDescriptor(person, "name")
console.log(nameDescriptor);
/**
 * {
        value: 'kumar',
        writable: true,
        enumerable: true,
        configurable: true
    }
*/

Object.defineProperty(person, "name", {
        value: 'Siva',
        writable: false,
})
console.log(person);
person.name = "Hitesh"
console.log(person.name);
/**
 *  - Now, we just changed the const variable & made const again
 *  - i.e., similar to Math.PI
 *  - But we can't change Math.PI, since it is hadrcoded so in depth that we cannot change.
 *  - But giving this explaination is more than sufficient
*/