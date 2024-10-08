function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('textano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('ERRO, verefique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >=0 && idade < 10) {
                //crianca
                img.setAttribute('src', 'menino.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'moco.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'homemadulto.jpg')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >=0 && idade < 10) {
                //crianca
                img.setAttribute('src', 'menina.jpg')
            } else if (idade < 21) {
                //ajovem
                img.setAttribute('src', 'moca.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'mulheradulta.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.<br>`
        res.appendChild(img)
    }
}