import { setName, getScoreBoard } from './storage.js';

// _____________________________________________________
// State variables
// _____________________________________________________
const startBtnEl = document.querySelector('#start-btn');
const userNameInputEl = document.querySelector('#userNameInput');
const scoreBoardEl = document.querySelector('#scoreBoard');
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

let sortedPlayers = (players) => {
  return players.sort((a, b) => {
    return b.score - a.score;
  });
};

console.log(sortedPlayers(scoreBoard));
