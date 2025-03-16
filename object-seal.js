// problem------------------------->211
const book = {
  title: "Harry Potter",
  author: "JK Rowling",
  pages: 500,
};
Object.seal(book);
book.author = "King Khan";
console.log(book);
