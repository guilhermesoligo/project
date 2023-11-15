function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    //var hora = 2
    var hora = data.getHours()
    msg.innerHTML = `it's ${hora} hours`
    switch(hora) {
        case 0:
            img.src = '024.png'
            document.body.style.background ='#1a358a'
            break
        case 1:
            img.src = '001.png'
            document.body.style.background ='#00518c'
            break
        case 2:
            img.src = '002.png'
            document.body.style.background ='#5c5c5c'
            break
        case 3:
            img.src = '003.png'
            document.body.style.background = '#8a8f4d'
            break
        case 4:
            img.src = '004.png'
            document.body.style.background = '#24234f'
            break
        case 5:
            img.src = '005.png'
            document.body.style.background = '#ffb11a'
            break
        case 6:
            img.src = '006.png'
            document.body.style.background ='#ef4f1f'
            break
        case 7:
            img.src = '007.png'
            document.body.style.background = '#bfece9'
            break
        case 8:
            img.src = '008.png'
            document.body.style.background = '#f58c9b'
            break
        case 9:
            img.src = '009.png'
            document.body.style.background ='#a274fc'
            break
        case 10:
            img.src = '010.png'
            document.body.style.background ='#8a0124'
            break
        case 11:
            img.src = '011.png'
            document.body.style.background ='#b346a5'
            break
        case 12:
            img.src = '012.png'
            document.body.style.background ='#5bd7df'
            break
        case 13:
            img.src = '013.png'
            document.body.style.background ='#947a93'
            break
        case 14:
            img.src = '014.png'
            document.body.style.background ='#0071c1'
            break
        case 15:
            img.src = '015.png'
            document.body.style.background ='#097c62'
            break
        case 16:
            img.src = '016.png'
            document.body.style.background = '#7b9e2a'
            break
        case 17:
            img.src = '017.png'
            document.body.style.background = '#4e225d'
            break
        case 18:
            img.src = '018.png'
            document.body.style.background = '#1c1934'
            break
        case 19:
            img.src = '019.png'
            break
        case 20:
            img.src = '020.png'
            break
        case 21:
            img.src = '021.png'
            break
        case 22:
            img.src = '022.png'
            break
        case 23:
            img.src = '023.png'
            break
        
    }


}