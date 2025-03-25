// problem solved------------------------------>262
function evenAverage(numbers) {
  let evens = [];
  for (const number of numbers) {
    if (number % 2 !== 1) {
      evens.push(number);
    }
  }
  if (evens.length === 0) {
    return 0;
  }
  let sum = 0;
  for (const number of evens) {
    sum += number;
  }
  const avg = sum / evens.length;
  return avg;
}
const number = [12, 6, 9];
console.log(evenAverage(number));
