// problem solved------------------------------>430
//  Function call in synchronous code
function firstFunction() {
  console.log("First function called");
}

function secondFunction() {
  console.log("Second function called");
}

firstFunction();
secondFunction();
// Output:
// "First function called"
// "Second function called"
// (executes in order)

// problem solved------------------------------>431
// JavaScript is single-threaded
// Yes, JavaScript is single-threaded but uses event loop for async operations
console.log(
  "JavaScript runs on a single thread but handles async operations through event loop"
);
