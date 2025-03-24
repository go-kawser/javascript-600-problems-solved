// extra practice
// Inch To Feet-------------------->
// We Know 12 inch = 1 feet
function inchToFeet(inch) {
  return inch / 12;
}
console.log(inchToFeet(67));

// another example
function inchToFeet2(inch) {
  const feetFraction = inch / 12;
  const feetNumber = parseInt(feetFraction);
  const inchRemaining = inch % 12;
  const result = feetNumber + " ft " + inchRemaining + " inch ";
  return result;
}
const friendHeight = inchToFeet2(75);
console.log(friendHeight);
