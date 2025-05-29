class BankAccount {
    private balance: number

    constructor(balance: number) {
        this.balance = balance;
    }

    deposit(amount: number): void {
        this.balance += amount;
    }

    withdraw(amount: number): void {
        if (this.balance >= amount) {
            this.balance -= amount;
        } else {
            console.log("You don't have enought money in your account");
        }
    }

    getBalance(): number {
        return this.balance
    }
}


const account = new BankAccount(100);
account.deposit(50);
account.withdraw(30);
console.log(account.getBalance());

const account2 = new BankAccount(20);
account.withdraw(30);
console.log(account.getBalance());

