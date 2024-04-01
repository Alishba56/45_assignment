//Question No 31
// No Users: Ensure your user list isn’t empty.
var users = ["admin", "user1", "user2", "user3"];
if (users.length === 0) {
    console.log("We need find user");
}
else {
    users.forEach(function (use) {
        if (use === "admin") {
            console.log("Hello admin, would you like to see a status report?");
        }
        else {
            console.log("Hello ".concat(use, ", thank you for logging in again."));
        }
    });
}
//Question No 32
// Checking Usernames: Ensure uniqueness in usernames.
var currentUsers = ["user1", "admin", "user3", "user4", "user5"];
var new_users = ["User1", "User6", "user7", "admin", "User9"];
new_users.forEach(function (newUser) {
    if (currentUsers.some(function (current_user) { return current_user.toLowerCase() === newUser.toLowerCase(); })) {
        console.log("".concat(newUser, " will need to enter a new username."));
    }
    else {
        console.log("".concat(newUser, " is available."));
    }
});
//Question No 33
// Ordinal Numbers: Display numbers with their ordinal suffixes.
var num1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
num1.forEach(function (num2) {
    var suffix = "th";
    if (num2 === 1) {
        suffix = "st";
    }
    else if (num2 === 2) {
        suffix = "nd";
    }
    else if (num2 === 3) {
        suffix = "rd";
    }
    console.log("".concat(num2).concat(suffix));
});
//Question No 34
//Pizzas: Share your favorite pizzas and express your love for them.
var favPizza = ["Fajita", "Tikka", "Creamy cheese"];
favPizza.forEach(function (pizza) {
    console.log("I like ".concat(pizza, " pizza."));
});
console.log("I really love pizza!");
//Question No 35
//Animals: Highlight animals with a common trait.
var animals = ["rat", "cat", "cow"];
animals.forEach(function (animal) {
    console.log("A ".concat(animal, " would make a great pet."));
});
console.log("Any of these animals would make a great pet!");
//Question No 36
// T-Shirt: Create a function for customizing t-shirts.
function makeShirt(size, message) {
    console.log("Making a ".concat(size, " t-shirt with the message \"").concat(message, "\" printed on it."));
}
makeShirt("Small", "Code is Love");
//Question No 37
// Large Shirts: Default values in make_shirt().
function make_shirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I love TypeScript"; }
    console.log("Making a ".concat(size, " t-shirt with the message \"").concat(message, "\" printed on it."));
}
make_shirt(); // Default large and message
make_shirt("medium"); // Default message, medium size
make_shirt("small", "Dive into Coding"); // Custom message, small size
//Question No 38
// Cities: Describing cities with a function.
function describe_city(city, country) {
    if (country === void 0) { country = "Pakistan"; }
    console.log("".concat(city, " is in ").concat(country, "."));
}
describe_city("Karachi");
describe_city("Lahore");
describe_city("Tokyo", "Japan");
//Question No 39
// City Names: Formatting city-country pairs.
function city_country(city, country) {
    return "".concat(city, ", ").concat(country);
}
console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("Tokyo", "Japan"));
console.log(city_country("Paris", "France"));
function make_album(artist, title, tracks) {
    var album = { artist: artist, title: title };
    if (tracks) {
        album["tracks"] = (tracks);
    }
    return album;
}
console.log(make_album("Artist One", "The First Album"));
console.log(make_album("Artist Two", "The Second Album"));
console.log(make_album("Artist Three", "The Third Album", 12));
//Question No 41
// Magicians: Display magician names from an array.
var magicians = ["joy", "David", "lee"];
function show_magicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
show_magicians(magicians);
//Question No 42
// Great Magicians: Add "the Great" to magician names.
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " the Great";
    }
}
make_great(magicians); // Modifies the original array
show_magicians(magicians); // Shows modified names
//Question No 43
// Unchanged Magicians: Preserve the original magician names while creating a new "great" list.
var magicians1 = ["Alice", "David", "Chris"];
function make_great1(magicians1) {
    var greatMagicians1 = [];
    magicians1.forEach(function (magician) {
        greatMagicians1.push("".concat(magician, " the Great"));
    });
    return greatMagicians1;
}
var greatMagicians1 = make_great1(magicians1.slice()); // Creates a new modified array
console.log("Original magicians:");
show_magicians(magicians1); // Shows original names
console.log("Great magicians:");
show_magicians(greatMagicians1); // Shows modified names
//Question No 44
// Sandwiches: Summarize sandwich orders with varying ingredients.
function make_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Making a sandwich with: ".concat(items.join(', '), "."));
}
make_sandwich("ham", "cheese");
make_sandwich("turkey", "lettuce", "tomato");
make_sandwich("avocado", "sprouts", "mustard", "mayo");
//Question No 45
// Cars: Create detailed car objects with flexible properties.
// Its your code
function make_car(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = { manufacturer: manufacturer, model: model };
    options.forEach(function (_a) {
        var key = _a[0], value = _a[1];
        return car["key"] = value;
    });
    return car;
}
console.log(make_car("Toyota", "Corolla", ["color", "red"], ["year", 2020]));
console.log(make_car("Ford", "Fiesta", ["color", "blue"], ["sunroof", true]));
function make_car1(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = { manufacturer: manufacturer, model: model, options: options };
    options.forEach(function (_a) {
        var key = _a[0], value = _a[1];
        return car["key"] = value;
    });
    return car;
}
console.log(make_car1("Toyota", "Corolla", ["color", "red"], ["year", 2020]));
console.log(make_car1("Ford", "Fiesta", ["color", "blue"], ["sunroof", true]));
