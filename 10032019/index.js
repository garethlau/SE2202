/* OCTOBER 3, 2019 */

const sectionOne = () => {
    let a = [5,4,4,3,2,1];
    // let is optional here
    for (let n of a) {
        console.log(n);
    }
    
    for (n of a) {
        console.log(n);
    }
}

const sectionTwo = async () => {
    const printArr = (arr) => {
        let s = "";
        for (n of arr) s += n + " ";
        console.log(s);
    }
    let numbers = [];
    for (let i = 0; i < 20; i++) {
        numbers.push(i);
    }
    printArr(numbers);

    /* helper functions */
    const double = (num) => {
        return num * 2;
    }

    const isEven = (num) => {
        if (num % 2 == 0) return num;
    }

    const addAll = (total, num) => {
        return total + num;
    }

    // map
    let doubled = numbers.map(double)
    printArr(doubled);

    // filter
    let even = numbers.filter(isEven); 
    printArr(even);

    // reduce
    let added = numbers.reduce(addAll)
    console.log(added);
}

// sectionOne();
sectionTwo();
