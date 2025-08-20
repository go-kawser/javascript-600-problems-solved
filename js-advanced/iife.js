// problem solved------------------------------>550
// What is IIFE and why use it?
// IIFE: Immediately Invoked Function Expression
console.log(
  "IIFE creates private scope, avoids global pollution, runs immediately"
);

// problem solved------------------------------>551
// Basic IIFE
(function () {
  console.log("I am isolated from outer scope!");
})();
// Output: "I am isolated from outer scope!"

// problem solved------------------------------>552
// Arrow function IIFE
(() => {
  console.log("borrow from arrow");
})();
// Output: "borrow from arrow"

// problem solved------------------------------>553
// IIFE with parameter
((temperature) => {
  const celsius = temperature - 273.15;
  console.log(`${temperature}K = ${celsius.toFixed(2)}°C`);
})(300);
// Output: "300K = 26.85°C"
