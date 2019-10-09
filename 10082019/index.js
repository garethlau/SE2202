const https = require('https');


const getDataFromUrl = async (url) => {
    return new Promise((resolve, reject) => {
        const chunks = [];
        try {
            https.get(url, (res) => {
                res
                .setEncoding('utf8')
                .on('data', (d) => {
                    chunks.push(d);
                })
                .on('end', () => {
                    console.log(chunks);
                    resolve(JSON.parse(chunks.join('')));
                })
                .on('error', (err) => {
                    reject(err);
                })
            })
        }
        catch (err) {
            reject(err);
        }
    })
}


const sectionOne = async () => {
    const url = "https://jsonplaceholder.typicode.com/posts";

    let posts = await getDataFromUrl(url);
    console.log(posts);

    const checkUser = (userId) => {
        return (post) => {
            if (post.userId == userId) return post;
        }
    }

    const checkUser8 = checkUser(8);

    // check for posts by a certain id
    let usersPost = posts.filter(checkUser8);
    console.log(usersPost);
}

const sectionTwo = () => {
    let rabbit = {};
    rabbit.speak = function(line) {
        console.log(`The rabbit says ${line}`);
    };
    rabbit.speak("hehe");
    
    // object
    let car = {
        id: 01,
        speed: 10,
        displayInfo: () => {
            console.log(`Car ID: ${car.id} | Speed: ${car.speed}`);
        }
    }

    car.displayInfo();
    car.speed++;
    car.displayInfo();

    // implementable objects as function
    function Rabbit(name, color) {
        this.name = name;
        this.color = color;
        this.speak = function(line) {
            console.log(`(${this.name}) The ${this.color} rabbit says: ${line}`)
        }
    }

    let whiteRabbit = new Rabbit("Rabbit 1", "white");
    let blackRabbit = new Rabbit("Rabbit 2", "black");
    whiteRabbit.speak("Hello");
    blackRabbit.speak("Hi there");

    // this is not good!
    // we can't add to objects outisde the constructor without using prototype
    Rabbit.eating = function() {
        console.log(`(${this.name}) Eating...`);
    }
    // this is GOOD :)
    Rabbit.prototype.sleep = function() {
        console.log(`(${this.name}) Sleeping...`);
    }
    // whiteRabbit.eating();    // this gives us an error, we can't add to objects after
    whiteRabbit.sleep();
}


// sectionOne();
sectionTwo();
