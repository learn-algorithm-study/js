let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

let num = input.map((e) => Number(e));
let arrTemp = [];
//먼저 정렬
num.sort((a, b) => a - b);

// 3수의 차를 arrTemp 에 절대값으로 저장
for (let i = 0; i < 2; ++i) {
  arrTemp.push(Math.abs(num[i] - num[i + 1]));
}

//arrTemp 에 저장한 2 수의 차가 같으면 3수는 연속된 수, 즉 맨 앞 혹은 맨 뒤에 그 차를 빼거나 더하면 됨
if (arrTemp[0] === arrTemp[1]) {
  if (num[0] - arrTemp[0] > 0) console.log(num[0] - arrTemp[0]);
  else console.log(num[num.length - 1] + arrTemp[0]);
} else {
  //arrTemp에 저장한 2수의 차가 다르면 3수 중 사이에 수가 비어있는 것
  //어디가 비어있는지는 대충 뇌지컬로 호다닥
  if (arrTemp[0] > arrTemp[1]) {
    console.log(num[0] + arrTemp[1]);
  } else if (arrTemp[0] < arrTemp[1]) {
    console.log(num[1] + arrTemp[0]);
  }
}
