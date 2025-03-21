// problem solved--------------------------->231
function numberTrueFalse(num) {
  if (num < 10) {
    return true;
  } else {
    return false;
  }
}
console.log(numberTrueFalse(5));
console.log(numberTrueFalse(15));

// problem solved--------------------------->232
function multiplyIn13(division) {
  if (division % 13 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(multiplyIn13(26));
console.log(multiplyIn13(12));

// problem solved--------------------------->233
function restaurant(rice, curry, drinks) {
  return rice + curry + drinks;
}
console.log(restaurant(20, 50, 45));

// problem solved--------------------------->234
function personAge(age) {
  if (age > 18) {
    return "Eligible for Voting";
  } else {
    return "Not Eligible";
  }
}
console.log(personAge(34));
console.log(personAge(10));

// problem solved--------------------------->235
function stringValue(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    count++;
  }
  return count++;
}

console.log(stringValue("Kawser king programming"));

// problem solved--------------------------->236
function average(a, b, c) {
  const total = a + b + c;
  return total / 3;
}
console.log(average(3, 4, 12));
