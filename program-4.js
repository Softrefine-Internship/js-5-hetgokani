// Write a JavaScript program that creates a class called "BankAccount" with properties for account number and balance. Include methods to deposit and withdraw money from the account. Create some instances of the "BankAccount" class, deposit some money, and withdraw a portion of it.
"use strict";
class BankAccount {
  constructor(number, balance) {
    this.number = number;
    this.balance = balance;
  }
  deposit(amount) {
    if (amount > 0) this.balance += amount;
  }
  withdraw(amount) {
    if (amount > 0 && amount <= this.balance) this.balance -= amount;
  }
  info() {
    console.log(this.number, this.balance);
  }
}
const acc1 = new BankAccount("het", 500);
const acc2 = new BankAccount("h123", 300);
acc1.deposit(200);
acc1.withdraw(150);
acc2.deposit(100);
acc2.withdraw(50);
acc1.info();
acc2.info();
