# __CleanCalc__ , user friendly calculator



## User friendly calculator

> Next function does what we would call addition, it's amazing peace of code,that takes two arguments (Numbers),in this case called arg1 and arg2 and returns sum of two arguments.
```javascript 
function add(arg1, arg2) {
	return arg1 + arg2;
};
```
---

> In next function description, we have subtraction action. It's takes two arguments (Numbers) and return very complicated value that comes from argument difrence.

```javascript
function subtract(arg1, arg2) {
	return arg1 - arg2;
};
```
---
> We arrived to a function that takes two arguments (Numbers) and returns multiplication value.

```javascript
function multiply(arg1, arg2) {
	return arg1 * arg2;
};
```
---

> And in final function we gone have two arguments (Numbers) and return division value.
```javascript
function divide(arg1, arg2) {
	return arg1 / arg2;
};
```
---

## Version 1.1.0

### new version changes.

> In this version of application we figure out add simpler way to do actions in your application. Next function makes that very easy to perfom. You can select action you want perform and pass two arguments.

```javascript
function operateIntermediary(operation, arg1, arg2) {
	return operation(arg1, arg2);
};
```

---

## Version 1.2.0

### New version changes :

> This version got new function that can perform not only action with 3 arguments,but also can check or second argument exist,if exist it's perform operation function with two arguments profided,else for second argument it takes last returned value.

```javascript
function operate(operation, arg1, arg2) {
	if (arg2) {
		lastResult = operation(arg1, arg2);
		return lastResult;
	} else {
		lastResult = operation(arg1, lastResult);
		return lastResult;
	}
};
``` 


