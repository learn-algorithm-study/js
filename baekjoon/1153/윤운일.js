let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

let num = Number(input);
let result = '';
let arr = new Array(10000001);

//소수를 찾는 알고리즘 , arr[]에 0이면 소수다.
for (let i = 2; i <= num; ++i) {
  for (let j = 2 * i; j <= num; j += i) arr[j] = 1;
}

//먼저 4개의 소수중 앞에 2개의 소수를 찾는다.
//찾는 방법은 간단. 홀수냐 짝수냐로 바로 구분 가능
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
    //홀수일때
    result += '2 ';
    result += '3 ';
    gold(num);
  }
}

console.log(result); //결과 출력

//소수 4개중 뒤에 2개를 찾는 함수
function gold(num) {
  for (let i = 2; i <= num; ++i) {
    //짝수일때
    if (num % 2 === 0 && !arr[i] && !arr[num - 4 - i]) {
      result += i;
      result += ' ';
      result += num - 4 - i;
      break;
    }
    //홀수일때
    else if (num % 2 === 1 && !arr[i] && !arr[num - 5 - i]) {
      result += i;
      result += ' ';
      result += num - 5 - i;
      break;
    }
  }
}
