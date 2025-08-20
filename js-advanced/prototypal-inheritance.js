// problem solved------------------------------>516
// How inheritance works in JavaScript
// JavaScript uses prototypal inheritance (objects inherit from other objects)
console.log("Objects inherit properties/methods through prototype chain");

// problem solved------------------------------>517
// What is prototypal inheritance
// Objects can inherit from other objects through prototype linkage
console.log(
  "Prototypal inheritance: Objects delegate to other objects for properties"
);

// problem solved------------------------------>518
//  Person object and prototype methods
const person = { name: "John" };
console.log(person.hasOwnProperty("name")); // Output: true (inherited from Object prototype)
console.log(person.toString()); // Output: "[object Object]" (inherited method)

// problem solved------------------------------>519
// Student object and toString method
const student = { name: "Alice", grade: "A" };
console.log(student.toString()); // Output: "[object Object]" (inherited from Object prototype)
// Yes, we can use toString() because all objects inherit from Object prototype
