"use strict";
var Operator;
(function (Operator) {
  Operator["Add"] = "add";
  Operator["Subtract"] = "subtract";
  Operator["Multiply"] = "multiply";
  Operator["Divide"] = "divide";
  Operator["Modulo"] = "modulo";
})(Operator || (Operator = {}));
// operations array
const operations = [];
// define functions for making Arthimetic operations
const add = (a, b) => a + b;
const multiply = (a, b) => a * b;
const subtract = (a, b) => a - b;
const divide = (a, b) => a / b;
const modulo = (a, b) => a % b;
// push the functions to the operations array
operations.push(
  [Operator.Add, add],
  [Operator.Subtract, subtract],
  [Operator.Multiply, multiply],
  [Operator.Divide, divide],
  [Operator.Modulo, modulo]
);
// calculator function
const calculator = (a, b, operator) => {
  const tuple = operations.find((tpl) => tpl[0] === operator);
  if (!tuple) {
    return null;
  }
  const calcFunc = tuple[1];
  const result = calcFunc(a, b);
  return result;
};
// Testing
console.log(calculator(4, 6, Operator.Add));
console.log(calculator(13, 3, Operator.Subtract));
console.log(calculator(2, 5, Operator.Multiply));
console.log(calculator(70, 7, Operator.Divide));
console.log(calculator(14, 3, Operator.Modulo));
