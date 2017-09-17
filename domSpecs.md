# Dom specs for __CleanCalc__ application.

## new version 2.1.0

> Specification for a app.js :


### Variables :
* _displayScreen_ : string
    * purpose: store dom node
* _actionToPerform_ : string
    * purpose : store mathamatical action to perform
* _firstNumber_ : string
    * purpose : store number as a string use to calculate
* _secondNumber_ : string
    * purpose : store number as a string use to calculate

### Functions : 

* _passingActionOrValue_ : function
    * args : 2
        * event : string || number
            * purpose: get number from button or get operator
        * operatorSing : string
            * purpose: get inner content of button to display to screen
    * purpose : get event from dom and assign number to values and operator to operator
    * behavior : if type of event argument is number we assign it to number variable,else we assign to operator

*  _clearResult_ : function
    * args: 0
    * purpose : set variables to be empty
    * behavior : clears all variables to empty string again

* _getActionGoing_ : function
    * args : 0 
    * purpose: use calc obj and do calculation with passed values
    * behavior : takes assign values from global scope and pass to calc obj to do calculation with operate method,return value then assign to inner part of display tag.