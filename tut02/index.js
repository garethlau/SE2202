/* TASK 1 */
const printHello = (name) => {
    let message = "Hello";
    console.log(message + " " + name);
}

printHello("gareth");
const printGreeting = printHello;
printGreeting("gareth");

/* TASK 2 */
const printVertical = (str) => { 
    str.split('').forEach(c => {
        // for each letter in the string, log it
        console.log(c);
    });
}

printVertical("gareth");

const printWithSpaces = (str) => {
    let spaces = "";
    str.split('').forEach(c => {
        // for each letter in the string, concatenate it and a space to the result
        spaces += c + " ";
    });
    // log the result
    console.log(spaces);
}

printWithSpaces("gareth")

const printInReverse = (str) => {
    let reversed = "";
    // split the string into an array then reverse the elements
    // for each letter in the array, concatenate it to the result
    str.split('').reverse().forEach(c => {
        reversed += c;
    });
    console.log(reversed);
};

printInReverse("gareth");

const genericPrinter = (str, printer) => {
    printer(str);
};

genericPrinter("gareth", printVertical);
genericPrinter("gareth", printWithSpaces);
genericPrinter("gareth", printInReverse);

/* TASK 3 */
const calenderName = (str) => {
    const monthName = (number) => {
        const months = {
            1: "Janurary",
            2: "February",
            3: "March",
            4: "April",
            5: "May",
            6: "June",
            7: "July",
            8: "August",
            9: "September",
            10: "October",
            11: "November",
            12: "December"
        };
        // handle unknown
        if (months[number] === undefined) return "_mUnknown";
        return "_m" + months[number];
    };
    const dayName = (number) => {
        const daysOfWeek = {
            1: "Monday",
            2: "Tuesday",
            3: "Wednesday",
            4: "Thursday",
            5: "Friday",
            6: "Saturday",
            7: "Sunday"
        };
        // handle unknown
        if (daysOfWeek[number] === undefined) return "_dUnknown";
        return "_d" + daysOfWeek[number];
    };

    if (str == "m") return monthName;
    if (str == "d") return dayName;
};

const findNameOfTheMonth = calenderName("m");
console.log(findNameOfTheMonth(2));

const findNameOfTheDay = calenderName("d");
console.log(findNameOfTheDay(2));

/* TASK 4 */
const powerOf = (power) => {
    const raiseToPower = (number) => {
        let temp = 1;
        for (let i = 0; i < power; i++) {
            temp = temp * number;
        }
        return temp;
    }
    return raiseToPower;
}

const p2 = powerOf(2);
const p3 = powerOf(3);
const p4 = powerOf(4);

console.log(p2(5));
console.log(p3(5));
console.log(p4(5));
