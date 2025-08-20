// problem solved------------------------------>335
// Ascending order
const numbers5 = [50, 12, 25, 8, 15];
numbers5.sort((a, b) => a - b);
console.log(numbers5);

// problem solved------------------------------>336
// Descending order
const numbers6 = [13, 2, 45, 9, 6];
numbers6.sort((a, b) => b - a);
console.log(numbers6);

// problem solved------------------------------>337
// Sort by age
const friends2 = [
  { name: "Ali", age: 29 },
  { name: "Sara", age: 22 },
  { name: "Tariq", age: 35 },
];
friends2.sort((a, b) => a.age - b.age);
console.log(friends2);

// problem solved------------------------------>338
// Alphabetical sort
const names2 = ["nabil", "zubayer", "sarwar", "delwar"];
names2.sort();
console.log(names2);
