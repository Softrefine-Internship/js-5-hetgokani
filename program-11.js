// Write a JavaScript program that creates a class called BankAccount with properties for account number, account holder name, and balance. Include methods to deposit, withdraw, and transfer money between accounts. Create multiple instances of the BankAccount class and perform operations such as depositing, withdrawing, and transferring money.
"use strict";
class bankaccount {
  constructor(accnum, accname, balance) {
    this.accnum = accnum;
    this.accname = accname;
    this.balance = balance;
  }
  deposit(amount) {
    this.balance += amount;
  }
  withdraw(amount) {
    if (this.balance >= amount) {
      this.balance -= amount;
    } else {
      console.log("Not enough balance");
    }
  }
  transfer(amount, target) {
    if (this.balance >= amount) {
      this.balance -= amount;
      target.balance += amount;
    } else {
      console.log("Not enough balance for transfer");
    }
  }
}
let account1 = new bankaccount("001", "het", 2000);
let account2 = new bankaccount("002", "rahul", 1000);
account1.deposit(500);
account1.withdraw(300);
account1.transfer(200, account2);
console.log(account1.balance);
console.log(account2.balance);
