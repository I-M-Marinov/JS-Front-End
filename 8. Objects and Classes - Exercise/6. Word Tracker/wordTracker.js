/* 
Write a function that receives an array of words and finds occurrences of given words in that sentence. 
The input will come as an array of strings. 
The first string will contain the words you will be looking for separated by a space. 
All strings after that will be the words in which you will check for a match.
Print for each word how many times it occurs. The words should be sorted by count in descending.
*/

function solve(stringArray){

    let sortedWords = [];
    let words = stringArray.shift().split(" "); 
    let counter = 0;

    for (const word of words) {
        if (stringArray.includes(word)){
            stringArray.forEach((element) => (element === word && counter++));
            let foundWord = {
                word: word,
                count: counter,
            }
            sortedWords.push(foundWord);
            counter = 0;
        } else {
            let foundWord = {
                word: word,
                count: 0,
            }
            sortedWords.push(foundWord);
        }
    }
    sortedWords.sort((a, b) => b.count - a.count);
    
    sortedWords.forEach(word => {
        console.log(`${word.word} - ${word.count}`)
    });
}



solve([
    'this sentence', 
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 
    'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task']); 

solve([
    'is the', 
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']);