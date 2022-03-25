let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

let num = Number(input);
let result = '';
let arr = new Array(10000001);

for (let i = 2; i <= num; ++i) {
  for (let j = 2 * i; j <= num; j += i) arr[j] = 1;
}
if (num < 8) {
  //8보다 작으면 -1
  console.log(-1);
} else if (num === 8) {
  //8이면...
  console.log('2 2 2 2');
} else {
  //8보다 크면...
  if (num % 2 === 0) {
    //짝수일때
    result += '2 ';
    result += '2 ';
    gold(num);
  } else {
    result += '2 ';
    result += '3 ';
    gold(num);
  }
}
console.log(result); //결과 출력

function gold(num) {
  for (let i = 2; i <= num; ++i) {
    if (num % 2 === 0 && !arr[i] && !arr[num - 4 - i]) {
      result += i;
      result += ' ';
      result += num - 4 - i;
      break;
    } else if (num % 2 === 1 && !arr[i] && !arr[num - 5 - i]) {
      result += i;
      result += ' ';
      result += num - 5 - i;
      break;
    }
  }
}
