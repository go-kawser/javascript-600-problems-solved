// problem solved--------------------------->238
function numberEvenOrOdd(nums) {
  let num = nums.length;
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
const number = [12, 33, 444, 666, 22];
console.log(numberEvenOrOdd(number));
