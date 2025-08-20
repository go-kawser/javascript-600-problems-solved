// problem solved------------------------------>539
// do...while with items variable
let items = 31;

do {
  console.log(items); // Output: 31 (runs at least once)
  items--;
} while (items > 5);

// The loop will run 26 times (from 31 down to 6)

// problem solved------------------------------>540
// do...while with attempts variable
let attempts = 12;

do {
  console.log(attempts); // Output: 12 (runs at least once)
  attempts++;
} while (attempts < 10);

// Since attempts starts at 12, condition is false, but loop runs once

// problem solved------------------------------>541
// do...while with name concatenation
let name = "John";

do {
  console.log(name); // Output: "John", "Johnn", "Johnnn", etc.
  name += "n";
} while (name.length < 10);

console.log("Final name:", name); // Output: "Johnnnnnnn" (length 10)
