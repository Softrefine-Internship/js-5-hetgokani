// Write a JavaScript program that creates a class called University with properties for university name and departments. Include methods to add a department, remove a department, and display all departments. Create an instance of the University class and add and remove departments.
"use strict";
class university {
  constructor(name) {
    this.name = name;
    this.departments = [];
  }
  adddep(department) {
    this.departments.push(department);
    console.log(`${department} added.`);
  }
  removedep(department) {
    const index = this.departments.indexOf(department);
    if (index !== -1) {
      this.departments.splice(index, 1);
      console.log(`${department} removed.`);
    } else {
      console.log(`${department} not found.`);
    }
  }
  showdeps() {
    if (this.departments.length > 0) {
      console.log(`${this.name} has the following departments:`);
      this.departments.forEach((dep) => {
        console.log(dep);
      });
    } else {
      console.log(`${this.name} has no departments.`);
    }
  }
}
let uni = new university("Atmiya University");
uni.adddep("Computer Science");
uni.adddep("Electrical Engineering");
uni.adddep("Civil Engineering");
uni.showdeps();
uni.removedep("Electrical Engineering");
uni.showdeps();
