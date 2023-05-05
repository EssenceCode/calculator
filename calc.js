// declare the buttons
const display = document.querySelector('.display')
const numBtn = document.querySelectorAll('.number');
const operatorBtn = document.querySelectorAll('.operator');
const acBtn = document.querySelector('.all-clear');
const delBtn = document.querySelector('.delete');
const equalsBtn = document.querySelector('.equals')
// event listener
numBtn.forEach(number => number.addEventListener('click', (e) => {
    populate(e)
    getValue();
}));
operatorBtn.forEach(operator => operator.addEventListener('click', (e) => {
    displayOperator(e)
}))
acBtn.addEventListener('click', allClear);
equalsBtn.addEventListener('click', getResult)


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
    return display.textContent += value;
};

function displayOperator(e) {
    operator = e.target.textContent;
    num1=display.textContent;
    display.textContent = '';
    // console.log(e.target);
    console.log(`NUMBERONE:${num1}`);
    // return display.textContent += operator
};

function getValue() {
    if (num1 !== 'string') {
        num2 = display.textContent;
    }
    else {
        num1 = display.textContent;
    }
}

function getResult(e) {
    if (num1 !== 'string') {
        // display.textContent = ''
        num2 = display.textContent;
        console.log(`NUMBERTWO:${num2}`);
        result = operate(num1,operator,num2);
        console.log(result);
        display.textContent = result;
    }
}

function allClear(e) {
    num1 = 0;
    num2 = 0;
    operator = '';
    return display.textContent = '0';
}