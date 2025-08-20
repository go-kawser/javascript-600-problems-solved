// problem solved------------------------------>488
// Post-increment vs pre-increment
let a = 59;
console.log(a++); // Output: 59 (post-increment: returns then increments)
console.log(++a); // Output: 61 (pre-increment: increments then returns)

// problem solved------------------------------>489
// Division shortcut operator
let oranges = 100;
oranges /= 15;
console.log(oranges); // Output: 6.666666666666667

// problem solved------------------------------>490
//  Logical AND assignment
let mango = 20;
mango &&= 10;
console.log(mango); // Output: 10 (because mango is truthy)

// problem solved------------------------------>491
//  Multiplication shortcut operator
let bananas = 50;
bananas *= 4;
console.log(bananas); // Output: 200

// problem solved------------------------------>492
//  Logical OR assignment
let grapes = 19;
grapes ||= 25;
console.log(grapes); // Output: 19 (because grapes is truthy, so no assignment)

// problem solved------------------------------>493
//  Subtraction shortcut operator
let apples = 50;
apples -= 10;
console.log(apples); // Output: 40

// problem solved------------------------------>494
// Logical OR assignment with undefined
let price = undefined;
price ||= 90;
console.log(price); // Output: 90 (because undefined is falsy)

// problem solved------------------------------>495
// Logical AND assignment with falsy value
let tomato = 0;
tomato &&= 5;
console.log(tomato); // Output: 0 (because 0 is falsy, so no assignment)

// problem solved------------------------------>496
//  Modulus assignment operator
let apple = 15;
apples %= 6;
console.log(apple); // Output: 3 (15 ÷ 6 = 2 remainder 3)
