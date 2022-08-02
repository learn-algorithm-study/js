/**
 * 풀이
 * 튜플 형식으로 배열을 만들고 (원의 왼쪽과 오른쪽 인덱스)
 * 원의 시작점(왼쪽)으로 정렬을 한다
 * 그리고 첫번째 배열(원)부터 이후 나오는 배열(원)들까지 모두 겹치는지 비교한다
 *   - 겹치는지 확인하는 방법은 첫번째 배열안에 다음에 올 배열의 첫번째 수가 포함되는지 확인
 *  @see https://miiingo.tistory.com/326 그림을 보면 이해가 빠르다
 * 그리고 겹칠때 마다 카운트를 올려주면 된다
 *  etc. 조건을 잘 걸어주지 못하면 시간 초과로 점수가 깎인다
 *  const [a1, a2] = locations[i] 로직을 중첩된 두번째 for문 안에 넣엇더니 시간초과가 났다
 *  정확한 위치에서 선언하는 것이 중요
 */

function solution(A) {
  const locations = A.map((v, i) => [i - v, i + v])
  locations.sort(([a], [b]) => a - b)
  let result = 0;

  for (let i = 0; i < locations.length; i++) {
    const [a1, a2] = locations[i]
    for (let j = i + 1; j < locations.length; j++) {
      const [b1] = locations[j]
      if (a1 <= b1 && b1 <= a2) {
        result++;
        if (result > 10000000) {
          return -1
        }
      } else {
        break;
      }

    }
  }
  return result
}