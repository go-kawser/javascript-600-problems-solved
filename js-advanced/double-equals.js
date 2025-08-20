// problem solved------------------------------>379
// Same type:
// If the values on both sides of == have the same type, JavaScript compares the values directly:
5 == 5;
"hi" == "hi";
5 == 10;

// problem solved------------------------------>380
// Different types:
// If the types are different, JavaScript will try type conversion to make them the same type before comparing.
// Number ↔ String Comparison
// If one side is a number and the other side is a string, the string is converted to a number first:
2 == "2";
2 == "20";

// problem solved------------------------------>381
// Boolean ↔ Number Comparison
// If one side is a boolean, JavaScript converts it to a number:
false == "0";
true == "1";
true == "10";

// problem solved------------------------------>382
// Object ↔ Primitive Comparison
// If one side is an object (like an array) and the other is a primitive (number, string, boolean), JavaScript converts the object to a primitive using .toString():
([] == (0)[1]) == 1;

// problem solved------------------------------>383
/** 
null and undefined

null == undefined → true

null === undefined → false (strict equality checks type as well)

No type conversion happens with == between null and undefined. JavaScript treats them as equal in ==.

*/

// problem solved------------------------------>384
/** 
 * NaN (Not a Number)

NaN == NaN → false

Reason: NaN is a special number that is never equal to anything, even itself

To check NaN, use:
 */
isNaN(NaN);

// problem solved------------------------------>385
// Question: Why is NaN == NaN false?

/**
 * 1. What is NaN?

NaN stands for “Not a Number”.

Interestingly, it is still of number type, but it does not represent any specific number.

2. Nature of NaN

NaN is indeterminate or undefined.

Its value is not fixed, so:

"An indeterminate value cannot be equal to another indeterminate value."

3. Comparison in JavaScript

Using == or ===, JavaScript checks if values are the same.

But because NaN is undefined, we get:
 */
NaN == NaN;
NaN === NaN;

// How to check for NaN
isNaN(NaN);
Number.isNaN(NaN);
