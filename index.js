const Mapper = require("./Mapper");
const Entity = require("./Entity");

randomNumber = () => {
  return Math.random() * 100; //between 1 and 100;
}
let mapper = new Mapper(); //instantiate mapper
// let basePoint = new Entity(randomNumber(), randomNumber()); //for the base point
// let otherPoints = {}; //for the list of other location of interest
// populate the Entities list with random coordinates
// for (x = 1; x <= 1000; ++x) {
// for 100 Entities
//   otherPoints[x] = new Entity(randomNumber() ,randomNumber() );
// }
let basePoint = new Entity(10.002, 14.85); //for the base point X&Y axis respectfully
let otherPoints = [new Entity(200, 120),
  new Entity(230, 170), new Entity(144.44, 122.9874),
  new Entity(50, 20), new Entity(120, 144),
  new Entity(200, 120)
];

//Calculate Distance
for (let key in otherPoints) {
  otherPoints[key].distance = mapper.distance(basePoint, otherPoints[key]);
}

//show the list of the coordinates
otherPoints.map(key => {
  console.log(`X: ${key.x}, Y: ${key.y}, Distance: ${key.distance}`);
});

console.log(`Basepoint X: ${basePoint.x}, Basepoint Y: ${basePoint.y}`);
const minMax = mapper.maxMin(otherPoints); //get the maximum and the minimum distance of all the objects
console.log(minMax);