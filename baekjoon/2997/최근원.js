const fs = require("fs");

const read = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

let answer;

const first = read[1] - read[0];
const second = read[2] - read[1];

if (first < second) {
  answer = read[1] + first;
} else if (first === second) {
  answer = read[2] + first;
} else {
  answer = read[0] + second;
}

console.log(answer);
