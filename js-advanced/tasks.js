// Javascript Tasks

// task-01 solved------------------------------>563
let products = [
  { id: 1, name: "Laptop", price: 50000, stock: 10 },
  { id: 2, name: "Mouse", price: 500, stock: 50 },
  { id: 3, name: "Keyboard", price: 1500, stock: 20 },
  { id: 4, name: "Monitor", price: 10000, stock: 15 },
];

let cart = [];
let orders = [];

// Task-1: addToCart function
function addToCart(productId, quantity) {
  // Check if product exists
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return "Product not found.";
  }

  // Check if sufficient stock is available
  if (quantity > product.stock) {
    return `Insufficient stock. Only ${product.stock} items available.`;
  }

  // Reduce the stock
  product.stock -= quantity;

  // Create cart item object
  const cartItem = {
    productId: product.id,
    name: product.name,
    quantity: quantity,
    price: product.price,
    totalPrice: product.price * quantity,
  };

  // Add to cart
  cart.push(cartItem);

  return `${product.name} added to cart. Quantity: ${quantity}`;
}

// task-02 solved------------------------------>564
// Task-2: viewCart function
function viewCart() {
  if (cart.length === 0) {
    console.log("Your cart is empty.");
    return;
  }

  console.log("=== Your Cart ===");
  cart.forEach((item, index) => {
    console.log(
      `${index + 1}. ${item.name} - Quantity: ${item.quantity} - Price: ₹${
        item.price
      } each - Total: ₹${item.totalPrice}`
    );
  });

  const grandTotal = cart.reduce((total, item) => total + item.totalPrice, 0);
  console.log(`Grand Total: ₹${grandTotal}`);
}

// task-03 solved------------------------------>565
// Task-3: placeOrder function
function placeOrder() {
  if (cart.length === 0) {
    return "Your cart is empty.";
  }

  // Calculate total price
  const totalPrice = cart.reduce((total, item) => total + item.totalPrice, 0);

  // Create order object
  const order = {
    orderId: Date.now(), // Using timestamp as unique order ID
    items: [...cart], // Copy cart items
    totalPrice: totalPrice,
    orderDate: new Date().toLocaleString(),
  };

  // Add to orders array
  orders.push(order);

  // Clear the cart
  cart = [];

  return "Order placed successfully!";
}

// Additional helper function to view orders
function viewOrders() {
  if (orders.length === 0) {
    console.log("No orders placed yet.");
    return;
  }

  console.log("=== Your Orders ===");
  orders.forEach((order, index) => {
    console.log(`\nOrder #${index + 1} (ID: ${order.orderId})`);
    console.log(`Date: ${order.orderDate}`);
    console.log("Items:");
    order.items.forEach((item) => {
      console.log(`  - ${item.name} x ${item.quantity} = ₹${item.totalPrice}`);
    });
    console.log(`Total: ₹${order.totalPrice}`);
  });
}

// -------------------------------------------------
// tasks 3 end

// Global data structures for tasks 4, 5, 6, 7
const restaurants = [
  {
    name: "Burger King",
    menu: [
      { name: "Whopper", price: 350 },
      { name: "Cheeseburger", price: 200 },
      { name: "French Fries", price: 100 },
    ],
  },
  {
    name: "Pizza Hut",
    menu: [
      { name: "Margherita Pizza", price: 500 },
      { name: "Pepperoni Pizza", price: 600 },
      { name: "Garlic Bread", price: 150 },
    ],
  },
  {
    name: "KFC",
    menu: [
      { name: "Fried Chicken Bucket", price: 800 },
      { name: "Chicken Wings", price: 300 },
      { name: "Coleslaw", price: 120 },
    ],
  },
];

const discountCodes = {
  WELCOME10: 10,
  SUMMER25: 25,
  FOODIE50: 50,
};

let order = [];
let reviews = [];

// task-04 solved------------------------------>566
function getFoodPrice(restaurantName, foodName) {
  // Find the restaurant
  const restaurant = restaurants.find((r) => r.name === restaurantName);

  if (!restaurant) {
    return "Restaurant not found.";
  }

  // Find the food item
  const foodItem = restaurant.menu.find((item) => item.name === foodName);

  if (!foodItem) {
    return "Food Item not found.";
  }

  return foodItem.price;
}

// task-05 solved------------------------------>567
function placeOrder(customer, restaurantName, foodItem, discountCode = null) {
  // Get food price
  const foodPrice = getFoodPrice(restaurantName, foodItem);

  if (typeof foodPrice !== "number") {
    return foodPrice; // Returns error message
  }

  let finalPrice = foodPrice;
  let discountApplied = 0;

  // Apply discount if code provided
  if (discountCode) {
    if (discountCodes.hasOwnProperty(discountCode)) {
      const discountPercentage = discountCodes[discountCode];
      discountApplied = (foodPrice * discountPercentage) / 100;
      finalPrice = foodPrice - discountApplied;
    } else {
      return "Invalid coupon code.";
    }
  }

  // Create order object
  const order = {
    id: order.length + 1,
    customer: customer,
    restaurant: restaurantName,
    foodItem: foodItem,
    originalPrice: foodPrice,
    discount: discountApplied,
    finalPrice: finalPrice,
    status: "Pending",
    orderDate: new Date().toLocaleString(),
  };

  // Add to order array
  order.push(order);

  return `Your Order is Successfully placed! Order Id: ${order.id}`;
}

