let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n")[0].split(" ").map(x=>+x);
let firDiff = 0;
let secDiff = 0;

// 들어온 데이터를 크기 순으로 정렬
input.sort((a,b)=>a-b);

// 세 개의 숫자 간의 차이를 구한다 
// map 사용시 [undefined, number, number] 의 형식으로 나오는데, 
// filter를 통해 undefined 삭제
[firDiff, secDiff] = input.map((data, i, arr)=>{ 
  if(i>0){
    return data-arr[i-1]
  }
}).filter(x=>+x)

if(firDiff>secDiff){ 
  // 첫 번째와 두 번째 숫자간의 차이가 두 번째와 세 번째 숫자 간의 차이보다 큰 경우
  // 첫 번째 숫자에 공차(두 번째와 세 번째 숫자간의 차이)를 더해준다
  console.log(input[0]+secDiff)
}else if(firDiff<secDiff){
  // 두 번째와 세 번째 숫자간의 차이가 첫 번째와 두 번째 숫자간의 차이보다 큰 경우
  // 첫 번째 숫자에 공차(두번째와 세번째 숫자간의 차이)를 더해준다
  console.log(input[1]+firDiff)
}else{
  // 이미 세 개의 숫자가 등차수열인 경우
  // 마지막 숫자에 공차를 더해준다.
  console.log(input[2]+firDiff)
}

