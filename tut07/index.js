// define all connections
const roads = [
    "Alice's House-Bob's House",   
    "Alice's House-Cabin",
    "Alice's House-Post Office",   
    "Bob's House-Town Hall",
    "Daria's House-Ernie's House", 
    "Daria's House-Town Hall",
    "Ernie's House-Grete's House", 
    "Grete's House-Farm",
    "Grete's House-Shop",          
    "Marketplace-Farm",
    "Marketplace-Post Office",     
    "Marketplace-Shop",
    "Marketplace-Town Hall",       
    "Shop-Town Hall"
];
/**
 * Helper function to build a graph object of the form
 * location: [destinations]
 */
function buildGraph(edges) {
    let graph = Object.create(null);
    function addEdge(from, to) {
        if (graph[from] == null) {
            // new location, add this to the graph
            graph[from] = [to];
        } 
        else {
            // add a destination for a location
            graph[from].push(to);
        }
    }
    // iterate through the list of connections
    for (let [from, to] of edges.map(r => r.split("-"))) {
        addEdge(from, to);
        addEdge(to, from);
    }
    return graph;
}

// create a new graph or the connections
const roadGraph = buildGraph(roads);

class VillageState {
    constructor(place, parcels) {
        // define the current place (starting place)
        this.place = place;
        this.parcels = parcels;
    }
    // function to simulate the robot movement
    move(destination) {
        // if we are at a location and that has is unable to reach 
        // the destination, then return this same state
        if (!roadGraph[this.place].includes(destination)) {
            return this;
        } 
        else {
            // can move to new destination
            let parcels = this.parcels.map(p => {
                // move all the parcels to the new place
                if (p.place != this.place) return p;
                return {place: destination, address: p.address};
            })
            // drop off any parcels that we need to deliver
            .filter(p => p.place != p.address);
            // return the new state of the village
            return new VillageState(destination, parcels);
        }
    }
}
// helper method to create a new random village state
VillageState.random = function(parcelCount = 5) {
    let parcels = [];   // bind empty array
    // create parcelCount number of parcels
    for (let i = 0; i < parcelCount; i++) {
        // randomly pick an address
        let address = randomPick(Object.keys(roadGraph));
        // rnaodmly pick a destination that is not equal to the address
        let place;
        do {
            place = randomPick(Object.keys(roadGraph));
        } while (place == address);
        // add the new parcel object to the parcels array
        parcels.push({place, address});
    }
    // create and return a new village state
    return new VillageState("Post Office", parcels);
};

// method to simulate the robot delivery process
function runRobot(state, robot, memory) {
    // keep going until there are no more parcels to deliver
    for (let turn = 0;; turn++) {
        if (state.parcels.length == 0) {
            console.log(`Done in ${turn} turns`);
            return turn;    // return number of turns to deliver all parcels
        }
        // decide where to go next
        let action = robot(state, memory);
        // update the state to reflect the robot's movement
        state = state.move(action.direction);
        // update the memory
        memory = action.memory;
        console.log(`Moved to ${action.direction}`);
    }
}

function randomPick(array) {
    // function that randomly picks a location to go to
    let choice = Math.floor(Math.random() * array.length);
    return array[choice];
}
  
function randomRobot(state) {
    // a robot that randomly visits locations to deliver
    // uses the random pick method to determine next direction
    return {direction: randomPick(roadGraph[state.place])};
}

// simulate the robot delivery process with a robot that randomly 
// which location to go to
runRobot(VillageState.random(), randomRobot);

// define a mail route for the route robot
const mailRoute = [
    "Alice's House", "Cabin", "Alice's House", "Bob's House",
    "Town Hall", "Daria's House", "Ernie's House",
    "Grete's House", "Shop", "Grete's House", "Farm",
    "Marketplace", "Post Office"
];

function routeRobot(state, memory) {
    // this robot moves acorrding to the predefined mail route.
    
    if (memory.length == 0) {
        // add the mail route to the robots memory
        memory = mailRoute;
    }
    // remove any locations that we visit along the mail route
    // as parcels for any given location will be dropped off when 
    // the robot gets there
    return {direction: memory[0], memory: memory.slice(1)};
}

// simulate the robot that delivers parcels based on a route
runRobot(VillageState.random(), routeRobot, []);

// breadth first search to find shortest routes
function findRoute(graph, from, to) {
    // list of places to visit
    // functionally similar to a queue
    let work = [{at: from, route: []}];
    for (let i = 0; i < work.length; i++) {
        let {at, route} = work[i];
        for (let place of graph[at]) {
            // if the robot reaches the destination, then a
            // valid route has been found
            // add the current place we are at to the route to complete it
            if (place == to) return route.concat(place);

            // the robot has not looked at this place before, 
            // add it to the list of places the robot will explore
            if (!work.some(w => w.at == place)) {
                work.push({at: place, route: route.concat(place)});
            }
        }
    }
}

function goalOrientedRobot({place, parcels}, route) {
    // robot finds the best route for parcels and moves along that route
    // the route array is the list of places the robot will visit
    // if it is empty, the robot needs to find a new route for the parcel
    if (route.length == 0) {    // robot doesn't know where to go next
        // figure out next route
        let parcel = parcels[0];
        if (parcel.place != place) {
            route = findRoute(roadGraph, place, parcel.place);
        } 
        else {
            route = findRoute(roadGraph, place, parcel.address);
        }
    }
    // move to the next place in the route array
    // remove it from the memory
    return {direction: route[0], memory: route.slice(1)};
}

// simulate the robot that uses path finding algorithm
runRobot(VillageState.random(), goalOrientedRobot, []);

// compare two results and log the average number of moves taken for each robot
function compareRobots(robot1, memory1, robot2, memory2) {
    const ITER = 100;   // number of tests
    let robot1Results = []; // results of robot 1
    let robot2Results = []; // results of robot 2
    for (let i = 0; i < ITER; i++) {
        let testState = VillageState.random();      // generate new VillageState
        // simulate robot 1 and store the number of moves
        robot1Results.push(runRobot(testState, robot1, memory1));   
        // simulate robot 2 and store the number of moves
        robot2Results.push(runRobot(testState, robot2, memory2));
        memory1 = [];   // clear memory after running
        memory2 = [];   // clear memory after running
        // log the number of moves both robots took
        console.log(`Robot1: ${robot1Results[robot1Results.length - 1]}   Robot2: ${robot2Results[robot2Results.length - 1]}`)
    }
    // calculate the average number of moevs
    let r1Avg = 0;
    let r2Avg = 0;
    robot1Results.forEach(r => r1Avg += r);
    robot2Results.forEach(r => r2Avg += r);
    // log the average number of moves
    console.log(`Robot1 Average: ${r1Avg / ITER}  Robot2 Average: ${r2Avg / ITER}`)
}

// compare random robot to the goal oriented robot
compareRobots(randomRobot, [], goalOrientedRobot, []);

// compare goal oriented robot to the route robot
compareRobots(goalOrientedRobot, [], routeRobot, []);