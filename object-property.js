// extra problem solved in object property
const profile = {
  name: "Rahim",
  age: 28,
  city: "Dhaka",
};

const profileKeys = Object.keys(profile);
const hasName = profileKeys.includes("name");
console.log(hasName);
