// problem------------------------->204
const article = {
  title: "LearningJs",
  category: "Programming",
};

const keys = Object.keys(article);
const hasAuthor = keys.includes("author");
console.log(hasAuthor);

// problem------------------------->205
const profile = {
  name: "Rahim",
  age: 28,
  city: "Dhaka",
};

const profileKeys = Object.keys(profile);
const hasName = profileKeys.includes("name");
console.log(hasName);
