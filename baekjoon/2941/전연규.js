const fs = require('fs')
const input = fs.readFileSync('./test.txt').toString().trim()

/* 풀이 
   크로아티아 알파벳 같은 특수한 문자들을 먼저 배열에 넣어놓은 후
   해당 문자를 한개의 문자로 치환시켜버리면 크로아티아 문자의 수를 알 수 있다.
   
   정규식 풀이
   c= || c- || dz= || d- || ...  에 해당하는 정규식은 (c=)|(c-)|(dz=)|(d-) ... 이다
   그래서 그에 맞게 RegExp 객체를 생성한 후 
   replace함수로 공백(문자 1개처리)을 넣어준 후 length를 출력
*/

const croatianAlphabets = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z=']
const regex = new RegExp(croatianAlphabets.map(v => `(${v})`).join('|'), 'g')
console.log(input.replace(regex, ' ').length)