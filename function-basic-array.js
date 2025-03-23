// problem solved--------------------------->238
function numberEvenOrOdd(nums) {
  let num = nums.length;
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
const number = [12, 33, 444, 666, 22];
console.log(numberEvenOrOdd(number));

// problem solved--------------------------->239
function nameFirstLetterReturn(first) {
  return first[0];
}
const firstLetter = nameFirstLetterReturn("Raju");
console.log(firstLetter);

// problem solved--------------------------->240
function numberGutterOrLessThan(nm) {
  if (nm > 10) {
    return nm / 10;
  } else {
    return nm * 10;
  }
}
const gutterNumber = numberGutterOrLessThan(9);
console.log(gutterNumber);

// problem solved--------------------------->241
function rollNumber(roll) {
  return roll[0] + roll[1];
}
const allStudentRollNumber = [12, 56, 11, 44, 12, 89];
console.log(rollNumber(allStudentRollNumber));

// problem solved--------------------------->242
function positiveNegative(n) {
  if (n % 2 === 0) {
    return n * 2;
  } else {
    return n * 3;
  }
}
console.log(positiveNegative(10));
console.log(positiveNegative(11));

// problem solved--------------------------->243
function nameReturn(first, second) {
  const firstName = first.length;
  const secondName = second.length;

  if (firstName > secondName) {
    return true;
  } else {
    return false;
  }
}
const nameLength = nameReturn("kamal", "jama");
console.log(nameLength);
