/* 
Write a function that extracts the elements of a sentence, if it appears an odd number of times (case-insensitive).
The input comes as a single string. The words will be separated by a single space.
*/

function solve(string){

    let stringArray = string.toLowerCase().split(" ");
    let countedWordsArray = [];
    let returnArray = [];
    let filteredArray = [];
    let counter = 0;

    for (const word of stringArray) {
        if (stringArray.includes(word)){
            if (!countedWordsArray.includes(word)){
                stringArray.forEach((element) => (element === word && counter++));
                let foundWord = {
                word: word,
                count: counter,
                }
                countedWordsArray.push(foundWord);
                counter = 0;
            }
        }
    }

    for (const word of countedWordsArray) {
        if (word.count % 2 != 0){
           if (!countedWordsArray.includes(word.word)){
                returnArray.push(word.word);
           }
        }
    }
    filteredArray = returnArray.filter((item,index) => returnArray.indexOf(item) === index); 

    console.log(filteredArray.join(" "));
}

solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
solve('Cake IS SWEET is Soft CAKE sweet Food');