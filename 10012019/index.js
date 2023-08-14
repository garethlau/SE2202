/* OCTOBER 1st, 2019 */

const sum = (range) => {
    let sum = 0;
    range.forEach(num => sum+= num);
    return sum;
}

console.log(sum([1,2,3,4]));

const greaterThan = (n) => {
    return m => m > n;
}

let greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));

const noisy = (f) => {
    return (...args) => {
        console.log("calling with ", args);
        let result = f(...args);
        console.log("called with ", args, ", returned ", result)
        return result;
    }
}

noisy(Math.min)(3,2,1);


const unless = (test, then) => {
    if (!test) then();
}

unless((5 < 3), () => console.log("5 is greater than 3"));


const filter = (array, test) => {
    let passed = []
    for (let element of array) {
        if (test(element)) {
            passed.push(element);
        }
    }
    return passed;
}

