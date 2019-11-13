class Shape {
    constructor(x, y) {
        let _x;
        let _y;
        this.getX = () => _x;
        this.setX = (newX) => _x = newX >= 0 ? newX : 0;
        this.getY = () => _y;
        this.setY = (newY) => _y = newY >= 0 ? newY : 0;
        this.showPoint = () => console.log(`${_x}, ${_y}`);
        this.setX(x);
        this.setY(y);
    }
    createHorizontalOffset(offset) {
        offset = offset >= 0 ? offset : this.getX(); 
        let res = "";
        for (let i = 0; i < offset; i++) res += " ";
        return res;
    }
    draw() {
        for (let i = 0; i < this.getY(); i++) console.log("");
    }
    // TASK 1
    // logs to console the x and y coordinate as well as the type of the shape
    displayInfo() {
        // the type of the shape is just the name of the constructor which we can access with 'constuctor.name'
        console.log(`${this.constructor.name} Shape with main point at: ${this.getX()}, ${this.getY()}`);
    }
}

class Square extends Shape {
    constructor(x, y, length) {
        super(x, y);
        let _length;
        this.setLength = (newLength) => _length = newLength >= 1 ? newLength : 0;
        this.getLength = () => _length;
        this.setLength(length);
        this.draw = () => {
            super.draw();
            let square = "";
            for (let i = 0; i < _length; i++) {
                square += "\n" + super.createHorizontalOffset();
                for (let j = 0; j < _length; j++) {
                    square += "*";
                }
            }
            console.log(square);
        }
    }
}

class Triangle extends Shape {
    constructor(x, y, height) {
        super(x, y);
        let _height;
        this.setHeight = (newHeight) => _height = newHeight >= 1 ? newHeight : 0;
        this.getHeight = () => _height;
        this.setHeight(height);
        this.draw = () => {
            super.draw();
            let triangle = "";
            for (let i = 1; i <= height; i++) {
                triangle += "\n" + super.createHorizontalOffset(this.getX()) + super.createHorizontalOffset(_height - i);
                for (let j = 0; j < (i * 2) - 1; j++) {
                    triangle += "*";
                }
            }
            console.log(triangle);
        }
    }
}

// Tests from Tutorial 6
/*
let sq = new Square(5,2,4);     // construct the square
let tr = new Triangle(3,5,6);   // construct the triangle
sq.showPoint(); // show the x, y for the square
tr.showPoint(); // show the x, y for the triangle
sq.draw();      // draw the square
tr.draw();      // draw the triangle
*/ 

/**
 * @param {Array} a - Array of objects
 * @returns {Array} - Array of Shapes  
 */
const toShapes = (a) => {
    return a.map(e => {
        // map each object to a new shape
        if (e.type == 'Square') {
            // type of square was indicated, so make and return a new Square object
            return new Square(e.x, e.y, e.length);
        }
        else if (e.type == 'Triangle') {
            // type of triangle was indicated, so make and return a new Triangle object
            return new Triangle(e.x, e.y, e.height);
        }
        else {
            // no type was indicated, make and return a Shape object
            return new Shape(e.x, e.y);
        }
    });
}

let plainObjects = [
    {x:5,y:6},
    {type:'Square', x:7,y:10, length:10},
    {x:8,y:9,type:'Triangle', height:50},
];

// create a list of shapes using the toShapes method
let shapes = toShapes(plainObjects);

// iterate through each shape and print its info
shapes.forEach(shape => shape.displayInfo());

// create shapes using built in map method for arrays 
let shapes2 = plainObjects.map(obj => {
    if (obj.type == 'Square') {
        // type of square was indicated, so make and return a new Square object
        return new Square(obj.x, obj.y, obj.length);
    }
    else if (obj.type == 'Triangle') {
        // type of triangle was indicated, so make and return a new Triangle object
        return new Triangle(obj.x, obj.y, obj.height);
    }
    else {
        // no type was indicated, make and return a Shape object
        return new Shape(obj.x, obj.y);
    }
});

// iterate through each shape created by the map method and print its info
shapes2.forEach(shape => shape.displayInfo());