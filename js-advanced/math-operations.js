// problem solved------------------------------>405
// Find smallest number
const numbers = [45, 11, 89, 23, 56, -12, -56];
const smallest = Math.min(...numbers);
console.log(smallest); // Output: -56

// problem solved------------------------------>406
// Find largest number
const numbers2 = [21, 35, 67];
const largest = Math.max(...numbers2);
console.log(largest); // Output: 67

// problem solved------------------------------>407
// Round to nearest integer
console.log(Math.round(7.6)); // Output: 8
console.log(Math.round(7.2)); // Output: 7

// problem solved------------------------------>408
// Round down to smaller integer
console.log(Math.floor(9.8)); // Output: 9
console.log(Math.floor(5.3)); // Output: 5

// problem solved------------------------------>409
//  Round up to larger integer
console.log(Math.ceil(3.1)); // Output: 4
console.log(Math.ceil(6.9)); // Output: 7

// problem solved------------------------------>410
//  Absolute value
console.log(Math.abs(-34)); // Output: 34

// problem solved------------------------------>411
// Decimal number operations function
function decimalOperations(number) {
  console.log("Original:", number);
  console.log("Rounded:", Math.round(number));
  console.log("Floored:", Math.floor(number));
  console.log("Ceiled:", Math.ceil(number));
}

decimalOperations(7.4);
// Output:
// Original: 7.4
// Rounded: 7
// Floored: 7
// Ceiled: 8
