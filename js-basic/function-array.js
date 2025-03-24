// problem solved--------------------------->245
function sumOddNumbers(odds) {
  let sum = 0;
  for (const odd of odds) if (odd % 2 === 1) sum += odd;
  return sum;
}
console.log(sumOddNumbers([5, 15, 8, 7]));

// problem solved---------------------------->246
function littleElementReturn(little) {
  if (little[0] < little[1]) {
    return little[0];
  } else {
    return little[1];
  }
}
console.log(littleElementReturn([12, 45]));
console.log(littleElementReturn([12, 9]));

// problem solved---------------------------->247
function ageHide(age) {
  let ageLess = 18;
  let ageGain = 45;
  if (age < 18) return ageLess;
  else if (age > 45) return ageGain;
  else {
    return age;
  }
}
console.log(ageHide(16));
console.log(ageHide(32));
console.log(ageHide(50));

// problem solved---------------------------->248
function myFriendHave(haves) {
  let sum = 0;
  for (const have of haves) {
    if (have % 4 === 0) {
      sum = sum + have;
    }
  }
  return sum;
}

const friendHave = [2, 4, 5, 7, 8, 32, 45];
console.log(myFriendHave(friendHave));

// problem solved---------------------------->249
function numberMultipleDivision(n) {
  if (n < 20) return n * n;
  else if (n > 20) return n / 20;
}
console.log(numberMultipleDivision(16));
console.log(numberMultipleDivision(34));
console.log(numberMultipleDivision(40));

// problem solved---------------------------->250
function sumOfNegativeNumber(negatives) {
  let num = 0;
  for (const negative of negatives) {
    if (negative % 2 === 1) {
      num = num + negative;
    }
  }
  return num;
}

const numbers = [12, 44, 15, 17, 7];
console.log(sumOfNegativeNumber(numbers));

// problem solved---------------------------->250
function divisionOfArrayMultiplication(divs) {
  let mul = 1;
  for (const div of divs) {
    if (div % 3 === 0) {
      mul = mul * div;
    }
  }
  return mul;
}
const numbers1 = [12, 34, 9, 1];
console.log(divisionOfArrayMultiplication(numbers1));
