// Boolean, True, and false
console.log(true);
console.log(false);

// Comparison operators
//< > <= >= === == !=

console.log(10 > 5); //yes
console.log(5 === "5"); //false
console.log(5 == "5"); //true
console.log(5 !== 3); //true

5 != "5"; //loosely similar
5 !== "5"; //strictly similar

// Truthy and falsy
console.log(Boolean(0)); //false
console.log(Boolean("")); //false
console.log(Boolean("hello")); //true
console.log(Boolean(null)); //false
console.log(Boolean(undefined)); //false
console.log(Boolean(NaN)); //false

//if statements

let age;
age = 22;
if (age >= 18) {
  console.log("you are able to vote");
} else {
  console.log("you're too young!");
}

//Combining conditionals and logical operators
// OR operator
let isWeekend = true;
let isHoliday = false;

if (isWeekend || isHoliday) {
  console.log("you can relax today!"); //this will be run
} else {
  console.log("it's a workday");
}

// AND operator
isWeekend = true;
isHoliday = false;

if (isWeekend && isHoliday) {
  console.log("you can relax today!");
} else {
  console.log("it's a workday"); //this will be run
}

//practice

let rain = true;
let cold = false;

if (rain && cold) {
  console.log("Bundle up and don't forget your umbrella!");
} else if (rain || cold) {
  console.log("Check the weather: it may be cold or ranining!");
} else {
  console.log("Enjoy the nice weather!");
}

//Nested if-statements
const username = "admin";
const password = "password123";

if (username === "admin") {
  if (password === "password123") {
    console.log("Access granted!");
  } else {
    console.log("Incorrect password.");
  }
} else {
  console.log("unknown user");
}

//functions
function greet(firstName, lastName) {
  console.log(`Hello, ${firstName} ${lastName}!`);
}
greet("Alice", "CodeLabs");
