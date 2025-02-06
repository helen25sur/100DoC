const gameData = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]
]

let editedPlayer = 0;
let activePlayer = 0;
let currentRound = 1;
let gameIsOver = false;

const players = [
  {
    name: '',
    symbol: 'X'
  },
  {
    name: '',
    symbol: 'O'
  }
];

const playerConfigDialogElement = document.getElementById('config-user');
const backdropElement = document.querySelector('.backdrop');
const formElement = document.querySelector('form');
const errorsOutput = document.getElementById('config-errors');
const playerTurnElement = document.getElementById('player-turn');
const gameFieldElement = document.getElementById('game-field');
const gameFieldItems = gameFieldElement.querySelectorAll('li.game-field-item');
const activePlayerNameElement = document.getElementById('active-player-name');
const gameOverElement = document.getElementById('game-over');

const editPlayer1BtnElement = document.getElementById('edit-player-1-btn');
const editPlayer2BtnElement = document.getElementById('edit-player-2-btn');
const closeDialogButton = document.getElementById('close-dialog');
const startNewGameBtnElement = document.getElementById('start-game-btn');

editPlayer1BtnElement.addEventListener('click', openPlayerConfig);
editPlayer2BtnElement.addEventListener('click', openPlayerConfig);

closeDialogButton.addEventListener('click', closePlayerConfig);
backdropElement.addEventListener('click', closePlayerConfig);

playerConfigDialogElement.addEventListener("mousedown", closePlayerConfigBackdrop);

formElement.addEventListener('submit', savePlayerConfig);

startNewGameBtnElement.addEventListener('click', startNewGame);

gameFieldItems.forEach(item => {
  item.addEventListener('click', selectGameField);
})