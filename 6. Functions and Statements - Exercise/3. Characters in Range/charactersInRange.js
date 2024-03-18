/* 
Write a function that receives two characters and prints on a single line all the characters in between them according to the ASCII code. 
Keep in mind that the second character code might be before the first one inside the ASCII table.
*/

function charsInRange(char1,char2){

    let firstCharLocation = char1.charCodeAt(0);
    let secondCharLocation = char2.charCodeAt(0);
    let result = "";

    if (firstCharLocation < secondCharLocation){
        for (let i = firstCharLocation+1; i < secondCharLocation; i++) {
            let actualChar = String.fromCharCode(i);
            result = result + actualChar + " ";
        }
    } else if ((secondCharLocation < firstCharLocation)){
        for (let y = secondCharLocation+1; y < firstCharLocation; y++) {
            let actualChar = String.fromCharCode(y);
            result = result + actualChar + " ";
        }
    }
    console.log(result);
}

charsInRange('a','d');
charsInRange('#',':');
charsInRange('C','#');