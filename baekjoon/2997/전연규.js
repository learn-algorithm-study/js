const fs = require('fs')
const input = fs.readFileSync('./test.txt').toString().trim()

/* 풀이  
   네개의 수가 [2, 4, 6, 8]이라고 가정 (세개의 수는 이 중에 하나가 없다)
   먼저 큰수부터 차례대로 정렬
   첫번째 수와 두번째수를 뺀 수 = distance1
   두번째 수와 세번째수를 뺀 수 = distance2
   만약 
   - distance1이 distance2보다 크다면 현재 [8, 4, 2] 가 있다는 뜻 
   - distance2가 distance1보다 크다면 현재 [8, 6, 2] 가 있다는 뜻
   - 두개가 같은 경우는 등차수열로 되어있다는 뜻이므로 제일 작은수에서 distance를 빼주면 됨 (제일 큰수에서 더해줘도 됨)
*/

function solution(input) {
  const inputArray = input.split(' ').map(Number)
  const [first, second, third] = [...inputArray].sort((a, b) => b - a)
  const distance1 = first - second
  const distance2 = second - third
  let result = 0
  if (distance1 > distance2) {
    result = first - distance2
  } else if (distance1 < distance2) {
    result = second - distance1
  } else {
    result = third - distance1
  }
  return result
}

console.log(solution(input))
