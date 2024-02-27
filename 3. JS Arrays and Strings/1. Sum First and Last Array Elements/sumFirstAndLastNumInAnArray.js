
/* 
Write a function that receives an array of numbers and prints the sum of the first and last element in that array.
*/

function solve(input){
    let lastNum = input.pop();
    let firstNUm = input.shift();
    console.log(firstNUm+lastNum);
}

solve([20, 30, 40]);
solve([10, 17, 22, 33]);
solve([11, 58, 69]);
