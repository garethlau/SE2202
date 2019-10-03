/* OCTOBER 3, 2019 */
let a = [5,4,4,3,2,1];
const http = require('https');

const sectionOne = () => {
    // let is optional here
    for (let n of a) {
        console.log(n);
    }
    
    for (n of a) {
        console.log(n);
    }
}

const sectionTwo = async () => {
    const options = {
        hostname: 'https://jsonplaceholder.typicode.com',
        path: '/todos/1',
        method: "GET"
    }
    const req = http.request(options, res => {
        console.log(res);
    })
    console.log(data);
    
}

// sectionOne();
sectionTwo();
