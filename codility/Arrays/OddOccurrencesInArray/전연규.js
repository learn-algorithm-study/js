// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

/* 풀이
 ** indexOf와 lastIndexOf로 풀었더니 시간제한에 걸려 55점이 나왔다
 ** js의 sort메서드는 시간복잡도가 O(N*log(N)) 이라서 정렬 이후에 짝이 맞지 않는 숫자 찾기
 */

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  const array = [...A].sort((a, b) => b - a)
  for (let i = 0; i < A.length; i = i + 2) {
    if (array[i] !== array[i + 1]) {
      return array[i]
    }
  }
}
