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
