/* 
Write a function that stores information about a person’s name and phone number. 
The input is an array of strings with space-separated name and number. 
Replace duplicate names. Print the result as shown.

Input	                        Output
['Tim 0834212554',              Tim -> 0876566344
 'Peter 0877547887',            Peter -> 0877547887
 'Bill 0896543112',             Bill -> 0896543112
 'Tim 0876566344']	

*/

function solve(inputArray) {

        let phonebook = {};

        for (let line of inputArray) {
                let tokens = line.split(' ');
                let name = tokens[0];
                let number = tokens[1];
                phonebook[name] = number;
        }
        
        for (let key in phonebook) {
        console.log(`${key} -> ${phonebook[key]}`);
        }
    }

solve(['Tim 0834212554','Peter 0877547887','Bill 0896543112','Tim 0876566344']); 

solve(['George 0552554','Peter 087587','George 0453112','Bill 0845344']); 
