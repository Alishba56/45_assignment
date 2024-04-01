//Question no  #16
// More Guests: You've found a bigger dinner table, so there's room for more guests.

let guests: string[] = ["Abdullah Ilays", "Ali Shahzad", "Sameer Shahzad"];
console.log("Great news! I found a bigger dinner table!");

// Adding more guests
guests.unshift("Wahaj Ali");
guests.splice(guests.length / 2, 0, "Samiyan Ali");
guests.push("Samia Ilyas");

guests.forEach((guest) => {
  console.log(`Dear ${guest}, would you like to join me for dinner?`);
});

//Question no #17
//Shrinking Guest List: Unfortunately, your new table won’t arrive in time, and you can only invite two guests:

console.log("Unfortunately, I can only invite two people for dinner.");

while (guests.length > 2) {
  let removedGuest = guests.pop();
  console.log(`Sorry, ${removedGuest}, I can't invite you to dinner.`);
}

guests.forEach((guest) => {
  console.log(`Dear ${guest}, you're still invited to dinner.`);
});

guests.splice(0, guests.length);
console.log(guests); // Shows an empty list

//Question no #18
// Seeing the World: Think of at least five places you’d like to visit.

let placestovisit: string[] = [
  "Machu Picchu, Peru",
  "Santorini, Greece",
  "Kyoto, Japan",
  "Banff National Park, Canada",
  "The Great Barrier Reef, Australia",
];

console.log("Original order:", placestovisit);

console.log("Alphabetical order:", [...placestovisit].sort());

console.log("Original order:", placestovisit);

console.log("Reverse alphabetical order:", [...placestovisit].sort().reverse());

console.log("Original order:", placestovisit);

placestovisit.reverse();
console.log("Reversed order:", placestovisit);

placestovisit.reverse();
console.log("Original order:", placestovisit);

placestovisit.sort();
console.log("Alphabetical order:", placestovisit);

placestovisit.reverse();
console.log("Reverse alphabetical order:", placestovisit);

//Question no #19
//Dinner Guests: Use one of your programs from Exercises 14 through 18 to print a message indicating the number of people you are inviting to dinner.

let guests1: string[] = ["Abdullah Ilays", "Ali Shahzad", "Sameer Shahzad"];
console.log(`I am inviting ${guests1.length} people to dinner.`);

//Question no #20
//Think of something you could store in an array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.

let countries: string[] = [
  "Iran",
  "Saudia Arab",
  "Japan",
  "Switzerland",
  "Norway",
];
console.log("Countries I'd like to visit:", countries);

//Question No #21
// Think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

let car1: {
  title: string;
  model: number;
  color: string;
} = {
  title: "Civic",
  model: 2022,
  color: "Black",
};
console.log(
  `Car is: ${car1.title}, Model is: ${car1.model} and The color is ${car1.color}`
);

//Question no #22
// Intentional Error: Try to produce an array index error in one of your programs. Correct the error before finishing.

let arr: string[] = ["Aleena", "Jalil", "Mehak"];

console.log(arr[3]); // Its undefined because index start from 0 Like (0 1 2 3) Not(1 2 3 4)
arr[2] = "jeff";

//Question No 23
// Conditional Tests: Write a series of conditional tests. Predict the results of each test.

let bike = "Honda";
let car = "Toyota";
console.log(bike == "Honda"); //True

console.log("Honda" == bike); //True

console.log(bike == "honda"); //False

console.log(bike == "superstar"); //False

console.log(bike === "Honda"); //True

console.log("Honda" == "Honda"); //True

console.log(bike == car); //False

console.log(car == "Honda"); //False

//Question No 24
// More Conditional Tests: Expand your conditional tests to cover a wider range of comparisons.

//Equality with strings
console.log("Testing equality with strings:");
console.log("apple" == "apple"); // True
// console.log("Apple" == "Apple"); // False but its error because the types '"apple"' and '"Apple"' have no overlap.

