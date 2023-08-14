// "use strict" -> will result in errors if let is not used
const scope1 = () => {
    class Human {
        constructor(name, age) {
            this.name = name
            this.age = age
        }
        eat() {
            console.log(`${this.name} is eating`);
        }
    }

    let h1 = new Human("Gareth", 18);
    h1.eat()
    console.log("nice")
}

const scope2 = () => {
    let a = [1,2,3,4,5];
    a.forEach(e => console.log(e));
    
    console.log(a.filter(e => e % 2 == 0));

    let sum = a.reduce((acc, curr) => {
        return acc += curr;
    });
    console.log(sum);

    let b = a.map(e => {
        return e * 2;
    })
    console.log(b);


    let listObj = [{age: 10}, {age: 20}, {age: 30}]
    console.log(listObj.filter(o => {
        if (o.age >= 20) return true;
        else return false;
    }))
    console.log(listObj.map(o => {
        if (o.age >= 20) return "Nice"
        else return "not nice"
    }))


}


const scope3 =() => {
    if (true) console.log("TRUE")   // -> prints
    if (1) console.log("1 is true") // -> prints
    if (0) console.log("0 is true")
    if (null) console.log("null")
    if (NaN) console.log("NANA")
    if (Infinity) console.log("inf") // -> prints
}

const scope4 = () => {
    class Point {
        constructor(x, y) {
            this.x = x;
            this.y = y;
        }
        printInfo() {
            console.log(`X: ${this.x} Y: ${this.y}`)
        }
    }
    let p1 = new Point(3, 10);
    p1.printInfo()
    console.log(p1.x) // -> works
    
    class ColorPoint extends Point {
        constructor(x, y, color) {
            super(x, y);
            this.color = color;
        }
        getColor() {
            return this.color;
        }
    }
    let cp1 = new ColorPoint(1, 1, "red");
    cp1.printInfo();
    console.log(cp1.getColor())

    class HiddenPoint {
        constructor(x, y) {
            let _x = x;
            let _y = y;
            this.getX = function() {
                return _x
            };
            this.setX = function(newX) {
                _x = newX
            }
        }
    }
    let hp1 = new HiddenPoint(1, 40);
    console.log(hp1._x);    // undefined
    console.log(hp1.getX());
    hp1.setX(10);
    console.log(hp1.getX());

    let protoPot = {
        radius: 10,
        color: "red",
        printInfo() {
            console.log(`Radius: ${this.radius} Color: ${this.color}`)
        }
    }
    let pot1 = Object.create(protoPot);
    console.log(pot1)
    
    console.log(pot1.__proto__);
    pot1.__proto__.name = "nice";
    console.log(pot1.__proto__);
    pot1.printInfo()

    let pot2 = Object.create(protoPot);
    console.log(pot2.__proto__ == pot1.__proto__)
    pot2.name = "notnice"
    
    console.log(pot2)

    function Car(color, speed) {
        this.color = color;
        this.speed = speed;
        this.printInfo = function() {
            console.log(`Color: ${this.color} Speed: ${this.speed}`)
        }
        this.zoom = function() {
            console.log("ZOOM");
        }
    }
    let c1 = new Car("red", 10);
    c1.printInfo()
    c1.zoom();

    console.log(c1.__proto__)
    console.log(Car.prototype)
    console.log(c1.__proto__ == Car.prototype);

    let c2 = new Car("blue", 20);
    console.log(c1.__proto__ == c2.__proto__)

    function Container(publicValue) { 
        this.publicValue = publicValue;
        let _hiddenValue;
        this.getHidden = function() {
            return _hiddenValue;
        } 
        this.setHidden = function(nVal) {
            _hiddenValue = nVal;
        }
    }

    let con1 = new Container(3);
    console.log(con1.publicValue);
    console.log(con1._hiddenValue) // -> undefined
    con1.setHidden(10);
    console.log(con1.getHidden());
}

