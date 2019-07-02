var faker = require('faker');

var productName, price;

for(var i = 0; i <= 10; i++) {
    productName = faker.commerce.productName();
    price = faker.commerce.price();
    console.log(productName + " - $" + price);
}

