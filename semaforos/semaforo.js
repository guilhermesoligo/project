const img = document.getElementById('img')
const butttons = document.getElementById('buttons')
let colorIndex = 0
let intervalId = null

const trafficlght = (event) => {
    stopAutomatic ()
    turnOn[event.target.id]()
}

const nextIndex = () => colorIndex = colorIndex < 2 ? ++colorIndex : 0
       
const changecolor = () => {
    const colors = ['red', 'yellow', 'green']
    const color = colors [colorIndex]
    turnOn[color] ()
    nextIndex()
}
const stopAutomatic = () => {
    clearInterval (intervalId)
}
const turnOn = {
    'red': () => img.src = 'vermelho.jpg',
    'yellow': () => img.src ='amarelo.jpg',
    'green' : () => img.src = 'verde.jpg',
    'automatic': () => intervalId = setInterval (changecolor, 1000)
}
butttons.addEventListener('click', trafficlght)