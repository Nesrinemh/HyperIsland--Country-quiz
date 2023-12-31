"use strict";
// _____________________________________________________
// State variables
// _____________________________________________________
import { setName, getScoreBoard } from "./storage.js";

const startBtnEl = document.querySelector("#start-btn");
const userNameInputEl = document.querySelector("#userNameInput");
const scoreBoardEl = document.querySelector("#scoreBoard");
const scoreBoard = getScoreBoard();

// _____________________________________________________
// Logic
// _____________________________________________________
let sortedPlayers = (players) => {
	return players.sort((a, b) => {
		return b.score - a.score;
	});
};

let players = sortedPlayers(scoreBoard).slice(0, 6);
if (players.length === 0) {
	let scoreLiEl = document.createElement("li");
	scoreLiEl.innerText = "No results yet!";
} else {
	for (let i = 0; i < players.length; i++) {
		let scoreLiEl = document.createElement("li");
		scoreLiEl.innerText = `${players[i].name} : ${players[i].score}`;
		scoreBoardEl.append(scoreLiEl);
	}
}

// _____________________________________________________
// Event listeners
// _____________________________________________________
startBtnEl.addEventListener("click", function (e) {
	e.preventDefault;
	if (userNameInputEl.value == "") {
		alert(`Please write your Nickname`);
	} else {
		setName(userNameInputEl.value);
		window.location.href = "game.html";
	}
});
