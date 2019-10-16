let bunny = {
	name: 'Usagi',
	tasks: ['transform', 'eat cake', 'blow kisses'],
	showName: function() {
		console.log(this.name)
	},
	showTasks: function() {
		this.tasks.forEach(function(task) {
			console.log(`${this.name} wants to ${task}`);
		})
	}
};
  
bunny.showName(); // Usagi
bunny.showTasks();
/**
 * Why is the name undefined?
 * The function define in the forEach loop has a newly declared scope
 */

 /* PROTOTYPES AND CLASSES */

let empty = {}
console.log(empty.toString);

let protoRabbit = {	// this is a prototype
	speak(line) {
		console.log(`The ${this.type} rabbit says ${line}`)
	}
};


let killerRabbit = Object.create(protoRabbit);
killerRabbit.type = "nice";
killerRabbit.speak("yeet");

function Car(name) {	// this is not a prototype
	this.name = name;
	console.log(`This in Car ${this}`);
	return this;	
}

class Shapes {
	constructor() {

	}
}

let c1 = new Car("BMW");
let c2 = Object.create({Car}).Car("Tesla");
console.log(c1);
console.log(Object.getPrototypeOf(c1))

console.log(c2);
console.log(Object.getPrototypeOf(c2))
