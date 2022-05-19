// https://app.codility.com/programmers/lessons/4-counting_elements/missing_integer/

/**
 * 1. 주어진 배열을 오름차순으로 정렬하고 index 0부터 끝까지 확인하면 될듯?
 *
 * 2. ?? 왜 44퍼?? 왜 다들 10을 출력하지?
 *
 * 3. 아 sort 정렬을 잘못 썼구나  A.sort() => A.sort((a,b)=>a-b)
 *
 * 4. 끝
 */

function solution(A) {
  let result = 1;
  A.sort((a, b) => a - b);
  for (let i = 0; i < A.length; ++i) {
    if (A[i] === result) {
      result++;
    }
  }
  return result;
}
