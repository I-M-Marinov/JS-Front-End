/* 
Write a function that receives a string and a repeat count n. The function should return a new string (the old one repeated n times).

    Examples
                Input	            Output
                "abc", 3	        abcabcabc
                "String", 2	        StringString
*/

function repeatString(string,count){

    let result ="";
    for (let i = 0; i < count; i++) {
        
       result += string;
    }

    return result;
}

console.log(repeatString("abc", 3));
console.log(repeatString("String", 2));

