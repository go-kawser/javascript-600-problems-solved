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
