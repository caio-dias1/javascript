function gerar () {
    let num = document.querySelector('input#num')
    let res = document.querySelector('select#res')
    if (num.value.length == 0) {
        window.alert('Digite um numero!')
    } else {
        let n = Number(num.value)
        let t = 0
        res.innerHTML = 'Multiplicando!<br>'
        while (t <= 10) {
            let item = document.createElement('option')
            let r = n * t
            item.text = `${n} x ${t} = ${r}`
            res.appendChild(item)
            t ++ 
        }
        
    }
    
    
}
