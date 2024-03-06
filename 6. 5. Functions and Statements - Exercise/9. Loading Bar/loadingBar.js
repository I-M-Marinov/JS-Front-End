/* 
You will receive a single number between 0 and 100, which is divided with 10 without residue (0, 10, 20, 30...). 
Your task is to create a function that visualizes a loading bar depending on the number you have received in the input.
*/

function loadingBar(number) {

    let resultText = "";
    let resultBar = "";
    let resultArray = [];
    let finalOutput = "";

    for (let i = 10; i < 110; i+=10) {
        if ( i <= number){
            resultArray.push("%");
        } else {
            resultArray.push(".")
        }
    }
    resultBar = resultArray.join('');
    resultText = (`${number}%`);

    if (number < 100){
        finalOutput = (`${resultText} [${resultBar}]`);
        console.log(finalOutput);
        console.log("Still loading...")
    } else {
        finalOutput = (`${resultText} Complete!`);
        console.log(finalOutput);
        console.log(`[${resultBar}]`)
    }
}

loadingBar(30);
loadingBar(50);
loadingBar(100);
loadingBar(66);
loadingBar(99);





