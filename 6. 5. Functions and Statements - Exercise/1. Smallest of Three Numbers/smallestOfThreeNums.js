/* 
Write a function that receives three integers and prints the smallest number. Use an appropriate name for the function.
*/

function findSmallestNumber(num1, num2, num3) {
    let array = [num1, num2, num3];
    let smallestNum = Math.min.apply(Math, array);

    console.log(smallestNum);
}

findSmallestNumber(2, 5, 3);
findSmallestNumber(600, 342, 123);
findSmallestNumber(25, 21, 4);
findSmallestNumber(2, 2, 2);