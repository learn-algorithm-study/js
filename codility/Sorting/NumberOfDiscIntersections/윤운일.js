//https://app.codility.com/programmers/lessons/6-sorting/number_of_disc_intersections/
//81% .. timeout 으로 결국 100퍼를 채우지 못했다.

// 원의 낮은 값들을 lower배열에 정렬
// 원의 높은 값들을 upper배열에 정렬

// lower의 인덱스값은 해당 원이 겹칠 수 있는 최댓값이다.
// 그 최댓값에서 upper배열을 보면서 lower값보다 낮은 값만 빼면 해당원의 겹침갯수가 된다.

const A = [1, 5, 2, 1, 4, 0];

function solution(A) {
    let lower = [];
    let upper = [];
    for (let i = 0; i < A.length; ++i) {
        lower.push(i - A[i]);
        upper.push(i + A[i]);
    }

    lower.sort((a, b) => a - b);
    upper.sort((a, b) => a - b);
    let result = 0;
    for (let i = 0; i < lower.length; ++i) {
        let count = i;
        for (let u = 0; u < upper.length; ++u) {
            if (lower[i] > upper[u]) count--;
            else break;
        }
        result += count;
    }
    return result;
}

// console.log(solution(A));
