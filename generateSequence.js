//TODO: replace with output from coin flipping
const generateSequence = n => new Array(n)
  .fill(0) //initially fill array with 0s
  .map(() => rng(0, 1)) //populate array randomly with heads [1] and tails [0]
  .map((n, i) => n === 1 ? i + 1 : n) //convert all heads [1] into sequence numbers
  .filter(n => n > 0); //filter out all tails [0]

/**** HELPER METHODS ****/
const rng = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

module.exports = generateSequence;