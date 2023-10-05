let displayValue = '';
let currentInput = '';
let operator = '';
let result = 0;

const display = document.getElementById('display');

function updateDisplay() {
    display.textContent = displayValue;
}

function clear() {
    displayValue = '';
    currentInput = '';
    operator = '';
    result = 0;
    updateDisplay();
}

function handleOperator(newOperator) {
    if (currentInput !== '') {
        if (operator !== '') {
            calculate();
        } else {
            result = parseFloat(currentInput);
        }
        currentInput = '';
        if (newOperator !== '=') { 
            operator = newOperator;
            displayValue += ' ' + newOperator + ' ';
            updateDisplay();
        }
    }
}


function handleNumber(number) {
    currentInput += number;
    displayValue += number; 
    updateDisplay();
}

function calculate() {
    if (operator === '+') {
        result += parseFloat(currentInput);
    } else if (operator === '-') {
        result -= parseFloat(currentInput);
    } else if (operator === '*') {
        result *= parseFloat(currentInput);
    } else if (operator === '/') {
        result /= parseFloat(currentInput);
    }
    
    if (operator !== '') {
        displayValue = result.toString();
        updateDisplay();
    }
    
    currentInput = '';
    operator = '';
}





document.querySelectorAll('.number').forEach(button => {
    button.addEventListener('click', () => {
        handleNumber(button.textContent);
    });
});

document.querySelectorAll('.operator').forEach(button => {
    button.addEventListener('click', () => {
        handleOperator(button.textContent);
    });
});

document.getElementById('calculate').addEventListener('click', () => {
    calculate();
});

document.getElementById('clear').addEventListener('click', () => {
    clear();
});
