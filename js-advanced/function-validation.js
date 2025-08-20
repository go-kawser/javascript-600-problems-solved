// problem solved------------------------------>424
// Function to return first character of name
function getFirstCharacter(name) {
  if (typeof name !== "string") {
    return "Input must be a string";
  }
  if (name.length === 0) {
    return "String cannot be empty";
  }
  return name.charAt(0);
}

console.log(getFirstCharacter("JavaScript")); // Output: "J"
console.log(getFirstCharacter(123)); // Output: "Input must be a string"

// problem solved------------------------------>425
// Function to get last element of array
function getLastElement(arr) {
  if (!Array.isArray(arr)) {
    return "Input must be an array";
  }
  if (arr.length === 0) {
    return "Array is empty";
  }
  return arr[arr.length - 1];
}

console.log(getLastElement([1, 2, 3, 4])); // Output: 4
console.log(getLastElement("not array")); // Output: "Input must be an array"

// problem solved------------------------------>426
// Rectangle area function with validation
function getArea(length, width) {
  if (typeof length !== "number" || typeof width !== "number") {
    return "Both length and width must be numbers";
  }
  if (length <= 0 || width <= 0) {
    return "Length and width must be positive numbers";
  }
  return length * width;
}

console.log(getArea(5, 10)); // Output: 50
console.log(getArea("5", 10)); // Output: "Both length and width must be numbers"
