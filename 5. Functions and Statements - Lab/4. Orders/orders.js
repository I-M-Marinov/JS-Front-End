/* 
Write a function that calculates the total price of an order and prints it on the console. 
The function should receive one of the following products: coffee, coke, water, snacks; and a quantity of the product. 
The prices for a single piece of each product are: 

•	coffee - 1.50
•	water - 1.00
•	coke - 1.40
•	snacks - 2.00

Print the result formatted to the second decimal place.

                Example
                                    Input	            Output
                                    "water", 5	            5.00
                                    "coffee", 2	            3.00
*/

function solve(product,quantity){

    switch (product) {
        case "coffee":
            product = 1.50;
            break;
        case "water":
            product = 1.00;
            break;
        case "coke":
            product = 1.40;
            break;
        case "snacks":
            product = 2.00;
            break;
    }

    let result = (product * quantity).toFixed(2);

    console.log(result);
}

solve("water", 5);
solve("coffee", 2);