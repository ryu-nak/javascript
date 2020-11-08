//以下の雛形の①、②を埋めて、「呼び出すと表か裏が50%ずつの確率でコンソールに表示される」関数cointossを作成してください。
//また、動作確認のために、cointossを10回連続で実行するループも作成してください。

function cointoss() {
  const num = Math.floor(Math.random()*2 + 1)
  if (num === 1) {
    console.log('front')
  } else if (num === 2) {
    console.log('back')
  }
}

for (let i =1; i < 10; i++) {
    cointoss()
}