const fs = require('fs')
const input = fs.readFileSync('./test.txt').toString().split('\n').map(v => v.trim())

const [boardSize, ...chessInputArray] = input
const [M, N] = boardSize.split(' ').map(Number)

const wb = 'WBWBWBWB'
const bw = 'BWBWBWBW'
const MAX_SIZE = 8

function solution(chessInputArray) {
  const differenceLengths = []
  let row = 0;
  let col = 0;

  while (true) {
    let firstCount = 0
    let secondCount = 0
    let flag = true;
    for (let i = row; i < row + MAX_SIZE; i++) {
      const string = chessInputArray[i].slice(col, col + MAX_SIZE)
      const firstString = flag ? wb : bw
      const secondString = flag ? bw : wb
      firstCount += compareDifferentCount(string, firstString)
      secondCount += compareDifferentCount(string, secondString)
      flag = !flag
    }

    differenceLengths.push(firstCount, secondCount)

    if (row + MAX_SIZE === M && col + MAX_SIZE === N) {
      break;
    }

    if (col + MAX_SIZE === N) {
      row++;
      col = 0;
      continue;
    }

    col++;
  }

  return Math.min(...differenceLengths)
}

function compareDifferentCount(string1, string2) {
  let count = 0;
  for (let i = 0; i < string1.length; i++) {
    if (string1[i] !== string2[i]) {
      count++
    }
  }
  return count
}

console.log(solution(chessInputArray))