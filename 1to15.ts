//             Question no #01

//installed Node.js typescript and VS code

//Already instaled

//Question no #02
//Personal Message: Store a person’s name in a variable and print a message to them, like “Hello Asharib, would you like to learn some TypeScript today?”

let username: string = "alishba"; //this saves the name
console.log(
  `"hello ${username} would you like to learn some typescript today?"`
); //this shows the message

//Question no #03
// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let name1: string = "alishba";
console.log(name1.toUpperCase()); //this is uppercase
console.log(name1.toLowerCase()); // this is lowercase
console.log(name1.charAt(0).toUpperCase() + name1.slice(1).toLowerCase()); //this is title case

//Question no #04
//Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:

console.log(
  `Albert Einstein once said, “A person who never made a mistake never tried anything new.”`
);

//Question no #05
// Famous Quote 2: Repeat Exercise 1, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message:

let favpersonname: string = "Albert Einstein";
let message: string = `${favpersonname} once said, “A person who never made a mistake never tried anything new.`;
console.log(message);

//Question no#06
//Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Use "\t" (tab) and "\n" (new line) at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after stripping the white spaces:

let personname: string = "\t \n alishba \t \n";
console.log(personname);
console.log(personname.trim());

//Question no #07
//Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.

console.log(2 + 6); //this is  addition
console.log(10 - 2); //this is subtraction
console.log(2 * 4); //this is  multiplication
console.log(32 / 4); //this is  division

//Question no #08
//You should create four lines that look like this:

console.log(15 + 2); //this is addition
console.log(32 - 4); //this is subtraction
console.log(5 * 5); //this is  multiplication
console.log(16 / 2); //this is  division

//Question no #09
//Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.

let num: number = 23;
let message0: string = `${num} this is my brithdate`;
console.log(message0);

//Question no #10

//alishba 2024-march-29
// This program prints a personal message.
let myName: string = "alishba";
console.log(`Hello ${myName}, would you like to learn some TypeScript today?`);

//Question no#11
//Names: Store the names of a few of your friends in an array called names. Print each person’s name by accessing each element in the list, one at a time.

let names: string[] = ["ali", "neha", "sameer"];
for (let i = 0; i < names.length; ++i) {
  console.log(names[i]);
}

//Question no#12
//Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.

let personsnames: string[] = ["komal", "mehak", "aleena"];
for (let name of personsnames) {
  console.log(`Hello ${name}, would you like to learn some TypeScript today?`);
}

//Question no #13
//Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

let transports: string[] = ["Honda motorcycle", "Tesla car", "Bianchi bicycle"];

transports.forEach((transport) => {
  console.log(`I would like to own a ${transport}.`);
});

//Question no #14
//Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

let guests: string[] = ["Neha Shahzad", "Ali Shahzad", "Sameer Shahzad"];

guests.forEach((guest) => {
  console.log(`Dear ${guest}, would you like to join me for dinner?`);
});

//Question no #15
// Changing Guest List: One of your guests can't make it to the dinner, so you need to send out a new set of invitations with a replacement guest.

let unableToAttend = "Neha Shahzad";
console.log(`${unableToAttend} can't make it to dinner.`);

// Replace the guest
let newGuest = "Abdullah Ilyas";
guests[guests.indexOf(unableToAttend)] = newGuest;

// New invitations
guests.forEach((guest) => {
  console.log(`Dear ${guest}, would you like to join me for dinner?`);
});
