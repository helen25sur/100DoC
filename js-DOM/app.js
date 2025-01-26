const input = document.body.querySelector('#productname');
const counter = document.body.querySelector('#counter');
const startLengthQuery = 66;

input.addEventListener('input', (evt) => {
  console.log(evt.target.value);
  const value = evt.target.value;
  const length = value.length;
  const remainedChars = startLengthQuery - length;
  counter.innerText = remainedChars;
  if (remainedChars <= 0) {
    input.setAttribute('readonly', true);
  } else if (remainedChars <= 10) {
    input.classList.add('highlighted');
    counter.classList.add('highlighted');
  } else if (remainedChars > 10) {
    input.classList.remove('highlighted');
    counter.classList.remove('highlighted');
  }

});

document.body.addEventListener('keydown', (evt) => {
  if (evt.key == 'Backspace' || evt.key == 'Delete' && input.hasAttribute('readonly')) {
    input.removeAttribute('readonly');
    console.log(evt)
  }
})
