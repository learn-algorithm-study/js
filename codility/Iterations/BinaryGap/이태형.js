function solution(N) {
    let number = Number(N).toString(2);
    let one_index_list = [];
    let gap_list = [];

    // 1이 있는 index 추출
    for (let i = 0; i < number.length; i++) {
        if (number[i] === '1')
            one_index_list.push(i);
    }

    // 1이 없거나 하나라면 0 반환
    if (one_index_list.length <= 1) {
        return 0;
    }
    else {
        // 현재 1 인덱스 위치에 다음 1 인덱스 위치 차이 - 1
        for (let i = 0; i < one_index_list.length - 1; i++) {
            gap_list.push(one_index_list[i+1] - one_index_list[i] - 1)
        }

        return Math.max(...gap_list)
    }
}
