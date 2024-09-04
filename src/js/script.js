//DOM elements
const numberButton = document.querySelector('.number');
const operatorButton = document.querySelector('.operator');
const clearButton = document.querySelector('.clear');
const deleteButton = document.querySelector('.delete');
const showResult = document.querySelector('.result');
const previousOperand = document.querySelector('.previous-operand');
const currentOperand = document.querySelector('current-operand');
const equalsButton = document.querySelector('.equals-key');

currentOperand.textContent = '';
previousOperand.textContent = '';

//Your calculator is going to contain functions for all of the basic math operators you typically find on calculators, so start by creating functions for the following items and testing them in your browser’s console.
// add
// subtract
// multiply
// divide
function add(a, b) {
	return a + b;
};

function subtract(a, b) {
	return a - b;
};

function multipy(a, b) {
return a * b;
};

function divide(a, b) {
    return a / b;
}

//Create a new function operate that takes an operator and 2 numbers and then calls one of the above functions on the numbers.
function operate(operator, num1, num2) {
    switch (operator) {
        case "+":
            return add(num1, num2);
            break;
        case "-":
            return subtract(num1, num2);
            break;
        case "*":
            return multipy(num1, num2);
            break;
        case "/":
            return divide(num1, num2);
            break;
    }
};

//Create the functions that populate the display when you click the number buttons. You should be storing the ‘display value’ in a variable somewhere for use in the next step.

let firstNumber = '';
let storedNumber = '';
let clickedOperator = '';
let result = '';

