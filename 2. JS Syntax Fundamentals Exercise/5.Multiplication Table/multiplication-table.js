/* 
You will receive a number as a parameter. Print the 10 times table for this number.
 See the examples below for more information.

Output
Print every row of the table in the following format:
{number} X {times} = {product}

Constraints
·	The number will be an integer will be in the interval [1…100].
*/

function multiply(number){
    
    for (let index = 1; index <= 10; index++) {
        let product = number * index;
        console.log(`${number} X ${index} = ${product}`)
    }
}

multiply(5);
multiply(10);
multiply(7);