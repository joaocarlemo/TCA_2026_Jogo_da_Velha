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
function verificarJogo(){}
    
if (modoDeJogo == 2){
    jogoEmAndamento = true
    mostrarJogo()
    
    while (jogoEmAndamento){
        caracter = "X"
        espaco = parseInt(prompt(`vez do X, digite o número do espaço para fazer sua jogada: `))
        posicionar(espaco, caracter)
        mostrarJogo()
        verificarJogo()

        caracter = "O"
        espaco = parseInt(prompt(`vez do O, digite o número do espaço para fazer sua jogada: `))
        posicionar(espaco, caracter)
        mostrarJogo()
        verificarJogo()
    }
} 

// mostrar as casas possíveis na rodada

// git config --global user.email "joaotjmoreira@gmail.com"
// git config --global user.name "joaocarlemo"