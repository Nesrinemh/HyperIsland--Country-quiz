"use strict";

import { getName, setScoreBoard, getScoreBoard } from "./storage.js";

console.log(getName());

// _____________________________________________________
// State variables
// _____________________________________________________

const flagEl = document.querySelector("#flag");
const countryEl = document.querySelector("#country");
const capitalEl = document.querySelector("#capital");
const continentEl = document.querySelector("#continent");
const submitBtnEl = document.querySelector("#submitBtn");
const scoreEl = document.querySelector("#score");
let soundEl = new Audio("./scoresound.mp3");
soundEl.volume = 0.1;
// _____________________________________________________
// functions
// _____________________________________________________

async function getData() {
  let url = "https://restcountries.com/v3.1/all";
  const response = await fetch(url);
  const data = await response.json();

  let index = Math.round(Math.random() * 250);
  let getQuestion = data[index];
  flagEl.src = getQuestion.flags.png;

  let answersObj = {
    country: getQuestion.name.common,
    capital: getQuestion.capital,
    continent: getQuestion.continents,
  };
  // console.log(answersObj);
  return answersObj;
}
let answerObject = await getData();

function arrayUppercase(arr) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i].toUpperCase());
  }

  return newArr;
}

let score = 0;

async function checkAnswers(answerObject) {
  let correctCountry = answerObject.country.toUpperCase();
  let correctCapital = arrayUppercase(answerObject.capital);
  let correctContinent = arrayUppercase(answerObject.continent);

  let countryInput = countryEl.value.toUpperCase();
  let capitalInput = capitalEl.value.toUpperCase();
  let continentInput = continentEl.value.toUpperCase();

  if (correctCountry === countryInput) {
    return score++;
  }
  if (correctCapital.includes(capitalInput)) {
    return score++;
  }
  if (correctContinent.includes(continentInput)) {
    return score++;
  }

  console.log(score);
}

function clearInputs() {
  let allInputs = document.querySelectorAll("input");
  console.log(allInputs);
  allInputs.forEach((index) => (index.value = ""));
}

// _____________________________________________________
// Event listeners
// _____________________________________________________

submitBtnEl.addEventListener("click", async function (e) {
  e.preventDefault();

  checkAnswers(answerObject);
  answerObject = await getData();
  clearInputs();
});

// _____________________________________________________
// Timer & Modal
// _____________________________________________________

let seconds = 60;
const modal = document.getElementById("myModal");
const modalBtnEl = document.getElementsByClassName("modal-btn")[0];

let interval = setInterval(function () {
  seconds -= 1;

  let timerEl = document.querySelector("#timer");
  timerEl.textContent = seconds;
  if (seconds === 0) {
    stopTimer();
    let scoreBoard = [
      ...getScoreBoard(),
      {
        name: getName(),
        score,
      },
    ];

    setScoreBoard(scoreBoard);

    modal.style.display = "block";
    scoreEl.textContent = `YOUR SCORE: ${score}`;
  }
}, 1000);

function stopTimer() {
  clearInterval(interval);
  soundEl.play();
}

modalBtnEl.onclick = function () {
  modal.style.display = "none";
  window.location.href = "index.html";
};
