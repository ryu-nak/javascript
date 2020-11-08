//以下の雛形を埋めて、下部のconsole.logの出力を満たすitemsの値を記述してください。

const items = [
    { n: 100},
    { a: { a: ['xyz'], b: ['abc'], c: ['def'] }, b: "200", c: { 100: "foober", 200: "youtube"}},
]

console.log(items[0].n) //=> 100
console.log(items[1].a.b[0]) //=> abc
console.log(items[1].c['100']) //=> foober