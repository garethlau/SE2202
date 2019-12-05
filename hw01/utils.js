let moduleLoader = new Promise((resolve, reject) => {
    try {
        const Item = require('./Item.js');
        resolve(Item);
    }
    catch {
        reject("Module not foundengeug");
    }
});

module.exports = moduleLoader.then(Item => {
    /**
     * Returns sum of two numbers rounded to the nearest hundredth
     * @param {Number} num1 
     * @param {Number} num2 
     */
    const safeAdd = (num1, num2) => {
        return Math.round((num1 + num2) * 100) / 100;
    }

    /**
     * Returns number rounded to the nearest hundredth
     * @param {Number} num - Number to be rounded
     */
    const round = (num) => {
        return Math.round(num * 100) / 100;
    }

    /**
     * Creates a list of Items
     * @param {Number} num - Number of items to create
     * @param {Number} ratio - Approximate ration of expenses to one income
     */
    const createItems = (num, ratio) => {
        let items = [];
        for (let i = 0; i < num; i++) {
            let isExpense = false;
            if (Math.random() < ratio) isExpense = true;
            // items.push(new Item(Math.round((Math.random() * 100) * 100) / 100, isExpense, Math.round(Math.random() * 11 + 1)));
            items.push(new Item(round(Math.random() * 100), isExpense, Math.round(Math.random() * 11 + 1)));
        }
        let count = 0;
        let expense = 0;
        let income = 0;
        items.forEach(item => {
            // item.printInfo();
            if (item.month == 1) count++;
            if (item.isExpense) expense += item.amount;
            else income += item.amount;
        });
        console.log(`Expense: ${expense} Income: ${income}`);
        return items;
    }
    return {safeAdd: safeAdd, createItems: createItems}
    
}).catch(err => {
    console.error(err);
    return {err: err, message: "Module not found in Utils.js"};
});


/*
const utils = {
    safeAdd: safeAdd,
    createItems: createItems
}
module.exports = utils;

*/