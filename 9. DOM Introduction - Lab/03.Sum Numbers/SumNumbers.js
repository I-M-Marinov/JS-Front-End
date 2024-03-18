/* 
Write a JS function that reads two numbers from input fields in a web page and puts their sum in another field when the user clicks on a button.
Input/Output
There will be no input/output, your program should instead modify the DOM of the given HTML document.
*/

function calc() {
    
    const firstInputElement = document.getElementById('num1');
    const secondInputElement = document.querySelector('#num2');
    const sumInputElement = document.getElementById('sum');

    const firstNumber = Number(firstInputElement.value);
    const secondNumber = Number(secondInputElement.value);

    const sum = firstNumber + secondNumber;
    sumInputElement.value = sum;
}
