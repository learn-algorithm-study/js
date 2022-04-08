/** 2941
 * 문제 풀이 방법
 * 크로아티아 알파벳의 변경 값을 미리 저장해두었다가
 * 입력된 문자열에 대해 해당 알파벳이 몇개씩 있는지 개수를 세고,
 * 이미 카운트된 문자열은 제거한다.
 * 이후 남은 문자열의 length 값을 카운트 값과 더하여 출력 
 */

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();
// 입력된 문자열에 크로아티아 알파벳이 몇 개 존재하는지 카운트할 변수
let count = 0;
// 크로아티아 알파벳의 변경 값을 저장할 변수
const dict = [ 'c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z=',];

// dict를 한 바퀴 돈다.
for(let i = 0 ; i < dict.length; ++i) {
    // 입력된 문자열에 dict[i] 값에 해당하는 크로아티아 알파벳 변경 값이 존재하면 반복
    while(input.includes(dict[i])) {
        // 있을 경우 현재 input 문자열의 첫 dict[i] 값을 '0'으로 변경하여 삭제
        input = input.replace(dict[i], '0');
        // 카운트를 1 증가시킨다.
        count += 1;
    }
}

// '0'이 아닌 값을 카운트에 포함
for(let j = 0; j < input.length; ++j) {
    if(input[j] !== '0'){
        count += 1;
    }
}

//count 값과 남은 문자열의 길이를 합쳐서 출력 
console.log(count);