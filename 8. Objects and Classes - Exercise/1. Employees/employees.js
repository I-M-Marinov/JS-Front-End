/* 
You're tasked to create a list of employees and their personal numbers.
You will receive an array of strings. 
Each string is an employee name and to assign them a personal number you have to find the length of the name (whitespace included). 
Try to use an object.
At the end print all the list employees in the following format:
 "Name: {employeeName} -- Personal Number: {personalNum}" 
*/

function solve(stringsArray){

    let employees = {};

    for (const name of stringsArray) {

        let employeeName = name;
        let personalNumber = name.length;
        employees[name] = personalNumber;
    }

    for (const name in employees) {
            console.log(`Name: ${name} -- Personal Number: ${employees[name]}`);
        }
    }


solve([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    );
solve([
    'Samuel Jackson',
    'Will Smith',
    'Bruce Willis',
    'Tom Holland'
    ]
    );