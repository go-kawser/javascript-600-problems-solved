
// problem solved------------------------------>311
//  Difference between Export and Import

// export → sends functions, variables, or classes from one file.

// import → brings them into another file.


export const sum = (a, b) => a + b;


import { sum } from './utils.js';

console.log(sum(5, 10)); 

// problem solved------------------------------>312
//  Default Export
// A file can have only one default export.
// When importing, you can give it any name you want.

export default function greet() {
  console.log("Hello World!");
}

import greeting from './utils.js'; // name can be anything
greeting(); 


// problem solved------------------------------>313
export const multiply = (a, b) => a * b;

import { multiply as mul } from './utils.js';

console.log(mul(3, 4)); // 12


// problem solved------------------------------>314
// Named Export vs Default Export
// Named export → can export many items, must use the exact names when importing.
// Default export → only one per file, name can be changed when importing.

export const add = (a, b) => a + b;
export const sub = (a, b) => a - b;
export default function sayHi() { console.log("Hi"); }


import sayHello, { add, sub } from './utils.js';
sayHello(); 
console.log(add(5, 3)); 
console.log(sub(10, 4));


// problem solved------------------------------>315
// Can a file have multiple default exports?
// NO
// A file can only have one default export.
// But it can have multiple named exports along with one default.

export default function main() {
  console.log("Default Export");
}

export const helper = () => "Named Export";
