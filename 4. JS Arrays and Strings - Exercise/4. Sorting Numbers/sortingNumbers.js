/* 
Write a function that sorts an array of numbers so that the first element is the smallest one, 
the second is the biggest one, the third is the second smallest one, the fourth is the second biggest one, and so on. 
Return the resulting array.
*/

function solve(numbers) {

   let sortedNumbers = numbers.sort((a, b) => a - b);
   const result = [];

    while (sortedNumbers.length > 0){
        
        let firstNumber = sortedNumbers.shift();
        let lastNumber = sortedNumbers.pop();

        result.push(firstNumber);

        if (lastNumber){
            result.push(lastNumber);
        }
    }

   return result;
}

console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));
