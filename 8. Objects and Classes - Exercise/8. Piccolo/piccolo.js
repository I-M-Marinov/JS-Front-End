/* 
Write a function that:
•	Records a car number for every car that enters the parking lot
•	Removes a car number when the car goes out
•	Input will be an array of strings in format [direction, carNumber]
Print the output with all car numbers which are in the parking lot sorted in ascending by number.
If the parking lot is empty, print: "Parking Lot is Empty".

*/

function solve(array) {

    let parking = [];

    for (const line of array) {
        const [command,carPlateNumber] = line.split(", ");

        if (command === "IN"){
           if(!parking.includes(carPlateNumber)){ // check if the CAR PLATE NUMBER already is at the parking lot
            parking.push(carPlateNumber); // if it does not add it 
           }
        }
        else if (command === "OUT"){
           if (parking.includes(carPlateNumber)){ // check if the CAR PLATE NUMBER already is at the parking lot
            parking = parking.filter(car => car !== carPlateNumber); // if it does remove it 
           }
        }
    }

    let sortedParking = parking.sort((a, b) => a.localeCompare(b)); // sort the array 

    if (sortedParking.length === 0){
        console.log("Parking Lot is Empty");
    } else {
        sortedParking.forEach(carPlateNumber => {
            console.log(carPlateNumber.trimEnd());
        });
    }
}

function fancySolve(array){
    const parkingLot = {};

    for (const line of array) {
        const [direction,carPlateNumber] = line.split(", ");

        direction === "IN"
        ? parkingLot[carPlateNumber] = true
        : delete parkingLot[carPlateNumber]
    }

    Object.keys(parkingLot)
    .sort((a,b) => a.localeCompare(b))
    .forEach(carPlateNumber => console.log(carPlateNumber));
}

solve(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']
);

solve(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA']
);