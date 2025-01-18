
function add(number1, number2) {
    return number1 + number2;
}

function subtract(number1, number2) {
    return number1 - number2;
}

function multiply(number1, number2) {
    return number1 * number2;
}

function divide(number1, number2) {
    return number2 !== 0 ? number1 / number2 : "Cannot divide by zero";
}


function calculate(operation) {
    const number1 = parseFloat(document.getElementById("number1").value) || 0;
    const number2 = parseFloat(document.getElementById("number2").value) || 0;
    let result;

    if (operation === "add") result = add(number1, number2);
    else if (operation === "subtract") result = subtract(number1, number2);
    else if (operation === "multiply") result = multiply(number1, number2);
    else if (operation === "divide") result = divide(number1, number2);

    document.getElementById("calculation-result").textContent = result;
}


document.getElementById("add").addEventListener("click", () => calculate("add"));
document.getElementById("subtract").addEventListener("click", () => calculate("subtract"));
document.getElementById("multiply").addEventListener("click", () => calculate("multiply"));
document.getElementById("divide").addEventListener("click", () => calculate("divide"));