/* 

A palindrome is a number, which reads the same backward as forward, such as 323 or 1001.
 Write a function, which receives an array of positive integers and checks if each integer is a palindrome or not.

Output
•	If the current integer is a palindrome, print: "true"
•	Otherwise, print: "false"

*/

function checkIfPal(arrayOfNums) {

    let iterations = arrayOfNums.length;
    let isPalindrome = false;
    for (let i = 0; i < iterations; i++) {

        let firstNumber = arrayOfNums.shift(); // get the first number in the array
        let numberArray = String(firstNumber).split("").map((num) => { // make an array with the digits of that number
            return Number(num)
        });

        let reverseArray = numberArray.slice(); // copy the array 
        reverseArray = reverseArray.reverse(); // reverse the copied array
        let numberOne = numberArray.join(''); // convert the array back to number 
        let numberTwo= reverseArray.join(''); // convert the reversed array back to number 

        if(numberOne == numberTwo){ // check if the numbers are equal, if they are equal it is a palindrome number
            isPalindrome=true;
            console.log(isPalindrome);
        } else { // if they are not equal it is not a palindrome number 
            isPalindrome=false;
            console.log(isPalindrome);
        }
    }
}


checkIfPal([123, 323, 421, 121]);
checkIfPal([32, 2, 232, 1010]);
checkIfPal([989, 12321, 48956135465, 0]);
