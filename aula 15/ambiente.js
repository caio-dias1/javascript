let num = [4, 8, 3, 9, 1]
num.push(5)
num.sort()
console.log(num)
console.log(`Nosso vetor tem ${num.length} posiçoes`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(8)
if (pos == -1) {
    console.log('o valor nao foi encontrado')
} else {
    console.log(`o valor 8 esta na posiçao ${pos}`)
}
