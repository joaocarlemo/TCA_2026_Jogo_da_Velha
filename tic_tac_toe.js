modoDeJogo = prompt(`Bem-vindo(a) ao jogo da velha.
    Primeiro, selecione o modo de jogo (digite 1 para jogar contra o bot, 
    digite 2 para jogar contra outro jogador no mesmo dispositivo):`)

if (modoDeJogo == 1){
    class linhas{
        espaco1 = ""; espaco2 = ""; espaco3 = ""; espaco4 = ""; espaco5 = ""; espaco6 = ""; espaco7 = ""; espaco8 = ""; espaco9 = "";
        mostrarJogo(){
            console.log(`
                ${this.espaco1} | ${this.espaco2} | ${this.espaco3}
                ${this.espaco4} | ${this.espaco5} | ${this.espaco6}
                ${this.espaco7} | ${this.espaco8} | ${this.espaco9}`)
        }
        posicionar(espaco, caracter){
            if (espaco != ""){
                console.log("essa casa já está ocupada.")
            }
            return espaco = caracter
        }
    }
    function boyBot(){
        // por níveis de dificuldade
    }
    
    
    jogoEmAndamento = true
}

// git config --global user.email "joaotjmoreira@gmail.com"
// git config --global user.name "joaocarlemo"