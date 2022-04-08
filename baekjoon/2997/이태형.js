let input = require('fs').readFileSync('예제.txt').toString();

input = input.split(' ').map(x => Number(x));

// 숫자 오름차순으로 정렬
numbers = input.sort((a, b) => a - b);

diffs = [];

// 인접한 두 값의 차를 diffs 배열에 저장
for (let i = 0; i < 2; i++) {
    diffs.push(numbers[i + 1] - numbers[i])
}

// 만약 이미 등차수열이 형성되어 있다면 결과는 마지막값에 등차를 더한값
if (diffs[0] === diffs[1]) {
    result = numbers[2] + diffs[0];
} else {
    // 만약 이미 등차수열이 형성되어 있지 않다면 작은 값이 등차값
    // 등차가 큰곳에 올바른 등차를 만들기위한 결과값 필요
    if (diffs[0] > diffs[1]) {
        result = numbers[0] + diffs[1]
    } else {
        result = numbers[1] + diffs[0]
    }
}

console.log(result);