// extra example ----->average
// step------>01
// function oddAverage() {}

// step------>02
/* 
function oddAverage(numbers) {
  for (const number of numbers) {
    console.log(number);
  }
}
const nums = [12, 34, 55, 6, 77, 22, 16, 19];
oddAverage(nums);
 */

// step -------------->03
/*
function oddAverage(numbers) {
  const odds = [];
  for (const number of numbers) {
    if (number % 2 === 1) {
      odds.push(number);
    }
  }
}
*/

// step----------->04
/*
function oddAverage(numbers) {
  const odds = [];
  for (const number of numbers) {
    if (number % 2 === 1) {
      odds.push(number);
    }
  }
  console.log(odds);
}
const nums = [12, 34, 55, 6, 77, 22, 16, 19];
const oddNums = oddAverage(nums);
*/

// step----------->05
/*
function oddAverage(numbers) {
  const odds = [];
  for (const number of numbers) {
    if (number % 2 === 1) {
      odds.push(number);
    }
  }
  console.log(odds);
  let sum = 0;
  for (const number of odds) {
    sum = sum + number;
  }
  console.log(sum);
}
const nums = [12, 34, 55, 6, 77, 22, 16, 19];
const oddNums = oddAverage(nums);
*/

// step ------------>06
/*
function oddAverage(numbers) {
  const odds = [];
  for (const number of numbers) {
    if (number % 2 === 1) {
      odds.push(number);
    }
  }
  let sum = 0;
  for (const number of odds) {
    sum = sum + number;
  }
  const count = odds.length;
  const avg = sum / count;
  return avg;
}
const number = [12, 33, 16, 7, 3, 9, 43];
const avg = oddAverage(number);
console.log("odd number average:", avg);
*/

// step --------------------> 07  // check array different way
/*
function oddAverage(numbers) {
  const odds = [];
  for (const number of numbers) {
    if (number % 2 === 1) {
      odds.push(number);
    }
  }
  let sum = 0;
  for (const number of odds) {
    sum = sum + number;
  }
  const count = odds.length;
  const avg = sum / count;
  return avg;
}
const number = [5];
const avg = oddAverage(number);
console.log("odd number average:", avg);
*/

// step-------------------------------->08 // array check even number // problem--->NaN
/*
function oddAverage(numbers) {
  const odds = [];
  for (const number of numbers) {
    if (number % 2 === 1) {
      odds.push(number);
    }
  }
  let sum = 0;
  for (const number of odds) {
    sum = sum + number;
  }
  const count = odds.length;
  const avg = sum / count;
  return avg;
}
const number = [12, 10, 8, 90];
const avg = oddAverage(number);
console.log("odd number average:", avg);
*/

// final step------------------>09 // NaN problem solve
function oddAverage(numbers) {
  const odds = [];
  for (const number of numbers) {
    if (number % 2 !== 0) {
      odds.push(number);
    }
  }
  if (odds.length === 0) {
    return 0;
  }
  let sum = 0;
  for (const number of odds) {
    sum = sum + number;
  }
  const count = odds.length;
  const avg = sum / count;
  return avg;
}
const number = [12, 10, 8, 9, 14, 7, 7, 90];
const avg = oddAverage(number);
console.log("odd number average:", avg);
