const container = document.getElementById('container')
const colors = ['#ffc0cb', '#ffc0eb', '#ffc0cc', '#ebffc0', '#d4c0ff', 'c0ebff']
const SQUARES = 500

for (let i = 0; i < SQUARES; i++) {
    const square = document.createElement('div')
    square.classList.add('square')
    container.appendChild(square)
    square.addEventListener('mouseover', () => setColor(square))
    square.addEventListener('mouseout', () => removeColor(square))
}

function setColor(element) {
    const color = colors[Math.floor(Math.random() * 6)]
    element.style.background = color
}

function removeColor(element) {
    element.style.background = '#ffffff'
}