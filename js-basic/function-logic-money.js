// problem solved------------------------------>259
function eidMarket(amount) {
  let tax = 0;
  if (amount <= 50000) {
    tax = amount * 0.1;
  } else if (amount <= 10000) {
    tax = amount * 0.2;
  } else if (amount <= 200000) {
    tax = amount * 0.3;
  } else {
    tax = amount * 0.4;
  }
  return tax;
}

console.log(eidMarket(30000));
console.log(eidMarket(60000));
console.log(eidMarket(120000));
console.log(eidMarket(300000));
// console.log(eidMarket(65000));
// console.log(eidMarket(120000));
// console.log(eidMarket(300000));

// problem solved------------------------------>260
/*
function productDelivery(product) {
  if (product < 10) {
    return 100;
  } else if (product < 20) return 300;
  else if (product < 50) return 1000;
  else {
    const item = product * 100;
    return item;
  }
}
console.log(productDelivery(8));
console.log(productDelivery(11));
console.log(productDelivery(23));
console.log(productDelivery(55));

*/

// this example fancy style will and shortcut style
// ------------------------------------------------------------>
function productDelivery(product) {
  if (product < 10) return 100;
  if (product < 20) return 300;
  if (product < 50) return 1000;
  return product * 100;
}
console.log(productDelivery(9));
console.log(productDelivery(15));
console.log(productDelivery(43));
console.log(productDelivery(60));

// problem solved------------------------------>261
