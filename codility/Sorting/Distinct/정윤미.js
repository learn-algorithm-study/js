function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let answer = 0;
    let arr = A.sort();
    for(let i = 1; i<arr.length; ++i){
        if(arr[i-1] != arr[i]){
            answer += 1
        }
    }
    if(arr.length){
        answer += 1
    }
    return answer;
}
