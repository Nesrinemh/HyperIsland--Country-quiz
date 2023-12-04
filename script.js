let flagEl = document.querySelector("#flag");
const countryEl = document.querySelector("#country");
const capitalEl = document.querySelector("#capital");
const continentEl = document.querySelector("#continent");

const submitBtn = document.querySelector("#submitBtn");
submitBtn.addEventListener("click", async function () {
  let awnserObject = await getData();
	checkAnswers(awnserObject);
});

async function getData() {
	let url = "https://restcountries.com/v3.1/all";
	const response = await fetch(url);
	const data = await response.json();

	let index = Math.round(Math.random() * 250);
	let getQuestion = data[index];
	flagEl.src = getQuestion.flags.png;

	let awnsersObj = {
		countryAnswer: getQuestion.altSpellings,
		capitalAnswer: getQuestion.capital,
		continentAnswer: getQuestion.continents,
	};

	return awnsersObj;
}

async function checkAnswers(awnserObject){
  console.log(awnserObject.capitalAnswer)
}

// how to fetch array and object at the same time. and to call loop of object
