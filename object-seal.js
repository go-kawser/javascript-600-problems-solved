// problem------------------------->212
const book = {
  title: "Harry Potter",
  author: "JK Rowling",
  pages: 500,
};
Object.seal(book);
book.author = "King Khan";
console.log(book);

// problem------------------------->213
const food = {
  name: "Pizza",
  price: 500,
  size: "Large",
};
Object.seal(food);
food.price = 800;
console.log(food);
