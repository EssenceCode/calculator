// declare the buttons
const display = document.querySelector('.display')
const numBtn = document.querySelectorAll('.number');
const operatorBtn = document.querySelectorAll('.operator');
const acBtn = document.querySelector('.all-clear');
const delBtn = document.querySelector('.delete');
const equalsBtn = document.querySelector('.equals');
delBtn.addEventListener('click', (e) => {
   let value = display.textContent.substring(1,4);
   if(num1 === result) {
     num2 = value;
   } else {
     num1 = value
   }
   return display.textContent = value;
})
// const decimal = document.querySelector('.decimal');
// event listener
numBtn.forEach(number => number.addEventListener('click', (e) => {
    populate(e),
    getValue();
}));
operatorBtn.forEach(operator => operator.addEventListener('click', (e) => {
    getOperator(e),
    doMath(e) 
}))
acBtn.addEventListener('click', allClear);
equalsBtn.addEventListener('click', getResult);


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
let operator1 = null;
let operator2 =null;
let num2 = null;
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
    if (display.textContent === '0') { 
        display.textContent = ''
    }
    else if (operator1 !== null && num2 === null) { 
        display.textContent = ''
    }
    else if (num1 === result && num2 === null) { 
        display.textContent = ''
    }
    return display.textContent += value;
};


// write a function that will store the number to the variables
function getValue() {
    if (operator1 !== null || operator2 !== null) {
        num2 = display.textContent;
        
    }
    else if (operator1 === null) {
        num1 = display.textContent;
       
    }
}
function getOperator(e) {
    if (num1 !== null && num2 === null) {
        operator1 = e.target.textContent
    }
    else if (operator1 !== null && operator2 === null) {
        operator2 = e.target.textContent
    }
    // else if (operator2 !== null && num1 === result && num2 !== null) {
    //     operator1 = e.target.textContent
    // }
};

function doMath(e) {
    if (num1 !== null && operator1 !== null && num2 !== null) {
        result = operate(num1,operator1,num2);
        num1 = Number(result.toFixed(2));
        num2 = null;
        operator1 = null;
        display.textContent = num1;
        
    }
    else if (num1 === result && operator2 !== null && num2 !== null) {
        operator1 = e.target.textContent
        result = operate(num1,operator2,num2);
        num1 = Number(result.toFixed(2));
        operator2 = null;
        num2 = null;
        display.textContent = num1;
    }
}

// write a function that will calculate the two number variables
function getResult(e) {
    if (num1 === '0' || num2 === '0' && operator1 === '/') {
       return display.textContent = 'ERROR'
   }
   
   else if (num1 === 0 && operator2 === '/') {
       return display.textContent = 'ERROR'
  }

    
    if (operator1 !== null) {
        result = operate(num1,operator1,num2)
        num1 = Number(result.toFixed(2));
        num2 = null;
        operator1 = null;
        operator2 = null;
        return display.textContent = num1;
    }
    else if (operator2 !== null) {
        result = operate(num1,operator2,num2);
        num1 = Number(result.toFixed(1));
        num2 = null;
        operator1 = null;
        operator2 = null;
        return display.textContent = num1;

    }
   
}

function allClear(e) {
    num1 = null;
    num2 = null;
    operator1 = null;
    operator2 = null;
    result = null;
    return display.textContent = '0';
}