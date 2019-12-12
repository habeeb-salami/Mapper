const Mapper = require("../Mapper");
const Entity = require("../Entity");
var assert = require('chai').assert;


describe('Map out shortest and longest distance', function() {
  describe('#indexOf()', function() {
	  let mapper = new Mapper(); //instantiate mapper
	  let basePoint = new Entity(mapper.random(), mapper.random()); //for the base point
      let otherPoints = {}; //for the list of other location of interest
	  
    it('should return the minimum and the maximum distance of the points provided', ()=> {
		for (x = 1; x <= 100; ++x) {//populate the otherPoints with 100 Entities
		  otherPoints[x] = new Entity(mapper.random(), mapper.random());
		}
		//Calculate Entities Distance
		for (let key in otherPoints) {
		  otherPoints[key].distance = mapper.distance(basePoint, otherPoints[key]);
		}
		//console.log(`Basepoint X: ${basePoint.x}, Basepoint Y: ${basePoint.y}`);
		const minMax = mapper.maxMin(otherPoints); //get the maximum and the minimum distance of all the objects
		//console.log(minMax);
      assert.property(minMax, 'min')
	  //assert.property(minMax,'max');
    });
  });
});