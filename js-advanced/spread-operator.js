// problem solved------------------------------>305
const technologies = ["Condition", "array", "loop"];
const newArr = ["variable", ...technologies];
console.log(newArr);

// problem solved------------------------------>306
const fruits = ["Apple", "Banana", "Mango"];
const myfruits = [...fruits, "Papaya", "Orange"];
console.log(myfruits);

// problem solved------------------------------>307
const frontEnd = ["JavaScript"];
const backEnd = ["Node.js"];
const database = ["MongoDB"];

const fullStack = [...frontEnd, ...backEnd, ...database];
console.log(fullStack);

// problem solved------------------------------>308
const website = { name: "MySite", type: "e-commerce", status: "active" };
const newWebsite = { ...website, theme: "dark" };

console.log(newWebsite);

// problem solved------------------------------>309
const young = { name: "Arif", age: 30, country: "B Baria" };
const { country, ...restYoung } = young;

console.log(restYoung);

// problem solved------------------------------>310
const car = { make: "Toyota", model: "Corolla", year: 2020 };
const updatedCar = { ...car, year: 2032 };

console.log(updatedCar);
