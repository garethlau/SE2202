const taskOne = () => {
    // create complex number prototype
    const complexBase = {
        real: null,
        imaginary: null,
        // print method to print the complex number
        print() {
            console.log(`${this.real}+${this.imaginary}i`)
        }
    }
    /**
     * Function to create a complex number using the complex
     * number prototype. 
     */
    const createComplexNumber = (real, imaginary) => {
        let obj =  Object.create(complexBase);
        obj.real = real;
        obj.imaginary = imaginary;
        return obj;
    }
    /**
     * Complex number constructor function. Use with 'new' keyword to
     * create new complex number.
     */
    function ComplexNumber(real, imaginary) {
        this.real = real;
        this.imaginary = imaginary;
        this.print = () => {
            console.log(`${this.real}+${this.imaginary}i`)
        }
    }

    // create new complex number using the createComplexNumber method
    let c1 = createComplexNumber(4, 6);
    c1.print();

    // create new ComplexNumber using `new` keyword and constructor function
    let c2 = new ComplexNumber(4, 6);
    c2.print(); 
}

const taskTwo = () => {
    function ComplexNumber(real, imaginary) {
        this.real = real;
        this.imaginary = imaginary;
        /**
         * ADD
         * Adds the real and imaginary parts of the complex numbers
         * individually.
         */
        this.add = (complexNum) => {
            let {real, imaginary} = complexNum;
            this.real = this.real + real;
            this.imaginary = this.imaginary + imaginary;
        }
        /**
         * SUBTRACT
         * Subtracts the real and imaginary parts of the complex
         * numbers individually
         */
        this.subtract = (complexNum) => {
            let {real, imaginary} = complexNum;
            this.real = this.real - real;
            this.imaginary = this.imaginary - imaginary;
        }
        /**
         * DIVIDE
         * http://www.mesacc.edu/~scotz47781/mat120/notes/complex/dividing/dividing_complex.html
         * Implemented the algorithm in the link found above for compelex number 
         * division. The function simluates multiplication of the top and bottom
         * by the conjugate of the divisor.
         */
        this.divide = (complexNum) => {
            let {real, imaginary} = complexNum;
            let upstairsReal = this.real * real + this.imaginary * imaginary;
            let upstairsImaginary = this.real * imaginary - this.imaginary * real;
            let downstairs = real * real + imaginary * imaginary;
            this.real = upstairsReal / downstairs;
            this.imaginary = upstairsImaginary / downstairs;
        }
        /**
         * MULTIPLY
         * https://www2.clarku.edu/faculty/djoyce/complex/mult.html
         * Implemented complex number multiplication using the formula presented
         * in the link above. 
         */
        this.multiply = (complexNum) => {
            let {real, imaginary} = complexNum;
            let tempReal = this.real * real - this.imaginary * imaginary;
            let tempImaginary = this.real  * imaginary + this.imaginary * real;
            this.real = tempReal;
            this.imaginary = tempImaginary;
        }
        // Prints the complex number
        this.print = () => {
            /**
             * if statement to account for the sign of the negative imaginary part
             * of the complex number.
             */
            if (this.imaginary < 0) console.log(`${this.real}${this.imaginary}i`)            
            else console.log(`${this.real}+${this.imaginary}i`)            
        }
    }
    // create complex numbers
    let c1 = new ComplexNumber(3, 2);
    let c2 = new ComplexNumber(4, -3);
    let c3 = new ComplexNumber(3, 2);
    let c4 = new ComplexNumber(1, 4);
    // test divide function
    c1.divide(c2);
    c1.print();
    // test multiply function
    c3.multiply(c4);
    c3.print();
    // test add function
    c3.add(c1);
    c3.print();
    // test subtract function
    c3.subtract(c2);
    c3.print();
}

taskOne();
taskTwo();