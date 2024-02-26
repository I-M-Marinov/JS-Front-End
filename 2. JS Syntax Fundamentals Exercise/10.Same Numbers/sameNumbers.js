/* 
Write a function that takes an integer number as an input and check if all the digits in a given number are the same or not.
Print on the console true if all numbers are the same and false if not. On the next line print the sum of all digits.
The input comes as an integer number.
The output should be printed on the console.
*/

function checkNumbers(number){
    let saveNumber = number;
    let lastDigit = 0;
    let secondLast = 0;
    let total = 0;
    let falseNum = false;
    while (number != 0){
        lastDigit = number % 10; // get last digit of number
        number = Math.trunc(number/10); // remove the digit from the number

        if (number == 0){ // check if the number is 0 for ODD numbers 
            if (lastDigit != secondLast){ // check if that last digit from the odd number is different from the previous digit and if yes log FALSE on the console
                console.log("false");
                falseNum = true;
            }
            break;
            
        }

        secondLast =  number % 10;
        number = Math.trunc(number/10); // remove the digit from the number

        if (lastDigit != secondLast){
            console.log("false");
            falseNum = true;
            break;
        } else {
            continue; // if the two digits are the same continue on checking the next 2 digits
        }
    }
    while (saveNumber != 0){
        total += (saveNumber % 10);
        saveNumber /= 10;
        saveNumber = Math.trunc(saveNumber);
    }
    if(falseNum){
        console.log(total);
    } else{
        console.log("true");
        console.log(total)
    }
    
}

 checkNumbers(2222222);
 checkNumbers(1234);
 checkNumbers(666666);
 checkNumbers(66665);
 checkNumbers(56666);