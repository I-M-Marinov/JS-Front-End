/* 
Write a function that receives a text and a single word that you need to search. Print the number of all occurrences of this word in the text.
*/

function solve(string, searchedWord){

    let words = string.split(' ');
    let counter = 0;

    for (const word of words) {
        if (word == searchedWord){
            counter++;
        }
    }

    console.log(counter);
}

solve('This is a word and it also is a sentence','is');
solve('softuni is great place for learning new programming languages','softuni');