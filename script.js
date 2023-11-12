let displayValue = '';

function appendNumber(number) {
  displayValue += number;
  updateDisplay();
}
function appendToDisplay(value) {
    displayValue += value;
    updateDisplay();
}

function clearDisplay() {
    displayValue = '';
    updateDisplay();
}

function calculate() {
    try {
        displayValue = eval(displayValue);
        updateDisplay();
    } catch (error) {
        displayValue = 'Error';
        updateDisplay();
    }
}

function updateDisplay() {
    document.getElementById('display').value = displayValue;
}

function add() {
    appendToDisplay('+');
}

function subtract() {
    appendToDisplay('-');
}

function multiply() {
    appendToDisplay('*');
}

function divide() {
    appendToDisplay('/');
}

function squareRoot() {
    try {
        displayValue = Math.sqrt(eval(displayValue));
        updateDisplay();
    } catch (error) {
        displayValue = 'Error';
        updateDisplay();
    }
}

function power() {
    try {
        displayValue = eval(displayValue) ** 2; 
        updateDisplay();
    } catch (error) {
        displayValue = 'Error';
        updateDisplay();
    }
}
