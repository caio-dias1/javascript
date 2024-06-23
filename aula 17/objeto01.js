let amigo = {nome: 'Jose',
     sexo: 'M',
     peso: 57.7,
    engordar(p=0) {
        console.log('engordou')
        this.peso += p
    }}

amigo.engordar(3)
console.log(`O ${amigo.nome} pesa ${amigo.peso} Kgs.`)