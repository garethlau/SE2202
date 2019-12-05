const utils = require('./utils.js');
const tests = require('./testCases.js');

// Create list of items
let items = tests.testOne;

(function main(items) {  
    let months = {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 0,
        7: 0,
        8: 0, 
        9: 0,
        10: 0,
        11: 0,
        12: 0
    }

    let q = [];
    let accounted = [];

    // Determine the budget in each month
    items.forEach(item => {
        if (!item.isExpense) {
            months[item.month] = utils.safeAdd(months[item.month], item.amount);
        }
        else q.push(item);
    });

    // Sort the expenses so larger expenses are handled first
    q.sort((a, b) => {
        return b.amount - a.amount;
    });

    while (q.length > 0) {
        let item = q.shift();
        // console.log(item);
        if (months[item.month] > item.amount) {
            // The item can be expensed in the described month
            months[item.month] -= item.amount;
            accounted.push(item);
        }
        else {
            // We don't have capacity for this item in the described month
            // Assume that the next month will have capacity and let it be expensed later
            // by adding it to the end of the queue.
            item.month = ((item.month + 1) % 13) + 1;
            q.push(item);
        }
    }

    // Log the remaining balance in each month
    for (let key in months) {
        console.log(`${key} : ${utils.safeAdd(months[key], 0)}`);
    }

})(items)



/**
 * Helper function to output list of items to txt file
 * @param {Array of Item} items 
 */
const generateTestCase = items => {
    const fs = require('fs');
    let output = [];
    items.forEach(item => {
        output.push(JSON.stringify(item));
    })
    fs.writeFile("out.txt", output, (err) => {
        if (err) console.log("error", err);
        console.log("File saved")
    })
}
// generateTestCase(utils.createItems(100, 0.3))