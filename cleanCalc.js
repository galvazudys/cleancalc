var calc = {
	lastResult: 0000,
	operate: function (operation, arg1, arg2) {
		if (arg2) {
			this.lastResult = operation(arg1, arg2);
			return this.lastResult;
		} else {
			this.lastResult = operation(arg1, this.lastResult);
			return this.lastResult;
		}
	},
	add: function (arg1, arg2) {
		return arg1 + arg2;
	},
	subtract: function (arg1, arg2) {
		return arg1 - arg2;
	},
	multiply: function (arg1, arg2) {
		return arg1 * arg2;
	},
	divide: function (arg1, arg2) {
		return arg1 / arg2;
	}
};

/* ==================================
				Test
 ====================================*/


function testingMethods(objOperate,method,functionToTest, args, assume_result) {
    var output = objOperate[method](functionToTest, ...args);
    var result = (output == assume_result);
    console.log('Passed/Failed: ',result, '|| Output: ', output, ' || Expected: ', assume_result);
}
console.log('============================================')
console.log('Test,Test,Test,Test,Test,Test,Test,Test')
console.log('============================================')

// Adding tetsing
console.log('This is add method test returns true if pass test')
testingMethods(calc,'operate',calc.add, [5, 8], 13);
testingMethods(calc,'operate',calc.add, [2, 3], 5);
testingMethods(calc,'operate',calc.add, [4, 3], 7);
testingMethods(calc,'operate',calc.add, [22, 3], 25);
testingMethods(calc,'operate',calc.add, [7, 3], 10);
testingMethods(calc,'operate',calc.add, [2, 6], 8);
testingMethods(calc,'operate',calc.add, [-2, -3], -5);
testingMethods(calc,'operate',calc.add, [9, -3], 6);


// subtracting case testing

testingMethods(calc,'operate',calc.subtract, [2, 3], -1);
testingMethods(calc,'operate',calc.subtract, [5, 8], -3);
testingMethods(calc,'operate',calc.subtract, [4, 3], 1);
testingMethods(calc,'operate',calc.subtract, [22, 3], 19);
testingMethods(calc,'operate',calc.subtract, [7, 3], 4);
testingMethods(calc,'operate',calc.subtract, [2, 6], -4);
testingMethods(calc,'operate',calc.subtract, [-2, -3], 1);
testingMethods(calc,'operate',calc.subtract, [9, -3], 12);

// multiplycation testing

testingMethods(calc,'operate',calc.multiply, [2, 3], 6);
testingMethods(calc,'operate',calc.multiply, [5, 8], 40);
testingMethods(calc,'operate',calc.multiply, [4, 3], 12);
testingMethods(calc,'operate',calc.multiply, [22, 3], 66);
testingMethods(calc,'operate',calc.multiply, [7, 3], 21);
testingMethods(calc,'operate',calc.multiply, [2, 6], 12);
testingMethods(calc,'operate',calc.multiply, [-2, -3], 6);
testingMethods(calc,'operate',calc.multiply, [9, -3], -27);

//division testing

testingMethods(calc,'operate',calc.divide, [6, 3], 2);
testingMethods(calc,'operate',calc.divide, [40, 8], 5);
testingMethods(calc,'operate',calc.divide, [12, 3], 4);
testingMethods(calc,'operate',calc.divide, [21, 3], 7);
testingMethods(calc,'operate',calc.divide, [9, 3], 3);
testingMethods(calc,'operate',calc.divide, [-24, 6], -4);
testingMethods(calc,'operate',calc.divide, [-15, -3], 5);
testingMethods(calc,'operate',calc.divide, [9, -3], -3);







if(process.argv[2] && process.argv[3]){
	
	console.log('OUTPUT:', calc.operate(process.argv[2], parseInt(process.argv[3]), parseInt(process.argv[4])));
}