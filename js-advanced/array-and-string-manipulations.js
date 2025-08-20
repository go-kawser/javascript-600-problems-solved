// problem solved------------------------------>355
// Convert a string of names into an array
const friends = "Raju, Rana, Hasan, Kabir, Mahi";
const friendsArray = friends.split(", ");
console.log(friendsArray);

// problem solved------------------------------>356
// Join array into a string with dots
const friendsStr = friendsArray.join(".");
console.log(friendsStr);

// problem solved------------------------------>357
// Split string by spaces
const code = "function if else while";
const codeArray = code.split(" ");
console.log(codeArray);

// problem solved------------------------------>358
// Join array items with semicolon
const languages = ["JavaScript", "Python", "Java"];
const languagesStr = languages.join(";");
console.log(languagesStr);

// problem solved------------------------------>359
// Split string by comma and dot
const loops = "for,while,for-in.for-of.do-while";
const loopsArray = loops.split(/[,\.]/);
console.log(loopsArray);

// problem solved------------------------------>360
// Remove whitespace from start and end
const str3 = " console log debug ";
console.log(str3.trim());

// problem solved------------------------------>361
// Concatenate multiple strings
const str11 = "push";
const str22 = "pop";
const str33 = "shift";
const str44 = "unshift";
const combined = str11.concat(str22, str33, str44);
console.log(combined);

// problem solved------------------------------>362
// Extract "JavaScript" from a string
const greeting2 = "Hello JavaScript Developers";
const jsPart = greeting2.substring(6, 16);
console.log(jsPart);

// problem solved------------------------------>363
// Extract "lean" from a string
const sentence = "Code more learn more";
const part = sentence.substring(10, 14);
console.log(part);
