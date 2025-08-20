// problem solved------------------------------>485
//  Optional chaining with default value
const vehicle = { type: "car", color: "red" };
const engineInfo = vehicle?.engine ?? "Engine info missing";
console.log(engineInfo); // Output: 'Engine info missing'

// problem solved------------------------------>486
//  Optional chaining for menu access
const restaurant = { name: "Food Palace", location: "Dhaka" };
const menu = restaurant?.menu ?? "Menu not available";
console.log(menu); // Output: 'Menu not available'

// problem solved------------------------------>487
// Optional chaining for social media handle
const profile = { name: "John", social: { facebook: "john.doe" } };
const twitterHandle =
  profile?.social?.twitter ?? "Twitter handle not available";
console.log(twitterHandle); // Output: 'Twitter handle not available'
