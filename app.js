var displayScreen = document.getElementById('display');
var result = '';
var actionToPerform = '';
var firstNumber = '';
var secondNumber = '';

function passingActionOrValue(event, operatorSing) {

    if (typeof event === typeof 1) {
        firstNumber += event
        displayScreen.textContent = firstNumber;
    } else {
        secondNumber = firstNumber;
        firstNumber = '';
        displayScreen.textContent = operatorSing;
        actionToPerform = event;
    }
};

function clearResult() {
    result = '';
    displayScreen.textContent = '';
    actionToPerform = '';
    firstNumber = '';
    secondNumber = '';
}

function getActionGoing() {
    result = calc.operate(actionToPerform, parseFloat(secondNumber), parseFloat(firstNumber));
    displayScreen.textContent = result;
    firstNumber = result;
}