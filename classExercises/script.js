// 1. Truthy and falsy check
function checkTruthyFalsy(value) {
  if (Boolean(value) === true) {
    console.log("Truthy");
  } else {
    console.log("Falsy");
  }
}

checkTruthyFalsy(0); //falsy
checkTruthyFalsy(""); //falsy
checkTruthyFalsy("Hello"); //truthy
checkTruthyFalsy(42); //truthy
checkTruthyFalsy(null); //falsy

// 2. Age eligibility
let age = 27;
if (age >= 18) {
  console.log("You are eligible to vote!");
} else {
  console.log("You are not old enough to vote");
}

// 3. Calculate final price
let initPrice = 150;
let discoutRate = 0.2;
let taxRate = 0.08;

const discountValue = initPrice * discoutRate;
const subTotal = initPrice - discountValue;
const taxValue = subTotal * taxRate;
const finalPrice = subTotal + taxValue;

console.log(
  `Original price: $${initPrice.toFixed(
    2
  )} /n Discount: $${discountValue.toFixed(2)} /n Tax: $${taxValue.toFixed(
    2
  )} /n Final Price: $${finalPrice.toFixed(2)}`
); //That was SO satifying!

// 4. Nested if-statements for login
let username = "admin";
let password = "greatPassword123";

if (username === "admin") {
  if (password === "greatPassword123") {
    console.log("Access granted.");
  } else {
    console.log("Incorrect password.");
  }
} else {
  console.log("User unknown.");
} //CRUSHING ITT

// 5. Driving eligibility
let userAge = 18;
let hasLicense = false;

if (userAge >= 18) {
  if (hasLicense === true) {
    console.log("You can drive.");
  } else {
    console.log("You need a license to drive.");
  }
} else {
  console.log("You are not old enough to drive");
} //Crushing the troubleshooting part of it too! LET'S GOOOOO

// 6. Logical operators practice
let isWeekend = false;
let isHoliday = true;

if (isWeekend || isHoliday) {
  console.log("You can relax today!");
} else {
  console.log("It's a workday.");
}

// 7. Function: Greeting
function greet(firstName = "", lastName = "") {
  console.log(`Hello, ${firstName} ${lastName}!`);
}
greet("Aline");

// 8. Function: Square a number
function square(inputNum) {
  console.log(inputNum * inputNum);
}
square(5);
square(7);
square(10); //First try??? Heck yeah

// 9. Function with Default Parameters
function calculateDiscount(price, discountRate = 0.1) {
  console.log(
    `Discount: $${price * discountRate.toFixed(2)} /n Final Price: $${
      price - price * discountRate.toFixed(2)
    }`
  );
}

calculateDiscount(100);
calculateDiscount(200, 0.2);

// 10. Tax and Discount Calculator
function calculateFinalPrice(price, discountRate = 0.15, taxRate = 0.08) {
  const discount = price * discountRate;
  const discountedPrice = price - discount;
  const tax = discountedPrice * taxRate;
  const finalPrice = discountedPrice + tax;
  console.log(
    `Original price: $${price.toFixed(2)} /n
    Discount: $${discount.toFixed(2)} /n
    Tax: $${tax.toFixed(2)} /n
    Final Price: $${finalPrice.toFixed(2)}`
  );
}

calculateFinalPrice(100);
calculateFinalPrice(250, 0.2, 0.1);

//Done! All 10 exercises in an hour! LETS GOOOO
