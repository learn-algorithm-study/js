// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, K) {
  // write your code in JavaScript (Node.js 8.9.4)
  const array = [...A]
  if (!array.length) {
    return array
  }
  for (let i = 0; i < K; i++) {
    array.unshift(array.pop())
  }
  return array
}
