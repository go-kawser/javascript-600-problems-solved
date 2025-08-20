// problem solved------------------------------>464
// 1. JSON.parse with error handling
try {
  const jsonData = '"Data corrupted"'; // Invalid JSON
  const parsedData = JSON.parse(jsonData);
  console.log(parsedData);
} catch (error) {
  console.log("Invalid JSON format");
}

// problem solved------------------------------>465
// 2. Email validation function
function validateInput(email) {
  if (!email.includes("@")) {
    throw new Error("Invalid email format");
  }
  return "Valid email";
}

try {
  console.log(validateInput("test@example.com"));
  console.log(validateInput("invalid-email"));
} catch (error) {
  console.log(error.message);
}

// problem solved------------------------------>466
// 3. JSON.parse with finally
try {
  const data = '{"role": "CEO", "weeklyHours": 1000}';
  const parsed = JSON.parse(data);
  console.log(parsed);
} catch (error) {
  console.log("Error parsing data");
} finally {
  console.log("Week is over");
}

// problem solved------------------------------>467
// 4. String parser function
function stringOnlyParser(input) {
  if (input === null || input === undefined || input === "") {
    throw new Error("Input must be a String.");
  }
  return input;
}

try {
  console.log(stringOnlyParser("hello"));
  console.log(stringOnlyParser(null));
} catch (error) {
  console.log(error.message);
}

// problem solved------------------------------>468
// 5. Account deletion simulation
try {
  console.log("Deleting account...");
  // Simulate potential error
  if (Math.random() > 0.5) {
    throw new Error("Deletion failed");
  }
  console.log("Account deleted successfully");
} catch (error) {
  console.log("Failed to delete account");
} finally {
  console.log("Account deletion attempt finished");
}
