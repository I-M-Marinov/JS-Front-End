/* 
You are given a group of people, the type of the group, and the day of the week they are going to stay. 
Based on that information calculate how much they have to pay and print that price on the console. Use the table below. 
In each cell is the price for a single person. 
The output should look like that: `Total price: {price}`. The price should be formatted to the second decimal point.

            Friday	Saturday	Sunday
Students	8.45	9.80	10.46
Business	10.90	15.60	16
Regular	    15	    20	    22.50

There are also discounts based on some conditions:
·	Students – if the group is bigger than or equal to 30 people you should reduce the total price by 15%
·	Business – if the group is bigger than or equal to 100 people 10 of them can stay for free
·	Regular – if the group is bigger than or equal to 10 and less than or equal to 20 reduce the total price by 5%
Note: You should reduce the prices in that EXACT order.

*/

function vacationPrice(people, type, dayOfWeek) {
    let totalPrice = 0;
    let price = 0;

    if (type == "Students") {
        if (dayOfWeek == "Friday") {
            price = 8.45;
        } else if (dayOfWeek == "Saturday") {
            price = 9.80;
        } else if (dayOfWeek == "Sunday") {
            price = 10.46;
        }
        if (people >= 30) {
            totalPrice = (people * price) - ((people * price) * 0.15);
        } else {
            totalPrice = people * price;
        }
    } else if (type == "Business") {
        if (dayOfWeek == "Friday") {
            price = 10.90;
        } else if (dayOfWeek == "Saturday") {
            price = 15.60;
        } else if (dayOfWeek == "Sunday") {
            price = 16;
        }
        if (people >= 100) {
            totalPrice = (people - 10) * price;
        } else {
            totalPrice = people * price;
        }

    } else if (type == "Regular") {
        if (dayOfWeek == "Friday") {
            price = 15;
        } else if (dayOfWeek == "Saturday") {
            price = 20;
        } else if (dayOfWeek == "Sunday") {
            price = 22.50;
        }

        if (people >= 10 && people <= 20) {
            totalPrice = (people * price) - ((people * price) * 0.05);
        } else {
            totalPrice = people * price;
        }
    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}

vacationPrice(30, "Students", "Sunday");
vacationPrice(40, "Regular", "Saturday");
vacationPrice(102, "Business", "Sunday");


