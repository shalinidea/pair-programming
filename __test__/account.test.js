const Account = require("../account");

describe("Test the account balance", () => {
  let account;
  beforeEach(() => {
    account = new Account(0);
  });

  it("should be able to return the account balance when initialized", () => {
    expect(account.balance()).toBe(0);
  });

  it("should be able to deposit money into the account", () => {
    const insertValue = 200;
    account.deposit(insertValue);
    expect(account.balance()).toBe(200);
  });

  it("should be able to deduct the specified amout from the account", () => {
    const insertValue = 200;
    const withdrawalAmount = 20;
    account.deposit(insertValue);
    const withDraw = account.withdraw(withdrawalAmount);
    expect(withDraw).toBe(20);
    expect(account.balance()).toBe(180);
  });

  it("should ensure the withdraw method throw an error when the amount with exceed account balance", () => {
    try {
      const insertValue = 200;
      const withdrawAmount = 220;
      account.deposit(insertValue);
      account.withdraw(withdrawAmount);
    } catch (error) {
      expect(error.message).toEqual("amount withdraw exceeds account balance");
    }
  });

  it("should only deposit values greater than 0 ", () => {
    try {
      const insertValue = -100;
      account.deposit(insertValue);
    } catch (error) {
      expect(error.message).toEqual("invalid amount");
    }
  });

  it("should log the statements when withdraw and deposit methods are called ", () => {
    const insertValue = 200;
    const withdrawalAmount = 20;
    account.deposit(insertValue);
    const withDraw = account.withdraw(withdrawalAmount);
    account.statement();
  });
});
