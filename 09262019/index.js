/* SEPTEMBER 26, 2019 */
let x = 5;
console.log(x.valueOf());
console.log(x.toPrecision(3));

console.log("coconuts".slice(4, 7));
console.log("LA".repeat(3));
let h = "hehe";
h.repeat(5);
console.log(h); // h is still "hehe"
h = h.repeat(5);
console.log(h); // h is now "hehe" repeated 5 times
console.log("one two three".indexOf("ee"));

let sentence = "Secretary birds specialize in stomping";
let words = sentence.split(" ");
console.log(words);
console.log(words.join(". "));

/* ARRAYS */
let listOfNumbers = [2, 3, 5, 6, 11];
console.log(listOfNumbers[2]);

let seq = [1,2,3];
seq.push(4);
console.log(seq);
seq.pop();
console.log(seq);

for (let elem of seq) {
    console.log(elem);
}

/* REST PARAMETER */
function max(...numbers) {
    let result = -Infinity;
    for (let number of numbers) {
        if (number > result) result = number;
    }
    return result;
}

const min = (...numbers) => {
    let result = Infinity;
    for (let number of numbers) {
        console.log("NUMBER IN MIN: ", number);
        if (number < result) result = number;
    }
    return result;
}

const addElemToMax = (elem, ...numbers) => {
    let result = -Infinity;
    console.log("elem", elem, "nunbers", numbers);
    for (let number of numbers) {   // watch out for of vs in !
        console.log("NUMBER: ", number);
        if (number > result) result = number;
    }
    return elem + result;
}
console.log(max(4, 1, 9, -2));
console.log(min(4, 1, 9, -2));
console.log(addElemToMax(10, 4, 1, 9, -2))

/* OBJECTS */
let courseOne = {
    name: "Scripting Languages",
    "credit hours": 3,
    classroom: "SEB2200",
    evaluation: {
        homeowrk: 20,
        tutorials: 15,
        midterm: 15,
        final: 50,
    }
}

console.log(courseOne.name);
console.log(courseOne["credit hours"]);

console.log(courseOne.evaluation.midterm);

console.log("classroom" in  courseOne); // -> true
delete courseOne.classroom;
console.log("classroom" in  courseOne); // -> false

/* 
In the above example, courseOne only stores a pointer to the actual object data.
Within the object data, nested arrays and objects are also stored elsewhere and
only the pointers are stored inside the object

This linked structure is really complicated for writing to files and sending
over networks.

ENTER JSON!!
*/

/* JSON */
/*
- Properties only grasp their value
- Only simple data expressions are allowed
- No function calls, bindings, anything that requires computation
*/

let dog = {
    name: "Doggy",
    age: 7,
    sayHello: () => console.log("hello"),
    nested: {
        name: "nested object"
    }
}
console.group(dog);
dog.sayHello();
let jDog = JSON.stringify(dog);
console.log(jDog);