// 77점 ㅠㅠ
function solution(N, A) {
    // 구하고자 하는값은 N개의 배열로 이루어져 있고
    // 초기값은 모두 0이다
    let target = Array(N).fill(0);

    A.forEach(el => {
        // 원소가 N+1 일때 모든 값을 최대값으로 설정
        if (el === N + 1) {
            target.fill(Math.max(...target));
        }
        // 해당 원소에 해당하는 칸을 증가
        else {
            target[el - 1]++;
        }
    })

    return target;
}