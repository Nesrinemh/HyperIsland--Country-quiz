import { setName, getScoreBoard } from './storage.js';

// _____________________________________________________
// State variables
// _____________________________________________________
const startBtnEl = document.querySelector('#start-btn');
const userNameInputEl = document.querySelector('#userNameInput');
let userName;
//create local storage
//pointsystem, variable

//

const scoreBoard = getScoreBoard();
console.log(scoreBoard);

// _____________________________________________________
// Event listeners
// _____________________________________________________

startBtnEl.addEventListener('click', function (e) {
  e.preventDefault;
  if (userNameInputEl.value == '') {
    alert(`Please write your Nickname`);
  } else {
    setName(userNameInputEl.value);
    window.location.href = 'game.html';
  }
});
