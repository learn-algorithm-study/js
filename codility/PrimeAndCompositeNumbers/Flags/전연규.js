
function solution(A) {
  if (A.length <= 2) {
    return 0
  }
  const peaks = getPeaks(A)
  const results = []
  let sqrt = parseInt(Math.sqrt(A.length - 2));
  while (sqrt) {
    let result = peaks.length ? 1 : 0;
    let prevPeak = peaks[0];
    for (let i = 1; i < peaks.length; ++i) {
      if (sqrt < result) {
        break;
      }
      if (peaks[i] > prevPeak + sqrt) {
        prevPeak = peaks[i]
        ++result;
      }
    }
    results.push(result)
    sqrt -= 1
  }

  return Math.max(...results);
}


function getPeaks(A) {
  const result = []
  for (let i = 1; i < A.length - 1; ++i) {
    if (A[i - 1] < A[i] && A[i] > A[i + 1]) {
      result.push(i)
      ++i;
    }
  }
  return result
}