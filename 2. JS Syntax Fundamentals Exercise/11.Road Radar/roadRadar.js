/* 
Write a function that determines whether a driver is within the speed limit. 
You will receive the speed and the area. Each area has a different limit: 

•	On the motorway, the limit is 130 km/h
•	On the interstate, the limit is 90 km/h
•	In the city, the limit is 50 km/h 
•	Within a residential area, the limit is 20 km/h

If the driver is within the limits, there should be a printed speed and the speed limit. 
                `Driving {speed} km/h in a {speed limit} zone`

If the driver is over the limit, however, your function should print the severity of the infraction and the difference in speeds. 
`The speed is {difference} km/h faster than the allowed speed of {speed limit} - {status}`

For speeding up to 20 km/h over the limit, the status should be speeding.

For speeding up to 40 km/h over the limit, the status should be excessive speeding.

For anything else, status should be reckless driving.

The input comes as 2 string parameters. The first element is the current speed (number), the second element is the area.

The output should be printed on the console.

*/


function radar(speed,place){
    let speedLimit = 0;
    let speedDifference = 0;
    let status = "";
    if (place == "motorway"){
        speedLimit = 130;
    } else if (place =="interstate"){
        speedLimit = 90;
    } else if(place == "city"){
        speedLimit = 50;
    } else if (place == "residential"){
        speedLimit = 20;
    }


    if (speed > speedLimit){
        speedDifference = speed - speedLimit;
        if (speedDifference <= 20){
            status = "speeding";
        } else if (speedDifference > 20 && speedDifference <=40){
            status = "excessive speeding";
        } else if (speedDifference > 40){
            status = "reckless driving";
        }
        console.log(`The speed is ${speedDifference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);

    } else if (speed <= speedLimit){
        console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
    }
}

radar(40, 'city');
radar(21, 'residential');
radar(120, 'interstate');
radar(200, 'motorway');