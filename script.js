function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function operate(operator, num1, num2) {
  if (operator === "+") {
    return add(num1, num2);
  }
  else if (operator === "-") {
    return subtract(num1, num2);
  }
  else if (operator === "*") {
    return multiply(num1, num2);
  }
  else if (operator === "/") {
    return divide(num1, num2);
  }
}

function appendToDisplay(symbol) {
  const operators = ["+", "-", "*", "/"];
  const numValue = symbol.textContent;
  display.textContent = "";
  let displayArray = displayValue.split("+");
  symbol.addEventListener("click", () => {
    if (operators.some(operator => displayValue.includes(operator))) {
      if (displayArray.length > 1) {
        if (displayValue.includes("+")) {
          let array = displayValue.split("+");
          if (array.length > 1) {
            display.textContent = operate("+", array[0], array[1]);
            displayValue = display.textContent;
          }
        }
        else if (displayValue.includes("-")) {
          let array = displayValue.split("-");
          if (array.length > 1) {
            display.textContent = operate("-", array[0], array[1]);
            displayValue = display.textContent;
          }
        }
        else if (displayValue.includes("*")) {
          let array = displayValue.split("*");
          if (array.length > 1) {
            display.textContent = operate("*", array[0], array[1]);
            displayValue = display.textContent;
          }
        }
        else if (displayValue.includes("/")) {
          let array = displayValue.split("/");
          if (array.length > 1) {
            display.textContent = operate("/", array[0], array[1]);
            displayValue = display.textContent;
          }
        }
      }
    }
    else {
      display.textContent += numValue;
      displayValue = display.textContent;
    }
  });
}

console.log(add(5, 5));
console.log(subtract(5, 5));
console.log(multiply(5, 5));
console.log(divide(5, 5));

let displayValue = "";
let num1 = 0;
let operator = "";
let num2 = 0;

const display = document.querySelector("#display");
const number1 = document.querySelector("#one");
const number2 = document.querySelector("#two");
const number3 = document.querySelector("#three");
const number4 = document.querySelector("#four");
const number5 = document.querySelector("#five");
const number6 = document.querySelector("#six");
const number7 = document.querySelector("#seven");
const number8 = document.querySelector("#eight");
const number9 = document.querySelector("#nine");

const addElement = document.querySelector("#sum");
const subtractElement = document.querySelector("#subtract");
const multiplyElement = document.querySelector("#multiply");
const divideElement = document.querySelector("#divide");

appendToDisplay(number1);
appendToDisplay(number2);
appendToDisplay(number3);
appendToDisplay(number4);
appendToDisplay(number5);
appendToDisplay(number6);
appendToDisplay(number7);
appendToDisplay(number8);
appendToDisplay(number9);
appendToDisplay(addElement);
appendToDisplay(subtractElement);
appendToDisplay(multiplyElement);
appendToDisplay(divideElement);

console.log(operate(operator, num1, num2));