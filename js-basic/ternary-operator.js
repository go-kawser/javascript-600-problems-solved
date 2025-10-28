// problem solved------------------------->122
let cashback = 0;
if (cashback >= 3000) {
  cashback = 500;
  console.log(cashback, "cashback 500 taka");
} else {
  cashback = 0;
  console.log(cashback, "no cashback");
}

//ternary operator
let = 0;
cashback =
  cashback >= 3000
    ? (console.log(500, "cashback 500 taka"), 500)
    : (console.log(0, "no cashback"), 0);

// problem solved------------------------->123
// let ageDefine = 20;
// if (ageDefine >= 15) {
//   console.log("Teenager");
// } else {
//   console.log("Child");
// }

//ternary operator
let ageDefine = 20;
let category = ageDefine >= 15 ? "Teenager" : "Child";
console.log(category);

// problem solved------------------------->124
const isLoggedIn = true;
const result = isLoggedIn === false ? "Welcome back" : "Please Login";
console.log(result);

// problem solved------------------------->125
const oilTank = true;
const full = oilTank === true ? "Ready for a long drive" : "Fill the tank";
console.log(full);

// problem solved------------------------->126
let exam = false;
let pass = exam === true ? "Party Time " : "Next semester e serious study do";
console.log(pass);

// problem solved------------------------->127
const sunny = false;
console.log("Stay Home");

// problem solved------------------------->128
const Expensive = false;
console.log("will buy ths item");
