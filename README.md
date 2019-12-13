[![Build Status](https://travis-ci.org/habeeb-salami/Mapper.svg?branch=Mapper)](https://travis-ci.org/habeeb-salami/Mapper)
# Mapper

Mapper is class library for calculating shortest and longest distance between multiple point with their X&Y coordinates, it was meant to be part of AI in game I was developing in JavaScript which I may soon publish the source code soon.

## Installation

- Clone or download the .zip file
- Unzip if zipped then use by calling the index.js file
- Run npm i to install the mocha and chai for testing unit testing

## Usage

- in the index.js file you should create list of Entities/location with their x&y coordinates
- Instantiate the base location `let basePoint = new Entity(10.002, 14.85); //for the base point X&Y axis respectfully`
- Instantiate other base location `let otherPoints = [new Entity(200, 120), new Entity(230, 170), new Entity(144.44, 122.9874), new Entity(50, 20), new Entity(120, 144), new Entity(200, 120)];`
- Then Calculate the shortest distace for each of the location in relative to the base point using this loop `for (let key in otherPoints) { otherPoints[key].distance = mapper.distance(basePoint, otherPoints[key]); }`
- Console Log Your Coordinates with their respective distance `otherPoints.map(key => { console.log(`X: $      {key.x}, Y: ${key.y}, Distance: \${key.distance}`); });`
- Console Log the Base Point `console.log(`Basepoint X: ${basePoint.x}, Basepoint Y: ${basePoint.y}`);`
- Get the Minimum and MAximum Location from the mapper object `const minMax = mapper.maxMin(otherPoints); //get the maximum and the minimum distance of all the objects`
- Console Log The Minimum and Maximum Point `console.log(minMax);`
- You should have something like this in your response `{ min: 50.161314171601646, max: 195.29988353125088 }`

## Thats All Folks You Can Fork and help improve this code or send in some comment

### Habeeb Salami
