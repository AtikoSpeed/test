// Create a file called calculator.js.

// 1. Write functions for basic arithmetic operations: add, subtract, multiply, and divide.
// 2. Export these functions using module.exports.
// 3. In a new file, app.js, import calculator.js and use its functions to perform some calculations.
// 4. Print the results to the console.

// +, -, *, /

// calculator.js
// app.js

function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}

module.exports = {
  add: add,
  subtract: subtract,
  multiply: multiply,
  divide: divide,
};
