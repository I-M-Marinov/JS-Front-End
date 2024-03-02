/* 
You will receive an array of names. Sort them alphabetically in ascending order and print a numbered list of all the names, each on a new line.
*/

function solve(array) {

    array.sort((a, b) => a.localeCompare(b));

    for (let i = 0; i < array.length; i++) {

        console.log(`${i + 1}.${array[i]}`);
    }
}

solve(["John", "Bob", "Christina", "Ema"]);
