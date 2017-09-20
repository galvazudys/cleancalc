var calc = {
	lastResult: 0000,
	operate: function (operation, arg1, arg2) {
		if (arg2) {
			this.lastResult = this[operation](arg1, arg2);
			return this.lastResult;
		} else {
			this.lastResult = this[operation](arg1, this.lastResult);
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



// if(process.argv[2] && process.argv[3]){
	
// 	console.log('OUTPUT:', calc.operate(process.argv[2], parseInt(process.argv[3]), parseInt(process.argv[4])));
// }
