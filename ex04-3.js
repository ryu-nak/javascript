//課題04-2で作成したscoring関数をコピーして、以下のscores配列の各要素のscoringの結果をコンソールに表示するプログラムを作成してください。


const scores = [13, 67, 18, 54, 30, 22, 89, 49, 21, 65]

function scoring(score) {
    if (score >= 80) {
      return '秀'
    } else if (score >= 60) {
      return '良'
    } else if (score >= 30) {
      return '可'
    } else {
      return '不可'
    }
}

scores.forEach((scores)=>{
    console.log(scoring(scores))
})

// ここにscoresの各要素をループして、それぞれのscoringの結果を表示するプログラムを書く