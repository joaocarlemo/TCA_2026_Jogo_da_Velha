modoDeJogo = prompt(`Bem-vindo(a) ao jogo da velha.
    Primeiro, selecione o modo de jogo (digite 1 para jogar contra o bot, 
    digite 2 para jogar contra outro jogador no mesmo dispositivo):`)

linhas = {
    espaco1: "1", espaco2: "2", espaco3: "3", espaco4: "4", espaco5: "5", espaco6: "6", espaco7: "7", espaco8: "8", espaco9: "9",
    posicionar(espaco, caracter){
        if (espaco == "X" || espaco == "O"){
            console.log("essa casa já está ocupada.")
        }
        else{
            return espaco = caracter
        }
    },
    mostrarJogo(){
        console.log(`
            ${this.espaco1} | ${this.espaco2} | ${this.espaco3}
            ${this.espaco4} | ${this.espaco5} | ${this.espaco6}
            ${this.espaco7} | ${this.espaco8} | ${this.espaco9}`)
    }
}

if (modoDeJogo == 2){
    jogoEmAndamento = true
    linhas.mostrarJogo()
    
    while (jogoEmAndamento){
        caracter = "X"
        espaco = parseInt(prompt(`vez do X, digite o número do espaço para fazer sua jogada: `))
        linhas.posicionar(espaco, caracter)
        linhas.mostrarJogo()
        linhas.verificarJogo()

        caracter = "O"
        espaco = parseInt(prompt(`vez do O, digite o número do espaço para fazer sua jogada: `))
        linhas.posicionar(espaco, caracter)
        linhas.mostrarJogo()
        linhas.verificarJogo()
    }
}


// git config --global user.email "joaotjmoreira@gmail.com"
// git config --global user.name "joaocarlemo"