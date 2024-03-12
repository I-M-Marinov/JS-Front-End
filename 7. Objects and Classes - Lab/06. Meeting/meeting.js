/* 
Write a function that manages meeting appointments. The input comes as an array of strings. 
Each string contains a weekday and person’s name. For each successful meeting, print a message. 
If you receive the same weekday twice, the meeting cannot be scheduled so print a conflicting message. 
In the end, print a list of all successful meetings. 
*/

function solve(array){

    let meetings = {};

    for (const meeting of array) {
        let tokens = meeting.split(' ');
        let day = tokens[0];
        let person = tokens[1];

        if(Object.keys(meetings).includes(day)){
            console.log(`Conflict on ${day}!`);
            continue;
        } else {
            console.log(`Scheduled for ${day}`);
            meetings[day] = person;
        }

       
    }

    for (let day in meetings) {
        console.log(`${day} -> ${meetings[day]}`);
        }
}

solve(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim']
);

solve(['Friday Bob',
'Saturday Ted',
'Monday Bill',
'Monday John',
'Wednesday George']
);
