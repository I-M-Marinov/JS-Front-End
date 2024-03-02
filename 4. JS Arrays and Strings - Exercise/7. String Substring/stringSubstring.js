/*
The input will be given as two separated strings (a word as a first parameter and a text as a second).
Write a function that checks given text for containing a given word. The comparison should be case insensitive. Once you find a match, print the word and stop the program. 
If you don't find the word print: "{word} not found!"
*/

function solve(word, text){
    const words = text.toLowerCase().split(' ');
    const isIncluded = words.includes(word.toLowerCase());

    if(isIncluded){
        console.log(word);
    } else {
        console.log(`${word} not found!`);             
    }
}

solve('javascript', 'JavaScript is the best programming language');
solve('python','JavaScript is the best programming language');



