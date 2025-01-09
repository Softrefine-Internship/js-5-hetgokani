// Write a JavaScript program that creates a class `Book` with properties for title, author, and publication year. Include a method to display book details. Create a subclass called 'Ebook' that inherits from the 'Book' class and includes an additional property for book price. Override the display method to include the book price. Create an instance of the 'Ebook' class and display its details.
"use strict";
class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }
  display() {
    console.log(
      this.title + " by " + this.author + ", published in " + this.year
    );
  }
}
class Ebook extends Book {
  constructor(title, author, year, price) {
    super(title, author, year);
    this.price = price;
  }
  display() {
    console.log(
      this.title +
        " by " +
        this.author +
        ", published in " +
        this.year +
        ", Price: ₹" +
        this.price
    );
  }
}
const ebook = new Ebook("C++", "David", 2025, 299);
ebook.display();
