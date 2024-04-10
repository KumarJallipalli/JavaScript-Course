/**
 *  Variables are used to store data in memory
 *  There are 2 types of data
 *      1. constant data --> data once stored cannot be changed in future
 *      2. variable data --> data once stored can be changed/modified whenever required
*/



const accountId = 123869;
let accountEmail = "kumar@microsoft.com";
var accountPassword = "1234567890";
accountCity = "Pune";

/**
 *  In the above, we have declared variables using different keywords & NO keyword. Let's discuss them
 *      const --> used to declare constant data/variables
 *      let --> used to declare normal varibles
 *      var --> used to declare normal varibles
*/


/**
 *  Scope --> scope defines the region in which the/that variable is valid [ accessible ].   
 *  Function Scope: variables are only accessible within the function in which they are declared.
 *  Block Scope: variable is accessible within the block that is between the curly braces.
*/

/**
 *  Then what is the difference between let & var keywords..?
 *      1. let is both block & function scoped. Whereas var is only function scoped
 *      2. variable redeclaration is possible with var but not with let.
 * 
 *  i.e., why we never use "var" keyword to declare variables. [ Due to issues with scope of variables ]
 *      - As it was not a block scoped, variables defined using var keyword [ outside a function ] can be accessible anywhere
 *      - So, there is possibility of "modification of 1 variable leads to modification of all variables with same names" 
 *      - Hence we only use "let" keyword
*/



/**
 *  let (vs) var (vs) const
        - If we declare a variable using
            - const → re-assignment & re-declaration are NOT Possible
            - let → re-assignment is Possible BUT re-declaration is NOT Possible [ Use this ]
            - var → Both re-assignment & re-declaration are Possible [ Old Syntax ]
*/



/**
 *  Variables declared using "No Keyword" becomes Global variables, but they must be defined/initialized
*/



// accountId = 125468;     // This gives us error as it is declared using const keyword, hence commneted out
accountEmail = "jallipalli@microsoft.com";
accountPassword = "1234512345";
accountCity = "Hyderabad";

console.log(accountId, accountEmail);     // Used to log data to console as it is

console.table( [accountId, accountEmail, accountPassword, accountCity] );   // log the data to console in the form of table


let undefinedVariable;          // the o/p will be undefined, since the var is not defined/initialized
// undefinedNoKeywordVriable;      // this throws error as it isn't initialized, hence commented out

// console.log(undefinedVariable, undefinedNoKeywordVriable);