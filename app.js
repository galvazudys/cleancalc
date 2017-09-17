var displayScreen = document.getElementById('display');
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
    displayScreen.textContent = '';
    actionToPerform = '';
    firstNumber = '';
    secondNumber = '';
}

function getActionGoing() {
    displayScreen.textContent = calc.operate(actionToPerform, parseFloat(secondNumber), parseFloat(firstNumber));
}