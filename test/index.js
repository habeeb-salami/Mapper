const chai = require("chai");
const chaiHttp = chai.use(require("chai-http"));
const expect = require("chai").expect;

const Mapper = require("./Mapper");
const Entity = require("./Entity");



describe('Testing my mapper object', () => {

    before(() => {
		let mapper = new Mapper(); //instantiate mapper
		let basePoint = new Entity(mapper.random(), mapper.random()); //for the base point
		let otherPoints = {}; //for the list of other location of interest
		//populate the Entities list with random coordinates
		for (x = 1; x <= 1000; ++x) {
			//for 100 Entities
			otherPoints[x] = new Entity(mapper.random(), mapper.random());
			}
    });

    after(() => {

    });
	
	
	  describe('createUser', () => {
        it('should test /api/v1/auth/create-user', (done) => {
			
//show the list of the coordinates
for (let key in otherPoints) {
  console.log(`X: ${otherPoints[key].x}, Y: ${otherPoints[key].y}, Distance: ${otherPoints[key].distance}`);
}
// otherPoints.map(point => {
//   console.log(point);
// });

console.log(`Basepoint X: ${basePoint.x}, Basepoint Y: ${basePoint.y}`);
const minMax = mapper.maxMin(otherPoints); //get the maximum and the minimum distance of all the objects
console.log(minMax);
			expect.(mapper.distance()).to.equal();
			
        });
    });
	
	

});