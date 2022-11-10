let text = document.querySelector('.text')
let elementName = document.querySelector('.name')

window.addEventListener("keydown", e => {
    text.textContent = e.keyCode;
    let keyName = e.key.toUpperCase();
    if (e.keyCode === 32) keyName = 'SPACEBAR';
    elementName.textContent = `Key ${keyName}`;
} )