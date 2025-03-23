// function step by step practice and exercise

// step-01
// --------------------------------------->
// function evenSizedString(str) {
//   console.log(str);
// }
// evenSizedString("Dhaka");

// step-02
// ----------------------------------------->
// function evenSizedString(str) {
//   let len = str.length;
//   console.log(len, str);
// }
// evenSizedString("Dhaka");

//step-03
// ------------------------------------------------>
// function evenSizedString(str) {
//   let len = str.length;
//   if (len % 2 === 0) {
//     console.log("even size");
//   } else {
//     console.log("odd size");
//   }
// }
// evenSizedString("Dhaka");

// step-04
// ---------------------------------------------->
function evenSizedString(str) {
  let len = str.length;
  if (len % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
const isEven = evenSizedString("Dhaka");
console.log(isEven);

// another example
function numberOfElement(number) {
  const len = number.length;
  return len;
}
const len = [12, 354, 66, 77, 23, 3, 6, 7];
console.log(len);

// another example
// step no---------------------------->01 // basic function declare korbo
// function sumOfNumbers() {}
// const result = sumOfNumbers();
// console.log(result);

// step no---------------------------->02 // ekta array parameter set korb and parameter pass korbo
// function sumOfNumbers(numbers) {
//   console.log(numbers);
// }
// const result = sumOfNumbers([12, 34, 55, 89]);
// console.log(result);

// step no---------------------------->03 // tarpor array er moddo loop chalabo , dekhbo protita upadan alada alada vabe pawa jai kina
// function sumOfNumbers(numbers) {
//   for (number of numbers) {
//     console.log(number);
//   }
// }
// const result = sumOfNumbers([12, 44, 56, 986]);
// console.log(result);

// step no---------------------------------->04 // sum kore shei sumke ekta jaugai store krobo
// function sumOfNumbers(numbers) {
//   let sum = 0;
//   for (number of numbers) {
//     sum = sum + number;
//     console.log(sum);
//   }
// }
// const result = sumOfNumbers([123, 33, 55, 8, 99]);
// console.log(result);

// step no--------------05 //

function sumOfNumbers(numbers) {
  let sum = 0;
  for (const number of numbers) {
    sum = sum + number;
  }
  return sum;
}
const result = sumOfNumbers([12, 12, 10, 55, 98, 22]);
console.log(result);

// new another example even number plus, i do it...........
function sumOfEvenNumber(numbers) {
  let sumEven = 0;
  for (const number of numbers) {
    if (number % 2 === 0) sumEven = sumEven + number;
  }
  return sumEven;
}
const evenResult = sumOfEvenNumber([12, 10, 3, 77, 32, 99]);
console.log(evenResult);
