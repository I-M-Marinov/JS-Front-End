/* 
Write a function that receives 3 parameters, sets them to an object, and returns that object.
The input comes as 3 separate strings in the following order: firstName, lastName, age.
*/

function solve(firstName, lastName, age){

    let person = {
        firstName,
        lastName,
        age
    }

    return person;
}

console.log(solve("Peter", "Pan","20"));
console.log(solve( "George", "Smith","18"));