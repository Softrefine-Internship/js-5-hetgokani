// Write a JavaScript program that creates a class called Bank with properties for bank names and branches. Include methods to add a branch, remove a branch, and display all branches. Create an instance of the Bank class and perform operations to add and remove branches.
"use strict";
class Bank {
  constructor(name) {
    this.name = name;
    this.branches = [];
  }
  addbranch(branch) {
    this.branches.push(branch);
    console.log(`${branch} branch added.`);
  }
  removebranch(branch) {
    const index = this.branches.indexOf(branch);
    if (index !== -1) {
      this.branches.splice(index, 1);
      console.log(`${branch} branch removed.`);
    } else {
      console.log(`${branch} branch not found.`);
    }
  }
  displaybranches() {
    if (this.branches.length > 0) {
      console.log(`${this.name} branches:`);
      this.branches.forEach((branch) => {
        console.log(branch);
      });
    } else {
      console.log(`${this.name} has no branches.`);
    }
  }
}
const bank = new Bank("SBI Bank");
bank.addbranch("Mumbai");
bank.addbranch("Delhi");
bank.addbranch("Bangalore");
bank.displaybranches();
bank.removebranch("Delhi");
bank.displaybranches();
