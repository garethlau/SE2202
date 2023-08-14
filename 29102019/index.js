function Human(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.getFullName = function() {
        return this.firstName + this.lastName;
    }
    this.locationHistory = [];
    this.updateLocationHistory = function(elem) {
        this.locationHistory.push(elem);
    }
    this.getLocationHistory = function() {
        return this.locationHistory;
    }
}

Human.prototype.favouriteFoods = [];
Human.prototype.updateFavouriteFoods = function(elem) {
    Human.prototype.favouriteFoods.push(elem);
}
Human.prototype.getFavouriteFoods = function() {
    return Human.prototype.favouriteFoods;
}


Human.prototype.age = 20;
Human.prototype.updateAge = function(age) {
    Human.prototype.age = age;
}
Human.prototype.getAge = function() {
    return Human.prototype.age;
}

let h1 = new Human("Gareth", "Lau");
h1.updateAge(10);
h1.updateLocationHistory("school")
h1.updateFavouriteFoods("Rice")
console.log(h1.getFullName())
console.log(h1.getAge());
console.log(h1.getFavouriteFoods());
Human.prototype.age = 100;



let h2 = new Human("Bob", "Gratz");
console.log(h2.age);    // -> defaults to 20
h2.updateAge(30);
h2.updateLocationHistory("work");
console.log(h2.age);    // -> now is 30
console.log(h2);
h2.updateFavouriteFoods("Pizza");
console.log("EGUEHUGHEUGHE")
console.log(h2.getFavouriteFoods());
console.log(h1.favouriteFoods);

console.log(h1.__proto__ === Human.prototype);
// console.log(Human.prototype)

console.log(`h1 age is: ${h1.getAge()}`)


function b() {
    console.log(myVar);
}
  
function a() {
    let myVar = 2;
    b();
}
  
let myVar = 1;
a();

const scope1 = () => {
    let tmp = 1;
    console.log(tmp);
}
const scope2 = () => {
    let tmp = 2;
    scope1();
    console.log(tmp);
}

scope2();
let n = "nice meme";
const scope3 = () => {
    let n = "nicemememememem"
    pprint(n)
}

const pprint = (f) => console.log(n)

scope3();
console.log(this);