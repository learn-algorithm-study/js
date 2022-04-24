/* 풀이
*  숫자를 이진수로 변환 후 루프를 돌며
*  0일 때 count를 더하고 1일 때 
*  count에 있던 수와 max의 수 중 큰 수를 max로 바꿈 
*/

function solution(N) {
  const binary = N.toString(2)
  let max = 0;
  let count = 0;
  for (const num of binary) {
    if (num === '0') {
      count++;
    } else {
      max = Math.max(count, max)
      count = 0;
    }
  }
  return max
}