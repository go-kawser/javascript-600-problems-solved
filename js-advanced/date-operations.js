// problem solved------------------------------>412
// Current date and time
const currentDate = new Date();
console.log(currentDate); // Output: Current date and time

// problem solved------------------------------>413
// Set specific date
const specificDate = new Date(2035, 6, 15, 14, 45, 30);
console.log(specificDate); // Output: Sun Jul 15 2035 14:45:30 GMT+0600

// problem solved------------------------------>414
// Get current year
const currentYear = new Date().getFullYear();
console.log(currentYear); // Output: 2024 (current year)

// problem solved------------------------------>415
// Set year to 2040
const date = new Date();
date.setFullYear(2040);
console.log(date.getFullYear()); // Output: 2040

// problem solved------------------------------>416
//  Get day of week for specific date
const targetDate = new Date(2029, 1, 16); // February 16, 2029
const dayOfWeek = targetDate.getDay();

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
console.log("Day number:", dayOfWeek); // Output: 5 (Friday)
console.log("Day name:", days[dayOfWeek]); // Output: "Friday"
