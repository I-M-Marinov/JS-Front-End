/* 
Write a program, which receives a number n and an array of elements. 
Your task is to create a new array with n numbers from the original array, reverse it and print its elements on a single line, space-separated.
*/

function reverse(number,array){
    let newArray = [];

    for (let index = 0; index < number; index++) {
        newArray.push(array[index]);
    }
    newArray.reverse();
    let output ="";

    newArray.forEach(number => output += number + " ");

    console.log(output);
    
}

reverse(3, [10, 20, 30, 40, 50]);