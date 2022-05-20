/**
 * 문제해석: N개의 정수로 이루어진 배열 A가 주어질 때, A에 존재하지 않는 가장 작은 양의 정수(0보다 큼)를 반환한다. 
 * 1. 배열의 모든 원소가 0이하일 경우 => 1을 반환
 * 2. 배열의 모든 원소가 연속될 경우 => 끝 수 보다 1 큰 값을 반환
 * 3. 배열의 원소 중 빈 수가 있는 경우 => 비어있는 수 중 가장 작은 수를 반환
 */

/**
 * 첫번 째 문제 접근 (11%-> 세상에..! 하나씩 고쳐봅시다..!)
 * A 배열을 바탕으로 정렬을 한다.(이후 arr으로 표현)
 * 마지막 원소가 0보다 작으면 1을 반환(문제해석 1번으로 판단하여)
 * 마지막 원소가 0보다 크면 (arr배열에 마지막 원소에서 2를 더한 값)을 배열 마지막 원소로 새로 추가한다.
 *  (문제해석 1번과 3번의 경우를 합치기 위함)
 * find 메소드를 사용하여 이후 원소와의 값 차이가 1을 초과하는 값을 찾고(answer) 찾은 answer값에 1을 추가하여 반환
 */
// function solution(A){
//   let arr = [...A];
//   arr.sort();
//   if(arr[arr.length-1]>0){
//     arr.push(arr[arr.length-1]+2)
//   }else{
//     return 1;
//   }
//   let answer = arr.find((el, idx, array)=>{
//     return (array[idx+1]-el) > 1
//   })
//   return answer+1;
// }

/**
 * 첫번 째 문제 접근 - 2 (33%)
 * 일단 음수와 양수가 섞여있는 경우에 대해 캐치를 잘 못한 것이 틀림 없다.
 * 시작이 1을 이미 초과한 경우 누락
 */
 function solution(A){
  let arr = [...A].sort().filter((el)=> el>0);
  if(!arr.length || arr[0]>1){
    return 1;
  }

  for(i = 0; i<arr.length; ++i){
    if(arr[i+1]-arr[i] > 1){
      return arr[i]+1;
    }
  }
  return arr[arr.length-1]+1;
}

console.log(solution([2,3,6, 5, 4,3,2])+"\n\n")
console.log(solution([0, 0, 0, 0])+"\n\n")
console.log(solution([0, 0, 0, 0])+"\n\n")
console.log(solution([-1, -3, 0])+"\n\n")
console.log(solution([-9999, -3, 0, 1, 2]))