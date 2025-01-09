// Write a JavaScript program to create a class called "Person" with properties for name, age and country. Include a method to display the person's details. Create two instances of the 'Person' class and display their details.
"use strict";
class Person {
  constructor(name, age, country) {
    this.name = name;
    this.age = age;
    this.country = country;
  }
  info() {
    console.log(this.name, this.age, this.country);
  }
}
const person1 = new Person("Alice", 25, "USA");
const person2 = new Person("Bob", 30, "Canada");
person1.info();
person2.info();
