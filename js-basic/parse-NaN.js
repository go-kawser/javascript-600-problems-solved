// problem------------------------->66

let numberString = "20";

let numberConvert = parseFloat(numberString);
console.log(numberConvert);
numberConvert += 10;
console.log(numberConvert);

// problem------------------------->67
const fractionNumber = 3.14159;
const integer = parseInt(fractionNumber);
console.log(integer);

// problem------------------------->68

// the output is NaN(Not a Number). this NaN is not name String to convert to number
let premikBoy = "kawser";
let numberPremikBoy = parseFloat(premikBoy);
console.log(numberPremikBoy);

// problem------------------------->69
const first = 3.456;
const second = 2.789;
const total = first + second;
console.log(total);
console.log(total.toFixed(2));

// problem------------------------->70
const a = "56.78";
const b = "12.34";
// const aNumber = parseFloat(a);
// const bNumber = parseFloat(b);
// const number = aNumber + bNumber;
// console.log(number);

//shortcut
console.log(parseFloat(a) + parseFloat(b));

// problem------------------------->71

const x = "10.5678";
const y = "5.4321";
const xy = parseFloat(x) + parseFloat(y);
const xyFixed = xy.toFixed(1);
console.log(parseFloat(xyFixed));

// problem------------------------->72
const fractionNum = "42.45689754";
const numberFraction = parseFloat(fractionNum);
console.log(parseFloat(numberFraction.toFixed(3)));
