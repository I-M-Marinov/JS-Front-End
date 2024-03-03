/* 
Write a function, that checks whether the result of the multiplication numOne * numTwo * numThree is positive or negative. 
Try to do this WITHOUT multiplying the 3 numbers.

Input

The input comes as parameters named numOne, numTwo, numThree.

Output

•	If the result is positive, print on the console -> "Positive"
•	Otherwise, print -> "Negative"

                        Examples

                Input	        Output
                5,
                12,
                -15	            Negative

                -6,
                -12,
                14	            Positive

                -1,
                -2,
                -3	            Negative

                -5,
                1,
                1	            Negative
*/

function signCheck(number1, number2, number3) {

    const negativeNumbersCount = [number1, number2, number3].filter(num => num < 0).length;

    if (negativeNumbersCount % 2 === 0){
        console.log("Positive");
    } else {
        console.log("Negative");
    }
}

signCheck(5, 12, -15);
signCheck(-6, -12, 14);
signCheck(-1, -2, -3);
signCheck(-5, 1, 1);

