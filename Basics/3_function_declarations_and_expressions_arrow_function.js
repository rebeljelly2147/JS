// function declaration and function expression

// this is a function declaration
function sayHello() {
  console.log("Hello");
}

// this is a function expression :- a function expression is a function that is assigned to a variable
// These are used in :-
// * Callback functions
// * IIFE (Immediately Invoked Function Expression)
// * Event listeners
// * setTimeout and setInterval
// * Promises
// * Closures
// * Higher-order functions
let sayGoodbye = function () {
  console.log("Goodbye");
};

// Difference between function declaration and function expression
// * Function declarations are hoisted, but function expressions are not, means you can call a function declaration before it is declared, but you cannot call a function expression before it is assigned.
// * Function expressions can be anonymous, but function declarations cannot.
// * Function expressions are used as IIFE (Immediately Invoked Function Expression).
// * Function declarations are used to define callback functions.
// * Function expressions can be passed as arguments to other functions.

// * Summary is that, Function expressions are for one-time use and Function declarations are for reusable code.

//Example 1
console.log("\nExample 1");
let num = [1, 2, 3, 4, 5];
let arr = num.map(square);
console.log(arr);
function square(value) {
  return value ** 2;
}

console.log("\nSame example using function expression");
const squares = num.map(function (element) {
  return element ** 2;
});
console.log(squares);
// See the difference between function declaration and function expression is that, function declaration is used to define a function that can be used multiple times, but function expression is used to define a function that is used only once.

// Arrow functions : Arrow functions are a more concise way to write functions. They are also called fat arrow functions.
// These are simple functions that you can only use once.
// Its syntax is :- (parameters) => {statements}
// Basically its an alternative to function expressions, but with a shorter syntax.

// Example 1
console.log("\nSame example using arrow function");
let square2 = num.map((element) => element ** 2);
console.log(square2);

// Example 2
console.log("\nExample 2");
const hello = () => console.log("Hello"); // Arrow function with no parameters can be written as () => {statements} without parentheses
hello();

// Example 3
console.log("\nExample 3");
const hello2 = (name, age) => {
  console.log(`Hello ${name}`);
  console.log(`Your age is ${age}`);
};
hello2("Abhishek", 2025 - 2003);

// Example 4
console.log("\nExample 4");
setTimeout(() => {
  console.log("Hello");
}, 3000);