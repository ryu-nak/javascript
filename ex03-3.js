//下記のプログラムのarrayに代入された配列[1, 2, 3]を操作して、各段階のconsole.logの出力を満たすプログラムを作成してください。
//各段階のプログラムは、なるべく1行になるようにしてください。

const array = [1, 2, 3]

array.splice(0, 1)// ここに回答のプログラムを書く

console.log(array) //=> [2, 3]

array.push(5)// ここに回答のプログラムを書く

console.log(array) //=> [2, 3, 5]

array.splice(1, 2)// ここに回答のプログラムを書く

console.log(array) //=> [2]

array[0] = 100// ここに回答のプログラムを書く

console.log(array) //=> [100]