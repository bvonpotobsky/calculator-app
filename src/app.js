import { Calculator } from "./calculator.js";

// Catch the DOM
const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const equalButton = document.querySelector("[data-equal]");
const deleteButton = document.querySelector("[data-delete]");
const clearButton = document.querySelector("[data-all-clear]");
const previousOperandContent = document.querySelector("[data-previous]");
const currentOperandContent = document.querySelector("[data-current]");

// Create new instance
const calculator = new Calculator(
  previousOperandContent,
  currentOperandContent
);

numberButtons.forEach((button) =>
  button.addEventListener("click", () => {
    calculator.appendNumber(button.innerHTML);
    calculator.updateDisplay();
  })
);

operationButtons.forEach((button) =>
  button.addEventListener("click", () => {
    calculator.chooseOperation(button.innerHTML);
    calculator.updateDisplay();
  })
);

equalButton.addEventListener("click", () => {
  calculator.compute();
  calculator.updateDisplay();
});

clearButton.addEventListener("click", () => {
  calculator.clear();
  calculator.updateDisplay();
});

deleteButton.addEventListener("click", () => {
  calculator.delete();
  calculator.updateDisplay();
});
