// problem solved------------------------------>475
// Print address from array of objects
const data = [{ id: 1, name: "mukta", address: "mirpur" }];
console.log(data[0].address); // Output: 'mirpur'

// problem solved------------------------------>476
//  Get second book's price from library object
const library = {
  name: "city library",
  books: [
    { id: 1, title: "JavaScript Basics", price: 300 },
    { id: 2, title: "Python Essentials", price: 500 },
  ],
};
console.log(library.books[1].price); // Output: 500

// problem solved------------------------------>477
// Print first student's name from school object
const school = {
  name: "Green High",
  students: [
    { id: 1, name: "Samiha" },
    { id: 2, name: "Kamal" },
  ],
};
console.log(school.students[0].name); // Output: 'Samiha'

// problem solved------------------------------>478
// Get notebook stock from shop object
const shop = {
  items: [
    { name: "pen", stock: 100 },
    { name: "notebook", stock: 50 },
  ],
};
console.log(shop.items[1].stock); // Output: 50

// problem solved------------------------------>479
//  Print director's name from nested object
const movie = {
  title: "Inception",
  director: { name: "Nolan", age: 50 },
  rating: 8.8,
};
console.log(movie.director.name); // Output: 'Nolan'

// problem solved------------------------------>480
// Print first player's name from game object
const game = {
  name: "football",
  players: [
    { id: 1, name: "Lionel Messi" },
    { id: 2, name: "Cristiano Ronaldo" },
  ],
};
console.log(game.players[0].name); // Output: 'Lionel Messi'

// problem solved------------------------------>481
// Print brand name from nested object
const vehicle = {
  type: "car",
  features: {
    color: "red",
    brand: { name: "Toyota", model: "Corolla" },
  },
};
console.log(vehicle.features.brand.name); // Output: 'Toyota'
