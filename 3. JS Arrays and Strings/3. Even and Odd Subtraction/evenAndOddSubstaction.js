/* 
Write a program that calculates the difference between the sum of the even and the sum of the odd numbers in an array.
*/

function evenOddSumDifference(array){
    let evenSum = 0;
    let oddSum = 0;
    for (let index = 0; index < array.length; index++) {
        let element = array[index];

        if (element % 2 == 0){
            evenSum += element;
        } else { // number is odd if number % 2 is not 0 
            oddSum += element;
        } 
    }
    console.log(evenSum-oddSum);
}

evenOddSumDifference([1,2,3,4,5,6]);
evenOddSumDifference([3,5,7,9]);
evenOddSumDifference([2,4,6,8,10]);