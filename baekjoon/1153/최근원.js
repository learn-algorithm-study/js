const fs = require("fs");
const val = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = 2;
const m = 1000000;
let prime = [];

// 에라토스테네스의 체를 사용하여 입력 최대 값에 산정한 소수를 전부 구합니다.
for (let i = n; i <= m; i++) {
  prime[i] = i;
}
for (let i = 2; i <= m; i++) {
  if (prime[i] === 0) continue;
  for (let j = i + i; j <= m; j += i) {
    prime[j] = 0;
  }
}

prime = prime.filter((n) => n !== 0);

// 골든바흐의 추축을 통해 두 개의 소수를 반환해주는 함수입니다.
const golden = (input) => {
  for (let i = 0; i < input.length; i++) {
    const num = Number(input[i]);
    const answer = [];

    // 주어진 수의 절반보다 작은 소수만 탐색하면 됨
    for (let j = 0; prime[j] < num / 2 + 1; j++) {
      // (주어진 수 - 소수)가 소수인지

      const index = prime.indexOf(num - prime[j]);
      // 소수일 경우
      if (index !== -1) {
        // 골드바흐 파티션이므로 배열에 저장
        answer.push([prime[j], prime[index]]);
      }
    }

    // 골드바흐 파티션이 존재했다면
    if (answer.length !== 0) {
      // 가장 마지막 파티션을 가져옴 (두 소수의 차이가 가장 작음)
      const a = answer.pop();
      // 출력
      return a;
    }
  }
};

// 메인 함수
function Soul() {
  const list = [];

  // 8 미만의 수는 4개의 소수로 이루어질 수 없으므로 -1을 리턴
  if (val < 8) {
    console.log(-1);
  } else {
    if (val % 2 == 1) {
      // 홀일 경우 2, 3에 골든바흐의 추측을 통해 리턴된 두 소수를 배열에 저장
      list.push(2);
      list.push(3);
      list.push(...golden([val - 5]));
    } else {
      // 짝일 경우 2, 2에 골든바흐의 추측을 통해 리턴된 두 소수를 배열에 저장
      list.push(2);
      list.push(2);
      list.push(...golden([val - 4]));
    }

    console.log(list.join(" "));
  }
}

Soul();
