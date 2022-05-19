// 풀이
// 배열로 들어온 숫자를 중복제거 + 정렬 + 0보다 작은 수 제거
// 배열로 들어온 숫자가 0보다 작은 수들만 있거나 1보다 큰수부터 시작한다면 return 1
// 1부터 시작하는 수들중 연속되는 지점이 끊기면
// 끊기기 전의 수 + 1을 리턴
// 연속된 숫자들만 있다면 마지막 수 + 1을 리턴

function solution(A) {
  const uniqueNums = [...new Set(A)].sort((a, b) => a - b).filter((v) => v > 0)
  if (!uniqueNums.length || uniqueNums[0] > 1) {
    return 1
  }
  for (let i = 0; i < uniqueNums.length; i++) {
    if (i > 0) {
      if (uniqueNums[i] !== uniqueNums[i - 1] + 1) {
        return uniqueNums[i - 1] + 1
      }
    }
  }
  return uniqueNums[uniqueNums.length - 1] + 1
}
