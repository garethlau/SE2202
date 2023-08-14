/* SEPTEMBER 19, 2019 */

/*
More about functions
*/

const sayHello = () => {
    console.log("hello");

    const sayWorld = () => {
        // we only have access to sayWorld inside sayHello
        console.log("world");
    }
    sayWorld();

}

sayHello();
// sayWorld();  -> not defined

/* OPTIONAL PARAMETER */
const square = (x) => {
    return x * x;
}

console.log(square(4, 10)); // -> extra parameters will be ignored

/* CLOSURES */
/*
Local bindings are re-created everytime a function is called

Being able to reference a specific instance of a local binding in an enclosing scope is called closure
*/
const add = () => {
    let counter = 0;
    counter += 1;
    return counter;
}

// all counters will start at 0
add();  // -> counter = 1
add();  // -> counter = 1
add();  // -> counter = 1


const saySomething = () => {
    console.log("something");
}
saySomething();
let saySomethingAgain = saySomething;
saySomethingAgain();

// we can pass functions as paremeters to other functions
const sayHi = (name) => {
    console.log("Hi, " + name);
}
const sayBye = (name) => {
    console.log("Bye, " + name);
}
const talk = (sayWhat, toWho) => {
    sayWhat(toWho);
}
talk(sayHi, "John");    // function passed as paraemeter
talk(sayBye, "Emily");

// we can also return functions
const letMeTalk = (whatToSay) => {
    const sayHi = (name) => {
        console.log("Hi, " + name);
    }
    const sayBye = (name) => {
        console.log("Bye, " + name); 
    }
    if (whatToSay == "hi") return sayHi;
    else return sayBye;
}
let iWantToSayHi = letMeTalk("hi");
iWantToSayHi("Paul");

let iWantToSayBye = letMeTalk("bye");
iWantToSayBye("Rosa");

const scope = () => {
    console.log(`The future says ${future()}`);
    // console.log(`The future future says ${furtherFuture()}`) // furtherFuture not defined
    function future() {
        return "nice meme";
    }
    const furtherFuture = () => {
        return "nice mememememmeme";
    }
}
scope();