// problem solved------------------------------>268
function add(num1 = 0, num2 = 0, num3 = 0) {
  const result = num1 + num2 + num3;
  console.log(result, num1, num2, num3);
  return result;
}
const total = add(1, 5, 4);
console.log(total);

// problem solved------------------------------>269
function deposit(have = 0, money = 50) {
  const seeMoney = have + money;
  return seeMoney;
}
console.log(deposit());

// problem solved------------------------------>270
function nameAndMonthIncome(name = "anonymous", income = 0) {
  const result = name + income;
  console.log(name, income, result);
  return result;
}
const monthIncome = nameAndMonthIncome();
console.log(monthIncome);

// problem solved------------------------------>271
function squire(number = 1) {
  const result = number * number;
  return result;
}
console.log(squire(3));

// problem solved------------------------------>272
// function product(phone = "Unknown product", price = 1) {}
function product(phone = "Unknown product", price = 1) {
  const total = `${phone} costs ${price}`;
  return total;
}
console.log(product());

// problem solved------------------------------>273
function favBooks(fav1 = ["JS book"]) {
  const result = fav1;
  return result;
}
console.log(favBooks());

// problem solved-------------------------------->274
let product = { price: 3000, quantity: 1 };
function marketPrice(product) {
  const total = product.price * product.quantity;
  return total;
}
console.log(marketPrice(100));
let product = [{ price: 3000, quantity: 1 }];

function marketPrice(product) {
  const result = product[0].price * product[0].quantity;
  return result;
}

console.log(marketPrice(product));

// problem solved------------------------------>275

// problem solved------------------------------>276

// problem solved------------------------------>277
