let input = require('fs').readFileSync('/dev/stdin').toString().trim();

// console.log(input);

function hell(nowLength, nowI) {
  let i = nowI; //index값
  let lastNum; //(가 온다면 그 전 값
  while (i < input.length) {
    if (input[i + 1] === '(') {
      //다음값이 ( 가 온다면...
      lastNum = input[i]; // ( 앞 값을 일단 저장

      let [tempLength, tempI] = hell(0, i + 2); //재귀하고 나온 1번은 ( ) 안에 있는 숫자length, 2번은 i 값
      i = tempI;
      nowLength += tempLength * lastNum; //저장한 값과 길이를 곱!
      continue;
    }
    if (input[i] === ')') {
      return [nowLength, ++i];
    }
    nowLength++;

    if (input[i + 1] === ')') {
      return [nowLength, i + 2];
    }
    i++;
  }
  return [nowLength, i];
}
console.log(Number(hell(0, 0)[0]));
