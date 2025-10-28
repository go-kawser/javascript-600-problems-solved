// problem solved------------------------->206
const laptop = {
  brand: "Dell",
  model: "Inspiron",
  price: 4500,
};
for (const key in laptop) {
  const value = laptop[key];
  console.log(value);
}

// problem solved------------------------->207
const books = {
  book1: "Harry Potter",
  book2: "The Hobbit",
  book3: "Game of Thrones",
};

for (const key in books) {
  const value = books[key];
  console.log(value);
}

// problem solved------------------------->208
const building = {
  floors: 10,
  address: {
    street: "Main Road",
    city: "Dhaka",
  },
  type: "Commercial",
};
for (const key in building) {
  const values = building[key];
  console.log(values);
}
