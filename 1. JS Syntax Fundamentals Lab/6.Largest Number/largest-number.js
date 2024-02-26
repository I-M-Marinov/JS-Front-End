/* 
Write a function that takes three number arguments as input and finds the largest of them.
 Print the following text on the console:  `The largest number is {number}.`.
*/

function solve(num1, num2, num3) {
    let biggestNum = 0;
    if (num1 > num2 && num1 > num3) {
        biggestNum = num1;
    } else if (num2 > num1 && num2 > num3) {
        biggestNum = num2;
    } else {
        biggestNum = num3;
    }
    console.log(`The largest number is ${biggestNum}.`);
}

solve(1,5,77);
solve(1,555,77);
solve(111,5,77);