/* 
Write a function that stores information about a person’s name and his address. 
The input comes as an array of strings. Each string contains the name and the address separated by a colon. 
If you receive the same name twice just replace the address. 
In the end, print the full list, sorted alphabetically by the person’s name.
*/

function logAddress(inputArray) {

    let addressBook = {};

    for (const input of inputArray) {
        let tokens = input.split(':');
        let name = tokens[0];
        let address = tokens[1];
        addressBook[name] = address;
    }

    let sortedArray = Object
    .entries(addressBook)
    .sort((a,b) => a[0].localeCompare(b[0]));

    let sortedObject = Object.fromEntries(sortedArray);

    for (let name in sortedObject) {
        console.log(`${name} -> ${addressBook[name]}`);
        }
}

logAddress(['Tim:Doe Crossing', 'Bill:Nelson Place', 'Peter:Carlyle Ave', 'Bill:Ornery Rd']);

logAddress(['Bob:Huxley Rd',
'John:Milwaukee Crossing',
'Peter:Fordem Ave',
'Bob:Redwing Ave',
'George:Mesta Crossing',
'Ted:Gateway Way',
'Bill:Gateway Way',
'John:Grover Rd',
'Peter:Huxley Rd',
'Jeff:Gateway Way',
'Jeff:Huxley Rd']
);