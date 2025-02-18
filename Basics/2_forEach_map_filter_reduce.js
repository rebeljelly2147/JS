// ForEach :- is a method that executes a provided function once for each array element.
//            * The forEach() method can take three arguments: currentValue, index, and the array itself.
//            * The forEach() method does not change the original array.
//            * The forEach() method does not return anything.
//            * The forEach() method is not suitable for use with async functions.
//            * array.forEach(callback)

console.log("ForEach");

//Example 1
console.log("\nExample 1");
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
num.forEach(cube); // here cube is a callback function
function cube(value) {
  console.log(value ** 3);
}

// Map :- is a method that creates a new array with the results of calling a provided function on every element in the array.
//        * The map() method does not change the original array.
//        * The map() method returns a new array.
//        * The map() method is suitable for use with async functions.
//        * array.map(callback)

console.log("\nMap");

//Example 1
console.log("\nExample 1");
let arr = num.map(square);
console.log(arr);
function square(value) {
  return value ** 2;
}

//Example 2
console.log("\nExample 2");
const dates = ["2001-11-19", "2008-10-08", "1972-12-31"];
const formattedDates = dates.map(formatDates);
console.log(formattedDates);
function formatDates(element) {
  const parts = element.split("-");
  return `${parts[2]}/${parts[1]}/${parts[0]}`;
}

// Filter :- is a method that creates a new array with elements that pass a test.
//           * The filter() method does not change the original array.
//           * The filter() method returns a new array.
//           * The filter() method is suitable for use with async functions.
//           * array.filter(callback)

console.log("\nFilter");

//Example 1
console.log("\nExample 1");
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers.filter(isEven);
const oddNumbers = numbers.filter(isOdd);
console.log(evenNumbers);
console.log(oddNumbers);
function isEven(value) {
  return value % 2 === 0;
}
function isOdd(value) {
  return value % 2 !== 0;
}

//Example 2
console.log("\nExample 2");
const ages = [18, 20, 21, 25, 15, 14, 12, 24, 17, 19];
const adults = ages.filter(isAdult);
const children = ages.filter(isChild);
console.log(adults);
console.log(children);
function isAdult(age) {
  return age >= 18;
}
function isChild(age) {
  return age < 18;
}


//Reduce :- is a method that executes a reducer function on each element of the array, resulting in a single output value.
//          * The reduce() method does not change the original array.
//          * The reduce() method returns a single value.
//          * The reduce() method is suitable for use with async functions.
//          * array.reduce(callback)

console.log("\nReduce");

//Example 1
console.log("\nExample 1");
let prices = [100, 200, 300, 400, 500];
const total = prices.reduce(add);
console.log(`$${total.toFixed(2)}`);
function add(total, value) {
  return total + value;
}