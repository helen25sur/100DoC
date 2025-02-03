const input = document.body.querySelector('#productname');
const counter = document.body.querySelector('#counter');
const startLengthQuery = 66;

input.addEventListener('input', (evt) => {
  console.log(evt.target.value);
  const value = evt.target.value;
  const length = value.length;
  const remainedChars = startLengthQuery - length;
  counter.innerText = remainedChars;
  if (remainedChars <= 10) {
    input.classList.add('warning');
    counter.classList.add('warning');
  } else if (remainedChars > 10) {
    input.classList.remove('warning');
    counter.classList.remove('warning');
  }

});
