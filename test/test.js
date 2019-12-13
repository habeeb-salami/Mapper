const Mapper = require("../Mapper");
const Entity = require("../Entity");
var assert = require('chai').assert;


describe('Map out shortest and longest distance', function () {
	let mapper = new Mapper(); //instantiate mapper
	let basePoint = new Entity(10.002, 14.85); //instantiate the basePoint/base Location
	//instantiate the otherPoints/Locations
	let otherPoints = [new Entity(200, 120),
		new Entity(230, 170), new Entity(144.44, 122.9874),
		new Entity(50, 20), new Entity(120, 144),
		new Entity(200, 120)
	];
	it('It should test the Entity object Distance Property', () => {
		assert.property(basePoint, 'distance');
	});
	// it('It should test the Mapper Object Distance Method', () => {
	// 	assert.method(mapper, 'distance');
	// });

	it('should return the minimum and the maximum distance of the points provided', () => {
		//Calculate Entities Distance
		for (let key in otherPoints) {
			otherPoints[key].distance = mapper.distance(basePoint, otherPoints[key]);
		}
		const minMax = mapper.maxMin(otherPoints); //get the maximum and the minimum distance of all the objects	
		assert.property(minMax, 'min');

	});
});