function verificar () {
    let nasc = document.getElementById('ano')
    let ano = Number(nasc.value)
    let texto = document.getElementById('texto')
    let img = document.getElementById('foto')
    idade = 2024 - ano
    texto.innerHTML = `Voce tem ${idade} anos`
    
    
}