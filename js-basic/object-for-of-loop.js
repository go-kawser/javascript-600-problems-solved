// problem solved------------------------->202
const numbers = {
  a: 10,
  b: 20,
  c: 30,
  d: 40,
};

let total = Object.values(numbers);
let sum = 0;
for (let i = 0; i < total.length; i++) {
  sum = sum + total[i];
}
console.log(sum);

// problem solved------------------------->203
const phone = {
  brand: "Samsung",
  model: "Galaxy S21",
  price: 85000,
};
const keys = Object.keys(phone);
for (const key of keys) {
  const value = phone[key];
  console.log(value);
}
