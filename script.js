// _____________________________________________________
// State variables
// _____________________________________________________
let flagEl = document.querySelector("#flag");
const countryEl = document.querySelector("#country");
const capitalEl = document.querySelector("#capital");
const continentEl = document.querySelector("#continent");
const submitBtn = document.querySelector("#submitBtn");

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

async function checkAnswers(awnserObject) {
	//temporary logs to show how it works :) 
	console.log(awnserObject.country);
	console.log(awnserObject.country[1]);
	
	console.log(awnserObject.capital);
	console.log(awnserObject.continent);
}

// _____________________________________________________
// Event listners
// _____________________________________________________
submitBtn.addEventListener("click", async function () {
	// put the function into a varieble like we said, we can now reach the object answers like this --> awnserObject.country[1] (just like in the check answers)
	//its basically doing this getData().country 
	let awnserObject = await getData();

	//pass that object in to the check awnsers parameter so that we can use the object inside the function
	checkAnswers(awnserObject);
});







// how to fetch array and object at the same time. and to call loop of object
