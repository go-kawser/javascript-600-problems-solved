// problem solved------------------------------>432
// setTimeout with message
setTimeout(() => {
  console.log(
    "I wasted 3 seconds of my life by looking at screen and doing nothing"
  );
}, 3000);

// problem solved------------------------------>433
// Incrementing numbers every 2 seconds
let number = 131;
const interval = setInterval(() => {
  console.log(number);
  number += 2;
}, 2000);

// To stop after some time
setTimeout(() => clearInterval(interval), 10000);

// problem solved------------------------------>434
// Message every 2 seconds, stop after 6 times
let count = 0;
const messageInterval = setInterval(() => {
  console.log("I am learning javascript");
  count++;
  if (count === 6) {
    clearInterval(messageInterval);
  }
}, 2000);

// problem solved------------------------------>435
// Default setTimeout parameter
setTimeout(() => {
  console.log("This runs immediately (after 0ms delay)");
});
// Default delay is 0 milliseconds
