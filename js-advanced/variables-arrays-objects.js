// problem solved------------------------------>367
// Variable copy vs original
let num = 15;
let copy = num;

copy = 25;

console.log("num:", num);
console.log("copy:", copy);

// problem solved------------------------------>368
// Arrays and copying
let ar = [1, 2, 3];
let copyAr = ar;

copyAr.push(48);

console.log("ar:", ar);
console.log("copyAr:", copyAr);

// problem solved------------------------------>369
// Objects and copying
let language = { name: "JS", age: 30 };
let newVersion = language;

newVersion.location = "Browser";

console.log("language:", language);
console.log("newVersion:", newVersion);