// task-06 solved------------------------------>568
function getRestaurantTotalSales(restaurantName) {
  const restaurantOrders = order.filter(
    (order) => order.restaurant === restaurantName
  );

  if (restaurantOrders.length === 0) {
    return 0;
  }

  const totalSales = restaurantOrders.reduce(
    (total, order) => total + order.finalPrice,
    0
  );
  return totalSales;
}

// task-07 solved------------------------------>569
function submitReview(orderId, restaurantName, rating, reviewText) {
  // Check if order exists and matches restaurant
  const order = order.find(
    (order) => order.id === orderId && order.restaurant === restaurantName
  );

  if (!order) {
    return "Don't give fake reviews without eating, please.";
  }

  // Validate rating
  if (rating < 0 || rating > 5) {
    return "Rating must be between 0 and 5.";
  }

  // Validate review length
  if (reviewText.length < 20) {
    return "Review must be longer than 20 characters.";
  }

  // Create review object
  const review = {
    id: reviews.length + 1,
    orderId: orderId,
    restaurant: restaurantName,
    customer: order.customer,
    rating: rating,
    review: reviewText,
    reviewDate: new Date().toLocaleString(),
  };

  // Add to reviews array
  reviews.push(review);

  return `Review successfully added! Your Review ID: ${review.id}`;
}

// Helper function to view all orders
function viewAllOrders() {
  console.log("=== All Orders ===");
  order.forEach((order) => {
    console.log(
      `ID: ${order.id}, Customer: ${order.customer}, Restaurant: ${order.restaurant}`
    );
    console.log(
      `Food: ${order.foodItem}, Price: ₹${order.finalPrice}, Status: ${order.status}`
    );
    console.log("---");
  });
}

// Helper function to view all reviews
function viewAllReviews() {
  console.log("=== All Reviews ===");
  reviews.forEach((review) => {
    console.log(
      `ID: ${review.id}, Order: ${review.orderId}, Restaurant: ${review.restaurant}`
    );
    console.log(`Rating: ${review.rating}/5, Customer: ${review.customer}`);
    console.log(`Review: ${review.review}`);
    console.log("---");
  });
}

// -------------------------------tasks 4, 5, 6, 7 End

// new tasks stat-------------------------->

// task-08, 09, 10, 11, 12, 13, 14 solved------------------------------>570, 571, 572, 573, 574, 575, 577

const userDatabase = (function () {
  const users = [];
  let processingFee = 0;
  const transactionHistory = [];

  return {
    // Task-1: Register User
    registerUser: function (name, pin) {
      // Validation
      if (!name || !pin) {
        return "Error: Name and PIN are required.";
      }

      if (typeof pin !== "number" || pin.toString().length !== 4) {
        return "Error: PIN must be a 4-digit number.";
      }

      // Check if user already exists
      const existingUser = users.find((user) => user.name === name);
      if (existingUser) {
        return "Error: User already exists.";
      }

      // Create new user
      const newUser = {
        id: users.length + 1,
        name: name,
        pin: pin,
        balance: 0,
      };

      users.push(newUser);
      return true;
    },

    // Task-2: Login User
    loginUser: function (name, pin) {
      const user = users.find((user) => user.name === name && user.pin === pin);
      return !!user; // Returns true if user exists, false otherwise
    },

    // Task-3: Add Money
    addMoney: function (name, pin, amount) {
      if (!this.loginUser(name, pin)) {
        return "Sorry, couldn't add money to account. Your money has been refunded.";
      }

      if (amount <= 0) {
        return "Error: Amount must be positive.";
      }

      const user = users.find((user) => user.name === name);
      user.balance += amount;

      // Add to transaction history
      transactionHistory.push({
        type: "deposit",
        sender: "External",
        receiver: name,
        amount: amount,
        date: new Date().toLocaleString(),
        fee: 0,
      });

      return `${amount}৳ added to ${name}'s account. Current balance: ${user.balance}৳`;
    },

    // Task-4: Check Balance
    checkBalance: function (name, pin) {
      if (!this.loginUser(name, pin)) {
        return "You don't have access to view this account balance.";
      }

      const user = users.find((user) => user.name === name);
      return user.balance;
    },

    // Task-5: Send Money
    sendMoney: function (senderName, senderPin, receiverName, amount) {
      // Validate sender
      if (!this.loginUser(senderName, senderPin)) {
        return "You don't have permission to send money.";
      }

      const sender = users.find((user) => user.name === senderName);
      const receiver = users.find((user) => user.name === receiverName);

      // Check if receiver exists
      if (!receiver) {
        return "Receiver not found.";
      }

      // Check if sender has sufficient balance (amount + processing fee)
      const totalDeduction = amount + 15;
      if (sender.balance < totalDeduction) {
        return "Insufficient balance in your account.";
      }

      if (amount <= 0) {
        return "Amount must be positive.";
      }

      // Process transaction
      sender.balance -= totalDeduction;
      receiver.balance += amount;
      processingFee += 15;

      // Add to transaction history
      transactionHistory.push({
        type: "transfer",
        sender: senderName,
        receiver: receiverName,
        amount: amount,
        date: new Date().toLocaleString(),
        fee: 15,
      });

      return `Money sent successfully! ${amount}৳ transferred to ${receiverName}. Processing fee: 15৳`;
    },

    // Task-6: Get Transaction History
    getTransactionHistory: function (name, pin) {
      if (!this.loginUser(name, pin)) {
        return "Access denied to transaction history.";
      }

      return transactionHistory.filter(
        (transaction) =>
          transaction.sender === name || transaction.receiver === name
      );
    },

    // Get Processing Fee (for admin purposes)
    getProcessingFee: function () {
      return processingFee;
    },

    // Get all users (for testing purposes)
    getAllUsers: function () {
      return users;
    },
  };
})();

