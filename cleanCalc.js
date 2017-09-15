var lastResult = 0000;

function add(arg1, arg2) {
	return arg1 + arg2;
};

function subtract(arg1, arg2) {
	return arg1 - arg2;
};

function multiply(arg1, arg2) {
	return arg1 * arg2;
};

function divide(arg1, arg2) {
	return arg1 / arg2;
};


lastResult = add(2, 4);
lastResult = add(5, lastResult);
lastResult = multiply(3,2);



// -------------------  version the second  --------------------- //

lastResult = 0000;

function operateIntermediary(operation, arg1, arg2) {
	return operation(arg1, arg2);
};

lastResult = operateIntermediary(add, 2, 4);
lastResult = operateIntermediary(add, 5, lastResult);
lastResult = operateIntermediary(multiply, 3,2);


