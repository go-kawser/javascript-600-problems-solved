// problem solved------------------------------>505
// Hotel class with getName method
class Hotel {
  constructor(name, rooms, costPerNight) {
    this.name = name;
    this.rooms = rooms;
    this.costPerNight = costPerNight;
  }

  getName() {
    return this.name;
  }
}

const grandHotel = new Hotel("Grand Hotel", 100, 150);
console.log(grandHotel.getName()); // Output: "Grand Hotel"

// problem solved------------------------------>506
// Employee class with getSalary method
class Employee {
  constructor(name, position, salary) {
    this.name = name;
    this.position = position;
    this.salary = salary;
  }

  getSalary() {
    return this.salary;
  }
}

const emp1 = new Employee("John", "Manager", 50000);
console.log(emp1.getSalary()); // Output: 50000

// problem solved------------------------------>507
// Library class with addBook and hasBook methods
class Library {
  constructor() {
    this.books = [];
  }

  addBook(bookName) {
    this.books.push(bookName);
  }

  hasBook(bookName) {
    return this.books.includes(bookName);
  }
}

const myLibrary = new Library();
myLibrary.addBook("JavaScript Guide");
console.log(myLibrary.hasBook("JavaScript Guide")); // Output: true
console.log(myLibrary.hasBook("Python Book")); // Output: false

// problem solved------------------------------>508
// ShoppingCart class with methods
class ShoppingCart {
  constructor() {
    this.products = [];
    this.totalPrice = 0;
  }

  addToCart(productName, productPrice) {
    this.products.push(productName);
    this.totalPrice += productPrice;
  }

  getTotalPrice() {
    return this.totalPrice;
  }
}

const cart = new ShoppingCart();
cart.addToCart("Laptop", 1000);
cart.addToCart("Mouse", 25);
console.log(cart.getTotalPrice()); // Output: 1025
console.log(cart.products); // Output: ['Laptop', 'Mouse']
