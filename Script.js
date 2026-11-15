/* Mapeamento - Seleção dos elementos - botões */
const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');

/* Mapeamento dos paragrafos */
const result = document.querySelector('.result');
const myScore = document.querySelector('.my-score span');
const machineScore = document.querySelector('.machine-score span');

/* Variáveis para armazenar a pontuação */
let humanScoreNumber = 0; // Pontuação do humano
let machineScoreNumber = 0; // Pontuação da máquina

// ENUMS - É uma variável para ser utilizada para corrigir e formatar o código de JS e não correr o risco de escrever errado alguma informação.
/* Evita 1º que cometa um erro no meio do caminho e 2º se precisar trocar alguma informação, troca-se dentro da variável */
const GAME_OPTIONS = {
  ROCK: 'rock',
  PAPER: 'paper',
  SCISSORS: 'scissors',
};

/* Event Listeners - Eventos de click */
rockButton.addEventListener('click', () => clickHuman('rock'));
paperButton.addEventListener('click', () => clickHuman('paper'));
scissorsButton.addEventListener('click', () => clickHuman('scissors'));

/* Função para escolha do usuário */
// Recebe a escolha do humano como parâmetro
const clickHuman = (humanChoice) => {
  checkResult(humanChoice, playMachine()); // Chama a função checkResult passando a escolha do humano e a escolha da máquina
};

/* Função para escolha do computador */
const playMachine = () => {
  const choices = [
    GAME_OPTIONS.PAPER, // utilizado os ENUMS
    GAME_OPTIONS.ROCK,
    GAME_OPTIONS.SCISSORS,
  ]; // Opções disponíveis para escolha da máquina
  const randomIndex = Math.floor(Math.random() * 3); // Gera um índice aleatório - Math.floor arredonda para baixo, Math.random() gera um número aleatório entre 0 e 2

  return choices[randomIndex];
};

/* Função para verificar o resultado do jogo */
const checkResult = (humanChoice, machineChoice) => {
  console.log('humano: ' + humanChoice + ' | máquina: ' + machineChoice);

  if (humanChoice === machineChoice) {
    result.textContent = 'Empate!'; // Atualiza o texto do elemento result para indicar empate
  } else if (
    // Utilizado os ENUMS
    (humanChoice === GAME_OPTIONS.PAPER &&
      machineChoice === GAME_OPTIONS.ROCK) ||
    (humanChoice === GAME_OPTIONS.ROCK &&
      machineChoice === GAME_OPTIONS.SCISSORS) ||
    (humanChoice === GAME_OPTIONS.SCISSORS &&
      machineChoice === GAME_OPTIONS.PAPER)
  ) {
    humanScoreNumber++; // Incrementa a pontuação do humano
    myScore.textContent = humanScoreNumber; // Atualiza o texto do elemento myScore com a pontuação atualizada do humano
    result.textContent = 'Você ganhou!'; // Atualiza o texto do elemento result para indicar vitória do humano
  } else {
    machineScoreNumber++; // Incrementa a pontuação da máquina
    machineScore.textContent = machineScoreNumber; // Atualiza o texto do elemento machineScore com a pontuação atualizada da máquina
    result.textContent = 'Você perdeu!'; // Atualiza o texto do elemento result para indicar derrota do humano
  }
};
