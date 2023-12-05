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

async function checkAnswers(answerObject) {
  let correctCountry = answerObject.country.toUpperCase();
  let correctCapital = arrayUppercase(answerObject.capital);
  let correctContinent = arrayUppercase(answerObject.continent);

  console.log(correctCountry);
  console.log(correctContinent);
  console.log(correctCapital);

  let countryInput = countryEl.value.toUpperCase();
  let capitalInput = capitalEl.value.toUpperCase();
  let continentInput = continentEl.value.toUpperCase();

  let score = 0;

  if (correctCountry === countryInput) {
    score += 1;
    //adds a point to varieble
  } else {
    console.log("noo :(");
  }
  if (correctCapital.includes(capitalInput)) {
    console.log("yaaaaaaay");
    //adds a point to varieble
  } else {
    console.log("noo :(");
  }
  if (correctContinent.includes(continentInput)) {
    console.log("yaaaaaaay");
    //adds a point to varieble
  } else {
    console.log("noo :(");
  }
}

// _____________________________________________________
// Event listners
// _____________________________________________________

submitBtnEl.addEventListener("click", async function (e) {
  e.preventDefault();

  checkAnswers(answerObject);
  answerObject = await getData();
});

// _____________________________________________________
// Timer & Modal
// _____________________________________________________

let seconds = 3;
const modal = document.getElementById("myModal");
const close = document.getElementsByClassName("close")[0];
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
        score: 20,
      },
    ];

    setScoreBoard(scoreBoard);

    modal.style.display = "block";
  }
}, 1000);

function stopTimer() {
  clearInterval(interval);
}

// how to fetch array and object at the same time. and to call loop of object

//if timer runs out, display score modal, store name + point in local storage and append to scoreboard
//Sort scoreboard

modalBtnEl.onclick = function () {
  modal.style.display = "none";
  window.location.href = "index.html";
};
