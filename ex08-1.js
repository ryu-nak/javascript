const a_tag = document.getElementsByTagName(`a`);
console.log(`${a_tag[0].textContent}`);

const h1 = document.getElementById(`todo`);
console.log(`${h1.children[0].textContent}`);

const li =document.getElementById('todo').getElementsByClassName('list')[0];
console.log(`${li.children[1].textContent}`);