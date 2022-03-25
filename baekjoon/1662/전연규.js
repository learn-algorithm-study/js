const fs = require('fs')
const input = fs.readFileSync('./test.txt').toString().trim()

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
