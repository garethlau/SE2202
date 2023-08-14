const print = (p) => console.log(p);

const Cat = class {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    makeSound() {
        return "Meow";
    }

}

const Dog = function (name, age) {
    this.name = name;
    this.age = age;
}

Dog.prototype.makeSound = function() {
    return "Roof roof";
};

const dogo = new Dog("Dog", 12);
const cato = new Cat("Cat", 10);

print(dogo);
print(dogo.makeSound());
print(cato);