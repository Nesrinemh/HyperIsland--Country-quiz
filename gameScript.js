'use strict';
// _____________________________________________________
// State variables
// _____________________________________________________
import { getName, setScoreBoard, getScoreBoard } from './storage.js';

const flagEl = document.querySelector('#flag');
const countryEl = document.querySelector('#country');
const capitalEl = document.querySelector('#capital');
const continentEl = document.querySelector('#continent');
const submitBtnEl = document.querySelector('#submitBtn');
const scoreEl = document.querySelector('#score');
const modal = document.querySelector('#myModal');
const modalBtnEl = document.querySelector('.modal-btn');
const inputsEl = document.querySelectorAll('.gamePage-input');

let soundEl = new Audio('./scoresound.mp3');
let score = 0;
let seconds = 60;
soundEl.volume = 0.1;

// _____________________________________________________
// Rendering
// _____________________________________________________
async function getData() {
  let url = 'https://restcountries.com/v3.1/all';
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

function clearInputs() {
  let allInputs = document.querySelectorAll('input');
  allInputs.forEach((index) => (index.value = ''));

  inputsEl[0].focus();
}

let interval = setInterval(function () {
  seconds -= 1;

  let timerEl = document.querySelector('#timer');
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

    modal.style.display = 'block';
    scoreEl.textContent = `YOUR SCORE: ${score}`;
  }
}, 1000);

function stopTimer() {
  clearInterval(interval);
  soundEl.play();
}

// _____________________________________________________
// Logic
// _____________________________________________________
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

  let countryInput = countryEl.value.toUpperCase();
  let capitalInput = capitalEl.value.toUpperCase();
  let continentInput = continentEl.value.toUpperCase();

  if (
    correctCountry === countryInput ||
    correctCapital.includes(capitalInput) ||
    correctContinent.includes(continentInput)
  ) {
    return score++;
  }
}

// _____________________________________________________
// Event listeners
// _____________________________________________________

submitBtnEl.addEventListener('click', async function (e) {
  e.preventDefault();

  checkAnswers(answerObject);
  answerObject = await getData();
  clearInputs();
});

modalBtnEl.onclick = function () {
  modal.style.display = 'none';
  window.location.href = 'index.html';
};

for (let i = 0; i < inputsEl.length; i++) {
  inputsEl[i].addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      if (document.activeElement === inputsEl[0]) {
        inputsEl[1].focus();
      } else if (document.activeElement === inputsEl[1]) {
        inputsEl[2].focus();
      } else if (document.activeElement === inputsEl[2]) {
        submitBtnEl.click();
      }
    }
  });
}
