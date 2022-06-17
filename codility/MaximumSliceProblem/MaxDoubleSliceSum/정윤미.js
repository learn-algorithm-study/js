/** (69%)
 * 배열에서 첫번째 인덱스 원소와 마지막 인덱스원소를 제거한다.
 * 다이나믹 프로그래밍을 위한 최대치 기록 배열을 2개 만든 뒤
 * 앞에서 시작하는 연속된 부분합 중 최대치와
 * 뒤에서 시작하는 연속된 부분합 중 최대치를 기록한다.
 * 반복문을 돌며 한 인덱스를 기준으로 붙어있는 최대치를 구해 리턴 
 */

 function solution(A){
    let arr = [...A];
    arr[0] = 0;
    arr[A.length-1] = 0;
    // A의 길이가 3이하라면 return 0
    if(A.length < 3){
      return 0;
    }
    const first = Array(arr.length).fill(0);
    const sec = Array(arr.length).fill(0);
  
    // 동적 계획법
    for(let i = 1; i< arr.length; i++){
        first[i] = Math.max(0, first[i-1])+ arr[i]
    }

    for(let i = arr.length-2; i>0; i--){
        sec[i] = Math.max(0, sec[i+1])+ arr[i]
    }
    // 한 인덱스를 기준으로 근접한 부분한 최대치 중 가장 큰 값을 찾는다.
    let maxValue = 0;
    for(let i = 2; i<arr.length-1; ++i){
        maxValue = Math.max(maxValue, first[i-1]+sec[i+1])
    }
    return maxValue;
  }

  console.log(solution([3,2,6,-1,4,5,-1,2]))