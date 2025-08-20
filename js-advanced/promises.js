// problem solved------------------------------>451
//  Promise with user names
const userPromise = new Promise((resolve, reject) => {
  const hasData = true;

  if (hasData) {
    resolve(["John", "Alice", "Bob", "Sarah"]);
  } else {
    reject("No user data available");
  }
});

userPromise
  .then((users) => console.log("Users:", users))
  .catch((error) => console.log("Error:", error));

// problem solved------------------------------>452
// Payment processing promise
function processPayment(amount) {
  return new Promise((resolve, reject) => {
    if (amount > 0) {
      resolve("Payment processed successfully");
    } else {
      reject("Invalid payment amount");
    }
  });
}

processPayment(100)
  .then((message) => console.log(message))
  .catch((error) => console.log(error));

// problem solved------------------------------>453
// Send email function with promise
function sendEmail(email) {
  const validEmails = [
    "user@example.com",
    "test@gmail.com",
    "admin@company.com",
  ];

  return new Promise((resolve, reject) => {
    if (validEmails.includes(email)) {
      resolve("Email from Nigerian prince");
    } else {
      reject("Lets Dance in the spam folder");
    }
  });
}

sendEmail("test@gmail.com")
  .then((message) => console.log(message))
  .catch((error) => console.log(error));
