/* 
Write a function that receives a text as a first parameter and a single word as a second. 
Find all occurrences of that word in the text and replace them with the corresponding count of '*'.
*/

function censor(sentance,word){

    while (sentance.includes(word)){
        sentance = sentance.replace(word, "*".repeat(word.length));
    }

    console.log(sentance);
}

censor('A small sentence with some words', 'small');
censor('Find the hidden word', 'hidden');
