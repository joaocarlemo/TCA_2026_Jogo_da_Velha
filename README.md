# TCA_2026_Jogo_da_Velha
Trabalho de conclusão de ano

Projeto desenvolvido em JavaScript que implementa o jogo da velha, permitindo partidas entre dois jogadores no mesmo dispositivo ou entre um jogador e o computador.

A interação acontece por meio de comandos de entrada e saída, utilizando prompt(), alert() e console.log().

O código foi dividido em funções e uma classe, cada uma responsável por uma parte do funcionamento do jogo. Essa divisão permite organizar melhor a lógica e separar as operações do tabuleiro, as verificações e o controle das partidas.

menu()
É a função responsável pelo menu principal do programa. Ela solicita ao usuário que escolha entre jogar contra o computador, jogar contra outro jogador ou encerrar o jogo.

Dependendo da opção selecionada, chama a função contraObot() ou umContraUm(). O menu permanece em execução enquanto uma opção válida não for selecionada.

calcularRestantes()
Atualiza a variável casasRestantes, removendo a posição que acabou de ser ocupada.

Essa variável armazena as posições disponíveis no tabuleiro em formato de string. A função utiliza os métodos replace() e slice() para remover a posição escolhida e manter a lista atualizada.

posicionar(espaco, caracter)
Responsável por inserir o símbolo do jogador na posição escolhida.

Recebe dois parâmetros:

espaco: número da posição selecionada no tabuleiro.
caracter: símbolo que será inserido, X ou O.
A função utiliza o número da posição para acessar o índice correspondente no array espacos e substituir seu conteúdo pelo símbolo do jogador.

mostrarJogo()
Exibe o estado atual do tabuleiro no console, além de apresentar as posições que ainda estão disponíveis para jogada.

É utilizada durante as partidas para que os jogadores acompanhem as alterações no tabuleiro.

verificarJogo(caracter)
Verifica se o jogador que acabou de realizar uma jogada conseguiu vencer ou se a partida terminou em empate.

A função recebe como parâmetro o símbolo do jogador e verifica todas as oito possibilidades de vitória: três linhas horizontais, três verticais e duas diagonais.

Caso encontre uma sequência de três símbolos iguais, altera a variável jogoEmAndamento para false e informa o vencedor.

Se não houver vencedor, verifica se todas as nove posições estão ocupadas. Caso estejam, encerra a partida e informa o empate.

Ao final, retorna o valor de jogoEmAndamento, indicando se a partida deve continuar.

Classe bot
A classe bot representa o computador durante as partidas contra o jogador.

Possui um construtor que recebe o nível de dificuldade selecionado e dois métodos:

constructor(dificuldade)

Armazena o nível de dificuldade escolhido na propriedade this.dificuldade.

calcularJogada()

Responsável por realizar uma jogada automática. Primeiro, obtém as posições disponíveis a partir da variável casasRestantes. Em seguida, utiliza Math.random() para selecionar aleatoriamente uma dessas posições.

Depois, chama a função posicionar() para inserir o símbolo do computador no tabuleiro.

mostrarJogoBot()

Exibe no console a jogada realizada pelo computador, o tabuleiro atualizado e as posições restantes.

contraObot()
Controla as partidas entre o jogador e o computador.

Primeiro, cria uma instância da classe bot e solicita o nível de dificuldade. Depois, inicializa as variáveis da partida e define aleatoriamente quem começa e qual símbolo será utilizado pelo jogador.

A função possui dois fluxos de execução, dependendo de quem inicia a partida:

Quando o jogador começa, ele realiza sua jogada e, em seguida, o computador executa a dele.
Quando o computador começa, ele realiza sua jogada antes de passar a vez ao jogador.
Em cada turno, o programa atualiza as posições disponíveis, exibe o tabuleiro e verifica se houve vitória ou empate.

Quando a partida termina, pergunta se o usuário deseja jogar novamente. Caso contrário, retorna ao menu principal.

umContraUm()
Controla as partidas entre dois jogadores no mesmo dispositivo.

Inicialmente, verifica se o modo selecionado foi o de dois jogadores. Em seguida, inicializa a partida e define aleatoriamente qual símbolo começa.

Durante o jogo, solicita a posição desejada pelo jogador da vez, valida a escolha e atualiza o tabuleiro.

Após cada jogada, verifica se houve vitória ou empate. Se a partida continuar, alterna o símbolo entre X e O.

Quando o jogo termina, oferece a possibilidade de iniciar uma nova partida ou retornar ao menu principal.

Funcionamento geral
A execução do programa começa pela chamada da função menu().

A partir dela, o usuário escolhe o modo de jogo, que determina qual função será responsável por controlar a partida.

De maneira geral, o funcionamento segue esta sequência:

O menu recebe a opção escolhida pelo usuário.
A função correspondente inicializa a partida.
O jogador ou o computador seleciona uma posição.
A função posicionar() atualiza o tabuleiro.
A função calcularRestantes() atualiza as posições disponíveis.
A função mostrarJogo() ou mostrarJogoBot() exibe o estado atual do tabuleiro.
A função verificarJogo() determina se a partida deve continuar.
Ao finalizar, o programa oferece a opção de jogar novamente ou retornar ao menu.