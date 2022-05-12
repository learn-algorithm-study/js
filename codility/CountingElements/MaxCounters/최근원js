/**
 * 계산해야하는 X배열은 N개의 길이를 가지고 있으며 0으로 초기화 되어있다.
 * 계산기는 두 가지 동작을 하며 이는 아래와 같다.
 *
 * 1. A[i]에 해당하는 값에 해당하는 X배열의 인덱스에 해당하는 값을 1 increase 한다.
 * 2. A[i] > N일 경우 모든 배열의 숫자에 X배열의 최대값을 더한다.
 *
 */

/**
 * 문제를 읽고 쉽다고 생각한 내가 바보였다..
 * 확실히 백준 문제와는 다르게 효율성 테스트가 많이 빡셌다.
 *
 * 첫 번째 시도는 solution_prev 함수이며, 효율성 테스트에서 멸망했다.
 */

/**
 * solution_prev 동작 과정
 * 1. for문을 역순으로 돌아 인덱스 범위를 초과하는 A[i] 값이 올때까지 순회한다.
 * 2. 해당 값을 저장해놓은 상태에서 for문을 처음부터 1번 순회한 최종 index까지 돌며 가장 높은 숫자를 구한 후 모든 배열에 더한다.
 */

/**
 * solution_prev 문제
 * 슬프게도 for문이 두개나 들어갔다.
 * O(N*M)은 해당 문제를 통과할 수 있는 성능이 아니었다.
 */
function solution_prev(N, A) {
  let arr = Array.from({ length: A }, () => 0);
  let spliceIndex;
  const obj = {};

  for (let i = N.length - 1; i !== -1; i--) {
    if (A < N[i]) {
      spliceIndex = i;
      break;
    }

    arr[N[i] - 1] += 1;
  }

  // 인덱스를 초과하는 값이 있을 때
  if (spliceIndex) {
    for (let i = 0; i < spliceIndex; i++) {
      if (A >= N[i]) {
        obj[N[i]] = (obj[N[i]] || 0) + 1;
      }
    }

    if (Object.keys(obj).length) {
      const sumSize = Math.max(...Object.values(obj));

      arr = arr.map((e) => e + sumSize);
    }
  }
  return arr;
}

/**
 * 두 번째 시도 (77%)
 */

/**
 * solution_prev2 동작 과정
 * 1. A 배열을 순회하며 N 을 넘을 경우 현재 배열의 최대 값을 누적 시키고 배열을 초기화한다.
 * 2. 누적된 값과 최종 배열을 더한다.
 */

/**
 * solution_prev2 문제
 * for 문은 하나로 줄었지만 answer.fill이라는 처리가 시간을 많이 잡아먹었다.
 * 고로 fill을 사용하지 않고 값을 누적 시키는 방법을 모색해야 했다.
 */
function solution_prev2(N, A) {
  let answer = Array.from({ length: N }, () => 0);
  let star = 0;
  let max = 0;

  for (let i = 0; i < A.length; i++) {
    if (A[i] > N) {
      star += max;
      answer.fill(0);
      max = 0;
    } else {
      let ai = (answer[A[i] - 1] += 1);

      if (ai > max) {
        max = ai;
      }
    }
  }

  if (star > 0) {
    for (let i = 0; i < answer.length; i++) {
      answer[i] += star;
    }
  }

  return answer;
}

/**
 * 세 번째 시도 (100%)
 */

/**
 * solution_curr 동작 과정
 * 1. A 배열을 순회하며 star보다 낮은 값의 경우 배열에 star + 1을 대입하고 star보다 높다면 해당값에서 1만 추가한다.
 * 2. 그 외 나머지 인덱스는 최종 과정에서 star 로 변경해 처리한다.
 */

function solution_curr(N, A) {
  let answer = Array.from({ length: N }, () => 0);
  let star = 0;
  let max = 0;

  for (const item of A) {
    if (item > N) {
      star = Math.max(star, max);
      max = 0;
    } else {
      if (answer[item - 1] < star) {
        answer[item - 1] = star + 1;
      } else {
        answer[item - 1] += 1;
      }

      max = Math.max(answer[item - 1], max);
    }
  }

  return answer.map((a) => Math.max(a, star));
}
