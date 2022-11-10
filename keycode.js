let text = document.querySelector('.text')
let elementName = document.querySelector('.name')

window.addEventListener("keydown", e => {
    text.textContent = e.keyCode
    elementName.textContent = `Letter ${e.key.toUpperCase()}`
} )
