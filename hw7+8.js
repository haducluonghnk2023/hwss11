"use strict";
class Account {
    constructor(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
    deposit(amount) {
        this.balance += amount;
    }
    withdraw(amount) {
        if (amount > this.balance) {
            console.log("Số dư không đủ để rút.");
        }
        else {
            this.balance -= amount;
        }
    }
}
class SavingsAccount extends Account {
    constructor(accountNumber, balance, interestRate) {
        super(accountNumber, balance);
        this.interestRate = interestRate;
    }
    calculateInterest() {
        const monthlyInterest = (this.balance * (this.interestRate / 100)) / 12;
        return monthlyInterest;
    }
}
class CheckingAccount extends Account {
    constructor(accountNumber, balance, overdraftLimit) {
        super(accountNumber, balance);
        this.overdraftLimit = overdraftLimit;
    }
    withdraw(amount) {
        const totalWithdrawal = this.balance - amount;
        if (totalWithdrawal >= -this.overdraftLimit) {
            this.balance -= amount;
            console.log("Rút tiền thành công.");
        }
        else {
            console.log("Vượt quá hạn mức rút tiền.");
        }
    }
}
// Tạo một tài khoản tiết kiệm
const savingsAccount = new SavingsAccount("SA123456", 1000, 5);
// In ra tiền lãi hàng tháng trong tài khoản đó
const monthlyInterest = savingsAccount.calculateInterest();
console.log("Tiền lãi hàng tháng:", monthlyInterest);
// Gửi thêm tiền vào tài khoản và in lại xem tiền lãi hàng tháng có tăng không
savingsAccount.deposit(500); // Gửi thêm 500 vào tài khoản
const monthlyInterestAfterDeposit = savingsAccount.calculateInterest();
console.log(savingsAccount);
console.log(111111111111111, "Tiền lãi hàng tháng sau khi gửi thêm tiền:", monthlyInterestAfterDeposit);
// Tạo một tài khoản kiểm tra với số dư ban đầu là 1000 và hạn mức rút vượt quá là -500
const checkingAccount = new CheckingAccount("CA789012", 1000, 500);
// Kiểm tra rút quá số tiền trong tài khoản
console.log("Kết quả rút 1200:");
checkingAccount.withdraw(1200); // Kết quả: Rút tiền thành công, số dư sau khi rút là -200.
console.log(1111111111111111);
// Kiểm tra vượt quá hạn mức cho phép
console.log("Kết quả rút 400:");
checkingAccount.withdraw(400); // Kết quả: Vượt quá hạn mức rút tiền.
