// Calculation functions
const add = (a, b) => {
    return a + b;
}

const subtract = (a, b) => {
    return a - b;
}

const multiply = (a, b) => {
    return a * b;
}

const divide = (a, b) => {
    if (b == 0) {
        return "NOPE!"
    }
    return a / b;
}

const power = (a, b) => {
    return Math.pow(a, b);
}

const fractal = (a) => {
    if (a == 0) {
        return 1;
    }
    return a * fractal(a - 1);
}

const log = (a) => {
    return Math.log10(a)
}

// Calculator operation

let num1 = 0;
let num2 = 0;
let operator = "";

const operate = (a, b = 0, operator) => {
    let ans = 0;
    if (operator == "plus") {
        ans = add(a, b);
    }
    else if (operator == "minus") {
        ans = subtract(a, b);
    }
    else if (operator == "multiply") {
        ans = multiply(a, b);
    }
    else if (operator == "divide") {
        ans = divide(a, b);
    }
    else if (operator == "expo") {
        ans = power(a, b);
    }
    else if (operator == "square") {
        ans = power(a, 2);
    }
    else if (operator === "cube") {
        ans = power(a, 3);
    }
    else if (operator == "sqrt") {
        ans = power(a, 1/2)
    }
    else if (operator == "cbrt") {
        ans = power(a, 1/3)
    }
    else if (operator = "nroot") {
        ans = power(a, 1/b);
    }
    else if (operator == "log") {
        ans = log(a);
    }
    else if (operator == "antilog") {
        ans = power(10, a);
    }
    return ans;
}