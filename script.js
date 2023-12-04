let flagEl = document.querySelector("#flag");
const countryEl = document.querySelector("#country");
const capitalEl = document.querySelector("#capital");
const continentEl = document.querySelector("#continent");

const submitBtn = document.querySelector("#submitBtn");
submitBtn.addEventListener("click", function () {
  checkAnswers();
  getData();
});

async function getData(x) {
  let url = "https://restcountries.com/v3.1/all";
  const response = await fetch(url);
  const data = await response.json();

  let index = Math.round(Math.random() * 250);
  let getQuestion = data[index];
  console.log(getQuestion);
  flagEl.src = getQuestion.flags.png;

  let countryAnswer = getQuestion.altSpellings;
  let capitalAnswer = getQuestion.capital;
  let continentAnswer = getQuestion.continents;

  let answers = [countryAnswer, capitalAnswer, continentAnswer];

  return answers[x];
}
getData();

async function checkAnswers() {
  console.log(await getData([0]));
}

// how to fetch array and object at the same time. and to call loop of object
