let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let inputString = input[0].split("");
let stack = [];
let answer = 0;
const isNumber = 1;

inputString.forEach(item => {
    if(item === ')'){
        //초기값
        let temp = 0;
        //  ( 문자가 나오기 전의 반복될 숫자(Q)를 temp 변수에 추가한다.
        while (stack[stack.length-1] !== "("){ 
            let popData = stack.pop();
            if(typeof popData === typeof isNumber){
                temp += popData;
            } else {
                temp += 1;
            }
        }
        // "(" 문자 제거
        stack.pop()    

        //반복할 숫자(K)
        let repetition = +stack.pop(); 
        if(temp !== 0){
            //K*Q
            stack.push(repetition * temp);
        }
    } else {
        stack.push(item)
    }
})

stack.forEach((i)=> {
    if(typeof i === typeof isNumber){
        answer += i;
    } else {
        answer += 1;
    }
})

console.log(answer)