
console.log( 5 + 5 );       // Addition operator ( + )
console.log( 5 - 5 );       // Subtraction operator ( - )
console.log( 5 * 5 );       // Multiplication operator ( * )
console.log( 5 ** 5 );      // Power operator ( a ** b ) --> a raised to the power of b [ a^b --> 5^5 == 25 ]
console.log( 5 / 5 );       // Division operator ( a / b ) --> It gives the exact division with decimals too
console.log( 2 % 3 );       // Modulus operator ( % ) --> Gives remainder



// If we use the ( + ) operator in strings, it will become concatinate operation
str1 = "kumar";
str2 = " jallipalli"
str3 = str1 + str2;
console.log(str3);



// similarly, if we use combination of strings & numbers with ( + ) operator, it will result differently
console.log( "1" + "2" );       // o/p: 12
console.log( 1 + "2" );         // o/p: 12
console.log( "1" + 2 );         // o/p: 12
console.log( "1" + 2 + 2 );       // o/p: 122
console.log( 1 + 2 + "2" );       // o/p: 32        [ since left --> right ]

console.log( 3 + 4 * 5 % 6 );
/**
 *  these above type of expressions are only used in exams but not in real time production code
 *  If we want to use in production code, we will simply put broces like ((3 + 4) * 5) % 6 
 *  Always, code should be more simple, readable & understandable
 */



console.log(true);         // true
console.log(+true);        // 1
// console.log(true+);     // error
console.log(+"");          // 0



let num1, num2, num3;
num1 = num2 = num3 = 2+2;

let num4 = 5, num5 = 8+9, num6 = 9;
console.log(num5);

/**
 *  Above type of assignment operations are also not use in real life
 *  As said earlier, code readability is more focussed
 */



/**
 *  prefix operator ( ++X ) --> 1st increments the value & then assigns/evaluates the expression
 *  postfix operator ( X++ ) --> 1st evaluates the expression & then increments the value
 */
let x = 7;
console.log(++x);       // 8
x = 7;
console.log(x++);       // 7
console.log(x);         // 8