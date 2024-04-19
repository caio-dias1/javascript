function gerar () {
    let num = document.querySelector('input#num')
    let res = document.querySelector('p#res')
    if (num.value.length == 0) {
        window.alert('Digite um numero!')
    } else {
        let n = Number(num.value)
        let t = 0
        res.innerHTML = 'Multiplicando!<br>'
        while (t <= 10) {
            let r = n * t
            res.innerHTML += `${n} x ${t} = ${r} <br>`
            t ++ 
        }
        
    }
    
    
}