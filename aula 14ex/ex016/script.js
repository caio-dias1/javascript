function contar () {
    let inicio = document.querySelector('input#inicio')
    let fim = document.querySelector('input#fim')
    let passo = document.querySelector('input#passo')
    let resultado = document.querySelector('p#resultado')
    let n1 = inicio.value
    let n2 = fim.value
    let n3 = passo.value
        while (n1 <= n2) {
            resultado.innerHTML = `Contando:<br> ${inicio}`
            n1 = n1 + n3
        }
    
    
}