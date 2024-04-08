/* 

You are the owner of a cozy cafe in a charming little town. Your team consists of baristas, and you need to manage their work schedules and customer orders. 

Each barista has a name, shift hours, and coffee-making skills..

On the first line of the standard input, you will receive an integer n – the number of baristas on your team. On the next n lines, 

the baristas' details will follow with their names, shift, and a comma-separated list of coffee types they can prepare in the following format:

"{barista name} {shift} {coffee type 1,coffee type 2,...}"

Shift represent baristas shifts(it can be day or night), and the list of coffee types indicates the beverages they can make.

After you have formed your team, you will receive different commands, each on a new line, separated by " / ", until the "Closed" command is given. 
There are three actions that the baristas can perform: 

"Prepare / {barista name} / {shift} / {coffee type}"

•	If the barista is available during the shift and has the necessary skills, they can prepare the coffee order. Print this message:

"{barista name} has prepared a {coffee type} for you!"

•	If the barista is not available during their shift or cannot make the requested coffee type, print:

"{barista name} is not available to prepare a {coffee type}."

"Change Shift / {barista name} / {new shift}"

•	The barista updates their shift for either the day or night shift. 

•	Print the following message:

"{barista name} has updated his shift to: {new shift}"

"Learn / {barista name} / {new coffee type}"

•	If the barista can prepare that coffee type, print:

"{barista name} knows how to make {new coffee type}."

•	Else the barista adds a new coffee type to their list of beverages they can prepare. 
•	Print the following message:

"{barista name} has learned a new coffee type: {new coffee type}."

Input

•	On the first line of the standard input, you will receive an integer n
•	On the following n lines, the baristas themselves will follow with their shift, and the list of coffee types they can prepare, separated by a space and comma-separated, as specified.
•	You will be receiving different commands, each on a new line, separated by " / ", until the "Closed" command is given

Output

Every order should print its own template sentence. After that, print all baristas, along with their updated shifts, 
and the list of coffee types they can prepare, in the following format:

"Barista: {barista name}, Shift: {shift}, Drinks: {drink type 1, drink type 2, ...}"

Constraints
•	The names of the baristas will always be unique.
•	All given commands will be valid.


*/

function solve(input){
    const baristaCount = Number(input.shift());
    const team = {};

    for (let i = 0; i < baristaCount; i++) {
        const [name,shift,coffeeTypes] = input[i].split(' ');
        
        team[name] = {
            shift,
            coffeeTypes: coffeeTypes.split(','),
        }
    }

    let commandLine = input.shift();

    while (commandLine != 'Closed'){
        
        const [command, name, firstArg, secondArg] = commandLine.split(' / ');
        const barista = team[name];

        let shift,coffeeType;
        switch (command) {
            case 'Prepare':
            shift = firstArg;
            coffeeType = secondArg;
                if (barista.shift === shift && barista.coffeeTypes.includes(coffeeType)){
                    console.log(`${name} has prepared a ${coffeeType} for you!`);
                } else {
                    console.log(`${name} is not available to prepare a ${coffeeType}.`);
                }
                break;
            case 'Change Shift':
                shift = firstArg;
                barista.shift = shift;
                console.log(`${name} has updated his shift to: ${shift}`);
                
                break;
            case 'Learn':
                coffeeType = firstArg;
                if (barista.coffeeTypes.includes(coffeeType)){
                    console.log(`${name} knows how to make ${coffeeType}.`);
                } else {
                    barista.coffeeTypes.push(coffeeType);
                    console.log(`${name} has learned a new coffee type: ${coffeeType}.`);
                }
                break;
        }
        commandLine = input.shift();
    }

    for (const baristaName in team) {
        console.log(`Barista: ${baristaName}, Shift: ${team[baristaName].shift}, Drinks: ${team[baristaName].coffeeTypes.join(', ')}`);
    }
}

solve([
    '3',
      'Alice day Espresso,Cappuccino',
      'Bob night Latte,Mocha',
      'Carol day Americano,Mocha',
      'Prepare / Alice / day / Espresso',
      'Change Shift / Bob / night',
      'Learn / Carol / Latte',
      'Learn / Bob / Latte',
      'Prepare / Bob / night / Latte',
      'Closed']
    );