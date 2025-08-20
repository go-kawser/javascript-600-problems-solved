// problem solved------------------------------>401
// String to number conversion
let start = "786";
let convertedNumber = Number(start);
console.log(convertedNumber); // Output: 786 (as number)
console.log(typeof convertedNumber); // Output: "number"

// problem solved------------------------------>402
// Number to boolean conversion
let willAttend = 0;
let booleanValue = Boolean(willAttend);
console.log(booleanValue); // Output: false
console.log(typeof booleanValue); // Output: "boolean"

// problem solved------------------------------>403
// Object using constructor
function CityCountry(city, country) {
  this.city = city;
  this.country = country;
}

const location = new CityCountry("Dhaka", "Bangladesh");
console.log(location); // Output: {city: "Dhaka", country: "Bangladesh"}

// problem solved------------------------------>404
//  Number to string conversion
let total = 1970;
let stringValue = total.toString();
console.log(stringValue); // Output: "1970"
console.log(typeof stringValue); // Output: "string"
