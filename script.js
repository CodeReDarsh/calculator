"use strict";

const add = (a, b) => a + b;
const subtract = (a, b) => a - b; // subtract b from a
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b; // divide a by b

let firstOperand = "0";
let secondOperand = "";
let previousOperator = "";

function operate(a, b, previousOperator) {
  let result = 0;
  a = Number(a);
  b = Number(b);
  switch (previousOperator) {
    case "/":
      if (b === 0) {
        alert(
          "You can't divide by 0 silly! That's undefined! Resetting calculator.",
        );
        result = NaN;
      } else result = divide(a, b);
      break;

    case "*":
      result = multiply(a, b);
      break;

    case "-":
      result = subtract(a, b);
      break;

    case "+":
      result = add(a, b);
      break;

    default:
      result = NaN;
      break;
  }

  if (!isNaN(result)) {
    result = String(result);
    if (result.includes(".") && result.length > 15) {
      result = Number(result).toPrecision(14);
    } else if (!result.includes(".") && result.length > 14) {
      result = String(Math.round(Number(result) / (10 * (result.length - 14))));
    }
  }

  return result;
}

function updateDisplay(operand) {
  display.textContent = operand;
}

function clearEntry() {
  secondOperand = secondOperand.substring(0, secondOperand.length - 1);
  if (secondOperand === "") {
    allClear();
    return;
  }
  updateDisplay(secondOperand);
}

function allClear() {
  firstOperand = "0";
  secondOperand = "";
  previousOperator = "";
  updateDisplay(firstOperand);
}

function withinPrecision(numString) {
  return (
    (numString.includes(".") && numString.length < 15) ||
    (!numString.includes(".") && numString.length < 14)
  );
}

let firstEquals = true;

function addDigitOrDecimal(digitOrDecimal) {
  if (previousOperator === "=") {
    if (
      digitOrDecimal === "." &&
      !firstOperand.includes(".") &&
      withinPrecision(firstOperand)
    ) {
      firstOperand += digitOrDecimal;
      firstEquals = false;
    } else if (digitOrDecimal !== ".") {
      if (!firstEquals && withinPrecision(firstOperand)) {
        firstOperand += digitOrDecimal;
      } else {
        firstOperand = digitOrDecimal;
        firstEquals = false;
      }
    }
    updateDisplay(firstOperand);
  } else if (withinPrecision(secondOperand)) {
    secondOperand += digitOrDecimal;
    updateDisplay(secondOperand);
  }
}

function handleOperator(newOperator) {
  console.log("before calc prevop:", previousOperator, "newop:", newOperator);
  if (previousOperator === "") {
    previousOperator = "+";
  }
  if (previousOperator !== "=") {
    calculate();
    firstEquals = true;
  } else {
    firstEquals = false;
  }
  previousOperator = newOperator;
  console.log("after calc prevop:", previousOperator, "newop:", newOperator);
}

function calculate() {
  if (previousOperator !== "" && secondOperand !== "") {
    let temp = operate(firstOperand, secondOperand, previousOperator);
    if (isNaN(temp)) return;
    firstOperand = temp;
    secondOperand = "";
    updateDisplay(firstOperand);
  }
}

function handleClick(e) {
  console.log(e.target.value);
  if (e.target.value === "CE") {
    clearEntry();
  } else if (e.target.value === "AC") {
    allClear();
  } else if (/^[÷×−+=]$/.test(e.target.value)) {
    handleOperator(e.target.value);
  } else if (
    (e.target.value === "." && !secondOperand.includes(".")) ||
    (e.target.value >= 0 && e.target.value <= 9)
  ) {
    addDigitOrDecimal(e.target.value);
  }
}

const display = document.querySelector("#display-container");
const buttons = document.querySelector("#btns");
buttons.addEventListener("click", handleClick);
