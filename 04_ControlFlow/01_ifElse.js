/**
 *  Control Flow:
 *  -------------
 *      - control flow --> order in which the statements are executed in a script.
 *      - The statements inside your source files are generally executed "sequential" from top to bottom.
 *      - We write the programs to replicate the real life scenarios/taks. B ut real life scenarios are never sequential 
 *      - Hence, we need to control the flow of execution in order to replicate the real life scenarios/taks
 * 
 *  - Control flow statements allow us to control the order in which instructions are executed in a program.
 *          - There are 3 types of control flow statements
 *                  1. Conditional Statements   [if-else & Switch]
 *                  2. Looping Stetements       [for, while & do-while]
 *                  3. Jump Statements          [break, continue & return]
*/



/**
 *  Conditional Statements:
 *  -----------------------
 *      - Conditional statements are used to execute certain blocks of code based on specified conditions. 
 *      - They are fundamental to decision-making in programs.
 * 
 *  If Statements:
 *      - if statement is used to execute a block of code if a specified condition is true.
 * 
 *  If-else:
 *      - If the specified condition is true, executes the if-block.
 *      - If the specified condition is false, executes the else-block.     [optional]
 * 
 * if-else-if:
 *      - Whatever the specified condition is true, executes that respective block of code
 *              - We can write any number of else-if blocks
 *              - But even a single condition is true, the flow will exit from if-else-if blocks
 *      - If none of the conditions are true, executes the deafult else-block   [optional]
*/
let a = 15;
if (a === 5) {
    console.log("a is equal to 5");
} else if (a === 10) {
    console.log("a is equal to 10");
} else if (a === 20) {
    console.log("a is equal to 20");
} else {
    console.log("a is not equal to 5 or 10");
}



/**
 *  Ternary Operator:
 *      - Ternary Operator (Conditional Operator) is a concise way to write a conditional (if-else) statement.
 *      - It is the only JavaScript operator that takes three operands:
 *      - Syntax:   Condition ? trueExpression : falseExpression
 *              - If the consition is true, trueExpression is executed. else falseExpression is executed
 * 
 *  NOTE:
 *      - All the 3 are impoertant, we can't ignore any one of them. Else compiler throws error
*/
let x = 10;
console.log(x === 5 ? "x is equal to 5" : "x is not equal to 5");