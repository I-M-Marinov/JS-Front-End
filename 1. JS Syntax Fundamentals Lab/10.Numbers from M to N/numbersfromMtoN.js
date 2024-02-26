/* 
Write a function that receives a number M and a number N (M will always be bigger than N). Print all numbers from M to N.
*/

function printNumbersFromMtoN(M, N) {
    for (let i = M; i >= N; i--) {

        console.log(i);
    }
}

printNumbersFromMtoN(6, 2);
printNumbersFromMtoN(4, 1);
printNumbersFromMtoN(8, 0);