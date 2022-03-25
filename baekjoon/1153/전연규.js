const fs = require('fs')
const input = fs.readFileSync('./test.txt').toString().trim()

/*
 골드바흐의 추측 - 유명한 정수론의 미해결 문제로 2보다 큰 모든 짝수는 두 소수의 합으로 나타낼 수 있다고 한다. 그 이러한 수를 골드바흐의 수라고 한다.
 해당 문제는 4개의 수를 제출 했을때 그 4개의 수가 일치하면 정답으로 인정해주는 것이 아니라, 4개의 수를 각각 소수인지 확인해주는 듯 하다.
 그래서 짝수면 (2, 2)를 제외한 후 시작하고, 홀수면 (2, 3)을 제외하고 시작하면 된다. (그래야 이중루프만으로 해결가능)
 
 불가능한 경우 - 제일작은 소수 4개 - (2, 2, 2, 2) 보다 작으면 4개의 소수합으로 분해할 수 없음.
*/

/*
 소수를 찾는 함수
 같은 수 2개를 곱하면 소수가 아니기 때문에 제곱근까지만 루프를 돈다.
 */
const isPrime = (number) => {
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false
    }
  }
  return true
}

// 입력으로 받은 숫자까지의 모든 소수를 배열에 담아주는 함수 ([2, 3, 5, 7, 11, ...])
const makePrimeArray = (number) => {
  const array = []
  for (let i = 2; i < number; i++) {
    if (isPrime(i)) {
      array.push(i)
    }
  }
  return array
}

const solution = (number) => {
  if (number < 8) return -1
  const isEven = number % 2 === 0
  const subtractNumber = isEven ? 4 : 5
  const matchNumber = number - subtractNumber
  const array = isEven ? [2, 2] : [2, 3]
  const primeArray = makePrimeArray(matchNumber)

  for (const a of primeArray) {
    for (const b of primeArray) {
      if (a + b === matchNumber) {
        array.push(a, b)
        return array.join(' ')
      }
    }
  }
}

console.log(solution(+input))
