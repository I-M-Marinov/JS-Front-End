/* 
Write a function that receives a string in JSON format and converts it to an object.
Loop through all the keys and print them with their values in format: "{key}: {value}"
*/

function solve(jsonString){

    const person = JSON.parse(jsonString);

    Object.keys(person).forEach(key => console.log(`${key}: ${person[key]}`));
}

solve('{"name": "George", "age": 40, "town": "Sofia"}');
solve('{"name": "Peter", "age": 35, "town": "Plovdiv"}');
