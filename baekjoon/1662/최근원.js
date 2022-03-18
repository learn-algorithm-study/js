const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim();

const len = [];
const mul = [];
let cnt = 0;

for (const strIndex in input) {
  const str = input[strIndex];
  if (str === "(") {
    cnt -= 1;
    len.push(cnt);
    mul.push(+input[strIndex - 1]);
    cnt = 0;
  } else if (str === ")") {
    const lenVal = len.pop();
    const mulVal = mul.pop();
    const val = mulVal * cnt;
    cnt = lenVal + val;
  } else {
    cnt++;
  }
}

console.log(cnt);
