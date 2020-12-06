//以下のitemsは、週✕日ごとに、なんらかの成績が記録されている配列だとします（配列の配列）。
//itemsのmapを呼び出して、「各週ごとの成績の合計値」の配列sumsに変換するプログラムを作成してください。

const items = [
// 日  月  火  水  木  金  土
  [14, 93, 89, 51, 85, 59, 33],
  [69, 27, 40, 76, 25, 21, 55],
  [55, 60,  3, 28, 49,  5, 91],
  [19, 56, 92, 66, 53, 80, 13],
]

const sums = items.map(
    (items) => {
        let sum = 0;
        items.forEach( num => sum = sum + num )
        return sum;
    }
)
console.log(sums) //=> [424, 313, 291, 379]


//const sums = items.map(
//    (items) => {
//        let sum = 0; [変数sumの定義]
//        items.forEach( num => sum = sum + num ) [itemsの値を一つずつ取り出して足している]
//        return sum; [足していった合計の値を戻り値としている]
//    }
//)
//console.log(sums) //=> [424, 313, 291, 379]