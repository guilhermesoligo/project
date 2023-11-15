function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date ()   
    var hora = data.getHours()    
    msg.innerHTML = `São ${hora} horas`
    if (hora >= 6 && hora < 12) {
        //Bom dia!
        img.src = 'fotodia.png'
        document.body.style.background = '#efde7c'
    }   else if (hora>= 12 && hora< 18){
        //boa tarde!
        img.src ='fototarde.png'
        document.body.style.background = '#cb5516'
        
    }   else if (hora >= 18 && hora <= 23){
        //boa noite!
        img.src = 'fotonoite.png'
        document.body.style.background = '#4c4c4c'
    }   else {
        //boa madrugada
        img.src = 'fotomadrugada.png'
        document.body.style.background = '#282e3a'
    }
}