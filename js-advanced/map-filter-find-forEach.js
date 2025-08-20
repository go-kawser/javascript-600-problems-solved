// problem solved------------------------------>316
//  Increase every item price by 13
const prices = [30, 45, 20, 60, 10];
const newPrices = prices.map((price) => price + 13);
console.log(newPrices);

// problem solved------------------------------>317
// Filter names with more than 5 characters
const players = ["Messi", "Maradona", "Pele", "Zidane", "Ronaldo"];
const longNames = players.filter((name) => name.length > 5);
console.log(longNames);

// problem solved------------------------------>318
// Find first number greater than 20
const nums = [10, 15, 20, 25, 30, 35];
const firstAbove20 = nums.find((num) => num > 20);
console.log(firstAbove20);

// problem solved------------------------------>319
// Filter heights above 69
const heights = [65, 70, 68, 72, 68, 73];
const tall = heights.filter((h) => h > 69);
console.log(tall);

// problem solved------------------------------>320
// Divide every number by 3
const numbers = [7, 10, 15, 20, 25, 30];
const divided = numbers.map((n) => n / 3);
console.log(divided);

// problem solved------------------------------>321
// Get 3rd character of each friend’s name
const friends = [
  "Leonardo",
  "Brad Pitt",
  "Kate Winslet",
  "Audrey Hepburn",
  "Johnny Depp",
];
const thirdChar = friends.map((name) => name[2]);
console.log(thirdChar);

// problem solved------------------------------>322
// Find name starting with H
const names = ["Tom", "Harry", "Sam", "Jack"];
const startsWithH = names.find((n) => n.startsWith("H"));
console.log(startsWithH);

// problem solved------------------------------>323
// Print every number using forEach
[1, 2, 3, 4, 5].forEach((n) => console.log(n));

// problem solved------------------------------>324
// Print animals
["cow", "goat", "sheep", "horse"].forEach((animal) => console.log(animal));
