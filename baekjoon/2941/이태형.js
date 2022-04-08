let input = require('fs').readFileSync('예제.txt').toString();

const croatia_alphabet = [
    'c=',
    'c-',
    'dz=',
    'd-',
    'lj',
    'nj',
    's=',
    'z=',
]

let regexp;
let changed_str = input;

croatia_alphabet.forEach(alpha => {
    regexp = new RegExp(alpha, "gi");
    changed_str = changed_str.replace(regexp, "+");
})

console.log(changed_str.trim().length);