// Write a JavaScript program that creates a class called 'Employee' with properties for name and salary. Include a method to calculate annual salary. Create a subclass called 'Manager' that inherits from the 'Employee' class and adds an additional property for department. Override the annual salary calculation method to include bonuses for managers. Create two instances of the 'Manager' class and calculate their annual salary.
"use strict";
class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }
  annualsalary() {
    return this.salary * 12;
  }
}
class Manager extends Employee {
  constructor(name, salary, department) {
    super(name, salary);
    this.department = department;
  }
  annualsalary() {
    return super.annualsalary() + 5000;
  }
}
const manager1 = new Manager("Het", 5000, "Developer");
const manager2 = new Manager("Rohit", 2500, "CEO");
console.log(manager1.annualsalary());
console.log(manager2.annualsalary());
