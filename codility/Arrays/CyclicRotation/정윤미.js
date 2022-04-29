// 한 번 회전한 배열을 반환하는 함수
function rotation(arr) {
  let temp = [arr[arr.length - 1]];
  return temp.concat(arr.slice(0, arr.length - 1));
}

function solution(A, K) {
  let arr = A;
  // 만약 K값이 A 배열의 길이보다 크고, A의 길이로 나누어 떨어지면 회전 이후 원본과 동일하다고 판단하여 그대로 반환한다.
  if (K >= A.length && K % A.length === 0) {
    return A;
  }
  // 무의미한 회전 횟수를 줄이기 위하여 K의 값이 A의 길이보다 크면 K값을 A의 길이로 나눈 나머지 값으로 대입하여 처리한다.
  if (K > A.length) {
    K = K % A.length;
  }
  // 회전이 필요한 수만큼 로테이션을 돌린다.
  for (let i = 0; i < K; ++i) {
    arr = rotation(arr);
  }
  // 결과값 반환
  return arr;
}
