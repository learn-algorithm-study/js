## 백준 알고리즘

### 크로아티아 알파벳

https://www.acmicpc.net/problem/2941



## 문제 풀이 이태형

### 문제해석

크로아티아 알파벳은 2~3 글자의 문자열로 이루어져 있으므로
이 알파벳을 1글자의 겹치지않는 임의의 문자로 변경하여
글자수를 계산하면 될 것이라고 생각하였습니다.

### 문제풀이

크로아티아 문자를 미리 배열안에 담아두고
정규식을 이용해 하나씩 입력 문자열과 비교하여 같은 문자열을
'+'로 변경하는 작업을 진행하였습니다.

```javascript
let regexp;
let changed_str = input;

croatia_alphabet.forEach(alpha => {
    regexp = new RegExp(alpha, "gi");
    changed_str = changed_str.replace(regexp, "+");
})

console.log(changed_str.trim().length);
```