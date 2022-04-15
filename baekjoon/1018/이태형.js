let input = require('fs').readFileSync('예제.txt').toString().split('\r\n');

let [matrix_type, ...matrix] = input
let [row, column] = matrix_type.split(' ');
let count_list = [];

matrix = matrix.map(x => x.split(''));

const chess1 = ['W', 'B', 'W', 'B', 'W', 'B', 'W', 'B'];
const chess2 = ['B', 'W', 'B', 'W', 'B', 'W', 'B', 'W'];

// 체스판을 넣으면 최솟값을 구해주는 함수
const chess_minimum = (chess_pan) => {
    let count = 0;

    // 행
    for (let i = 0; i < 8; i++) {
        // 열
        for (let j = 0; j < 8; j++) {
            if (i % 2 === 0) {
                if (chess1[j] !== chess_pan[i][j]) {
                    count++
                }
            }
            else {
                if (chess2[j] !== chess_pan[i][j]) {
                    count++
                }
            }
        }
    }

    if (count < 32) {
        return count
    }

    return 64 - count
}

let chess_pan = matrix;
for (let i = 0; i < row - 7; i++) {
    for (let j = 0; j < column - 7; j++) {
        chess_pan = matrix
            .map(x => x.filter((y, index) => index > j - 1))
            .filter((x, index) => index > i - 1)
        
        count_list.push(chess_minimum(chess_pan));
    }
}

let min = Math.min.apply(null, count_list);

console.log(min)