/**
 * 첫번째 시도 
 * max counter 부분인 숫자가 length보다 클때 
 * 기존 array를 다시 max값에 맞춰서 새로 생성해 줬더니 array = Array.from({length: N}, () => max);
 * 효율성에서 탈락했다.
 * 
 * 두번째 시도
 * array를 계속생성하지 않는 방법
 * totalMax라는 변수를 새로 만든 후 
 * max counter 부분인 숫자가 length보다 클때 max를 totalMax에다가 집어넣어주고 - line 21
 * 기존 카운터 숫자보다 totalMax가 작으면 기존 카운터 숫자를 + 1
 * 기존 카운터 숫자보다 totalMax가 크면 totalMax + 1 을 대입 - line 26 ~ 30
 * 마지막에 array안에 totalMax보다 작은 수들이 있을 수 있어서 기존카운터 보다 작은 값다면 totalMax를 대입 
 */

function solution(N, A) {
  let max = 0;
  let totalMax = 0;
  const array = Array.from({ length: N }, () => 0)

  for (const num of A) {
    if (num > array.length) {
      totalMax = max
      continue;
    }
    if (array[num - 1] < totalMax) {
      array[num - 1] = totalMax + 1
    } else {
      array[num - 1] = array[num - 1] + 1
    }
    max = Math.max(max, array[num - 1])
  }

  return array.map(v => v > totalMax ? v : totalMax)
}