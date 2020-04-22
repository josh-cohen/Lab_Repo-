'use strict'

const account = {
  balance: 0,
  deposits: 0,
  withdrawals: 0,
  withdrawal: function (amount) {
    if (this.balance >= amount) {
      this.balance -= amount
      this.withdrawals += amount
    }
  },
  deposit: function (amount) {
    this.balance += amount
    this.deposits += amount
  },
  summary: function () {
    return (`Balance is ${this.balance}. Total deposits have been ${this.deposits}. Total withdrawals have been ${this.withdrawals} `)
  }
}

const Josh = account
Josh.deposit(1000)
Josh.withdrawal(50)

Josh.withdrawal(1000)

console.log(Josh.summary())

console.log(account.summary()) // same thing
