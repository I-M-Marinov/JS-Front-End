function solve(input){

    const riderCount = Number(input.shift());
    const riders = {};

    for (let i = 0; i < riderCount; i++) {
        let [name, fuelCapacity, position] = input[i].split('|');

        if(Number(fuelCapacity) > 100){
            fuelCapacity = 100;
        }
        
        riders[name] = {
            fuelCapacity: Number(fuelCapacity),
            position: Number(position),
        }

    }

    let commandLine = input.shift();

    while (commandLine != 'Finish'){

        const [command, name, firstArg, secondArg] = commandLine.split(' - ');
        const rider = riders[name];

        let riderTwo, minimumFuel, changedPosition, lapsLeft;
        switch (command) {

            case 'StopForFuel':
                minimumFuel = Number(firstArg);
                changedPosition = Number(secondArg);

                if (minimumFuel > rider.fuelCapacity){
                    console.log(`${name} stopped to refuel but lost his position, now he is ${changedPosition}.`);
                    rider.position = changedPosition;
                } else {
                    console.log(`${name} does not need to stop for fuel!`);
                }
                break;
            case 'Overtaking':
                riderTwo = firstArg;
                let posititon =  rider.position;

                if (rider.position < riders[riderTwo].position){
                    rider.position = riders[riderTwo].position;
                    riders[riderTwo].position = posititon;
                    console.log(`${name} overtook ${riderTwo}!`);
                }
                break;

            case 'EngineFail':
                lapsLeft = firstArg;
                delete riders[name];
                console.log(`${name} is out of the race because of a technical issue, ${lapsLeft} laps before the finish.`);
                
                break;
        }

        commandLine = input.shift();
        
    }

for (const riderName in riders) {
    
    console.log(`${riderName}`);
    console.log(`  Final position: ${riders[riderName].position}`);
}
    
}

solve((["3",
"Valentino Rossi|101|1",
"Marc Marquez|90|2",
"Jorge Lorenzo|80|3",
"StopForFuel - Valentino Rossi - 50 - 1",
"Overtaking - Marc Marquez - Jorge Lorenzo",
"EngineFail - Marc Marquez - 10",
"Finish"])
);

solve((["4",
"Valentino Rossi|100|1",
"Marc Marquez|90|3",
"Jorge Lorenzo|80|4",
"Johann Zarco|80|2",
"StopForFuel - Johann Zarco - 90 - 5",
"Overtaking - Marc Marquez - Jorge Lorenzo",
"EngineFail - Marc Marquez - 10",
"Finish"])
);