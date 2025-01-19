console.log("Welcome to JavaScript!");
Fullname = "Khairul Hasan Rakib";
console.log(Fullname);

let ages = 20;
console.log(age);

const country = "Bangladesh";
console.log(country);

const student = {
  name: "Khairul Hasan Rakib",
  age: 20,
  country: "Bangladesh",
  id: 1001,
  isGraduated: false,
};

const product = {
  name: "Laptop",
  price: 50000,
  quantity: 5,
  isAvailable: true,
};

const profile = {
  name: "Khairul Hasan Rakib",
  age: 20,
  country: "Bangladesh",
  id: 1001,
  isGraduated: false,
  product: {
    name: "Laptop",
    price: 50000,
    quantity: 5,
    isAvailable: true,
  },
};

// Comment single line
/* Comment multiple lines */

/* Operators */
// Arithmetic operators
/* +, -, *, /, %, ** */
// Comparison operators
/* ==, ===, !=, !==, >, <, >=, <= */
// Logical operators
/* &&, ||, ! */
// Assignment operators
/* =, +=, -=, *=, /=, %=, **= */
// Increment and decrement operators
/* ++, -- */
// Bitwise operators
/* &, |, ^, ~, <<, >>, >>> */

let a = 5;
let b = 5;

console.log("a = ", a, "& b = ", b);
console.log("a + b = ", a + b);
console.log("a - b = ", a - b);
console.log("a * b = ", a * b);
console.log("a / b = ", a / b);
console.log("a % b = ", a % b);
console.log("a ** b = ", a ** b);

console.log("a == b = ", a == b);
console.log("a === b = ", a === b);
console.log("a != b = ", a != b);
console.log("a !== b = ", a !== b);
console.log("a > b = ", a > b);
console.log("a < b = ", a < b);
console.log("a >= b = ", a >= b);
console.log("a <= b = ", a <= b);

console.log("a && b = ", a && b);
console.log("a || b = ", a || b);
console.log("!a = ", !a);

console.log("a += b = ", (a += b));
console.log("a -= b = ", (a -= b));
console.log("a *= b = ", (a *= b));
console.log("a /= b = ", (a /= b));
console.log("a %= b = ", (a %= b));
console.log("a **= b = ", (a **= b));

console.log("a++ = ", a++);
console.log("++a = ", ++a);
console.log("a-- = ", a--);
console.log("--a = ", --a);

console.log("a & b = ", a & b);
console.log("a | b = ", a | b);
console.log("a ^ b = ", a ^ b);
console.log("~a = ", ~a);
console.log("a << b = ", a << b);
console.log("a >> b = ", a >> b);
console.log("a >>> b = ", a >>> b);

/* Conditional statements */
let mod = "dark";
let color;

if (mod === "dark") {
  color = "black";
}
if (mod === "light") {
  color = "white";
}
console.log("Color: ", color);

let age = prompt("Enter your age: ");
console.log("Your age: ", age);

if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a child.");
}
