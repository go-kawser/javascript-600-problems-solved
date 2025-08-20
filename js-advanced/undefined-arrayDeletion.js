// problem solved------------------------------>370
// Undefined variable
let x;
console.log(x);

// problem solved------------------------------>371
// Function without return
function add(a, b) {
  let sum = a + b;
}

console.log(add(5, 10));

// problem solved------------------------------>372
// Delete element from array
let arr = [10, 20, 30, 40, 50];
delete arr[2];
console.log(arr);

// problem solved------------------------------>373
// Function with missing argument
function sumn(a, b, e) {
  console.log("Third param:", e);
}

sumn(5, 10);

// problem solved------------------------------>374
// Accessing wrong property
const student = { name: "serious sojib", roll: 1, masks: 99 };
console.log(student.marks);
