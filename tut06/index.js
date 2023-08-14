/**
 * Task 1
 * I am creating a Shape class and declaring _x and _y variables
 * inside the constructor method to make them private.
 * I also define getter and setter methods so that _x and _y can be modified.
 * The setter methods include value checking to ensure they are positive.
 * 
 * Task 2
 * I create a Square and Triangle class that both extend the shape class using the 
 * "extend" keyword. The super method must be called with parameters x and y. The 
 * length and height variable only exist in the Square and Triangle class respectively
 * so it is not passed into the super constructor; rather, it is passed to the set method.
 * This ensures that the length and height variable remain private. When constructing both
 * shapes, the set method is used to ensure that the value (length or height) is valid.
 * 
 * Task 3
 * To draw the square, I create two for loops, both looping to the length of the square. 
 * Nesting these for loops allows me print the desired shape of the rectangle. For each
 * line, I first call the createHorizontalOffset method to insert an offset. Done for each
 * line, this offsets the entire square.
 * 
 * To draw the triangle, I have a for loop that loops to the height of the triangle. 
 * Within this for loop, I create individual lines for the triangle. Each new 
 * line has an offset for the entire triangle as well as a offset determined by
 * taking the height of the triangle and subtracting the row that we are on.
 * This creates the decrease offsets required to print a triangle. As well, for
 * each line, I am printing (row number * 2 - 1) number of '*' as required to print
 * a triangle. 
 */
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

let sq = new Square(5,2,4);     // construct the square
let tr = new Triangle(3,5,6);   // construct the triangle
sq.showPoint(); // show the x, y for the square
tr.showPoint(); // show the x, y for the triangle
sq.draw();      // draw the square
tr.draw();      // draw the triangle