// problem solved------------------------------>497
// Difference between class and object
// Class is a blueprint, object is an instance of that blueprint
console.log("Class: Template | Object: Instance created from template");

// problem solved------------------------------>498
//  What is class instance
// Instance is a concrete object created from a class
console.log("Instance: Actual object created using 'new' keyword with a class");

// problem solved------------------------------>499
// Vehicle class with instances
class Vehicle {
  constructor(model, price) {
    this.model = model;
    this.price = price;
  }
}

const bmw = new Vehicle("X5", 80000);
const tesla = new Vehicle("Model 3", 40000);

console.log(bmw); // Output: Vehicle { model: 'X5', price: 80000 }
console.log(tesla); // Output: Vehicle { model: 'Model 3', price: 40000 }

// problem solved------------------------------>500
// Worker class with instance
class Worker {
  constructor(id, name, hoursWorked) {
    this.id = id;
    this.name = name;
    this.hoursWorked = hoursWorked;
  }
}

const worker1 = new Worker(101, "Tom Cruise", 40);
console.log(worker1); // Output: Worker { id: 101, name: 'Tom Cruise', hoursWorked: 40 }

// problem solved------------------------------>501
// Library class with instance check
class Library {
  constructor(name, books, location) {
    this.name = name;
    this.books = books;
    this.location = location;
  }
}

const centralLibrary = new Library("Central Library", 10000, "Dhaka");
console.log(centralLibrary instanceof Library); // Output: true

// problem solved------------------------------>502
//  Classroom class with empty students array
class Classroom {
  constructor(section, teacher) {
    this.section = section;
    this.teacher = teacher;
    this.students = [];
  }
}

const classA = new Classroom("A", "Mr. Plumber");
console.log(classA); // Output: Classroom { section: 'A', teacher: 'Mr. Plumber', students: [] }

// problem solved------------------------------>503
// Product class with instance
class Product {
  constructor(name, category, stock) {
    this.name = name;
    this.category = category;
    this.stock = stock;
  }
}

const mobile = new Product("Mobile", "Electronics", 50);
console.log(mobile); // Output: Product { name: 'Mobile', category: 'Electronics', stock: 50 }

// problem solved------------------------------>504
//  Product class with default stock value
class Product {
  constructor(name, category, stock = 0) {
    this.name = name;
    this.category = category;
    this.stock = stock;
  }
}

const mobile1 = new Product("Mobile", "Electronics", 50);
const unknownProduct = new Product("Unknown", "Miscellaneous");

console.log(mobile1); // Output: Product { name: 'Mobile', category: 'Electronics', stock: 50 }
console.log(unknownProduct); // Output: Product { name: 'Unknown', category: 'Miscellaneous', stock: 0 }
