// problem solved------------------------------>527
// What is closure?
// Closure: Function + its lexical environment
console.log(
  "Closure: Function remembers variables from its outer scope even after outer function returns"
);

// problem solved------------------------------>528
// Fridge tracker with closures
function fridgeTracker() {
  let count = 0;

  return function () {
    count++;
    console.log(`Fridge opened ${count} times`);
    return count;
  };
}

// Different closures for different people
const person1Fridge = fridgeTracker();
const person2Fridge = fridgeTracker();

person1Fridge(); // Output: "Fridge opened 1 times"
person1Fridge(); // Output: "Fridge opened 2 times"
person2Fridge(); // Output: "Fridge opened 1 times"

// problem solved------------------------------>529
//  Task tracker with closures
function taskTracker() {
  let completedTasks = 0;

  return {
    completeTask: function () {
      completedTasks++;
      console.log(`Tasks completed: ${completedTasks}`);
    },
    getCompletedTasks: function () {
      return completedTasks;
    },
  };
}

// Different task trackers for different people
const myTasks = taskTracker();
const friendTasks = taskTracker();

myTasks.completeTask(); // Output: "Tasks completed: 1"
myTasks.completeTask(); // Output: "Tasks completed: 2"
friendTasks.completeTask(); // Output: "Tasks completed: 1"
