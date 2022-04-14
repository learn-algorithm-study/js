let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let [size, ...board] = input;
size = size.toString().trim().split(' ');

//미리 완벽한 보드판을 설정
const bw = ['BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB'];
const wb = ['WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW'];

let result = 2555555;

//input된 보드판을 8칸씩 확인한다
for (let i = 0; i + 8 <= Number(size[0]); ++i) {
  for (let j = 0; j + 8 <= Number(size[1]); ++j) {
    const temp = check(i, j);
    if (result > temp) result = temp;
  }
}
console.log(result); //결과return

function check(i, j) {
  //미리 설정한 보드판과의 차이를 계산
  let BWcnt = 0;
  let WBcnt = 0;
  for (let k = 0; k < 8; ++k) {
    for (let h = 0; h < 8; ++h) {
      if (board[i + k][j + h] !== bw[k][h]) BWcnt++;
      if (board[i + k][j + h] !== wb[k][h]) WBcnt++;
    }
  }
  //차이가 더 적은 쪽을 return
  return Math.min(BWcnt, WBcnt);
}
