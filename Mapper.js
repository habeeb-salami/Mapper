class Mapper {
<<<<<<< HEAD
  // constructor() {
  //   this.shortestDist;
  //   this.longestDist;
  // }
=======

>>>>>>> c5ebc973251791293ba186c2c5c534d5ecfe2576

  distance(obj1, obj2) {
    let vx = obj1.x - obj2.x;
    let vy = obj1.y - obj2.y;
    const dist = Math.sqrt(vx * vx + vy * vy);
    return dist;
  }
<<<<<<< HEAD
  random() {
    return Math.random() * 100; //between 1 and 100;
  }
=======

>>>>>>> c5ebc973251791293ba186c2c5c534d5ecfe2576
  maxMin(otherPoints) {
    this.min = otherPoints[1].distance;
    this.max = otherPoints[1].distance;
    for (let i in otherPoints) {
      if (otherPoints[i].distance >= this.max) { //if distance of otherpoitn object is greater than the know max then
        this.max = otherPoints[i].distance; //assign to the maximum value the found distance
      }
      if (otherPoints[i].distance <= this.min) { //if the distance in this otherpoitnis less than the know min then
        this.min = otherPoints[i].distance; //assign to the min value the new found min distance
      }
    }
<<<<<<< HEAD
    console.log(`Final Shortest Distance: ${this.min}, Final Longest Distance: ${this.max}`);
=======
    // console.log(`Final Shortest Distance: ${this.min}, Final Longest Distance: ${this.max}`);
>>>>>>> c5ebc973251791293ba186c2c5c534d5ecfe2576
    return {
      min: this.min,
      max: this.max
    };
  }
<<<<<<< HEAD
=======

>>>>>>> c5ebc973251791293ba186c2c5c534d5ecfe2576
}
module.exports = Mapper;