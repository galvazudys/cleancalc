# __CleanCalc__ , user friendly calculator

## version 2.0.0

## User friendly calculator

### What did change from last version?

> In this version of application we have now object,in witch we store initial value as property.
```javascript
calc.lastResult;
```
> all a standalone function we have ,now is part of object and became a methods in a calc object.as you see in fallowing example.
```javascript
var calc = {
	lastResult: 0000,
	operate:function(operation,arg1,arg2){
		if(arg2){
			return operation(arg1,arg2);
		}else{
			return operation(arg1,lastResult);
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
```
>  method does what we would call addition, it's amazing peace of code,that takes two arguments (Numbers),in this case called arg1 and arg2 and returns sum of two arguments.
```javascript 
add:function(arg1, arg2) {
	return arg1 + arg2;
};
```
---

> In next method description, we have subtraction action. It's takes two arguments (Numbers) and return very complicated value that comes from argument difrence.

```javascript
subtract: function(arg1, arg2) {
	return arg1 - arg2;
};
```
---
> We arrived to a method that takes two arguments (Numbers) and returns multiplication value.

```javascript
multiply:function(arg1, arg2) {
	return arg1 * arg2;
};
```
---

> And in final method we gone have two arguments (Numbers) and return division value.
```javascript
divide: function(arg1, arg2) {
	return arg1 / arg2;
};
```
---

> Method that can perform not only action with 3 arguments,but also can check or second argument exist,if exist it's perform operation function with two arguments profided,else for second argument it takes last returned value.

```javascript
operate: function(operation, arg1, arg2) {
	if (arg2) {
		lastResult = operation(arg1, arg2);
		return lastResult;
	} else {
		lastResult = operation(arg1, lastResult);
		return lastResult;
	}
};
``` 


