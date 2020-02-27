/**** COIN FLIPPING APP ****/
//Generates dummy data
//replace in the future with something to pull 
//actual data from the coin flipping machine
const flip = n => new Array(n)
.fill(0)
.map(n => rng(0, 1))
.map((n, i) => n === 1 ? i + 1 : n)
.filter(n => n > 0);

/**** HELPER METHODS ****/
const rng = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

module.exports = flip;