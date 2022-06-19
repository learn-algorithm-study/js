function solution(A) {
  if (A.length === 3) {
    return 0
  }

  const headSums = Array.from({ length: A.length }, () => 0)
  const tailSums = Array.from({ length: A.length }, () => 0)

  for (let i = 1; i < A.length - 2; i++) {
    headSums[i] = Math.max(headSums[i], headSums[i - 1] + A[i])
  }
  for (let i = A.length - 2; i >= 2; i--) {
    tailSums[i] = Math.max(tailSums[i], tailSums[i + 1] + A[i])
  }

  let maxSum = 0

  for (let i = 1; i < A.length - 1; i++) {
    maxSum = Math.max(maxSum, headSums[i - 1] + tailSums[i + 1])
  }

  return maxSum
}