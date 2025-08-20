// problem solved------------------------------>523
// Team object with bind()
const team = {
  name: "Tigers",
  players: 11,
  play: function () {
    console.log(`${this.name} team with ${this.players} players is playing`);
  },
};

const tournament = {
  name: "Champions League",
  players: 20,
};

// Using bind to set 'this' to tournament object
const tournamentPlay = team.play.bind(tournament);
tournamentPlay(); // Output: "Champions League team with 20 players is playing"

// problem solved------------------------------>524
// Car object with call()
const car = {
  speed: 120,
  price: 25000,
  drive: function () {
    console.log(`Vehicle: Speed ${this.speed} km/h, Price $${this.price}`);
  },
};

const bike = {
  speed: 60,
  price: 5000,
};

const truck = {
  speed: 80,
  price: 45000,
};

// Using call to set different 'this' contexts
car.drive.call(bike); // Output: "Vehicle: Speed 60 km/h, Price $5000"
car.drive.call(truck); // Output: "Vehicle: Speed 80 km/h, Price $45000"

// problem solved------------------------------>525
// Employee object with apply()
const employee = {
  name: "John",
  role: "Developer",
  details: function () {
    console.log(`Name: ${this.name}, Role: ${this.role}`);
  },
};

const manager = {
  name: "Sarah",
  role: "Manager",
};

employee.details(); // Output: "Name: John, Role: Developer"
employee.details.apply(manager); // Output: "Name: Sarah, Role: Manager"

// problem solved------------------------------>526
// Classroom object with bind()
const classroom = {
  name: "Class 10A",
  students: ["Alice", "Bob", "Charlie"],
  attendance: function () {
    console.log(`${this.name} attendance: ${this.students.join(", ")}`);
  },
};

const lab = {
  name: "Computer Lab",
  students: ["David", "Eva", "Frank"],
};

classroom.attendance(); // Output: "Class 10A attendance: Alice, Bob, Charlie"

// Using bind to create new function with lab as context
const labAttendance = classroom.attendance.bind(lab);
labAttendance(); // Output: "Computer Lab attendance: David, Eva, Frank"
