// problem solved------------------------------>443
// JavaScript Object vs JSON String differences
// Objects have methods, JSON is string format
console.log("Objects: methods, functions | JSON: string data format only");

// problem solved------------------------------>444
// User object with order history to JSON
const user = {
  name: "John Doe",
  email: "john@example.com",
  address: "123 Main St",
  orderHistory: [
    { product: "Laptop", price: 1200 },
    { product: "Mouse", price: 25 },
    { product: "Keyboard", price: 75 },
  ],
};

const userJSON = JSON.stringify(user);
console.log(userJSON);

// problem solved------------------------------>445
// Shopping cart to JSON
const shoppingCart = {
  products: [
    { name: "Shirt", price: 30, quantity: 2 },
    { name: "Pants", price: 50, quantity: 1 },
  ],
  totalPrice: 110,
  userDetails: {
    name: "Alice",
    id: 123,
    contact: "alice@example.com",
  },
};

const cartJSON = JSON.stringify(shoppingCart);
console.log(cartJSON);

// problem solved------------------------------>446
// Weather object to JSON
const weather = {
  city: "New York",
  temperature: 22,
  humidity: 65,
  forecast: [20, 22, 25, 23, 21, 19, 18],
};

const weatherJSON = JSON.stringify(weather);
console.log(weatherJSON);

// problem solved------------------------------>447
// Movie object conversion
const movie = {
  title: "Inception",
  releaseYear: 2010,
  actors: ["Leonardo DiCaprio", "Marion Cotillard", "Tom Hardy"],
  ratings: 8.8,
};

const movieJSON = JSON.stringify(movie);
const movieObject = JSON.parse(movieJSON);
console.log(movieObject);

// problem solved------------------------------>448
//  Project management system
const projects = [
  {
    name: "Website Redesign",
    description: "Redesign company website",
    teamMembers: ["Alice", "Bob", "Charlie"],
    deadline: "2024-12-31",
    tasks: [
      { title: "Design mockups", assignee: "Alice", status: "completed" },
      { title: "Frontend development", assignee: "Bob", status: "in progress" },
    ],
  },
];

const projectsJSON = JSON.stringify(projects);
console.log(projectsJSON);

// problem solved------------------------------>449
// Learning platform courses
const courses = [
  {
    title: "JavaScript Basics",
    instructor: "John Smith",
    duration: "4 weeks",
    lessons: [
      { name: "Variables", duration: "30min", difficulty: "beginner" },
      { name: "Functions", duration: "45min", difficulty: "beginner" },
    ],
  },
];

const coursesJSON = JSON.stringify(courses);
console.log(coursesJSON);

// problem solved------------------------------>450
//  E-commerce reviews
const review = {
  productName: "Wireless Headphones",
  reviewerDetails: {
    name: "Sarah Johnson",
    email: "sarah@example.com",
  },
  rating: 4.5,
  reviewText: "Great sound quality!",
};

const reviewJSON = JSON.stringify(review);
const reviewArray = [JSON.parse(reviewJSON)];
console.log(reviewArray);
