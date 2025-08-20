// problem solved------------------------------>542
// Mobile brand with switch
let mobile = "Apple";

switch (mobile) {
  case "Apple":
    console.log("USA");
    break;
  case "Samsung":
    console.log("Korea");
    break;
  case "Xiaomi":
    console.log("China");
    break;
  default:
    console.log("Unknown Source");
}
// Output: "USA"

// problem solved------------------------------>543
// Browser type with if-else and switch
let browser = "Chrome";

// Using if-else
if (browser === "Chrome") {
  console.log("Best for developers");
} else if (browser === "Brave") {
  console.log("Privacy focused");
} else if (browser === "Safari") {
  console.log("Apple users' choice");
} else {
  console.log("Unsupported browser");
}

// Using switch
switch (browser) {
  case "Chrome":
    console.log("Best for developers");
    break;
  case "Brave":
    console.log("Privacy focused");
    break;
  case "Safari":
    console.log("Apple users' choice");
    break;
  default:
    console.log("Unsupported browser");
}
// Output: "Best for developers"

// problem solved------------------------------>544
// Payment method with switch
let paymentMethod = "credit";

switch (paymentMethod) {
  case "cash":
    console.log("Pay with cash");
    break;
  case "credit":
    console.log("Pay with credit card");
    break;
  case "debit":
    console.log("Pay with debit card");
    break;
  default:
    console.log("Invalid payment method");
}
// Output: "Pay with credit card"

// problem solved------------------------------>545
// Membership level with if-else
let membership = "gold";

if (membership === "free") {
  console.log("Access limited content");
} else if (membership === "silver") {
  console.log("Access most content");
} else if (membership === "gold") {
  console.log("Access premium content");
} else if (membership === "platinum") {
  console.log("Full access");
} else {
  console.log("Unknown membership level");
}
// Output: "Access premium content"

// problem solved------------------------------>546
// Order status with switch
let orderStatus = "shipped";

switch (orderStatus) {
  case "pending":
    console.log("Your order is being processed");
    break;
  case "shipped":
    console.log("Your order is on the way");
    break;
  case "delivered":
    console.log("Your order has been delivered");
    break;
  case "cancelled":
    console.log("Your order was cancelled");
    break;
  default:
    console.log("Unknown order status");
}
// Output: "Your order is on the way"

// problem solved------------------------------>547
//  Grade with switch
let grade = "B";

switch (grade) {
  case "A":
    console.log("Excellent");
    break;
  case "B":
    console.log("Good");
    break;
  case "C":
    console.log("Average");
    break;
  case "D":
    console.log("Poor");
    break;
  case "F":
    console.log("Fail");
    break;
  default:
    console.log("Invalid grade");
}
// Output: "Good"
