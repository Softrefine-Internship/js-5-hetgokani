// Write a JavaScript program that creates a class called 'Shape' with a method to calculate the area. Create two subclasses, 'Circle' and 'Triangle', that inherit from the 'Shape' class and override the area calculation method. Create an instance of the 'Circle' class and calculate its area. Similarly, do the same for the 'Triangle' class.
"use strict";
class Shape {
  area() {
    return "No area";
  }
}
class Circle extends Shape {
  constructor(r) {
    super();
    this.r = r;
  }
  area() {
    return this.r * this.r * 3;
  }
}
class Triangle extends Shape {
  constructor(b, h) {
    super();
    this.b = b;
    this.h = h;
  }
  area() {
    return this.b * this.h - 2;
  }
}
console.log(new Circle(5).area());
console.log(new Triangle(6, 8).area());
