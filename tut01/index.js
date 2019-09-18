const createOffSet = (length) => {
    let result = "";
    for (k = 0; k < length; k++) {
        result += " ";
    }
    return result;
};

// TASK 1
const drawSquare = (offset, length) => {
    let square = "";
    for (i = 0; i < length; i++) {
        square += "\n" + createOffSet(offset);
        for (j = 0; j < length; j++) {
            square += "*";
        }
    }
    return square;
}

// TASK 2
const drawTriangle = (offset, height) => {
    let triangle = "";
    for (i = 0; i < height; i++) {
        triangle += "\n" + createOffSet(offset - i);
        for (j = 0; j < (i * 2) - 1; j++) {
            triangle += "*";
        }
    }
    return triangle;
}

console.log(drawSquare(2, 5));
console.log(drawTriangle(10, 4));