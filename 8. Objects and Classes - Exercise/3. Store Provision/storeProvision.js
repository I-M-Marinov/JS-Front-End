/* 
You will receive two arrays. The first array represents the current stock of the local store. 
The second array will contain products that the store has ordered for delivery.
The following information applies to both arrays:
Every even index will hold the name of the product and every odd index will hold the quantity of that product. 
The second array could contain products that are already in the local store. 
If that happens increase the quantity for the given product. 
You should store them into an object, and print them in the following format: (product -> quantity)
All of the arrays’ values will be strings.
*/

function solve(array1,array2){

    let itemsInStock = {};
    

    for (let i = 0; i < array1.length; i+=2) {
        let product = array1[i];
        let quantity = Number(array1[i+1]);
        itemsInStock[product] = quantity;  
    }
    for (let i = 0; i < array2.length; i+=2) {
        let product = array2[i];
        let quantity = Number(array2[i+1]);

        if(!itemsInStock[product]){
            itemsInStock[product] = 0;
        }
        itemsInStock[product] += quantity;

    }

    for (const key in itemsInStock) {
        console.log(`${key} -> ${itemsInStock[key]}`);
    }

}

solve(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']); 

console.log(`NEXT -------------------> `)

solve(['Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'],
    ['Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30']);