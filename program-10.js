// Write a JavaScript program that creates a class called Product with properties for product ID, name, and price. Include a method to calculate the total price by multiplying the price by the quantity. Create a subclass called PersonalCareProduct that inherits from the Product class and adds an additional property for the warranty period. Override the total price calculation method to include the warranty period. Create an instance of the PersonalCareProduct class and calculate its total price.
"use strict";
class product {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }

  totalprice(quantity) {
    return this.price * quantity;
  }
}
class personalcareproduct extends product {
  constructor(id, name, price, warranty) {
    super(id, name, price);
    this.warranty = warranty;
  }
  totalprice(quantity) {
    let baseprice = super.totalprice(quantity);
    let warrantycharge = this.warranty * 40;
    return baseprice + warrantycharge;
  }
}
const item = new personalcareproduct("123", "shampoo", 300, 3);
const quantity = 3;
const total = item.totalprice(quantity);
console.log(`total price for ${quantity} units of ${item.name} is ₹${total}`);
