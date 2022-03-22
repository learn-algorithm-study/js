let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let number = +input[0];
// 에라토스테네스의 체를 이용하기 위해 모든 수가 참(차후 소수임을 판별할 때 사용)인 배열 선언
let arr = Array(number).fill(true)
// 결과값 출력을 위한 문자열
let answerStr = "";
let end = false;

/**
 * 에라토스테네스의 체
 * 다수의 소수를 찾을 때 사용하는 알고리즘
 * 소수를 찾은 후, 그 배수는 소수가 아니게되므로 소수 목록에서 제거
 * 2부터의 소수를 찾을 때 유용하다
 * i의 최댓값이 number의 제곱근인 이유는 불필요한 연산을 줄여주기 위함
 */
for(let i = 2; i< parseInt(Math.sqrt(number)); ++i){
    // 2, 3 부터 시작하여 소수의 배수는 전부 소수가 아니기 때문에 false처리
    if(arr[i]){
        for(let j = 0; j * i <= number ; ++j ){
            arr[i*j] = false;
        }
    }
}

/**
 * 골드바흐의 추측: 짝수에 대해서 모든 수는 두개의 소수로 나눌 수 있다!!! 
 * 입력된 숫자는 짝수인지, 홀수인지에 따라 각각 4(2, 2)를 빼거나, 5(2,3)를 빼 2개의 소수 조합으로 만들 수 있다. 
 */
if(number === 8 ){
    // 4개의 소수로 찢어지는 수의 최솟값은 2 2 2 2 조합의 8
    answerStr = "2 2 2 2";
} else if (number < 8) {
    // 8보다 작을 경우 -1을 출력
    answerStr = "-1";
}else{
    if(number % 2 === 0) {
        // 입력된 수가 짝수일 경우 가장 작은 소수 조합인 4를 먼저 제외한다.
        answerStr = "2 2 ";
        number -= 4;
    } else {
        // 입력된 수가 홀수일 경우 가장 작은 소수 조합인 4를 먼저 제외한다.
        answerStr = "2 3 ";
        number -= 5;
    }
    for (let k = 2 ; k <= number ; k++) {
        for (let m = 2 ; m <= number ; m++) {
            // 2개의 소수 조합을 만들 수 있는 모든 경우를 돌면서
            let sum = k + m;
            // 더한 값이 number와 같고 각각의 수가 소수 일경우
            if(sum === number && arr[m]===true && arr[k]===true){
                // 문자열에 추가
                answerStr += `${k} ${m}`;
                // 종료 처리를 위한 변수
                end = true;
                break;
            }
        }
        // 종료 처리 변수를 이용하여 바깥 반복문이 돌지 않도록 처리
        if(end){
            break;
        }
    }
}

console.log(answerStr)