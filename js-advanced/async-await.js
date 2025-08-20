// problem solved------------------------------>469
// 1. Why async/await is used
// Async/await makes asynchronous code look synchronous
console.log("Async/await provides cleaner syntax for handling promises");

// problem solved------------------------------>470
// 2. Async function to fetch user
async function fetchUser() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/2"
    );
    const user = await response.json();
    console.log(user);
  } catch (error) {
    console.log("Error fetching user:", error);
  }
}

fetchUser();

// problem solved------------------------------>471
// 3. Callback hell explanation
// Callback hell: nested callbacks making code hard to read
console.log("Callback hell occurs with multiple nested async operations");
console.log("Solution: Use promises or async/await for cleaner code");

// problem solved------------------------------>472
// 4. Fetch posts with callback and async/await
// Callback style
fetch("https://jsonplaceholder.typicode.com/posts?userId=1")
  .then((response) => response.json())
  .then((posts) => console.log("Callback:", posts))
  .catch((error) => console.log(error));

// Async/await style
async function fetchPosts() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts?userId=1"
    );
    const posts = await response.json();
    console.log("Async/await:", posts);
  } catch (error) {
    console.log(error);
  }
}
fetchPosts();

// problem solved------------------------------>473
// 5. Async function to fetch comments
async function fetchComments() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/comments"
    );
    const comments = await response.json();
    console.log(comments);
  } catch (error) {
    console.log("Error:", error);
  } finally {
    console.log("Request completed!");
  }
}

fetchComments();

// problem solved------------------------------>474
// 6. Async function with dynamic user ID
async function fetchUserById(userId) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    if (!response.ok) {
      throw new Error("User not found");
    }
    const user = await response.json();
    console.log(user);
  } catch (error) {
    console.log("Error:", error.message);
  }
}

fetchUserById(1);
fetchUserById(999); // This will cause error
