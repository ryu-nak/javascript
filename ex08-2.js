//<body>
//  <h1>DOM</h1>
//  <p>JavaScriptからHTMLを扱うための仕組み</p>
//  <h2>印象に残っているトピック</h2>
//  <ul>
//    <li>documentオブジェクト</li>
//    <li>getElementById</li>
//    <li>イベントリスナ</li>
//  </ul>
//</body>

const dom = document.createElement('h1');
dom.textContent = 'DOM'

const text = document.createElement('p');
text.textContent = 'JavaScriptからHTMLを扱うための仕組み'

const topic = document.createElement('h2');
topic.textContent = '印象に残っているトピック'

const ul = document.createElement('ul');

const list = document.createElement('li');
list.textContent = 'documentオブジェクト'

const list1 = document.createElement('li');
list1.textContent = 'getElementById'

const list2 = document.createElement('li');
list2.textContent = 'イベントリスナ'

document.body.appendChild(dom);
document.body.appendChild(text);
document.body.appendChild(topic);
document.body.appendChild(ul);
document.body.appendChild(list);
document.body.appendChild(list1);
document.body.appendChild(list2);
