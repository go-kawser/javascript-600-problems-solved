// problem solved------------------------------>420
//  Remove duplicates from array
const numbersArray = [1, 2, 2, 3, 4, 4, 5];
const uniqueSet = new Set(numbersArray);
console.log(uniqueSet); // Output: Set(5) {1, 2, 3, 4, 5}

// problem solved------------------------------>421
//  Create set with values
const mySet = new Set();
mySet.add(10);
mySet.add(20);
mySet.add(10); // Duplicate, won't be added
mySet.add(30);
console.log(mySet); // Output: Set(3) {10, 20, 30}

// problem solved------------------------------>422
// Delete element from set
const numberSet = new Set([10, 20, 30]);
numberSet.delete(10);
console.log(numberSet); // Output: Set(2) {20, 30}

// problem solved------------------------------>423
// Convert array to set and back to array
const duplicateArray = [1, 2, 3, 4, 2, 1, 5, 5];
const cleanSet = new Set(duplicateArray);
const cleanArray = Array.from(cleanSet);
console.log(cleanArray); // Output: [1, 2, 3, 4, 5]
