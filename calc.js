// declare the buttons
const display = document.querySelector('.display')
const numBtn = document.querySelectorAll('.number');
const operatorBtn = document.querySelectorAll('.operator');
const acBtn = document.querySelector('.all-clear');
const delBtn = document.querySelector('.delete');
const equalsBtn = document.querySelector('.equals')
// event listener
numBtn.forEach(number => number.addEventListener('click', populate));
operatorBtn.forEach(operator => operator.addEventListener('click', displayOperator));
acBtn.addEventListener('click', displayClear);
equalsBtn.addEventListener('click', (e) => console.log(e.target))


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
function populate(e) {
    value = e.target.textContent;
    return display.textContent += value
};

function displayOperator(e) {
    value = e.target.textContent;
    return display.textContent += value
};

function displayClear(e) {
    return display.textContent = '0';
}