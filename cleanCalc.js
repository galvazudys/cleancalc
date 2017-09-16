var calc = {
	lastResult: 0000,
	operate:function(operation,arg1,arg2){
		if (arg2) {
			this.lastResult = operation(arg1, arg2);
			return lastResult;
		} else {
			this.lastResult = operation(arg1, this.lastResult);
			return this.lastResult;
		}
	},
	add:function(arg1,arg2){
		return arg1 + arg2;
	},
	subtract: function(arg1,arg2){
		return arg1 - arg2;
	},
	multiply: function(arg1,arg2){
		return arg1 * arg2;
	},
	divide:function(arg1,arg2){
		return arg1 / arg2;
	}
};