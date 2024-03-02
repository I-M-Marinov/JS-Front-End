/* 

Write a function, which receives two parameters. 
The first parameter will be a string with some words separated by ', '.
The second parameter will be a string that contains templates containing '*'.
Find the word with the same length as the template and replace it.


*/

function solve(wordsInput, template){

    const words = wordsInput.split(', ');

    const matches = template.matchAll(/\*+/g);

    for (const match of matches) {
        
        const word = words.find(w => w.length === match[0].length)
        template = template.replace(match[0],word);
    }
    console.log(template);
}

solve('great','softuni is ***** place for learning new programming languages');
solve('great, learning','softuni is ***** place for ******** new programming languages');