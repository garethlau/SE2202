function Container (param) {
    this.member = param;
    let secret = 3;

    const decrease = function() {
        if (secret > 0) {
            secret -= 1;
            return true;
        }
        else {
            return false;
        }
    }
    this.service = function() {
        return decrease() ? this.member + "-> " + secret : null;
    }
    this.setSecret = function(newSecret) {
        secret = newSecret
    }
    this.getSecret = function() {
        return secret;
    }
}

let c1 = new Container("dog");
console.log(c1.member);
console.log(c1.secret); // undefined
console.log(c1.getSecret());
c1.setSecret(10);
console.log(c1.getSecret());


class Animal {
    constructor(name) {
        this.speed = 0;
        this.name = name;
    }
    run(speed) {
        this.speed += speed;
        console.log(`${this.name} runs with speed ${this.speed}`);
    }
    stop() {
        this.speed = 0;
        console.log(`${this.name} stopped`)
    }
}

let a1 = new Animal("Horse");
console.log(a1.name);
a1.run(5);
console.log(a1.speed);

class Rabbit extends Animal {
    constructor(name, earLength) {
        super(name);
        this.earLength = earLength;
    }
}