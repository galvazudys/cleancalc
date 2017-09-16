var calc = {
	lastResult: 0000,
	operate: function (operation, arg1, arg2) {
		if (arg2) {
			this.lastResult = operation(arg1, arg2);
			return lastResult;
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


 function testingMethods(functionToTest,args,assume_result){
	var result = functionToTest(...args);
    return result == assume_result;
 }
 // Adding tetsing
 console.log('This is add method test returns true if pass test')
console.log(testingMethods(calc.add,[2,3],5));
console.log(testingMethods(calc.add,[5,8],13));
console.log(testingMethods(calc.add,[4,3],7));
console.log(testingMethods(calc.add,[22,3],25));
console.log(testingMethods(calc.add,[7,3],10));
console.log(testingMethods(calc.add,[2,6],8));
console.log(testingMethods(calc.add,[-2,-3],-5));
console.log(testingMethods(calc.add,[9,-3],6));


// subtracting case testing

console.log('This is subtract method test returns true if pass test')
console.log(testingMethods(calc.subtract,[2,3],-1));
console.log(testingMethods(calc.subtract,[5,8],-3));
console.log(testingMethods(calc.subtract,[4,3],1));
console.log(testingMethods(calc.subtract,[22,3],19));
console.log(testingMethods(calc.subtract,[7,3],4));
console.log(testingMethods(calc.subtract,[2,6],-4));
console.log(testingMethods(calc.subtract,[-2,-3],1));
console.log(testingMethods(calc.subtract,[9,-3],12));

// multiplycation testing

console.log('This is multiply method test returns true if pass test')
console.log(testingMethods(calc.multiply,[2,3],6));
console.log(testingMethods(calc.multiply,[5,8],40));
console.log(testingMethods(calc.multiply,[4,3],12));
console.log(testingMethods(calc.multiply,[22,3],66));
console.log(testingMethods(calc.multiply,[7,3],21));
console.log(testingMethods(calc.multiply,[2,6],12));
console.log(testingMethods(calc.multiply,[-2,-3],6));
console.log(testingMethods(calc.multiply,[9,-3],-27));

//division testing

console.log('This is divide method test returns true if pass test')
console.log(testingMethods(calc.divide,[6,3],2));
console.log(testingMethods(calc.divide,[40,8],5));
console.log(testingMethods(calc.divide,[12,3],4));
console.log(testingMethods(calc.divide,[21,3],7));
console.log(testingMethods(calc.divide,[9,3],3));
console.log(testingMethods(calc.divide,[-24,6],-4));
console.log(testingMethods(calc.divide,[-15,-3],5));
console.log(testingMethods(calc.divide,[9,-3],-3));
