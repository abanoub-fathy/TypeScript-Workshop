enum Operator {
  Add = "add",
  Subtract = "subtract",
  Multiply = "multiply",
  Divide = "divide",
  Modulo = "modulo"
}

// operation type
type Operation = (x: number, y: number) => number;

// operations array
const operations: [Operator, Operation][] = [];

// define functions for making Arthimetic operations
const add = (a: number, b: number): number => a + b;
const multiply = (a: number, b: number): number => a * b;
const subtract = (a: number, b: number): number => a - b;
const divide = (a: number, b: number): number => a / b;
const modulo = (a: number, b: number): number => a % b;

// push the functions to the operations array
operations.push(
  [Operator.Add, add],
  [Operator.Subtract, subtract],
  [Operator.Multiply, multiply],
  [Operator.Divide, divide],
  [Operator.Modulo, modulo],
);

// calculator function
const calculator = (a: number, b: number, operator: Operator): number | null => {
  const tuple = operations.find(tpl => tpl[0] === operator);
  if(!tuple) {
    return null;
  }
  const calcFunc = tuple[1];
  const result = calcFunc(a, b);
  return result;
}

// Testing
console.log(calculator(4, 6, Operator.Add));
console.log(calculator(13, 3, Operator.Subtract));
console.log(calculator(2, 5, Operator.Multiply));
console.log(calculator(70, 7, Operator.Divide));
console.log(calculator(14, 3, Operator.Modulo));





