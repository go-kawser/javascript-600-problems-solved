// problem solved------------------------------>386
// Double equals comparison
if (true == 1) {
  console.log("same");
} else {
  console.log("different");
}
// Output: "same" (because true converts to 1)

// problem solved------------------------------>387
// Object comparison with triple equals
const obj1 = { name: "John" };
const obj2 = { name: "John" };

console.log(obj1 === obj2); // Output: false
// Reason: Objects are compared by reference, not by value
// Even though they have the same content, they are different objects in memory

// problem solved------------------------------>388
//  Array comparison
const arr1 = [1, 2, 3];
const arr2 = arr1; // Reference to the same array

console.log(arr1 === arr2); // Output: true
// Both variables point to the same array object in memory

// problem solved------------------------------>389
// Function to check double equality
function checkEquality(number, booleanValue) {
  const isEqual = number == booleanValue;
  console.log(isEqual ? "Equal" : "Not equal");
  return isEqual;
}

checkEquality(1, true); // Output: "Equal"
checkEquality(0, false); // Output: "Equal"
checkEquality(5, true); // Output: "Not equal"

// problem solved------------------------------>390
// Empty string vs false
console.log("" == false); // Output: true
// Empty string converts to 0, false converts to 0

// problem solved------------------------------>391
//  null vs undefined with triple equals
console.log(null === undefined); // Output: false
// They are different types and different values

// problem solved------------------------------>392
//  Type conversion with double equals
console.log(1 == "1"); // Output: true
// JavaScript converts string '1' to number 1 before comparison
