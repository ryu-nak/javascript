//課題07-1と同様に、配列のオブジェクトに対して用意されているメソッドをリファレンスから調べて、気になったメソッドを3つほど試してください。
//また、文字列オブジェクトで使えるメソッドとの共通点、相違点を簡単にまとめましょう。

//Array.prototype.filter()
//filter()は配列の各要素に対して指定の処理を行い、trueと返した全ての要素からなる新しい配列を作る
const score = [1,2,3,4,5,6,7,8,9,10];
const even = score.filter(score => score % 2 === 0);
const odd = score.filter(score => score % 2 != 0);

console.log(even);
console.log(odd);
const hieven = even.filter(even => even > 5);

console.log(hieven);

//Array.prototype.join()
//join()は配列内の全ての要素を連結し、新しい文字列を作成します
console.log(score.join('-'));
console.log(even.join(','));
console.log(hieven.join(''));

//Array.prototype.reverse()
//reverse()は配列内の要素の順番を反転させます
const list = ['one', 'two', 'three'];

console.log(list);

const reversed = list.reverse();

console.log(reversed);
console.log(list);