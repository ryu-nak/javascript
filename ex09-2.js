//課題09-1で作成したプログラムを拡張して、各<li>が以下のように画像つきになるように機能追加してください。
//
//<li>
//  <img src="http://placehold.it/64x64" alt="アイテム1">
//  <span>アイテム1</span>
//</li>
//これにより既存の機能に変更が必要な場合は、そこも修正して追加・削除が動作するようにしてください。

const addButton = document.getElementById('add');

addButton.addEventListener('click', (event) => {

    const newlist = document.createElement('li');
    list.appendChild(newlist);
    
    var img_element = document.createElement('img');
    img_element.src = 'http://placehold.it/64x64';
    img_element.alt = `アイテム${list.children.length}`;
    newlist.appendChild(img_element);
    
    const span_element = document.createElement('span');
    newlist.appendChild(span_element);
    span_element.textContent = `アイテム${list.children.length}`;
    
});

const removeButton = document.getElementById('remove');

removeButton.addEventListener('click', (event) => {
    list.removeChild(list.lastElementChild)
});