/* 
Write a function that receives two integer numbers. Calculate the factorial of each number. Divide the first result by the second and print the division formatted to the second decimal point.
Examples:

        Input	Output		Input	Output

        5,                  6,
        2	    60.00		2	    360.00
                
*/

function factorialDivision(num1, num2) {
    let total = 0;

    function calculateFactorial(number) {
        let sum = 1;
        for (let i = 1; i <= number; i++) {

            sum *= i;
        }
        return sum;
    }

    let sumNumber1 = calculateFactorial(num1);
    let sumNumber2 = calculateFactorial(num2);
    total = sumNumber1 / sumNumber2;
    console.log(total.toFixed(2));
}

factorialDivision(5, 2);
factorialDivision(6, 2);

