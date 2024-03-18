/* 
Write a function that receives a number and checks if that number is perfect or NOT.
A perfect number is a positive integer that is equal to the sum of its proper positive divisors. 
That is the sum of its positive divisors excluding the number itself (also known as its aliquot sum).

Output
•	If the number is perfect, print: "We have a perfect number!"
•	Otherwise, print: "It's not so perfect."

Hint
Equivalently, a perfect number is a number that is half the sum of all of its 
positive divisors (including itself) => 6 is a perfect number because it is the sum of 1 + 2 + 3 (all of which are divided without residue).

*/

function PerfectNumber(number) {
    let sum = 1;
 
    for (let i = 2; i <= Math.sqrt(number); i++) { 
        if (number % i === 0) {
            sum += i;
            if (i !== number / i) {
                sum += number / i;  
            }
        }
    }
 
    const perfectNumber = sum === number;

    if (perfectNumber) {
        console.log("We have a perfect number!");
    } else {
        console.log("It's not so perfect.");
    }
 
}
 
PerfectNumber(6);
PerfectNumber(28);
PerfectNumber(1236498);