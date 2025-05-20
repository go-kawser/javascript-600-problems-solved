// extra practice
// Inch To Feet-------------------->
// We Know 12 inch = 1 feet
function inchToFeet(inch) {
  return inch / 12;
}
console.log(inchToFeet(67));
console.log(inchToFeet(70));

// another example
/*
function inchToFeet2(inch) {
  const feetFraction = inch / 12;
  const feetNumber = parseInt(feetFraction);
  const inchRemaining = inch % 12;
  const result = feetNumber + " ft " + inchRemaining + " inch ";
  return result;
}
const friendHeight = inchToFeet2(75);
console.log(friendHeight);
*/

// this example is shortcut
function inchToFeet2(inch) {
  return parseInt(inch / 12) + " ft " + (inch % 12) + " inch";
}
console.log(inchToFeet2(75));

// another example --------> mile to kilometer
function mileToKilometer(mile) {
  const kilo = mile * 1.60934;
  return kilo;
}
console.log(mileToKilometer(10));
