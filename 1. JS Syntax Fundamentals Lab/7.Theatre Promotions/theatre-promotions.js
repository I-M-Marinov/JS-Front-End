/* 
A theatre is doing a ticket sale, but they need a program to calculate the price of a single ticket. 
If the given age does not fit one of the categories, you should print "Error!".  You can see the prices in the table below:
Day / Age			
            0 <= age <= 18          18 < age <= 64          64 < age <= 122
Weekday	        12$	                    18$	                    12$
Weekend	        15$	                    20$	                    15$
Holiday	        5$	                    12$	                    10$

*/

function solve(day,age){
    let price = 0;
    let anError = false;

    if (age >= 0 && age <=18){
        if (day == "Weekday"){
            price = 12;
        } else if (day == "Weekend"){
            price = 15;
        } else if (day == "Holiday"){
            price = 5;
        }
    } else if (age > 18 && age <=64){
        if (day == "Weekday"){
            price = 18;
        } else if (day == "Weekend"){
            price = 20;
        } else if (day == "Holiday"){
            price = 12;
        }
    } else if (age > 64 && age <=122){
        if (day == "Weekday"){
            price = 12;
        } else if (day == "Weekend"){
            price = 15;
        } else if (day == "Holiday"){
            price = 10;
        }
    } else {
        anError = true;
    }

    if (anError){
        console.log("Error!" );
    } else{
        console.log(`${price}$`);
    }
}

solve('Weekday', 42);
solve('Holiday', -12);
solve('Holiday', 15);