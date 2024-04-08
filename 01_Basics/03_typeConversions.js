/**
 *  WKT, to know the datatype of any variable, we use "typeof". But we can use this in 2 ways
 *      1. as an operator --> console.log(typeof var_name);
 *      2. as a method --> console.log(typeof(var_name)); 
 */



/**
 *  type conversion of any datatype to numbers. 
 *      - We can use Number(var) to convert from any datatype to number
 */
let score = undefined
console.log(typeof score);          // typeof as an operator    
console.log(typeof(score) );        // typeof as a method

// Now convert string to number
let toNumber = Number(score);       // converts score var to number type
console.log(toNumber);              // logging the actual value of converted score variable
console.log(typeof toNumber);       // logging the type of converted score variable

/**
 *  Similarly, what if we change the value of score to different types & check the converted values
 *      "23"        - String    -->     23     - number
 *      "23dio"     - String    -->     NaN    - number  ["23dio" cannot be converted to number but we still converted, hence NaN]
 *      ""          - String    -->     0      - number
 *      "Kumar"     - String    -->     NaN    - number
 *      true/false  - boolean   -->     1/0    - number
 *      null        - null      -->     0      - number
 *      undefined   - undefined -->     NaN    - number
 */



/**
 *  Type conversion of any datatype to Boolean type
 *      - We use Boolean(var) to convert from any type to boolean type
 */
let value = null;
console.log(typeof value);

// Now convert to null type
let toBoolean = Boolean(value);
console.log(toBoolean);
console.log(typeof toBoolean);

/**
 *  Similarly, what if we change the value of value variable to different types & check the converted values
 *      55          - number    -->     true   - boolean  
 *      -86.9       - number    -->     true   - boolean 
 *      0           - number    -->     false  - boolean  [ Any integer other than 0 gives true value]
 *      ""          - String    -->     false  - boolean
 *      "Kumar"     - String    -->     true   - boolean
 *      null        - null      -->     false  - boolean
 *      undefined   - undefined -->     false  - boolean
 */



/**
 *  Similarly, we can use respective classes of their datatypes to convert from any type to their own type
 *      - like Number() --> for numbers
 *      - String() --> String type
 *      - Boolean() --> boolean type
 *      - Null() --> null   ==> Error [ similar to Undefined() also gives error ]
 */



/**
 *  Type conversion of any datatype to String type
 *      - We use String(var) to convert from any type to String type
 */
let x = -99.36;
console.log(typeof x);

// Now convert to null type
let toString = String(x);
console.log(toString);
console.log(typeof toString);

/**
 *  Similarly, what if we change the value of x variable to different types & check the converted values
 *      55          - number    -->     55          - String  
 *      true        - boolean    -->    "true"      - String
 *      null        - null      -->     "null"      - String
 *      undefined   - undefined -->     "undefined" - String
 * 
 *    - It literally converts anything given as input to a String by simply enclosing them within ""
 */