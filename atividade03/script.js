function verificar (){
    var data = new Date() //pegar data atual//
    var ano = data.getFullYear() // pegar o ano atual//
    var formularioAno = document.getElementById('txtAno')
    var resultado = document.querySelector('div#res')

    if (formularioAno.value.lenggth == 0 || formularioAno.value > ano) {
        window.alert('[ERRO] verifique os dados e tente novamente!')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(formularioAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade <10){
                //criança
                img.setAttribute('src','criançahomem.png')
            } else if (idade < 21){
                //jovem
                img.setAttribute('src','jovemhomem.png')
            } else if (idade < 50){
                //adulto
                img.setAttribute('src','adultohomem.png')
            }else{
                img.setAttribute('src','idosohomem.png')
                //idoso
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade <10){
                //criança
                img.setAttribute('src','criançamulher.png')
            } else if (idade < 21){
                //jovem
                img.setAttribute('src','jovemmulher.png')
            } else if (idade < 50){
                //adulto
                img.setAttribute('src','adultamulher.png')
            }else{
                //idoso
                img.setAttribute('src','idosamulher.png')
            }
        }
        resultado.innerHTML = `Vc é um(a)${genero} com ${idade} anos`
        resultado.appendChild(img)
    }
}