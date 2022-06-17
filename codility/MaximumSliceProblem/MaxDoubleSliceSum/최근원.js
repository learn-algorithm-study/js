const DUMMY_A = [5, 17, 0, 3];

const maxSubArray = (nums) => {
  for (let i = 1; i < nums.length; i++) {
    nums[i] = Math.max(nums[i], nums[i] + nums[i - 1]);
  }

  return Math.max(...nums);
};

function solution(A) {
  if (A.length === 3) {
    return 0;
  }

  const head = Array.from({ length: A.length }, () => 0);
  const tail = Array.from({ length: A.length }, () => 0);

  for (let i = 1; i < A.length; i++) {
    head[i] = Math.max(head[i], head[i - 1] + A[i]);
  }

  for (let i = A.length - 2; i > 1; i--) {
    tail[i] = Math.max(tail[i], tail[i + 1] + A[i]);
  }

  console.log(head);
  let maxSum = 0;

  for (let i = 1; i < A.length - 1; i++) {
    maxSum = Math.max(maxSum, head[i - 1] + tail[i + 1]);
  }

  return maxSum;
}

console.log(solution(DUMMY_A));
