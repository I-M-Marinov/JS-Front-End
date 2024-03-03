/* 
Write a function that receives three parameters – two numbers and an operator (string) – and calculates the result depending on the operator. 
Operator can be 'multiply', 'divide', 'add' or 'subtract'. Try to solve this task using arrow functions.

Bonus
Solve this task without using any conditional statements (no if or switch statements or ternary operators).

Input
The input comes as parameters named numOne, numTwo, operator.

Examples

    Input	                    Output
    5,
    5,
    'multiply'	                    25

    40,
    8,
    'divide'	                    5

    12,
    19,
    'add'	                        31

    50,
    13,
    'subtract'	                    37
*/

function solve(num1, num2, operator) {

    const add = (num1, num2) => num1 + num2;
    const subtract = (num1, num2) => num1 - num2;
    const multiply = (num1, num2) => num1 * num2;
    const divide = (num1, num2) => num1 / num2;
    let result = 0;

    switch (operator) {
        case "multiply":
            result = multiply(num1,num2)
            break;
        case "divide":
            result = divide(num1,num2)
            break;
        case "add":
            result = add(num1,num2)
            break;
        case "subtract":
            result = subtract(num1,num2)
            break;
    }

    console.log(result);
}

solve(5, 5, 'multiply');
solve(40, 8, 'divide');
solve(12, 19, 'add');
solve(50, 13, 'subtract');
solve(10, 8, 'multiply'); // this is an extra case