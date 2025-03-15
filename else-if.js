// example
/*const price = 6500;
if (price >= 5000) {
  const discount = (price / 100) * 10;
  const pay = price - discount;
  console.log(pay);
} else {
  console.log("no discount");
}
*/

// problem------------------------->110
const buyProduct = 4500;
if (buyProduct >= 3000) {
  const discount = (buyProduct / 100) * 5;
  const pay = buyProduct - discount;
  console.log(pay);
} else if (buyProduct >= 6000) {
  const discount = (buyProduct / 100) * 15;
  const pay = buyProduct - discount;
  console.log(pay);
} else {
  console.log("No Discount");
}

// problem------------------------->111
const eatPrice = 200;
const childEat = 0;
if (eatPrice >= 100) {
  const all60YearsOldPerson = (eatPrice / 100) * 50;
  const pay = eatPrice - all60YearsOldPerson;
  console.log(pay, "All 60 years old per paying 50% discount");
} else if (childEat === 0) {
  const freePay = childEat;
  console.log(freePay, "child eat for free");
} else {
  const pay = eatPrice;
  console.log(pay);
}

// problem------------------------->112
const bankBalance = 6000;
if (bankBalance < 1000) {
  console.log("deposit");
} else if (bankBalance <= 5000) {
  console.log("bindas life");
} else {
  console.log("rich");
}

// problem------------------------->113
const studentExam = 61;
if (studentExam < 50) {
  console.log("Fail");
} else if (studentExam < 80) {
  console.log("Pass");
} else {
  console.log("A+");
}

// problem------------------------->114
const bookPage = 446;
if (bookPage < 100) {
  console.log("small book");
} else if (bookPage < 500) {
  console.log("Mid-size book");
} else {
  console.log("heart-attack size book");
}

// problem------------------------->115
const temperature = 34;
if (temperature < 0) {
  console.log("ice");
} else if (temperature < 20) {
  console.log("Cool Cool");
} else {
  console.log("Hot Hot");
}

// problem------------------------->116
const myGameApp = 56;
if (myGameApp < 10) {
  console.log("novice");
} else if (myGameApp < 50) {
  console.log("Expert");
} else {
  console.log("Pro Gammer");
}
