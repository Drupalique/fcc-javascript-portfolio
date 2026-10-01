// Lab: Object Methods
// Practice adding methods to objects and using `this`.

const counter = {
  count: 0,
  increment() {
    this.count += 1;
    return this.count;
  },
  reset() {
    this.count = 0;
  },
};

counter.increment();
counter.increment();
counter.increment();
console.log(counter.count); // 3

counter.reset();
console.log(counter.count); // 0

const bankAccount = {
  balance: 100,
  deposit(amount) {
    this.balance += amount;
  },
  withdraw(amount) {
    if (amount > this.balance) {
      throw new Error("Insufficient funds");
    }
    this.balance -= amount;
  },
};

bankAccount.deposit(50);
bankAccount.withdraw(30);
console.log(bankAccount.balance); // 120

module.exports = { counter, bankAccount };
