function quantidade(vitorias, derrotas){
    const vitoriavencidas = vitorias - derrotas
    let niveldoheroi

    if(vitorias < 10){
        niveldoheroi = "ferro"
    }else if(vitorias >= 11 && vitorias <= 20){
        niveldoheroi = "bronnze"
    }else if(vitorias >= 21 && vitorias <=50){
        niveldoheroi = "prata"
    }else if(vitorias >= 51 && vitorias <= 80){
        niveldoheroi = "ouro"
    }else if(vitorias >= 81 && vitorias <= 90){
        niveldoheroi = "diamante"
    }else if(vitorias >= 91 && vitorias <=100){
        niveldoheroi = "lendario"
    }else{
        niveldoheroi = "imortal"
    }

    console.log(`heroi tem um saldo de ${vitoriavencidas} está no nível de ${niveldoheroi}`)
}

quantidade(70,30)