// problem solved------------------------------>291
const product = { name: "Laptop", price: 50000, brand: "Dell" };

const { brand } = product;
console.log(brand);

// problem solved------------------------------>292
const item = { name: "Mobile", price: 20000, phone: "Samsung" };

const { phone, price } = item;
console.log(phone, price);

// problem solved------------------------------>293
const colors = ["red", "blue", "green", "yellow"];

const [first, seconds] = colors;
console.log(first, seconds);

// problem solved------------------------------>294
const numbers = [5, 10, 15];

const [, second] = numbers;
console.log(second);

// problem solved------------------------------>295
const digits = [2, 4, 6, 8];

const [two, , , ten] = digits;
console.log(two, ten);

// problem solved------------------------------>296
function multiply(a, b) {
  return [a * 3, b * 3];
}

const [firstVal, secondVal] = multiply(2, 4);
console.log(firstVal, secondVal);

// problem solved------------------------------>297
const person = { name: "Rahim", city: "Dhaka" };

const { name, city, phones = "N/A" } = person;
console.log(name, city, phones);

// problem solved------------------------------>298
const teacher = { name: "Maria", profession: "Teacher" };

const { name: teacherName, profession: job } = teacher;
console.log(teacherName, job);
