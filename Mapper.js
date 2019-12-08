class Mapper {

    distance(obj1, obj2) {
        let vx = obj1.x - obj2.x;
        let vy = obj1.y - obj2.y;
        const dist = Math.sqrt(vx * vx + vy * vy);
        return dist;
    }
    random() {
        return ((Math.random() * 100)); //between 1 and 100;
    }
    maxMin(distances) {
        this.min = distances[1];
        this.max = distances[1];
        for (let i in distances) {
            if (distances[i] >= this.max) { //for catching the maximum number
                this.max = distances[i];
            }
            if (distances[i] <= this.min) { //for catching the maximum number
                this.min = distances[i];
            }
        }
        console.log(`Final Shortest Distance: ${this.min}, Final Longest Distance: ${this.max}`);
    }
}
module.exports = Mapper;