function solution(A) {
  let answer = 1;
  const sortedArray = A.sort((a, b) => a - b);

  for (const S of sortedArray) {
    if (S === answer) {
      answer++;
    }
  }

  return answer;
}
