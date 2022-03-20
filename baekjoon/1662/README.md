## 백준 알고리즘

### 압축 문제

https://www.acmicpc.net/problem/1662

정윤미 풀이 - https://temporal-mantis-680.notion.site/1662-f19d10bbbbbf4fc490cab44063e7f6cb

전연규 풀이 - https://mint-raptor-baa.notion.site/1662-1488fc5d905a46ae8c38b682ae7ca31a

### 문제 풀이 전연규

<br />

### 문제해석

압축된 문자열을 파싱하여 압축되지 않은 문자열의 길이 출력.

괄호 바로 앞에 있는 정수 하나만 괄호 안에있는 문자열 갯수와 곱하여 갯수를 더해준다.

괄호가 중첩되어 있는 경우 내부에 있는 괄호 먼저 계산을 해야한다.

### 풀이 아이디어

1. 첫번째 고민
   - 깊이 우선 탐색(dfs)을 하면서 어떻게 index를 컨트롤 할수 있을까?
     - 전역변수 혹은 클로저를 사용 (dfs 함수 외부에서 컨트롤)
     - 혹은 인자로 index를 넘겨야하는데 그러면 index도 리턴하면서 계산해야하므로 복잡도가 올라감
     - 그래야 탐색을 하던 탐색이 끝나던 index는 1씩 올라감
2. 두번째 고민
   - 괄호 안에 있는 숫자를 왼쪽에 있는 숫자에 어떻게 대입시킬까?
     - 괄호 왼쪽 숫자 하나를 저장해놓고
     - 괄호가 나오면 저장해놓은 왼쪽 숫자와 괄호 안에있는 수들을 곱함
     - 그 결과인 문자열 길이를 계속 더해줌

```javascript
const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim()

const solution = (strings) => {
  let index = 0

  const dfs = () => {
    let length = 0
    let prevCount = 0
    while (index < strings.length) {
      const char = strings[index++]
      switch (char) {
        case '(':
          length += Number(prevCount) * dfs() - 1
          break
        case ')':
          return length
        default:
          length++
          prevCount = char
          break
      }
    }
    return length
  }

  return dfs()
}

console.log(solution(input))
```

- case ‘(’ 바로 아래 라인에 있는 - 1 에 대한 설명
  - 조건없이 괄호의 바로 왼쪽에 있는 숫자도 +1을 해주고 있기때문에 -1을 해준다.
  - ex) `12(3)` 이라고하면 `2` 는 더해주는게 아니라 곱해주어야하는 값인데 default: 에서 괄호 왼쪽에 있는 값도 다 더해주고 있기 때문에 1을 빼준다.
