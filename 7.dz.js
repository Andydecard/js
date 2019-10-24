class Bird {
	constructor(birdNumber){
		this.name = 'Bird ' + birdNumber;
		this.points = 0;
		this.eaten = false
	}
}

const birds = [];

let n = 0;
while( n<11 ) {
	birds.push(new Bird( n ));
	n++;
}

let firstBird = birds[0];
let secondBird = birds[1];
let thirdBird = birds[9];

console.log(firstBird.name);
console.log(secondBird.name);
console.log(thirdBird.name);