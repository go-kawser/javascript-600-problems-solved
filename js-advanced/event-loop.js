// problem solved------------------------------>436
//  How event loop works
// Event loop processes call stack, then callback queue
console.log(
  "Event loop checks call stack, if empty, takes callback from queue"
);

// problem solved------------------------------>437
//  Call stack vs callback queue
// Call stack: synchronous operations
// Callback queue: async operations waiting to be processed
console.log(
  "Call stack executes immediately, callback queue waits for event loop"
);

// problem solved------------------------------>438
// Handling async in single-threaded JS
// JavaScript uses event loop to handle async operations
console.log("Single thread + event loop + callback queue = async handling");
