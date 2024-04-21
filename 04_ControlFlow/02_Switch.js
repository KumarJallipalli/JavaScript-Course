
/**
 *  Switch Statements:
 *      - Switch statements are similar to if-else-if statements
 *      - The switch statement contains a key & multiple blocks of code called cases 
 *      - and based on the key's value, their respective matching case is executed
 *      - Default statement is executed when none of the cases doesn't match the key.  [optional]
 * 
 *      - Switch statement is easier to use instead of if-else-if statements. 
 *      - It also enhances the readability of the program.
 * 
 *  NOTE:
 *      - if "break" statement is not used, whatever the below cases are available are also executed, including default.
 *      - i.e., why we need to use it in every block of code. [wherever break is encountered, execution is stopped]
 * 
 *      - Switch uses strict check (===)
*/
let month = 1;

switch (month) {
    case "1":
        console.log("Month is January");
        // break;
    case 2:
        console.log("Month is Febuary");
        // break;
    case 3:
        console.log("Month is March");
        // break;
    case 4:
        console.log("Month is April");
        break;

    default:
        console.log("Please input the value between 1 & 12");
        break;
}



/**
 *  - If we observe, all the control statements are dependent on the specified condition [except switch]
 *  - Based on the evaluation of this condition only, statements get executed
 *          - If the o/p of this evaluation is "true" --> truthy value
 *          - If the o/p of this evaluation is "false" --> falsy value
 * 
 *      - Falsy values
 *              - false, 0, -0, 0n (BigInt), "", null, undefined, NaN
 *      - Truthy values
 *              - All the values excluding the falsy values. 
 *              - But there are some suprising truty values
 *                      - "0", 'false', " ", [], {}, function(){}
*/

// But How to check whether an Obj is empty..?
const emptyObj = {};

if (Object.keys(emptyObj).length == 0) {
    console.log("Object is Empty");
}



/**
 *  Nullish coalescing operator (??):
 *  ---------------------------------
 *      - The nullish coalescing (??) operator is a logical operator 
 *      - It returns it's RHS operand when its LHS operand is null or undefined, else returns its LHS operand.
 * 
 *  NOTE:
 *      - ?? only evaluates null (or) undefined on LHS, but NOT falsy values [like "||" ]
 *      - ? && ?? both are totally different
*/

const foo = null ?? 'default string';
console.log(foo);       // Expected output: "default string"

const baz = 0 ?? 42;
console.log(baz);       // Expected output: 0   [ since 0 is NOT null/undefined]



/**
 *  || operator:
 *  ------------
 *      - WKT, || is a "or" operator which returns true if atleast one expression is true
 *      - But || also evalutes the RHS value if LHS is of falsy value. [ similar to ?? ]
 * 
 *      - Hence, ?? operator overcomes the backlash seen with "or" operator ( || )
 *              - || opertor evaluates to all falsy values
 *              - But ?? only evaluates null/undefined
*/

const qty = 0 || 42;
const message1 = "" || "hi!";
const message2 = "Yo!" || "hi!";

console.log(qty);           // 42 and not 0
console.log(message1);       // "hi!" and not ""
console.log(message2);      // "Yo"




/**
 *  NOTE:
 *      - If there are more than 2 evaluations, then both "??" && "||" evaluates from left to right
*/

const message3 = "" || 0 || "Hey!";
console.log(message3);      // "Hey"

const message4 = null ?? undefined ?? "Yo!";
console.log(message4);      // "Hey"