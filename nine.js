function calculator(a, b, op) {
    switch (op) {
        case "+": return a + b;
        case "-": return a - b;
        case "*": return a * b;
        case "/": return b !== 0 ? a / b : "Divide by Zero Error";
        default:  return "Invalid Operator";
    }
}
console.log("Result: " + calculator(10, 5, "*"));
