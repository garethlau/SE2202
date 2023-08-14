/* October 24, 2019 */
const doNice = () => {
    "use strict";   // having this line will result in a ReferenceError
    for (let i = 0; i < 10; i++) console.log("nice");
}

let result = [];
const allPerms = (str) => {
    let chars = str.split("");
    helper("", chars);
    console.log(result);
}

const helper = (tmp, remain) => {
    if (remain.length == 0) {
        result.push(tmp);
    }
    else {
        for (let i = 0; i < remain.length; i++) {
            // choose
            tmp += remain[i];
            remain.splice(i, 1);
            // explore
            helper(tmp, remain);
            // unchoose
            remain.splice(i, 0, tmp[tmp.length - 1]);
            console.log(remain);
            tmp = tmp.substring(0, tmp.length - 1);
        }
    }
}


var Apple = function() {
    // An apple?
};

Apple.prototype.color = "red";
Apple.prototype.arr = [];
Apple.prototype.changeColor = function(new_color) {
    this.color = new_color;
};
Apple.prototype.getColor = function() {
    console.log('color: '+this.color);
};
Apple.prototype.addToArr = function(elem) {
    this.arr.push(elem)
}
Apple.prototype.printArr = function() {
    console.log(`apple colored ${this.color} has arr : ${this.arr}`);
}
var apple1 = new Apple();
var apple2 = new Apple();
apple2.changeColor("green");
apple1.getColor();
apple2.getColor();

apple1.addToArr("nice")
apple2.addToArr("meme")
apple1.printArr();
apple2.printArr();
console.log(apple2.__proto__)

let Car = {
    zoom() {
        console.log("ZOOM");
    }
}
let c1 = Object.create(Car)
c1.prototype.speed = 10;
c1.zoom();
console.log(c1.__proto__)