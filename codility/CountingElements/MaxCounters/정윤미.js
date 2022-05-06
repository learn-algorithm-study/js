/**
 * 77% -> A안의 원소를 한바퀴 돌며 각각의 데이터가 
 * N보다 클 때 / 크지 않을 때로 나누어 처리한다.
 * 클 경우 arr 배열 중 가장 큰 값으로 모든 배열의 원소를 교체하고
 * 작을 경우 원소의 데이터와 인덱스 번호가 똑같은 위치에 1을 추가한다.
 * 마지막 두 문제에 대한 타임아웃으로 성공 못했다....
 * 실행시간을 줄일 다양한 방법을 모색했으나, 계속 떨어지기만 하는 중,,,,,,
 */
 function solution(N, A){
  let arr = [...A];
  let answer = new Array(N).fill(0)
  let maxValue = 0;

  arr.forEach((el)=>{
      if(N<el){
          answer = answer.fill(maxValue)
      }else{
          answer[el-1] += 1
          if(maxValue<answer[el-1]){
              maxValue = answer[el-1];
          }
      }
  })
  return answer
}