let valores = [8, 4, 5, 6, 9]
valores.sort()
/* percurso para exibiçao de vetores(forma classica)

for(let pos=0; pos<valores.length;pos++) {
    console.log(`A posiçao ${pos} tem o valor ${valores[pos]}`)
} */

//for otimizado para arrays e objetos obs: todo array em js é um objeto

for(let pos in valores) {
    console.log(`A posiçao ${pos} tem o valor ${valores[pos]}`)
}

valores.indexOf(6)
console.log(valores.indexOf(6))