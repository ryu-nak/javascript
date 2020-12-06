//10未満の自然数のうち, 3 もしくは 5 の倍数になっているものは 3, 5, 6, 9 の4つがあり, これらの合計は 23 になる.
//同じようにして, 1000 未満の 3 か 5 の倍数になっている数字の合計を求めよ.
//関数化

function result(num) {
    let score = 0;
    for (let i = 0; i < num; i++) {
        if (i % 3 === 0) {
            score += i;
        } else if (i % 5 === 0) {
            score += i;
        }
    }
    return score;
};

console.log(result(1000));

console.log(result(10));