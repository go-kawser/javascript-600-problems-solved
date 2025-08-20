// problem solved------------------------------>375
// Check 'false' string
if ("false") {
  console.log("This is truthy");
}

// problem solved------------------------------>376
// Empty object {}
let obj = {};
if (obj) {
  console.log("Empty object is truthy");
}

// problem solved------------------------------>377
// Empty array []
let arr = [];
if (arr) {
  console.log("Empty array is truthy");
}

// problem solved------------------------------>378
// Double negation !!array
let arr2 = [1, 2, 3];
console.log(!!arr2);
