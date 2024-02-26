/* 
Write a function, which will be given a single number. Your task is to find the sum of its digits.
Examples
Input	Output
245678	32
97561	28
543	    12

*/

function sumOfDigits(number){
    let total = 0;
    
    while (number != 0){
        total += (number % 10);
        number /= 10;
        number = Math.trunc(number);
    }
    console.log(total);
}

 sumOfDigits(245678);
 sumOfDigits(97561);
 sumOfDigits(543);