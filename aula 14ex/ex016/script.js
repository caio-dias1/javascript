function contar () {
    let inicio = document.querySelector('input#inicio')
    let fim = document.querySelector('input#fim')
    let passo = document.querySelector('input#passo')
    let resultado = document.querySelector('p#resultado')
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        resultado.innerHTML = 'Impossivel contar!'
    } else {
        resultado.innerHTML = 'Contando: <br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            window.alert('Passo invalido! Considerando Passo 1')
            p = 1
        }
        if (i < f) {
            // contagem crescente
            for(let c = i; c <= f; c += p) {
                resultado.innerHTML += `${c} &#x1F449 `
                } 
        } else {
            // contagem decrescente
            for(let c = i; c >= f; c -= p) {
                resultado.innerHTML += `${c} &#x1F449 `
            }
        }
        resultado.innerHTML += `\u{1F3C1}`
        
    }
}
    
