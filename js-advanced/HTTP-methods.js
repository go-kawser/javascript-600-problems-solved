// problem solved------------------------------>459
// 1. PUT vs PATCH for profile data
// PATCH for partial updates, PUT for complete replacement
console.log("Use PATCH for single/married status change (partial update)");

// problem solved------------------------------>460
// 2. HTTP method for adding new information
// POST method for creating new resources
console.log("POST method is used to add new information to database");

// problem solved------------------------------>461
// 3. Video streaming operations
// GET requests for streaming video content
console.log("Video streaming uses GET requests with range headers for chunks");

// problem solved------------------------------>462
// 4. What is CRUD?
// CRUD operations: Create, Read, Update, Delete
console.log(
  "CRUD: Create (POST), Read (GET), Update (PUT/PATCH), Delete (DELETE)"
);

// problem solved------------------------------>463
// 5. HTTP methods and their purposes
const httpMethods = {
  GET: "Retrieve data",
  POST: "Create new resource",
  PUT: "Replace entire resource",
  PATCH: "Partially update resource",
  DELETE: "Remove resource",
  HEAD: "Get headers only",
  OPTIONS: "Get allowed methods",
};
console.log(httpMethods);
