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
    displayOperator(e),
    doMath() 
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

let num1 = null;
let operator = null;
let operator2 =null;
let num2 = null;
let result = '';

function operate(x,operators,y) {
    x = Number(x);
    y = Number(y);
    console.log(`num1:${x} math:${operator} num2: ${y}`)
    if (operators === '+') {return add(x,y)}
    else if (operators === '-') { return subtract(x,y)}
    else if (operators === '*') {return multiply(x,y)}
    else if (operators === '/') {return divide(x,y)}
  };


// create a function that will display the num values
function populate(e) {
    let value = e.target.textContent;
    if (display.textContent === '0') { display.textContent = ''}
    else if (operator !== null && num2 === null) { display.textContent = ''}
    else if (num1 === result && num2 === null) { display.textContent = ''}
    return display.textContent += value;
};


// write a function that will store the number to the variables
function getValue() {
    if (operator !== null || operator2 !== null) {
        num2 = display.textContent;
        
    }
    else if (operator === null) {
        num1 = display.textContent;
        // console.log(`${num1}`)
    }
}
function displayOperator(e) {
    if (num1 !== null && num2 === null ) {
        operator = e.target.textContent
        // display.textContent = ''
    }
    else if (operator !== null && operator2 === null) {
        operator2 = e.target.textContent
    }
};

function doMath() {
    if (num1 !== null && operator !== null && num2 !== null) {
        result = operate(num1,operator,num2);
        console.log(operator);
        num1 = result;
        num2 = null;
        operator = null;
        display.textContent = num1;
        console.log(result)
    }
    else if (num1 === result && operator2 !== null && num2 !== null) {
        result = operate(num1,operator2,num2);
        num1 = result;
        operator2 = null;
        display.textContent = result;
        num2 = null;
    }
}

// write a function that will calculate the two number variables
function getResult(e) {
    if (operator !== null) {
        result = operate(num1,operator,num2);
        num1 = result;
        num2 = null;
        operator = null;
        operator2 = null;
        display.textContent = result;
    }
    else if (operator2 !== null) {
        result = operate(num1,operator2,num2);
        num1 = result;
        num2 = null;
        operator = null;
        operator2 = null;
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
    num1 = null;
    num2 = null;
    operator = null;
    operator2 = null;
    result = null;
    return display.textContent = '0';
}