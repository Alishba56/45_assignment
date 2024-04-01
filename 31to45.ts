//Question No 31
// No Users: Ensure your user list isn’t empty.
let users: string[] = ["admin", "user1", "user2", "user3"];

if (users.length === 0) {
  console.log("We need find user");
} else {
  users.forEach((use) => {
    if (use === "admin") {
      console.log("Hello admin, would you like to see a status report?");
    } else {
      console.log(`Hello ${use}, thank you for logging in again.`);
    }
  });
}

//Question No 32
// Checking Usernames: Ensure uniqueness in usernames.

let currentUsers: string[] = ["user1", "admin", "user3", "user4", "user5"];
let new_users: string[] = ["User1", "User6", "user7", "admin", "User9"];

new_users.forEach((newUser) => {
  if (
    currentUsers.some(
      (current_user) => current_user.toLowerCase() === newUser.toLowerCase()
    )
  ) {
    console.log(`${newUser} will need to enter a new username.`);
  } else {
    console.log(`${newUser} is available.`);
  }
});

//Question No 33
// Ordinal Numbers: Display numbers with their ordinal suffixes.

let num1: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

num1.forEach((num2) => {
  let suffix = "th";
  if (num2 === 1) {
    suffix = "st";
  } else if (num2 === 2) {
    suffix = "nd";
  } else if (num2 === 3) {
    suffix = "rd";
  }
  console.log(`${num2}${suffix}`);
});

//Question No 34
//Pizzas: Share your favorite pizzas and express your love for them.

let favPizza: string[] = ["Fajita", "Tikka", "Creamy cheese"];

favPizza.forEach((pizza) => {
  console.log(`I like ${pizza} pizza.`);
});
console.log("I really love pizza!");

//Question No 35
//Animals: Highlight animals with a common trait.

let animals: string[] = ["rat", "cat", "cow"];

animals.forEach((animal) => {
  console.log(`A ${animal} would make a great pet.`);
});
console.log("Any of these animals would make a great pet!");

//Question No 36
// T-Shirt: Create a function for customizing t-shirts.

function makeShirt(size: string, message: string) {
  console.log(
    `Making a ${size} t-shirt with the message "${message}" printed on it.`
  );
}

makeShirt("Small", "Code is Love");

//Question No 37
// Large Shirts: Default values in make_shirt().

function make_shirt(
  size: string = "large",
  message: string = "I love TypeScript"
) {
  console.log(
    `Making a ${size} t-shirt with the message "${message}" printed on it.`
  );
}

make_shirt(); // Default large and message
make_shirt("medium"); // Default message, medium size
make_shirt("small", "Dive into Coding"); // Custom message, small size

//Question No 38
// Cities: Describing cities with a function.

function describe_city(city: string, country: string = "Pakistan") {
  console.log(`${city} is in ${country}.`);
}

describe_city("Karachi");
describe_city("Lahore");
describe_city("Tokyo", "Japan");

//Question No 39
// City Names: Formatting city-country pairs.

function city_country(city: string, country: string): string {
  return `${city}, ${country}`;
}

console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("Tokyo", "Japan"));
console.log(city_country("Paris", "France"));

//Question No 40
// Album: Create objects for music albums.

interface alb {
  artist: string;
  title: string;
  tracks?: number;
}

function make_album(artist: string, title: string, tracks?: number) {
  let album: alb = { artist, title };
  if (tracks) {
    album["tracks"] = tracks;
  }
  return album;
}

console.log(make_album("Artist One", "The First Album"));
console.log(make_album("Artist Two", "The Second Album"));
console.log(make_album("Artist Three", "The Third Album", 12));

//Question No 41
// Magicians: Display magician names from an array.

let magicians: string[] = ["joy", "David", "lee"];

function show_magicians(magicians: string[]) {
  magicians.forEach((magician) => {
    console.log(magician);
  });
}

show_magicians(magicians);

//Question No 42
// Great Magicians: Add "the Great" to magician names.

function make_great(magicians: string[]) {
  for (let i = 0; i < magicians.length; i++) {
    magicians[i] = magicians[i] + " the Great";
  }
}

make_great(magicians); // Modifies the original array
show_magicians(magicians); // Shows modified names

//Question No 43
// Unchanged Magicians: Preserve the original magician names while creating a new "great" list.

let magicians1: string[] = ["Alice", "David", "Chris"];

function make_great1(magicians1: string[]): string[] {
  let greatMagicians1: string[] = [];
  magicians1.forEach((magician) => {
    greatMagicians1.push(`${magician} the Great`);
  });
  return greatMagicians1;
}

let greatMagicians1 = make_great1(magicians1.slice()); // Creates a new modified array
console.log("Original magicians:");
show_magicians(magicians1); // Shows original names
console.log("Great magicians:");
show_magicians(greatMagicians1); // Shows modified names

//Question No 44
// Sandwiches: Summarize sandwich orders with varying ingredients.

function make_sandwich(...items: string[]) {
  console.log(`Making a sandwich with: ${items.join(", ")}.`);
}

make_sandwich("ham", "cheese");
make_sandwich("turkey", "lettuce", "tomato");
make_sandwich("avocado", "sprouts", "mustard", "mayo");

//Question No 45
// Cars: Create detailed car objects with flexible properties.

// Its your code
function make_car(
  manufacturer: string,
  model: string,
  ...options: [string, any][]
): Object {
  let car: { manufacturer: string; model: string; key?: string } = {
    manufacturer,
    model,
  };
  options.forEach(([key, value]) => (car["key"] = value));
  return car;
}

console.log(make_car("Toyota", "Corolla", ["color", "red"], ["year", 2020]));
console.log(make_car("Ford", "Fiesta", ["color", "blue"], ["sunroof", true]));

//I have to try it myself
interface makingCar {
  manufacturer: string;
  model: string;
  key?: string;
  options: [string, any][];
}

function make_car1(
  manufacturer: string,
  model: string,
  ...options: [string, any][]
): Object {
  let car: makingCar = { manufacturer, model, options };
  options.forEach(([key, value]) => (car["key"] = value));
  return car;
}

console.log(make_car1("Toyota", "Corolla", ["color", "red"], ["year", 2020]));
console.log(make_car1("Ford", "Fiesta", ["color", "blue"], ["sunroof", true]));
