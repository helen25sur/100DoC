function openPlayerConfig(evt) {
  const clickedButton = evt.target;
  editedPlayer = +clickedButton.dataset.playerid;
  playerConfigDialogElement.showModal();
  backdropElement.style.display = 'block';
}

function closePlayerConfig() {
  playerConfigDialogElement.close();
  backdropElement.style.display = 'none';
  formElement.firstElementChild.classList.remove('remove');
  errorsOutput.textContent = '';
  formElement.querySelector('input').value = '';
}

function closePlayerConfigBackdrop(evt) {
  if (evt.target === playerConfigDialogElement) {
    closePlayerConfig();
  }
}

function savePlayerConfig(evt) {
  evt.preventDefault();

  const formData = new FormData(evt.target);
  const enteredPlayerName = formData.get('playername').trim();

  if (!enteredPlayerName) {
    evt.target.firstElementChild.classList.add('error');
    errorsOutput.textContent = 'Please enter a valid name!';
    return;
  }

  const updatedPlayerDataElement = document.getElementById(`player-${editedPlayer}-data`);
  updatedPlayerDataElement.querySelector('h3').innerText = enteredPlayerName;
  players[editedPlayer - 1].name = enteredPlayerName;

  closePlayerConfig();
}
