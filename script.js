class Calculator {
  constructor(previousOperand, currentOperand) {
    this.previousOperandTextElement = previousOperand;
    this.currentOperandTextElement = currentOperand;
    this.clear();
  }

  clear() {
    this.currentOperand = "";
    this.previousOperand = "";
    this.operation = undefined;
  }

  delete() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1);
  }

  appendNumber(number) {
    if (number === "." && this.currentOperand.includes(".")) return;
    this.currentOperand = this.currentOperand.toString() + number.toString();
  }

  chooseOperation(operation) {
    if (this.currentOperand === "") return;
    if (this.previousOperand != "") {
      this.compute();
    }
    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.currentOperand = "";
  }

  compute() {
    let result;
    const prev = parseFloat(this.previousOperand);
    const current = parseFloat(this.currentOperand);
    if (isNaN(prev) || isNaN(current)) return;
    switch (this.operation) {
      case "+":
        result = add(prev, current);
        break;
      case "-":
        result = subtract(prev, current);
        break;
      case "x":
        result = multiply(prev, current);
        break;
      case "/":
        result = divide(prev, current);
        break;
      default:
        return;
    }
    this.currentOperand = Math.round(result * 1000) / 1000;
    this.operation = undefined;
    this.previousOperand = "";
  }

  updateDisplay() {
    this.currentOperandTextElement.innerText = this.currentOperand;
    if (this.operation != null) {
      this.previousOperandTextElement.innerText = `${this.previousOperand} ${this.operation}`;
    } else {
      this.previousOperandTextElement.innerText = this.previousOperand;
    }
  }
}

// Calculation functions
const add = (a, b) => {
  return a + b;
};

const subtract = (a, b) => {
  return a - b;
};

const multiply = (a, b) => {
  return a * b;
};

const divide = (a, b) => {
  if (b == 0) {
    return "NOPE!";
  }
  return a / b;
};

const power = (a, b) => {
  return Math.pow(a, b);
};

const fractal = (a) => {
  if (a == 0) {
    return 1;
  }
  return a * fractal(a - 1);
};

const log = (a) => {
  return Math.log10(a);
};

// Calculator Logic

const numKeys = document.querySelectorAll("[data-number]");
const opKeys = document.querySelectorAll("[data-operator]");
const equalKey = document.querySelector("[data-equal]");
const clearKey = document.querySelector("[data-clear]");
const deleteKey = document.querySelector("[data-delete]");
const previousOperand = document.querySelector("[data-previous-operand]");
const currentOperand = document.querySelector("[data-current-operand]");

const calculator = new Calculator(previousOperand, currentOperand);

numKeys.forEach((numKey) => {
  numKey.addEventListener("click", () => {
    calculator.appendNumber(numKey.innerText);
    calculator.updateDisplay();
  });
});

opKeys.forEach((opKey) => {
  opKey.addEventListener("click", () => {
    calculator.chooseOperation(opKey.innerText);
    calculator.updateDisplay();
  });
});

clearKey.addEventListener("click", () => {
  calculator.clear();
  calculator.updateDisplay();
});

equalKey.addEventListener("click", (key) => {
  calculator.compute();
  calculator.updateDisplay();
});

deleteKey.addEventListener("click", (key) => {
  calculator.delete();
  calculator.updateDisplay();
});

const validOperators = ["+", "-", "*", "/"];

document.addEventListener("keydown", (e) => {
  if (!isNaN(e.key) || e.key === ".") {
    calculator.appendNumber(e.key);
  } else if (e.key === "Backspace") {
    calculator.delete();
  } else if (e.key === "=" || e.key === "Enter") {
    calculator.compute();
  } else if (validOperators.includes(e.key)) {
    if (e.key === "*") {
      calculator.chooseOperation("x");
    } else {
      calculator.chooseOperation(e.key);
    }
  }
  calculator.updateDisplay();
});
