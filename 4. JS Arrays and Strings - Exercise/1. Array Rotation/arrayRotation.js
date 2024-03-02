/* 

Write a function that receives an array and the number of rotations you have to perform.
Note: Depending on the number of rotations, the first element goes to the end.

*/

function quickSolve(numbers,rotations){

    for (let i = 0; i < rotations; i++) {
       numbers.push(numbers.shift());     
    }

    console.log(numbers.join(' '));
}

quickSolve([51, 47, 32, 61, 21], 2);
quickSolve([32, 21, 61, 1], 4);
quickSolve([2, 4, 15, 31], 5);