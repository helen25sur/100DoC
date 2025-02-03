// Calculate Sum numbers
const buttonCalc = document.querySelector('#calculator button');

const calculateSum = () => {
  const inputCalc = document.getElementById('user-number');
  const sumCalc = document.getElementById('calculated-sum');
  let result = 0;
  for (let i = 0; i <= +inputCalc.value; i++) {
    result += i;
  }
  
  sumCalc.innerText = result;
  sumCalc.style.display = 'block';
}

buttonCalc.addEventListener('click', calculateSum);

// Highlight Links
const highlightButton = document.querySelector('#highlight-links button');

const highlightLinks = () => {
  const links = document.querySelectorAll('#highlight-links a');

  for (const link of links) {
    link.classList.add('highlight');
  }
}

highlightButton.addEventListener('click', highlightLinks);

// Display User  Data
const dummyUserData = {
  name: 'Olena',
  lastName: 'Surilova',
  age: 29
}

const userDataButton = document.querySelector('#user-data button');

const displayUserData = () => {
  const list = document.getElementById('output-user-data');
  list.innerHTML = '';

  for (const prop in dummyUserData) {
    const li = document.createElement('li');
    li.innerText = `${prop.toUpperCase()}: ${dummyUserData[prop]}`;
    list.appendChild(li);
  }
}

userDataButton.addEventListener('click', displayUserData);

// Statistics
const rollDiceButton = document.querySelector('#statistics button');

const rollDice = () => {
  console.log(Math.floor(Math.random() * 6 + 1))
  return Math.floor(Math.random() * 6) + 1;
}

const deriveNumberOfDiceRoll = () => {
  const targetNumberEl = document.getElementById('user-target-number');
  const diceRollsListEl = document.getElementById('dice-rolls');

  const enteredNumber = +document.getElementById('user-target-number').value;
  console.log(enteredNumber);
  diceRollsListEl.innerHTML = '';

  let hasRolledTargetNumber = false;
  let numberOfRolls = 0;
  rollDice();

  while(!hasRolledTargetNumber) {
    const rolledNumber = rollDice();
    numberOfRolls++;

    const newRollListEl = document.createElement('li');
    newRollListEl.innerText = `Roll : ${numberOfRolls} ${rolledNumber}`;
    diceRollsListEl.append(newRollListEl);

    hasRolledTargetNumber = rolledNumber == enteredNumber;    
    console.log('1', rolledNumber);
    console.log(enteredNumber);
  }

  const outputTotalRollsEl = document.getElementById('output-total-rolls');
  const outputTargetNumberEl = document.getElementById('output-target-number');

  outputTargetNumberEl.innerText = enteredNumber;
  outputTotalRollsEl.innerText = numberOfRolls;
}

rollDiceButton.addEventListener('click', deriveNumberOfDiceRoll);