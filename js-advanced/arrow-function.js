// problem solved------------------------------>285
const firstIndex = (arr) => arr[0];

console.log(firstIndex([10, 20, 30]));

// problem solved------------------------------>286
const multiplyThree = (a, b, c) => a * b * c;

console.log(multiplyThree(2, 3, 4));

// problem solved------------------------------>287
const unknown = () => "unknown";

console.log(unknown());

// problem solved------------------------------>288
const pocket = { name: "Rahim", money: 1000 };

const divideMoney = (obj) => obj.money / 5;

console.log(divideMoney(pocket));

// problem solved------------------------------>289
const sumFirstLast = (arr) => arr[0] + arr[arr.length - 1];

console.log(sumFirstLast([5, 10, 15, 20]));

// problem solved------------------------------>290
const add = (a = 10, b = 5) => a + b;

console.log(add());
console.log(add(20));
console.log(add(20, 30));
