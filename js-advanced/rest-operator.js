// problem solved------------------------------>299
const product2 = { name: "Laptop", price: 50000, brand: "Dell" };

const { name: n, ...restProduct } = product2;
console.log(restProduct);

// problem solved------------------------------>300
const project = {
  id: 101,
  title: "Web App",
  budget: 3000,
  client: "Tech Corp",
};

const { title, ...restProject } = project;
console.log(restProject);

// problem solved------------------------------>301
const programmer = {
  name: "Sophia",
  language: "JavaScript",
  experience: 5,
  specialty: "Frontend",
  tools: "React",
};

const { language, specialty, ...details } = programmer;
console.log(language, specialty, details);

// problem solved------------------------------>302
const nums = [10, 20, 3, 30, 300, 3000];

const [, , ...restNums] = nums;
console.log(restNums);

// problem solved------------------------------>303
const sumRest = (a, b, ...rest) => rest.reduce((acc, n) => acc + n, 0);

console.log(sumRest(1, 2, 3, 4, 5));

// problem solved------------------------------>304
const avg = (...nums) => {
  const sum = nums.reduce((acc, n) => acc + n, 0);
  return sum / nums.length;
};

console.log(avg(10, 20, 30));
