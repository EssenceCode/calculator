// declare the buttons
const display = document.querySelector('.display')
const numBtn = document.querySelectorAll('.number');
const operatorBtn = document.querySelectorAll('.operator');
const acBtn = document.querySelector('.all-clear');
const delBtn = document.querySelector('.delete');
const equalsBtn = document.querySelector('.equals');
const decimal = document.querySelector('.decimal');
// event listener
numBtn.forEach(number => number.addEventListener('click', (e) => {
    populate(e)
    getValue();
}));
operatorBtn.forEach(operator => operator.addEventListener('click', (e) => {
    displayOperator(e)
}))
acBtn.addEventListener('click', allClear);
equalsBtn.addEventListener('click', getResult);
decimal.addEventListener('click',populate);

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
let result = '';

function operate(x,operators,y) {
    x = Number(x);
    y = Number(y);
    if (operators === '+') {return add(x,y)}
    else if (operators === '-') { return subtract(x,y)}
    else if (operators === '*') {return multiply(x,y)}
    else if (operators === '/') {return divide(x,y)}
  };


// create a function that will display the num values
function populate(e) {
    let value = e.target.textContent;
    if (display.textContent === '0') { display.textContent = ''}
    return display.textContent += value;
};

function displayOperator(e) {
    operator = e.target.textContent;
    num1=display.textContent;
    return display.textContent = '';
};
// write a function that will store the number to the variables
function getValue() {
    if (num1 !== 'string') {
        num2 = display.textContent;
    }
    else {
        num1 = display.textContent;
    }
}
// write a function that will calculate the two number variables
function getResult(e) {
    if (operator !== 'string') {
        result = operate(num1,operator,num2);
        num1 = result;
        display.textContent = result;
    }
    if (num1 === '0' && operator === '/') {
         display.textContent = 'ERROR'
    }
    else if (num2 === '0' && operator === '/') {
         display.textContent = 'ERROR'
    }
    else if (num1 === 0 && operator === '/') {
        display.textContent = 'ERROR'
   }

}

function allClear(e) {
    num1 = 0;
    num2 = 0;
    operator = '';
    return display.textContent = '0';
}