// declare the buttons
const display = document.querySelector('.display')
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const allClear = document.querySelector('.all-clear');
const oneClear = document.querySelector('.delete');
const equals = document.querySelector('.equals')
// event listener
numbers.forEach(number => number.addEventListener('click', displayNum1));
operators.forEach(operator => operator.addEventListener('click', displayOperator));


// create a function of basic math operators
function add(x, y) {
    return x + y;
};

function subtract(x, y) {
    return x - y;
};

function multiply(x ,y) {
    return x * y;
};

function divide(x, y) {
    return x / y;
};

let num1 = 0;
let operator = '';
let num2 = 0;

function operate(x,operators,y) {
    if (operators === '+') {return add(x,y)}
    else if (operators === '-') { return subtract(x,y)}
    else if (operators === '*') {return multiply(x,y)}
    else if (operators === '/') {return divide(x,y)}
  };


// create a function that will display the num values
function displayNum1(e) {
    num1 = e.target.textContent;
    return display.textContent += num1
};

function displayOperator(e) {
    operator = e.target.textContent;
    return display.textContent += operator
};
