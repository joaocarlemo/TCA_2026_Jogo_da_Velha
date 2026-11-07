function menu(){
    modoDeJogo = prompt(`Bem-vindo(a) ao jogo da velha.\nPrimeiro, selecione o modo de jogo (digite 1 para jogar contra o bot,\ndigite 2 para jogar contra outro jogador no mesmo dispositivo ou digite "sair" para deixar o jogo):`) 

    if (modoDeJogo == 2){
    umContraUm()
    }
    else{
        if (modoDeJogo == 1){
            contraObot()
        }
        if (modoDeJogo == "sair"){
            console.log(`você saiu`)
        }
    }
}

espacos = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]

casasRestantes = ``
function calcularRestantes(){
    for(i = 0; i < espacos.length; i++){
        if((espacos[i] != "X") && (espacos[i] != "X")){
            casasRestantes + ", " + String(espacos[i])
        }
    }
    return casasRestantes
}

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
    console.log(`${espacos[0]} | ${espacos[1]} | ${espacos[2]}\n${espacos[3]} | ${espacos[4]} | ${espacos[5]}\n${espacos[6]} | ${espacos[7]} | ${espacos[8]}`)
    console.log(`casas restantes: ${casasRestantes}`)
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

class boybot{
        
    }

function umContraUm(){
    if (modoDeJogo == 2){
        jogoEmAndamento = true
        mostrarJogo()
        quemComeca = Math.round(Math.random() + 1)
        if (quemComeca == 2){
            caracter = "X"
        } else {
            caracter = "O"
        }
        espaco = ""
        while (jogoEmAndamento){
            while (espaco == ""){
                espaco = parseInt(prompt(`vez do ${caracter}, digite o número do espaço para fazer sua jogada: `))
                if ((espaco != 1) && (espaco != 2) && (espaco != 3) && (espaco != 4) && (espaco != 5) && (espaco != 6) && (espaco != 7) && (espaco != 8) && (espaco != 9)){
                    alert(`digite um espaço válido: `)
                    espaco = ""
                }
            }
            posicionar(espaco, caracter)
            calcularRestantes()
            mostrarJogo()
            verificarJogo(caracter)
            if (caracter == "X"){
                caracter = "O"
            }
            else {
                caracter = "X"
            }
            espaco = ""
            if (jogoEmAndamento == false){
                repetir = prompt(`deseja jogar novamente? (digite 's' para "sim" ou 'n' para "não"): `)
                if (repetir == 's'){
                    espacos = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
                    casasRestantes = ``
                    umContraUm()
                }
                else{
                    espacos = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
                    casasRestantes = ``
                    menu()
                }
                }
            }
        }
    }

function contraObot(){

}

menu()


// boybot
// mostrar os espacos possíveis na rodada
// md3
// arrumar o empate (ta encerrando antes de todas as casas serem usadas)

// git config --global user.email "joaotjmoreira@gmail.com"
// git config --global user.name "joaocarlemo"