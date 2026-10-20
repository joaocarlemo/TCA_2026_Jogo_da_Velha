modoDeJogo = prompt(`Bem-vindo(a) ao jogo da velha.
    Primeiro, selecione o modo de jogo (digite 1 para jogar contra o bot, 
    digite 2 para jogar contra outro jogador no mesmo dispositivo):`)

class linhas {
    espaco1 = "1"; espaco2 = "2"; espaco3 = "3"; espaco4 = "4"; espaco5 = "5"; espaco6 = "6"; espaco7 = "7"; espaco8 = "8"; espaco9 = "9";
}

function posicionar(espaco, caracter){
    if (espaco != ""){
        console.log("essa casa já está ocupada.")
    }
    return espaco = caracter
}
function mostrarJogo(){
    console.log(`
        ${linhas.espaco1} | ${linhas.espaco2} | ${linhas.espaco3}
        ${linhas.espaco4} | ${linhas.espaco5} | ${linhas.espaco6}
        ${linhas.espaco7} | ${linhas.espaco8} | ${linhas.espaco9}`)
}

if (modoDeJogo == 2){
    jogoEmAndamento = true
    while (jogoEmAndamento){
        jogada = prompt(`vez do X, digite o número do espaço para fazer sua jogada: `)
        posicionar(jogada)
        mostrarJogo()
    }
}


// git config --global user.email "joaotjmoreira@gmail.com"
// git config --global user.name "joaocarlemo"