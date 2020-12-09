//「追加」ボタンを押すと、<ul id="list">の最後に<li>要素が追加される。
//このとき、<li>のテキストはアイテム1, アイテム2, ...のようにその要素が何番目かに応じて番号を振る。
//「削除」ボタンを押すと、<ul id="list">の最後の<li>要素が削除される。
//ただし、1つも<li>要素がなくても、コンソールにエラーが表示されないようにする。

const addButton = document.getElementById('add');
addButton.addEventListener('click', (event) => {
    const newlist = document.createElement('li');
    list.appendChild(newlist);
    newlist.textContent = `アイテム${list.children.length}`;
});

const removeButton = document.getElementById('remove');
removeButton.addEventListener('click', (event) => {
    list.removeChild(list.lastElementChild)
});