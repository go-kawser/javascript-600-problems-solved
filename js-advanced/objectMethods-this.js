// problem solved------------------------------>520
// Laptop object with method sharing
// Laptop object
const laptop = {
  brand: "dell",
  getBrand: function () {
    console.log(this.brand);
  },
};

// Mobile object
const mobile = {
  brand: "samsung",
};

// Using laptop's getBrand method with mobile object
laptop.getBrand.call(mobile); // Output: 'samsung'

// problem solved------------------------------>521
// How this is determined
// 'this' is determined by how a function is called
console.log(
  "'this' changes based on: 1. Global context, 2. Object method, 3. call/apply/bind, 4. Constructor, 5. Arrow functions"
);

// problem solved------------------------------>522
// Manager object with task assignment
const manager = {
  tasks: [],
  assignWork: function (taskName) {
    // 'this' refers to the manager object when called as manager.assignWork()
    this.tasks.push(taskName);
    console.log(
      `Task "${taskName}" assigned. Total tasks: ${this.tasks.length}`
    );
  },
};

manager.assignWork("Review reports"); // Output: "Task 'Review reports' assigned. Total tasks: 1"
manager.assignWork("Prepare presentation"); // Output: "Task 'Prepare presentation' assigned. Total tasks: 2"
console.log(manager.tasks); // Output: ["Review reports", "Prepare presentation"]
