const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const equalButton = document.querySelector("[data-equal]");
const deleteButton = document.querySelector("[data-delete]");
const allClearButton = document.querySelector("[data-all-clear]");
const previousOperandContent = document.querySelector("[data-previous]");
const currentOperandContent = document.querySelector("[data-current]");

class Calculator {
  constructor(previousOperandContent, currentOperandContent) {
    this.previousOperandContent = previousOperandContent;
    this.currentOperandContent = currentOperandContent;
  }

  clear() {}

  delete() {}

  appendNumber(number) {}

  chooseOperation(operation) {}

  compute() {}

  updateDisplay() {}
}
