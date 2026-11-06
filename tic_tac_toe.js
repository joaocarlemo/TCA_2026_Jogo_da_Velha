modoDeJogo = prompt(`Bem-vindo(a) ao jogo da velha.
    Primeiro, selecione o modo de jogo (digite 1 para jogar contra o bot, 
    digite 2 para jogar contra outro jogador no mesmo dispositivo):`)

espacos = [
    "1", "2", "3",
    "4", "5", "6",
    "7", "8", "9"
    ]
function posicionar(espaco, caracter){
    if (espacos[espaco - 1] == "X" || espacos[espaco - 1] == "O"){
        console.log("essa casa já está ocupada.")
        espaco = parseInt(prompt(`vez do ${caracter}, digite o número do espaço para fazer sua jogada: `))
        posicionar(espaco, caracter)
        mostrarJogo()
        verificarJogo()
    }
    else{
        return espacos[espaco - 1] = caracter
    }
}
function mostrarJogo(){
    console.log(`
        ${espacos[0]} | ${espacos[1]} | ${espacos[2]}
        ${espacos[3]} | ${espacos[4]} | ${espacos[5]}
        ${espacos[6]} | ${espacos[7]} | ${espacos[8]}`)
}

function verificarJogo(caracter){
    if (((espacos[0] == caracter) && (espacos[1] == caracter) && (espacos[2] == caracter)) 
            || ((espacos[3] == caracter) && (espacos[4] == caracter) && (espacos[5] == caracter))
            || ((espacos[6] == caracter) && (espacos[7] == caracter) && (espacos[8] == caracter))
            || ((espacos[0] == caracter) && (espacos[3] == caracter) && (espacos[6] == caracter))
            || ((espacos[1] == caracter) && (espacos[4] == caracter) && (espacos[7] == caracter))
            || ((espacos[2] == caracter) && (espacos[5] == caracter) && (espacos[8] == caracter))
            || ((espacos[0] == caracter) && (espacos[4] == caracter) && (espacos[8] == caracter))
            || ((espacos[2] == caracter) && (espacos[4] == caracter) && (espacos[6] == caracter))) {
            jogoEmAndamento = false
            console.log(`jogo encerrado, ${caracter} venceu`)
        } 
    else {
        empate = 0
        for(i = 0; i < espacos.length; i++){
            if (espacos[i] == "X" || espacos[i] == "O"){
                empate++
            }
        }
        if (empate == 9){
            console.log(`o jogo terminou em velha, empate.`)
            jogoEmAndamento = false
        } else { empate = 0 }
    }
    return jogoEmAndamento
}

if (modoDeJogo == 2){
    jogoEmAndamento = true
    mostrarJogo()
    quemComeca = Math.round(Math.random() + 1)
    if (quemComeca == 2){
        caracter = "X"
    } else {
        caracter = "O"
    }
    while (jogoEmAndamento){
        espaco = parseInt(prompt(`vez do ${caracter}, digite o número do espaço para fazer sua jogada: `))
        posicionar(espaco, caracter)
        mostrarJogo()
        verificarJogo(caracter)
        if (caracter == "X"){
            caracter = "O"
        }
        else {
            caracter = "X"
        }
    }
} 

// boybot
// mostrar os espacos possíveis na rodada
// jogar novamente
// md3
// so aceitar os espacos em numeros inteiros
// arrumar o empate (ta encerrando antes de todas as casas serem usadas)

// git config --global user.email "joaotjmoreira@gmail.com"
// git config --global user.name "joaocarlemo"