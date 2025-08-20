// problem solved------------------------------>555
// Local vs Session Storage differences
console.log("Local Storage: Persistent, 5-10MB, same across tabs");
console.log("Session Storage: Temporary, 5MB, tab-specific, cleared on close");

// problem solved------------------------------>556
// Local Storage for dark mode preference
// Save dark mode preference
localStorage.setItem("mode", "dark");
console.log(localStorage.getItem("mode")); // Output: "dark"

// Change to light mode
localStorage.setItem("mode", "light");
console.log(localStorage.getItem("mode")); // Output: "light"

// problem solved------------------------------>557
// Session Storage for login token
// Save login token
sessionStorage.setItem("userToken", "abcd1234");

// Retrieve and log token
console.log(sessionStorage.getItem("userToken")); // Output: "abcd1234"

// problem solved------------------------------>558
// Local Storage operations
// Store user name
localStorage.setItem("userName", "Alex");
console.log(localStorage.getItem("userName")); // Output: "Alex"

// Remove user name
localStorage.removeItem("userName");
console.log(localStorage.getItem("userName")); // Output: null

// problem solved------------------------------>559
// History API for navigation
// Go back two steps in browser history
// history.go(-2); // Uncomment to actually navigate back

console.log("This would navigate back two pages in history");
