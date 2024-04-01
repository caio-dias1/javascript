function verificar () {
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    let res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('ERRO! Verifique os dados e tente novamente!')
    } else {
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade < 10) {
                // Criança
                img.setAttribute('src', 'imagens/kidh.png')
            } else if (idade < 18) {
                //Adolescente
                img.setAttribute('src', 'imagens/youngh.png')
            } else if (idade < 60) {
                // Adulto
                img.setAttribute('src', 'imagens/adulth.png')
            } else {
                // Idoso
                img.setAttribute('src', 'imagens/idosoh.png')
            }
        } else {
            genero = 'Mulher'
            if (idade < 10) {
                // Criança
                img.setAttribute('src', 'imagens/kidm.png')
            } else if (idade < 18) {
                //Adolescente
                img.setAttribute('src', 'imagens/youngm.png')
            } else if (idade < 60) {
                // Adulto
                img.setAttribute('src', 'imagens/adultm.png')
            } else {
                // Idoso
                img.setAttribute('src', 'imagens/idosom.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `${genero} de ${idade} anos<br>`
        res.appendChild(img)
    }
}