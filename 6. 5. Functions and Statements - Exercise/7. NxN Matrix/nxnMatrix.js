/* 
Write a function that receives a single integer number n and prints nxn matrix with that number.
*/

function matrix(number){
    let result = "";

    for (let i = 0; i < number; i++) {

        for (let y = 0; y < number; y++) {
            
            result = result + number + " ";
        }
        console.log(result);
        result = "";
    }
}

matrix(3);
matrix(7);
matrix(2);