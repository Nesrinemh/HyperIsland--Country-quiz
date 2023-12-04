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



function makeArrayUppercase(arr) {
	let newArr = [];

	for (let i = 0; i < arr.length; i++) {
		newArr.push(arr[i].toUpperCase())
	}

	return newArr
}
 



async function checkAnswers(awnserObject) {
	let correctContinent = awnserObject.continent;
	console.log(correctContinent.toUpperCase());
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

// timer
let seconds = 59;

let interval = setInterval(function () {
	seconds -= 1;

	let timerEl = document.querySelector("#timer");
	timerEl.textContent = seconds;
	if (seconds == 0) {
		stopTimer();
	}
}, 1000);

function stopTimer() {
	clearInterval(interval);
}

// how to fetch array and object at the same time. and to call loop of object
