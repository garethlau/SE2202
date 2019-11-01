class Rabbit {
    constructor(type) {
        // constructor values and methods belong to the object
        this.type = type;
        this.name = "default name";
        this.printName = () => {
            console.log(this.name);
        }
        this.printType = function() {
            console.log(this.type);
        }
    }
    // speak is basically a static function that belongs to the prototype
    speak(line) {
        console.log(`The ${this.type} rabbit says ${line}`);
    }
}

let killerRabbit = new Rabbit("killer");
let blackRabbit = new Rabbit("black");
killerRabbit.name = "Killer Rabbit";
killerRabbit.printName();
killerRabbit.printType();
killerRabbit.speak("hello");

Rabbit.prototype.teeth = "small";   // we can add properties after we initialize objects
console.log(killerRabbit.teeth);    
console.log(blackRabbit.teeth);


class Temperature {
    constructor(celsius) {
        this.celsius = celsius;
    }
    /**
     * For get and set methods, we need to implement both methods.
     * With these, we can use these functions as if they we were directly accessing
     * the properties of the instance.
     */
    get fahrenheit() {
        // console.log(this);   // logs the instance of Temperature
        return this.celsius * 1.8 + 32;
    }
    set fahrenheit(value) {
        this.celsius = (value - 32) / 1.8;
    }
    // called on the class, not on the isntances of the class
    // belongs on the constructor function, not the prototype, not the instance
    static fromFahrenheit(value) {
        // console.log(this.toString());    // logs the src of Temperature class
        return new Temperature((value - 32) / 1.8);
    }
    
}

let temp = new Temperature(22);
console.log(temp.fahrenheit);
// console.log(temp.fahrenheit());  // -> undefined function farenheit 
temp.fahrenheit = 86;
console.log(temp.celsius);  // we can still access the property directly
let temp2 = Temperature.fromFahrenheit(20);
console.log(temp2.celsius);
