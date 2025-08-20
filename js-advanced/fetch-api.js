// problem solved------------------------------>454
// Why response.json() is used
// response.json() converts response stream to JavaScript object
console.log("response.json() parses JSON response body into JavaScript object");

// problem solved------------------------------>455
//  Why fetch is used
// Fetch API for making HTTP requests
console.log("Fetch is used for making network requests and handling responses");

// problem solved------------------------------>456
// Fetch vs Promise difference
// Fetch returns a promise, fetch is specific for HTTP requests
console.log("Fetch is for HTTP requests, Promise is general async operation");

// problem solved------------------------------>457
// API call to get users
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((users) => console.log(users))
  .catch((error) => console.log("Error:", error));

// problem solved------------------------------>458
//  Fetch specific user
fetch("https://jsonplaceholder.typicode.com/users/1")
  .then((response) => response.json())
  .then((user) => console.log(user))
  .catch((error) => console.log("Error:", error));
