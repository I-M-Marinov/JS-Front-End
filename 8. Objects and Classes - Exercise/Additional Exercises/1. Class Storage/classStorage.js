/* 
Create a class Storage. 
It should have the following properties, while the constructor should only receive a capacity:

•	capacity – a number that decreases when adding a given quantity of products to storage
•	storage – list of products (object). Each product should have:
o	name - a string
o	price – a number (price is for a single piece of product)
o	quantity – a number
•	totalCost – the sum of the cost of the products

The class should also have the following methods:
•	addProduct – a function that receives a product and adds it to the storage
•	getProcuts – a function that returns all the products in storage in JSON format, each on a new line

Paste only the class Storage in judge (Note: all names should be as described)
 */

function solve() {

    class Storage {
        constructor(capacity) {
            this.capacity = capacity;
            this.storage = {}; 
            this.totalCost = 0;
        }

        addProduct(product) {
            if (this.capacity >= product.quantity) {
                if (!this.storage[product.name]) {
                    this.storage[product.name] = product;
                } else {
                    if (this.capacity >= product.quantity) {
                        this.storage[product.name].quantity += product.quantity;
                    } else {
                        return false; 
                    }
                }
                this.capacity -= product.quantity;
                this.totalCost += product.price * product.quantity;
                return true;
            } else {
                return false; 
            }
        }


        getProducts() {
            const productsArray = [];
            for (const productName in this.storage) {
                productsArray.push(JSON.stringify(this.storage[productName]));
            }
            this.productsArray = productsArray;
            return productsArray.join('\n');
        }

    }

    let productOne = {name: 'Tomato', price: 0.90, quantity: 19};
    let productTwo = {name: 'Potato', price: 1.10, quantity: 10};
    let productThree = {name: 'Bread', price: 1.10, quantity: 8};
    let storage = new Storage(30);
    storage.addProduct(productOne);
    console.log(storage.totalCost);
    storage.addProduct(productTwo);
    console.log(storage.totalCost);
    storage.addProduct(productThree);
    console.log(storage.totalCost);
    console.log(storage.getProducts());
    console.log(storage.capacity);

}

solve();

