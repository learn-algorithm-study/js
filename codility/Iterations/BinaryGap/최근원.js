function solution(N) {
  const binary = N.toString(2);
  let answer = 0;
  const darry = [];

  for (let i = 0; i < binary.length; i++) {
    if (binary[i] === "1") {
      darry.push(answer);
      answer = 0;
    } else {
      answer++;
    }
  }

  return Math.max(...darry);
}
