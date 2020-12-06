//const add2 = x => x + 2   引数xに2を足す関数
//const mul2 = x => x * 2   引数xに2を掛ける関数
//上記のadd2, mul2の例を参考に、以下の数式をそれぞれ関数の組み合わせで記述してください。必要な関数は適宜作成してください。
//n * 100 - 5
//(n + 3) * 8 + 3
//nは変数で、自由な数値を代入して動作確認して構いません。

const sub5 = (x)=>{
    return x-5;
}
const add100 = x => x * 100;
const add3 = x => x + 3;
const add8 = x => x * 8;

const n = 5;
const a = add100(n);

console.log(sub5(a));
console.log(add3(add8(add3(n))));