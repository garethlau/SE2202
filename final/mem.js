let x = 10;
let sum = (() => x + 2)() + (() => x + 3)() + ((x) => x + 2)()
console.log(sum);