
// 풀이
// 정렬해준 뒤 
// 배열의 첫 숫자가 1부터 시작되어야하는데 빈 배열이거나 배열의 첫 숫자가 1이 아니면 1을 리턴
// for문을 돌면서 현재 숫자가 이전숫자 + 1 이 아니면 이전숫자 + 1을 리턴
// 만약 빠진 수가 없다면 모든 수가 있으므로 마지막 수 + 1을 리턴

function solution(A) {
  const sortedArray = [...A].sort((a, b) => a - b)
  if (!sortedArray.length || sortedArray[0] !== 1) {
    return 1
  }

  for (let i = 1; i < sortedArray.length; i++) {
    const currentNum = sortedArray[i]
    const prevNumPlusOne = sortedArray[i - 1] + 1
    if (currentNum !== prevNumPlusOne) {
      return prevNumPlusOne
    }
  }
  return sortedArray[sortedArray.length - 1] + 1
}