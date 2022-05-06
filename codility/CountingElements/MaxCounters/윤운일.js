/*
  열심히 풀려했지만 77%....
  결국 마지막 2개의 케이스에서 Time Out를 해결하지 못함...

  1. 숫자가 최대값이면 배열내의 최대값을 max에저장
  2. 배열에 넣을 값이 max보다 작으면 배열안에 max+1로 저장
  3. 위의 두 조건에 속하지 않으면 배열안의 값+1

  마지막 return 전에 최대값보다 작은 값이 있으면 최대값으로 변환
*/

function solution(N, A) {
  // write your code in JavaScript (Node.js 8.9.4)
  const arr = Array.from({ length: N }, () => 0);
  let max = 0;
  for (let i = 0; i < A.length; ++i) {
    if (A[i] === N + 1) {
      max = Math.max(...arr);
    } else if (max > arr[A[i] - 1]) {
      arr[A[i] - 1] = max + 1;
    } else {
      arr[A[i] - 1]++;
    }
  }
  return arr.map((data) => (data > max ? data : max));
}
