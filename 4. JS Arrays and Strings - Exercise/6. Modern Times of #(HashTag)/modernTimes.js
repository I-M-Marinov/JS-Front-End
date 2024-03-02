/* 
The input will be a single string.
Find all special words starting with #. If the found special word does not consist only of letters, then it is invalid and should not be printed. 
Finally, print out all the special words you found without the label (#) on a new line.
*/

function solve(input){
    const pattern = /#([a-zA-Z]+)/g;

    const matches = input.matchAll(pattern);
    for (const match of matches) {
        console.log(match[1]);
    }
}

solve('Nowadays everyone uses # to tag a #special word in #socialMedia');