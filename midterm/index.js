const scope1 = () => {
    const greaterThan = (a) => {
        return (b) => b > a;
    }
    
    const greaterThan10 = greaterThan(10);
    console.log(greaterThan10(12));

    const noisy = (func) => {
        return (...args) => {
            let result = func(...args);
            console.log(`Parameters: ${args} Result: ${result}`);
            return result;
        }
    }

    /**
     * @param {Number} elem - Element to check in array
     */
    const containsElem = (elem) => {
        return (...arr) => {
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] == elem) return true;
            }
            return false;
        }
    }
    const containsElem20 = containsElem(20);
    console.log(noisy(containsElem20)(1,20,3,4,5,6));
    

}

const scope2 = () => {
    const unless = (test, then) => {
        if (!test) then();
    }
    let arr = [1,2,3,4];
    arr.forEach(e => {
        unless(e % 2 == 1, () => console.log(e));
    })
}

const scope3 = () => {
    let people = [
        {name: "Bob", age: 10},
        {name: "Alice", age: 15},
        {name: "Cathy", age: 12},
        {name: "Diego", age: 24},
        {name: "Eddy", age: 17}
    ];

    people.forEach(p => {
        if (p.age > 18) console.log(`${p.name} is an adult`);
    })
    // map returns a new array without touching the original
    people.map(p => {
        p.age = p.age + 5;
        return p;
    })
    const reducer = (accumulator, curr) => accumulator + curr;
    console.log("Total age: " + people.map(p => p.age).reduce(reducer, 0));
    const under18 = people.filter(p => p.age < 18);
    console.log(under18);
}

const scope4 = () => {
    function Container(param) {
        this.member = param;
        let _secret = 0;
        this.setSecret = function(val) {
            _secret = val;
        }
        this.getSecret = function() {
            return _secret;
        }
    }

    let c1 = new Container(3);
    console.log(c1._secret);
    c1._secret = 3;
    console.log(c1._secret);    
    console.log(c1.getSecret());

    class Animal {
        constructor(age) {
            this.age = age;
        }
        eat() {
            console.log("eating")
        }
    }
        
    class Dog extends Animal {
        constructor(age, breed) {
            super(age);
            this.breed = breed;
        }
        set setBreed(b) {
            this.breed = b;
        }
        get getBreed() {
            return this.breed;
        }
    }
    
    let d1 = new Dog(10, "pug");
    console.log(d1.age);
    d1.eat();
    d1.setBreed = "horse";
    console.log("hello", 
    "world");
}

const scope5 = () => {
    let f = () => 0;
    console.log(f.toString());
    console.log(123 == true);
    console.log(undefined);
    let a = {
        f: () => console.log("nice")
    };
    console.log(a);
}

const scope6 = () => {
    let protoRabbit = {
        type: "default type",
        speak(line) {
            console.log("this in proto", this); // {}
            console.log(`${this.type} says ${line}`);   // this.type = default type
            console.log(this.type);
        }
    }
    let r1 = Object.create(protoRabbit);
    console.log(r1.type);
    r1.speak("Hello");
}

const scope7 = () => {
    let a = ["nice", "meme", "friend"];
    for (let w in a) console.log(w);
    for (let w of a) console.log(w);

    let o = {
        a: "gege",
        b: "egegeg"
    }

    for (let a of Object.keys(o)) {
        console.log(a);
    }
}

const scope8 = () => {
    let obj = {
        "a": "apple",
        b: "banana",
        c: "carrot",
    }

    let x = "a";
    console.log(obj[x]);    // -> apple
    console.log(obj.x);     // -> undefined
    console.log(obj["a"])   // -> apple
    console.log(obj.a);     // -> apple
}


const scope9 = () =>  {
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
            this.name = name;
            this.salary = salary;
            this.bonus = bonus;
        }
        calcSalary() {
            return super.calcSalary() + this.bonus;
        }
    }

    let m = new Manager("john", 2000, 500);
    console.log(m.calcSalary());
}

// scope1();
// scope2();
// scope3();
// scope4();
// scope5();
// scope6();
// scope7();
// scope8()
scope9();