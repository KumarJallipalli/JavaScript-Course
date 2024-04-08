
console.log( 2 > 1 );
console.log( 2 < 1 );
console.log( 2 == 1 );
console.log( 2 >= 1 );
console.log( 2 <= 1 );
console.log( 2 != 1 );

/**
 *  We won't get any kind of issues in the above simple comapraios
 *  i.e., if we compare same datatypes, we won't face ant issues
 *  We will encounter issues only when we compare different types
 */

console.log( "2" > 1);
console.log( "02" > 1);
// In the above, stings are converted to numbers & then compared

console.log( null == 0);    // false
console.log( null > 0);     // false
console.log( null >= 0);    // true
// These are tricky, cuzz equality check "==" and comparision operators " >, <, >=, <= " works differently
// comparisions convert null to 0, hence true in 3rd statement

console.log( undefined == 0);    // false
console.log( undefined > 0);     // false
console.log( undefined >= 0);    // false



/**
 *  These comparision of other types sometimes results in unexpected results
 *  particularly, comparisions involving null & unexpected. Hence they should be avoided
 *  Hence, "Typescript" language doesn't allows it
 */

/**
 *  there is another operator called "strict check operator" ( === )
 *  This checks both value & operator for comparision
 */
console.log( "2" === 2 ) // false