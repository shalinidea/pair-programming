class Account {
  constructor(balance) {
    this.initial = balance;
    this.statements = [];
  }

  balance() {
    return this.initial;
  }
  deposit(depositValue) {
    if (depositValue <= 0) {
      throw new Error("invalid amount");
    }
    this.initial += depositValue;
    const statement = {
      Date: Date(Date.now()),
      Amount: `+${depositValue}`,
      balance: this.initial
    };
    this.statements.push(statement);
  }

  withdraw(amount) {
    if (this.initial <= amount) {
      throw new Error("amount withdraw exceeds account balance");
    }
    this.initial -= amount;

    const statement = {
      Date: Date(Date.now()),
      Amount: `-${amount}`,
      balance: this.initial
    };
    this.statements.push(statement);
    return amount;
  }

  statement() {
    for (let statement of this.statements) {
      console.log(statement);
    }
  }
}

module.exports = Account;
