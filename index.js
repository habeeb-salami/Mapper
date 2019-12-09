Mapper = require('./Mapper');
Entity = require('./Entity');

let mapper = new Mapper(); //instantiate mapper
let basePoint = new Entity(mapper.random(), mapper.random()); //for the base point
let otherPoints = {}; //for the list of other location of interest
//populate the Entities list with random coordinates
for (x = 1; x <= 1000; ++x) { //for 100 Entities
    otherPoints[x] = new Entity(mapper.random(), mapper.random());
}

//Calculate Distance
for (let key in otherPoints) {
    otherPoints[key].distance = mapper.distance(basePoint, otherPoints[key]);
}

//show the list of the coordinates
for (let key in otherPoints) {
    console.log(`X: ${otherPoints[key].x}, Y: ${otherPoints[key].y}, Distance: ${otherPoints[key].distance}`);
}

console.log(`Basepoint X: ${basePoint.x}, Basepoint Y: ${basePoint.y}`);
const minMax = mapper.maxMin(otherPoints); //get the maximum and the minimum distance of all the objects
console.log(minMax);