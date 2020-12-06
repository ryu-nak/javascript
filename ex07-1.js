//「メソッドの調べ方」のセクションに書いてある方法で、文字列のオブジェクトに対して用意されているメソッドを調べてください。
//気になったメソッドを3つほどピックアップして、実際にプログラムを書いて動作を確認してください。

//String.prototype.repeat()
//repeat()は()内の回数、繰り返し処理が行なわれる
const hi = "こんにちは";
  
console.log(hi.repeat(3));

//String.prototype.concat()
//concat()は文字列引数を引っ張って来て文字列と連結し、新しい文字列を返す処理が行なわれる
const hello = "Hello";
const world = "World";
const wordjpn = "こんにちは、世界";

console.log(hello.concat(world));
console.log(world.concat(',',world));
console.log(hello.concat('',world));
console.log(hello.concat('',world).concat(' 翻訳 ',wordjpn));

//String.prototype.includes()
//includes()は１つの文字列を別の文字列の中に見出すことができるかどうかを判断して、正否を返す処理が行なわれる
const fox = "狐";
const animalList = "犬、狸、猫、象、狐、熊猫";
const bull = "雄牛";

console.log(`動物リストの中に${fox}${animalList.includes(fox)?'はいました':'はいませんでした'}`);
console.log(`動物リストの中に${bull}${animalList.includes(bull)?'はいました':'はいませんでした'}`);