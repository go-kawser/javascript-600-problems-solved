// book 102 example incorrect
// and this example correction now
const friends = ["balam", "kalam", "salam", "gelam", "pailam"];
const index = friends.indexOf("khailam");
console.log(index);

// problem solved------------------------->148
const fruits = ["apple", "banana", "mango", "lychee"];
if (fruits.includes("mango")) {
  console.log("i have a mango");
} else {
  console.log("no mango");
}

// problem solved------------------------->149
const name = ["babul", "alif", "soton"];
const nameIndex = name.indexOf("babul");
console.log(name);
console.log(nameIndex);

// problem solved------------------------->150
const friendName = ["rimon", "rifat", "rajib"];
const forgetMyFriendName = friendName.indexOf("rifat");
console.log(forgetMyFriendName);

// problem solved------------------------->151
const cityName = ["Dhaka", "Chaittagong", "Sylhet"];
cityName.push("rajshahi");
// console.log(cityName);
const cityIndex = cityName.indexOf("RajShahi");
console.log(cityIndex);

// problem solved------------------------->152
const riverWater = ["digi", "meg", "bristi", "borsha"];
if (riverWater.includes("bristi")) {
  console.log("I need umberalla");
} else {
  console.log("No rain no pain");
}

// problem solved------------------------->153
const playGame = ["football", "cricket", "boliball"];
const oneGameHave = playGame.includes("badminton");
console.log(oneGameHave);
