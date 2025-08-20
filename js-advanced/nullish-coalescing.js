// problem solved------------------------------>482
// Nullish coalescing assignment
let x = null;
x ??= 75;
console.log(x); // Output: 75 (because x was null)

// problem solved------------------------------>483
// Set default stock with nullish coalescing
const product = { name: "Laptop", price: 1000 };
const stock = product.stock ?? 0;
console.log(stock); // Output: 0

// problem solved------------------------------>484
//  Set default discount for falsy values
const productDetails = { name: "Phone", discount: 0 };
productDetails.discount = productDetails.discount || 10;
console.log(productDetails.discount); // Output: 10 (because 0 is falsy)
