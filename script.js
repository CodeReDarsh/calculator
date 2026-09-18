"use strict";

const add = (a, b) => a + b;
const subtract = (a, b) => a - b; // subtract b from a
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b; // divide a by b

let firstOperand = 0;
let secondOperand = 0;
let operator = "+";

function operate(a, b, operator) {
  let result = 0;
  a = Number(a);
  b = Number(b);
  switch (operator) {
    case "÷":
      if (b === 0) alert("You can't divide by 0 silly! That's undefined!");
      else result = divide(a, b);
      break;

    case "×":
      result = multiply(a, b);
      break;

    case "−":
      result = subtract(a, b);
      break;

    case "+":
      result = add(a, b);
      break;

    default:
      break;
  }
  return result;
}

}

function operate(a, b, operator) {
  let result;
  if (operator in operators) result = operators[operator](a, b);
  return result;
}

function handleClick(e) {
  const val = e.target.value;
  if (val in operators) {

  }
}

const eqDisplay = document.querySelector("#equation");
const resultDisplay = document.querySelector("#operand-and-result-display");
const buttons = document.querySelector("#btns");
buttons.addEventListener("click", handleClick);