const scope5 = () =>  {
    class Employee {
        constructor(name, salary){
            this.name = name;
            this.salary = salary;
        }
        calcSalary() {
            return this.salary;
        }
    }
    class Manager extends Employee {
        constructor(name, salary, bonus) {
            super(name, salary);
            this.bonus = bonus;
        }
        calcSalary() {
            return super.calcSalary() + this.bonus;
        }
    }

    let m1 = new Manager("john", 2000, 500);
    console.log(m1.calcSalary());

    let e1 = new Employee("jane", 100);
    console.log(e1.calcSalary());

    class Janitor extends Employee {
        constructor(name, salary, location) {
            super(name, salary);
            this.location = location;
        }
        // this works
        getLocation = () => {
            return this.location;
        }
        calcSalary = () => {
            return super.calcSalary();
        }
        delaySalary() {
            setTimeout(() => {
                console.log(super.calcSalary())
            }, 500);
        }
        /*
        delay() {
            // error
            setTimeout(function() {
                console.log(super.calcSalary()) // there is no super here
            }, 1000);
        }
        */

    }

    let j1 = new Janitor("gareth", 100, "main floor");
    console.log(j1.getLocation())
    console.log(j1.calcSalary())
    j1.delaySalary();
    // j1.delay();
}

const scope6 = () => {
    let arr = ["nice", "meme", "kid", "other", "stuff", "here"];
    console.log(...arr);
    console.log(arr);
    
    const func3param = (one, two, three, ...rest) => {
        console.log("First parm:" + one);
        console.log("second parm:" + two);
        console.log("third parm:" + three);
        console.log("rest of the stuff", rest)
    }
    func3param(...arr);
}

const scope7 = () => {
    try {
        let x = 1 / 0;
        console.log(x); // -> infinity
        let y = 0;
        x = 13;
        let z = Number(13) / y;
        console.log(z);
        
    }
    catch (e) {
        console.log("THERE WAS AN ERROR")
        console.log(e);
    }

    /**
     * Error - diference between what is expected and what is output
     * Defect/fault - problem that caused the error
     * Mistake - human error that lead to the fault
     * 
     * mistake causes fault results in error
     */
    y = 13;
    function nice() {
        for (j = 0; j < 10; j++) {
            console.log(j);
        }
    }
    nice();
    const double = (num) => num * 2;
    for (i = 0; i < 10; i++) console.log(i)
}

function scope8() {
    console.log(x); // -> undefined
    // console.log(y); // -> error
    var x = 3
    console.log(x);
    let y;
    console.log(y); // -> undefined

    hoist();
    function hoist () {
        secret = "nicememe"
        console.log("hoisted")
    }
    // hoistArrow(); //-> cannot access error
    const hoistArrow = () => {
        console.log("hoist arrow")
    }

    // hoistMethod();  // -> not a function 
    var hoistMethod = function() {
        console.log("hoist method thing")
    }
    hoistMethod();


    console.log(global)
}

const scope9 = () => {
    let setup = (function() {
        let x = 10;
        let y = 20;
        let z = y / x;
        return {x, y, z}
    })();
    console.log(setup)

    console.log((function(a, b) {
        return a + b;
    })(10, 19))


}


const scope10 = () => {
    /******EGHEGHUEHG ???????????? */
    let x = 10;
    (function() {
        console.log(x / 2);
    })()

    (function(x) {
        console.log(x / 2)
    })(5)
}

const scope11 = () => {
    let p1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Value in resolve");
        }, 3000)
    })

    let p2 = new Promise((res, rej) => {
        setTimeout(() => {
            rej("BIG ERRRORORORIROIOR");
        },2000);
    });

    p1.then(val => console.log(val));
    console.log("This will print first")
    p2.then(val => console.log(val)).catch(err => console.log(err));

    const doHomework = (course, finished) => {
        setTimeout(() => {
            console.log(`Just finished ${course}`);
        }, 1000);
        setTimeout(() => {
            console.log("Now i can do whatevr i want")
            finished();
        }, 1500);
    }
    const playGame =() => {
        console.log("I am now playing games");
    }

    doHomework("calc", playGame);

    const promiseGenerator = (val, wait, error) => {
        
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (!error) resolve("NICE" + val);
                else reject("There was an error");
            }, wait * 1000)
        })
    }

    let promises = [];
    let pp1 = promiseGenerator("nice",4 ,true);
    let pp2 = promiseGenerator("meme",3,  false);
    promises.push(pp1);
    promises.push(pp2);
    Promise.all(promises).then(results => {
        console.log(results);
    }).catch(err => {
        console.log(err);
    });

    
}

// scope1()
// scope2()
// scope3()
// scope4()
// scope5()
// scope6()
// scope7();
// scope8();
// scope9();
// scope10()
scope11();