// problem solved------------------------------>329
// Sum of array
const nums2 = [5, 10, 15, 20, 25];
const total = nums2.reduce((sum, n) => sum + n, 0);
console.log(total);

// problem solved------------------------------>330
// Total product prices
const products1 = [
  { name: "shampoo", price: 100 },
  { name: "soap", price: 50 },
  { name: "toothpaste", price: 75 },
];
const totalPrice1 = products1.reduce((sum, item) => sum + item.price, 0);
console.log(totalPrice1);

// problem solved------------------------------>331
// Another product list
const products2 = [
  { name: "Pen", price: 5 },
  { name: "Book", price: 50 },
  { name: "Bag", price: 100 },
];
const totalPrice2 = products2.reduce((sum, item) => sum + item.price, 0);
console.log(totalPrice2);

// problem solved------------------------------>332
// Multiplication of numbers
const mult = [1, 2, 3, 4, 5].reduce((acc, n) => acc * n, 1);
console.log(mult);

// problem solved------------------------------>333
// Max value
const nums3 = [10, 20, 30, 40, 50];
const maxNum = nums3.reduce((max, n) => (n > max ? n : max), nums3[0]);
console.log(maxNum);

// problem solved------------------------------>334
// Sum with initial value 50
const nums4 = [100, 200, 300, 400];
const sumWithInitial = nums4.reduce((sum, n) => sum + n, 50);
console.log(sumWithInitial);
