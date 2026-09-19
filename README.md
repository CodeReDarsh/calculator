# calculator

A basic web-based calculator. Follows calculation processing similar to [CalculatorSoup's basic calculator](https://www.calculatorsoup.com/calculators/math/basic.php).
Some UI color schemes and element designs were inspired from google search's calculator.

Implemented:

- [x] Supports following operations (functions defined for each):
  - [x] addition
  - [x] subtraction
  - [x] multiplication
  - [x] division
- [x] Operate function takes an operator and 2 numbers, calling the required operator functions and
      returns a result.
- [x] Buttons for each digit and operator (including `=`).
- [x] Display for currently inputted numbers and calculator.
- [x] Clear Entry button.
- [x] All Clear button.
- [x] 2 operand variables, 1 operator variable
- [x] Only single pair of numbers to be evaluated at a time
- [x] answers with long decimals should be rounded to prevent 14 decimal places to prevent priceision
      errors and display overflow.
- [x] when result is displayed pressing a new digit should clear the result and start a new calculation
- [x] support floating point math with `.` button, prevent users from pressing more than once though
      Disable the button if input already has the number

---

Notes:
should only evaluate 2 numbers' result at a time
when you press an operator, it should calculate the result and display it

- if you press +-/* it should use the result from the previous calculation as the new operand
  for the next one, while displaying the previous result (only possible when you have all 3, i.e.
  op1, operator, op2); at the end of this you should only have op1 and operator.
  - when pressing another operator again, it should update the operator but not the display, op1
    stays same, operator updates, shouldn't update if its an equal sign, instead it should start
    a new calc at that point (op1 = 0, operator ="" and op2 = "")
  - if you press a number instead it should update the display with that number and store it as the second operand, op1 is result, operator updated, op2 is the new number
- if you press = it should evaluate result and display it. (only possible when op1, operator and op2 exist) From here
  - if you press a number, start a completely new calculation
    op1 = new number, operator = "", op2 = ""
  - if you press an operator, continue the calculation with the result as a new operand. op1 = result, operator set to symbol, but if = is pressesd again then it stays blank.


