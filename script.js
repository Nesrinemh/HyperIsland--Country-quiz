// _____________________________________________________
// State variables
// _____________________________________________________
let flagEl = document.querySelector("#flag");
const countryEl = document.querySelector("#country");
const capitalEl = document.querySelector("#capital");
const continentEl = document.querySelector("#continent");
const submitBtn = document.querySelector("#submitBtn");

//create local storage
//pointsystem, varible

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

  let awnsersObj = {
    country: getQuestion.altSpellings,
    capital: getQuestion.capital,
    continent: getQuestion.continents,
  };

  //calling the getData() function returns an object with the awnsers
  return awnsersObj;
}

function makeArrayUppercase(arr) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i].toUpperCase());
  }

  return newArr;
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
  let correctCountry = arrayUppercase(answerObject.country);
  let correctCapital = arrayUppercase(answerObject.capital);
  let correctContinent = arrayUppercase(answerObject.continent);

  let countryInput = countryEl.value.toUpperCase();
  let capitalInput = capitalEl.value.toUpperCase();
  let continentInput = continentEl.value.toUpperCase();

  if (correctCountry.includes(countryInput)) {
    console.log("yaaaaaaay");
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

submitBtn.addEventListener("click", async function (e) {
  e.preventDefault();

  checkAnswers(answerObject);
  answerObject = await getData();
});

// _____________________________________________________
// Timer & Modal
// _____________________________________________________

let seconds = 59;
const modal = document.getElementById("myModal");
const close = document.getElementsByClassName("close")[0];
const modaleBtnEl = document.getElementsByClassName("modal-btn")[0];
let interval = setInterval(function () {
  seconds -= 1;

  let timerEl = document.querySelector("#timer");
  timerEl.textContent = seconds;
  if (seconds === 0) {
    stopTimer();
    console.log("hello");
    modal.style.display = "block";
  }
}, 1000);

function stopTimer() {
  clearInterval(interval);
}

// how to fetch array and object at the same time. and to call loop of object

//if timer runs out, display score modal, store name + point in local storage and append to scoreboard
//Sort scoreboard

modaleBtnEl.onclick = function () {
  modal.style.display = "none";
  window.location.href = "index.html";
};

// how to fetch array and object at the same time. and to call loop of object

// Reset Modal
