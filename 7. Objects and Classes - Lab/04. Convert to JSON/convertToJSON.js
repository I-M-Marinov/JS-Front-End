/* 
Write a function that receives a first name, last name, hair color and sets them to an object.
Convert the object to JSON string and print it.
Input is provided as 3 single strings in the order stated above.
*/

function solve(firstName, lastName, hairColor){

    const info = {
        name: firstName,
        lastName,
        hairColor,
    };

    const jsonData = JSON.stringify(info);
    console.log(jsonData);
}

solve('George', 'Jones', 'Brown');
solve('Peter', 'Smith', 'Blond');