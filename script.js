import { setName, getScoreBoard } from "./storage.js";

// _____________________________________________________
// State variables
// _____________________________________________________
const startBtnEl = document.querySelector("#start-btn");
const userNameInputEl = document.querySelector("#userNameInput");
let userName;
//create local storage
//pointsystem, variable

//

const scoreBoard = getScoreBoard();
console.log(scoreBoard);

// _____________________________________________________
// Event listners
// _____________________________________________________

startBtnEl.addEventListener("click", function (e) {
  e.preventDefault;
  if (userNameInputEl.value == "") {
    alert(`Please write your Nickname`);
    startBtnEl.disabled = true;
  } else {
    setName(userNameInputEl.value);
  }
});
