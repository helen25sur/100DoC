const playerConfigDialogElement = document.getElementById('config-user');
const backdropElement = document.querySelector('.backdrop');

const editPlayer1BtnElement = document.getElementById('edit-player-1-btn');
const editPlayer2BtnElement = document.getElementById('edit-player-2-btn');
const closeDialogButton = document.getElementById('close-dialog');

editPlayer1BtnElement.addEventListener('click', openPlayerConfig);
editPlayer2BtnElement.addEventListener('click', openPlayerConfig);

closeDialogButton.addEventListener('click', closePlayerConfig);
backdropElement.addEventListener('click', closePlayerConfig);

playerConfigDialogElement.addEventListener("mousedown", (event) => {
  if (event.target === playerConfigDialogElement) {
    backdropElement.style.display = 'none';
    playerConfigDialogElement.close();
  }
});