/**
 *  Looping Statements:
 *  -------------------
 *      - Looping statements, also known as iteration or repetition statements (or) simply loops. 
 *      - loops are used to repeatetively execute a block of code again & again
 *      - They are essential for performing tasks such as 
 *                  - iterating over elements in a list, 
 *                  - reading data from a file, or 
 *                  - executing a set of instructions a specific number of times.
 * 
 *      - There are 3 types of loops 
 *          1. While-loop --> executes a block of code as long as a specified condition is true.
 *          2. do-while loop --> executes the code block once, irrespective of condition AND then behaves like while-loop
 *          3. for-loop --> executes a block of code a number of times [i.e., until the condition is satisfied]
 * 
 *      - Buth each loop will have 3 things common
 *          1. initialization --> to start (or) count (or) performing the task
 *          2. condition --> to keep the flow within the loop
 *          3. updation --> increment/decrement to avoid the infinite loop
 * 
 *      - for-loop will have all the above 3 in a single statement
 *      - while & do-while will have initialization before loop, condition beside "while" keyowrd & updation inside loop
*/


// while-loop
let count = 0;              // initialization
while (count < 5) {         // condition
    console.log(count);
    count++;                // updation
}

// do-while
let cnt = 0;
do {
    console.log(cnt); // Print the current value of cnt
    cnt++;         // Increment cnt by 1
} while (cnt < 5);     // Continue looping as long as cnt is less than 5

// for-loop
for (let i = 0; i < 5; i++) {       // initializatio, condition & updation respectively
    console.log(i);
}




/**
 *  NOTE:
 *          - We can do all the things done by while loop with for loop & vice-versa
 *          - But in general, Use while when we don't know number of iterations. Else use for-loop
*/
const cars = ["BMW", "Volvo", "Saab", "Ford"];
let i = 0;
let text = "";

for ( ; cars[i]; ) {
  text += cars[i];
  i++;
}

while (cars[i]) {
  text += cars[i];
  i++;
}




// Nesting of loops --> loops within loops

// this won't give any error, as we have discussed this in scopes.js
// The drawback is we can't access the outer loop's value of "i" inside inner loop
for (let i = 1; i <= 3; i++) {
    for (let i=7; i<10; i++) {
        console.log(i, this, this.i);       // 7 {} undefined
    }
}




/**
 *  Jump Statements:    
 *  ----------------
 *      - Jump statements are used to change/transfer the flow of control within a program.
 *          1. break --> used to exit/terminate the loop [ skips all the remaining iterations ]
 *          2. continue --> used to skip the below execution in current iteration and proceed to the next iteration.
 *          3. return --> used to exit a function and optionally return a value to the caller.
*/

for (let i = 0; i < 10; i++) {
    if (i % 2 === 1)
        continue;
    if (i == 7)     // this won't get executed due to above's continue. So, change it to 6
        break;
    console.log(i + " ");
}