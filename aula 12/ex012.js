
var hora = 24
if (hora >= 4 && hora <= 12) {
    console.log(`bom dia! agora sao exatamente ${hora} horas`)
} else if (hora > 12 && hora <= 18) {
    console.log(`boa tarde! agora sao exatamente ${hora} horas`)
}   else if (hora > 18 && hora <= 24) {
    console.log(`boa noite! agora sao exatamente ${hora} horas`)
    } else {
        console.log(`boa madrugada! agora sao exatamente ${hora} horas`)
    }