// Using the lower case function
console.log("Testing with lower case:");
console.log("Banana".toLowerCase() == "banana"); // True

// Numerical tests
console.log("Numerical tests:");
console.log(20 > 5); // True
console.log(3 < 2); // False

// Tests using "and" and "or" operators
console.log("Tests with 'and' and 'or':");
console.log(true && false); // False
console.log(false && true); // False

// Test whether an item is in a array
let fruits = ["mango", "orange", "kiwi"];
console.log("Is 'mango' in fruits?");
console.log(fruits.includes("mango")); // True

// Test whether an item is not in a array
console.log("Is 'banana' not in fruits?");
console.log(!fruits.includes("banana")); // Its True because of this ! sign

// Question No 25
//  Alien Colors #1: Imagine an alien was just shot down in a game. Assign 'green', 'yellow', or 'red' to a variable called alien_color.

// Version that passes:

let alien_color = "green";
if (alien_color == "green") {
  console.log("You earned 10 points");
}

// Version that fails (no output):
alien_color = "red";
if (alien_color == "green") {
  console.log("You earned 10 points");
  // No output because the condition is false
}

//Question No 26
//Choose a color for an alien, then write an if-else chain.

// Version that runs the if block:
alien_color = "green";
if (alien_color == "green") {
  console.log("You earned 10 points for shooting the alien");
} else {
  console.log("You just earned 20 points.");
}

// Version that runs the else block:
alien_color = "yellow";
if (alien_color == "green") {
  console.log("You earned 10 points for shooting the alien");
} else {
  console.log("You just earned 20 points.");
}

//Question No 27
// Alien Colors #3: Convert your if-else chain to handle three colors: green, yellow, red.

// Green alien version:
alien_color = "green";
if (alien_color == "green") {
  console.log("You earned 5 points.");
} else if (alien_color == "yellow") {
  console.log("You earned 10 points.");
} else if (alien_color == "red") {
  console.log("You earned 15 points.");
}

// Yellow alien version:
alien_color = "yellow";
if (alien_color == "green") {
  console.log("You earned 5 points.");
} else if (alien_color == "yellow") {
  console.log("You earned 10 points.");
} else if (alien_color == "red") {
  console.log("You earned 15 points.");
}

// Red alien version:
alien_color = "red";
if (alien_color == "green") {
  console.log("You earned 5 points.");
} else if (alien_color == "yellow") {
  console.log("You earned 10 points.");
} else if (alien_color == "red") {
  console.log("You earned 15 points.");
}

//Question No 28
// Stages of Life: Determine a person’s life stage with an if-else chain.

let age: number = 25;

if (age < 2) {
  console.log("Your are a baby.");
} else if (age < 4) {
  console.log("Your are a toddler.");
} else if (age < 13) {
  console.log("Your are a kid.");
} else if (age < 20) {
  console.log("Your are a teenager.");
} else if (age < 65) {
  console.log("Your are an adult.");
} else {
  console.log("Your are an elder.");
}

//Question No 29
// Favorite Fruit: Create an array for your favorite fruits and check if certain fruits are included.

let favoriteFruits: string[] = [
  "apples",
  "bananas",
  "cherries",
  "mangos",
  "oranges",
];

if (favoriteFruits.includes("bananas")) {
  console.log("You really like bananas!");
}
if (favoriteFruits.includes("apples")) {
  console.log("You really like apples!");
}
if (favoriteFruits.includes("cherries")) {
  console.log("You really like cherries!");
}
if (favoriteFruits.includes("mangos")) {
  console.log("You really like mangos!");
}
if (favoriteFruits.includes("oranges")) {
  console.log("You really like oranges");
}

//Question No 30
// Hello Greet users differently, especially 'admin'.

let usernames: string[] = ["admin", "user1", "user2", "user3"];
usernames.forEach((username) => {
  if (username === "admin") {
    console.log("Hello admin, would you like to see a status report?");
  } else {
    console.log(`Hello ${username}, thank you for logging in again.`);
  }
});
