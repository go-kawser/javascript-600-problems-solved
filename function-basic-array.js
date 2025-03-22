// problem solved--------------------------->238
function isEvenOrOdd(num) {
  for (let num of numbers) {
    if (num % 2 === 0) {
      return num;
    }
  }
}
let numbers = [12, 44, 55, 82, 33, 0, 10, 9];
console.log(isEvenOrOdd(numbers));

// problem solved--------------------------->239
function firstLatter(str) {
  const letter = str.length;
  console.log(letter[1]);
}
firstLatter("kamal");
