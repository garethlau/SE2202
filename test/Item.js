// Item class
class Item {
    constructor(amount, isExpense, month) {
        this.amount = amount;
        this.isExpense = isExpense;
        this.month = month;
    }
    printInfo() {
        console.log(`Month: ${this.month} Amount: ${this.amount} isExpense: ${this.isExpense}`)
    }
}

module.exports = Item;