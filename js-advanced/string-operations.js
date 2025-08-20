// problem solved------------------------------>417
//  Replace word in sentence
let sentence = "I bought an orange";
let newSentence = sentence.replace("orange", "mango");
console.log(newSentence); // Output: "I bought an mango"

// problem solved------------------------------>418
// Check if word exists
let text = "I like to have apple and banana";
let hasAna = text.includes("ana");
console.log(hasAna); // Output: true

// problem solved------------------------------>419
// Replace all occurrences globally
let appleText = "I am eating apple. apple is good. apple helps me a lot.";
let javascriptText = appleText.replace(/apple/g, "JavaScript");
console.log(javascriptText);
// Output: "I am eating JavaScript. JavaScript is good. JavaScript helps me a lot."
