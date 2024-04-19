let a = 10;
const b = 20;
var c = 30;

console.log(a);         // 10
console.log(b);         // 20
console.log(c);         // 30



// What about the following code..?
if ( true ) {
    let d = 10;
    const e = 20;
    var f = 30;
}

// console.log(d);         // error
// console.log(e);         // error
console.log(f);         // 30

/**
 *  - The above errors are due to scope 
 * 
 *  Global & Local Scope:
 *          - whatever defined inside curly braces {}, is the local/block scope for those variables
 *          - Whatever defined outside the curly braces, is the Global scope
 * 
 *      - Here, variables defined using let, var & const keywords inside the if statement are local scope
 *      - Hence, they cannot be accessible outside the if curly braces {}
 *      - Hence, let & const are getting error --> which is expected
 *      - But variable defined using "var" keyword is actually printing the value --> Not correct behavior, Hence we use let
*/



// Is the below code possible..?
let x = 10;
const y = 20;
var z = 30;

if (true) {
    let x = 20;
    const y = 30;
    var z = 40;

    console.log(x);
    console.log(y);
    console.log(z);
}

console.log(x);
console.log(y);
console.log(z);

/**
 *  The above code is correct, since we have redeclared in other scope.
 *  But if we do the same re-declarations in the same scope, it will throw error
 * 
 *  Here, the behavior of varibale z which is declared using "var" is not as expected
 *      - Since, variables declared with "Var" can be accessed globally
*/



/**
 *  Hence, The actual difference is
 *  
 *  let (vs) var (vs) const
 *  -----------------------
        - If we declare a variable using
            - const → re-assignment & re-declaration are NOT Possible [ only in the same scope ]
            - let → re-assignment is Possible BUT re-declaration is NOT Possible [ only in the same scope ] [ Use this ]
            - var → Both re-assignment & re-declaration are Possible [ only in the same scope ] [ Old Syntax ]
*/

let p = 10;
const q = 20;
var r = 30;

// let p = 20;         // here, p throws error
// const q = 30;       // here, q throws error
// var r = 40;         // But, r doesn't throw error

// q = 50;                // This will also throw error, as we are re-assigning value to var declared with "const"

console.log(p);
console.log(q);
console.log(r);



/**
 *  NOTE:
 *          - variables declared with "Var" can be accessed globally
 *          - Global variable can be accessed inside local scope But vice-versa is NOT possible
*/

// Case - I
var u = 10;
let v = 20;

if (true) {
    console.log(u, v);


    u = 50;
    v = 60;
    console.log(u, v);
}

console.log(u, v);

/**
 *  - lines 102 will be 10 & 20 respectively
 *  - lines 107 will be 50 & 60 respectively
 *  - lines 110 will be 10 & 20 respectively..!     NO, It is wrong, o/p: 50 & 60
 *          - This is due to that we havn't re-declared u, v
*/



// Case - II
var s = 30;
let t = 40;

if (true) {
    // console.log(s, t);

    var s = 70;
    let t = 80;
    console.log(s, t);
}

console.log(s, t);

/**
 *  - lines 126 will be error, 
 *  - lines 130 will be 70 & 80 respectively
 *  - lines 110 will be 70 & 40 respectively
 *          - This is due to, s is declared with "var" keyword, hence it is accessed globally
 *          - But, t is declared with "let", & re-declared again. So, both declarations will be totally different variables
*/


// similarly
const g = 100;
const h = 200;

if (true) {
    // g = 500;
    const h = 600

    console.log(g, h);
}

console.log(g, h);
/**
 *  As seen in let & var case, const also follows the same
 *      - i.e., if re-declared, it will treat that variable as a new on
 *      - If not re-declared & access the same global variable, It will try to change the original & gives error
*/




// Scope in nesting
if (true) {
    const username = "Kumar"
    if (true) {
        const surname = "Jallipalli";
        console.log(username);
    }
    // console.log(surname);
}

// console.log(username);

/**
 *  The above code gives error at 174 & 177
 *  Since, we are trying to access the local scoped variables in global
*/



// It will be the same case with nested functions too
function one () {
    const name = "Kumar"
    
    function two () {
        const surname = "Jallipalli"
        console.log(name);
    }

    // console.log(surname);

    two ();
}

one();
