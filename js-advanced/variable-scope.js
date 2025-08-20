// problem solved------------------------------>397
// Global tax rate calculation
const taxRate = 15; // Global variable

function calculateTax(income) {
  const taxAmount = (income * taxRate) / 100;
  return taxAmount;
}

console.log(calculateTax(50000)); // Output: 7500

// problem solved------------------------------>398
// Function-scoped variable
function secretFunction() {
  let insideSecret = "internal secret hiding place";
  console.log(insideSecret); // Works inside function
}

secretFunction(); // Output: "internal secret hiding place"
// console.log(insideSecret); // Error: insideSecret is not defined (outside scope)

// problem solved------------------------------>399
// Block-scoped variable
if (true) {
  let temperature = 25;
  console.log(temperature); // Output: 25 (works inside block)
}
// console.log(temperature); // Error: temperature is not defined (outside block)

// problem solved------------------------------>400
//  Nested function with closure
function schoolDetails() {
  let schoolName = "Sunshine High School";

  function displaySchoolName() {
    console.log(`School Name: ${schoolName}`);
  }

  return displaySchoolName;
}

const showSchool = schoolDetails();
showSchool(); // Output: "School Name: Sunshine High School"
