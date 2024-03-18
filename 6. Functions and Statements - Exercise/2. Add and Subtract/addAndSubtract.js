/* 
You will receive three integer numbers. 
Write a function sum() to calculate the sum of the first two integers and a function subtract(), 
which subtracts the result of the function the sum() and the third integer.
*/

function addAndSubract(num1,num2,num3){
 let total = (num1+num2) - num3;
 console.log(total);
}

addAndSubract(23,6,10);
addAndSubract(1,17,30);
addAndSubract(42,58,100);
