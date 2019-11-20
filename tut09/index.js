// TASK 1
let gradeObj = (function() {
    // create private array
    let _studentGrades = [60, 70, 80, 90];

    /**
     * Returns the average of _studentGrades
     */
    const calcAverage = () => {
        let sum = 0;                        // initialize a variable to store the current sum
        _studentGrades.forEach(e => {       // iterate throug each grade
            sum += e;                       // add the grade to the sum
        });
        return sum / _studentGrades.length; // divide the sum by the number of elements and return
    }
    
    /**
     * Returns the max of _studentGrades
     */
    const calcMax = () => {
        let max = Number.MIN_SAFE_INTEGER;  // initialize a variable to store max
        _studentGrades.forEach(e => {       // iterate through each grade
            max = Math.max(max, e);         // check if this is the current max
        });
        return max;                         // return the max grade
    }

    // TASK 2
    return {                                // return functions that need to be publicly visible
        calcAverage: calcAverage,
        calcMax: calcMax,
    }
})();

// Test average grade calculation and max calculation
console.log(`Average: ${gradeObj.calcAverage()}  Max: ${gradeObj.calcMax()}`);


// TASK 3
let gradeObjWithMutators = (function() {
    // create private array
    let _studentGrades = [65, 75, 70, 80];

    /**
     * Returns the average of _studentGrades
     */
    const calcAverage = () => {
        let sum = 0;                        // initialize a variable to store the current sum
        _studentGrades.forEach(e => {       // iterate throug each grade
            sum += e;                       // add the grade to the sum
        });
        return sum / _studentGrades.length; // divide the sum by the number of elements and return
    }
    
    /**
     * Returns the max of _studentGrades
     */
    const calcMax = () => {
        let max = Number.MIN_SAFE_INTEGER;  // initialize a variable to store max
        _studentGrades.forEach(e => {       // iterate through each grade
            max = Math.max(max, e);         // check if this is the current max
        });
        return max;                         // return the max grade
    }

    /**
     * Returns _studentGrades
     */
    const getGrades = () => {
        return _studentGrades;              // return the hidden _studentGrades array
    }

    /**
     * @param {Number} arr - Array to replace _studentGrades with. 
     */
    const setGrades = (arr) => {
        _studentGrades = arr;               // assign new array as _studentGrades
    }

    return {                                // return functions that need to be publicly visible
        calcAverage: calcAverage,
        calcMax: calcMax,
        getGrades: getGrades,
        setGrades: setGrades
    }
})();

// Test the publically visible get grades method to get the hidden _studentGrades array
console.log(`The grades are: ${gradeObjWithMutators.getGrades()}`);

// Set a new array as _studentGrades array
gradeObjWithMutators.setGrades([50, 55, 70, 75]);

// Test the publically visible get grades method to get the hidden _studentGrades array
console.log(`The grades are: ${gradeObjWithMutators.getGrades()}`);
