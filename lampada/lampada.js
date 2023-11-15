const ligar = document.getElementById ('ligar');
const desligar = document.getElementById ('desligar');
const lamp = document.getElementById ('lamp');

function isLampBroken () {
    return lamp.src.indexOf ('quebrada') > - 1 
}

function lampLigar () {
    if ( !isLampBroken () ) {
        lamp.src = 'ligada.jpg';
    }
}

function lampOff () {
    if ( !isLampBroken () ) {
        lamp.src ='off.jpg';
    }
}
function lampbroken () {
    lamp.src ='quebrada.jpg';
}
ligar.addEventListener('click', lampLigar);
desligar.addEventListener('click', lampOff);
lamp.addEventListener ('mouseover', lampLigar);
lamp.addEventListener ('mouseleave', lampOff);
lamp.addEventListener ('dblclick',lampbroken);