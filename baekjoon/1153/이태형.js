let input = require('fs').readFileSync('예제.txt').toString();
input = Number(input);

let num = new Array(1000001).fill(0);

const prime = () => {
    for (let i = 2; i * i <= input; i++) {
        if (num[i] == 1) continue;
        for (let j = 2; j * i <= input; j++) num[i * j] = 1;
    }
}

const findPrime = (n) => {
    for (let i = 2; i <= n / 2; i++)
    {
        if (num[i] === 0 && num[n - i] === 0) {
            return i;
        }
    }
}

prime();

if (input < 9) console.log("-1");
else
{
    const t = findPrime(input);
    if (num % 2 == 1) {
        input -= 5;
        console.log("2 3 " + t.toString() + " " + (input - t).toString())
    }
    else
    {
        input -= 4;
        console.log("2 2 " + t.toString() + " " + (input - t).toString())
    }
}
