/* 
You’re tasked to create and print objects from a text table. 
You will receive the input as an array of strings, where each string represents a table row, with values on the row separated by pipes " | " and spaces.
The table will consist of exactly 3 columns "Town", "Latitude" and "Longitude". 
The latitude and longitude columns will always contain valid numbers. Check the examples to get a better understanding of your task.
The output should be objects. Latitude and longitude must be parsed to numbers and formatted to the second decimal point!
*/

function solve(stringarray){

    let cities = {};

    for (const towns of stringarray) {
        let citiesTokens = towns.split(",");
        
        for (const city of citiesTokens) {
            
            let tokens = city.split(" | ");
            let latitudeNum = parseFloat(tokens[1]).toFixed(2); 
            let longitudeNum = parseFloat(tokens[2]).toFixed(2); 

            cities = {
                town: tokens[0],
                latitude: latitudeNum,
                longitude: longitudeNum,
            };
        }
        console.log(cities);
    }
}



solve(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']
);

solve(['Plovdiv | 136.45 | 812.575']);