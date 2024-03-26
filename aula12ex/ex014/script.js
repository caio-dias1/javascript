function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora sao ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        // BOM DIA
        img.src = 'imagens/manha.png'
        document.body.style.background = '#9e9e05'
    } else if (hora > 12 && hora < 19) {
        // BOA TARDE
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#ca5327'
    } else if (hora > 24) {
        window.alert('HORARIO INVALIDO!')
    } else {
        // BOA NOITE
        img.src = 'imagens/noite.png'
        document.body.style.background = '#1c1c7e'
    }
    
}
