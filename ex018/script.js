function add () {
    let numeros = []
    let num = document.querySelector('input#num')
    let numero = Number(num.value)
    let resultado = document.querySelector('div#res')
    if (numero >= 1 & numero <= 100) {
        numeros.push(numero)
        resultado.innerHTML += `Valor ${numero} adicionado.<br>`
    } else {
        window.alert('Valor inválido!')
    }


}