// Testing the banking system
console.log("=== Testing Banking System ===\n");

// Test 1: Register Users
console.log("1. Registering Users:");
console.log(userDatabase.registerUser("Alice", 1234)); // true
console.log(userDatabase.registerUser("Bob", 5678)); // true
console.log(userDatabase.registerUser("Charlie", 9999)); // true
console.log(userDatabase.registerUser("", 1234)); // Error: Name and PIN are required
console.log(userDatabase.registerUser("Dave", 123)); // Error: PIN must be 4-digit
console.log(userDatabase.registerUser("Alice", 1111)); // Error: User already exists

console.log("\n");

// Test 2: Login Users
console.log("2. Testing Login:");
console.log(userDatabase.loginUser("Alice", 1234)); // true
console.log(userDatabase.loginUser("Alice", 9999)); // false (wrong PIN)
console.log(userDatabase.loginUser("Unknown", 1234)); // false (user doesn't exist)

console.log("\n");

// Test 3: Add Money
console.log("3. Adding Money:");
console.log(userDatabase.addMoney("Alice", 1234, 1000)); // Success
console.log(userDatabase.addMoney("Bob", 5678, 500)); // Success
console.log(userDatabase.addMoney("Alice", 9999, 200)); // Failed login
console.log(userDatabase.addMoney("Unknown", 1234, 100)); // Failed login
console.log(userDatabase.addMoney("Alice", 1234, -100)); // Error: Amount must be positive

console.log("\n");

// Test 4: Check Balance
console.log("4. Checking Balance:");
console.log(userDatabase.checkBalance("Alice", 1234)); // 1000
console.log(userDatabase.checkBalance("Bob", 5678)); // 500
console.log(userDatabase.checkBalance("Alice", 9999)); // Access denied
console.log(userDatabase.checkBalance("Unknown", 1234)); // Access denied

console.log("\n");

// Test 5: Send Money
console.log("5. Sending Money:");
console.log(userDatabase.sendMoney("Alice", 1234, "Bob", 200)); // Success
console.log(userDatabase.sendMoney("Alice", 1234, "Charlie", 300)); // Success
console.log(userDatabase.sendMoney("Alice", 9999, "Bob", 100)); // Permission denied
console.log(userDatabase.sendMoney("Alice", 1234, "Unknown", 100)); // Receiver not found
console.log(userDatabase.sendMoney("Alice", 1234, "Bob", 1000)); // Insufficient balance
console.log(userDatabase.sendMoney("Alice", 1234, "Bob", -50)); // Amount must be positive

console.log("\n");

// Test 6: Check Balances after transactions
console.log("6. Final Balances:");
console.log("Alice balance:", userDatabase.checkBalance("Alice", 1234)); // 1000 - 200 - 300 - 30 = 470
console.log("Bob balance:", userDatabase.checkBalance("Bob", 5678)); // 500 + 200 = 700
console.log("Charlie balance:", userDatabase.checkBalance("Charlie", 9999)); // 0 + 300 = 300

console.log("\n");

// Test 7: Transaction History
console.log("7. Transaction History for Alice:");
console.log(userDatabase.getTransactionHistory("Alice", 1234));

console.log("\n");

// Test 8: Processing Fee
console.log("8. Total Processing Fee Collected:");
console.log(userDatabase.getProcessingFee(), "৳"); // 15 * 2 = 30৳

console.log("\n");

// Test 9: View all users (for demonstration)
console.log("9. All Users:");
console.log(userDatabase.getAllUsers());

// new tasks end-------------------------->
