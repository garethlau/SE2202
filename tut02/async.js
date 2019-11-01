const wait = (val, time) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(val);
        }, time);
    });
}

let s = wait("hello", 1000).then(res => console.log(res));
console.log(s);
