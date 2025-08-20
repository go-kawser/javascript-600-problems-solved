// problem solved------------------------------>325
// Check if array has number > 100
const numbers1 = [50, 60, 150, 200];
console.log(numbers1.some((num) => num > 100));

// problem solved------------------------------>326
// Check if all elements divisible by 5
const numbers2 = [10, 20, 25, 30];
console.log(numbers2.every((num) => num % 5 === 0));

// problem solved------------------------------>327
//  Check if array has "hello"
const words = ["hi", "good", "hello", "world"];
console.log(words.some((word) => word === "hello"));

// problem solved------------------------------>328
// Check if all ages >= 18
const ages = [20, 25, 18, 30];
console.log(ages.every((age) => age >= 18));
