// problem solved------------------------------>530
// Variable access before declaration
// This will cause ReferenceError
// console.log(commentCount + 1); // ReferenceError: Cannot access 'commentCount' before initialization

let commentCount = 5;
console.log(commentCount); // Output: 5

// problem solved------------------------------>531
// const variable access before declaration
// This will cause ReferenceError
// console.log(views / 2); // ReferenceError: Cannot access 'views' before initialization

const views = 100;
console.log(views / 2); // Output: 50

// problem solved------------------------------>532
//  Temporal Dead Zone (TDZ)
// TDZ: Area where variable exists but cannot be accessed
console.log(
  "TDZ: Variables exist but can't be accessed until declaration. Prevents bugs from undefined behavior"
);

// problem solved------------------------------>533
// Function expression hoisting
// Function expressions are not hoisted like function declarations
// console.log(add(5, 3)); // TypeError: add is not a function

const add = function (a, b) {
  return a + b;
};

console.log(add(5, 3)); // Output: 8

// problem solved------------------------------>534
//  var hoisting behavior
console.log(x); // Output: undefined (var is hoisted but initialized with undefined)
var x = 10;
console.log(x); // Output: 10

// problem solved------------------------------>535
// let vs var hoisting
// Both let and var are hoisted, but behave differently
console.log(
  "Both hoisted, but var initialized with undefined, let/const in TDZ until declaration"
);

// problem solved------------------------------>536
// Function declaration hoisting
// Function declarations are fully hoisted
console.log(findLarger(87, 12)); // Output: 87 (works because function is hoisted)

function findLarger(a, b) {
  return a > b ? a : b;
}

// This works because function declarations are hoisted to the top of their scope
