// SEPTEMBER 23, 2019

/* RECURSION */

const fib = (num) => {
    if (num == 1) return 0;
    if (num == 2) return 1;
    return fib(num - 1) + fib(num - 2);
}

const power = (num, pow) => {
    if (pow == 0) return 1;
    if (pow == 1) return num;
    return num * power(num, pow - 1);
}

const binarySearch = (nums, low, high, target) => {
    if (high < low) return -1;
    let middle = low + (high - low) / 2;
    if (target == nums[middle]) return middle;
    else if (target > nums[middle]) return binarySearch(nums, middle + 1, high, target);
    else return binarySearch(nums, low, middle - 1, target);
}

let nums = [1,5,6,7,9,25,62];
console.log(binarSearch(nums, 0, nums.length, 5))

console.log(power(5, 2));
console.log(fib(1));
console.log(fib(2))
console.log(fib(3))
console.log(fib(7))
