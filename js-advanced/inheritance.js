// problem solved------------------------------>509
// What is inheritance and why it's needed
// Inheritance allows classes to share properties and methods
console.log(
  "Inheritance: Code reuse, hierarchy, polymorphism, maintainability"
);

// problem solved------------------------------>510
//  Parent-child class relationship
// Child classes extend parent classes and inherit their properties/methods
console.log("Child extends Parent → inherits properties/methods + can add own");

// problem solved------------------------------>511
//  Vehicle inheritance example
class Vehicle {
  constructor(type, wheels, color) {
    this.type = type;
    this.wheels = wheels;
    this.color = color;
  }

  start() {
    return "Vehicle started";
  }
}

class Bus extends Vehicle {
  constructor(color, capacity) {
    super("Bus", 6, color);
    this.capacity = capacity;
  }
}

class Truck extends Vehicle {
  constructor(color, loadCapacity) {
    super("Truck", 10, color);
    this.loadCapacity = loadCapacity;
  }
}

class Bike extends Vehicle {
  constructor(color, engineCC) {
    super("Bike", 2, color);
    this.engineCC = engineCC;
  }
}

const bus = new Bus("Yellow", 50);
const truck = new Truck("Blue", "5 tons");
const bike = new Bike("Red", 150);

console.log(bus.start()); // Output: "Vehicle started" (inherited)
console.log(truck.wheels); // Output: 10 (inherited)
console.log(bike.engineCC); // Output: 150 (own property)

// problem solved------------------------------>512
// Animal inheritance hierarchy
class Animal {
  constructor(name, age, habitat) {
    this.name = name;
    this.age = age;
    this.habitat = habitat;
  }

  eat() {
    return `${this.name} is eating`;
  }
}

class Bird extends Animal {
  constructor(name, age, habitat, canFly) {
    super(name, age, habitat);
    this.canFly = canFly;
  }

  fly() {
    return this.canFly ? `${this.name} is flying` : `${this.name} cannot fly`;
  }
}

class Fish extends Animal {
  constructor(name, age, habitat, canSwim) {
    super(name, age, habitat);
    this.canSwim = canSwim;
  }

  swim() {
    return this.canSwim
      ? `${this.name} is swimming`
      : `${this.name} cannot swim`;
  }
}

const eagle = new Bird("Eagle", 5, "Mountains", true);
const goldfish = new Fish("Goldfish", 2, "Water", true);

console.log(eagle.eat()); // Output: "Eagle is eating" (inherited)
console.log(goldfish.swim()); // Output: "Goldfish is swimming" (own method)

// problem solved------------------------------>513
// Furniture inheritance
class Furniture {
  constructor(material, color, price) {
    this.material = material;
    this.color = color;
    this.price = price;
  }

  assemble() {
    return "Furniture assembled";
  }
}

class Chair extends Furniture {
  constructor(material, color, price, hasBackrest) {
    super(material, color, price);
    this.hasBackrest = hasBackrest;
  }

  sit() {
    return "Sitting on chair";
  }
}

class Table extends Furniture {
  constructor(material, color, price, shape) {
    super(material, color, price);
    this.shape = shape;
  }

  placeItems() {
    return "Items placed on table";
  }
}

const woodenChair = new Chair("Wood", "Brown", 100, true);
const roundTable = new Table("Glass", "Clear", 200, "Round");

console.log(woodenChair.assemble()); // Output: "Furniture assembled" (inherited)
console.log(roundTable.placeItems()); // Output: "Items placed on table" (own method)

// problem solved------------------------------>514
//  Pet animals inheritance
class Pet {
  constructor(name, age, owner) {
    this.name = name;
    this.age = age;
    this.owner = owner;
  }

  eat() {
    return `${this.name} is eating`;
  }
}

class Dog extends Pet {
  constructor(name, age, owner, breed) {
    super(name, age, owner);
    this.breed = breed;
  }

  bark() {
    return "Woof! Woof!";
  }
}

class Cat extends Pet {
  constructor(name, age, owner, color) {
    super(name, age, owner);
    this.color = color;
  }

  meow() {
    return "Meow!";
  }
}

class Parrot extends Pet {
  constructor(name, age, owner, canTalk) {
    super(name, age, owner);
    this.canTalk = canTalk;
  }

  speak() {
    return this.canTalk ? "Hello!" : "Squawk!";
  }
}

const dog = new Dog("Buddy", 3, "John", "Labrador");
const cat = new Cat("Whiskers", 2, "Sarah", "White");
const parrot = new Parrot("Polly", 5, "Mike", true);

console.log(dog.eat()); // Output: "Buddy is eating" (inherited)
console.log(cat.meow()); // Output: "Meow!" (own method)
console.log(parrot.speak()); // Output: "Hello!" (own method)

// problem solved------------------------------>515
// DRY Principle explanation
// DRY = Don't Repeat Yourself
console.log(
  "DRY: Write code once, reuse it. Avoid duplication for maintainability"
);
