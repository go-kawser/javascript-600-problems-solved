// problem solved------------------------------>427
// Missing semicolon
// Without semicolon - may cause error in some cases
let x = 5;
let y = 10;
// JavaScript usually handles this automatically, but it's good practice to use semicolons

// problem solved------------------------------>428
// Reference Error
// ReferenceError occurs when trying to access undefined variable
console.log(nonExistentVariable); // ReferenceError: nonExistentVariable is not defined

// problem solved------------------------------>429
// Syntax Error vs Type Error
// SyntaxError: Invalid code structure
// console.log("hello"; // SyntaxError: missing )

// TypeError: Wrong data type operation
let num = 123;
// num(); // TypeError: num is not a function
