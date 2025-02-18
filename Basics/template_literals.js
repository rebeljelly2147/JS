// Template literals are a new feature in ES6 (ECMAScript 2015) that allows you to create multi-line strings with embedded expressions.
// These are enclosed by the backtick (` `) (grave accent) character instead of double or single quotes.
// These contain placeholders. These are indicated by the dollar sign and curly braces (${expression}). The expressions in the placeholders and the text between the backticks (` `) get passed to a function.
// Template literals are also called template strings.

let name = "Abhiii";
let age = 20;
// Without template literals
console.log("Hello " + name + ",\nyour age is " + age + ".");

// With template literals
console.log(`
Hello ${name},
your age is ${age}.
`);

// Template literals allow you to write multiline strings without needing to use \n for newlines.
const message = `
Hello ${name},
Your age is ${age}.
Welcome to the program!
`;
console.log(message);
