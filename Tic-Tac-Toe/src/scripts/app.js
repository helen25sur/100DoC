let editedPlayer = 0;

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

const editPlayer1BtnElement = document.getElementById('edit-player-1-btn');
const editPlayer2BtnElement = document.getElementById('edit-player-2-btn');
const closeDialogButton = document.getElementById('close-dialog');

editPlayer1BtnElement.addEventListener('click', openPlayerConfig);
editPlayer2BtnElement.addEventListener('click', openPlayerConfig);

closeDialogButton.addEventListener('click', closePlayerConfig);
backdropElement.addEventListener('click', closePlayerConfig);

playerConfigDialogElement.addEventListener("mousedown", closePlayerConfigBackdrop);

formElement.addEventListener('submit', savePlayerConfig);