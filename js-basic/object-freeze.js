// problem------------------------->209
const headphone = {
  brand: "Sony",
  price: 3000,
  color: "red",
};
Object.freeze(headphone);
// added modify the oject
headphone.country = "USA";
console.log(headphone);

// problem------------------------->210
const player = {
  name: "Messi",
  goals: 800,
  club: "Inter Miami",
};
Object.freeze(player);
player.friend = "naymer";
console.log(player);

// problem------------------------->211
const animals = {
  name: "Tiger",
  location: "Sundarban",
};
Object.freeze(animals);
animals.location = "Bandorbon";
console.log(animals);
