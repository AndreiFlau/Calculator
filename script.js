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
  num1 = Number(num1);
  num2 = Number(num2);
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

function calculate(num1, num2) {
  let number1 = Number(num1);
  let number2 = Number(num2);

  if (operatorVar === "+") {
    return operate("+", number1, number2);
  }

  else if (operatorVar === "-") {
    return operate("-", number1, number2);
  }
  else if (operatorVar === "*") {
    return operate("*", number1, number2);
  }
  else if (operatorVar === "/") {
    return operate("/", number1, number2);
  }
}

function appendToDisplay(symbol) {
  const numValue = symbol.textContent;
  display.textContent = "";
  symbol.addEventListener("click", () => {
    if (symbol.textContent === "X") {
      displayValue = "";
      display.textContent = "";
      num1 = "";
      num2 = "";
      operatorVar = "";
    }
    else if (symbol.textContent === "=") {
      const result = calculate(num1, num2);
      display.textContent = result;
      displayValue = result;
      num1 = `${result}`;
      num2 = "";
      operatorVar = "";
    }
    else if (operatorVar.length === 0) {
      display.textContent += numValue;
      displayValue = display.textContent;
      num1 += numValue;
    }
    else if (operatorVar.length === 1) {
      display.textContent += numValue;
      displayValue = display.textContent;
      num2 += numValue;
    }
  });
}

function appendOperator(operator) {
  const operatorSymbol = operator.textContent;
  operator.addEventListener("click", () => {
    if (operatorVar === "" && num1.length > 0) {
      display.textContent += operatorSymbol;
      displayValue += operatorSymbol;
      operatorVar = operatorSymbol;
    }
  });
}

console.log(add(5, 5));
console.log(subtract(5, 5));
console.log(multiply(5, 5));
console.log(divide(5, 5));

let displayValue = "";
let num1 = "";
let operatorVar = "";
let num2 = "";

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
const zero = document.querySelector("#zero");

const addElement = document.querySelector("#sum");
const subtractElement = document.querySelector("#subtract");
const multiplyElement = document.querySelector("#multiply");
const divideElement = document.querySelector("#divide");

const calculateElement = document.querySelector("#calculate");
const clear = document.querySelector("#clear");

appendToDisplay(number1);
appendToDisplay(number2);
appendToDisplay(number3);
appendToDisplay(number4);
appendToDisplay(number5);
appendToDisplay(number6);
appendToDisplay(number7);
appendToDisplay(number8);
appendToDisplay(number9);
appendToDisplay(zero);
appendOperator(addElement);
appendOperator(subtractElement);
appendOperator(multiplyElement);
appendOperator(divideElement);
appendToDisplay(calculateElement);
appendToDisplay(clear);

console.log(operate(operatorVar, num1, num2));