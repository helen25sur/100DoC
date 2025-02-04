

function openPlayerConfig() {
  playerConfigDialogElement.showModal();
  backdropElement.style.display = 'block';
}

function closePlayerConfig(evt) {
  console.log(evt.target);
  playerConfigDialogElement.close();
  backdropElement.style.display = 'none';
}

function closePlayerConfigBackdrop(evt) {
  const dialogRect = dialog.getBoundingClientRect();
  if (
    evt.clientX < dialogRect.left ||
    evt.clientX > dialogRect.right ||
    evt.clientY < dialogRect.top ||
    evt.clientY > dialogRect.bottom
  ) {
    playerConfigDialogElement.close(); // ✅ Закриває модалку
  }
}
