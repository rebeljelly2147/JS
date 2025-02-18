// Callback function = function that is passed as an argument to another function as a parameter
// Used for :-
//             * asynchronous programming : like reading files or making HTTP requests
//             * event handling: like click events or timer events
//             * handling multiple requests : like reading files or making HTTP requests
//             * Callbacks can be synchronous and asynchronous
//             * Callbacks can be anonymous or named
//             * "Hey, once you are done, call this function that I gave you"

let greet = "Hello";
let name = "World";
let goodBye = "Goodbye";
// sayHello(sayGoodbye);

hello(world);
// world();

function hello(callback) {
  setTimeout(function () {
    console.log("Hello");
    callback();
  }, 3000);
}

function world() {
  console.log("World");
}

function sayHello(callback) {
  console.log(`${greet} ${name}`);
  callback();
}
function sayGoodbye() {
  console.log(`${goodBye} ${name}`);
}
