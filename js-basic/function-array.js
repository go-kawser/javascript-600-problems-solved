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
