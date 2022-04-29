function solution(N) {
  // 2 진수 변환
  const binary = N.toString(2);
  // 0 최대 개수 저장용 변수
  let answer = 0;
  // answer[] 배열
  const darry = [];

  // 바이너리 Length만큼 돌면서 근접한 0의 개수만큼 배열에 저장
  for (let i = 0; i < binary.length; i++) {
    if (binary[i] === "1") {
      darry.push(answer);
      answer = 0;
    } else {
      answer++;
    }
  }

  // 배열 데이터 중 가장 큰 값을 리턴
  return Math.max(...darry);
}
