class BankAccount {
    balance: number = 1000;
    deposit(amount: number) {
        this.balance = this.balance + amount;
    }
    withdraw(amount: number) {
        this.balance = this.balance - amount;
    }
    displayBalance() {
        console.log("Balance:", this.balance);
    }
}
let account = new BankAccount();
account.deposit(500);
account.withdraw(200);
account.displayBalance();